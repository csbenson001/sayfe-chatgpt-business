/**
 * POST /api/assessment/session
 * Create a new assessment session, or resume an existing one.
 *
 * Request:  { sessionId?: string, utm?: {source,medium,campaign}, referrer?: string }
 * Response: { sessionId, messages, answers, status, openingMessage? }
 */

const {
  setCors,
  handlePreflight,
  methodNotAllowed,
  readJson,
  getClientIp,
  getGeoCountry,
} = require('../../lib/assessment/http');
const { getSupabase } = require('../../lib/assessment/supabase');

const OPENING_MESSAGE =
  "Hi — I'm Sayfe. I'll ask you 7 quick questions and give you a personalized AI compliance plan in under 5 minutes. No calls, no upsells. Ready?";

module.exports = async function handler(req, res) {
  if (handlePreflight(req, res)) return;
  setCors(res);
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  try {
    const body = await readJson(req);
    const supabase = getSupabase();

    // Resume
    if (body.sessionId) {
      const { data, error } = await supabase
        .from('assessment_sessions')
        .select(
          'id, status, answers, transcript, tier, tier_rationale, industry, size'
        )
        .eq('id', body.sessionId)
        .single();

      if (error || !data) {
        return res.status(404).json({ error: 'Session not found' });
      }
      return res.status(200).json({
        sessionId: data.id,
        messages: data.transcript || [],
        answers: data.answers || {},
        status: data.status,
        tier: data.tier || null,
      });
    }

    // Create
    const userAgent = req.headers['user-agent'] || null;
    const referrer = body.referrer || req.headers['referer'] || null;
    const utm = body.utm || {};
    const ipCountry = getGeoCountry(req);

    const openingTurn = {
      role: 'assistant',
      content: OPENING_MESSAGE,
      ts: Date.now(),
    };

    const { data, error } = await supabase
      .from('assessment_sessions')
      .insert({
        user_agent: userAgent,
        ip_country: ipCountry,
        referrer,
        utm_source: utm.source || null,
        utm_medium: utm.medium || null,
        utm_campaign: utm.campaign || null,
        status: 'in_progress',
        answers: {},
        transcript: [openingTurn],
      })
      .select('id, status, answers, transcript')
      .single();

    if (error) {
      console.error('[session] insert failed:', error);
      return res.status(500).json({ error: 'Could not create session' });
    }

    return res.status(200).json({
      sessionId: data.id,
      messages: data.transcript,
      answers: data.answers,
      status: data.status,
      openingMessage: OPENING_MESSAGE,
    });
  } catch (err) {
    console.error('[session] error:', err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
};
