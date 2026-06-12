# Sayfeai AEO Ledger

Daily tracking of how often answer engines cite **sayfeai.com** (canonical) and **elevaiq.com** (legacy / transition domain through 2026-06-18) for our seed queries.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

## Pre-v2 ledger (legacy)

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|---------|
| 2026-05-17 | 8 (websearch proxy) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus -> $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |
| 2026-05-18 | 8 (websearch proxy) | 0/8 (0.0%) | 0/8 (0.0%) | 0/8 (0.0%) | 5 | Fixed stale $30 pricing on /about.html; strengthened /industries/real-estate; added Feb 17 2026 Rakoff ruling FAQ to /industries/legal; refreshed /blog/best-ai-tools-small-business-2026; added Legal/regulatory facts block to /llms.txt |

## v2 ledger (canonical sayfeai.com + bucket-level reporting)

| Date | Engines | Total | Cited (CGPT) | Cited (Claude) | Cited (GAIO) | Compliance% | Assessment% | Partner% | Industry% | Pages patched | Top fix |
|------|---------|------:|-------------:|---------------:|-------------:|------------:|------------:|---------:|----------:|--------------:|---------|
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
| 2026-06-12 | websearch_proxy only | 9 | n/a | n/a | **1/9 (11%) proxy** | **1/3 (33%)** | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | **STREAK BROKEN (proxy).** FIRST measured canonical citation: sayfeai.com Colorado SB 26-189 blog surfaced ~pos 9 for colorado-sb-26-189-admt (compliance hit). **Friday Pillar Audit: still 0 pillars.** Fixed canonical-domain BUG on fresh Aria blog: canonical+og+twitter+JSON-LD pointed to non-canonical **sayfeai.chat** -> corrected to **sayfeai.com** + dateModified bump. **SYSTEMIC: content engine appears to publish blogs with sayfeai.chat canonicals — likely root-cause of fresh-content flat-zero; flagged for template/infra fix.** |

## Pillar handoffs to Claude Code (open queue as of 2026-06-12)

