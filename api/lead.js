/**
 * POST /api/lead — the only way a form submission enters the database.
 * Validates, scores, stores (service role), sends a verification email.
 * Scripts get a 200 and nothing stored (honeypot) or a 400/429.
 */
const crypto = require('crypto');
const G = require('./_gate');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const IP_LIMIT_PER_HOUR = 5;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', G.SITE);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const b = (typeof req.body === 'string' ? safeJson(req.body) : req.body) || {};
  const ua = req.headers['user-agent'] || '';
  const ip = G.clientIp(req);
  const country = (req.headers['x-vercel-ip-country'] || '').toUpperCase();

  // 1. Honeypot: bots fill every field. Pretend success, store nothing.
  if (b.hp_url || b.website_url_confirm) return res.status(200).json({ ok: true });
  // 2. Browser required.
  if (!ua || ua.length < 20) return res.status(400).json({ error: 'bad request' });
  // 3. Email.
  const email = String(b.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return res.status(400).json({ error: 'valid email required' });
  const dom = G.domainOf(email);
  const domClass = G.classifyDomain(dom);

  // 4. Rate limits (per IP per hour, per email per day).
  try {
    const since = new Date(Date.now() - 3600e3).toISOString();
    const ipCount = ip ? await G.sbCount(`leads?ip=eq.${encodeURIComponent(ip)}&created_at=gte.${since}`) : 0;
    if (ipCount >= IP_LIMIT_PER_HOUR) return res.status(429).json({ error: 'too many requests' });
    const day = new Date(Date.now() - 86400e3).toISOString();
    const emailCount = await G.sbCount(`leads?email=eq.${encodeURIComponent(email)}&created_at=gte.${day}&status=neq.rejected`);
    if (emailCount >= 1) return res.status(200).json({ ok: true, duplicate: true });
  } catch (e) { console.error('ratelimit lookup failed', e.message); }

  // 5. Turnstile (only enforced when configured).
  let turnstile = 'unconfigured';
  if (process.env.TURNSTILE_SECRET_KEY) {
    turnstile = 'failed';
    if (b.turnstile_token) {
      try {
        const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: b.turnstile_token, remoteip: ip }) });
        const j = await r.json(); if (j.success) turnstile = 'passed';
      } catch (e) { console.error('turnstile', e.message); }
    }
  }

  // 6. Score.
  const message = String(b.message || '').slice(0, 2000);
  const teamSize = String(b.team_size || '').slice(0, 20);
  const referrer = String(b.referrer || req.headers.referer || '').slice(0, 500);
  const flags = { domain: domClass, country: country || null, turnstile, referrer_fb: /facebook\.com|fb\.com|l\.facebook/i.test(referrer), ua_present: true };
  let score = 0;
  if (domClass === 'business') score += 30; else if (domClass === 'webmail') score -= 20; else if (domClass === 'blocked') score -= 100;
  if (['2-5', '6-10', '2-10'].includes(teamSize)) score += 15; else if (teamSize) score += 5;
  if (message.length >= 40 && message.length <= 600) {
    try { const dup = await G.sbCount(`leads?message=eq.${encodeURIComponent(message)}`); flags.message_dup = dup; if (dup === 0) score += 10; else score -= 20; } catch (_) {}
  }
  if (country === 'US' || country === 'CA') score += 10; else if (country) flags.non_us = true;
  if (!flags.referrer_fb) score += 10; else score -= 10;
  if (turnstile === 'passed') score += 10; else if (turnstile === 'failed') score -= 40;
  const status = score < 0 ? 'rejected' : 'new';
  const verify_token = status === 'new' ? crypto.randomBytes(24).toString('hex') : null;

  // 7. Store.
  let row;
  try {
    const rows = await G.sbJson('leads', { method: 'POST', headers: { 'Prefer': 'return=representation' }, body: JSON.stringify({
      email, name: str(b.name, 120), company: str(b.company, 160), industry: str(b.industry, 60), team_size: teamSize || null,
      phone: str(b.phone, 40), message: message || null, source: str(b.source, 120) || '/api/lead', form_type: str(b.form_type, 40) || 'unknown',
      referrer: referrer || null, page_url: str(b.page_url, 500), user_agent: ua.slice(0, 400), ip: ip || null, country: country || null,
      status, score, flags, verify_token }) });
    row = rows[0];
  } catch (e) { console.error('lead insert failed', e.message); return res.status(500).json({ error: 'could not save' }); }

  if (status === 'rejected') return res.status(200).json({ ok: true });

  // 8. Verification email.
  const link = `${G.SITE}/api/verify?t=${verify_token}`;
  try {
    await G.sendEmail({ to: email, subject: 'Confirm your ChatGPT Business setup request — Sayfe.ai',
      text: `Thanks for your interest in ChatGPT Business through Sayfe.ai.\n\nConfirm your request here: ${link}\n\nOnce confirmed, we review it (usually within one business day) and email your setup link with OpenAI's partner promotion applied: 20% off up to five Standard seats for 48 months.\n\nIf you didn't request this, ignore this email.\n\nSayfe.ai — OpenAI SMB Channel Partner`,
      html: G.page('Confirm your request', `<h1>One click to confirm</h1><p>Thanks for your interest in ChatGPT Business through Sayfe.ai. Confirm your request and we'll review it, usually within one business day, then email your setup link with OpenAI's partner promotion applied: <strong style="color:#fff">20% off up to five Standard seats for 48 months</strong>.</p><a class="btn" href="${link}">Confirm my request</a><p style="margin-top:24px;font-size:.85rem">If you didn't request this, ignore this email. Sayfe.ai is an OpenAI SMB Channel Partner.</p>`) });
  } catch (e) { console.error('verify email failed', e.message); }

  // 9. Notify Chris only for strong leads (digest covers the rest).
  if (score >= 60 && process.env.RESEND_API_KEY) {
    try { await G.sendEmail({ to: process.env.NOTIFY_EMAIL || 'csbenson001@gmail.com', subject: `Strong lead (${score}): ${email}`,
      text: `${email} | ${b.company || ''} | ${teamSize} | ${country} | ${domClass}\n${message}\n\nAwaiting email verification; it will appear in the daily digest once confirmed.` }); } catch (_) {}
  }
  return res.status(200).json({ ok: true, id: row && row.id });
};

function str(v, n) { return v == null ? null : String(v).slice(0, n) || null; }
function safeJson(s) { try { return JSON.parse(s); } catch (_) { return null; } }
