/**
 * Sayfe.ai Lead Capture Module
 * Connects all site forms to Supabase
 *
 * All submissions go through /api/lead (server-side validation, bot checks, scoring).
 * No database credentials live in this file.
 */


/**
 * Submit a lead to Supabase
 * @param {Object} leadData - The lead data to submit
 * @param {string} leadData.email - Required: email address
 * @param {string} [leadData.name] - Optional: full name
 * @param {string} [leadData.company] - Optional: company name
 * @param {string} [leadData.industry] - Optional: industry vertical
 * @param {string} [leadData.team_size] - Optional: team size
 * @param {string} [leadData.phone] - Optional: phone number
 * @param {string} [leadData.message] - Optional: message/notes
 * @param {string} [leadData.source] - Where the lead came from (page/form)
 * @param {string} [leadData.form_type] - Type of form (quick_signup, contact, free_guide, newsletter)
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function submitLead(leadData) {
  try {
    const hp = document.querySelector('input[name="hp_url"]');
    const payload = {
      email: leadData.email,
      name: leadData.name || null,
      company: leadData.company || null,
      industry: leadData.industry || null,
      team_size: leadData.team_size || null,
      phone: leadData.phone || null,
      message: leadData.message || null,
      source: leadData.source || window.location.pathname,
      form_type: leadData.form_type || 'unknown',
      referrer: document.referrer || null,
      page_url: window.location.href,
      hp_url: hp ? hp.value : '',
      turnstile_token: (window.__sayfeTurnstileToken || null)
    };
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      return { success: true };
    }
    if (response.status === 429) return { success: false, error: 'Too many requests. Please try again later.' };
    const errorText = await response.text();
    console.error('[Sayfe.ai] Lead API error:', response.status, errorText);
    return { success: false, error: 'Please check your email address and try again.' };
  } catch (err) {
    console.error('[Sayfe.ai] Network error:', err);
    return { success: false, error: 'Network error. Please try again.' };
  }
}

// Honeypot: an off-screen field humans never see. Bots that fill every input reveal themselves.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form').forEach(function (f) {
    if (f.querySelector('input[name="hp_url"]')) return;
    const i = document.createElement('input');
    i.type = 'text'; i.name = 'hp_url'; i.tabIndex = -1; i.autocomplete = 'off'; i.setAttribute('aria-hidden', 'true');
    i.style.cssText = 'position:absolute;left:-9999px;top:-9999px;height:0;width:0;opacity:0';
    f.appendChild(i);
  });
  // Cloudflare Turnstile (optional): set window.SAYFE_TURNSTILE_SITE_KEY before this script to enable.
  if (window.SAYFE_TURNSTILE_SITE_KEY) {
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'; s.async = true;
    s.onload = function () {
      const d = document.createElement('div'); d.style.display = 'none'; document.body.appendChild(d);
      window.turnstile.render(d, { sitekey: window.SAYFE_TURNSTILE_SITE_KEY, size: 'invisible', callback: function (t) { window.__sayfeTurnstileToken = t; } });
    };
    document.head.appendChild(s);
  }
});

/**
 * Subscribe to newsletter (email only)
 */
async function submitNewsletter(email) {
  return submitLead({
    email: email,
    form_type: 'newsletter',
    source: window.location.pathname
  });
}

/**
 * Quick signup from hero/CTA forms
 */
async function submitQuickSignup(email, teamSize) {
  return submitLead({
    email: email,
    team_size: teamSize || null,
    form_type: 'quick_signup',
    source: window.location.pathname
  });
}

/**
 * Free guide download form
 */
async function submitFreeGuide(name, email, industry) {
  return submitLead({
    name: name,
    email: email,
    industry: industry || null,
    form_type: 'free_guide',
    source: '/free-guide'
  });
}

/**
 * Full contact form
 */
async function submitContactForm(data) {
  return submitLead({
    ...data,
    form_type: 'contact',
    source: '/contact'
  });
}

/**
 * Industry page CTA form
 */
async function submitIndustryCTA(email, industry) {
  return submitLead({
    email: email,
    industry: industry,
    form_type: 'industry_cta',
    source: window.location.pathname
  });
}

// Make functions available globally
window.Sayfe = {
  submitLead,
  submitNewsletter,
  submitQuickSignup,
  submitFreeGuide,
  submitContactForm,
  submitIndustryCTA
};
