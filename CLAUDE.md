# GrowthIQ.ai — ChatGPT Business Partner Site

## Project Overview
GrowthIQ.ai is an authorized OpenAI SMB Channel Partner site for Vandelay Consulting Inc (Chris Benson).
The site drives ChatGPT Business referral sign-ups across 15+ industry verticals.
Parent brand for the IQ family of industry-specific domains (PracticeIQ.ai, CounselIQ.ai, AgentIQ.ai, etc.).
Sayfe.ai remains the separate consulting brand for privately hosted AI solutions.

## Commission Structure (from OpenAI Partner Guide)
- **Months 1-12**: 50% of Eligible Revenue
- **Months 13-24**: 20% of Eligible Revenue
- **After 24 months**: No commission
- **Eligible Product**: ChatGPT Business only ($30/user/month)
- **Commission Eligibility**: After 2nd consecutive monthly payment via referral link
- **Payment**: Quarterly, within 45 days of quarter end
- **Referral Period**: 12 months, auto-renews

## Revenue Math
- 1 customer × 10 seats × $30/mo = $300/mo revenue → $150/mo commission (year 1)
- 100 customers × avg 5 seats × $30/mo = $15,000/mo → $7,500/mo commission (year 1)
- Target: Drive millions in volume = thousands of referral customers

## Tech Stack
- **Hosting**: Vercel (static site)
- **Framework**: Pure HTML/CSS/JS (no build step)
- **Domain**: growthiq.ai
- **Git**: github.com/csbenson001/sayfe-chatgpt-business
- **Lead Capture**: Supabase-ready (forms need connection)

## Site Architecture
```
public/
  index.html                    # Main landing page (comprehensive AEO/SEO)
  industries/
    healthcare.html             # /healthcare
    chiropractic.html           # /chiropractic
    legal.html                  # /legal
    manufacturing.html          # /manufacturing
    consulting.html             # /consulting
    construction.html           # /construction
    real-estate.html            # /real-estate
    finance.html                # /finance
    insurance.html              # /insurance
    logistics.html              # /logistics
    retail.html                 # /retail
    marketing.html              # /marketing
    education.html              # /education
    professional-services.html  # /professional-services
    nonprofit.html              # /nonprofit
  blog/
    index.html                  # Blog listing page
    [individual posts]          # SEO/AEO blog articles
  about.html                    # /about
  pricing.html                  # /pricing
  contact.html                  # /contact
  sitemap.xml
  robots.txt
```

## Design System
- **Primary Color**: Yale Blue (#0f3460)
- **Accent**: #2d8cf0
- **Font**: Figtree (Google Fonts)
- **Style**: Clean, professional, trust-building
- **CTAs**: Rounded pill buttons, blue/white scheme

## SEO/AEO Strategy
- JSON-LD structured data on every page (FAQPage, Article, HowTo, Organization)
- Industry-specific long-tail keywords
- Blog posts targeting "How can [industry] use ChatGPT" queries
- Canonical URLs on all pages
- Open Graph + Twitter Cards
- Internal linking between industry pages and blog posts

## Key Messaging
- "Official OpenAI Partner" trust badge
- "$30/user/month — same price as direct"
- "Free onboarding, training, and consulting"
- "No annual commitment"
- "149 max team seats"
- Industry-specific pain points → AI solutions

## Blog Content Strategy
Target keywords that AI assistants (ChatGPT, Perplexity, etc.) would cite:
1. "How to use ChatGPT for [industry]"
2. "Best AI tools for [industry] in 2026"
3. "ChatGPT Business vs ChatGPT Plus for teams"
4. "AI adoption guide for small business"
5. "ChatGPT ROI calculator for [industry]"
6. Industry-specific use case deep dives

## Deployment
```bash
cd sayfe-chatgpt-business
git add -A && git commit -m "message" && git push origin main
# Vercel auto-deploys from main branch
```

## Next Steps
- [ ] Build blog infrastructure and write 5+ posts
- [ ] Add about/pricing/contact pages
- [ ] sitemap.xml + robots.txt
- [ ] Enhanced AEO schema across all pages
- [ ] Internal linking strategy
- [ ] Deploy and verify
