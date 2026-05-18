/**
 * Sayfe.ai — Thin OpenAI Chat Completions wrapper for the assessment agent.
 *
 * Deviation from build-handoff §"Agent System Prompt":
 *   The handoff suggested OpenAI Assistants API. We use Chat Completions
 *   directly because (a) there's no benefit to a stateful Assistant when
 *   the full transcript already lives in our Supabase row, (b) Assistants
 *   v2 requires pre-provisioning an OPENAI_ASSISTANT_ID, and (c) Chat
 *   Completions is the simpler, cheaper, faster path for a 7-turn flow.
 *   Same system prompt, same temperature (0.4) — functionally identical.
 *
 * Default model is GPT-5.5-instant per knowledge update — but we read
 * OPENAI_MODEL from env so it's a one-config swap.
 */

const { SYSTEM_PROMPT } = require('./system-prompt');

const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-5.5-instant';
const TEMPERATURE = 0.4;
const MAX_TOKENS = 600;

async function chatTurn({ transcript }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY missing');

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...transcript.map((m) => ({ role: m.role, content: m.content })),
  ];

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      messages,
      temperature: TEMPERATURE,
      max_tokens: MAX_TOKENS,
      response_format: { type: 'json_object' },
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 400)}`);
  }

  const data = await res.json();
  const raw = data?.choices?.[0]?.message?.content || '{}';

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    // Model returned non-JSON despite response_format. Fall back gracefully.
    parsed = {
      reply: raw,
      extracted: {},
      nextQuestion: null,
      complete: false,
    };
  }

  // Defensive shape coercion
  return {
    reply: typeof parsed.reply === 'string' ? parsed.reply : '',
    extracted:
      parsed.extracted && typeof parsed.extracted === 'object'
        ? parsed.extracted
        : {},
    nextQuestion:
      typeof parsed.nextQuestion === 'string' ? parsed.nextQuestion : null,
    complete: parsed.complete === true,
  };
}

module.exports = { chatTurn };
