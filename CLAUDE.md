# ElevaIQ.com — ChatGPT Business Partner Site

## Project Overview

ElevaIQ.com is an authorized OpenAI SMB Channel Partner site for Vandelay Consulting Inc (Chris Benson).
The site drives ChatGPT Business referral sign-ups across 16+ industry verticals.
Parent brand for the IQ family of industry-specific domains (PracticeIQ.ai, CounselIQ.ai, AgentIQ.ai, etc.).
Sayfe.ai remains the separate consulting brand for privately hosted AI solutions.

## Commission Structure (from OpenAI Partner Guide)

- **Months 1-12**: 50% of Eligible Revenue
- **Months 13-24**: 20% of Eligible Revenue
- **After 24 months**: No commission
- **Eligible Product**: ChatGPT Business only ($25/user/month monthly, $20/user/month annual)
- **Commission Eligibility**: After 2nd consecutive monthly payment via referral link
- **Payment**: Quarterly, within 45 days of quarter end
- **Referral Period**: 12 months, auto-renews

## Revenue Math

- 1 customer × 10 seats × $25/mo = $250/mo revenue → $125/mo commission (year 1)
- 100 customers × avg 5 seats × $25/mo = $12,500/mo → $6,250/mo commission (year 1)
- Target: Drive millions in volume = thousands of referral customers
- **Multi-location targeting**: Companies with 3+ locations for volume deals

## Tech Stack

- **Hosting**: Vercel (static site)
- **Framework**: Pure HTML/CSS/JS (no build step)
- **Domain**: ElevaIQ.com
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

- **Primary Color**: Yale Blue (#0f3460) — CSS var `--yale`
- **Accent**: #2d8cf0 — CSS var `--accent`
- **Font**: Figtree (Google Fonts)
- **Style**: Clean, professional, trust-building
- **CTAs**: Rounded pill buttons, blue/white scheme

### Nav Consistency Rules (ALL pages must follow)

The nav is the single source of truth for site identity. Every page — main, blog, industry, and individual blog posts — must use **identical nav HTML and CSS**. Any deviation breaks brand consistency.

**Standard nav links and their hrefs:**
```
How It Works  → /#how-it-works
Starter Packs → /#starter-packs
Industries    → /#industries
Pricing       → /#pricing
Blog          → /blog          (add class="active" on blog pages)
Get Started   → /api/referral  (class="nav-cta")
```

**Nav HTML template** (copy verbatim — do not invent nav variations):
The canonical nav is in `public/blog/index.html` (nav id="mainNav").
- Logo: `eleva<span>IQ.ai</span>` with the OpenAI SVG partner badge
- Fixed position with backdrop blur, `scrolled` class added on scroll via JS
- Mobile hamburger at ≤768px breakpoint

**CSS variables required for the nav** (define in each page's `:root`):
`--yale`, `--yale-deep`, `--yale-mid`, `--yale-light`, `--white`, `--slate`, `--accent`, `--border`, `--border-light`, `--shadow-sm`, `--shadow-md`

**When creating a new blog post or page:**
1. Copy the nav block from `public/blog/index.html` exactly
2. Add `class="active"` to the current page's nav link
3. Include the nav scroll JS: `window.addEventListener('scroll', () => { mainNav.classList.toggle('scrolled', window.scrollY > 10); });`
4. Add `padding-top: 7rem` to the first content section to account for the 64px fixed nav

## SEO/AEO Strategy

- JSON-LD structured data on every page (FAQPage, Article, HowTo, Organization)
- Industry-specific long-tail keywords
- Blog posts targeting "How can [industry] use ChatGPT" queries
- Canonical URLs on all pages
- Open Graph + Twitter Cards
- Internal linking between industry pages and blog posts

## Key Messaging

- "Official OpenAI Partner" trust badge
- "From $20/user/month — same price as direct"
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

## Attribution URL & Referral Security

- **Attribution URL**: Stored in Vercel env var `CHATGPT_ATTRIBUTION_URL`
- **Current value**: `https://chatgpt.com/p/SAYFEAIUS`
- **Server-side redirect**: `/api/referral.js` reads the env var and issues a 302 redirect
- **NEVER expose the attribution code in client-side HTML, JS, blog posts, or marketing materials**
- **To swap codes**: Change the Vercel env var — no code deploy needed
- **To disable immediately** (fraud response): Set env var to `disabled`
- **OpenAI Fraud Advisory (May 2026)**: Bad actors gained access to partner codes and attempted high-volume small redemptions. Attribution codes must be kept private and only delivered to qualified leads.

## API Endpoints

```
api/
  notify.js     # Lead notification emails via Resend
  referral.js   # Server-side redirect to ChatGPT attribution URL (GET → 302)
```

## Next Steps

- [ ] Build blog infrastructure and write 5+ posts
- [ ] Add about/pricing/contact pages
- [ ] sitemap.xml + robots.txt
- [ ] Enhanced AEO schema across all pages
- [ ] Internal linking strategy
- [ ] Deploy and verify
