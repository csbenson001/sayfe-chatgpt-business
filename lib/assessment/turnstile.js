/**
 * Sayfe.ai — Cloudflare Turnstile token verification.
 * Returns true if the token is valid for our site key; false otherwise.
 * If TURNSTILE_SECRET_KEY is not configured we treat verification as a no-op
 * and return true — useful for local dev. Production env MUST set the key.
 */

async function verifyTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn(
      '[turnstile] TURNSTILE_SECRET_KEY not set — bypassing verification (dev only)'
    );
    return true;
  }
  if (!token) return false;

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (remoteip) body.append('remoteip', remoteip);

  try {
    const res = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body }
    );
    const data = await res.json();
    return data && data.success === true;
  } catch (e) {
    console.error('[turnstile] verification failed:', e.message);
    return false;
  }
}

module.exports = { verifyTurnstile };
