/**
 * POST /api/assessment/score
 * Compute the risk tier from the session's collected answers. Pure;
 * does not call OpenAI. Idempotent.
 *
 * Request:  { sessionId }
 * Response: { tier, summary, topActions, fullActions, rationale }
 */

const {
  setCors,
  handlePreflight,
  methodNotAllowed,
  readJson,
} = require('../../lib/assessment/http');
const { getSupabase } = require('../../lib/assessment/supabase');
const {
  scoreAssessment,
  generateActionPlan,
} = require('../../lib/assessment/scoring');
const { QUESTION_ORDER } = require('../../lib/assessment/system-prompt');

function allAnswered(answers) {
  return QUESTION_ORDER.every((k) => answers && answers[k] !== undefined);
}

module.exports = async function handler(req, res) {
  if (handlePreflight(req, res)) return;
  setCors(res);
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  try {
    const body = await readJson(req);
    const { sessionId } = body || {};
    if (!sessionId) {
      return res.status(400).json({ error: 'sessionId required' });
    }

    const supabase = getSupabase();
    const { data: session, error: loadErr } = await supabase
      .from('assessment_sessions')
      .select('id, status, answers, tier, tier_rationale')
      .eq('id', sessionId)
      .single();

    if (loadErr || !session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    const answers = session.answers || {};
    if (!allAnswered(answers)) {
      return res
        .status(400)
        .json({ error: 'Not all questions answered yet', answers });
    }

    const { tier, rationale } = scoreAssessment(answers);
    const { summary, topActions, fullActions } = generateActionPlan(
      tier,
      answers.industry || 'other',
      answers
    );

    // Persist tier
    const { error: upd } = await supabase
      .from('assessment_sessions')
      .update({
        tier,
        tier_rationale: rationale,
        status: 'awaiting_submit',
        updated_at: new Date().toISOString(),
      })
      .eq('id', sessionId);
    if (upd) {
      console.error('[score] update failed:', upd);
    }

    return res.status(200).json({
      tier,
      summary,
      topActions,
      fullActions,
      rationale,
    });
  } catch (err) {
    console.error('[score] error:', err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
};
