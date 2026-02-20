# RatedWithAI — Website Accessibility Scanner
## Project Plan & Autonomous Build Guide

**Domain:** ratedwithai.com
**Stack:** Next.js 14 + Tailwind CSS + Supabase + Stripe + Vercel
**Core Engine:** axe-core + Playwright
**Tagline:** "Get your website's accessibility rated with AI"

---

## 🎯 Product Vision

A website accessibility scanner that helps SMBs check, monitor, and fix ADA/WCAG compliance issues. Free scan as lead magnet, paid monitoring subscription.

**The funnel:**
pSEO traffic → Free scan → Email capture → Drip campaign → $29-99/mo subscription

---

## 💰 Monetization Strategy

### Pricing Tiers
| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Single page scan, score + top 10 issues, shareable report URL |
| Starter | $29/mo | Weekly monitoring, 50 pages, email alerts, PDF reports, compliance badge |
| Pro | $79/mo | Daily monitoring, 500 pages, priority scanning, remediation guides, API access |
| Agency | $199/mo | Unlimited sites, white-label reports, client dashboard, bulk scanning |

### Supplementary Revenue
- Affiliate links to accessiBe, UserWay on comparison/blog content
- SEMrush affiliate on SEO-adjacent content
- Eventually: marketplace for accessibility remediation freelancers

---

## 🏗️ Technical Architecture

### Scanner Pipeline
```
User enters URL
  → Vercel API route receives request
  → Job queued in Supabase (status: pending)
  → Worker picks up job:
      1. Playwright launches headless browser
      2. Navigates to URL, waits for load
      3. Injects + runs axe-core
      4. Collects violations, passes, incomplete
      5. Calculates score (0-100)
      6. Stores results in Supabase
      7. Returns results to frontend
```

### Score Calculation
- Start at 100
- Deduct points per violation weighted by severity:
  - Critical: -10 per issue
  - Serious: -5 per issue
  - Moderate: -2 per issue
  - Minor: -1 per issue
- Floor at 0, cap at 100
- Letter grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### Database Schema (Supabase)
```sql
-- Sites registered for monitoring
sites (
  id uuid PK,
  user_id uuid FK,
  url text NOT NULL,
  name text,
  created_at timestamp,
  plan text DEFAULT 'free'
)

-- Individual scan results
scans (
  id uuid PK,
  site_id uuid FK,
  url text NOT NULL,
  score integer,
  grade text,
  violations_count integer,
  passes_count integer,
  violations jsonb,
  passes jsonb,
  incomplete jsonb,
  scan_type text, -- 'manual' | 'scheduled'
  created_at timestamp
)

-- Users
users (
  id uuid PK,
  email text,
  clerk_id text,
  stripe_customer_id text,
  plan text DEFAULT 'free',
  created_at timestamp
)

-- Page crawl results (for multi-page scans)
page_scans (
  id uuid PK,
  scan_id uuid FK,
  url text,
  score integer,
  violations_count integer,
  violations jsonb,
  created_at timestamp
)
```

### Key Dependencies
```json
{
  "axe-core": "^4.x",
  "playwright": "^1.x",
  "@playwright/test": "^1.x",
  "next": "^14.x",
  "tailwindcss": "^3.x",
  "@supabase/supabase-js": "^2.x",
  "stripe": "^14.x",
  "@clerk/nextjs": "^4.x",
  "react-pdf": "^7.x"
}
```

---

## 📄 Page Structure

### Core App Pages
```
/ .......................... Landing page with free scanner input
/scan/[id] ................. Scan results page (shareable)
/dashboard ................. User dashboard (auth required)
/dashboard/sites ........... Manage monitored sites
/dashboard/sites/[id] ...... Site detail + scan history
/dashboard/reports ......... PDF report generation
/pricing ................... Pricing page
/api/scan .................. POST - trigger new scan
/api/scan/[id] ............. GET - fetch scan results
/api/webhook/stripe ........ Stripe webhook handler
```

### pSEO Pages (Phase 2)
```
/check/[website] ........... "Is [Website] ADA Compliant?" 
                             (e.g., /check/amazon, /check/walmart)
/industry/[industry] ....... "[Industry] ADA Compliance Guide"
                             (e.g., /industry/restaurants, /industry/healthcare)
/cms/[cms] ................. "[CMS] Accessibility Guide"
                             (e.g., /cms/wordpress, /cms/shopify)
/state/[state] ............. "[State] ADA Website Lawsuit Statistics"
/wcag/[criterion] .......... WCAG criterion explainer pages
/blog/ ..................... SEO content hub
```

### pSEO Targets (500+ pages)
- Top 200 websites: "Is [X] ADA Compliant?" (amazon, walmart, target, etc.)
- 50 industries: restaurants, healthcare, law firms, real estate, education...
- 20 CMS platforms: WordPress, Shopify, Squarespace, Wix, Webflow...
- 50 US states + territories: lawsuit statistics per state
- 78 WCAG 2.1 success criteria: explainer for each
- 100+ blog posts: "ADA compliance checklist for [X]"

---

## 🚀 Build Phases

