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
| 2026-05-22 | websearch_proxy only | 14 | n/a | n/a | 0/14 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 3 | Shipped deferred SB 26-189/ADMT alias patch to Colorado blog + llms-full.txt; fixed 2 legacy 'Sayfeai.chat' prose leaks; auto-detected digitalapplied.com. |
| 2026-05-23 | websearch_proxy only | 14 | n/a | n/a | 0/14 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | 1 | /industries/healthcare visible FAQ + comparison table + canonical JSON-LD (1/16 sweep). |
| 2026-05-24 | websearch_proxy only | 14 | n/a | n/a | 0/14 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | Corrected HIPAA over-claim on /blog/chatgpt-healthcare-hipaa-2026. |
| 2026-05-25 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/3 (0%) | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | Cleared realtime-voice FAQ staleness (SB 24-205 -> SB 26-189 / ADMT). |
| 2026-05-26 | websearch_proxy only | 6 | n/a | n/a | 0/6 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/0 | 1 | /blog/chatgpt-business-vs-plus per-user-opt-out vs contractual-org FAQ (FAQPage 6->8). |
| 2026-05-27 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/2 (0%) | 2 | vs-enterprise cited-mechanism FAQ (5->7) + /industries/finance Service url canonical (2/16). |
| 2026-05-28 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | /industries/insurance visible FAQ + 2 FAQs + Service url canonical (3/16). |
| 2026-05-29 | websearch_proxy only | 6 | n/a | n/a | 0/6 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | /industries/real-estate visible FAQ + canonical (4/16). Friday pillar audit: 0 pillars. |
| 2026-05-30 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | **BUCKET-FAILURE ALERT FIRED:** Compliance + Assessment + Partner at 14 days 0%. Shipped /industries/legal (5/16) + compliance callout. |
| 2026-05-31 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/2 (0%) | 0/1 (0%) | 0/3 (0%) | 0/1 (0%) | 1 | **Day 15.** Shipped /industries/consulting (6/16). |
| 2026-06-01 | websearch_proxy only | 7 | n/a | n/a | 0/7 (proxy) | 0/3 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 (+1 corrective) | **Day 16.** Shipped /industries/marketing (7/16). First close-tag truncation incident, corrected. |
| 2026-06-02 | websearch_proxy DEGRADED (529) | 7 | n/a | n/a | 0/1 measured | 0/2 | 0/1 (0%) | 0/1 | 0/1 | 1 | **Day 17.** Shipped /industries/construction (8/16). Close-tag verification rule formalized. |
| 2026-06-03 | websearch_proxy RECOVERED | 3 | n/a | n/a | 0/3 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/0 | 0/1 (0%) | 1 | **Day 18.** Shipped /industries/manufacturing (9/16). |
| 2026-06-04 | websearch_proxy stable | 4 | n/a | n/a | 0/4 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | **Day 19.** Shipped /industries/education (10/16). |
| 2026-06-05 | websearch_proxy stable | 4 | n/a | n/a | 0/4 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | **Day 20. Friday Pillar Audit: 0 pillars.** Shipped /industries/logistics (11/16). |
| 2026-06-06 | websearch_proxy stable | 4 | n/a | n/a | 0/4 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | **21st flat-zero day.** Shipped /industries/retail (12/16). |
| 2026-06-07 | websearch_proxy stable | 5 | n/a | n/a | 0/5 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 1 | **22nd flat-zero day.** Shipped /industries/nonprofit (13/16). |
| 2026-06-08 | websearch_proxy stable | 5 | n/a | n/a | 0/5 (proxy) | 0/1 (0%) | 0/1 (0%) | 0/1 (0%) | 0/2 (0%) | 1 | **23rd flat-zero day.** Shipped /industries/chiropractic (14/16). |
| 2026-06-09 | websearch_proxy stable | 15 | n/a | n/a | 0/15 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | 1 | **24th flat-zero day.** Shipped /industries/professional-services (15/16 — sweep functionally complete). |
| 2026-06-11 | websearch_proxy only | 12 | n/a | n/a | 0/12 (proxy) | 0/3 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | **25th flat-zero measurement day (6/10 gap day).** Shipped /openai-smb-partner visible FAQ + MSP channel FAQ (FAQPage 9->10) + partner-landscape update. Added chatgpt-superapp-aria seed. Patch queue EMPTY. |
| 2026-06-12 | websearch_proxy only | 9 | n/a | n/a | **1/9 (11%) proxy** | **1/3 (33%)** | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | **STREAK BROKEN (proxy).** FIRST measured canonical citation: sayfeai.com Colorado SB 26-189 blog surfaced ~pos 9. Fixed canonical-domain BUG on fresh Aria blog (sayfeai.chat -> sayfeai.com). Flagged systemic blog-canonical issue. |
| 2026-06-13 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | **2nd consecutive compliance-citation day.** SB 26-189 blog climbed ~pos 9 -> ~pos 4. Patched that page for generic 'ai compliance checklist 2026' (FAQPage 8->9 + freshness). |
| 2026-06-14 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | **0 (disciplined hold)** | **3rd consecutive compliance-citation day.** SB 26-189 blog HELD ~pos 4. NO PATCH (rule-4 hold). Flagged P0 accuracy conflict (40-employee exemption) + rising competitor glacis.io (sub-threshold). |
| 2026-06-15 | websearch_proxy only | 8 | n/a | n/a | **1/8 (12.5%) proxy** | **1/4 (25%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 2 | **4th consecutive compliance-citation day** (SB 26-189 blog HELD ~pos 4). **MAJOR: /compliance-assessment is LIVE** (Claude Code shipped the #1 P0 Engine-1 mechanism). Assessment bucket UNBLOCKED. Root-caused assessment losses to a **discovery gap** — patched sitemap (priority 1.0) + llms.txt LIVE Core Page. **RESOLVED P0 accuracy flag**: SB 26-189 retains a narrow <=40-employee EMPLOYER exemption (no general carve-out) — reconciled in llms.txt. |
| 2026-06-16 | websearch_proxy only | 12 | n/a | n/a | 0/12 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 shipped (+1 staged) | **STREAK BROKEN at 4.** Winning Colorado/EU blog dropped OUT of top-7 for colorado-sb-26-189-admt (glacis.io now #1). Shipped 40-employee accuracy fix to **llms-full.txt** (+60-day cure). SAME fix applied+validated on the blog but STAGED (not pushed: 50KB inline-transcription risk). Updated target_competitor -> glacis.io. NOTE: 3-commit file-array violation. |
| 2026-06-17 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 | **REBOUND — streak resumes at 1.** colorado-sb-26-189-admt RECLAIMED ~pos 3 (glacis.io absent from result set); engine synthesis now states the real 40-employee carve-out + 60-day cure. **CLEARED THE STANDING #0:** shipped the staged SB 26-189 accuracy fix to the winning blog (banner + table cell + 2 visible FAQs + 2 JSON-LD answers). All 3 surfaces (llms.txt/llms-full.txt/blog) now accuracy-consistent. Patch queue EMPTY. (Run shipped in 2 commits — file-array discipline still to fix.) |
| 2026-06-19 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | **0 shipped (1 validated patch STAGED)** | **Friday.** colorado-sb-26-189-admt HELD ~pos 3 (glacis.io ~pos 2). **TRANSITION WINDOW CLOSED: dropped elevaiq.com from transition_domains (now []).** Added openai-partner-network-tiers seed; updated 3 target_competitors to #1 domains (ademero.com, riskhelper.ai, intuitionlabs.ai). Built+validated vs-enterprise 40-agent-msg-cap FAQ (sha ce1e00a0) but STAGED (44KB fragile-inline, low-ROI comparison bucket). Friday pillar audit: 0 pillars exist. 2-commit run (single-push violation, logged). |
| 2026-06-22 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/1 (0%) | **2** | **Monday.** colorado-ai-act-small-business HELD ~pos 2 (broader SMB query, high volume). colorado-sb-26-189-admt REGRESSED — law firms entered top positions (workforcebulletin.com/Epstein Becker Green, finnegan.com, crowell.com). **SHIPS: vs-enterprise staged patch** — agent-msg-cap FAQ #8 + compliance callout + dateModified 2026-06-22. **SHIPS: colorado blog ADMT FAQ #10** — ADMT definition + freshness dateModified 2026-06-22. ⚠️ 2-commit push (output token constraint; HTML files in commit 2). |

## Pillar handoffs to Claude Code (open queue as of 2026-06-22)

**UPDATE 2026-06-22:** vs-enterprise staged patch SHIPPED. Colorado blog now has 10 FAQs (ADMT definition FAQ added). Both pages freshness-bumped to 2026-06-22. Colorado-sb-26-189-admt regressed due to law firm competition — ADMT FAQ #10 is the primary counter. Assessment indexing gap persists (day 7, 0 citations). 2-commit push (output token constraint).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | — | **DONE 2026-06-15** | Page LIVE; discovery patched. Still indexing (0 citations 6/22, day 7). Monitor. |
| ai-risk-assessment-tool | /compliance-assessment | — | **DONE 2026-06-15** | Same page; riskhelper.ai owns "5-minute, no-account" framing. Mirror that copy. Monitor. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | **P0** | Blog wins generic SMB query (~pos 2, 6/22) but dedicated pillar 404s; specific ADMT query regressed (law firms). Carry reconciled <=40-employee + 60-day-cure accuracy into the pillar. |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; high-risk possibly delayed to Dec 2 2027 (Digital Omnibus). hklaw/legalnodes/bakermckenzie/digitalapplied/colombani/aicomplibot rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. wordstream/aihr/thoropass/polygraf/hibob/certified-nets rank. **Fastest Engine-1 conversion pillar — recommend building first.** |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. lumenova/channelpro/connectwise/integris/customgpt/worksent rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle/smokeball rank. |

## Competitor & accuracy watch (updated 2026-06-22)

- **glacis.io (stable):** was ~pos 2 on `colorado-sb-26-189-admt` 6/19; law firms appear to have displaced 6/22. Status unclear — websearch proxy only.
- **workforcebulletin.com / Epstein Becker Green (new, escalated 6/22):** employer-focused ADMT deep-dive content. Dominant on `colorado-sb-26-189-admt`. Counter: ADMT definition FAQ #10 ships this run.
- **finnegan.com (new, watch 6/22):** IP/tech law firm with ADMT coverage. Same query as above.
- **crowell.com (new, watch 6/22):** law firm with ADMT employer-compliance content. Same query as above.
- **ademero.com (escalated to target_competitor):** ranked #1 for `ai-consultant-houston` on both 6/17 and 6/19.
- **riskhelper.ai (escalated to target_competitor):** #1 for `ai-risk-assessment-tool`; owns "5-minute triage, no account required" framing.
- **intuitionlabs.ai (was target_competitor, ADDRESSED 6/22):** #1 for `chatgpt-business-vs-enterprise`; cites the precise 40 agent-msg/user/month Business cap. Our FAQ #8 ships this run with the exact same cited mechanism.
- **availablelaw.com (watch):** "Colorado Just Rewrote Its AI Law" — direct SMB-rewrite framing on `colorado-ai-act-small-business`.
- **digitalapplied.com (persistent, watch):** appeared in 3 queries (eu-ai-act, ai-compliance-checklist, openai-partner).
- **P0 ACCURACY — Colorado SB 26-189 small-business exemption: RESOLVED + FULLY SHIPPED 2026-06-17.** No general small-business carve-out; narrow employer-specific exception for employers with **40 or fewer employees** (down from 50 under SB 24-205); replacement adds a **60-day right to cure**. Reconciled across llms.txt (6/15), llms-full.txt (6/16), blog (6/17), ADMT FAQ #10 (6/22). No open accuracy items.

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-22 |
|------|-----------|-------------------------|
| public/blog/chatgpt-business-vs-enterprise-2026.html | Cited-mechanism FAQ: ~40 agent-msg/user/month Business cap as #1 Enterprise-upgrade trigger + Enterprise ~$60/user/150-seat min (FAQPage 7->8, schema+visible) + freshness 5/27->6/22 + compliance assessment callout | **SHIPPED 2026-06-22.** Validated: HTML well-formed, 2 JSON-LD blocks parse, 8 FAQs, canonical sayfeai.com, no banned tokens. Ships after 3-run staged hold. |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | ADMT definition FAQ (#10, visible + JSON-LD) + freshness dateModified/article:modified_time 2026-06-17 -> 2026-06-22 | **SHIPPED 2026-06-22.** 10 FAQ questions, dateModified 2026-06-22T00:00:00Z, canonical sayfeai.com. |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | SB 26-189 40-employee employer-exemption accuracy + 60-day cure + freshness | **SHIPPED 2026-06-17** (round-trip byte-identical). |
| public/sitemap.xml | Add /compliance-assessment (priority 1.0) | **SHIPPED 2026-06-15.** |
| public/llms.txt | Surface /compliance-assessment LIVE + SB 26-189 40-employee accuracy | **SHIPPED 2026-06-15.** |
| public/llms-full.txt | SB 26-189 40-employee employer-exemption accuracy + freshness | **SHIPPED 2026-06-16.** |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only `energy` remains (no seed query). |
| public/openai-smb-partner.html | OpenAI Partner Network refresh ($150M, Select/Advanced/Elite, 300k by EOY 2026, Forward Deployed Experts) | **OPEN — content-engine handoff.** |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit (sayfeai.chat -> sayfeai.com)** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **#1 LEVER = PILLARS, NOT PATCHES.** `public/compliance/` still does not exist. The 3 P0/P1 compliance pillars (/compliance/ai-policy-template [build first], /compliance/colorado-ai-act, /compliance/eu-ai-act) + 2 Engine-2 assets (/partners/msp, /resources/cle-ai-legal-practice) are the remaining gains — Claude Code's domain.
- **ADMT REGRESSION MONITOR:** colorado-sb-26-189-admt regressed (law firm competition 6/22). ADMT FAQ #10 ships today — monitor next run.
- **CONTENT ENGINE HANDOFF (fresh, LIVE):** OpenAI Partner Network ($150M / 300k certified consultants by EOY 2026 / Select-Advanced-Elite tiers / Codex-cybersecurity-agents specializations / Forward Deployed Experts pilot). First-mover blog + /openai-smb-partner refresh.
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number in this ledger remains a directional WebSearch proxy until then (30 proxy-only runs).
- **SINGLE-PUSH DISCIPLINE: ⚠️ 2-COMMIT 2026-06-22** (output token constraint prevented single call; HTML files pushed in commit 2 separately from support files). Prior violations: 6/16 (3 commits), 6/17 (2 commits), 6/19 (2 commits). Recommend adding API-based push script to avoid inline token constraints.
- **ROOT CAUSE (still open):** fresh blogs historically self-canonicalize to sayfeai.chat. Fix blog publishing template, then one-time sweep. Human/infra.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry canonical sweep advanced 1/16 -> 15/16; bucket-failure alert fired 2026-05-30.
- **2026-06-12 (Friday):** Proxy flat-zero streak BROKEN. 1/9 canonical — Colorado SB 26-189 blog surfaced (~pos 9).
- **2026-06-13 -> 06-15:** 1/13, 1/12, 1/8. SB 26-189 blog climbed to ~pos 4 and held; /compliance-assessment LIVE 6/15.
- **2026-06-16 (Tuesday):** 0/12. Compliance streak BROKEN at 4 — blog fell out of top-7; glacis.io took #1.
- **2026-06-17 (Wednesday):** 1/12. REBOUND — reclaimed ~pos 3; shipped staged blog accuracy patch; patch queue EMPTY.
- **2026-06-19 (Friday):** 1/13 (7.7%). colorado-sb-26-189-admt HELD ~pos 3 (glacis.io ~pos 2). Transition window closed (elevaiq.com retired). 0 pages shipped (vs-enterprise patch validated + STAGED). Friday pillar audit: 0 pillars exist. *(No 2026-06-18 run row — treated as gap day.)*
- **2026-06-22 (Monday):** 1/12 (8.3%). colorado-ai-act-small-business HELD ~pos 2 (broader high-volume SMB query). colorado-sb-26-189-admt REGRESSED (law firms: workforcebulletin/finnegan/crowell). 2 pages shipped: vs-enterprise (staged patch — agent-msg-cap FAQ #8) + colorado blog (ADMT FAQ #10 + freshness). ⚠️ 2-commit push (output token constraint).
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. **NOT triggered.**
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **NOT triggered.** Pillar proposals above stand on standing demand evidence regardless.
- **Bucket-failure rule (v2):** fired 2026-05-30; cleared. Compliance 20% (1/5); Assessment unblocked (page live, indexing); Partner pillar/asset-gated.
- **Single-push rule (v2.1):** VIOLATED 6/16, 6/17, 6/19. ⚠️ 2-commit 2026-06-22 (output token constraint).
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only.
