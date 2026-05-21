# Sayfeai AEO Ledger

Daily tracking of how often answer engines cite **sayfeai.com** (canonical) and **elevaiq.com** (legacy / transition domain through 2026-06-18) for our seed queries.
Each row is one daily AEO optimizer run. Trend interpretation lives at the bottom of the file.

## Pre-v2 ledger (legacy)

| Date | Queries tested | Cited us (CGPT) | Cited us (Claude) | Cited us (GAIO) | Pages patched | Top fix |
|------|---------------:|----------------:|------------------:|----------------:|--------------:|---------|
| 2026-05-17 | 8 (websearch proxy — no API keys present) | n/a | n/a | n/a | 5 | Fixed stale $30 pricing on /blog/chatgpt-business-vs-plus → $25 monthly / $20 annual; expanded FAQ schema on /industries/healthcare and /industries/legal; broadened /llms.txt; bootstrapped seed file and ledger |
| 2026-05-18 | 8 (websearch proxy — same 8 baseline) | 0/8 (0.0%) | 0/8 (0.0%) | 0/8 (0.0%) | 5 | Fixed stale $30 pricing on /about.html; strengthened /industries/real-estate (58% adoption + CA AB 723 + 6 FAQs); added Feb 17 2026 Rakoff ruling FAQ to /industries/legal; refreshed /blog/best-ai-tools-small-business-2026; added Legal/regulatory facts block to /llms.txt |

## v2 ledger (canonical sayfeai.com + bucket-level reporting)

| Date | Engines | Total | Cited (CGPT) | Cited (Claude) | Cited (GAIO) | Compliance% | Assessment% | Partner% | Industry% | Pages patched | Top fix |
|------|---------|------:|-------------:|---------------:|-------------:|------------:|------------:|---------:|----------:|--------------:|---------|
| 2026-05-19 | websearch_proxy only (no API keys) | 10 | n/a | n/a | n/a | 0/5 (0%) | 0/2 (0%) | 0/3 (0%) | 0/0 | 3 | Refreshed /llms.txt citation Q&A; auto-detected 8 competitors; logged 5 pillar handoffs. Rewrote Colorado SB 189 blog; added LocalBusiness JSON-LD to /about.html. |
| 2026-05-20 | websearch_proxy only (no API keys) | 14 | n/a | n/a | n/a | 0/3 (0%) | 0/2 (0%) | 0/2 (0%) | 0/2 (0%) | 5 | Caught EU Digital Omnibus deal (high-risk Aug 2 2026 → Dec 2 2027; transparency unchanged). Patched llms.txt + llms-full.txt + Colorado/EU blog; Heppner/Rakoff alias to /industries/legal; competitor-displacement FAQ to /openai-smb-partner. **Shipped in 3 commits — single-push rule violated.** |
| 2026-05-21 | websearch_proxy only (no API keys) | 14 | n/a | n/a | n/a | 0/4 (0%) | 0/2 (0%) | 0/3 (0%) | 0/4 (0%) | 2 shipped (+1 validated/queued) | **Verified & corrected a wrong-direction recommendation from the prior ledger.** vercel.json shows /industries/<vertical> 301-REDIRECTS to clean /<vertical>, so the page `<link rel=canonical>` tags (already → /<vertical>) were CORRECT. Real bug: sitemap.xml listed the 16 redirecting /industries/<vertical> URLs. Fixed all 16 → clean /<vertical> + added compliance blog to sitemap. Added official "SB 26-189" + "ADMT" aliases to /llms.txt (kept "SB 189"). Blog HTML SB 26-189/ADMT edit built + validated but DEFERRED to next run (push-integrity: built via Edit, not a single authored block). **Shipped in 2-3 commits — the first push_files call omitted llms.txt + measurements + ledger; corrected in follow-up commits. Single-push rule violated (same failure mode as 2026-05-20).** |

## Pillar handoffs to Claude Code (open queue as of 2026-05-21)

These queries have no target page yet — they need a pillar built by Claude Code. **Re-confirmed losing this run (0% cited).**

