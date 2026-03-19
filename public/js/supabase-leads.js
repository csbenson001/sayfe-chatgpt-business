/**
 * ElevaIQ.ai Lead Capture Module
 * Connects all site forms to Supabase
 *
 * SETUP: Replace SUPABASE_URL and SUPABASE_ANON_KEY with your actual values
 */

const SUPABASE_URL = 'https://pivhfcdvimwerxluxjnd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdmhmY2R2aW13ZXJ4bHV4am5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTU5ODIsImV4cCI6MjA4OTQ5MTk4Mn0.skzOowU4Tshy9PRN62ELaxGUxmmSpr-zQ5sPiiazsmI';

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
  // Don't submit if Supabase isn't configured yet
  if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
    console.log('[ElevaIQ] Supabase not configured yet. Lead data:', leadData);
    return { success: true, message: 'Demo mode - Supabase not configured' };
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
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
        user_agent: navigator.userAgent,
        created_at: new Date().toISOString()
      })
    });

    if (response.ok || response.status === 201) {
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error('[ElevaIQ] Supabase error:', response.status, errorText);
      return { success: false, error: `Server error: ${response.status}` };
    }
  } catch (err) {
    console.error('[ElevaIQ] Network error:', err);
    return { success: false, error: 'Network error. Please try again.' };
  }
}

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
window.ElevaIQ = {
  submitLead,
  submitNewsletter,
  submitQuickSignup,
  submitFreeGuide,
  submitContactForm,
  submitIndustryCTA
};
