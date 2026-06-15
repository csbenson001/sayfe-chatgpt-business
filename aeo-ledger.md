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
| 2026-06-12 | websearch_proxy only | 9 | n/a | n/a | **1/9 (11%) proxy** | **1/3 (33%)** | 0/2 (0%) | 0/1 (0%) | 0/0 | 1 | **STREAK BROKEN (proxy).** FIRST measured canonical citation: sayfeai.com Colorado SB 26-189 blog surfaced ~pos 9. Fixed canonical-domain BUG on fresh Aria blog (sayfeai.chat -> sayfeai.com). Flagged systemic blog-canonical issue. |
| 2026-06-13 | websearch_proxy only | 13 | n/a | n/a | **1/13 (7.7%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/3 (0%) | 0/0 | 1 | **2nd consecutive compliance-citation day.** SB 26-189 blog climbed ~pos 9 -> ~pos 4. Patched that page for generic 'ai compliance checklist 2026' (FAQPage 8->9 + freshness). |
| 2026-06-14 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/1 (0%) | 0/1 (0%) | **0 (disciplined hold)** | **3rd consecutive compliance-citation day.** SB 26-189 blog HELD ~pos 4. NO PATCH (rule-4 hold). Flagged P0 accuracy conflict (40-employee exemption) + rising competitor glacis.io (sub-threshold). |
| 2026-06-15 | websearch_proxy only | 8 | n/a | n/a | **1/8 (12.5%) proxy** | **1/4 (25%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 2 | **4th consecutive compliance-citation day** (SB 26-189 blog HELD ~pos 4). **MAJOR: /compliance-assessment is LIVE** (Claude Code shipped the #1 P0 Engine-1 mechanism). Assessment bucket UNBLOCKED. Root-caused the assessment losses to a **discovery gap** (page absent from sitemap.xml; "shipping"/future-tense in llms.txt) — patched both: added /compliance-assessment to sitemap (priority 1.0) + surfaced it as a LIVE query-targeted Core Page in llms.txt. **RESOLVED P0 accuracy flag**: verified SB 26-189 retains a narrow <=40-employee EMPLOYER exemption (no general carve-out) via Buchalter + Consumer Finance Monitor + LawFuel — reconciled in llms.txt (2 spots). glacis.io recurs (1x, sub-threshold). |

## Pillar handoffs to Claude Code (open queue as of 2026-06-15)

**UPDATE 2026-06-15:** `/compliance-assessment` is now **LIVE** (Claude Code shipped it) — the #1 P0 is DONE. The two assessment queries are no longer pillar-gated; this run patched the discovery layer (sitemap + llms.txt) to surface the live page. Remaining open pillars below. Transition window: elevaiq.com legacy counting ends 2026-06-18 (3 days remaining).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | — | **DONE 2026-06-15** | Page LIVE; discovery patched (sitemap + llms.txt). Monitor for first citation as it indexes. |
| ai-risk-assessment-tool | /compliance-assessment | — | **DONE 2026-06-15** | Same page; on-page already claims "free 5-minute, no signup." Discovery patched. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | **P0** | Blog wins SB 26-189 phrasing (~pos 4) but dedicated pillar 404s; generic query lost to lawfuel/iapp/jbakerlaw. Accuracy now reconciled (<=40-employee employer exemption) — carry into the pillar. |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; high-risk possibly delayed to Dec 2 2027 (Digital Omnibus). hklaw/bakermckenzie/iapp/digitalapplied/colombani rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. aihr/thoropass/polygraf/hibob rank. |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. lumenova/channelpro/connectwise/integris/managedservicesjournal rank. Zero MSP content on-site. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle rank. |

## Competitor & accuracy watch (updated 2026-06-15)

- **glacis.io (watch continues):** "Colorado ADMT Law (SB 26-189): Complete Compliance Guide 2026" ranks ~pos 2 for `colorado-sb-26-189-admt` — the single biggest threat to our ONLY winning citation. Appeared 1x this run (still below the 3+ auto-add threshold). If it recurs 3+ next run, auto-add as `target_competitor` and diagnose.
- **P0 ACCURACY CONFLICT — Colorado SB 26-189 small-business exemption: RESOLVED 2026-06-15.** Verified against three authoritative sources this run (Buchalter law firm, Consumer Finance Monitor, LawFuel): SB 26-189 has **no general** small-business carve-out from its core consumer notice-and-transparency duties, **but retains one narrow employer-specific exception** — in the employment context, employers with **40 or fewer employees** are exempt from certain employee-facing ADMT obligations (down from the 50-employee threshold under SB 24-205). It is a limited employer exemption only; it does not relieve a small business of the consumer-facing duties or of NYC LL144 / the EU AI Act. **Reconciled in llms.txt (2 spots) this run.** **STILL TO DO (staged, verified, ready to apply next run):** the same nuance in `public/blog/ai-compliance-colorado-eu-small-business-2026.html` (visible copy: update banner, comparison-table row, the two 'small business exempt' FAQs; + matching JSON-LD FAQ answers) and `public/llms-full.txt`. Held off this run to avoid churning the single winning page.

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-15 |
|------|-----------|-------------------------|
| public/sitemap.xml | Add /compliance-assessment (Engine-1 conversion page; priority 1.0) | **SHIPPED 2026-06-15.** Was entirely missing from sitemap. |
| public/llms.txt | Surface /compliance-assessment as LIVE Core Page + present-tense Q&A + SB 26-189 40-employee accuracy reconciliation (2 spots) | **SHIPPED 2026-06-15.** Last Updated 2026-06-08 -> 2026-06-15. |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | SB 26-189 40-employee employer-exemption accuracy (visible + JSON-LD) | **STAGED / READY — apply next run.** Not touched this run (winning page; avoid churn). |
| public/llms-full.txt | SB 26-189 40-employee employer-exemption accuracy | **STAGED / READY — apply next run.** |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only `energy` remains (no seed query). |
| public/openai-smb-partner.html | Visible FAQ accordion + MSP/consultant channel FAQ | **SHIPPED 2026-06-11.** Consider OpenAI Partner Network / Frontier Alliances refresh (fresh news). |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit (sayfeai.chat -> sayfeai.com)** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **#1 LEVER COMPLETED — /compliance-assessment is LIVE.** The Engine-1 conversion mechanism shipped. This run patched its discovery layer (sitemap + llms.txt). **Next:** monitor the two assessment queries daily for first citation as the page indexes; if still 0% after ~10 days, diagnose on-page vs competitors (riskhelper.ai, ai-180.solutions).
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number in this ledger remains a directional WebSearch proxy until then.
- **CONTENT ENGINE HANDOFF (fresh news):** OpenAI launched a formal **OpenAI Partner Network / Frontier Alliances** (May–Jun 2026; $150M; tiers Select/Advanced/Elite; goal 300k certified consultants by EOY 2026). First-mover blog + a /openai-smb-partner refresh — strengthens `openai-partner-for-consultants` and our authorized-partner positioning.
- **PILLAR QUEUE:** 3 P0/P1 compliance pillars (/compliance/colorado-ai-act, /compliance/eu-ai-act, /compliance/ai-policy-template) + 2 Engine-2 assets (/partners/msp, /resources/cle-ai-legal-practice). Surgical patching has hit its ceiling — remaining gains are pillars, not patches.
- **APPLY STAGED ACCURACY FIX:** blog + llms-full.txt 40-employee employer-exemption reconciliation (verified; staged above).
- **PRICING DISCREPANCY (still open):** proxy says Business $20 annual / $25-30 monthly post-April-2; site canon $25 monthly / $20 annual. Verify vs OpenAI partner portal (out of optimizer scope, rule 4).
- **ROOT CAUSE (still open):** fresh blogs historically self-canonicalize to sayfeai.chat. Fix blog publishing template, then one-time sweep. Human/infra.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry canonical sweep advanced 1/16 -> 15/16; bucket-failure alert fired 2026-05-30.
- **2026-06-12 (Friday):** Proxy flat-zero streak BROKEN. 1/9 canonical — Colorado SB 26-189 blog surfaced (~pos 9). Fresh Aria blog self-canonicalized to sayfeai.chat; corrected.
- **2026-06-13 (Saturday):** 1/13 (7.7%). colorado-sb-26-189-admt climbed ~pos 9 -> ~pos 4.
- **2026-06-14 (Sunday):** 1/12 (8.3%). Compliance citation holds 3rd consecutive day. NO PATCH (rule-4 hold). Flagged P0 accuracy conflict + glacis.io.
- **2026-06-15 (Monday):** 1/8 (12.5%). **Compliance citation holds 4th consecutive day** (~pos 4). **/compliance-assessment went LIVE** (Claude Code) — #1 P0 done; Assessment bucket unblocked. Diagnosed assessment losses as a **discovery gap** and patched it: sitemap.xml (+/compliance-assessment, priority 1.0) + llms.txt (live query-targeted Core Page + present-tense Q&A). **RESOLVED P0 accuracy flag** (SB 26-189 <=40-employee employer exemption verified via Buchalter/CFM/LawFuel; reconciled in llms.txt; blog + llms-full.txt staged). Regression rule NOT triggered.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. (Not triggered — citation rate flat-positive.)
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **Compliance posted a citation 4 consecutive days (6/12–6/15) — 4 of 7. Watch; if it reaches 7 (~2026-06-18), emit 2 pillar proposals next.**
- **Bucket-failure rule (v2):** fired 2026-05-30. **Compliance relief holds (4 days running). Assessment (0/2) now UNBLOCKED (page live; discovery patched 6/15) — watch for first citation. Partner (0/2) remains pillar-gated.**
- **Single-push rule (v2.1):** this run = 2 commits (site files sitemap+JSON+report; then llms.txt + ledger). First push omitted llms.txt/ledger from the file array; corrected in the second commit.
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only.
