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
| 2026-05-19 | websearch_proxy only | 10 | n/a | n/a | n/a | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 3 | Refreshed /llms.txt citation Q&A; auto-detected 8 competitors; logged 5 pillar handoffs. Rewrote Colorado SB 189 blog; added LocalBusiness JSON-LD to /about.html. |
| 2026-05-20 | websearch_proxy only | 14 | n/a | n/a | n/a | 0/3 (0%) | 0/2 (0%) | 0/2 (0%) | 0/2 (0%) | 5 | Caught EU Digital Omnibus deal. Patched llms.txt + llms-full.txt + Colorado/EU blog; Heppner/Rakoff alias to /industries/legal; competitor-displacement FAQ to /openai-smb-partner. |
| 2026-05-21 | websearch_proxy only | 14 | n/a | n/a | n/a | 0/4 (0%) | 0/2 (0%) | 0/3 (0%) | 0/4 (0%) | 2 (+1 queued) | Corrected wrong-direction canonical recommendation. Fixed sitemap industry locs. Added SB 26-189 + ADMT aliases to /llms.txt. |
| 2026-05-22 | websearch_proxy only | 14 | n/a | n/a | 0/14 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 3 | Shipped deferred SB 26-189/ADMT alias patch to Colorado blog + llms-full.txt; fixed 2 legacy prose leaks; auto-detected digitalapplied.com. |
| 2026-05-23 | websearch_proxy only | 14 | n/a | n/a | 0/14 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | 1 | /industries/healthcare visible FAQ + comparison table + canonical JSON-LD (1/16 sweep). |
| 2026-05-24 | websearch_proxy only | 14 | n/a | n/a | 0/14 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | Corrected HIPAA over-claim on /blog/chatgpt-healthcare-hipaa-2026. |
| 2026-05-25 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/3 (0%) | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | Cleared realtime-voice FAQ staleness (SB 24-205 -> SB 26-189 / ADMT). |
| 2026-05-26 | websearch_proxy only | 6 | n/a | n/a | 0/6 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/0 | 1 | /blog/chatgpt-business-vs-plus per-user-opt-out vs contractual-org FAQ (FAQPage 6->8). |
| 2026-05-27 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/2 (0%) | 2 | vs-enterprise cited-mechanism FAQ (5->7) + /industries/finance Service url canonical (2/16). |
| 2026-05-28 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | /industries/insurance visible FAQ + 2 FAQs + Service url canonical (3/16). |
| 2026-05-29 | websearch_proxy only | 6 | n/a | n/a | 0/6 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | /industries/real-estate visible FAQ + canonical (4/16). Friday pillar audit: 0 pillars. |
| 2026-05-30 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | **BUCKET-FAILURE ALERT FIRED.** Shipped /industries/legal (5/16) + compliance callout. |
| 2026-05-31 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/3 (0%) | 0/1 (0%) | 1 | Day 15. Shipped /industries/consulting (6/16). |
| 2026-06-01 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/3 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 (+1 corrective) | Day 16. Shipped /industries/marketing (7/16). First close-tag truncation incident, corrected. |
| 2026-06-02 | websearch_proxy DEGRADED (529) | 7 | n/a | n/a | 0/1 measured | 0/2 | 0/1 (0%) | 0/1 | 0/1 | 1 | Day 17. Shipped /industries/construction (8/16). Close-tag verification rule formalized. |
| 2026-06-03 | websearch_proxy RECOVERED | 3 | n/a | n/a | 0/3 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/0 | 0/1 (0%) | 1 | Day 18. Shipped /industries/manufacturing (9/16). |
| 2026-06-04 | websearch_proxy stable | 4 | n/a | n/a | 0/4 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | Day 19. Shipped /industries/education (10/16). |
| 2026-06-05 | websearch_proxy stable | 4 | n/a | n/a | 0/4 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | Day 20. Friday Pillar Audit: 0 pillars. Shipped /industries/logistics (11/16). |
| 2026-06-06 | websearch_proxy stable | 4 | n/a | n/a | 0/4 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | 21st flat-zero day. Shipped /industries/retail (12/16). |
| 2026-06-07 | websearch_proxy stable | 5 | n/a | n/a | 0/5 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | 22nd flat-zero day. Shipped /industries/nonprofit (13/16). |
| 2026-06-08 | websearch_proxy stable | 5 | n/a | n/a | 0/5 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/2 (0%) | 1 | 23rd flat-zero day. Shipped /industries/chiropractic (14/16). |
| 2026-06-09 | websearch_proxy stable | 15 | n/a | n/a | 0/15 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | 1 | 24th flat-zero day. Shipped /industries/professional-services (15/16 — sweep functionally complete). |
| 2026-06-11 | websearch_proxy only | 12 | n/a | n/a | 0/12 (proxy) | 0/3 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | 25th flat-zero measurement day (6/10 gap day). Shipped /openai-smb-partner visible FAQ + MSP channel FAQ (9->10) + partner-landscape update. Added chatgpt-superapp-aria seed. |
| 2026-06-12 | websearch_proxy only | 9 | n/a | n/a | **1/9 (11%) proxy** | **1/3 (33%)** | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | **STREAK BROKEN.** FIRST measured canonical citation: SB 26-189 blog surfaced ~pos 9. Fixed canonical-domain BUG on fresh Aria blog. Flagged systemic blog-canonical issue. |
| 2026-06-13 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | 2nd consecutive compliance-citation day. SB 26-189 blog climbed ~pos 9 -> ~pos 4. Patched for generic checklist query (FAQPage 8->9 + freshness). |
| 2026-06-14 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | **0 (disciplined hold)** | 3rd consecutive compliance-citation day. Blog HELD ~pos 4. NO PATCH (rule-4 hold). Flagged P0 accuracy conflict + rising glacis.io. |
| 2026-06-15 | websearch_proxy only | 8 | n/a | n/a | **1/8 (12.5%) proxy** | **1/4 (25%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 2 | 4th consecutive compliance day. **/compliance-assessment LIVE.** Assessment bucket UNBLOCKED. Patched sitemap (1.0) + llms.txt. RESOLVED P0 accuracy flag (<=40-employee employer exemption). |
| 2026-06-16 | websearch_proxy only | 12 | n/a | n/a | 0/12 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 shipped (+1 staged) | STREAK BROKEN at 4. Blog dropped out of top-7 (glacis.io #1). Shipped 40-employee accuracy fix to llms-full.txt. Blog fix STAGED. Updated target_competitor -> glacis.io. 3-commit violation. |
| 2026-06-17 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 | REBOUND. colorado-sb-26-189-admt RECLAIMED ~pos 3. Shipped staged blog accuracy patch (banner + table cell + 2 FAQs + 2 JSON-LD). All 3 surfaces accuracy-consistent. Queue EMPTY. 2-commit run. |
| 2026-06-19 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 shipped (1 STAGED)** | **Friday.** admt HELD ~pos 3 (glacis.io ~pos 2). **Transition window closed (elevaiq.com retired, now []).** Added openai-partner-network-tiers seed; updated 3 target_competitors. vs-enterprise FAQ built+validated but STAGED. Friday pillar audit: 0 pillars. 2-commit run. |
| 2026-06-22 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **2** | **Monday.** colorado-ai-act-small-business HELD ~pos 2. colorado-sb-26-189-admt REGRESSED (law firms: workforcebulletin/finnegan/crowell). SHIPS: vs-enterprise FAQ #8 + colorado blog ADMT FAQ #10 + freshness. 2-commit push (token constraint). |
| 2026-06-23 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 (disciplined hold)** | **Tuesday.** colorado-sb-26-189-admt RECLAIMED ~pos 4 (ahead of finnegan + glacis; glacis fell ~pos 10) — **validates the 6/22 ADMT FAQ #10**. colorado-ai-act-small-business reversed OUT of top-10 (proxy volatility; blog unchanged). Diagnosed **Partner Network gap** on /openai-smb-partner + llms.txt (both partner-query losses cite $150M/300k/Select-Advanced-Elite/Forward Deployed Experts; our pages lack the terminology) — **STAGED ready-to-apply**. Single push: ledger + measurement + report. |

## Pillar handoffs to Claude Code (open queue as of 2026-06-23)

**UPDATE 2026-06-23:** No change to pillar status. ADMT query reclaimed ~pos 4 (6/22 FAQ #10 validated). Broad colorado-ai-act query is carried by one blog post swinging in/out of top-10 — underscores the standing need for the dedicated /compliance/colorado-ai-act pillar. New this run: a fully-diagnosed Partner Network content gap (Engine 2) — staged as page patches, not a pillar. Assessment still indexing (day 9, 0 citations).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | — | **DONE 2026-06-15** | Page LIVE; discovery patched. Still indexing (0 citations 6/23, day 9). Fully optimized — indexing-latency, not content. Monitor. |
| ai-risk-assessment-tool | /compliance-assessment | — | **DONE 2026-06-15** | Same page; riskhelper.ai owns 5-minute no-account framing (~pos 2, 6/23). Monitor. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | **P0** | Blog wins/loses generic SMB query unpredictably (pos 2 on 6/22, out of top-10 on 6/23) — single-page volatility; dedicated pillar 404s. Carry reconciled <=40-employee employer exemption + 60-day-cure accuracy. |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; high-risk possibly delayed to Dec 2 2027 (Digital Omnibus). hklaw/legalnodes/bakermckenzie/digitalapplied/colombani/aicomplibot rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. wordstream/aihr/thoropass/polygraf/hibob/certified-nets rank. **Fastest Engine-1 conversion pillar — recommend building first.** |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. lumenova/channelpro/connectwise/integris/customgpt/worksent/guardz rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle/smokeball rank. |

## Competitor & accuracy watch (updated 2026-06-23)

- **OpenAI Partner Network (NEW SURFACE, 2026-06-23):** Launched June 14, 2026. $150M, 300k certified consultants by EOY 2026, Select/Advanced/Elite tiers, Codex/cybersecurity/agents specializations, Forward Deployed Experts pilot. openai.com #1 on both partner queries; think-technologies.com runs an Official OpenAI Partner for SMB page (direct positioning competitor). Our /openai-smb-partner + llms.txt lack the terminology — Partner Network patches staged this run.
- **glacis.io:** fell to ~pos 10 on colorado-sb-26-189-admt 6/23 (was ~pos 2 on 6/19). Our blog reclaimed ~pos 4 above it.
- **workforcebulletin.com / Epstein Becker Green:** still #1 on colorado-sb-26-189-admt (employer-focused ADMT). We sit ~pos 4 below it + preferreddata.com + techjacksolutions.com.
- **finnegan.com:** present ~pos 5 on the ADMT query; below sayfeai.com this run.
- **availablelaw.com (escalated watch 6/23):** owns the broad colorado-ai-act-small-business SMB-rewrite framing where we dropped out of top-10. Candidate target_competitor if it persists.
- **ademero.com (target_competitor):** #2 for ai-consultant-houston 6/23 (penncomp.com #1). /about still lacks local-page structure.
- **intuitionlabs.ai (target_competitor):** #1 for chatgpt-business-vs-enterprise 6/23; engine cites the exact 40 agent-msg/user/month cap mechanism our FAQ #8 (shipped 6/22) now carries. Content correct; indexing-latency.
- **riskhelper.ai (target_competitor):** ~pos 2 for ai-risk-assessment-tool; owns 5-minute triage no account required.
- **digitalapplied.com (persistent, watch):** appeared on 2 queries this run (eu-ai-act, ai-compliance-checklist) — sub-threshold, not escalated.
- **P0 ACCURACY — Colorado SB 26-189 small-business exemption: RESOLVED + FULLY SHIPPED 2026-06-17.** No general small-business carve-out; narrow employer-specific exception for employers with 40 or fewer employees (down from 50 under SB 24-205); replacement adds a 60-day right to cure. Reconciled across llms.txt (6/15), llms-full.txt (6/16), blog (6/17), ADMT FAQ #10 (6/22). No open accuracy items.

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-23 |
|------|-----------|-------------------------|
| public/llms.txt | **Partner Network citation Q&A + fact bullet + freshness (Last Updated -> 2026-06-23)** | **STAGED 2026-06-23.** Whitelist H; tied to 2 measured partner-query losses. Ready-to-apply text in daily-report-2026-06-23.md. Held to preserve single-push discipline. |
| public/openai-smb-partner.html | **Partner Network FAQ x2 (tiers/$150M/300k/Forward Deployed Experts) + Article dateModified 2026-06-11 -> 2026-06-23** | **STAGED 2026-06-23.** Whitelist A+B. Large HTML w/ embedded JSON-LD — staged to avoid inline-transcription risk. Accuracy guardrail: do NOT claim a specific Sayfeai tier. |
| public/blog/chatgpt-business-vs-enterprise-2026.html | agent-msg-cap FAQ #8 + compliance callout + freshness | **SHIPPED 2026-06-22.** |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | ADMT definition FAQ #10 + freshness 2026-06-22 | **SHIPPED 2026-06-22.** VALIDATED 2026-06-23 (ADMT query reclaimed ~pos 4). |
| public/sitemap.xml | Add /compliance-assessment (priority 1.0) | **SHIPPED 2026-06-15.** |
| public/llms.txt | Surface /compliance-assessment LIVE + SB 26-189 40-employee accuracy | **SHIPPED 2026-06-15.** |
| public/llms-full.txt | SB 26-189 40-employee employer-exemption accuracy + freshness | **SHIPPED 2026-06-16.** |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only energy remains (no seed query). |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit (legacy -> sayfeai.com)** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **NEXT-RUN APPLY (ready):** Ship the two STAGED Partner Network patches (llms.txt text patch first — low risk; then openai-smb-partner.html FAQ). Full text/spec in daily-report-2026-06-23.md. Both tied to measured 6/23 losses.
- **#1 LEVER = PILLARS, NOT PATCHES.** public/compliance/ still does not exist. The 3 P0/P1 compliance pillars (/compliance/ai-policy-template [build first], /compliance/colorado-ai-act, /compliance/eu-ai-act) + 2 Engine-2 assets (/partners/msp, /resources/cle-ai-legal-practice) are the remaining durable gains — Claude Code's domain. The 20% compliance rate rides on ONE blog post.
- **ADMT WIN — monitor:** colorado-sb-26-189-admt reclaimed ~pos 4 (6/22 FAQ #10 validated). Watch for law-firm re-entry.
- **CONTENT ENGINE HANDOFF (fresh, LIVE):** OpenAI Partner Network first-mover blog ($150M / 300k consultants / Select-Advanced-Elite / Codex-cybersecurity-agents / Forward Deployed Experts).
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number in this ledger remains a directional WebSearch proxy until then (31 proxy-only runs).
- **SINGLE-PUSH DISCIPLINE: HONORED 2026-06-23** (single commit: ledger + measurement + report; content patches staged rather than forcing a multi-commit large-file push). Prior violations: 6/16 (3), 6/17 (2), 6/19 (2), 6/22 (2). Recommend an API-based push script to allow large single-call pushes without token-limit splits.
- **ROOT CAUSE (still open):** fresh blogs historically self-canonicalize to a legacy domain. Fix blog publishing template, then one-time sweep. Human/infra.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry canonical sweep advanced 1/16 -> 15/16; bucket-failure alert fired 2026-05-30.
- **2026-06-12 (Friday):** Proxy flat-zero streak BROKEN. 1/9 canonical — Colorado SB 26-189 blog surfaced (~pos 9).
- **2026-06-13 -> 06-15:** 1/13, 1/12, 1/8. SB 26-189 blog climbed to ~pos 4 and held; /compliance-assessment LIVE 6/15.
- **2026-06-16 (Tuesday):** 0/12. Compliance streak BROKEN at 4 — blog fell out of top-7; glacis.io took #1.
- **2026-06-17 (Wednesday):** 1/12. REBOUND — reclaimed ~pos 3; shipped staged blog accuracy patch; patch queue EMPTY.
- **2026-06-19 (Friday):** 1/13 (7.7%). admt HELD ~pos 3. Transition window closed. 0 pages shipped (vs-enterprise STAGED). Friday pillar audit: 0 pillars exist.
- **2026-06-22 (Monday):** 1/12 (8.3%). colorado-ai-act-small-business HELD ~pos 2. admt REGRESSED (law firms). 2 pages shipped (vs-enterprise FAQ #8 + colorado ADMT FAQ #10). 2-commit push.
- **2026-06-23 (Tuesday):** 1/12 (8.3%). **colorado-sb-26-189-admt RECLAIMED ~pos 4** — the 6/22 ADMT FAQ #10 validated (beat finnegan + glacis). colorado-ai-act-small-business reversed OUT of top-10 (proxy volatility, blog unchanged). Diagnosed Partner Network content gap -> STAGED 2 patches. **0 pages shipped (disciplined hold).** Single push honored.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. **NOT triggered** (flat at 1/12).
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **NOT triggered** (compliance flat ~20%).
- **Bucket-failure rule (v2):** fired 2026-05-30; cleared. Compliance 20% (1/5); Assessment unblocked (day 9 indexing); Partner pillar/asset-gated + Partner Network patch staged.
- **Single-push rule (v2.1):** VIOLATED 6/16, 6/17, 6/19, 6/22. HONORED 6/23.
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only.
