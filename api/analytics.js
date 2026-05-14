/**
 * ElevaIQ.com — Analytics Collection Endpoint
 * Vercel Serverless Function
 * 
 * Receives behavioral analytics events from the client-side analytics.js module.
 * Logs to Vercel function logs (viewable in Vercel dashboard).
 * 
 * Future: Connect to Supabase for structured querying.
 */

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    if (!data || !data.visitor_id) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    // Structured log for Vercel dashboard viewing
    console.log(JSON.stringify({
      type: 'EIQ_ANALYTICS',
      visitor_id: data.visitor_id,
      visit_number: data.visit_number,
      page: data.page,
      referrer: data.referrer,
      device: data.device,
      viewport: data.viewport,
      duration_seconds: data.duration,
      scroll_max_pct: data.scroll_max,
      section_engagement: data.section_times,
      form_stage: data.form_stage,
      utms: data.utms,
      event_count: data.events ? data.events.length : 0,
      timestamp: data.timestamp,
      // Key intelligence signals
      is_returning: data.visit_number > 1,
      is_qualified: data.form_stage === 'step2_complete' || data.form_stage === 'success',
      high_engagement: data.duration > 120 || data.scroll_max > 75,
      industries_viewed: data.events
        ? data.events.filter(e => e.t === 'industry_click').map(e => e.industry)
        : [],
      cta_clicks: data.events
        ? data.events.filter(e => e.t === 'cta_click').map(e => ({ text: e.text, section: e.location }))
        : [],
    }));

    // TODO: Supabase integration
    // If Supabase is configured, insert into site_analytics table:
    // const { createClient } = require('@supabase/supabase-js');
    // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    // await supabase.from('site_analytics').insert(data);

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error('Analytics error:', error);
    return res.status(500).json({ error: 'Internal error' });
  }
}
