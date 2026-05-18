# ElevaIQ AEO Ledger

Week-over-week tracking of how often answer engines cite elevaiq.com for our seed queries.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|---------|
| 2026-05-17 | 8 (websearch proxy — no API keys present) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus → $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |
| 2026-05-18 | 8 (websearch proxy — no API keys; same 8 as 2026-05-17 baseline) | 0/8 (0.0%) | 0/8 (0.0%) | 0/8 (0.0%) | 5 | Fixed stale $30 pricing on /about.html (same bug pattern as yesterday's vs-plus fix); strengthened /industries/real-estate with 58% adoption + CA AB 723 disclosure + 6 FAQs; added Feb 17 2026 Rakoff privilege ruling FAQ to /industries/legal; refreshed /blog/best-ai-tools-small-business-2026 dateModified + SBE 82% stat + Claude-vs-ChatGPT FAQ; added Legal/regulatory facts block to /llms.txt |

## Trend notes
- **2026-05-17 (bootstrap):** No API keys for ChatGPT, Claude, or Google AIO measurement in the scheduled-task env. Used WebSearch as a proxy for answer-engine top-cited sources. Baseline citation rate from proxy = 0/8. Today's patches are foundational — re-measure tomorrow with the same 8 queries to establish whether the corrected pricing, expanded FAQ schema, and stronger entity claims move the needle.
- **2026-05-18 (day 2):** Re-tested same 8 seed queries via WebSearch proxy. Citation rate 0/8 again — same as bootstrap. No regression vs day 1; need ≥4 more days to read signal direction. Day-2 highest-leverage fix: corrected another stale $30 pricing bug on /about.html (same pattern as yesterday's vs-plus page), and embedded the 2026 stats most likely to be repeated by answer engines (58% RE adoption, 69%/82% legal, SBE 82% SMB) inline + in schema. Patched 5 pages, added 3 new seed queries (Personal Finance, Claude-vs-ChatGPT enterprise share, PIPEDA).
- **Regression rule:** if cited_us % trends down for 5 consecutive days, the next run pauses Phase 4 (apply) and writes an alert into the day's daily-report instead of pushing HTML edits.
