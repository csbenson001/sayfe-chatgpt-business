import { describe, test, expect } from 'vitest';
import { scoreAssessment } from './scoring.js';

describe('scoreAssessment', () => {
  test('Healthcare practice in CO, 12 employees, no policy, AI in scheduling = RED', () => {
    const result = scoreAssessment({
      industry: 'healthcare',
      size: '11-50',
      tools: ['chatgpt-business', 'embedded-ai'],
      consequential: {
        hiring: false,
        lending: false,
        pricing: false,
        tenant: false,
        healthcareEd: true,
        insurance: false,
      },
      geo: {
        colorado: true,
        california: false,
        eu: false,
        otherRegulated: false,
        none: false,
      },
      policy: 'no',
      worry: 'HIPAA exposure',
    });
    expect(result.tier).toBe('RED');
  });

  test('Solo blogger, ChatGPT for drafting, no consequential decisions, no regulated geo = GREEN', () => {
    const result = scoreAssessment({
      industry: 'other',
      size: '1',
      tools: ['chatgpt-plus'],
      consequential: {
        hiring: false,
        lending: false,
        pricing: false,
        tenant: false,
        healthcareEd: false,
        insurance: false,
      },
      geo: {
        colorado: false,
        california: false,
        eu: false,
        otherRegulated: false,
        none: true,
      },
      policy: 'no',
      worry: '',
    });
    expect(result.tier).toBe('GREEN');
  });

  test('Construction company 25 employees, free ChatGPT for proposals, no policy = YELLOW', () => {
    const result = scoreAssessment({
      industry: 'construction',
      size: '11-50',
      tools: ['chatgpt-free'],
      consequential: {
        hiring: false,
        lending: false,
        pricing: false,
        tenant: false,
        healthcareEd: false,
        insurance: false,
      },
      geo: {
        colorado: false,
        california: false,
        eu: false,
        otherRegulated: false,
        none: true,
      },
      policy: 'no',
      worry: 'team using ChatGPT without rules',
    });
    expect(result.tier).toBe('YELLOW');
  });

  test('CA-only law firm, no AI in case decisions, written policy = YELLOW (geo)', () => {
    const result = scoreAssessment({
      industry: 'legal',
      size: '11-50',
      tools: ['chatgpt-business'],
      consequential: {
        hiring: false,
        lending: false,
        pricing: false,
        tenant: false,
        healthcareEd: false,
        insurance: false,
      },
      geo: {
        colorado: false,
        california: true,
        eu: false,
        otherRegulated: false,
        none: false,
      },
      policy: 'yes',
      worry: '',
    });
    expect(result.tier).toBe('YELLOW');
  });

  test('Lending fintech 80 employees with AI scoring, EU customers, no policy = RED', () => {
    const result = scoreAssessment({
      industry: 'financial',
      size: '51-200',
      tools: ['chatgpt-business', 'custom-ai'],
      consequential: {
        hiring: false,
        lending: true,
        pricing: false,
        tenant: false,
        healthcareEd: false,
        insurance: false,
      },
      geo: {
        colorado: false,
        california: false,
        eu: true,
        otherRegulated: false,
        none: false,
      },
      policy: 'no',
      worry: 'audit',
    });
    expect(result.tier).toBe('RED');
  });

  // Extra coverage beyond the 5 mandated scenarios
  test('Solo consultant on ChatGPT Business with one EU client + verbal policy = YELLOW (geo)', () => {
    const result = scoreAssessment({
      industry: 'professional-services',
      size: '1',
      tools: ['chatgpt-business'],
      consequential: {
        hiring: false,
        lending: false,
        pricing: false,
        tenant: false,
        healthcareEd: false,
        insurance: false,
      },
      geo: {
        colorado: false,
        california: false,
        eu: true,
        otherRegulated: false,
        none: false,
      },
      policy: 'partial',
      worry: 'EU client wants AI clause in contract',
    });
    expect(result.tier).toBe('YELLOW');
  });

  test('Mid-size manufacturer 50 emp, ChatGPT Business, written policy, no consequential, no regulated geo = GREEN', () => {
    const result = scoreAssessment({
      industry: 'manufacturing',
      size: '11-50',
      tools: ['chatgpt-business'],
      consequential: {
        hiring: false,
        lending: false,
        pricing: false,
        tenant: false,
        healthcareEd: false,
        insurance: false,
      },
      geo: {
        colorado: false,
        california: false,
        eu: false,
        otherRegulated: false,
        none: true,
      },
      policy: 'yes',
      worry: '',
    });
    expect(result.tier).toBe('GREEN');
  });
});
