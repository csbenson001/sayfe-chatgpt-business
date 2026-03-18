#!/bin/bash
# ============================================
# Sayfe.ai ChatGPT Business — Deploy Script
# Run this from your local terminal
# ============================================

set -e

echo "🚀 Sayfe.ai ChatGPT Business — Deployment"
echo "==========================================="
echo ""

# Step 1: Check for gh CLI
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI not found. Install it:"
    echo "   brew install gh  (Mac)"
    echo "   winget install GitHub.cli  (Windows)"
    echo ""
    echo "Or create the repo manually at https://github.com/new"
    echo "   Name: sayfe-chatgpt-business"
    echo "   Visibility: Public"
    echo ""
    read -p "Press Enter once the repo exists on GitHub..."
else
    echo "✅ GitHub CLI found"
    
    # Check auth
    if ! gh auth status &> /dev/null; then
        echo "🔑 Logging into GitHub..."
        gh auth login
    fi
    
    # Create repo
    echo "📦 Creating GitHub repository..."
    gh repo create csbenson001/sayfe-chatgpt-business --public --description "Sayfe.ai - Official OpenAI ChatGPT Business Partner Site" 2>/dev/null || echo "   (Repo may already exist — continuing)"
fi

# Step 2: Check if we're in the right directory
if [ ! -f "public/index.html" ]; then
    echo "❌ Error: Run this script from the sayfe-chatgpt-business directory"
    echo "   cd sayfe-chatgpt-business && bash deploy.sh"
    exit 1
fi

echo "✅ Project files verified"

# Step 3: Set up git remote and push
echo "📤 Pushing to GitHub..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/csbenson001/sayfe-chatgpt-business.git
git push -u origin main --force

echo ""
echo "✅ Code pushed to GitHub!"
echo "   https://github.com/csbenson001/sayfe-chatgpt-business"
echo ""

# Step 4: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod --yes
    echo ""
    echo "✅ Deployed to Vercel!"
else
    echo "⚠️  Vercel CLI not found. Two options:"
    echo ""
    echo "   Option A (CLI):"
    echo "     npm i -g vercel && vercel --prod"
    echo ""
    echo "   Option B (Web — easiest):"
    echo "     1. Go to https://vercel.com/new"
    echo "     2. Import 'sayfe-chatgpt-business' from GitHub"
    echo "     3. Click Deploy — vercel.json handles everything"
    echo ""
fi

echo "==========================================="
echo "🎉 Done! Your URLs:"
echo "   Main site:     /  "
echo "   Healthcare:    /healthcare"
echo "   Legal:         /legal"
echo "   Manufacturing: /manufacturing"
echo "   ... (15 industry pages total)"
echo ""
echo "Next: Point sayfe.ai domain to the Vercel deployment"
echo "==========================================="
