# Daily report — 2026-05-28 (Thursday)

## AEO Optimizer (3:30 AM run)
- **Queries tested:** 7 across [google_aio_websearch_proxy]. APIs unavailable (no OPENAI/ANTHROPIC/SERPAPI/PERPLEXITY keys).
- **Citation rate today (canonical sayfeai.com only):** WebSearch-proxy = 0/7 (proxy cannot observe true ChatGPT/Claude/Perplexity citations).
- **Citation rate today (incl. legacy elevaiq.com):** Same — 0/7 (proxy).
- **Bucket breakdown:**
  - Compliance: 0/2 (ai-policy-template-smb, ai-compliance-checklist)
  - Assessment: 0/1 (ai-risk-assessment-tool)
  - Partner_channel: 0/1 (chatgpt-business-cle-webinar)
  - Comparison: 0/1 (chatgpt-vs-copilot)
  - Industry: 0/1 (chatgpt-for-insurance — JSON-LD canonical sweep slot 3/16)
  - Trust: 0/1 (chatgpt-hipaa-compliant)

## Pages patched (1)
- **public/industries/insurance.html** — same defect class as healthcare on 2026-05-23: page carried FAQPage JSON-LD (3 Q/A) but no VISIBLE FAQ. Five-part patch:
  1. Added 5-item visible FAQ section (`<details>` disclosures, mirrors FAQPage JSON-LD verbatim)
  2. Expanded FAQPage JSON-LD 3 -> 5 (added Travelers-launched-business-insurance-app-in-ChatGPT via Business Insurance, May 2026; added insurance PII data-privacy + NAIC Model Bulletin)
  3. Article JSON-LD upgraded with @id, url, mainEntityOfPage, datePublished, dateModified=2026-05-28, publisher.logo
  4. Service JSON-LD url canonicalized: '/industries/insurance' (vercel.json 301-redirects) -> '/insurance' (JSON-LD canonical sweep 3/16; healthcare 1/16 on 5/23, finance 2/16 on 5/27)
  5. Sitemap lastmod 2026-05-21 -> 2026-05-28
- All edits tied to today's measured chatgpt-for-insurance loss (Rule 4: every edit tied to a measured diagnosis from THIS run).

## Pillar handoffs to Claude Code (re-confirmed losing this run)
- **/compliance/ai-policy-template** — Winners (PurpleSec, Thoropass, AIHR, HiBob, Lattice, Certified NETS, Polygraf, Jasper) all rank with frictionless free downloads. The pillar MUST include a one-click download (no email gate on the template itself).
- **/compliance-assessment** — TrustLayer + Logicballs + MyMap own '5-minute / no signup / risk matrix in seconds'. Still 404. Engine 1 build remains highest-leverage handoff.

## Top losing queries for content engine to consider (handoff, priority order: compliance > assessment > partner > industry > comparison)
1. **ai-policy-template-smb** (compliance) — needs the /compliance/ai-policy-template pillar built with a frictionless one-click download
2. **ai-risk-assessment-tool** (assessment) — needs /compliance-assessment built; should H1 the '5-minute / no signup' promise to compete with TrustLayer
3. **chatgpt-business-cle-webinar** (partner) — needs CLE webinar offering OR a new "AI Compliance Briefing for Law Firms" pillar; current state is zero defensive coverage

## New competitors detected this run
- None at 3+ threshold. Tracking at 1-2 mentions: purplesec, thoropass, hibob, lattice, aihr, certified-nets, polygraf, hawksoft, agencyheight, siaa, businessinsurance, tech-insider, corsicatech, trustedtechteam, neuronad, knowlearninghub, mylawcle, trakkr, ibl, jdsupra, quarles.

## Ledger trend
- 12 consecutive flat-zero days (0/8, 0/8, 0/10, 0/14, 0/14, 0/14, 0/14, 0/14, 0/7, 0/6, 0/7, 0/7).
- **Flat ≠ declining** → regression rule NOT triggered; apply phase stayed active.
- **Bucket-failure rule (v2):** Compliance/Assessment/Partner buckets at **day 12 of 14** with 0% citation rate. Alert fires on 2026-05-30 (Saturday) if those buckets remain 0%. Two days of runway to convert before mandatory bucket-failure write-up.

## Friday pillar audit
- Not Friday (today is Thursday). Friday pillar audit fires tomorrow on 2026-05-29.

## Measurement caveat (unchanged from prior runs)
- WebSearch proxy is DIRECTIONAL ONLY. Adding OPENAI_API_KEY / ANTHROPIC_API_KEY / SERPAPI_API_KEY / PERPLEXITY_API_KEY to the scheduled-task environment remains the single highest-leverage operational improvement pending. With keys, we'd be able to detect actual Claude / ChatGPT / Perplexity citations and unlock the engine-by-engine bucket reporting the v2 ledger schema is designed for.

## Push
- Single push_files call, 5 files: insurance.html, sitemap.xml, measurements/2026-05-28.json, aeo-ledger.md, daily-report-2026-05-28.md.
- Fourth consecutive run with single-push discipline (files array built programmatically, len asserted ==5 pre-push).
