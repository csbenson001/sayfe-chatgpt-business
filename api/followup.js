/** GET /api/followup (admin) — "did your code work?" email, once, to leads issued 3+ days ago. */
const G = require('./_gate');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!G.adminOk(req)) return res.status(401).json({ error: 'unauthorized' });
  const cutoff = new Date(Date.now() - 3 * 86400e3).toISOString();
  let sent = 0, failed = 0;
  try {
    const due = await G.sbJson(`leads?status=eq.issued&followup_sent_at=is.null&issued_at=lte.${cutoff}&select=id,email,name&limit=50`);
    for (const l of due) {
      const first = (l.name || '').split(' ')[0];
      try {
        await G.sendEmail({ to: l.email, subject: 'Did your ChatGPT Business link work? — Sayfe.ai',
          text: `${first ? 'Hi ' + first + ',' : 'Hello,'}\n\nQuick check: were you able to set up your ChatGPT Business workspace with the link we sent? A one-word reply ("yes" or "not yet") helps us keep our records straight with OpenAI.\n\nIf it didn't work or you have questions about seats, SSO or onboarding, just reply and we'll sort it out.\n\nSayfe.ai — OpenAI SMB Channel Partner` });
        await G.sbJson(`leads?id=eq.${l.id}`, { method: 'PATCH', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ followup_sent_at: new Date().toISOString() }) });
        sent++;
      } catch (e) { failed++; console.error('followup', l.id, e.message); }
    }
    return res.status(200).json({ ok: true, sent, failed });
  } catch (e) { return res.status(500).json({ error: e.message }); }
};
