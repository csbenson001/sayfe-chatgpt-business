/**
 * Sayfe.ai — Shared HTML shell + helpers for assessment emails.
 * Deviation from build-handoff §"Resend Email Templates":
 *   The handoff specifies react-email TSX templates. Since this repo
 *   is pure JS / no build step, we render emails as inline-styled
 *   HTML strings (which is what react-email compiles to anyway).
 *   Same Resend-friendly result, no React/JSX/build step required.
 */

const BASE = 'https://sayfeai.com';
const COLORADO_DATE = new Date('2026-06-30T00:00:00Z');
const EU_AI_ACT_DATE = new Date('2026-08-02T00:00:00Z');

function escapeHtml(s) {
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function daysUntil(date, now = new Date()) {
  const ms = date.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

function tierColor(tier) {
  if (tier === 'RED') return '#c62828';
  if (tier === 'YELLOW') return '#f9a825';
  return '#10b981';
}

function tierBadge(tier) {
  return `
    <div style="display:inline-block;background:${tierColor(
      tier
    )};color:#fff;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:8px 18px;border-radius:100px;font-size:13px;">
      ${escapeHtml(tier)} tier
    </div>
  `;
}

function unsubscribeUrl(email) {
  return `${BASE}/api/assessment/unsubscribe?email=${encodeURIComponent(email)}`;
}

function emailShell({ tier, preheader, bodyHtml, ctaUrl, ctaLabel, ps, email }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sayfe.ai</title>
</head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:'Figtree',Helvetica,Arial,sans-serif;color:#0d1b2e;">
<div style="display:none;font-size:1px;color:#fff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(
    preheader || ''
  )}</div>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f7fb;padding:24px 0;">
<tr><td align="center">
  <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(15,52,96,0.08);">
    <tr><td style="background:linear-gradient(135deg,#0a2240 0%,#1a4a7a 100%);color:#fff;padding:32px 36px;">
      <div style="font-size:24px;font-weight:800;letter-spacing:-0.02em;">Sayfe<span style="color:#2d8cf0;">.ai</span></div>
      <div style="opacity:.7;font-size:13px;margin-top:6px;">Official OpenAI SMB Channel Partner</div>
    </td></tr>
    ${
      tier
        ? `<tr><td style="padding:28px 36px 0 36px;text-align:center;">${tierBadge(
            tier
          )}</td></tr>`
        : ''
    }
    <tr><td style="padding:24px 36px 8px 36px;font-size:15px;line-height:1.65;color:#0d1b2e;">
      ${bodyHtml}
    </td></tr>
    ${
      ctaUrl
        ? `<tr><td align="center" style="padding:8px 36px 24px 36px;">
            <a href="${escapeHtml(
              ctaUrl
            )}" style="display:inline-block;background:#0f3460;color:#fff;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:100px;font-size:15px;">${escapeHtml(
            ctaLabel || 'Get Started'
          )}</a>
          </td></tr>`
        : ''
    }
    ${
      ps
        ? `<tr><td style="padding:8px 36px 28px 36px;font-size:13px;color:#5a6a7a;border-top:1px solid #edf0f5;margin-top:12px;">
            <strong>P.S.</strong> ${ps}
          </td></tr>`
        : ''
    }
    <tr><td style="padding:20px 36px;background:#f9f9f9;font-size:12px;color:#5a6a7a;line-height:1.5;">
      You received this email because you completed the AI Compliance Assessment at sayfeai.com.<br>
      Sayfe.ai is operated by Vandelay Consulting Inc. — Houston, TX, USA.<br>
      <a href="${escapeHtml(
        unsubscribeUrl(email || '')
      )}" style="color:#5a6a7a;">Unsubscribe</a> · <a href="${BASE}/privacy" style="color:#5a6a7a;">Privacy</a> · <a href="${BASE}/terms" style="color:#5a6a7a;">Terms</a>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

function ctaUrl(source) {
  return `${BASE}/api/referral?source=${encodeURIComponent(source)}`;
}

function pdfUrl(sessionId, token) {
  return `${BASE}/api/assessment/pdf?sessionId=${encodeURIComponent(
    sessionId
  )}&token=${encodeURIComponent(token)}`;
}

module.exports = {
  BASE,
  COLORADO_DATE,
  EU_AI_ACT_DATE,
  escapeHtml,
  daysUntil,
  tierColor,
  tierBadge,
  unsubscribeUrl,
  emailShell,
  ctaUrl,
  pdfUrl,
};
