/**
 * Sayfe.ai — AI Compliance Assessment scoring
 *
 * Pure, deterministic. Given a complete AssessmentAnswers object,
 * returns a risk tier (GREEN | YELLOW | RED) plus a personalized
 * action plan. Same input -> same output. Fully unit-testable.
 *
 * AssessmentAnswers shape:
 *   {
 *     industry: 'healthcare'|'legal'|'financial'|'real-estate'|'construction'|'retail'
 *              |'professional-services'|'manufacturing'|'nonprofit'|'education'|'other',
 *     size: '1'|'2-10'|'11-50'|'51-200'|'201+',
 *     tools: string[], // 'chatgpt-free'|'chatgpt-plus'|'chatgpt-business'|'claude-free'
 *                      // |'claude-business'|'gemini-personal'|'gemini-workspace'
 *                      // |'copilot'|'embedded-ai'|'custom-ai'|'none'|'other'
 *     consequential: {
 *       hiring: boolean, lending: boolean, pricing: boolean,
 *       tenant: boolean, healthcareEd: boolean, insurance: boolean
 *     },
 *     geo: {
 *       colorado: boolean, california: boolean, eu: boolean,
 *       otherRegulated: boolean, none: boolean
 *     },
 *     policy: 'yes'|'partial'|'no',
 *     worry: string
 *   }
 */

const CONSUMER_AI_TOOLS = new Set([
  'chatgpt-free',
  'chatgpt-plus',
  'claude-free',
  'gemini-personal',
]);

function hasConsequentialDecision(a) {
  const c = a.consequential || {};
  return Boolean(
    c.hiring ||
      c.lending ||
      c.pricing ||
      c.tenant ||
      c.healthcareEd ||
      c.insurance
  );
}

function hasRegulatedGeo(a) {
  const g = a.geo || {};
  return Boolean(g.colorado || g.eu || g.california);
}

function usesConsumerAI(a) {
  const tools = Array.isArray(a.tools) ? a.tools : [];
  return tools.some((t) => CONSUMER_AI_TOOLS.has(t));
}

function isOverTen(a) {
  return !['1', '2-10'].includes(a.size);
}

/**
 * scoreAssessment(answers) -> { tier, rationale }
 */
function scoreAssessment(a) {
  const rationale = [];

  const consequential = hasConsequentialDecision(a);
  const regulatedGeo = hasRegulatedGeo(a);
  const noWrittenPolicy = a.policy === 'no';
  const partialPolicy = a.policy === 'partial';
  const consumerAI = usesConsumerAI(a);
  const overTen = isOverTen(a);

  // RED: any consequential decision + (regulated geo OR no policy)
  if (consequential && (regulatedGeo || noWrittenPolicy)) {
    rationale.push(
      'AI touches a consequential decision (hiring, lending, pricing, tenant eligibility, healthcare/education placement, or insurance terms)'
    );
    if (regulatedGeo)
      rationale.push(
        'Exposure to Colorado, California, or EU residents — regulated jurisdictions'
      );
    if (noWrittenPolicy)
      rationale.push('No written AI policy currently on file');
    return { tier: 'RED', rationale };
  }

  // YELLOW: consumer AI + team >10
  if (consumerAI && overTen) {
    rationale.push(
      'Consumer-grade AI (ChatGPT free/Plus or personal Claude/Gemini) in use across a team of 10+'
    );
    if (noWrittenPolicy || partialPolicy)
      rationale.push('No full written AI policy in place');
    return { tier: 'YELLOW', rationale };
  }

  // YELLOW: regulated geo (even without consequential decision)
  if (regulatedGeo) {
    rationale.push(
      'Exposure to Colorado, California, or EU residents — regulated jurisdictions'
    );
    if (noWrittenPolicy || partialPolicy)
      rationale.push('No full written AI policy in place');
    return { tier: 'YELLOW', rationale };
  }

  // YELLOW: mid-size + no full policy
  if ((noWrittenPolicy || partialPolicy) && overTen) {
    rationale.push(
      'Team of 10+ without a full written AI policy — increases inadvertent-exposure risk'
    );
    return { tier: 'YELLOW', rationale };
  }

  // GREEN
  rationale.push(
    'No consequential decisions, no regulated jurisdictions, and team size + tool mix keep exposure low'
  );
  return { tier: 'GREEN', rationale };
}

