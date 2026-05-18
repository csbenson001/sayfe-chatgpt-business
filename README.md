# Sayfe.ai — ChatGPT Business Partner Site

Official OpenAI ChatGPT Business partner landing site for Sayfe.ai (Vandelay Consulting Inc).

Live at **https://sayfeai.com** (canonical domain).

## Structure

```
public/
  index.html          # Main landing page
  industries/
    healthcare.html   # /healthcare
    legal.html        # /legal
    manufacturing.html # /manufacturing
    ... (16 industry pages)
vercel.json           # Rewrites for clean URLs
```

## Deployment

Deployed on Vercel as a static site. The `vercel.json` handles URL rewrites so `/healthcare` serves `industries/healthcare.html`.

## URLs

- `sayfeai.com/` — Main site
- `sayfeai.com/healthcare` — Healthcare landing page
- `sayfeai.com/legal` — Legal landing page
- `sayfeai.com/manufacturing` — Manufacturing landing page
- ... (16 total industry pages)

## Lead Capture

Forms are Supabase-ready. Uncomment the fetch calls in the form submission handlers and add your Supabase URL + anon key.

## License

Proprietary — Vandelay Consulting Inc.