### Phase 1: MVP Scanner (Week 1)
- [ ] Next.js project scaffolding (create-next-app)
- [ ] Landing page with URL input + hero section
- [ ] API route: POST /api/scan — accepts URL, runs axe-core via Playwright
- [ ] Scan results page with score, grade, violation list
- [ ] Shareable scan URL (/scan/[id])
- [ ] Basic Supabase setup (scans table)
- [ ] Mobile responsive design
- [ ] Deploy to Vercel
- [ ] Connect ratedwithai.com domain

### Phase 2: pSEO Pages (Week 1-2)
- [ ] Template for "Is [Website] ADA Compliant?" pages
- [ ] Generate 200 website check pages
- [ ] Template for industry compliance guides (50 pages)
- [ ] Template for CMS accessibility guides (20 pages)
- [ ] Sitemap generation
- [ ] IndexNow submission
- [ ] Cross-link with ASC, AISO, UsersRated, 4DayJob in footers
- [ ] Internal linking between pSEO pages

### Phase 3: Auth + Billing (Week 2)
- [ ] Clerk authentication setup
- [ ] Stripe billing integration (3 tiers)
- [ ] User dashboard
- [ ] Site management (add/remove sites to monitor)
- [ ] Scan history per site
- [ ] Usage limits enforcement (pages per plan)

### Phase 4: Monitoring + Alerts (Week 2-3)
- [ ] Scheduled scanning cron (weekly for Starter, daily for Pro)
- [ ] Email alerts when score drops
- [ ] Score trend charts on dashboard
- [ ] Compliance badge embed code (like "Powered by RatedWithAI")

### Phase 5: Premium Features (Week 3-4)
- [ ] PDF report generation
- [ ] Multi-page site crawling
- [ ] Remediation guides (per violation type)
- [ ] API access for Pro/Agency tiers
- [ ] White-label reports (Agency tier)
- [ ] Comparison pages: "accessiBe vs RatedWithAI", etc.

### Phase 6: Growth (Ongoing)
- [ ] Blog content targeting 330+ keywords from research
- [ ] WCAG criterion explainer pages (78 pages)
- [ ] State-by-state lawsuit stats pages (50 pages)
- [ ] Outreach to web agencies for Agency tier
- [ ] Integration with ASC (accessibility score on status pages)
- [ ] Social proof: "X websites scanned" counter
- [ ] Product Hunt launch
- [ ] Free accessibility tools (contrast checker, alt text checker) as link magnets

---

## 🔗 Cross-Link Network Integration

### From ASC → RatedWithAI
- Banner on ASC: "Your site is UP — but is it ACCESSIBLE?"
- Blog post: "Why Accessibility Matters for Your API"
- Footer link in cross-link network

### From RatedWithAI → ASC
- "Also monitor your uptime with API Status Check"
- Footer link
- Blog cross-references

### From AISO → RatedWithAI
- Listed as an AI-powered accessibility tool in the directory
- Featured listing

### From UsersRated → RatedWithAI
- Accessibility score as a rating dimension
- "Accessibility powered by RatedWithAI"

---

## 📊 Keyword Research Summary

### High Volume Core Keywords
| Keyword | Monthly Vol | CPC |
|---------|-----------|-----|
| ada compliance | 22,200 | $8.34 |
| section 508 compliance | 9,900 | $10.31 |
| website accessibility checker | 8,100 | $10.42 |
| ada compliance checker | 8,100 | $8.06 |
| ada compliant website | 5,400 | $14.13 |
| wcag compliance | 4,400 | $8.83 |
| free ada compliance checker | 2,400 | $12.32 |

### Total Addressable Keywords: 330+
### Total Monthly Search Volume: 51K+ (core terms only)
### Total Monthly Traffic Value: ~$551K

### Competitors (beatable)
1. accessibilitychecker.org — basic free tool, #1 on Google
2. WAVE (webaim.org) — free, no subscription model
3. UserWay — funded, enterprise-focused
4. AudioEye — public company, expensive
5. accessiBe — $51M ARR, controversial overlay approach

Gap: Nobody owns the affordable SMB tier ($29-49/mo)

---

## ⚠️ Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| accessiBe/UserWay price drops | Focus on transparency + simplicity vs their bloated approach |
| Google algorithm changes | Diversify traffic: pSEO + free tool backlinks + email list |
| axe-core false positives | Allow users to dismiss/ignore specific issues |
| Scan performance at scale | Queue system + worker pool, rate limit free tier |
| Legal liability ("we said compliant but...") | Clear disclaimers: "tool identifies issues, not legal advice" |

---

## 🎯 Success Metrics

| Metric | 3 Month | 6 Month | 12 Month |
|--------|---------|---------|----------|
| Free scans/month | 1,000 | 5,000 | 20,000 |
| Paying customers | 10 | 50-100 | 200-500 |
| MRR | $400 | $2-4K | $10-25K |
| pSEO pages indexed | 100 | 300 | 500+ |
| Organic traffic/month | 500 | 5,000 | 20,000 |

---

## 📝 Notes
- Created: 2026-02-19
- Decision: Use ratedwithai.com (Shibley chose over alertmri.com)
- Strategy: Hybrid SaaS subscription + pSEO + affiliate
- Part of cross-link network: ASC ↔ AISO ↔ UsersRated ↔ 4DayJob ↔ RatedWithAI
- Incudo remains separate (different brand/audience)
