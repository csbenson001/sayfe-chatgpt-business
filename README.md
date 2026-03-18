# Sayfe.ai — ChatGPT Business Partner Site

Official OpenAI ChatGPT Business partner landing site for Sayfe.ai (Vandelay Consulting Inc).

## Structure

```
public/
  index.html          # Main landing page
  industries/
    healthcare.html   # /healthcare
    legal.html        # /legal
    manufacturing.html # /manufacturing
    ... (15 industry pages)
vercel.json           # Rewrites for clean URLs
```

## Deployment

Deployed on Vercel as a static site. The `vercel.json` handles URL rewrites so `/healthcare` serves `industries/healthcare.html`.

## URLs

- `sayfe.ai/` — Main site
- `sayfe.ai/healthcare` — Healthcare landing page
- `sayfe.ai/legal` — Legal landing page
- `sayfe.ai/manufacturing` — Manufacturing landing page
- ... (15 total industry pages)

## Lead Capture

Forms are Supabase-ready. Uncomment the fetch calls in the form submission handlers and add your Supabase URL + anon key.

## License

Proprietary — Vandelay Consulting Inc.
