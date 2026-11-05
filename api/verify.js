/** GET /api/verify?t=TOKEN — confirms the requester's email. Idempotent. */
const G = require('./_gate');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const t = String((req.query && req.query.t) || '');
  if (!/^[a-f0-9]{48}$/.test(t)) return res.status(400).send(G.page('Invalid link', '<h1>That link isn\'t valid</h1><p>Please use the link from your confirmation email, or request again from the site.</p><a class="btn" href="/get-started">Back to Get Started</a>'));
  try {
    const rows = await G.sbJson(`leads?verify_token=eq.${t}&select=id,status,verified_at,email`);
    if (!rows.length) return res.status(404).send(G.page('Not found', '<h1>We couldn\'t find that request</h1><p>Please request again from the site.</p><a class="btn" href="/get-started">Back to Get Started</a>'));
    const lead = rows[0];
    if (lead.status === 'new') {
      await G.sbJson(`leads?id=eq.${lead.id}`, { method: 'PATCH', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ status: 'verified', verified_at: new Date().toISOString() }) });
      await G.sbJson('code_events', { method: 'POST', headers: { 'Prefer': 'return=minimal' }, body: JSON.stringify({ lead_id: lead.id, event: 'verified', actor: 'customer' }) });
    }
    const msg = lead.status === 'issued' ? 'Your setup link has already been sent. Check your inbox (and spam folder).' : 'We review requests within one business day and email your setup link with OpenAI\'s partner promotion applied: 20% off up to five ChatGPT Business Standard seats for 48 months.';
    return res.status(200).send(G.page('Request confirmed', `<h1>Thanks, you're confirmed</h1><p>${msg}</p><p style="font-size:.9rem">Questions? Reply to the email you received. Sayfe.ai is an OpenAI SMB Channel Partner.</p><a class="btn" href="/">Back to Sayfe.ai</a>`));
  } catch (e) {
    console.error('verify failed', e.message);
    return res.status(500).send(G.page('Error', '<h1>Something went wrong</h1><p>Please try the link again in a minute.</p>'));
  }
};
