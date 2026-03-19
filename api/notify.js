/**
 * ElevaIQ.ai — Lead Notification API
 * Vercel Serverless Function
 * Sends email notification via Resend when a new lead is captured
 */

module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const NOTIFY_EMAIL = 'cbenson@sayfe.ai';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const lead = req.body;

    // Build a clean email body
    const formType = lead.form_type || 'Unknown';
    const formTypeLabel = {
      'quick_signup': 'Quick Signup',
      'quick_signup_qualified': 'Qualified Lead (Step 2)',
      'enterprise': 'Enterprise Inquiry',
      'contact': 'Contact Form',
      'free_guide': 'Free Guide Download',
      'newsletter': 'Newsletter Signup',
      'industry_cta': 'Industry Page CTA',
    }[formType] || formType;

    const industryTag = lead.industry ? ` [${lead.industry}]` : '';
    const subject = `New ElevaIQ Lead: ${formTypeLabel}${industryTag} — ${lead.email}`;

    // Build HTML email
    const rows = [];
    if (lead.name) rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.name)}</td></tr>`);
    rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>`);
    if (lead.company) rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Company</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.company)}</td></tr>`);
    if (lead.industry) rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Industry</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.industry)}</td></tr>`);
    if (lead.team_size) rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Team Size</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.team_size)}</td></tr>`);
    if (lead.phone) rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.phone)}</td></tr>`);
    if (lead.message) rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.message)}</td></tr>`);
    rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;border-bottom:1px solid #e8eef6;">Source</td><td style="padding:8px 12px;border-bottom:1px solid #e8eef6;">${escapeHtml(lead.source || 'Unknown')}</td></tr>`);
    rows.push(`<tr><td style="padding:8px 12px;font-weight:bold;color:#0f3460;">Form Type</td><td style="padding:8px 12px;">${escapeHtml(formTypeLabel)}</td></tr>`);

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0f3460;padding:20px 24px;border-radius:12px 12px 0 0;">
          <h1 style="color:white;font-size:18px;margin:0;">New Lead Captured</h1>
          <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:4px 0 0;">ElevaIQ.ai — ${formTypeLabel}</p>
        </div>
        <div style="border:1px solid #e8eef6;border-top:none;border-radius:0 0 12px 12px;overflow:hidden;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${rows.join('\n')}
          </table>
        </div>
        <p style="text-align:center;color:#999;font-size:12px;margin-top:16px;">
          View all leads in <a href="https://supabase.com/dashboard" style="color:#2d8cf0;">Supabase Dashboard</a>
        </p>
      </div>
    `;

    // Send via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'ElevaIQ Leads <onboarding@resend.dev>',
        to: [NOTIFY_EMAIL],
        subject: subject,
        html: htmlBody
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const error = await response.text();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send notification' });
    }
  } catch (err) {
    console.error('Notification error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
