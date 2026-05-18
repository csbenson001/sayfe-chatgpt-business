/**
 * Sayfe.ai — Resend email client wrapper.
 *
 * From / Reply-to are env-driven so we can swap the verified domain
 * from `onboarding.sayfe.ai` to `sayfeai.com` once the brand-cohesion
 * tradeoff matters more than speed-to-ship. See build handoff
 * §"Resend Email Templates" for the rationale.
 */

const { Resend } = require('resend');

let _client = null;
function getResend() {
  if (_client) return _client;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY missing');
  _client = new Resend(key);
  return _client;
}

const DEFAULT_FROM =
  process.env.RESEND_FROM_EMAIL || 'Sayfe <hello@onboarding.sayfe.ai>';
const DEFAULT_REPLY_TO = process.env.RESEND_REPLY_TO || 'cbenson@sayfe.ai';

/**
 * sendEmail({ to, subject, html, text, listUnsubscribeUrl })
 */
async function sendEmail({ to, subject, html, text, listUnsubscribeUrl }) {
  const client = getResend();
  const headers = {};
  if (listUnsubscribeUrl) {
    headers['List-Unsubscribe'] = `<${listUnsubscribeUrl}>`;
    headers['List-Unsubscribe-Post'] = 'List-Unsubscribe=One-Click';
  }
  const { data, error } = await client.emails.send({
    from: DEFAULT_FROM,
    to: Array.isArray(to) ? to : [to],
    reply_to: DEFAULT_REPLY_TO,
    subject,
    html,
    text,
    headers,
  });
  if (error) {
    throw new Error(`Resend error: ${error.message || JSON.stringify(error)}`);
  }
  return data;
}

module.exports = { sendEmail, DEFAULT_FROM, DEFAULT_REPLY_TO };