/* ------------------------------------------------------------------ */
/* Action plan generator                                              */
/* ------------------------------------------------------------------ */

const INDUSTRY_LABEL = {
  healthcare: 'healthcare practice',
  legal: 'law firm',
  financial: 'financial services firm',
  'real-estate': 'real estate business',
  construction: 'construction company',
  retail: 'retail or e-commerce business',
  'professional-services': 'professional services firm',
  manufacturing: 'manufacturing operation',
  nonprofit: 'nonprofit organization',
  education: 'education organization',
  other: 'business',
};

const INDUSTRY_HOTSPOT = {
  healthcare:
    'PHI in any AI prompt. ChatGPT free/Plus is NOT HIPAA-eligible — only ChatGPT Business with a signed BAA is.',
  legal:
    'attorney-client privilege when pasting case facts into consumer chatbots, plus Rule 1.6 confidentiality obligations.',
  financial:
    'SEC/FINRA recordkeeping, suitability obligations, and fair-lending exposure if AI shapes credit or pricing.',
  'real-estate':
    'Fair Housing Act exposure when AI screens tenants or sets rental pricing, and MLS rules about AI-generated listing content.',
  construction:
    'bid-doc accuracy, lien-waiver wording, and OSHA-related copy that vendors blindly paste from ChatGPT.',
  retail:
    'pricing-discrimination claims if AI personalizes prices by ZIP/demographics, and PCI exposure if card data ever lands in a prompt.',
  'professional-services':
    'client confidentiality, work-product accuracy, and professional liability when AI drafts deliverables.',
  manufacturing:
    'IP leakage into consumer AI tools (designs, BOMs, supplier terms) and ITAR/EAR exposure for any export-controlled content.',
  nonprofit:
    'donor PII handling, grant-application authorship disclosures, and beneficiary data in any AI workflow.',
  education:
    'FERPA student-record exposure and state student-data-privacy laws (NY Ed Law 2-d, CA SOPIPA, etc.).',
  other:
    'data confidentiality and any consumer-grade AI tool that processes customer data without a BAA/DPA.',
};

function tierSummary(tier, industryLabel) {
  if (tier === 'RED') {
    return `Your ${industryLabel} is in the highest-risk band today. AI is touching consequential decisions or regulated-jurisdiction residents without the basic guardrails regulators now expect. The good news: every issue on your list is fixable in 30–60 days — most without spending a dollar on legal fees.`;
  }
  if (tier === 'YELLOW') {
    return `Your ${industryLabel} has manageable AI exposure but real gaps — typically the kinds of gaps that turn into headlines when a state AG sends its first letter. None of this is panic territory; it's an afternoon of cleanup plus a one-page policy.`;
  }
  return `Your ${industryLabel} is in the low-risk band. The biggest threat at your size isn't a regulator — it's drifting into YELLOW as you add headcount, new tools, or customers in regulated states. Lock in good habits now and you'll stay here.`;
}

