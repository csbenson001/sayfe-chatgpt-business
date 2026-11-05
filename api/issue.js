/**
 * Admin only (X-Admin-Token).
 *  GET  /api/issue            → pending verified leads (the digest view) + vault counts
 *  POST /api/issue {lead_id}  → issue next available code to that lead and email it
 *  POST /api/issue {lead_id, reject:true, reason} → reject without issuing
 */
const G = require('./_gate');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!G.adminOk(req)) return res.status(401).json({ error: 'unauthorized' });

  if (req.method === 'GET') {
    try {
      const pending = await G.sbJson(`leads?status=eq.verified&select=id,email,name,company,industry,team_size,message,source,referrer,country,score,flags,created_at,verified_at&order=score.desc,verified_at.asc&limit=100`);
      const [avail, issued] = await Promise.all([G.sbCount('promo_codes?status=eq.available'), G.sbCount('promo_codes?status=eq.issued')]);
      return res.status(200).json({ pending, codes: { available: avail, issued } });
    } catch (e) { return res.status(500).json({ error: e.message }); }
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const b = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) || {};
  const leadId = String(b.lead_id || '');
  if (!/^[0-9a-f-]{36}$/.test(leadId)) return res.status(400).json({ error: 'lead_id required' });

  if (b.reject) {
    try {
      await G.sbJson(`leads?id=eq.${leadId}`, { method: 'PATCH', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ status: 'rejected', flags_reason: undefined }) });
      await G.sbJson('code_events', { method: 'POST', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ lead_id: leadId, event: 'rejected', actor: b.actor || 'admin', detail: { reason: b.reason || null } }) });
      return res.status(200).json({ ok: true, rejected: leadId });
    } catch (e) { return res.status(500).json({ error: e.message }); }
  }

  let lead;
  try { const rows = await G.sbJson(`leads?id=eq.${leadId}&select=id,email,name,company,status`); lead = rows[0]; } catch (e) { return res.status(500).json({ error: e.message }); }
  if (!lead) return res.status(404).json({ error: 'lead not found' });
  if (lead.status === 'issued') return res.status(409).json({ error: 'already issued' });

  let code;
  try {
    const r = await G.sb('rpc/issue_code', { method: 'POST', body: JSON.stringify({ p_lead: leadId, p_email: lead.email, p_actor: b.actor || 'admin' }) });
    const t = await r.text();
    if (!r.ok) { const m = /ALREADY_ISSUED|LEAD_NOT_VERIFIED|NO_CODES_AVAILABLE|LEAD_NOT_FOUND/.exec(t); return res.status(m && m[0] === 'ALREADY_ISSUED' ? 409 : 422).json({ error: m ? m[0] : t.slice(0, 200) }); }
    code = JSON.parse(t)[0];
  } catch (e) { return res.status(500).json({ error: e.message }); }

  const first = (lead.name || '').split(' ')[0];
  try {
    const mail = await G.sendEmail({ to: lead.email, subject: 'Your ChatGPT Business setup link (20% off up to 5 seats) — Sayfe.ai',
      text: `${first ? 'Hi ' + first + ',' : 'Hello,'}\n\nHere is your ChatGPT Business setup link with OpenAI's partner promotion applied:\n\n${code.code_url}\n\nWhat to expect: the link opens OpenAI's checkout. Choose Standard seats; the first five are billed at 20% off list for 48 months (for example, 4 seats = $80/month instead of $100). Seats beyond five are list price. The link works once, for one workspace, so don't share it.\n\nAfter you've created the workspace, reply to this email and we'll schedule your free onboarding call (SSO, admin setup, your industry Starter Pack).\n\nSayfe.ai — OpenAI SMB Channel Partner\nReply to this email with any question.`,
      html: G.page('Your setup link', `<h1>${first ? 'Hi ' + G.esc(first) + ', here\'s your setup link' : 'Here\'s your setup link'}</h1><p>It opens OpenAI's checkout with the partner promotion applied: <strong style="color:#fff">20% off up to five Standard seats for 48 months</strong> (4 seats = $80/month instead of $100). Seats beyond five are list price.</p><a class="btn" href="${G.esc(code.code_url)}">Set up ChatGPT Business</a><p style="margin-top:20px;font-size:.9rem">This link works once, for one workspace. Please don't share it. After you've created the workspace, reply to this email to schedule your free onboarding call (SSO, admin setup, industry Starter Pack).</p><p style="font-size:.85rem">Sayfe.ai is an OpenAI SMB Channel Partner.</p>`) });
    await G.sbJson('code_events', { method: 'POST', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ code_id: code.code_id, lead_id: leadId, event: 'emailed', actor: 'api', detail: { resend_id: mail.id } }) });
  } catch (e) {
    console.error('code email failed', e.message);
    await G.sbJson('code_events', { method: 'POST', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ code_id: code.code_id, lead_id: leadId, event: 'email_failed', actor: 'api', detail: { error: e.message } }) }).catch(() => {});
    return res.status(502).json({ error: 'code issued but email failed; resend manually', code_id: code.code_id });
  }
  return res.status(200).json({ ok: true, lead_id: leadId, code_id: code.code_id, email: lead.email });
};
