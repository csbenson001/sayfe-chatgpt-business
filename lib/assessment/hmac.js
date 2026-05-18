/**
 * Sayfe.ai — HMAC helper for signed PDF URLs.
 * Used so /api/assessment/pdf?sessionId=X&token=Y can only be opened
 * by someone who possesses a token Sayfe generated. Stateless, no
 * extra DB lookup per render.
 */

const crypto = require('crypto');

function getSecret() {
  const s = process.env.PDF_SIGNING_SECRET;
  if (!s) throw new Error('PDF_SIGNING_SECRET missing');
  return s;
}

function signSessionId(sessionId) {
  return crypto
    .createHmac('sha256', getSecret())
    .update(String(sessionId))
    .digest('hex');
}

function verifySessionToken(sessionId, token) {
  if (!sessionId || !token) return false;
  const expected = signSessionId(sessionId);
  // constant-time compare
  const a = Buffer.from(token, 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

module.exports = { signSessionId, verifySessionToken };