function buildActions(tier, industry, answers) {
  const hotspot = INDUSTRY_HOTSPOT[industry] || INDUSTRY_HOTSPOT.other;
  const consequential = hasConsequentialDecision(answers);
  const regulatedGeo = hasRegulatedGeo(answers);
  const consumerAI = usesConsumerAI(answers);
  const policy = answers.policy;

  // Base 6-step plan personalized by tier + answers
  const actions = [];

  // 1) Inventory
  actions.push({
    title: 'Run a 30-minute AI inventory',
    body:
      'List every AI tool anyone on your team has used in the last 90 days — including the ones baked into your CRM, accounting software, or scheduling tool. Most teams discover 4–6 tools they forgot about. You can\'t govern what you don\'t know exists.',
  });

  // 2) Sensitive data policy
  const dataPolicy =
    tier === 'RED'
      ? `Stop pasting sensitive data into consumer-grade AI immediately. Your industry's hotspot: ${hotspot}`
      : consumerAI
      ? `Move sensitive workflows off ChatGPT free/Plus and onto ChatGPT Business (or another product with a Data Processing Addendum). Hotspot for your industry: ${hotspot}`
      : `Document what counts as "sensitive data" in your business — customer records, employee data, financial details, anything covered by a contract. Hotspot for your industry: ${hotspot}`;
  actions.push({
    title: 'Quarantine the sensitive data',
    body: dataPolicy,
  });

  // 3) Written policy
  let policyAction;
  if (policy === 'no') {
    policyAction =
      'Write a one-page AI Use Policy this week. It only needs five sections: what tools are allowed, what data can never go into them, who reviews AI-generated work that goes to customers, who to ask when in doubt, and what happens when the rule is broken. A one-pager beats a 20-page document nobody reads.';
  } else if (policy === 'partial') {
    policyAction =
      'Upgrade your verbal/partial policy into a one-page written doc. Most "we tell people verbally" policies fall apart the second a new hire starts. Get it in writing, get every employee to sign, refresh every 6 months.';
  } else {
    policyAction =
      'Re-read your existing AI policy with a skeptic\'s eye. Does it name the actual tools in use today, not the ones from 6 months ago? Does it cover embedded AI (CRM, scheduling, etc.)? Is the data-classification section specific enough that an employee actually knows what they can paste?';
  }
  actions.push({ title: 'Get a written AI policy in place', body: policyAction });

  // 4) Consequential decisions
  if (consequential) {
    actions.push({
      title: 'Add human review on every consequential decision',
      body:
        'Any AI-influenced decision about hiring, lending, pricing, tenant eligibility, healthcare/education placement, or insurance must have (a) a documented human reviewer and (b) a logged rationale. Colorado SB 24-205 and the EU AI Act both treat this as the difference between a $0 fine and a $20K+ fine per violation. Don\'t rely on the AI\'s output alone — ever.',
    });
  } else {
    actions.push({
      title: 'Decide what AI will and will NOT touch',
      body:
        'Stay out of the "high-risk" lane on purpose. Write down which categories of decisions AI is allowed to suggest vs. allowed to make. For SMBs at your size, the right answer is almost always "AI drafts, humans decide" on anything customer-facing or HR-related.',
    });
  }

  // 5) Geo / disclosure
  if (regulatedGeo) {
    const geoBits = [];
    if (answers.geo && answers.geo.colorado)
      geoBits.push(
        'Colorado SB 24-205 (June 30, 2026): Notify Colorado residents when an AI made a "consequential decision" about them, and let them appeal.'
      );
    if (answers.geo && answers.geo.california)
      geoBits.push(
        'California: CCPA/CPRA disclosure obligations for automated decision-making plus AB 2013 (training-data transparency for some uses).'
      );
    if (answers.geo && answers.geo.eu)
      geoBits.push(
        'EU AI Act enforcement waves continue through 2026 — even one EU customer can put you in scope for transparency obligations.'
      );
    actions.push({
      title: 'Add the right disclosure language',
      body:
        'Because you serve regulated jurisdictions, add the appropriate disclosures to your website, contracts, and any decision-facing customer comms:\n• ' +
        geoBits.join('\n• '),
    });
  } else {
    actions.push({
      title: 'Add a simple disclosure habit anyway',
      body:
        'Even outside Colorado/CA/EU, a one-liner like "This response was drafted with help from AI and reviewed by [name]" builds customer trust and protects you if regulators expand coverage to your state next year — which is on the calendar in most state legislatures right now.',
    });
  }

  // 6) Vendor + training
  actions.push({
    title: 'Train the people, not the tools',
    body:
      'The single biggest source of risk in SMB AI use is a well-meaning employee pasting something they shouldn\'t. 30 minutes of training (what to paste, what never to paste, who to ask) beats $50K of compliance software. ChatGPT Business through an OpenAI partner like Sayfe.ai includes free onboarding and team training as part of the seat price — use it.',
  });

  return actions;
}

/**
 * generateActionPlan(tier, industry, answers) -> { summary, topActions, fullActions }
 *   - summary: 1-paragraph plain-English explanation of the tier
 *   - topActions: first 2 actions shown free in the chat UI
 *   - fullActions: complete 6-action plan delivered via email + PDF
 */
function generateActionPlan(tier, industry, answers) {
  const industryLabel = INDUSTRY_LABEL[industry] || INDUSTRY_LABEL.other;
  const summary = tierSummary(tier, industryLabel);
  const fullActions = buildActions(tier, industry, answers);
  const topActions = fullActions.slice(0, 2);
  return { summary, topActions, fullActions };
}

module.exports = {
  scoreAssessment,
  generateActionPlan,
  // exported for tests
  hasConsequentialDecision,
  hasRegulatedGeo,
  usesConsumerAI,
  isOverTen,
};
