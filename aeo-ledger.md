# Sayfeai AEO Ledger

Daily tracking of how often answer engines cite **sayfeai.com** (canonical) and **elevaiq.com** (legacy / transition domain through 2026-06-18) for our seed queries.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

## Pre-v2 ledger (legacy)

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|---------|
| 2026-05-17 | 8 (websearch proxy — no API keys present) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus → $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |
| 2026-05-18 | 8 (websearch proxy — no API keys; same 8 as 2026-05-17 baseline) | 0/8 (0.0%) | 0/8 (0.0%) | 0/8 (0.0%) | 5 | Fixed stale $30 pricing on /about.html (same bug pattern as yesterday's vs-plus fix); strengthened /industries/real-estate with 58% adoption + CA AB 723 disclosure + 6 FAQs; added Feb 17 2026 Rakoff privilege ruling FAQ to /industries/legal; refreshed /blog/best-ai-tools-small-business-2026 dateModified + SBE 82% stat + Claude-vs-ChatGPT FAQ; added Legal/regulatory facts block to /llms.txt |

## v2 ledger (canonical sayfeai.com + bucket-level reporting)

| Date | Engines | Total | Cited (CGPT) | Cited (Claude) | Cited (GAIO) | Compliance% | Assessment% | Partner% | Industry% | Pages patched | Top fix |
|------|---------|------:|-------------:|---------------:|-------------:|------------:|------------:|---------:|----------:|--------------:|---------|
| 2026-05-19 | websearch_proxy only (no API keys for CGPT/Claude/GAIO/Perplexity) | 10 | n/a — proxy | n/a — proxy | n/a — proxy | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 (no industry sampled) | 1 | Intelligence layer: refreshed /llms.txt with Citation-Ready Q&A block + Colorado SB 189 update + Brazoria County / 50-states-plus-Canada service area. Auto-detected target_competitor for openai-partner-for-consultants (openai.com/form/partnerintake/) and 7 other queries. Logged 5 pillar handoffs to Claude Code (3x /compliance/* + 2x /compliance-assessment). HTML rewrites for Colorado blog (SB 189 + ElevaIQ rebrand) and /about (LocalBusiness JSON-LD) deferred to 2026-05-20 first actions — full diagnoses recorded in measurements/2026-05-19.json. |

## Pillar handoffs to Claude Code (open queue as of 2026-05-19)

These queries have no target page on the site yet — they need a pillar built by Claude Code before the AEO optimizer can patch them:

| Query ID | Target page needed | Citation demand | Notes |
|----------|--------------------|--------------:|-------|
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | Now requires SB 189 framing (signed 2026-05-14, effective 2027-01-01). Replaces SB 24-205. |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | August 2, 2026 deadline. SME framework extended to 750 employees / €150M revenue. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | Top competitors: SYLO, AIHR, Thoropass, Lattice (all rank with downloadable templates). |
| ai-compliance-assessment | /compliance-assessment | **very high** | Direct competitor trycomplianceiq.com is already winning this — Engine 1 core conversion page. |
| ai-risk-assessment-tool | /compliance-assessment | high | Same target page; build both phrasings into H1 + FAQ. |

## Deferred HTML patches (queued for 2026-05-20)

| File | Patch type | Why deferred | Diagnosis status |
|------|-----------|--------------|-------------------|
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | SB 189 update banner + new FAQ + ElevaIQ → Sayfeai rebrand + canonical fix + /compliance-assessment callout | Token budget — full file rewrite (~32kb) didn't fit alongside intelligence outputs | Fully specified in daily-report-2026-05-19.md and measurements/2026-05-19.json |
| public/about.html | Insert LocalBusiness JSON-LD (Houston + Brazoria County + areaServed US+CA + Vandelay parentOrg) | Same | Fully specified — single JSON-LD block insertion |

## Trend notes
- **2026-05-17 (bootstrap):** No API keys for ChatGPT, Claude, or Google AIO measurement in the scheduled-task env. Used WebSearch as a proxy for answer-engine top-cited sources. Baseline citation rate from proxy = 0/8.
- **2026-05-18 (day 2):** Re-tested same 8 seed queries via WebSearch proxy. Citation rate 0/8 again — same as bootstrap. No regression vs day 1.
- **2026-05-19 (day 3 — v2 launch):** Cited rate via WebSearch proxy = 0/10 (third consecutive flat-zero day). Not yet a regression per the 5-day rule. Important strategic finding: Colorado SB 24-205 has been EFFECTIVELY REPLACED by SB 189 (signed May 14 by Gov Polis, effective Jan 1 2027). Three buckets (compliance, assessment, partner_channel) all at 0% — too early to flag the v2 bucket-failure alert (need 14 days at 0%).
- **Regression rule (v1, still active):** if cited_us % trends down for 5 consecutive days, the next run pauses Phase 4 (apply) and writes an alert into the day's daily-report instead of pushing HTML edits.
- **Stretch rule (v2):** if compliance bucket cited% trends UP 7 consecutive days, next run also outputs 2 pillar-page proposals in daily-report for Claude Code to consider building.
- **Bucket-specific failure rule (v2):** if any single bucket has 0% citation rate for 14 consecutive days, write a dedicated alert section to daily-report titled "Bucket X is failing — strategy review needed" with diagnosis.
- **Measurement caveat:** Until OPENAI_API_KEY / ANTHROPIC_API_KEY / SERPAPI_API_KEY / PERPLEXITY_API_KEY are added to the scheduled-task environment, "cited (CGPT/Claude/GAIO)" columns can't be filled accurately. WebSearch proxy is a directional indicator only — it reflects what answer engines are likely citing, not what they actually cite. Real citation measurement needs the proper engine APIs.
