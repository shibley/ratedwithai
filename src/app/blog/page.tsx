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
