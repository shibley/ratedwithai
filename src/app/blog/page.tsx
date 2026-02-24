import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accessibility Blog | ADA Compliance Guides & WCAG Resources | RatedWithAI",
  description:
    "Expert guides on website accessibility, ADA compliance, WCAG standards, and lawsuit prevention. Practical tips for making your website accessible to everyone.",
  openGraph: {
    title: "Accessibility Blog | RatedWithAI",
    description:
      "Expert guides on website accessibility, ADA compliance, WCAG standards, and lawsuit prevention.",
    type: "website",
  },
};

const blogPosts = [
  {
    slug: "ada-website-lawsuit-protection",
    title: "How to Protect Your Small Business from ADA Website Lawsuits in 2026",
    description:
      "15,000+ ADA website lawsuits in 4 years. Learn the 5-step protection plan to avoid lawsuits, why overlays won't save you, and how continuous monitoring costs 517x less than a single lawsuit.",
    category: "Legal",
  },
  {
    slug: "digital-accessibility-platform",
    title: "Digital Accessibility Platform: The Complete Buyer's Guide for 2026",
    description:
      "Compare 8 digital accessibility platforms — from free tools to enterprise solutions. Features, pricing, use cases, and why overlays don't count as platforms.",
    category: "Platform Guide",
  },
  {
    slug: "best-ada-compliance-software",
    title: "10 Best ADA Compliance Software in 2026 (Tested & Compared)",
    description:
      "We tested the top ADA compliance software for 2026. Compare pricing, WCAG coverage, automation accuracy, and real compliance capabilities — from free tools to enterprise platforms.",
    category: "Roundup",
  },
  {
    slug: "shopify-accessibility-apps",
    title: "7 Best Shopify Accessibility Apps in 2026 (Tested & Compared)",
    description:
      "We tested the top Shopify accessibility apps for ADA and WCAG compliance. Overlay widgets vs code-based scanners, pricing, real WCAG coverage, and what actually protects your store.",
    category: "Comparison",
  },
  {
    slug: "shopify-ada-compliance",
    title: "Shopify ADA Compliance: How to Make Your Store Accessible in 2026",
    description:
      "Is your Shopify store ADA compliant? Common accessibility issues, best themes, step-by-step fixes, legal risks, and how to test for WCAG compliance.",
    category: "Platform Guide",
  },
  {
    slug: "wordpress-accessibility-guide",
    title: "WordPress Accessibility: How to Make Your Site ADA Compliant in 2026",
    description:
      "Complete WordPress accessibility guide covering themes, plugins, Gutenberg tips, WooCommerce, testing methods, and ADA lawsuit prevention.",
    category: "Platform Guide",
  },
  {
    slug: "web-accessibility-service",
    title: "Web Accessibility Service: What It Includes, Costs & How to Choose (2026)",
    description:
      "Everything you need to know about web accessibility services in 2026. Compare manual audits ($5K-$25K), automated scanning ($29/mo), and overlay widgets. Find the right approach for your budget and compliance needs.",
    category: "Service Guide",
  },
  {
    slug: "audioeye-review-2026",
    title: "AudioEye Review 2026: Is the Hybrid Overlay Approach Worth $199–$799/Month?",
    description:
      "Honest AudioEye review covering pricing ($199-$799/mo), the lawsuit controversy, FTC scrutiny, pros and cons, and how it compares to code-based alternatives.",
    category: "Review",
  },
  {
    slug: "accessibility-certification-guide",
    title: "Accessibility Certification Guide 2026: IAAP, Section 508, Deque & More",
    description:
      "Complete guide to all major accessibility certifications — CPACC, WAS, CPWA, Section 508 Trusted Tester, DHS ICT, W3C WAI, and Deque University. Costs, difficulty, study resources, and career impact.",
    category: "Career Guide",
  },
  {
    slug: "siteimprove-alternative-2026",
    title: "Best Siteimprove Alternative 2026: Save 90% on Accessibility Testing",
    description:
      "Siteimprove charges $300-500/mo for accessibility testing. Compare features, pricing, and alternatives — starting at $29/mo with no annual contract.",
    category: "Comparison",
  },
  {
    slug: "accessibe-review",
    title: "accessiBe Review 2026: Honest Assessment After the $1M FTC Fine",
    description:
      "An honest, data-driven accessiBe review. After the FTC's $1M fine for deceptive claims, we test accessWidget against real WCAG criteria. Pricing, pros, cons, and better alternatives.",
    category: "Review",
  },
  {
    slug: "healthcare-website-accessibility-may-2026",
    title: "Healthcare Website Accessibility: The May 2026 HHS Deadline That Could Cut Your Federal Funding",
    description:
      "The HHS Section 504 deadline hits May 11, 2026. Healthcare providers accepting Medicare/Medicaid must meet WCAG 2.1 AA or risk losing federal funding. Complete guide.",
    category: "Deadline",
  },
  {
    slug: "accessibe-alternative",
    title: "7 Best accessiBe Alternatives in 2026 (After the $1M FTC Fine)",
    description:
      "Compare 7 real accessibility solutions after the FTC fine and overlay backlash. Code-based scanners that fix issues at the source — starting at $29/mo.",
    category: "Comparison",
  },
  {
    slug: "ada-website-compliance-guide",
    title: "ADA Website Compliance: The Definitive Guide for 2026",
    description:
      "Everything you need to know about ADA website compliance in 2026. Requirements, April deadline, lawsuits, checklist, and how to achieve compliance.",
    category: "Compliance",
  },
  {
    slug: "wcag-compliance-guide",
    title: "WCAG Compliance: The Complete Guide for 2026",
    description:
      "Master WCAG compliance with our comprehensive guide. WCAG versions, conformance levels, POUR principles, testing methodology, and a 20-item checklist.",
    category: "WCAG",
  },
  {
    slug: "section-508-compliance-guide",
    title: "Section 508 Compliance: The Complete Guide for 2026",
    description:
      "Everything you need to know about Section 508 compliance. Requirements, checklist, testing methods, VPAT documentation, and how it connects to WCAG and ADA.",
    category: "Compliance",
  },
  {
    slug: "ada-lawsuit-reform-2026",
    title: "ADA Lawsuit Reform 2026: Missouri HB 1694 and Utah SB 68",
    description:
      "Two landmark bills could reshape ADA website accessibility lawsuits in 2026. Analysis of Missouri HB 1694 and Utah SB 68 and what they mean for businesses.",
    category: "Legal",
  },
  {
    slug: "small-business-accessibility-guide",
    title: "Small Business Website Accessibility Guide 2026",
    description:
      "Affordable, actionable guide to making your small business website ADA compliant. Avoid lawsuits, reach more customers, and improve your SEO.",
    category: "Getting Started",
  },
  {
    slug: "website-accessibility-lawsuit-statistics-2026",
    title: "Website Accessibility Lawsuit Statistics 2026: 8,667 Cases and Counting",
    description:
      "The latest website accessibility lawsuit statistics and trends for 2026. Industry breakdown, state data, and how to protect your business.",
    category: "Legal",
  },
  {
    slug: "ada-compliance-checklist-2026",
    title: "ADA Compliance Checklist 2026: The Complete Guide for Business Owners",
    description:
      "Stay compliant and avoid lawsuits with our comprehensive ADA compliance checklist for 2026. Learn what ADA compliance means, who needs it, and get actionable steps.",
    category: "Compliance",
  },
  {
    slug: "how-to-check-website-ada-compliant",
    title: "How to Check if Your Website is ADA Compliant (2026 Guide)",
    description:
      "Learn how to check if your website is ADA compliant with our beginner-friendly guide. Free tools, manual testing steps, and actionable fixes.",
    category: "Getting Started",
  },
  {
    slug: "top-10-wcag-failures",
    title: "Top 10 Most Common WCAG Failures (And How to Fix Them)",
    description:
      "The 10 most frequent WCAG accessibility violations found on websites, with code examples and step-by-step fixes. Based on analysis of 50,000+ scans.",
    category: "WCAG",
  },
  {
    slug: "how-to-fix-common-wcag-failures",
    title: "How to Fix Common WCAG Failures (2026 Guide)",
    description:
      "Learn how to fix the top 10 most common WCAG accessibility failures with practical code examples and step-by-step remediation guides.",
    category: "WCAG",
  },
  {
    slug: "wcag-22-complete-guide",
    title: "WCAG 2.2 vs 2.1: Complete Technical Comparison (2026)",
    description:
      "Detailed breakdown of every change between WCAG 2.1 and WCAG 2.2, including the 9 new success criteria and practical implementation guidance.",
    category: "WCAG",
  },
  {
    slug: "wcag-2-1-vs-2-2",
    title: "WCAG 2.1 vs 2.2: What Changed and What It Means for Your Website",
    description:
      "WCAG 2.2 introduces 9 new success criteria focused on mobile accessibility and cognitive disabilities. Learn what changed and how to update.",
    category: "WCAG",
  },
  {
    slug: "accessibility-audit-checklist-2026",
    title: "Website Accessibility Audit Checklist 2026 (Step-by-Step)",
    description:
      "Complete website accessibility audit checklist covering automated testing, manual checks, WCAG compliance, and remediation prioritization.",
    category: "Auditing",
  },
  {
    slug: "website-accessibility-testing-guide",
    title: "How to Test Your Website for Accessibility (2026 Guide)",
    description:
      "Learn how to test your website for accessibility with manual techniques, automated tools, and WCAG 2.2 compliance checks.",
    category: "Testing",
  },
  {
    slug: "ada-lawsuit-settlements-2026",
    title: "ADA Website Lawsuit Settlements: What Companies Pay in 2026",
    description:
      "Real ADA website lawsuit settlement amounts, costs, and what to expect if sued. Learn settlement ranges, legal fees, and how to protect your business.",
    category: "Legal",
  },
  {
    slug: "ada-title-ii-compliance-guide",
    title: "ADA Title II Compliance Guide for Government Websites 2026",
    description:
      "The DOJ's new ADA Title II rule requires state and local government websites to meet WCAG 2.1 AA by April 2026 or 2027. Learn the requirements.",
    category: "Compliance",
  },
  {
    slug: "european-accessibility-act-2025",
    title: "European Accessibility Act 2025: What US Companies Need to Know",
    description:
      "The European Accessibility Act takes effect June 28, 2025. Learn how it impacts US companies selling to EU customers and how to prepare.",
    category: "Legal",
  },
  {
    slug: "ada-compliance-by-industry",
    title: "ADA Website Compliance Requirements by Industry (2026 Guide)",
    description:
      "Industry-specific ADA compliance requirements for healthcare, ecommerce, banking, education, restaurants, and more.",
    category: "Compliance",
  },
  {
    slug: "ecommerce-accessibility-guide",
    title: "E-commerce Website Accessibility: Complete ADA Compliance Guide 2026",
    description:
      "Make your online store ADA compliant. Learn e-commerce accessibility requirements, avoid lawsuits, and improve conversions.",
    category: "Industry",
  },
  {
    slug: "healthcare-accessibility-compliance",
    title: "Healthcare Website Accessibility: ADA, HIPAA & Section 504 Guide",
    description:
      "Comprehensive guide to healthcare website accessibility requirements. Learn how ADA, HIPAA, and Section 504 intersect for healthcare providers.",
    category: "Industry",
  },
  {
    slug: "banking-accessibility-compliance",
    title: "Banking & Financial Services Website Accessibility: ADA Compliance Guide",
    description:
      "Complete guide to bank website accessibility and financial services ADA compliance. Learn WCAG requirements for fintech and banking portals.",
    category: "Industry",
  },
  {
    slug: "law-firm-accessibility-compliance",
    title: "Law Firm Website Accessibility: ADA Requirements for Legal Websites",
    description:
      "Complete guide to law firm accessibility compliance. Learn why ADA Title III applies to legal websites and how to fix common issues.",
    category: "Industry",
  },
];

const categoryColors: Record<string, string> = {
  Compliance: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Getting Started": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  WCAG: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Auditing: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Testing: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  Legal: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  Industry: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  Comparison: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  "Platform Guide": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Review: "bg-red-500/15 text-red-300 border-red-500/30",
  Deadline: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  "Career Guide": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Service Guide": "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Roundup: "bg-sky-500/15 text-sky-300 border-sky-500/30",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Accessibility Blog
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Expert guides on ADA compliance, WCAG standards, accessibility testing, and lawsuit prevention.
            Everything you need to make your website accessible.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 transition hover:border-slate-700 hover:bg-slate-900/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        categoryColors[post.category] ?? "bg-slate-500/15 text-slate-300 border-slate-500/30"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-slate-100 transition group-hover:text-white">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-slate-600 transition group-hover:text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">Check Your Website Now</h2>
          <p className="mb-6 text-slate-400">
            Get a free accessibility score with detailed violation reports and remediation guidance.
          </p>
          <Link
            href="/scan"
            className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Free Accessibility Scan →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
