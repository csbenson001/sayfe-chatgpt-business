/**
 * T+0 — Assessment Report email.
 * Subject: Your AI Compliance Assessment — {tier} tier
 */

const {
  escapeHtml,
  emailShell,
  ctaUrl,
  pdfUrl,
  COLORADO_DATE,
  EU_AI_ACT_DATE,
  daysUntil,
} = require('../lib/assessment/email-shell');

function renderActions(actions) {
  return actions
    .map(
      (a, i) => `
      <div style="margin:18px 0;padding:16px 18px;border-radius:12px;border:1px solid #edf0f5;background:#f9fbfd;">
        <div style="font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#2d8cf0;">Step ${i +
          1}</div>
        <div style="font-size:16px;font-weight:700;margin:6px 0 8px 0;color:#0a2240;">${escapeHtml(
          a.title
        )}</div>
        <div style="font-size:14.5px;line-height:1.65;color:#0d1b2e;white-space:pre-line;">${escapeHtml(
          a.body
        )}</div>
      </div>
    `
    )
    .join('');
}

function buildAssessmentReport({
  firstName,
  email,
  tier,
  summary,
  fullActions,
  sessionId,
  pdfToken,
}) {
  const colorado = daysUntil(COLORADO_DATE);
  const eu = daysUntil(EU_AI_ACT_DATE);
  const ps =
    colorado > 0
      ? `${colorado} days until Colorado's AI Act (SB 24-205) takes effect. ${eu} days until EU AI Act enforcement.`
      : eu > 0
      ? `${eu} days until EU AI Act enforcement.`
      : `Colorado SB 24-205 and the EU AI Act are now both in effect — every day you delay is a fineable day.`;

  const subject = `Your AI Compliance Assessment — ${tier} tier`;
  const preheader = `${tier} tier · 6-step personalized plan inside · ${summary.slice(
    0,
    100
  )}`;

  const bodyHtml = `
    <p style="margin:0 0 12px 0;">Hi ${escapeHtml(firstName) || 'there'},</p>
    <p style="margin:0 0 16px 0;">${escapeHtml(summary)}</p>
    <p style="margin:0 0 16px 0;font-weight:600;">Here's your personalized 6-step compliance plan:</p>
    ${renderActions(fullActions)}
    <p style="margin:22px 0 8px 0;font-size:14px;color:#5a6a7a;">When you're ready to move sensitive workflows off consumer AI, the fastest legitimate path is ChatGPT Business through an authorized partner. We're one — free onboarding, free training, same $20–25/seat as direct.</p>
    <p style="margin:8px 0 4px 0;font-size:13.5px;">
      <a href="${pdfUrl(
        sessionId,
        pdfToken
      )}" style="color:#2d8cf0;font-weight:600;text-decoration:none;">Download this report as a PDF →</a>
    </p>
  `;

  const html = emailShell({
    tier,
    preheader,
    bodyHtml,
    ctaUrl: ctaUrl('assessment-t0'),
    ctaLabel: 'Start ChatGPT Business',
    ps,
    email,
  });

  const text = [
    `Hi ${firstName || 'there'},`,
    '',
    `Your AI Compliance Assessment result: ${tier} tier`,
    '',
    summary,
    '',
    "Your personalized 6-step plan:",
    ...fullActions.map((a, i) => `${i + 1}. ${a.title}\n   ${a.body}`),
    '',
    `Start ChatGPT Business (Sayfe.ai referral): ${ctaUrl('assessment-t0')}`,
    `Download PDF: ${pdfUrl(sessionId, pdfToken)}`,
    '',
    ps,
  ].join('\n');

  return { subject, html, text, preheader };
}

module.exports = { buildAssessmentReport };
