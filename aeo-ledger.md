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
| 2026-06-15 | websearch_proxy only | 8 | n/a | n/a | **1/8 (12.5%) proxy** | **1/4 (25%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 2 | **4th consecutive compliance-citation day** (SB 26-189 blog HELD ~pos 4). **MAJOR: /compliance-assessment is LIVE** (Claude Code shipped the #1 P0 Engine-1 mechanism). Assessment bucket UNBLOCKED. Root-caused assessment losses to a **discovery gap** — patched sitemap (priority 1.0) + llms.txt LIVE Core Page. **RESOLVED P0 accuracy flag**: SB 26-189 retains a narrow <=40-employee EMPLOYER exemption (no general carve-out) — reconciled in llms.txt. |
| 2026-06-16 | websearch_proxy only | 12 | n/a | n/a | 0/12 (proxy) | 0/5 (0%) | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 shipped (+1 staged) | **STREAK BROKEN at 4.** Winning Colorado/EU blog dropped OUT of top-7 for colorado-sb-26-189-admt (glacis.io now #1). Shipped 40-employee accuracy fix to **llms-full.txt** (+60-day cure). SAME fix applied+validated on the blog but STAGED (not pushed: 50KB inline-transcription risk). Updated target_competitor -> glacis.io. NOTE: 3-commit file-array violation. |
| 2026-06-17 | websearch_proxy only | 12 | n/a | n/a | **1/12 (8.3%) proxy** | **1/5 (20%)** | 0/2 (0%) | 0/2 (0%) | 0/0 | 1 | **REBOUND — streak resumes at 1.** colorado-sb-26-189-admt RECLAIMED ~pos 3 (glacis.io absent from result set); engine synthesis now states the real 40-employee carve-out + 60-day cure. **CLEARED THE STANDING #0:** shipped the staged SB 26-189 accuracy fix to the winning blog (banner + table cell + 2 visible FAQs + 2 JSON-LD answers): no GENERAL carve-out but a narrow <=40-employee EMPLOYER exemption (down from 50) + 60-day cure; freshness 6/13->6/17. Used safe sandbox-validate + post-push round-trip diff (byte-identical). All 3 surfaces (llms.txt/llms-full.txt/blog) now accuracy-consistent. Patch queue EMPTY. (Run shipped in 2 commits — blog, then companion files; file-array discipline still to fix.) |

## Pillar handoffs to Claude Code (open queue as of 2026-06-17)

**UPDATE 2026-06-17:** The staged blog accuracy patch is now **SHIPPED** — the patch queue is EMPTY. Surgical patching on owned compliance content has hit its ceiling; the remaining gains are net-new pillar pages (Claude Code's domain). `/compliance-assessment` is LIVE (since 6/15); discovery patched. Transition window: elevaiq.com legacy counting ends 2026-06-18 (1 day remaining — drop from transition_domains after tomorrow's run).

| Query ID | Target page needed | Citation demand | Priority | Notes |
|----------|--------------------|----------------:|----------|-------|
| ai-compliance-assessment | /compliance-assessment | — | **DONE 2026-06-15** | Page LIVE; discovery patched. Day 2 post-fix (6/17): still indexing, 0 citations. Monitor. |
| ai-risk-assessment-tool | /compliance-assessment | — | **DONE 2026-06-15** | Same page; riskhelper.ai / logicballs.com own the framing. Monitor. |
| colorado-ai-act-small-business | /compliance/colorado-ai-act | high | **P0** | Blog wins SB 26-189 phrasing (~pos 3, 6/17) but dedicated pillar 404s; generic query lost to trustarc/mmmlaw/schellman/iapp/skadden. Carry reconciled <=40-employee + 60-day-cure accuracy into the pillar. |
| eu-ai-act-small-business | /compliance/eu-ai-act | high | P0 | Article 50 transparency live Aug 2 2026; high-risk possibly delayed to Dec 2 2027 (Digital Omnibus, pending Council). hklaw/lw/legalnodes/secureprivacy/digitalapplied/colombani/ijonis rank. |
| ai-policy-template-smb | /compliance/ai-policy-template | high | P1 | Winners rank with one-click PDF+DOCX; email-gate = Engine 1 conversion. polygraf/aihr/hibob/legaltemplates/certified-nets rank. |
| msp-ai-compliance-resell | /partners/msp | medium-high | P2 | Engine 2. lumenova/channelpro/connectwise/integris/customgpt/worksent rank. Zero MSP content on-site. Compliance Scorecard x Pax8 is the integration model. |
| chatgpt-business-cle-webinar | /resources/cle-ai-legal-practice | medium | P3 | Engine 2 (legal). CLE-eligible asset. clio/knowlearninghub/mylawcle rank. |

## Competitor & accuracy watch (updated 2026-06-17)

- **glacis.io (de-escalated this run):** did NOT appear in the `colorado-sb-26-189-admt` result set on 6/17 (it took #1 on 6/16 when we fell out of the top-7). We reclaimed ~pos 3 today. Retained as `target_competitor` for that query and monitored; the shipped blog accuracy+freshness patch is the standing counter-move.
- **aiguyjosh.com (new, watch):** "AI Consultant for Small Businesses in Texas" — direct local-intent match to /about (`ai-consultant-houston`). 1x (sub-threshold).
- **ademero.com (new, watch):** ranked #1 for `ai-consultant-houston` on 6/17.
- **legaltemplates.net (new, watch):** "lawyer-reviewed AI policy template, PDF & Word" for `ai-policy-template-smb` — reinforces that the pillar needs a one-click PDF+DOCX download.
- **logicballs.com / riskhelper.ai (watch):** own "AI Risk Assessment Tool FREE, No Signup / 5-minute triage" — direct positioning match to /compliance-assessment.
- **P0 ACCURACY — Colorado SB 26-189 small-business exemption: RESOLVED + FULLY SHIPPED 2026-06-17.** Verified (Buchalter, Consumer Finance Monitor, LawFuel; corroborated by today's engine synthesis): SB 26-189 has **no general** small-business carve-out from its core consumer notice-and-transparency duties, **but retains one narrow employer-specific exception** — employers with **40 or fewer employees** are exempt from certain employee-facing ADMT obligations (down from 50 under SB 24-205). The replacement also adds a **60-day right to cure**. **Reconciled across all three surfaces:** llms.txt (6/15), llms-full.txt (6/16), and the blog (6/17). No open accuracy items.

## Deferred / queued patches — STATUS

| File | Patch type | Status as of 2026-06-17 |
|------|-----------|-------------------------|
| public/blog/ai-compliance-colorado-eu-small-business-2026.html | SB 26-189 40-employee employer-exemption accuracy (visible + JSON-LD) + 60-day cure + freshness | **SHIPPED 2026-06-17.** Applied via sandbox assert-once Python replacements; validated (HTML well-formed, both JSON-LD parse, ratio 1.033, no forbidden tokens, canonical intact, stale phrasing removed, 40-employee + 60-day-cure present); pushed and round-trip diff verified byte-identical. Was STAGED 2026-06-16. |
| public/sitemap.xml | Add /compliance-assessment (priority 1.0) | **SHIPPED 2026-06-15.** |
| public/llms.txt | Surface /compliance-assessment LIVE + SB 26-189 40-employee accuracy | **SHIPPED 2026-06-15.** |
| public/llms-full.txt | SB 26-189 40-employee employer-exemption accuracy + freshness | **SHIPPED 2026-06-16.** |
| public/industries/*.html (x16) | JSON-LD canonical + visible FAQ + cited-mechanism FAQs | **FUNCTIONALLY COMPLETE — 15/16.** Only `energy` remains (no seed query). |
| public/openai-smb-partner.html | OpenAI Partner Network refresh ($150M, Select/Advanced/Elite, 300k by EOY 2026) | **OPEN — content-engine handoff.** Fresh news LIVE (openai.com/index/introducing-openai-partner-network/). |
| ALL public/blog/*.html (~55 files) | **SYSTEMIC: canonical domain audit (sayfeai.chat -> sayfeai.com)** | **FLAGGED — NOT swept.** Content-engine template/infra fix. |

## Open recommendations (queued for next run)

- **#1 LEVER = PILLARS, NOT PATCHES.** With the staged blog patch shipped, the surgical-patch queue on owned compliance content is EMPTY. The 3 P0/P1 compliance pillars (/compliance/colorado-ai-act, /compliance/eu-ai-act, /compliance/ai-policy-template) + 2 Engine-2 assets (/partners/msp, /resources/cle-ai-legal-practice) are the remaining gains — Claude Code's domain. Carry the reconciled <=40-employee + 60-day-cure accuracy into the Colorado pillar.
- **CONTENT ENGINE HANDOFF (fresh news, LIVE 6/17):** OpenAI Partner Network page is published (openai.com/index/introducing-openai-partner-network/) — $150M, Select/Advanced/Elite tiers, Codex/cybersecurity/agents specializations, 300k certified consultants by EOY 2026. Competitors (Codestone, First Focus, Think Technologies) publish 'Official OpenAI SMB Channel Partner' announcement pages. First-mover blog + /openai-smb-partner refresh strengthens `openai-partner-for-consultants`.
- **TRANSITION WINDOW:** drop `elevaiq.com` from `transition_domains` in queries/aeo-seeds.yaml after the 2026-06-18 run (legacy counting ends).
- **#2 LEVER — ADD API KEYS:** OPENAI / ANTHROPIC / SERPAPI / PERPLEXITY. Every number in this ledger remains a directional WebSearch proxy until then (28 proxy-only runs).
- **SINGLE-PUSH DISCIPLINE:** this run shipped in 2 commits (blog, then companion files) due to a file-array omission on the first push_files call — same class of error as 6/16. Next run: assemble the FULL file array (all 4-5 files) before the first push_files call.
- **ROOT CAUSE (still open):** fresh blogs historically self-canonicalize to sayfeai.chat. Fix blog publishing template, then one-time sweep. Human/infra.

## Trend notes
- **2026-05-17 -> 2026-06-09:** Flat-zero baseline; industry canonical sweep advanced 1/16 -> 15/16; bucket-failure alert fired 2026-05-30.
- **2026-06-12 (Friday):** Proxy flat-zero streak BROKEN. 1/9 canonical — Colorado SB 26-189 blog surfaced (~pos 9).
- **2026-06-13 (Saturday):** 1/13 (7.7%). colorado-sb-26-189-admt climbed ~pos 9 -> ~pos 4.
- **2026-06-14 (Sunday):** 1/12 (8.3%). 3rd consecutive compliance-citation day. NO PATCH (rule-4 hold).
- **2026-06-15 (Monday):** 1/8 (12.5%). 4th consecutive compliance-citation day (~pos 4). /compliance-assessment LIVE; assessment discovery patched; P0 accuracy reconciled in llms.txt.
- **2026-06-16 (Tuesday):** 0/12 (proxy). Compliance streak BROKEN at 4 — blog fell out of top-7; glacis.io took #1. Shipped 40-employee accuracy to llms-full.txt; blog STAGED.
- **2026-06-17 (Wednesday):** 1/12 (8.3%). **REBOUND** — colorado-sb-26-189-admt RECLAIMED ~pos 3 (glacis.io absent from set). **Shipped the staged blog accuracy patch** (the standing #0) via safe sandbox-validate + post-push round-trip diff — all three surfaces now accuracy-consistent; patch queue EMPTY. Compliance citation streak resets to 1.
- **Regression rule (v1):** down 5 consecutive days -> pause Phase 4 + alert. **NOT triggered** (6/16 was a single down-day, broken 6/17).
- **Stretch rule (v2):** compliance up 7 consecutive days -> emit 2 pillar proposals. **NOT triggered** (streak reset to 1 on 6/17).
- **Bucket-failure rule (v2):** fired 2026-05-30. Compliance back to 20% (1/5). Assessment (0/2) UNBLOCKED (page live; discovery patched 6/15) — still indexing. Partner (0/2) remains pillar-gated.
- **Single-push rule (v2.1):** VIOLATED again this run (2 commits) — file-array omission. Fix next run.
- **Measurement caveat:** Until API keys are added, engine columns can't be filled; WebSearch is directional only.