| Query ID | Target page needed | Citation demand | Notes |
|----------|--------------------|--------------:|-------|
| ai-compliance-assessment | /compliance-assessment | **very high** | trycomplianceiq.com still #1 — Engine 1 core conversion page. Blog already feeds 2 inline /compliance-assessment callouts. Build it. |
| ai-risk-assessment-tool | /compliance-assessment | high | TrustLayer Risk Matrix owns the "5-minute / no-signup" promise — build that into H1 + FAQ. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | Needs **SB 26-189 / ADMT** framing (official Colorado bill no.; signed 2026-05-14, effective 2027-01-01). Blog SB 26-189/ADMT patch prepared this run is ready to port. |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | Aug 2 2026 transparency; EU Digital Omnibus may push high-risk Annex III to Dec 2 2027. Content lives in the Colorado/EU blog. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | Winners (AIHR, Thoropass, HiBob, Lattice, HD Tech, Certified NETS, Polygraf) all rank with a **one-click downloadable template**. The pillar MUST have a frictionless download. |

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-05-21 |
|------|-----------|-------------------------|
| public/sitemap.xml | 16 industry locs /industries/<v> → canonical clean /<v> + lastmod bump + add compliance blog | **SHIPPED 2026-05-21.** |
| public/llms.txt | Add official "SB 26-189" + "ADMT" aliases (kept "SB 189"); Last Updated bump | **SHIPPED 2026-05-21.** |
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | SB 26-189 + ADMT aliases in banner/lead/visible-FAQ/JSON-LD-FAQ + dateModified | **BUILT + VALIDATED 2026-05-21; DEFERRED** (built via Write+Edit; re-author as one block and ship next run; diff known). |
| public/llms-full.txt | Mirror SB 26-189 / ADMT aliases (currently "SB 189" only) | **QUEUED — next run** (consistency; low risk). |
| public/industries/*.html (×16) | JSON-LD @id/url still point to redirecting /industries/<v>; should be clean /<v> | **QUEUED — incremental sweep** (secondary; rel=canonical already correct; sitemap fix covers primary crawl signal). |

## Open recommendations (queued for next run)

- **CORRECTION (supersedes the 2026-05-20 "industry canonical sweep"):** That recommendation was wrong-direction. vercel.json 301-redirects /industries/<v> → /<v> and rewrites /<v> → /industries/<v>.html, so /<v> is canonical. Page `<link rel=canonical>` tags already point to /<v> and are CORRECT — do NOT change them. Genuine defects: (a) sitemap listed redirecting URLs (FIXED this run); (b) industry-page JSON-LD @id/url still use redirecting /industries/<v> (queued incremental sweep).
- **/blog/chatgpt-business-vs-plus.html:** add Workspace Agents differentiator FAQ.
- **/industries/healthcare or /blog/chatgpt-healthcare-hipaa-2026:** add ChatGPT-Business-vs-ChatGPT-for-Healthcare comparison table.
- **/partners/msp pillar (Engine 2):** MSP query owned by ConnectWise + ManagedServicesJournal + ChannelPro + Worksent. Zero MSP content on sayfeai.com — propose new pillar.
- **CLE/webinar asset for legal (Engine 2):** chatgpt-business-cle-webinar owned by myLawCLE / Knowledge Group / Clio.

## Trend notes
- **2026-05-17 (bootstrap):** No API keys; WebSearch proxy. Baseline 0/8.
- **2026-05-18 (day 2):** 0/8 again — no regression.
- **2026-05-19 (day 3 — v2 launch):** 0/10 (third flat-zero day). Shipped intelligence layer + 2 HTML rewrites. Three priority buckets at 0% — too early for the 14-day bucket-failure alert.
- **2026-05-20 (day 4):** 0/14 — fourth flat-zero day. NOT regressing (5-day rule needs a *decreasing* trend). Caught EU Digital Omnibus. Shipped 5 patches.
- **2026-05-21 (day 5):** 0/14 — **fifth consecutive flat-zero day** (0/8, 0/8, 0/10, 0/14, 0/14). Flat, not declining → regression rule NOT triggered; apply phase stayed active. **Headline: caught and corrected a wrong-direction canonical recommendation before it shipped** — verifying vercel.json showed page canonicals were already correct and the sitemap (not the pages) was the defect. Fixed the sitemap + added compliance blog; added SB 26-189/ADMT aliases to llms.txt. Compliance/Assessment/Partner buckets still 0% (**day 5 of 14** before the bucket-failure alert). No new competitor reached the 3+ threshold. Domain is 3 days post-rebrand — near-zero indexation is expected; this run was foundation-correctness work, not citation-chasing.
- **Regression rule (v1, active):** if cited_us % trends *down* for 5 consecutive days, next run pauses Phase 4 and alerts. (Flat-zero ≠ down.)
- **Stretch rule (v2):** if compliance bucket cited% trends UP 7 consecutive days, next run outputs 2 pillar-page proposals.
- **Bucket-failure rule (v2):** if any bucket has 0% for 14 consecutive days, write a dedicated alert. Compliance/Assessment/Partner at day 5 of 14.
- **Measurement caveat (UNCHANGED — highest-leverage operational gap):** Until OPENAI_API_KEY / ANTHROPIC_API_KEY / SERPAPI_API_KEY / PERPLEXITY_API_KEY are added to the scheduled-task environment, engine columns can't be filled accurately and the WebSearch proxy is directional only. Adding these keys remains the single highest-leverage operational improvement pending.
