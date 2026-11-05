/**
 * Sayfe.ai — shared helpers for the promo-code gate (server-side only).
 * Never import this from client code. Codes and keys never leave the server.
 */
const crypto = require('crypto');

const SB_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
const SITE = (process.env.SITE_URL || 'https://sayfeai.com').replace(/\/$/, '');
const FROM = 'Sayfe.ai <onboarding@onboarding.sayfe.ai>';
const REPLY_TO = process.env.NOTIFY_EMAIL || 'csbenson001@gmail.com';

const WEBMAIL = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','live.com','aol.com','icloud.com','me.com','msn.com','proton.me','protonmail.com','zohomail.com','zoho.com','qq.com','163.com','126.com','yandex.com','mail.com','gmx.com','ymail.com']);
const BLOCKLIST = ['joinnepi.org','amazo.de5.net','nidi.cc.cd','nvdi.us.ci','bookskidssucceed.org','aefde.org','pkppkq.bond','gihb.cc.cd','aemzon.cc.cd','dpdns.org'];
const BLOCK_TLD = /\.(cd|ci|bond|xyz|top|icu|cfd|sbs|buzz|click|rest)$/i;
const DISPOSABLE = /(mailinator|guerrillamail|10minutemail|tempmail|temp-mail|yopmail|trashmail|sharklasers|getnada|dispostable|fakeinbox|maildrop|throwaway)/i;

function sb(path, opts = {}) {
  if (!SB_URL || !SB_KEY) throw new Error('Supabase server credentials not configured');
  return fetch(`${SB_URL}/rest/v1/${path}`, {
    ...opts,
    headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}`, 'Content-Type': 'application/json', ...(opts.headers || {}) },
  });
}
async function sbJson(path, opts) { const r = await sb(path, opts); const t = await r.text(); if (!r.ok) throw new Error(`supabase ${r.status}: ${t.slice(0, 300)}`); return t ? JSON.parse(t) : null; }
async function sbCount(path) { const r = await sb(path, { method: 'HEAD', headers: { 'Prefer': 'count=exact' } }); const cr = r.headers.get('content-range') || ''; return parseInt(cr.split('/')[1] || '0', 10) || 0; }

async function sendEmail({ to, subject, html, text }) {
  const key = process.env.RESEND_API_KEY; if (!key) throw new Error('RESEND_API_KEY not configured');
  const r = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
    body: JSON.stringify({ from: FROM, to: [to], reply_to: REPLY_TO, subject, html, text }) });
  const body = await r.text(); if (!r.ok) throw new Error(`resend ${r.status}: ${body.slice(0, 300)}`); return JSON.parse(body);
}

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function same(a, b) { return !!a && !!b && a.length === b.length && crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b)); }
function adminOk(req) {
  const h = req.headers['x-admin-token'] || (req.query && req.query.token) || '';
  if (same(h, process.env.LEAD_ADMIN_TOKEN)) return true;
  const bearer = (req.headers['authorization'] || '').replace(/^Bearer\s+/i, '');
  return same(bearer, process.env.CRON_SECRET); // Vercel Cron
}
function clientIp(req) { return ((req.headers['x-forwarded-for'] || '').split(',')[0] || req.socket?.remoteAddress || '').trim(); }
function domainOf(email) { return (email.split('@')[1] || '').toLowerCase(); }

function classifyDomain(dom) {
  if (!dom) return 'invalid';
  if (BLOCKLIST.some(b => dom === b || dom.endsWith('.' + b)) || BLOCK_TLD.test(dom) || DISPOSABLE.test(dom)) return 'blocked';
  if (WEBMAIL.has(dom)) return 'webmail';
  return 'business';
}

function page(title, body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} — Sayfe.ai</title><meta name="robots" content="noindex">
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Figtree',system-ui,sans-serif;background:#0a2240;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;text-align:center}.card{max-width:520px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:48px 36px}h1{font-size:1.6rem;margin-bottom:12px}p{color:rgba(255,255,255,.7);line-height:1.7;margin-bottom:16px}a.btn{display:inline-block;background:#2d8cf0;color:#fff;padding:14px 32px;border-radius:100px;text-decoration:none;font-weight:600;margin-top:8px}</style></head>
<body><div class="card">${body}</div></body></html>`;
}

module.exports = { sb, sbJson, sbCount, sendEmail, esc, adminOk, clientIp, domainOf, classifyDomain, page, SITE, WEBMAIL };
