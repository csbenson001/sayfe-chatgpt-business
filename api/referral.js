/**
 * ElevaIQ.ai — ChatGPT Business Referral Redirect
 * Vercel Serverless Function
 *
 * Server-side redirect to the OpenAI attribution URL.
 * The actual attribution URL is stored in the CHATGPT_ATTRIBUTION_URL
 * environment variable and NEVER exposed in client-side code.
 *
 * This protects against the fraudulent redemption activity
 * described in OpenAI's partner security advisory (May 2026).
 *
 * Usage: GET /api/referral → 302 redirect to chatgpt.com/p/XXXXX
 */

module.exports = async function handler(req, res) {
  // CORS headers (for preflight from tracking scripts)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ATTRIBUTION_URL = process.env.CHATGPT_ATTRIBUTION_URL;

  // If the env var is missing or explicitly set to "disabled", show a fallback
  if (!ATTRIBUTION_URL || ATTRIBUTION_URL === 'disabled') {
    console.warn('CHATGPT_ATTRIBUTION_URL not configured or disabled');
    return res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ChatGPT Business — ElevaIQ.ai</title>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Figtree', system-ui, sans-serif;
            background: #0a2240;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 24px;
            text-align: center;
          }
          .card {
            max-width: 480px;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 20px;
            padding: 48px 36px;
          }
          h1 { font-size: 1.6rem; margin-bottom: 12px; font-weight: 700; }
          p { color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 24px; }
          a {
            display: inline-block;
            background: #2d8cf0;
            color: white;
            padding: 14px 32px;
            border-radius: 100px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.2s;
          }
          a:hover { background: #1a7ae0; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Your setup link is on the way</h1>
          <p>Our team will send you a personalized ChatGPT Business setup link within 1 business day. If you've already submitted your interest form, sit tight — we're preparing your link now.</p>
          <a href="https://elevaiq.com/#get-started">Submit Interest Form</a>
        </div>
      </body>
      </html>
    `);
  }

  // Log the referral click for analytics
  const logData = {
    timestamp: new Date().toISOString(),
    referrer: req.headers.referer || req.headers.referrer || 'direct',
    userAgent: req.headers['user-agent'] || 'unknown',
    ip: req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown',
    source: req.query?.source || 'unknown',
  };
  console.log('ElevaIQ Referral Click:', JSON.stringify(logData));

  // 302 redirect to the attribution URL
  res.setHeader('Location', ATTRIBUTION_URL);
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  return res.status(302).end();
};
