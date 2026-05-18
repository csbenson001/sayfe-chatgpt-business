/**
 * POST /api/assessment/message
 * Advance the conversation by one turn.
 *
 * Request:
 *   { sessionId, userMessage, turnstileToken? }   // token required on turn 1
 * Response:
 *   { assistantMessage, answers, nextQuestion, status, complete }
 */

const {
  setCors,
  handlePreflight,
  methodNotAllowed,
  readJson,
  getClientIp,
} = require('../../lib/assessment/http');
const { getSupabase } = require('../../lib/assessment/supabase');
const { chatTurn } = require('../../lib/assessment/openai');
const { verifyTurnstile } = require('../../lib/assessment/turnstile');
const { QUESTION_ORDER } = require('../../lib/assessment/system-prompt');

function mergeAnswers(existing, extracted) {
  const out = { ...(existing || {}) };
  if (!extracted || typeof extracted !== 'object') return out;
  for (const [k, v] of Object.entries(extracted)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      out[k] = v;
    } else if (typeof v === 'object') {
      out[k] = { ...(out[k] || {}), ...v };
    } else {
      out[k] = v;
    }
  }
  return out;
}

function allAnswered(answers) {
  return QUESTION_ORDER.every((k) => answers && answers[k] !== undefined);
}

module.exports = async function handler(req, res) {
  if (handlePreflight(req, res)) return;
  setCors(res);
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);

  try {
    const body = await readJson(req);
    const { sessionId, userMessage, turnstileToken } = body || {};
    if (!sessionId || typeof userMessage !== 'string' || !userMessage.trim()) {
      return res
        .status(400)
        .json({ error: 'sessionId and userMessage are required' });
    }
    if (userMessage.length > 4000) {
      return res.status(400).json({ error: 'Message too long' });
    }

    const supabase = getSupabase();

    // Load session
    const { data: session, error: loadErr } = await supabase
      .from('assessment_sessions')
      .select('id, status, answers, transcript')
      .eq('id', sessionId)
      .single();
    if (loadErr || !session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    if (session.status === 'complete') {
      return res
        .status(409)
        .json({ error: 'Session already complete', status: 'complete' });
    }

    const transcript = Array.isArray(session.transcript) ? session.transcript : [];

    // Turnstile on the very first user turn
    const isFirstUserTurn = !transcript.some((m) => m.role === 'user');
    if (isFirstUserTurn) {
      const ok = await verifyTurnstile(turnstileToken, getClientIp(req));
      if (!ok) {
        return res
          .status(403)
          .json({ error: 'Bot verification failed. Refresh and try again.' });
      }
    }

    // Append user turn
    transcript.push({
      role: 'user',
      content: userMessage.trim(),
      ts: Date.now(),
    });

    // Ask the model for the next turn
    const result = await chatTurn({ transcript });

    const mergedAnswers = mergeAnswers(session.answers, result.extracted);

    // Append assistant turn
    transcript.push({
      role: 'assistant',
      content: result.reply,
      ts: Date.now(),
    });

    const complete = result.complete === true || allAnswered(mergedAnswers);
    const newStatus = complete ? 'awaiting_submit' : 'in_progress';

    const { error: updateErr } = await supabase
      .from('assessment_sessions')
      .update({
        transcript,
        answers: mergedAnswers,
        status: newStatus,
        industry: mergedAnswers.industry || null,
        size: mergedAnswers.size || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', sessionId);

    if (updateErr) {
      console.error('[message] session update failed:', updateErr);
      return res.status(500).json({ error: 'Could not save turn' });
    }

    return res.status(200).json({
      assistantMessage: result.reply,
      answers: mergedAnswers,
      nextQuestion: complete ? null : result.nextQuestion,
      status: newStatus,
      complete,
    });
  } catch (err) {
    console.error('[message] error:', err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
};
