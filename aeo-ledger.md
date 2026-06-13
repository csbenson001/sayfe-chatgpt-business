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
| 2026-06-13 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | **2nd consecutive day with a compliance citation.** SB 26-189 blog climbed ~pos 9 → ~pos 4 for colorado-sb-26-189-admt. Patched that same page to also win generic "ai compliance checklist 2026": added checklist-phrased FAQ (FAQPage 8→9) + freshness bump (dateModified 5/22→6/13). Assessment + Partner still 0% (pillar-gated). No new competitors ≥3. |

## Pillar handoffs to Claude Code (open queue as of 2026-06-13)

These queries have no target page yet — they need a pillar built by Claude Code. **Re-confirmed losing this run, except the Colorado SB 26-189 *blog* (not pillar) now surfaces (~pos 4).** Transition window: elevaiq.com legacy counting ends 2026-06-18 (5 days remaining).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | very high | **P0** | Prompts.ai + ai-180.solutions + growthcapitalcorp + fitgap rank on free/<5-min. ~11 site-wide CTAs still 404. Build it. |
| ai-risk-assessment-tool | /compliance-assessment | high | P0 | RiskHelper.ai + TrustLayer + MyMap own '5-minute / no-signup'. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | P0 | Blog surfaces for SB 26-189 (~pos 4), but dedicated pillar still 404s; generic query lost to lawfuel/iapp/jbakerlaw. SB 26-189 / ADMT framing (signed 5/14, effective 1/1/2027). |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; hklaw/bakermckenzie/ec.europa.eu/digitalapplied rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. lumenova/channelpro/connectwise/integris rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle rank. |

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-13 |
|------|-----------|-------------------------|
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | Checklist-phrased FAQ (FAQPage 8->9) + freshness bump (dateModified 5/22->6/13) to win generic 'ai compliance checklist 2026' | **SHIPPED 2026-06-13** (2 commits: patch, then a fidelity-fix restoring 1 JSON-LD FAQ entry briefly dropped in the first push). Validation: live file byte-identical to validated source; html.parser OK; Article + FAQPage==9 parse; elevaiq/sayfeai.chat/Vandelay==0; canonical==sayfeai.com; ends </html>. |
| public/blog/chatgpt-superapp-aria-redesign-business-2026.html | Canonical-domain correction (sayfeai.chat -> sayfeai.com) + dateModified bump | **SHIPPED 2026-06-12.** No touch this run. |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only `energy` remains (no seed query; cannot tie to a measured diagnosis under rule 4). |
| public/openai-smb-partner.html | Visible FAQ accordion + MSP/consultant channel FAQ | **SHIPPED 2026-06-11.** |
| public/sitemap.xml | industry locs canonical + lastmod | **SHIPPED 2026-05-21.** No touch this run. |
| public/llms.txt / llms-full.txt | SB 26-189 + ADMT aliases; enrichment | **SHIPPED 2026-05-21/22.** No touch this run. |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit (sayfeai.chat -> sayfeai.com)** | **FLAGGED — NOT swept.** Site-wide sweep beyond a single measured diagnosis (rule 4); fix at content-engine template/infra level. |

## Open recommendations (queued for next run)

- **ROOT-CAUSE CANDIDATE (2026-06-12, still open):** Fresh blog content self-canonicalizing to **sayfeai.chat** instead of canonical **sayfeai.com**. Correct the blog publishing template (canonical/og/JSON-LD url -> sayfeai.com), then one-time sweep existing blog files. Human/infra action.
- **BUCKET-FAILURE ALERT — partial relief holds:** Compliance posted a citation 2 consecutive days (1/9 then 1/13). **Assessment (0/2) and Partner (0/3) remain at 0%** — alert continues for those pending the P0 assessment pillar and P2 MSP asset.
- **PRICING DISCREPANCY (from content engine 6/11):** proxy answers state ChatGPT Business $25 monthly / $20 annual, matching a competitor's claimed April-2 cut; site canon $25 annual / $30 monthly. Verify against OpenAI partner portal before any batch update (out of optimizer scope under rule 4).
- **Patchable queue after this run:** effectively EMPTY again. Remaining measured losses are pillar-gated (4 P0 pillars + 2 Engine-2 assets).
- **API-key operational lever (UNCHANGED):** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY keys remain the #1 lever for real (non-proxy) measurement.
- **Watch competitors:** digitalapplied.com (eu + checklist) and pathopt.com (checklist + assessment) recurred but already tracked. None NEW at the 3+ in-run threshold (single-engine proxy).

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline held; industry canonical sweep advanced 1/16 -> 15/16 (functionally complete); bucket-failure alert fired 2026-05-30 and remained active.
- **2026-06-11 (day 26; 25th measured flat-zero):** 0/12. 6/10 gap day. Shipped last queued patchable item. Patch supply exhausted; remaining losses traced to non-existent pillars.
- **2026-06-12 (Friday):** **Proxy flat-zero streak BROKEN.** 1/9 canonical — sayfeai.com Colorado SB 26-189 blog surfaced (~pos 9). Compliance 1/3; Assessment 0/2 + Partner 0/1 still zero. **Friday Pillar Audit:** public/compliance/ still absent — 0 pillars. Fresh Aria blog self-canonicalized to sayfeai.chat; corrected. Regression rule NOT triggered. Transition window: 6 days remaining.
- **2026-06-13 (Saturday):** 1/13 (7.7%) proxy — positive blip holds for a 2nd day. colorado-sb-26-189-admt climbed ~pos 9 -> ~pos 4 (same page: /blog/ai-compliance-colorado-eu-small-business-2026). Compliance 1/5 (rate down only because the sample widened to 5 compliance queries; absolute citation held). Assessment 0/2 + Partner 0/3 remain pillar-gated (bucket-failure alert continues for those two). Patched the winning page to also target the generic 'ai compliance checklist 2026' query (checklist FAQ + freshness). No Friday audit (Saturday). Transition window: 5 days remaining (elevaiq.com legacy counting ends 2026-06-18). Regression rule NOT triggered.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. (Not triggered.)
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. (Compliance posted a citation 2 consecutive days — 2 of 7 — watch.)
- **Bucket-failure rule (v2):** fired 2026-05-30 for Compliance + Assessment + Partner. **Compliance has now posted a citation 2 days running; Assessment + Partner remain in alert.**
- **Single-push rule (v2.1):** single push per run, partitioned by concern if needed. This run: 2 commits (HTML patch + 1 fidelity-fix; then measurements + ledger + report).
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only. Highest-leverage strategic improvement pending remains the `/compliance-assessment` MVP (~11 CTAs still 404).
