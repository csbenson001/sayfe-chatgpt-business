# Sayfeai AEO Ledger

Daily tracking of how often answer engines cite **sayfeai.com** (canonical) for our seed queries.
**elevaiq.com (legacy / transition domain) was RETIRED 2026-06-19** — the legacy-citation counting window closed 2026-06-18. Legacy citations now count as cited_us:false.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

## Pre-v2 ledger (legacy)

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|----------|
| 2026-05-17 | 8 (websearch proxy) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus -> $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |
| 2026-05-18 | 8 (websearch proxy) | 0/8 (0.0%) | 0/8 (0.0%) | 0/8 (0.0%) | 5 | Fixed stale $30 pricing on /about.html; strengthened /industries/real-estate; added Feb 17 2026 Rakoff ruling FAQ to /industries/legal; refreshed /blog/best-ai-tools-small-business-2026; added Legal/regulatory facts block to /llms.txt |

## v2 ledger (canonical sayfeai.com + bucket-level reporting)

| Date | Engines | Total | Cited (CGPT) | Cited (Claude) | Cited (GAIO) | Compliance% | Assessment% | Partner% | Industry% | Pages patched | Top fix |
|------|---------|------:|-------------:|---------------:|-------------:|------------:|------------:|---------:|----------:|--------------:|----------|
| 2026-05-19 | websearch_proxy only | 10 | n/a | n/a | n/a | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 3 | Refreshed /llms.txt; auto-detected 8 competitors; 5 pillar handoffs. Rewrote SB 189 blog; LocalBusiness JSON-LD to /about. |
| 2026-05-20 -> 2026-06-09 | websearch_proxy | 3-15 | n/a | n/a | 0% proxy | 0% | 0/2 (0%) | 0% | sweep 1/16->15/16 | 1-5 | Flat-zero baseline. Industry canonical+FAQ sweep advanced to 15/16. Bucket-failure alert fired 5/30 (cleared). (rows condensed) |
| 2026-06-11 | websearch_proxy only | 12 | n/a | n/a | 0/12 (proxy) | 0/3 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | 25th flat-zero day (6/10 gap). /openai-smb-partner visible FAQ + MSP FAQ (9->10). Added chatgpt-superapp-aria seed. |
| 2026-06-12 | websearch_proxy only | 9 | n/a | n/a | **1/9 (11%)** | **1/3 (33%)** | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | **STREAK BROKEN.** FIRST canonical citation: SB 26-189 blog ~pos 9. Fixed canonical-domain BUG on Aria blog. |
| 2026-06-13 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | 2nd compliance day. SB 26-189 blog ~pos 9 -> ~pos 4. Checklist FAQ 8->9. |
| 2026-06-14 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/5 (20%)** | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | **0 (hold)** | 3rd compliance day. Blog HELD ~pos 4. Flagged P0 accuracy + rising glacis.io. |
| 2026-06-15 | websearch_proxy only | 8 | n/a | n/a | **1/8 (12.5%)** | **1/4 (25%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 2 | 4th compliance day. **/compliance-assessment LIVE.** Sitemap + llms.txt. RESOLVED P0 accuracy (<=40-emp exemption). |
| 2026-06-16 | websearch_proxy only | 12 | n/a | n/a | 0/12 | 0/5 (0%) | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 (+1 staged) | STREAK BROKEN at 4. Blog out of top-7 (glacis.io #1). 40-emp fix to llms-full.txt. Blog fix STAGED. target_competitor -> glacis.io. |
| 2026-06-17 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/5 (20%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 | REBOUND. admt RECLAIMED ~pos 3. Shipped staged blog accuracy patch. Queue EMPTY. |
| 2026-06-19 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (1 STAGED)** | **Friday.** admt HELD ~pos 3. **Transition window closed.** Added openai-partner-network-tiers seed. vs-enterprise FAQ STAGED. Pillar audit: 0. |
| 2026-06-22 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **2** | **Monday.** colorado-ai-act-small-business HELD ~pos 2. admt REGRESSED (law firms). Shipped vs-enterprise FAQ #8 + colorado ADMT FAQ #10. |
| 2026-06-23 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (hold)** | **Tuesday.** admt RECLAIMED ~pos 4 — validates 6/22 ADMT FAQ #10. colorado-small-biz reversed OUT (proxy volatility). Staged 2 Partner Network patches. |
| 2026-06-25 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **2** | **Thursday.** admt HELD ~pos 5. Shipped 2 staged Partner Network patches (llms.txt + openai-smb-partner.html). Queue EMPTY. digitalapplied crossed 3+ (preserve). |
| 2026-06-26 | websearch_proxy only | 11 | n/a | n/a | **1/11 (9.1%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **0 (hold)** | **Friday.** admt HELD ~pos 5 (glacis fell ~pos 10). colorado-small-biz OUT (availablelaw.com owns SMB framing). Blog verified comprehensive — no content gap. Pillar audit: 0. |
| 2026-06-27 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (hold)** | **Saturday.** admt HELD ~pos 5 (3rd straight). /compliance-assessment re-read in full — owns winning free/5-min/no-signup framing; loss is indexing latency. Patch surface exhausted 4th straight. SEED: availablelaw.com -> target_competitor on colorado-small-biz. |
| 2026-06-28 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%)** | **1/6 (17%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (hold)** | **Sunday.** admt HELD ~pos 5 (4th straight; workforcebulletin #1). Patch surface exhausted 5th straight — disciplined hold (rule 4). digitalapplied 3+ again (preserve). Assessment day 13/14 — threshold fires 6/29 if still 0%. |
| 2026-06-30 | websearch_proxy only | 12 | n/a | n/a | **2/12 (16.7%)** | **2/6 (33%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (hold)** | **Tuesday (6/29 gap day).** TWO wins, both on the single Colorado blog: admt HELD ~pos 5 (**5th straight**) AND colorado-small-biz SWUNG BACK IN ~pos 2 (availablelaw.com absent = proxy volatility). **ASSESSMENT BUCKET-FAILURE ALERT FIRED** (day 14, 0% since /compliance-assessment live 6/15; deferred from 6/29 gap). Diagnosis: indexing latency on fully-optimized page, NOT content; root cause = no API keys + no pillar inbound links. **Patch surface exhausted 6th straight run** — disciplined hold (rule 4). digitalapplied 3+ again (preserve). Stale colorado-ai-act-deadline noted (today IS June 30; held to preserve trend). |
| 2026-07-01 | websearch_proxy only | 12 | n/a | n/a | **2/12 (16.7%)** | **2/5 (40%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **0 (hold)** | **Wednesday.** Ties best proxy rate. SAME two wins, SAME single Colorado blog: admt HELD ~pos 5 (**6th straight**; workforcebulletin #1, glacis out of top-10) + colorado-small-biz ~pos 2 (availablelaw.com absent again). **Patch surface exhausted 7th straight** — disciplined hold (rule 4). **SEED HYGIENE SHIPPED:** refreshed stale colorado-ai-act-deadline query (June-30-2026 date now past -> "SB 189 effective date 2027"). digitalapplied 4 sets (preserve); workforcebulletin candidate swap on admt. Assessment day 15 (alert already fired 6/30). |
| 2026-07-02 | websearch_proxy only | 12 | n/a | n/a | **3/12 (25.0%)** | **3/6 (50%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **0 (hold)** | **Thursday. NEW BEST PROXY RATE (3/12) — but SAME single Colorado blog, now hit by a 3rd query.** admt HELD ~pos 5 (**7th straight**; workforcebulletin #1, glacis out of top-10) + colorado-small-biz ~pos 2 (availablelaw.com absent 3rd straight) + **colorado-ai-act-deadline (refreshed 7/1) RE-ENTERED and WON ~pos 1**. All 3 wins = ONE blog. **Patch surface exhausted 8th straight — disciplined hold (rule 4).** **SEED SWAP SHIPPED:** admt target_competitor glacis.io -> workforcebulletin.com (EBG #1 a 3rd measured run). digitalapplied 4 sets again (preserve). Assessment day 16 (alert already fired 6/30). |

## Pillar handoffs to Claude Code (open queue as of 2026-07-02)

**UPDATE 2026-07-02:** `public/compliance/` still 404s. Patch surface exhausted **8th consecutive run**. Today set a new best proxy rate (3/12, 25%) but it is an ILLUSION of progress — all 3 wins are the SAME single blog (`/blog/ai-compliance-colorado-eu-small-business-2026`), now resolving 3 distinct Colorado queries (admt + colorado-small-biz + the refreshed deadline query that re-entered and won ~pos 1). No new surface, no new asset. The only growth levers left are pillars + API keys, both outside this optimizer's whitelist. Dispatch `/compliance/ai-policy-template` first (we own the 3 templates; it also becomes the inbound funnel + citation source for /compliance-assessment, whose bucket-failure threshold fired 6/30 and continues day 16).

| Query ID | Target page needed | Priority | Notes |
|----------|--------------------|----------|-------|
| ai-policy-template-smb | /compliance/ai-policy-template | **P1 — BUILD FIRST** | Winners (aihr, legaltemplates, lattice, thoropass, hibob) rank on free one-click templates. We own 3 editable templates gated behind /compliance-assessment. Pillar surfaces them, is the Engine-1 conversion mechanism, AND fixes the assessment bucket failure. Re-confirmed 7/2: 5 pure-template winners, zero sayfeai presence. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | **P0** | Blog swings in/out of top-10 (pos 2 on 6/22, 6/30, 7/1, 7/2; out 6/23,6/26,6/27,6/28). Single-page volatility; pillar 404s. availablelaw.com owns SMB framing when present (absent 6/30, 7/1, 7/2). Carry <=40-emp exemption + 60-day cure accuracy. |
| eu-ai-act-small-business | /compliance/eu-ai-act | P0 | Article 50 transparency Aug 2 2026; high-risk possibly Dec 2 2027 (Digital Omnibus). hklaw/colombani/legalnodes/digitalapplied/bakermckenzie rank. Pillar carries dual-timeline nuance. Re-confirmed loss 7/2. |
| ai-compliance-assessment | /compliance-assessment | **DONE 6/15 — BUCKET FAILURE FIRED 6/30, DAY 16 ON 7/2** | Page LIVE & fully optimized (re-verified 6/27). 0 citations through 7/2 (day 16) = threshold long fired. Diagnosis: indexing latency + no inbound pillar links + measurement blindness (no API keys). Not a content failure. Fix = pillars + API-key measurement. |
| ai-risk-assessment-tool | /compliance-assessment | DONE 6/15 | trustlayer.io owns 5-min no-account framing (~pos 1, 6/30, 7/1, 7/2) which our page matches verbatim. riskhelper.ai (target_competitor) absent 6/30, 7/1, 7/2 (volatility). Monitor. |
| msp-ai-compliance-resell | /partners/msp | P2 | Engine 2. "AI governance audit" is the recurring high-margin wedge (reconfirmed 7/2: managedservicesjournal / connectwise / guardz). worksent/integris rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle rank. |
| ai-consultant-houston | /houston (local landing) | P3 | Local intent unserved by /about. penncomp #1, ademero #2. |

## Competitor & accuracy watch (updated 2026-07-02)

- **workforcebulletin.com / Epstein Becker Green (NOW target_competitor on colorado-sb-26-189-admt):** #1 on admt for the **3rd straight measured run** (6/28, 7/1, 7/2). **SWAP EXECUTED 2026-07-02** glacis.io -> workforcebulletin.com per the "#1 a 3rd run" rule. We sit ~pos 5 below it + preferreddata + consumerfinancemonitor + techjacksolutions.
- **availablelaw.com (target_competitor on colorado-ai-act-small-business):** ABSENT 6/30, 7/1 AND 7/2 — we swung to ~pos 2 all three runs. Owns SMB-rewrite framing when present (#3 across 4 runs 6/23/26/27/28). Preserve; proxy volatility confirmed (clear in/out pattern).
- **digitalapplied.com (CROSSED 3+ AGAIN 2026-07-02):** 4 query-result sets (eu-ai-act, ai-compliance-checklist, openai-partner-for-consultants, openai-partner-network-tiers). Already target_competitor on eu-ai-act; all sets have target_competitor set -> no seed write (preserve). Durable cross-bucket competitor, 3+ for 5th consecutive measured run.
- **glacis.io:** out of top-10 on admt 7/2 (below sayfeai ~pos 5). Retired as target_competitor this run (swapped to workforcebulletin.com).
- **trustlayer.io:** #1 for ai-risk-assessment-tool 7/2 (owns no-signup/minutes framing our page matches). riskhelper.ai (target_competitor) absent 3rd run — preserve.
- **intuitionlabs.ai (target_competitor):** not sampled 7/2. Last seen #1 on chatgpt-business-vs-enterprise 7/1; our FAQ #8 covers the 40-msg cap — indexing latency, no new gap.
- **think-technologies.com:** #2 on openai-partner-for-consultants 7/2 (has an "Official OpenAI Partner for SMB" page). <3 sets this run; watch.
- **hipaajournal.com:** #1 on chatgpt-for-healthcare 7/2; highly authoritative incumbent. /industries/healthcare canonical+FAQ complete — no patchable gap.
- **penncomp.com / ademero.com:** #1 / #2 for ai-consultant-houston (not sampled 7/2). /about lacks local-page structure.
- **P0 ACCURACY — Colorado SB 26-189 small-business exemption: RESOLVED + FULLY SHIPPED 2026-06-17.** No general carve-out; narrow employer exception for <=40 employees (down from 50); 60-day right to cure; effective Jan 1 2027. Reconciled across llms.txt, llms-full.txt, blog, ADMT FAQ #10. No open accuracy items.

## Deferred / queued patches — STATUS

| File | Patch type | Status |
|------|-----------|-------------------------|
| (none) | — | **PATCH QUEUE EMPTY (confirmed 2026-07-02, 8th straight run).** No staged patches. All live target pages re-confirmed comprehensive. Remaining gains are pillars + API keys. |
| public/llms.txt | Partner Network Q&A + fact bullet | **SHIPPED 2026-06-25.** Monitor indexing. |
| public/openai-smb-partner.html | Partner Network FAQ x2 + dateModified | **SHIPPED 2026-06-25.** Monitor for indexing (no rank movement yet 7/2). |
| public/blog/chatgpt-business-vs-enterprise-2026.html | agent-msg-cap FAQ #8 + freshness | **SHIPPED 2026-06-22.** Validated; indexing latency (winning answer still cites the mechanism our FAQ covers). |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | ADMT FAQ #10 + freshness | **SHIPPED 2026-06-22.** VALIDATED (admt holds ~pos 5 on 7/2, 7th straight; also wins colorado-small-biz + deadline). Our SOLE reliable citation asset — all 3 wins ride on it. |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ | **FUNCTIONALLY COMPLETE — 15/16.** Only energy remains (no seed query). |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **PATCH QUEUE EMPTY (2026-07-02).** Confirmed exhausted 8th straight run. No patchable gap exists. Remaining durable gains are pillars + API keys, not patches.
- **#1 LEVER = PILLARS, NOT PATCHES.** public/compliance/ still does not exist. Build order: **(1) /compliance/ai-policy-template [BUILD FIRST — we own the templates AND it funnels the failing assessment bucket]**, (2) /compliance/colorado-ai-act, (3) /compliance/eu-ai-act; then (4) /partners/msp, (5) /houston. **100% of the last three runs' wins ride on ONE blog post** — a single point of failure the pillars remove.
- **ASSESSMENT BUCKET FAILURE — day 16 (fired 6/30):** /compliance-assessment live since 6/15, 0 citations through 7/2. Conclusion: indexing latency on a fully-optimized page; fix = P1 pillar (inbound funnel) + API keys (measurement). Re-evaluate 30 days post-pillar-launch.
- **SEED SWAP — DONE 7/2:** colorado-sb-26-189-admt target_competitor glacis.io -> workforcebulletin.com (Epstein Becker Green held #1 a 3rd measured run: 6/28, 7/1, 7/2).
- **MONITOR Partner Network patches:** openai-partner-network-tiers + openai-partner-for-consultants — no rank movement yet (shipped 6/25; indexing). openai.com owns #1 on both.
- **ADMT WIN — monitor:** colorado-sb-26-189-admt held ~pos 5 (7/2, 7th straight). workforcebulletin.com (now target_competitor) #1. Watch for law-firm/EBG dominance re-shaping the SERP.
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number remains a directional WebSearch proxy (39 proxy-only runs). With patch surface exhausted AND an assessment bucket-failure firing on unverifiable proxy data, this is the highest-value unblock available.
- **ROOT CAUSE (open):** fresh blogs historically self-canonicalize to a legacy domain. Fix publishing template, then one-time sweep. Human/infra.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry sweep 1/16 -> 15/16; bucket-failure alert fired 5/30.
- **2026-06-12 -> 06-15:** Streak broken. 1/9, 1/13, 1/12, 1/8. SB 26-189 blog climbed to ~pos 4; /compliance-assessment LIVE 6/15.
- **2026-06-16:** 0/12. Compliance streak broken at 4; glacis.io #1.
- **2026-06-17:** 1/12. Rebound ~pos 3; shipped staged blog patch.
- **2026-06-19 -> 06-28:** Flat ~1/12 (8.3%). admt holds ~pos 5 (4th straight by 6/28). Partner Network patches shipped 6/25. Disciplined holds 6/23, 6/26, 6/27, 6/28. Assessment 0% day 13/14 by 6/28.
- **2026-06-30 (Tuesday):** 2/12 (16.7%). TWO wins on the SAME single Colorado blog (admt 5th straight + colorado-small-biz back ~pos 2). ASSESSMENT BUCKET-FAILURE THRESHOLD FIRED (day 14). Patch surface exhausted 6th straight; disciplined hold.
- **2026-07-01 (Wednesday):** 2/12 (16.7%) — SAME two wins on the SAME single blog. admt HELD ~pos 5 (6th straight). Seed hygiene shipped (deadline query refreshed). Assessment day 15. Patch surface exhausted 7th straight.
- **2026-07-02 (Thursday):** **3/12 (25.0%) — new best proxy rate, but STRUCTURALLY FLAT.** All 3 wins are the SAME single Colorado blog: admt HELD ~pos 5 (7th straight; workforcebulletin #1, glacis out of top-10), colorado-small-biz ~pos 2 (availablelaw.com absent 3rd straight), AND the refreshed colorado-ai-act-deadline query re-entered sampling and WON ~pos 1. Higher rate = wider query mapping onto one asset, NOT new surface. **Patch surface exhausted 8th straight — disciplined hold (rule 4).** SEED SWAP shipped (admt target_competitor -> workforcebulletin.com). Assessment day 16 (alert already fired). digitalapplied 4 sets (preserve).
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. **NOT triggered** (at best rate; 3/12 today >= 2/12 on 7/1).
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **NOT triggered** (compliance volatile 17-50%, not a clean 7-day climb; note it has now ticked 33->40->50 over 6/30-7/2 but on the same single asset — watch, not yet a clean climb).
- **Bucket-failure rule (v2):** fired 5/30 (cleared); FIRED 2026-06-30 for ASSESSMENT (0% for 14 measured runs since live 6/15), continues day 16 on 7/2. Compliance 50% (3/6); Assessment 0%; Partner 0% (pillar/asset-gated; patches shipped 6/25 indexing); Local 0% (structural).
- **Single-push rule (v2.1):** 7/2 = 3 commits (measurement JSON; then ledger + daily report; then seed YAML + ledger) due to large inline content; no page patches. Standing recommendation: API-based push script for large single-call commits.
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only. The assessment bucket-failure "0%" remains structurally unverifiable without real answer-engine APIs.
