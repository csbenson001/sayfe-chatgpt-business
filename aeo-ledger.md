# Sayfeai AEO Ledger

Daily tracking of how often answer engines cite **sayfeai.com** (canonical) and **elevaiq.com** (legacy / transition domain through 2026-06-18) for our seed queries.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

## Pre-v2 ledger (legacy)

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|---------|
| 2026-05-17 | 8 (websearch proxy — no API keys present) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus → $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |
| 2026-05-18 | 8 (websearch proxy — no API keys; same 8 as 2026-05-17 baseline) | 0/8 (0.0%) | 0/8 (0.0%) | 0/8 (0.0%) | 5 | Fixed stale $30 pricing on /about.html (same bug pattern as yesterday's vs-plus fix); strengthened /industries/real-estate with 58% adoption + CA AB 723 disclosure + 6 FAQs; added Feb 17 2026 Rakoff privilege ruling FAQ to /industries/legal; refreshed /blog/best-ai-tools-small-business-2026 dateModified + SBE 82% stat + Claude-vs-ChatGPT FAQ; added Legal/regulatory facts block to /llms.txt |

## v2 ledger (canonical sayfeai.com + bucket-level reporting)

| Date | Engines | Total | Cited (CGPT) | Cited (Claude) | Cited (GAIO) | Compliance% | Assessment% | Partner% | Industry% | Pages patched | Top fix |
|------|---------|------:|-------------:|---------------:|-------------:|------------:|------------:|---------:|----------:|--------------:|---------|
| 2026-05-19 | websearch_proxy only (no API keys for CGPT/Claude/GAIO/Perplexity) | 10 | n/a — proxy | n/a — proxy | n/a — proxy | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 (no industry sampled) | 3 | Intelligence layer (AM run): refreshed /llms.txt with citation Q&A + Brazoria County / 50-states-plus-Canada service area; auto-detected 8 target_competitor entries; logged 5 pillar handoffs to Claude Code (3× /compliance/* + 2× /compliance-assessment). HTML layer (continuation run): rewrote /blog/ai-compliance-colorado-eu-small-business-2026.html for SB 189 (Polis signed May 14, effective Jan 1 2027) with full ElevaIQ→Sayfeai rebrand across canonical/meta/OG/JSON-LD/body/nav/footer + new "What changed in May 2026?" FAQ + /compliance-assessment callout + dateModified bump; added LocalBusiness/ProfessionalService JSON-LD to /about.html (Houston + Brazoria County + GeoCoordinates 29.7604,-95.3698 + areaServed US+Canada with 50 state subdivisions + Vandelay parentOrg + OfferCatalog with 3 services). |
| 2026-05-20 | websearch_proxy only (no API keys present) | 14 | n/a — proxy | n/a — proxy | n/a — proxy | 0/3 (0%) | 0/2 (0%) | 0/2 (0%) | 0/2 (0%) | 5 | Caught the EU Digital Omnibus provisional deal (high-risk obligations may move from Aug 2 2026 → Dec 2 2027; transparency obligations unchanged) — surfaced in Mondaq + ISMS competitor pages. Patched /llms.txt + /llms-full.txt + /blog/ai-compliance-colorado-eu-small-business-2026.html with the Digital Omnibus framing (banner addendum, new FAQ, FAQPage JSON-LD, refreshed comparison table). Added "Heppner / Rakoff ruling" case-name alias to /industries/legal.html FAQ + body (caught via GC AI competitor using "Heppner" while we used only "Rakoff"). Added competitor-displacement FAQ to /openai-smb-partner.html explicitly naming Think Technologies, Codestone, Cloudwerx, Madewell AI. Brought llms-full.txt up to date (it was 3 days behind llms.txt) with all May 2026 regulatory facts and 4 new Q&As. Pre-existing "Vandelay Consulting Inc." body-prose leaks on /openai-smb-partner.html cleaned up while editing. **Note: shipped in 3 commits this run instead of 1 — single-push rule inadvertently violated; tool-call payload was split.** |

## Pillar handoffs to Claude Code (open queue as of 2026-05-20)

These queries have no target page on the site yet — they need a pillar built by Claude Code before the AEO optimizer can patch them:

| Query ID | Target page needed | Citation demand | Notes |
|----------|--------------------|--------------:|-------|
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | Now requires SB 189 framing (signed 2026-05-14, effective 2027-01-01). Replaces SB 24-205. **The 2026-05-19 Colorado blog rewrite + 2026-05-20 EU Digital Omnibus update on the same blog provide ready-to-port SB 189 + EU AI Act content for this pillar.** |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | August 2, 2026 transparency obligations confirmed. **NEW 2026-05-20:** EU Digital Omnibus provisional deal would push high-risk Annex III obligations from Aug 2 2026 → Dec 2 2027 (transparency unchanged). SME framework extended to 750 employees / €150M revenue. Patch ready to port from the updated Colorado/EU blog. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | Top competitors: AIHR, Thoropass, HiBob, Lattice, HD Tech, Certified NETS — all rank with one-click downloadable templates. The pillar must have a frictionless download. |
| ai-compliance-assessment | /compliance-assessment | **very high** | Direct competitor trycomplianceiq.com is winning this — Engine 1 core conversion page. The 2026-05-19 Colorado blog (now 2026-05-20-refreshed) already includes 2 inline `/compliance-assessment` callouts feeding demand to this page once it exists. |
| ai-risk-assessment-tool | /compliance-assessment | high | Same target page as ai-compliance-assessment; build both phrasings into H1 + FAQ. TrustLayer Risk Matrix is the 5-minute-promise leader. |

## Deferred HTML patches — STATUS

| File | Patch type | Status as of 2026-05-20 |
|------|-----------|-------------------------|
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | SB 189 update banner + new FAQ + ElevaIQ → Sayfeai rebrand + canonical fix + /compliance-assessment callout | **SHIPPED 2026-05-19 (continuation run); REFRESHED 2026-05-20 with EU Digital Omnibus Annex III deal framing.** |
| public/about.html | Insert LocalBusiness/ProfessionalService JSON-LD (Houston + Brazoria County + areaServed US+CA with 50 state subdivisions + Vandelay parentOrg + OfferCatalog) | **SHIPPED 2026-05-19 (continuation run); no new edits 2026-05-20 — measure 7-14 day lift first.** |
| public/llms.txt | Add EU Digital Omnibus + Heppner ruling case-name alias | **SHIPPED 2026-05-20.** |
| public/llms-full.txt | Catch up with llms.txt (3-day lag) + add SB 189 / Digital Omnibus / Heppner / Houston HQ Q&As + fix stale HIPAA answer | **SHIPPED 2026-05-20.** |
| public/industries/legal.html | Heppner / Rakoff alias in FAQ + dateModified bump | **SHIPPED 2026-05-20.** |
| public/openai-smb-partner.html | Competitor-displacement FAQ (Think Technologies / Codestone / Cloudwerx / Madewell) + dateModified bump + Vandelay body-prose cleanup | **SHIPPED 2026-05-20.** |

## Open recommendations (queued for next run)

- **Industry page canonical sweep:** /industries/legal currently has `<link rel="canonical" href="https://sayfeai.com/legal">` even though it lives at /industries/legal. This is a pre-existing bug across all 15 industry pages and is likely causing AEO signal split. Plan a single sweep that fixes the canonical on all industry pages at once. Defer to next run because it touches more than the diagnosis-tied scope of a single day.
- **/blog/chatgpt-business-vs-plus.html:** content engine (2026-05-19 daily report) recommended adding Workspace Agents differentiator FAQ. Patch on the next industry/comparison-bucket measurement.
- **/industries/healthcare or /blog/chatgpt-healthcare-hipaa-2026:** add ChatGPT-Business-vs-ChatGPT-for-Healthcare comparison table. HIPAAJournal + OpenAI direct dominate the HIPAA query — we need a direct comparative table to compete.
- **MSP partner channel:** consider a dedicated /partners/msp pillar (currently zero MSP content on sayfeai.com; ConnectWise + ManagedServicesJournal + ChannelPro own the query). Engine 2 alignment.

## Trend notes
- **2026-05-17 (bootstrap):** No API keys for ChatGPT, Claude, or Google AIO measurement in the scheduled-task env. Used WebSearch as a proxy for answer-engine top-cited sources. Baseline citation rate from proxy = 0/8.
- **2026-05-18 (day 2):** Re-tested same 8 seed queries via WebSearch proxy. Citation rate 0/8 again — same as bootstrap. No regression vs day 1.
- **2026-05-19 (day 3 — v2 launch, two-run day):** Cited rate via WebSearch proxy = 0/10 (third consecutive flat-zero day). Not yet a regression per the 5-day rule. AM run shipped the intelligence layer (llms.txt citation Q&A, seeds, measurements, ledger, daily-report). Continuation run shipped the two deferred HTML rewrites (Colorado SB 189 blog + LocalBusiness JSON-LD on /about). Strategic finding: Colorado SB 24-205 has been EFFECTIVELY REPLACED by SB 189 (signed May 14 by Gov Polis, effective Jan 1 2027). Three buckets (compliance, assessment, partner_channel) all at 0% — too early to flag the v2 bucket-failure alert (need 14 days at 0%).
- **2026-05-20 (day 4):** Cited rate via WebSearch proxy = 0/14 — fourth consecutive flat-zero day. **Still NOT regressing — the 5-day rule needs decreasing trend, not flat-zero.** Strategic finding: the EU Digital Omnibus provisional deal would push EU AI Act high-risk obligations from Aug 2 2026 → Dec 2 2027 (transparency stays). Shipped 5 patches (llms.txt + llms-full.txt + Colorado/EU blog + legal industry + openai-smb-partner) tying every edit to a measured diagnosis. Compliance + Assessment + Partner buckets remain at 0% (day 4 of 14 needed before the bucket-failure alert triggers). Patches today don't address the buckets per se — they keep the existing pages factually current and add competitor-displacement authority where we have it. The structural fix for these buckets is the pillar handoff queue (5 pillars).
- **Regression rule (v1, still active):** if cited_us % trends down for 5 consecutive days, the next run pauses Phase 4 (apply) and writes an alert into the day's daily-report instead of pushing HTML edits.
- **Stretch rule (v2):** if compliance bucket cited% trends UP 7 consecutive days, next run also outputs 2 pillar-page proposals in daily-report for Claude Code to consider building.
- **Bucket-specific failure rule (v2):** if any single bucket has 0% citation rate for 14 consecutive days, write a dedicated alert section to daily-report titled "Bucket X is failing — strategy review needed" with diagnosis.
- **Measurement caveat:** Until OPENAI_API_KEY / ANTHROPIC_API_KEY / SERPAPI_API_KEY / PERPLEXITY_API_KEY are added to the scheduled-task environment, "cited (CGPT/Claude/GAIO)" columns can't be filled accurately. WebSearch proxy is a directional indicator only — it reflects what answer engines are likely citing, not what they actually cite. Real citation measurement needs the proper engine APIs. Adding these keys is the single highest-leverage operational improvement still pending.