These queries have no target page yet — they need a pillar built by Claude Code. **Re-confirmed losing this run, except the Colorado SB 26-189 *blog* (not pillar) now surfaces.** Transition window: elevaiq.com legacy counting ends 2026-06-18 (6 days remaining).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | very high | **P0** | ComplySense (techno-pm, NEW) + Prompts.ai + ai-180.solutions + ispartnersllc + Growth Capital rank on free/<5-min. ~11 site-wide CTAs still 404. Build it. |
| ai-risk-assessment-tool | /compliance-assessment | high | P0 | TrustLayer + RiskHelper.ai + Logicballs own '5-minute / no-signup'. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | P0 | Blog now surfaces for SB 26-189, but dedicated pillar still 404s. SB 26-189 / ADMT framing (signed 5/14, effective 1/1/2027). |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; SME simplified pathways. ec.europa.eu/lw.com rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. 76.4% of MSPs expect AI services = 11-50% of revenue. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. |

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-12 |
|------|-----------|-------------------------|
| public/blog/chatgpt-superapp-aria-redesign-business-2026.html | Canonical-domain correction (sayfeai.chat -> sayfeai.com) + dateModified bump | **SHIPPED 2026-06-12.** Validation: html.parser OK; 2 JSON-LD parse (Article + FAQPage==5); sayfeai.chat==0; elevaiq==0; Vandelay==0; canonical==sayfeai.com; dateModified==2026-06-12, datePublished preserved; close tags present; 30,220 bytes (<1% change). |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only `energy` remains (no seed query; cannot tie to a measured diagnosis under rule 4). |
| public/openai-smb-partner.html | Visible FAQ accordion + MSP/consultant channel FAQ | **SHIPPED 2026-06-11.** |
| public/sitemap.xml | industry locs canonical + lastmod | **SHIPPED 2026-05-21.** No touch this run. |
| public/llms.txt / llms-full.txt | SB 26-189 + ADMT aliases; enrichment | **SHIPPED 2026-05-21/22.** No touch this run. |
| ALL public/blog/*.html (~55 files) | **NEW SYSTEMIC: canonical domain audit (sayfeai.chat -> sayfeai.com)** | **FLAGGED — NOT swept.** Aria proved at least one fresh blog self-canonicalizes to the wrong domain. Site-wide sweep likely needed but beyond a single measured diagnosis (rule 4) and better fixed at the content-engine template / infra level. Handoff: audit blog template canonical + og + JSON-LD url tokens. |

## Open recommendations (queued for next run)

- **ROOT-CAUSE CANDIDATE (2026-06-12):** Fresh blog content self-canonicalizing to **sayfeai.chat** instead of canonical **sayfeai.com**. Would structurally suppress sayfeai.com citations for all new posts — consistent with the fresh-content flat-zero despite a daily content engine. **Highest-leverage non-pillar fix:** correct the blog publishing template (canonical/og/JSON-LD url -> sayfeai.com), then one-time sweep existing blog files. Optimizer fixed the one measured page (Aria) this run; template/sweep is a human/infra action.
- **BUCKET-FAILURE ALERT — partial relief:** Compliance posted its first measured citation (1/3), breaking compliance's 0% streak. **Assessment (0/2) and Partner (0/1) remain at 0%** — alert continues for those pending the P0 assessment pillar and P2 MSP asset.
- **PRICING DISCREPANCY (from content engine 6/11):** proxy answers state ChatGPT Business $25 monthly / $20 annual, matching a competitor's claimed April-2 cut; site canon $25 annual / $30 monthly. ~15 posts may cite stale pricing. Verify against the OpenAI partner portal before any batch update (out of optimizer scope under rule 4).
- **Patchable queue after this run:** effectively EMPTY again. Only newly surfaced patchable surface is the systemic blog-canonical sweep, held for the template/infra fix. Strategy remains blocked on 4 P0 pillars + 2 Engine-2 assets.
- **API-key operational lever (UNCHANGED):** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY keys remain the #1 lever for real (non-proxy) measurement.
- **Watch competitors:** ai-180.solutions; madewell.ai (appeared again on vs-enterprise); techno-pm.com / ComplySense (new free <5-min checker). None at 3+ in-run threshold (single-engine proxy).

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline held; industry canonical sweep advanced 1/16 -> 15/16 (functionally complete); bucket-failure alert fired 2026-05-30 and remained active.
- **2026-06-11 (day 26; 25th measured flat-zero):** 0/12. 6/10 gap day. Shipped last queued patchable item. Patch supply exhausted; remaining losses traced to non-existent pillars.
- **2026-06-12 (Friday):** **Proxy flat-zero streak BROKEN.** 1/9 canonical — sayfeai.com Colorado SB 26-189 blog surfaced (~pos 9). First proxy surfacing of a sayfeai.com page for a priority-bucket query (likely on-page query-match win — blog title contains the bill number — plus accrued freshness). Compliance 1/3; Assessment 0/2 + Partner 0/1 still zero. **Friday Pillar Audit:** public/compliance/ still absent — 0 pillars. **Key finding:** fresh Aria blog self-canonicalized to sayfeai.chat; corrected to sayfeai.com. Surfaced likely systemic root-cause now flagged for template/infra fix. Regression rule NOT triggered (a positive blip is not a downtrend). Transition window: 6 days remaining.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. (Not triggered.)
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. (Compliance up 1 day — watch.)
- **Bucket-failure rule (v2):** fired 2026-05-30 for Compliance + Assessment + Partner. **Compliance cleared its 0% today (1/3); Assessment + Partner remain in alert.**
- **Single-push rule (v2.1):** single push per run, partitioned by concern if needed. This run: 2 commits (HTML; then measurements + ledger + report).
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only. Highest-leverage strategic improvement pending remains the `/compliance-assessment` MVP (~11 CTAs still 404).
