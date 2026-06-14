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
| 2026-06-13 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | **2nd consecutive day with a compliance citation.** SB 26-189 blog climbed ~pos 9 -> ~pos 4 for colorado-sb-26-189-admt. Patched that same page to also win generic "ai compliance checklist 2026": added checklist-phrased FAQ (FAQPage 8->9) + freshness bump (dateModified 5/22->6/13). Assessment + Partner still 0% (pillar-gated). No new competitors >=3. |
| 2026-06-14 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | **0 (disciplined hold)** | **3rd consecutive compliance-citation day.** SB 26-189 blog HELD ~pos 4 (did not climb; lawfuel/glacis.io/buchalter ahead). **NO PATCH — rule-4 hold:** industry sweep complete (15/16), winning page held steady (4th rapid dateModified bump = churn, not value), all other losses pillar-gated or already-optimal (healthcare current; vs-plus/pricing mirrored in llms.txt). Flagged **P0 accuracy conflict** (SB 26-189 40-employee exemption: proxy sources vs our 'no carve-out' claim) for human verification, NOT auto-rewritten. Flagged rising competitor **glacis.io** (1x, sub-threshold) on our one winning query. |

## Pillar handoffs to Claude Code (open queue as of 2026-06-14)

These queries have no target page yet — they need a pillar built by Claude Code. **Re-confirmed losing this run.** The Colorado SB 26-189 *blog* (not pillar) still surfaces (~pos 4, held). Transition window: elevaiq.com legacy counting ends 2026-06-18 (4 days remaining).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | very high | **P0** | ai-180.solutions + prompts.ai + fitgap + growthcapitalcorp rank on free/no-consultant. ~11 site-wide CTAs still 404. THE Engine-1 conversion mechanism. Build it. |
| ai-risk-assessment-tool | /compliance-assessment | high | P0 | riskhelper.ai owns "simple 5-minute triage, free, no account"; TrustLayer + MyMap also. Exact positioning the MVP must claim. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | **P0** | Blog wins SB 26-189 phrasing (~pos 4) but dedicated pillar 404s; generic query lost to lawfuel/iapp/jbakerlaw. SB 26-189 / ADMT framing (signed 5/14, effective 1/1/2027). **NOTE accuracy flag below on the 40-employee exemption.** |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; high-risk possibly delayed to Dec 2 2027 (Digital Omnibus / Council pending). hklaw/bakermckenzie/iapp/digitalapplied rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. lumenova/channelpro/connectwise/integris rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle rank. |

## Competitor & accuracy watch (opened 2026-06-14)

