# ElevaIQ AEO Ledger

Week-over-week tracking of how often answer engines cite elevaiq.com for our seed queries.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|---------|
| 2026-05-17 | 8 (websearch proxy — no API keys present) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus → $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |

## Trend notes
- **2026-05-17 (bootstrap):** No API keys for ChatGPT, Claude, or Google AIO measurement in the scheduled-task env. Used WebSearch as a proxy for answer-engine top-cited sources. Baseline citation rate from proxy = 0/8. Today's patches are foundational — re-measure tomorrow with the same 8 queries to establish whether the corrected pricing, expanded FAQ schema, and stronger entity claims move the needle.
- **Regression rule:** if cited_us % trends down for 5 consecutive days, the next run pauses Phase 4 (apply) and writes an alert into the day's daily-report instead of pushing HTML edits.
