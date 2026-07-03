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
| 2026-06-30 | websearch_proxy only | 12 | n/a | n/a | **2/12 (16.7%)** | **2/6 (33%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (hold)** | **Tuesday (6/29 gap day).** TWO wins, both on the single Colorado blog: admt HELD ~pos 5 (**5th straight**) AND colorado-small-biz SWUNG BACK IN ~pos 2 (availablelaw.com absent = proxy volatility). **ASSESSMENT BUCKET-FAILURE ALERT FIRED** (day 14, 0% since /compliance-assessment live 6/15). Diagnosis: indexing latency + no pillar inbound links, NOT content. **Patch surface exhausted 6th straight** — disciplined hold (rule 4). |
| 2026-07-01 | websearch_proxy only | 12 | n/a | n/a | **2/12 (16.7%)** | **2/5 (40%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **0 (hold)** | **Wednesday.** SAME two wins, SAME single Colorado blog: admt HELD ~pos 5 (**6th straight**) + colorado-small-biz ~pos 2 (availablelaw.com absent again). **Patch surface exhausted 7th straight** — disciplined hold. **SEED HYGIENE:** refreshed stale colorado-ai-act-deadline query. digitalapplied 4 sets (preserve); workforcebulletin candidate swap on admt. Assessment day 15. |
| 2026-07-02 | websearch_proxy only | 12 | n/a | n/a | **3/12 (25.0%)** | **3/6 (50%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **0 (hold)** | **Thursday. NEW BEST PROXY RATE (3/12) — but SAME single Colorado blog, 3rd query.** admt HELD ~pos 5 (**7th straight**) + colorado-small-biz ~pos 2 (availablelaw.com absent 3rd) + **colorado-ai-act-deadline (refreshed 7/1) RE-ENTERED and WON ~pos 1**. All 3 wins = ONE blog. **Patch surface exhausted 8th straight — disciplined hold (rule 4).** **SEED SWAP:** admt target_competitor glacis.io -> workforcebulletin.com. Assessment day 16. |
| 2026-07-03 | websearch_proxy only | 12 | n/a | n/a | **3/12 (25.0%)** | **3/6 (50%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) comparison | **0 (hold)** | **Friday. FLAT at 3/12 (25.0%) — structurally identical to 7/2.** SAME 3 Colorado wins on the SAME single blog: deadline ~pos 1 (2nd straight), admt ~pos 4 (workforcebulletin #1 **4th** measured run; glacis still out), colorado-small-biz ~pos 2 (availablelaw.com absent **4th** straight). **Patch surface exhausted 9th straight — disciplined hold (rule 4).** No seed changes. **Friday pillar audit: public/compliance/ still 404s — zero pillars to audit (9th consecutive confirmation).** NEW competitor preferreddata.com ~pos 2 on admt (1 set, watch). digitalapplied 3 sets (6th consecutive 3+; preserve). Assessment day 17. |

## Pillar handoffs to Claude Code (open queue as of 2026-07-03)

**UPDATE 2026-07-03:** `public/compliance/` still 404s. Patch surface exhausted **9th consecutive run**. Rate flat at 3/12 (25%) — same single blog (`/blog/ai-compliance-colorado-eu-small-business-2026`) resolving 3 Colorado queries; no new surface, no new asset. The only growth levers left are pillars + API keys, both outside this optimizer's whitelist. **Friday pillar audit** re-confirmed the pillar directory does not exist. Dispatch `/compliance/ai-policy-template` first (we own the 3 templates; it becomes the inbound funnel + citation source for /compliance-assessment, whose bucket-failure threshold fired 6/30 and continues day 17).

| Query ID | Target page needed | Priority | Notes |
|----------|--------------------|----------|-------|
| ai-policy-template-smb | /compliance/ai-policy-template | **P1 — BUILD FIRST** | Winners (aihr, mescomputing, legaltemplates, lattice, thoropass, hibob, polygraf, wordstream) rank on free one-click templates. We own 3 editable templates gated behind /compliance-assessment. Pillar surfaces them, is the Engine-1 conversion mechanism, AND fixes the assessment bucket failure. Re-confirmed 7/3: 8 pure-template winners, zero sayfeai presence. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | **P0** | Blog swings in/out of top-10 (pos 2 on 6/22, 6/30, 7/1, 7/2, 7/3; out 6/23,6/26,6/27,6/28). Single-page volatility; pillar 404s. availablelaw.com owns SMB framing when present (absent 6/30, 7/1, 7/2, 7/3). Carry <=40-emp exemption + 60-day cure + Jan 1 2027 + 3-yr record retention + AG-only enforcement (all re-confirmed accurate 7/3). |
| eu-ai-act-small-business | /compliance/eu-ai-act | P0 | Article 50 transparency Aug 2 2026; high-risk possibly ~late 2027/2028 (Digital Omnibus, provisionally agreed May 2026). hklaw/colombani/bayootec/legalnodes/digitalapplied/bakermckenzie rank. Pillar carries dual-timeline nuance. Re-confirmed loss 7/3. |
| ai-compliance-assessment | /compliance-assessment | **DONE 6/15 — BUCKET FAILURE FIRED 6/30, DAY 17 ON 7/3** | Page LIVE & fully optimized. 0 citations through 7/3 = threshold long fired. trycomplianceiq.com #1 (free 15-question risk score). Diagnosis: indexing latency + no inbound pillar links + measurement blindness (no API keys). Not a content failure. Fix = pillars + API-key measurement. |
| ai-risk-assessment-tool | /compliance-assessment | DONE 6/15 | trustlayer.io owns 5-min no-account framing (~pos 1, 6/30–7/3) which our page matches verbatim. riskhelper.ai (target_competitor) absent 6/30–7/3 (volatility). Monitor. |
| msp-ai-compliance-resell | /partners/msp | P2 | Engine 2. "AI governance audit" is the recurring high-margin wedge (reconfirmed 7/3: managedservicesjournal / lumenova / connectwise / guardz). worksent/integris rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle rank. |
| ai-consultant-houston | /houston (local landing) | P3 | Local intent unserved by /about. penncomp #1, ademero #2. |

## Competitor & accuracy watch (updated 2026-07-03)

- **workforcebulletin.com / Epstein Becker Green (target_competitor on colorado-sb-26-189-admt):** #1 on admt for the **4th straight measured run** (6/28, 7/1, 7/2, 7/3). Swap executed 7/2 (glacis.io -> workforcebulletin.com). We sit ~pos 4 below it + preferreddata + techjacksolutions + consumerfinancemonitor.
- **preferreddata.com (NEW 2026-07-03):** surfaced ~pos 2 on admt, explicitly mimicking our "small-business AI compliance reset" framing and outranking us (~pos 4). **1 set only — below the 3+ auto-write threshold. WATCH; no seed write.** If it crosses 3+ sets in a future run, auto-detect will write it.
- **availablelaw.com (target_competitor on colorado-ai-act-small-business):** ABSENT 6/30, 7/1, 7/2 AND 7/3 — we swung to ~pos 2 all four runs. Owns SMB-rewrite framing when present. Preserve; proxy volatility confirmed durable (clear in/out pattern).
- **digitalapplied.com (CROSSED 3+ AGAIN 2026-07-03):** 3 query-result sets (eu-ai-act, ai-compliance-checklist, openai-partner-for-consultants). 6th consecutive measured run at 3+. Already target_competitor on eu-ai-act; all crossing sets have target_competitor set -> no seed write (preserve). Durable cross-bucket competitor.
- **glacis.io:** out of top-10 on admt 7/3 (below sayfeai ~pos 4). Retired as target_competitor 7/2 (swapped to workforcebulletin.com).
- **trustlayer.io:** #1 for ai-risk-assessment-tool 7/3 (owns no-signup/minutes framing our page matches). riskhelper.ai (target_competitor) absent 4th run — preserve.
- **trycomplianceiq.com (target_competitor on ai-compliance-assessment):** #1 7/3 (free 15-question risk score). Our page matches on free/fast/no-signup but is not indexed for citation — pillar-inbound-link + API-key problem, not content.
- **intuitionlabs.ai (target_competitor):** #1 on chatgpt-business-vs-enterprise 7/3 (leads with pricing table); our FAQ #8 covers the 40-msg cap the winning answer cites verbatim — indexing latency, no new gap.
- **think-technologies.com:** #2 on openai-partner-for-consultants 7/3 (has an "Official OpenAI Partner for SMB" page). <3 sets; watch.
- **openai.com:** owns #1 on both partner queries (its own announcements) — structurally hard to displace; our asset patches shipped 6/25 remain in indexing.
- **P0 ACCURACY — Colorado SB 26-189 small-business exemption: RESOLVED + FULLY SHIPPED 2026-06-17, re-verified 7/3.** No general carve-out; narrow employer exception for <=40 employees; 60-day right to cure; effective Jan 1 2027; 3-yr record retention; AG-only enforcement as deceptive trade practice (no private right of action). Reconciled across llms.txt, llms-full.txt, blog, ADMT FAQ #10. No open accuracy items.

## Deferred / queued patches — STATUS

| File | Patch type | Status |
|------|-----------|-------------------------|
| (none) | — | **PATCH QUEUE EMPTY (confirmed 2026-07-03, 9th straight run).** No staged patches. All live target pages re-confirmed comprehensive. Remaining gains are pillars + API keys. |
| public/llms.txt | Partner Network Q&A + fact bullet | **SHIPPED 2026-06-25.** Monitor indexing. |
| public/openai-smb-partner.html | Partner Network FAQ x2 + dateModified | **SHIPPED 2026-06-25.** Monitor for indexing (no rank movement yet 7/3). |
| public/blog/chatgpt-business-vs-enterprise-2026.html | agent-msg-cap FAQ #8 + freshness | **SHIPPED 2026-06-22.** Validated; indexing latency (winning answer still cites the mechanism our FAQ covers, 7/3). |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | ADMT FAQ #10 + freshness | **SHIPPED 2026-06-22.** VALIDATED (admt holds ~pos 4 on 7/3, 8th straight; also wins colorado-small-biz + deadline). Our SOLE reliable citation asset — all 3 wins ride on it. |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ | **FUNCTIONALLY COMPLETE — 15/16.** Only energy remains (no seed query). |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **PATCH QUEUE EMPTY (2026-07-03).** Confirmed exhausted 9th straight run. No patchable gap exists. Remaining durable gains are pillars + API keys, not patches.
- **#1 LEVER = PILLARS, NOT PATCHES.** public/compliance/ still does not exist (Friday audit 7/3 re-confirmed). Build order: **(1) /compliance/ai-policy-template [BUILD FIRST — we own the templates AND it funnels the failing assessment bucket]**, (2) /compliance/colorado-ai-act, (3) /compliance/eu-ai-act; then (4) /partners/msp, (5) /houston. **100% of the last several runs' wins ride on ONE blog post** — a single point of failure the pillars remove.
- **ASSESSMENT BUCKET FAILURE — day 17 (fired 6/30):** /compliance-assessment live since 6/15, 0 citations through 7/3. Conclusion: indexing latency on a fully-optimized page; fix = P1 pillar (inbound funnel) + API keys (measurement). Re-evaluate 30 days post-pillar-launch.
- **NEW COMPETITOR WATCH — preferreddata.com:** ~pos 2 on admt 7/3, copying our SMB-reset framing. 1 set — watch for 3+ to auto-write. It is out-ranking our single asset on our single reliable query; a real Colorado pillar would reclaim the position structurally.
- **MONITOR Partner Network patches:** openai-partner-network-tiers + openai-partner-for-consultants — no rank movement yet (shipped 6/25; indexing). openai.com owns #1 on both.
- **ADMT WIN — monitor:** colorado-sb-26-189-admt held ~pos 4 (7/3, 8th straight). workforcebulletin.com (target_competitor) #1 a 4th run. Watch for law-firm/EBG dominance re-shaping the SERP.
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number remains a directional WebSearch proxy (40 proxy-only runs). With patch surface exhausted AND an assessment bucket-failure firing on unverifiable proxy data, this is the highest-value unblock available.
- **ROOT CAUSE (open):** fresh blogs historically self-canonicalize to a legacy domain. Fix publishing template, then one-time sweep. Human/infra.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry sweep 1/16 -> 15/16; bucket-failure alert fired 5/30.
- **2026-06-12 -> 06-15:** Streak broken. 1/9, 1/13, 1/12, 1/8. SB 26-189 blog climbed to ~pos 4; /compliance-assessment LIVE 6/15.
- **2026-06-16:** 0/12. Compliance streak broken at 4; glacis.io #1.
- **2026-06-17:** 1/12. Rebound ~pos 3; shipped staged blog patch.
- **2026-06-19 -> 06-28:** Flat ~1/12 (8.3%). admt holds ~pos 5 (4th straight by 6/28). Partner Network patches shipped 6/25. Disciplined holds 6/23, 6/26, 6/27, 6/28. Assessment 0% day 13/14 by 6/28.
- **2026-06-30 (Tuesday):** 2/12 (16.7%). TWO wins on the SAME single Colorado blog. ASSESSMENT BUCKET-FAILURE THRESHOLD FIRED (day 14). Patch surface exhausted 6th straight; disciplined hold.
- **2026-07-01 (Wednesday):** 2/12 (16.7%) — SAME two wins on the SAME single blog. admt HELD ~pos 5 (6th straight). Seed hygiene shipped. Assessment day 15. Patch surface exhausted 7th straight.
- **2026-07-02 (Thursday):** 3/12 (25.0%) — new best proxy rate, but STRUCTURALLY FLAT. All 3 wins = SAME single Colorado blog (admt 7th straight; colorado-small-biz ~pos 2; refreshed deadline query re-entered and WON ~pos 1). Patch surface exhausted 8th straight — disciplined hold. SEED SWAP shipped (admt -> workforcebulletin.com). Assessment day 16.
- **2026-07-03 (Friday):** **3/12 (25.0%) — FLAT, structurally identical to 7/2.** Same 3 Colorado wins, same single blog (deadline ~pos 1, admt ~pos 4, colorado-small-biz ~pos 2). workforcebulletin.com #1 on admt a 4th measured run; availablelaw.com absent a 4th straight run. **Patch surface exhausted 9th straight — disciplined hold (rule 4).** No page patches, no seed changes. **Friday pillar audit: public/compliance/ 404s, zero pillars (9th confirmation).** NEW competitor preferreddata.com ~pos 2 on admt (1 set, watch). digitalapplied 3 sets (6th consecutive 3+; preserve). Assessment day 17.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. **NOT triggered** (3/12 today = 3/12 on 7/2; at best rate).
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **NOT triggered** (compliance 33->40->50->50 over 6/30-7/3; today FLAT at 50%, not a clean 7-day climb, and all on the same single asset).
- **Bucket-failure rule (v2):** fired 5/30 (cleared); FIRED 2026-06-30 for ASSESSMENT (0% for 14+ measured runs since live 6/15), continues day 17 on 7/3. Partner (0/3) and Comparison/Local (0%) also sit at chronic 0% but are the same known asset/pillar-gated failures already diagnosed in the handoff queue — no new alert, root cause is pillars/assets not content. Compliance 50% (3/6); Assessment 0%.
- **Single-push rule (v2.1):** 7/3 = measurement JSON + daily report in commit 1, ledger append in commit 2 (ledger inadvertently omitted from commit 1, pushed immediately after). No page patches, no seed changes. Standing recommendation remains an API-based push script for very large single-call commits.
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only. The assessment bucket-failure "0%" remains structurally unverifiable without real answer-engine APIs (40 proxy-only runs).
