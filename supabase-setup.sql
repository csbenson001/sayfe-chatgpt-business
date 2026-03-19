-- ElevaIQ.ai Lead Capture Schema
-- Run this in Supabase SQL Editor (Database > SQL Editor)

-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  industry TEXT,
  team_size TEXT,
  phone TEXT,
  message TEXT,
  source TEXT,              -- page URL where form was submitted
  form_type TEXT,           -- quick_signup, contact, free_guide, newsletter, industry_cta
  referrer TEXT,            -- document.referrer
  page_url TEXT,            -- full page URL
  user_agent TEXT,          -- browser info
  created_at TIMESTAMPTZ DEFAULT NOW(),

  -- Prevent duplicate emails per form type within 24 hours
  CONSTRAINT unique_recent_submission UNIQUE (email, form_type)
);

-- Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_industry ON leads(industry);
CREATE INDEX IF NOT EXISTS idx_leads_form_type ON leads(form_type);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the website forms)
-- This is safe because the anon key can ONLY insert, not read/update/delete
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (you) can read leads
CREATE POLICY "Only authenticated users can read" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update/delete
CREATE POLICY "Only authenticated users can update" ON leads
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Only authenticated users can delete" ON leads
  FOR DELETE
  TO authenticated
  USING (true);

-- Create a view for easy dashboard access
CREATE OR REPLACE VIEW lead_summary AS
SELECT
  form_type,
  industry,
  COUNT(*) as total_leads,
  COUNT(DISTINCT email) as unique_emails,
  MIN(created_at) as first_lead,
  MAX(created_at) as latest_lead
FROM leads
GROUP BY form_type, industry
ORDER BY latest_lead DESC;

-- Done! Your leads table is ready.
-- The anon key can only INSERT rows (not read them).
-- Log into Supabase dashboard to view your leads.
