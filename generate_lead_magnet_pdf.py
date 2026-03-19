#!/usr/bin/env python3
"""
Generate the ChatGPT Business Quick-Start Guide PDF lead magnet for Sayfe.ai
Uses reportlab for professional layout and design
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black, grey
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak,
    Image, KeepTogether, Frame, PageTemplate
)
from reportlab.lib import colors
from datetime import datetime
import os

# Colors from design system
YALE_BLUE = HexColor("#0f3460")
ACCENT_BLUE = HexColor("#2d8cf0")
LIGHT_GRAY = HexColor("#f5f5f5")
DARK_TEXT = HexColor("#1a1a1a")

# Output path
OUTPUT_PATH = "/sessions/great-epic-tesla/mnt/sayfe-chatgpt-business/public/downloads/chatgpt-business-quickstart-guide.pdf"

# Ensure directory exists
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)


class NumberedCanvas:
    """Canvas wrapper for page numbering"""
    def __init__(self, *args, **kwargs):
        self.num_pages = 0
        self.pages = []

    def handle_pageBegin(self):
        self._pageNumber = self._pageNumber + 1


def create_title_style(size, color=DARK_TEXT, bold=False):
    """Helper to create title styles"""
    return ParagraphStyle(
        'CustomTitle',
        fontName='Helvetica-Bold' if bold else 'Helvetica',
        fontSize=size,
        textColor=color,
        spaceAfter=12,
        leading=size * 1.3,  # Proper line spacing relative to font size
        alignment=1,  # Center
    )


def create_body_style(size=11, color=DARK_TEXT, spaceAfter=10):
    """Helper to create body text styles"""
    return ParagraphStyle(
        'CustomBody',
        fontName='Helvetica',
        fontSize=size,
        textColor=color,
        spaceAfter=spaceAfter,
        leading=16,
        alignment=0,  # Left
    )


def build_pdf():
    """Build the complete PDF document"""

    # Create document with custom margins
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        rightMargin=0.5*inch,
        leftMargin=0.5*inch,
        topMargin=0.5*inch,
        bottomMargin=0.5*inch,
    )

    # Container for PDF elements
    elements = []

    # Get default styles and create custom ones
    styles = getSampleStyleSheet()

    cover_title = create_title_style(44, YALE_BLUE, bold=True)
    cover_subtitle = create_title_style(24, ACCENT_BLUE, bold=False)
    section_title = create_title_style(28, YALE_BLUE, bold=True)
    heading2 = create_title_style(18, YALE_BLUE, bold=True)
    body = create_body_style(11, DARK_TEXT)
    body_small = create_body_style(10, HexColor("#333333"), spaceAfter=8)
    body_accent = create_body_style(11, ACCENT_BLUE)
    footer_style = create_body_style(9, HexColor("#666666"))

    # ============================================================================
    # PAGE 1: COVER PAGE
    # ============================================================================
    elements.append(Spacer(1, 0.8*inch))

    # Cover header background (simulated with spacing and color)
    cover_title_text = Paragraph(
        "The ChatGPT Business<br/>Quick-Start Guide",
        cover_title
    )
    elements.append(cover_title_text)

    elements.append(Spacer(1, 0.3*inch))

    subtitle_text = Paragraph(
        "50 Ready-to-Use Prompts for Your Industry",
        cover_subtitle
    )
    elements.append(subtitle_text)

    elements.append(Spacer(1, 1*inch))

    # Partner badge and info
    partner_style = ParagraphStyle(
        'Partner',
        fontName='Helvetica',
        fontSize=14,
        textColor=YALE_BLUE,
        spaceAfter=6,
        alignment=1,
    )
    elements.append(Paragraph("✓ By Sayfe.ai — Official OpenAI Partner", partner_style))

    elements.append(Spacer(1, 0.2*inch))

    contact_style = ParagraphStyle(
        'Contact',
        fontName='Helvetica',
        fontSize=12,
        textColor=ACCENT_BLUE,
        spaceAfter=4,
        alignment=1,
    )
    elements.append(Paragraph("sayfe.ai | Free Onboarding & Consulting", contact_style))

    elements.append(Spacer(1, 0.5*inch))

    edition_style = ParagraphStyle(
        'Edition',
        fontName='Helvetica',
        fontSize=11,
        textColor=HexColor("#666666"),
        spaceAfter=2,
        alignment=1,
    )
    elements.append(Paragraph("2026 Edition", edition_style))

    elements.append(PageBreak())

    # ============================================================================
    # PAGE 2: WELCOME & HOW TO USE
    # ============================================================================
    elements.append(Paragraph("Welcome to ChatGPT Business", section_title))
    elements.append(Spacer(1, 0.3*inch))

    welcome_text = """
    ChatGPT Business is the enterprise-grade AI assistant designed for teams.
    Unlike ChatGPT Plus (5 user limit), ChatGPT Business supports up to 149 team members
    and offers admin controls, data security, and priority support — all at <b>$30 per user per month</b>.
    <br/><br/>
    This guide contains 50 battle-tested prompts covering marketing, sales, operations, HR,
    finance, customer service, and industry-specific scenarios. Each prompt is ready to copy
    and paste into ChatGPT Business.
    """
    elements.append(Paragraph(welcome_text, body))
    elements.append(Spacer(1, 0.25*inch))

    elements.append(Paragraph("How to Use This Guide", heading2))
    elements.append(Spacer(1, 0.15*inch))

    how_to_text = """
    <b>1. Copy & Paste:</b> Select any prompt and paste it directly into ChatGPT Business. Customize as needed for your use case.<br/>
    <br/>
    <b>2. Refine Results:</b> If the output isn't perfect, iterate! Tell ChatGPT what you'd like to change.<br/>
    <br/>
    <b>3. Save to Team Library:</b> Create a folder in ChatGPT Business to save your best prompts for team reuse.<br/>
    <br/>
    <b>4. Build Custom GPTs:</b> Use the "Create a GPT" feature to create industry-specific tools for your team.
    """
    elements.append(Paragraph(how_to_text, body_small))

    elements.append(Spacer(1, 0.25*inch))

    cta_text = """
    <b>Want a personalized prompt library for your industry?</b><br/>
    Visit <font color="#2d8cf0"><b>sayfe.ai</b></font> to get free personalized prompt templates,
    training resources, and unlimited onboarding consulting.
    """
    elements.append(Paragraph(cta_text, body_accent))

    elements.append(PageBreak())

    # ============================================================================
    # PAGES 3-4: MARKETING & SALES PROMPTS (10 PROMPTS)
    # ============================================================================
    elements.append(Paragraph("Marketing & Sales Prompts", section_title))
    elements.append(Spacer(1, 0.2*inch))

    marketing_prompts = [
        {
            "num": 1,
            "title": "Email Campaign Brief",
            "prompt": "Create a 3-email nurture sequence for [INDUSTRY] prospects. Each email should: (1) Introduce a pain point, (2) Showcase a solution, (3) Include a CTA. Tone: Professional but friendly.",
            "when": "Planning email marketing campaigns"
        },
        {
            "num": 2,
            "title": "Social Media Content Calendar",
            "prompt": "Generate 4 weeks of LinkedIn posts for a [YOUR ROLE] at a [INDUSTRY] company. Mix: 50% educational, 30% company news, 20% engagement questions. Each post: 2-3 sentences, one emoji max.",
            "when": "Social media planning"
        },
        {
            "num": 3,
            "title": "Blog Post Outline",
            "prompt": "Create a 1,200-word blog post outline for: '[YOUR TOPIC]'. Include: H2 headers, key points under each, 1-2 actionable takeaways per section. Target audience: [AUDIENCE DESCRIPTION].",
            "when": "Content planning"
        },
        {
            "num": 4,
            "title": "Ad Copy Generator",
            "prompt": "Write 5 variations of Google Ads copy (headlines + description) for a [PRODUCT/SERVICE]. Focus on: [KEY BENEFIT]. Max 30 chars headlines, 90 chars descriptions. Include CTA.",
            "when": "PPC advertising"
        },
        {
            "num": 5,
            "title": "SEO Meta Description",
            "prompt": "Write SEO meta descriptions (155 chars max) for these pages: [PAGE TITLES]. Each should include the target keyword naturally and a compelling reason to click.",
            "when": "SEO optimization"
        },
        {
            "num": 6,
            "title": "Sales Prospecting Email",
            "prompt": "Write a cold prospecting email to [PROSPECT TITLE] at a [INDUSTRY] company. Hook: [SPECIFIC PAIN POINT]. Proof: [YOUR CREDENTIAL/CASE STUDY]. Ask: Brief discovery call. Keep to 4 sentences.",
            "when": "B2B outreach"
        },
        {
            "num": 7,
            "title": "Proposal Template",
            "prompt": "Create a one-page proposal outline for [YOUR SERVICE]. Include: Problem statement, solution overview, timeline, pricing (3 tiers), and next steps. Tone: Executive.",
            "when": "Sales proposals"
        },
        {
            "num": 8,
            "title": "Objection Response Script",
            "prompt": "I'm hearing this objection in sales calls: '[PROSPECT OBJECTION]'. Create 3 responses that: (1) Validate the concern, (2) Reframe it, (3) Ask a discovery question. Keep each to 2 sentences.",
            "when": "Sales coaching"
        },
        {
            "num": 9,
            "title": "Follow-Up Email (No Response)",
            "prompt": "Write a 3rd follow-up email after no response to my previous emails. Tone: Helpful, not pushy. Include: New value angle, option to opt out, and a final CTA.",
            "when": "Sales pipeline management"
        },
        {
            "num": 10,
            "title": "Sales Presentation Outline",
            "prompt": "Create a 15-minute presentation outline for [PRODUCT/SERVICE] to [AUDIENCE TYPE]. Include: Problem, solution, proof (case study), pricing, and call to action. Add talking points for each slide.",
            "when": "Client pitches"
        },
    ]

    for prompt in marketing_prompts:
        prompt_box = create_prompt_box(prompt, body_small)
        elements.append(prompt_box)
        elements.append(Spacer(1, 0.15*inch))

    elements.append(PageBreak())

    # ============================================================================
    # PAGES 5-6: OPERATIONS & HR PROMPTS
    # ============================================================================
    elements.append(Paragraph("Operations & HR Prompts", section_title))
    elements.append(Spacer(1, 0.2*inch))

    ops_prompts = [
        {
            "num": 11,
            "title": "Standard Operating Procedure",
            "prompt": "Create a step-by-step SOP for: [PROCESS NAME]. Format: numbered steps, decision points, tools required, and common mistakes to avoid. Target user: [USER LEVEL/ROLE].",
            "when": "Process documentation"
        },
        {
            "num": 12,
            "title": "Meeting Agenda",
            "prompt": "Write an agenda for a [MEETING TYPE] with [ATTENDEES]. Include: objectives, time allocations (15, 30, 45 min), discussion topics, and pre-read materials. Keep total time to [X MINUTES].",
            "when": "Meeting planning"
        },
        {
            "num": 13,
            "title": "Vendor Negotiation Email",
            "prompt": "Draft an email to [VENDOR] about our [SERVICE/PRODUCT]. Ask for: price reduction (target: [%]), extended payment terms, or added services. Keep professional and data-driven.",
            "when": "Vendor management"
        },
        {
            "num": 14,
            "title": "Executive Status Report",
            "prompt": "Create a 1-page executive summary for [DEPARTMENT/TEAM] covering: KPIs, wins this month, risks/blockers, and next month's priorities. Format: metrics-first, jargon-free.",
            "when": "Leadership updates"
        },
        {
            "num": 15,
            "title": "Process Improvement Plan",
            "prompt": "Analyze this process: [DESCRIBE CURRENT PROCESS]. Identify: 3 bottlenecks, 3 improvements, ROI estimate, and a 30-day implementation plan.",
            "when": "Operations optimization"
        },
        {
            "num": 16,
            "title": "Job Description",
            "prompt": "Write a job description for a [JOB TITLE] at a [INDUSTRY] company. Include: overview, 5-7 key responsibilities, 5-7 required skills, 3 nice-to-haves, and compensation range for [REGION].",
            "when": "Recruiting"
        },
        {
            "num": 17,
            "title": "Interview Questions",
            "prompt": "Create 10 behavioral interview questions for a [JOB TITLE] role. Focus on: [REQUIRED SKILL #1], [REQUIRED SKILL #2], cultural fit. Include follow-up probes for each.",
            "when": "Hiring process"
        },
        {
            "num": 18,
            "title": "Onboarding Checklist",
            "prompt": "Create a 30-60-90 day onboarding plan for a new [JOB TITLE]. Include: learning goals, key meetings, projects, and success metrics for each phase.",
            "when": "New hire onboarding"
        },
        {
            "num": 19,
            "title": "Employee Handbook Policy",
            "prompt": "Draft a policy for [TOPIC: remote work, PTO, expense reporting, etc.]. Include: policy statement, eligibility, process, approvals, and FAQs. Keep to 1 page.",
            "when": "HR policy creation"
        },
        {
            "num": 20,
            "title": "Performance Review Template",
            "prompt": "Create a quarterly performance review form for [JOB LEVEL]. Include: self-assessment, manager feedback, goal progress, strengths, development areas, and next quarter goals.",
            "when": "Performance management"
        },
    ]

    for prompt in ops_prompts:
        prompt_box = create_prompt_box(prompt, body_small)
        elements.append(prompt_box)
        elements.append(Spacer(1, 0.15*inch))

    elements.append(PageBreak())

    # ============================================================================
    # PAGES 7-8: FINANCE & CUSTOMER SERVICE PROMPTS
    # ============================================================================
    elements.append(Paragraph("Finance & Customer Service Prompts", section_title))
    elements.append(Spacer(1, 0.2*inch))

    finance_prompts = [
        {
            "num": 21,
            "title": "Budget Summary",
            "prompt": "Summarize our [DEPARTMENT] budget for [PERIOD]. Highlight: actual spend vs. budget, variances >10%, top 3 cost drivers, and recommendations for next period.",
            "when": "Financial planning"
        },
        {
            "num": 22,
            "title": "Revenue Forecast",
            "prompt": "Create a [3/6/12]-month revenue forecast based on: [CURRENT METRICS]. Assumptions: growth rate [X]%, seasonality [PATTERN], new initiatives [LIST]. Show: conservative, expected, aggressive scenarios.",
            "when": "Strategic planning"
        },
        {
            "num": 23,
            "title": "Expense Analysis",
            "prompt": "Analyze our [CATEGORY: SaaS, travel, payroll] expenses. Identify: top 5 costs, top 3 areas for savings, renegotiation opportunities, and potential automation wins.",
            "when": "Cost reduction"
        },
        {
            "num": 24,
            "title": "Invoice Template",
            "prompt": "Create a professional invoice template for [BUSINESS TYPE]. Include: company info, line items, subtotal, tax, total, payment terms, and methods.",
            "when": "Billing"
        },
        {
            "num": 25,
            "title": "Board Update Deck",
            "prompt": "Create a quarterly board update outline for [COMPANY STAGE: pre-seed, Series A, etc.]. Include: metrics, progress vs. goals, risks, capital needs, and ask.",
            "when": "Investor relations"
        },
        {
            "num": 26,
            "title": "Customer Service Response Template",
            "prompt": "Create 5 response templates for common [INDUSTRY] support tickets: [ISSUE 1], [ISSUE 2], [ISSUE 3], etc. Each should: acknowledge, explain, solve, and thank.",
            "when": "Support workflows"
        },
        {
            "num": 27,
            "title": "FAQ Generator",
            "prompt": "Based on these common customer questions: [LIST 5-10 QUESTIONS], create detailed FAQ answers. Format: Q&A, 2-3 sentences each, link to relevant resources.",
            "when": "Knowledge base"
        },
        {
            "num": 28,
            "title": "Escalation Response Script",
            "prompt": "Write a response for an escalated customer issue: [DESCRIBE ISSUE]. Include: apology, root cause, solution, compensation (if applicable), and prevention plan.",
            "when": "Complaint resolution"
        },
        {
            "num": 29,
            "title": "CSAT Survey",
            "prompt": "Create a post-interaction CSAT survey for [SERVICE TYPE]. Include: satisfaction rating, NPS question, specific feedback questions, and optional comment field.",
            "when": "Customer feedback"
        },
        {
            "num": 30,
            "title": "Knowledge Base Article",
            "prompt": "Write a help article for: '[CUSTOMER PROBLEM]'. Include: problem description, step-by-step solution (with screenshots), troubleshooting, and when to contact support.",
            "when": "Self-service support"
        },
    ]

    for prompt in finance_prompts:
        prompt_box = create_prompt_box(prompt, body_small)
        elements.append(prompt_box)
        elements.append(Spacer(1, 0.15*inch))

    elements.append(PageBreak())

    # ============================================================================
    # PAGES 9-10: INDUSTRY-SPECIFIC PROMPTS
    # ============================================================================
    elements.append(Paragraph("Industry-Specific Prompts", section_title))
    elements.append(Spacer(1, 0.2*inch))

    industry_prompts = [
        {
            "num": 31,
            "title": "Healthcare: Patient Education Material",
            "prompt": "Create a patient education guide for [CONDITION/PROCEDURE]. Include: what to expect, preparation, aftercare, when to call doctor, and FAQs. Keep language simple (8th-grade level).",
            "when": "Medical practices"
        },
        {
            "num": 32,
            "title": "Healthcare: EHR Documentation Template",
            "prompt": "Draft an EHR note template for [VISIT TYPE]. Include: chief complaint, history, exam findings, assessment, plan, and billing codes.",
            "when": "Clinical documentation"
        },
        {
            "num": 33,
            "title": "Legal: Contract Clause Generator",
            "prompt": "Create a [CLAUSE TYPE: NDA, payment terms, liability] clause for a [CONTRACT TYPE]. Include: legal protections, defined terms, and enforcement mechanisms.",
            "when": "Legal drafting"
        },
        {
            "num": 34,
            "title": "Legal: Case Summary Template",
            "prompt": "Create a case summary template for [CASE TYPE]. Include: parties, facts, legal issues, applicable law, precedent, and analysis.",
            "when": "Legal research"
        },
        {
            "num": 35,
            "title": "Manufacturing: Work Order Template",
            "prompt": "Create a work order form for [PROCESS TYPE]. Include: job ID, materials, labor hours, equipment, quality checklist, and sign-off.",
            "when": "Shop floor operations"
        },
        {
            "num": 36,
            "title": "Manufacturing: Incident Report",
            "prompt": "Create a production incident report template for [INCIDENT TYPE]. Include: timeline, root cause, impact, corrective actions, and prevention plan.",
            "when": "Quality assurance"
        },
        {
            "num": 37,
            "title": "Real Estate: Property Listing Description",
            "prompt": "Write a compelling real estate listing for a [PROPERTY TYPE] in [LOCATION]. Highlight: unique features, neighborhood, schools, amenities, and selling points.",
            "when": "Property marketing"
        },
        {
            "num": 38,
            "title": "Real Estate: Lease Template Outline",
            "prompt": "Create an outline for a residential/commercial lease. Include: parties, term, rent, security deposit, maintenance, and default provisions.",
            "when": "Lease agreements"
        },
        {
            "num": 39,
            "title": "Construction: Daily Site Report",
            "prompt": "Create a construction daily report template. Include: weather, crew, equipment, progress, safety issues, and next-day plan.",
            "when": "Project documentation"
        },
        {
            "num": 40,
            "title": "Construction: RFI (Request for Information)",
            "prompt": "Create an RFI form for construction projects. Include: issue description, photos, clarification requested, proposed solution, and deadline.",
            "when": "Design coordination"
        },
    ]

    for prompt in industry_prompts:
        prompt_box = create_prompt_box(prompt, body_small)
        elements.append(prompt_box)
        elements.append(Spacer(1, 0.15*inch))

    elements.append(PageBreak())

    # ============================================================================
    # PAGES 11-12: ADVANCED TIPS & BEST PRACTICES
    # ============================================================================
    elements.append(Paragraph("Advanced Prompt Engineering & Adoption", section_title))
    elements.append(Spacer(1, 0.2*inch))

    # Tips section
    elements.append(Paragraph("5 Prompt Engineering Best Practices", heading2))
    elements.append(Spacer(1, 0.15*inch))

    tips_text = """
    <b>1. Be Specific:</b> Replace placeholders like [INDUSTRY], [AUDIENCE], [TIMEFRAME] with exact details.
    The more specific your input, the better ChatGPT's output.<br/>
    <br/>
    <b>2. Use Role-Playing:</b> Start with "Act as a [EXPERT ROLE]..." to get specialized answers.
    Example: "Act as a marketing director for a healthcare clinic..."<br/>
    <br/>
    <b>3. Ask for Formatting:</b> Specify output format explicitly. "Write this as a JSON file,"
    "Format as a bullet-point list," or "Structure as a 3-column table."<br/>
    <br/>
    <b>4. Iterate Responsively:</b> If the first response isn't perfect, ask ChatGPT to adjust.
    "Make this more casual" or "Add 3 examples" in follow-up messages.<br/>
    <br/>
    <b>5. Save Your Best Prompts:</b> In ChatGPT Business, star and save prompts that produce great results.
    Share them with your team via the "Export" feature.
    """
    elements.append(Paragraph(tips_text, body_small))

    elements.append(Spacer(1, 0.25*inch))

    # Custom GPTs section
    elements.append(Paragraph("Building Custom GPTs for Your Team", heading2))
    elements.append(Spacer(1, 0.15*inch))

    custom_gpt_text = """
    ChatGPT Business lets you create Custom GPTs — AI assistants fine-tuned for your exact workflow.
    Example: A "Content Calendar GPT" that automates your social media planning, or an "HR Advisor GPT"
    for onboarding.<br/>
    <br/>
    <b>How to create one:</b><br/>
    1. Click "Create a GPT" in ChatGPT Business<br/>
    2. Name it and describe its purpose<br/>
    3. Upload your best prompts as "knowledge"<br/>
    4. Add company branding (logo, tone)<br/>
    5. Share with your team<br/>
    <br/>
    <b>ROI:</b> One Custom GPT can save 10+ hours per week across your team.
    """
    elements.append(Paragraph(custom_gpt_text, body_small))

    elements.append(Spacer(1, 0.25*inch))

    # 30-day roadmap
    elements.append(Paragraph("Your 30-Day ChatGPT Business Adoption Roadmap", heading2))
    elements.append(Spacer(1, 0.15*inch))

    roadmap_text = """
    <b>Week 1: Get Started</b><br/>
    Set up ChatGPT Business, add team members, choose 1-2 prompts from this guide to test.<br/>
    <br/>
    <b>Week 2: Copy & Customize</b><br/>
    Run 5-10 prompts from this guide. Customize them for your business. Track what works.<br/>
    <br/>
    <b>Week 3: Build a Team Library</b><br/>
    Have team members contribute their best prompts. Create folders (by department or use case).
    Share across the team.<br/>
    <br/>
    <b>Week 4: Create Your First Custom GPT</b><br/>
    Build one Custom GPT for your most time-consuming task (e.g., content creation, HR workflows).
    Measure time savings.<br/>
    <br/>
    <b>Result:</b> Your team should be saving 5-10 hours per week by month-end.
    """
    elements.append(Paragraph(roadmap_text, body_small))

    elements.append(PageBreak())

    # ============================================================================
    # PAGE 13: ABOUT SAYFE.AI & FINAL CTA
    # ============================================================================
    elements.append(Spacer(1, 0.5*inch))

    elements.append(Paragraph("About Sayfe.ai", section_title))
    elements.append(Spacer(1, 0.2*inch))

    about_text = """
    Sayfe.ai is an Official OpenAI Channel Partner dedicated to helping small and mid-size
    businesses adopt ChatGPT Business. We've worked with hundreds of companies across healthcare,
    legal, manufacturing, real estate, and more to implement AI workflows that save time and
    increase revenue.<br/>
    <br/>
    <b>What We Offer:</b><br/>
    • <b>Free Onboarding & Consulting:</b> We set up your ChatGPT Business account and train your team<br/>
    • <b>Industry Prompt Libraries:</b> Pre-built, tested prompts specific to your business<br/>
    • <b>Custom GPT Development:</b> We build industry-specific AI assistants for your team<br/>
    • <b>Adoption Support:</b> Ongoing coaching to maximize your ROI<br/>
    <br/>
    <b>ChatGPT Business Pricing:</b><br/>
    $30/user/month — same price as direct from OpenAI, but with our free onboarding and support.
    """
    elements.append(Paragraph(about_text, body))

    elements.append(Spacer(1, 0.3*inch))

    # Final CTA
    cta_final = ParagraphStyle(
        'CTAFinal',
        fontName='Helvetica-Bold',
        fontSize=13,
        textColor=white,
        spaceAfter=10,
        alignment=1,
    )

    elements.append(Spacer(1, 0.2*inch))
    elements.append(Paragraph("Ready to Get Started?", heading2))
    elements.append(Spacer(1, 0.15*inch))

    final_cta_text = """
    <b>Visit sayfe.ai</b> to explore industry-specific prompt templates,
    schedule your free AI audit, and learn how ChatGPT Business can transform your team.<br/>
    <br/>
    <b>Schedule Your Free Consultation:</b> sayfe.ai/contact
    """
    elements.append(Paragraph(final_cta_text, body_accent))

    # Build PDF
    doc.build(elements)
    print(f"✓ PDF created successfully: {OUTPUT_PATH}")
    print(f"✓ File size: {os.path.getsize(OUTPUT_PATH) / 1024:.1f} KB")


def create_prompt_box(prompt_data, body_style):
    """Create a visually distinct prompt box"""
    prompt_num = prompt_data["num"]
    title = prompt_data["title"]
    prompt_text = prompt_data["prompt"]
    when_to_use = prompt_data["when"]

    # Create table for the prompt box with border
    prompt_content = [
        [Paragraph(f"<b>#{prompt_num}: {title}</b>", body_style)],
        [Spacer(1, 0.08*inch)],
        [Paragraph(f"<i>Copy this prompt:</i>", body_style)],
        [Spacer(1, 0.05*inch)],
        [Paragraph(
            f'<font face="Courier" size="9"><b>"{prompt_text}"</b></font>',
            body_style
        )],
        [Spacer(1, 0.08*inch)],
        [Paragraph(f"<i>When to use:</i> {when_to_use}", body_style)],
    ]

    # Create table with light background
    prompt_table = Table(prompt_content, colWidths=[7*inch])
    prompt_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_GRAY),
        ('LEFTPADDING', (0, 0), (-1, -1), 0.15*inch),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0.15*inch),
        ('TOPPADDING', (0, 0), (-1, -1), 0.1*inch),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.1*inch),
        ('BORDER', (0, 0), (-1, -1), 1, HexColor("#cccccc")),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))

    return prompt_table


if __name__ == "__main__":
    build_pdf()