- **glacis.io (NEW watch):** "Colorado ADMT Law (SB 26-189): Complete Compliance Guide 2026" ranks ~pos 2 for `colorado-sb-26-189-admt` — the single biggest threat to our ONLY winning citation. Appeared 1x this run (below the 3+ auto-add threshold). If it recurs 3+ next run, auto-add as `target_competitor` for that query and diagnose.
- **P0 ACCURACY CONFLICT — Colorado SB 26-189 small-business exemption:** proxy sources (lawfuel.com, glacis.io) assert SB 26-189 keeps an **employer-specific exemption at 40-or-fewer employees** (down from 50). Our llms.txt + Colorado/EU blog state firmly there is **no** small-business carve-out. These appear to conflict; sources hedge ("verify against the enrolled bill text"). **Not auto-rewritten** (would risk introducing inaccuracy onto our one winning page). Verify against the enrolled SB 26-189 text, then reconcile llms.txt, llms-full.txt, and /blog/ai-compliance-colorado-eu-small-business-2026.

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-14 |
|------|-----------|-------------------------|
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | Checklist-phrased FAQ + freshness | **SHIPPED 2026-06-13.** No touch this run (held ~pos 4; no churn justified). **Pending P0 accuracy reconciliation** on 40-employee exemption. |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only `energy` remains (no seed query; cannot tie to a measured diagnosis under rule 4). |
| public/industries/healthcare.html | ChatGPT-for-Healthcare currency | **VERIFIED CURRENT this run** — already covers Jan 2026 product, BAA, comparison table. No patch needed. |
| public/openai-smb-partner.html | Visible FAQ accordion + MSP/consultant channel FAQ | **SHIPPED 2026-06-11.** |
| public/llms.txt / llms-full.txt | SB 26-189 + ADMT + EU Digital Omnibus enrichment | **VERIFIED CURRENT this run** (SB 26-189, EU Dec-2027 high-risk delay, ChatGPT for Healthcare, Heppner all present and accurate). No patch needed. **Pending P0 accuracy reconciliation** on 40-employee exemption. |
| public/sitemap.xml | industry locs canonical + lastmod | **SHIPPED 2026-05-21.** No touch this run. |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit (sayfeai.chat -> sayfeai.com)** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **#1 LEVER — BUILD /compliance-assessment (P0):** Re-confirmed losing today; ai-180.solutions and riskhelper.ai own the exact "free 5-minute, no-signup" positioning. ~11 CTAs still 404. Single highest-ROI build on the board and the Engine-1 conversion mechanism. Claude Code.
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number in this ledger is a directional proxy until then. Cheapest unlock for real per-engine measurement.
- **PILLAR QUEUE:** 4 P0 compliance pillars + 2 Engine-2 assets (see handoff table). Surgical HTML patching has hit its ceiling — the remaining gains are pillars, not patches.
- **P0 ACCURACY:** reconcile SB 26-189 40-employee exemption against enrolled bill text (see watch section).
- **PRICING DISCREPANCY (still open):** proxy says Business $20 annual / $25-30 monthly post-April-2; site canon $25 monthly / $20 annual. Verify vs OpenAI partner portal (out of optimizer scope, rule 4).
- **ROOT CAUSE (still open):** fresh blogs historically self-canonicalize to sayfeai.chat. Fix blog publishing template, then one-time sweep. Human/infra.
- **Patchable queue after this run:** EMPTY. All remaining measured losses are pillar-gated or already-optimal.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry canonical sweep advanced 1/16 -> 15/16 (functionally complete); bucket-failure alert fired 2026-05-30.
- **2026-06-12 (Friday):** Proxy flat-zero streak BROKEN. 1/9 canonical — Colorado SB 26-189 blog surfaced (~pos 9). Fresh Aria blog self-canonicalized to sayfeai.chat; corrected.
- **2026-06-13 (Saturday):** 1/13 (7.7%). colorado-sb-26-189-admt climbed ~pos 9 -> ~pos 4. Patched winning page for generic 'ai compliance checklist 2026'.
- **2026-06-14 (Sunday):** 1/12 (8.3%). **Compliance citation holds a 3rd consecutive day**; SB 26-189 blog HELD ~pos 4 (did not climb — lawfuel/glacis.io/buchalter ahead). **NO PATCH (rule-4 disciplined hold):** patch supply genuinely exhausted — industry sweep complete, winning page steady, all else pillar-gated or already-optimal. Flagged P0 accuracy conflict (40-employee exemption) for human verification + rising competitor glacis.io (sub-threshold). No Friday audit (Sunday). Transition window: 4 days remaining. Regression rule NOT triggered.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. (Not triggered — citation rate flat-positive.)
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **Compliance posted a citation 3 consecutive days (6/12, 6/13, 6/14) — 3 of 7. Watch; if it reaches 7 (~2026-06-18), emit 2 pillar proposals next.**
- **Bucket-failure rule (v2):** fired 2026-05-30. **Compliance has now posted a citation 3 days running (relief holds); Assessment (0/2) + Partner (0/1) remain in alert — both pillar-gated.**
- **Single-push rule (v2.1):** this run = 2 commits (measurements; then ledger + report). No HTML.
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only. Highest-leverage strategic improvement pending remains the /compliance-assessment MVP (~11 CTAs still 404).
