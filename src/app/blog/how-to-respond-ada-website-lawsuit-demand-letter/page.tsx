/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "How to Respond to an ADA Website Lawsuit or Demand Letter (2026 Guide) | RatedWithAI",
  description:
    "Just received an ADA website demand letter? Don't panic. This step-by-step guide covers what to do in the first 72 hours, when to settle vs. fight, typical costs, and how to prevent repeat lawsuits.",
  openGraph: {
    title:
      "How to Respond to an ADA Website Lawsuit or Demand Letter (2026 Guide)",
    description:
      "15,000+ ADA website lawsuits filed in 4 years. If you just got a demand letter, here's exactly what to do — step by step, from an accessibility expert.",
    type: "article",
    publishedTime: "2026-03-01T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "how to respond ada website lawsuit",
    "ada demand letter response",
    "ada website lawsuit what to do",
    "ada compliance demand letter",
    "respond to ada lawsuit small business",
    "ada website lawsuit settlement",
    "ada website lawsuit defense",
    "ada demand letter small business",
    "ada website accessibility lawsuit response",
    "ada lawsuit demand letter template",
    "ada website lawsuit cost",
    "ada lawsuit settlement amount",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/how-to-respond-ada-website-lawsuit-demand-letter",
  },
};

export default function HowToRespondADALawsuitPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Respond to an ADA Website Lawsuit or Demand Letter: 2026 Guide for Small Businesses",
    description:
      "Step-by-step guide for small businesses that just received an ADA website accessibility demand letter or lawsuit. Covers the first 72 hours, settlement decisions, defense strategies, and prevention.",
    author: {
      "@type": "Organization",
      name: "RatedWithAI",
    },
    publisher: {
      "@type": "Organization",
      name: "RatedWithAI",
      logo: {
        "@type": "ImageObject",
        url: "https://ratedwithai.com/logo.png",
      },
    },
    datePublished: "2026-03-01T00:00:00.000Z",
    dateModified: "2026-03-01T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://ratedwithai.com/blog/how-to-respond-ada-website-lawsuit-demand-letter",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I do first when I receive an ADA website demand letter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Don't panic, but don't ignore it either. Within 24 hours: (1) Preserve a screenshot/copy of the demand letter with the date received, (2) Document your current website by taking screenshots and saving the HTML, (3) Run a free accessibility scan at ratedwithai.com to understand your actual issues, (4) Contact an ADA defense attorney — not a general business lawyer. Do NOT contact the plaintiff's attorney directly, make changes to your website without documenting the 'before' state, or admit fault in any communication.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it typically cost to settle an ADA website lawsuit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Settlement amounts vary widely. Demand letters typically request $3,000-$10,000. If a federal lawsuit is filed, settlements range from $5,000-$25,000 for small businesses. Attorney's fees (which the plaintiff can recover under the ADA) add $5,000-$50,000+. In California, statutory damages under the Unruh Act start at $4,000 per visit/occurrence. The Gainesville, FL bakery Uppercrust settled for approximately $6,500 plus additional attorney fees. Sara Campbell's fashion business spent over $200,000 total across multiple lawsuits.",
        },
      },
      {
        "@type": "Question",
        name: "Should I settle or fight an ADA website lawsuit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The decision depends on several factors: (1) If the lawsuit is from a known serial plaintiff with a pattern of filing identical complaints, there may be stronger grounds to fight — courts are increasingly scrutinizing these cases. (2) If your website genuinely has accessibility barriers, settling and fixing the issues is often cheaper than litigation. (3) Fighting a lawsuit typically costs $15,000-$75,000+ in defense attorney fees. (4) Settling without fixing your website invites repeat lawsuits. The best approach: fix the accessibility issues regardless of whether you settle, and document everything you do.",
        },
      },
      {
        "@type": "Question",
        name: "Can I be sued again after settling an ADA website lawsuit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Settling an ADA lawsuit does not immunize you from future claims. A different plaintiff — or even the same plaintiff — can sue again if new accessibility barriers exist or if previous issues weren't fully remediated. Sara Campbell, a fashion retailer featured in the Cox Media Group investigation, was sued two more times after spending significant money on accessibility fixes. This is why ongoing monitoring is essential — a one-time fix isn't enough when your website changes with every update, new product, or plugin installation.",
        },
      },
      {
        "@type": "Question",
        name: "Is my website actually required to be ADA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost certainly yes, if you serve the public. Under ADA Title III, businesses that are 'places of public accommodation' must provide equal access — and courts have overwhelmingly ruled that websites qualify. In February 2026, a Wisconsin federal court ruled that even online-only stores (with no physical location) must comply. The DOJ's April 2024 Title II rule explicitly requires WCAG 2.1 AA compliance for government websites. For private businesses, WCAG 2.1 AA is the de facto standard referenced by courts and DOJ settlements. The DOJ has not formally endorsed WCAG as the ADA standard for Title III, but every recent settlement agreement requires it.",
        },
      },
      {
        "@type": "Question",
        name: "Do accessibility overlays protect me from ADA lawsuits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. In fact, they may make things worse. The FTC fined accessiBe $1 million in 2025 for deceptive marketing claims about their overlay product. Multiple lawsuits have been filed against websites using overlays — having one installed is not a valid defense. Over 800 accessibility professionals signed the Overlay Fact Sheet opposing these tools. Courts and the DOJ evaluate actual accessibility barriers, not whether you have a toolbar widget installed. The money spent on an overlay subscription ($500-$3,000/year) is better invested in actual remediation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical timeline for an ADA website lawsuit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Demand letters typically give 10-30 days to respond. If a federal lawsuit is filed, you generally have 21 days to file a response (or 60 days if served outside the court's jurisdiction). The full timeline: demand letter response (10-30 days), initial settlement negotiations (30-90 days), if no settlement, discovery and motions (3-12 months), potential trial (12-24 months). Most cases settle within 3-6 months. In states with 'right to cure' laws (Utah, Missouri, California pending), you may have 30-120 days to fix issues before a lawsuit can proceed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I claim the cost of accessibility fixes on my taxes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small businesses with revenue under $1 million or fewer than 30 employees can claim the Disabled Access Credit (IRS Form 8826) for up to $5,000 per year (50% of accessibility expenditures between $250 and $10,250). All businesses can also deduct up to $15,000 per year under Section 190 for architectural and transportation barrier removal. These tax benefits can offset a significant portion of your remediation costs. See our detailed guide on IRS Form 8826 for accessibility tax credits.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">
            How to Respond to an ADA Website Lawsuit
          </span>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span>·</span>
              <span>18 min read</span>
              <span>·</span>
              <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-0.5 rounded-full text-xs font-medium">
                Legal Guide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How to Respond to an ADA Website Lawsuit or Demand Letter: The
              Complete 2026 Guide
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              You just opened a letter threatening to sue your business over
              website accessibility violations. Your stomach dropped. Now what?
              This guide walks you through exactly what to do — hour by hour,
              step by step — based on{" "}
              <strong>15,000+ ADA website lawsuits</strong> filed in the past
              four years and the latest 2026 court rulings, settlement data, and
              defense strategies.
            </p>
          </header>

          {/* Emergency Banner */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-10 not-prose">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚨</span>
              <div>
                <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-2">
                  Just Received a Demand Letter? Start Here
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-3">
                  If you're reading this because you just received an ADA demand
                  letter or lawsuit, jump to{" "}
                  <a
                    href="#first-72-hours"
                    className="underline font-semibold hover:text-red-900"
                  >
                    The First 72 Hours: Your Emergency Checklist
                  </a>
                  . Then come back and read the rest.
                </p>
                <Link
                  href="/check"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                >
                  🔍 Free Accessibility Scan — Know Your Actual Issues
                </Link>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-10 not-prose">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              📋 Table of Contents
            </h2>
            <nav className="space-y-2 text-sm">
              <a
                href="#why-you-were-targeted"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                1. Why Your Business Was Targeted
              </a>
              <a
                href="#demand-letter-vs-lawsuit"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                2. Demand Letter vs. Federal Lawsuit: Key Differences
              </a>
              <a
                href="#first-72-hours"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                3. The First 72 Hours: Your Emergency Checklist
              </a>
              <a
                href="#understand-the-claims"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                4. Understanding What They're Actually Claiming
              </a>
              <a
                href="#settle-or-fight"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                5. Settle vs. Fight: The Decision Framework
              </a>
              <a
                href="#settlement-costs"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                6. Typical Settlement Costs in 2026
              </a>
              <a
                href="#defense-strategies"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                7. Defense Strategies That Actually Work
              </a>
              <a
                href="#state-cure-laws"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                8. State "Right to Cure" Laws That May Protect You
              </a>
              <a
                href="#fix-your-website"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                9. How to Fix Your Website (Whether You Settle or Not)
              </a>
              <a
                href="#prevent-repeat-lawsuits"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                10. Preventing Repeat Lawsuits
              </a>
              <a
                href="#tax-credits"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                11. Tax Credits That Offset Your Costs
              </a>
              <a
                href="#real-case-studies"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                12. Real Case Studies: What Businesses Actually Experienced
              </a>
              <a
                href="#faq"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                13. FAQ
              </a>
            </nav>
          </div>

          {/* Section 1: Why You Were Targeted */}
          <section id="why-you-were-targeted">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              1. Why Your Business Was Targeted
            </h2>
            <p>
              If you just received an ADA demand letter, your first question is
              probably: "Why me?" The answer, unfortunately, is that you're
              likely one of dozens — or hundreds — of businesses receiving
              identical letters this week.
            </p>
            <p>
              A{" "}
              <strong>
                February 2026 investigation by Cox Media Group
              </strong>{" "}
              found over <strong>15,000 ADA website lawsuits</strong> filed in
              the past four years. In 2025 alone, nearly 4,000 cases were
              tracked, with{" "}
              <strong>90% filed by just 16 specialized law firms</strong>.
            </p>
            <p>Here's how the system typically works:</p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                How Serial ADA Website Lawsuits Work
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 text-lg">1.</span>
                  <div>
                    <strong>Automated scanning:</strong> Law firms use automated
                    tools to crawl thousands of websites, identifying
                    accessibility violations like missing alt text, poor color
                    contrast, or keyboard navigation issues.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 text-lg">2.</span>
                  <div>
                    <strong>Named plaintiff:</strong> A visually impaired or
                    disabled individual is named as the plaintiff. In some cases,
                    they may have genuinely attempted to use your website. In
                    others, courts have found that plaintiffs never intended to
                    use the business's services at all.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 text-lg">3.</span>
                  <div>
                    <strong>Template lawsuits:</strong> Identical or
                    nearly-identical complaints are filed against many businesses
                    at once. In Gainesville, FL, a single plaintiff named Makeda
                    Evans sued <strong>49 businesses</strong> in 18 months —
                    including a pizza shop, a bakery, and a fitness center.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 text-lg">4.</span>
                  <div>
                    <strong>Settlement pressure:</strong> Under the ADA,
                    prevailing plaintiffs can recover attorney's fees — but not
                    monetary damages in federal court. The real cost to your
                    business is attorney's fees and the cost of defense. Most
                    businesses settle for $3,000-$25,000 because fighting costs
                    more.
                  </div>
                </div>
              </div>
            </div>

            <p>
              <strong>This doesn't mean accessibility doesn't matter.</strong>{" "}
              It absolutely does. Roughly 26% of American adults — 61 million
              people — live with a disability. Making your website accessible is
              both a legal obligation and good business practice. But
              understanding the litigation landscape helps you respond
              strategically rather than out of panic.
            </p>
          </section>

          {/* Section 2: Demand Letter vs. Lawsuit */}
          <section id="demand-letter-vs-lawsuit">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              2. Demand Letter vs. Federal Lawsuit: Key Differences
            </h2>
            <p>
              The first thing to understand is what you actually received.
              There's a significant difference between a demand letter and a
              filed lawsuit, and your response should differ accordingly.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-200 text-lg mb-3">
                  📨 Demand Letter
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    • Pre-litigation communication from an attorney or plaintiff
                  </li>
                  <li>• No court involvement yet</li>
                  <li>• Typically gives 10-30 days to respond</li>
                  <li>
                    • Usually requests a settlement amount and/or website
                    remediation
                  </li>
                  <li>• No formal legal deadline to respond</li>
                  <li>• You have more negotiating leverage at this stage</li>
                  <li>
                    • <strong>Urgency: Moderate</strong> — take it seriously but
                    you have time
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-3">
                  ⚖️ Federal Lawsuit (Complaint)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Filed in federal or state court — it's real</li>
                  <li>
                    • You have <strong>21 days</strong> to respond after being
                    served (60 days if out-of-state)
                  </li>
                  <li>
                    • Failure to respond = default judgment against you
                  </li>
                  <li>• Court records are public</li>
                  <li>
                    • Attorney's fees start accumulating for both sides
                  </li>
                  <li>
                    • Plaintiff has already invested in filing fees ($400+)
                  </li>
                  <li>
                    • <strong>Urgency: High</strong> — get an attorney
                    immediately
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>💡 Key insight:</strong> Many ADA cases start with a
                demand letter to gauge whether you'll settle quickly. If the
                demand letter is ignored, a federal lawsuit often follows. The
                demand letter stage is where you have the most leverage —
                document your good-faith efforts to fix issues and respond
                through an attorney.
              </p>
            </div>
          </section>

          {/* Section 3: First 72 Hours */}
          <section id="first-72-hours">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              3. The First 72 Hours: Your Emergency Checklist
            </h2>
            <p>
              The actions you take in the first 72 hours significantly impact
              your outcome. Here's your step-by-step emergency playbook:
            </p>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6 flex items-center gap-2">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  24h
                </span>
                First 24 Hours
              </h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>
                      Preserve a copy of the demand letter/complaint
                    </strong>{" "}
                    — photograph or scan it with the envelope and postmark.
                    Record the date you received it.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>
                      Document your website's current state
                    </strong>{" "}
                    — take screenshots of every page mentioned in the complaint.
                    Save the HTML source. Use the Wayback Machine to capture a
                    snapshot. This is your "before" evidence.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>Run a free accessibility scan</strong> — use{" "}
                    <Link
                      href="/check"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      RatedWithAI's free scanner
                    </Link>{" "}
                    or axe DevTools to understand your actual accessibility
                    issues. This gives you data to discuss with your attorney.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>
                      Contact an ADA defense attorney
                    </strong>{" "}
                    — not a general business lawyer. ADA litigation has specific
                    nuances. The{" "}
                    <a
                      href="https://www.nfib.com/news/legal-blog/responding-to-ada-lawsuits/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      National Federation of Independent Business (NFIB)
                    </a>{" "}
                    warns against attorneys who simply push clients to settle
                    without exploring options.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>Check your insurance</strong> — some general
                    liability and commercial property policies cover ADA
                    lawsuits, particularly for physical barrier claims. Website
                    accessibility claims are less commonly covered, but it's
                    worth checking.
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6 flex items-center gap-2">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  48h
                </span>
                24-48 Hours
              </h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>Research the plaintiff</strong> — search their name
                    in PACER (the federal court system) to see how many similar
                    lawsuits they've filed. A plaintiff who has filed dozens of
                    identical complaints is a "serial plaintiff" — this is
                    relevant to your defense strategy.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>Research the law firm</strong> — check if it's one
                    of the 16 firms responsible for 90% of ADA website filings.
                    Their track record (settlements vs. trial) tells you a lot
                    about their strategy.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>Begin fixing obvious issues</strong> — start
                    addressing the most critical accessibility violations: add
                    alt text to images, fix color contrast, ensure forms have
                    labels, make navigation keyboard-accessible.{" "}
                    <strong>Document every change with timestamps.</strong>
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>
                      Check if your state has a "right to cure" law
                    </strong>{" "}
                    — Utah (SB 68), Missouri (HB 1694), and potentially
                    California (SB 84) provide a cure period before a lawsuit
                    can proceed. See{" "}
                    <a
                      href="#state-cure-laws"
                      className="text-blue-600 hover:underline"
                    >
                      Section 8
                    </a>
                    .
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6 flex items-center gap-2">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  72h
                </span>
                48-72 Hours
              </h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>
                      Have your attorney prepare a response strategy
                    </strong>{" "}
                    — based on the type of claim, plaintiff history, your
                    state's laws, and the actual accessibility issues on your
                    site.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>
                      Create a remediation plan with timeline
                    </strong>{" "}
                    — even if you plan to settle, demonstrating good-faith
                    remediation efforts strengthens your negotiating position and
                    can reduce the settlement amount.
                  </div>
                </label>
                <label className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-xl mt-0.5">☐</span>
                  <div>
                    <strong>If you rent your space</strong> — contact your
                    landlord for physical barrier claims. The NFIB advises
                    tendering a demand for defense to the landlord — the longer
                    you wait, the less likely you can recover defense costs.
                  </div>
                </label>
              </div>
            </div>

            {/* Critical DON'Ts */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-4">
                🚫 Critical Mistakes to Avoid
              </h3>
              <div className="space-y-3 text-red-700 dark:text-red-300">
                <div className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span>
                    <strong>Don't ignore it.</strong> Ignoring a filed lawsuit
                    results in a default judgment. Ignoring a demand letter
                    escalates to a lawsuit.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span>
                    <strong>Don't contact the plaintiff directly.</strong> All
                    communication should go through your attorney. Anything you
                    say can be used against you.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span>
                    <strong>Don't admit fault</strong> in emails, social media,
                    or public statements.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span>
                    <strong>Don't delete your current website</strong> or make
                    undocumented changes. You need "before" evidence.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span>
                    <strong>Don't install an accessibility overlay</strong>{" "}
                    (accessiBe, UserWay, etc.) thinking it solves the problem.
                    The FTC fined accessiBe $1 million for deceptive claims.
                    Overlays are{" "}
                    <Link
                      href="/blog/accessibility-widgets"
                      className="underline hover:text-red-900"
                    >
                      not a defense
                    </Link>
                    .
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✗</span>
                  <span>
                    <strong>Don't assume settling ends it.</strong> Without
                    fixing the underlying issues, you'll be sued again — often
                    by a different plaintiff.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Understanding Claims */}
          <section id="understand-the-claims">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              4. Understanding What They're Actually Claiming
            </h2>
            <p>
              ADA website lawsuits typically allege that your website violates
              Title III of the Americans with Disabilities Act by failing to
              provide "full and equal enjoyment" to people with disabilities.
              Here are the most common violations cited:
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Most Commonly Cited Violations
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                    #1
                  </span>
                  <div>
                    <strong>Missing alternative text on images</strong> — screen
                    readers can't describe images without alt text. This is the
                    #1 cited violation in 96.3% of homepages (
                    <a
                      href="https://webaim.org/projects/million/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      WebAIM Million 2025
                    </a>
                    ).
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                    #2
                  </span>
                  <div>
                    <strong>Low color contrast</strong> — text that doesn't meet
                    the 4.5:1 contrast ratio is unreadable for people with low
                    vision. Found on 81.0% of homepages.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                    #3
                  </span>
                  <div>
                    <strong>Missing form labels</strong> — input fields without
                    labels leave screen reader users unable to fill out contact
                    forms, checkout, or search.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                    #4
                  </span>
                  <div>
                    <strong>Keyboard navigation barriers</strong> — if users
                    can't navigate your site using only a keyboard (Tab, Enter,
                    Arrow keys), it's inaccessible to motor-impaired users.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
                    #5
                  </span>
                  <div>
                    <strong>Empty or non-descriptive links</strong> — links that
                    say "click here" or "read more" without context are
                    meaningless when read aloud by a screen reader.
                  </div>
                </div>
              </div>
            </div>

            <p>
              The complaint will typically reference the{" "}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong>{" "}
              at Level AA — the de facto standard used in DOJ settlements and
              court rulings. While the{" "}
              <Link
                href="/blog/doj-wcag-not-ada-standard-2026"
                className="text-blue-600 hover:underline"
              >
                DOJ hasn't formally adopted WCAG as the ADA standard for Title
                III
              </Link>
              , every recent federal settlement agreement requires WCAG 2.1 AA
              conformance.
            </p>

            <p>
              <strong>Important:</strong> The complaint may not list all the
              issues on your website. As the NFIB warns, "Do not assume that
              agreeing to fix only the items identified in the demand letter or
              complaint is enough." Fix everything, not just what's cited.
            </p>
          </section>

          {/* Section 5: Settle vs. Fight */}
          <section id="settle-or-fight">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              5. Settle vs. Fight: The Decision Framework
            </h2>
            <p>
              This is the hardest decision you'll make. Here's a framework to
              help:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-4">
                ✅ Consider Settling When:
              </h3>
              <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                <li>
                  • Your website genuinely has significant accessibility
                  barriers
                </li>
                <li>
                  • The settlement amount is less than estimated defense costs
                  ($15,000-$75,000+)
                </li>
                <li>
                  • You can negotiate settlement terms that include time to
                  remediate
                </li>
                <li>
                  • The plaintiff's attorney has a strong track record of
                  winning or settling favorably
                </li>
                <li>
                  • You're in a jurisdiction (like California) with statutory
                  damages that increase exposure
                </li>
                <li>
                  • The settlement includes a mutual release and confidentiality
                  clause
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-purple-800 dark:text-purple-200 text-lg mb-4">
                ⚔️ Consider Fighting When:
              </h3>
              <ul className="space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                <li>
                  • The plaintiff is a known serial filer who has sued 50+
                  businesses with identical complaints
                </li>
                <li>
                  • There's evidence the plaintiff never actually attempted to
                  use your website's services (standing issues)
                </li>
                <li>
                  • The complaint contains factual errors or misidentifies your
                  business
                </li>
                <li>
                  • You have documented evidence of your accessibility efforts
                  before the lawsuit
                </li>
                <li>
                  • Your state has passed or is considering a "right to cure"
                  law
                </li>
                <li>
                  • A judge in your jurisdiction has shown skepticism toward
                  serial ADA plaintiffs (like{" "}
                  <Link
                    href="/blog/courts-fighting-back-serial-ada-website-plaintiffs"
                    className="underline hover:text-purple-900"
                  >
                    Judge Vargas ordering jurisdictional discovery
                  </Link>
                  )
                </li>
                <li>
                  • You've already remediated the issues and can demonstrate the
                  case is moot
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>⚠️ Critical point:</strong> Regardless of whether you
                settle or fight, <em>fix your website</em>. Settling without
                fixing invites repeat lawsuits. Fighting without fixing weakens
                your defense. The remediation is not optional — it's the
                foundation of any successful outcome.
              </p>
            </div>
          </section>

          {/* Section 6: Settlement Costs */}
          <section id="settlement-costs">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              6. Typical Settlement Costs in 2026
            </h2>
            <p>
              Understanding what other businesses have paid helps you negotiate
              effectively. Here's what settlements actually look like based on
              public records and the Cox Media investigation:
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Cost Breakdown by Scenario
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Demand Letter — Quick Settlement
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      $3,000-$10,000
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plaintiff's attorney costs included. Typical for first-time,
                    low-complexity claims.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Federal Lawsuit — Early Settlement
                    </span>
                    <span className="text-lg font-bold text-yellow-600">
                      $5,000-$25,000
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plus your own defense attorney fees ($3,000-$10,000).
                    Uppercrust bakery in Gainesville settled for ~$6,500 + fees.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      California (Unruh Act) — Per-Visit Damages
                    </span>
                    <span className="text-lg font-bold text-orange-600">
                      $4,000+ per occurrence
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    California's Unruh Civil Rights Act allows $4,000 minimum
                    statutory damages per visit, plus attorney's fees. Multiple
                    visits = multiplied damages.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Contested Litigation — Full Defense
                    </span>
                    <span className="text-lg font-bold text-red-600">
                      $15,000-$75,000+
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Defense attorney fees for motions, discovery, and potential
                    trial. Win or lose, this is what defense costs.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      DOJ Enforcement Action — Civil Penalties
                    </span>
                    <span className="text-lg font-bold text-red-700">
                      $75,000-$150,000+
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    $75,000 first violation, $150,000 subsequent (inflation
                    adjusted). Plus injunctive relief, monitoring, and ongoing
                    federal oversight.
                  </p>
                </div>
              </div>
            </div>

            <p>
              <strong>Real example:</strong> Sara Campbell, a fashion retailer
              featured in the Cox Media Group investigation, estimates spending
              over <strong>$200,000 total</strong> across multiple lawsuits. She
              hired ADA-specialized coders, engaged a school for the blind to
              test her site, and was still sued two more times after
              remediation. Her experience illustrates why{" "}
              <Link
                href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough"
                className="text-blue-600 hover:underline"
              >
                continuous monitoring is essential
              </Link>{" "}
              — one-time fixes don't prevent future claims.
            </p>
          </section>

          {/* Section 7: Defense Strategies */}
          <section id="defense-strategies">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              7. Defense Strategies That Actually Work
            </h2>
            <p>
              If you decide to fight — or if you want to strengthen your
              negotiating position — these defense strategies have proven
              effective in recent court decisions:
            </p>

            <div className="space-y-6 my-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  🔍 1. Challenge Standing (Article III)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  To sue in federal court, the plaintiff must demonstrate they
                  suffered a concrete, particularized injury — meaning they
                  actually tried to use your website and were prevented from
                  doing so. Serial plaintiffs who file dozens of identical
                  lawsuits often struggle to prove genuine intent to use each
                  business's services.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic">
                  Example: In the Cuddle Clones case (Feb 2026), the plaintiff's
                  complaint described their products as "pet toys" — the company
                  actually sells $249-$499 custom pet replicas. The mismatch
                  suggested a copy-paste complaint with no genuine interaction.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  🔄 2. Mootness Through Remediation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  If you fix the accessibility issues identified in the
                  complaint, you may be able to argue the case is moot — there's
                  no longer a live controversy for the court to decide. This is
                  most effective when combined with documented evidence of
                  ongoing monitoring to prevent recurrence.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic">
                  Key: Courts may still allow the case to proceed for attorney's
                  fees even if the underlying issues are fixed. But documented
                  remediation reduces the fees awarded.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  📊 3. Document Good Faith Efforts
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Courts look favorably on businesses that demonstrate genuine,
                  proactive efforts to improve accessibility. Document
                  everything: accessibility audits, remediation timelines,
                  developer invoices, training programs, ongoing monitoring
                  subscriptions, and testing with assistive technology users.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic">
                  According to Jeffer Mangels Butler & Mitchell LLP,
                  "Proactive compliance efforts, when properly documented and
                  structured, can significantly reduce exposure and improve
                  negotiating leverage."
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  🏛️ 4. Challenge Serial Plaintiff Credibility
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Courts are increasingly scrutinizing serial plaintiffs. If the
                  plaintiff has filed 50+ similar lawsuits, or if their
                  complaint contains copy-paste errors specific to other
                  businesses, this undermines their credibility. Request
                  jurisdictional discovery on the plaintiff's litigation history
                  and actual use of your services.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic">
                  Example: In Gainesville, FL, Satchel's Pizza filed a motion to
                  dismiss accusing the plaintiff of being a "serial litigator
                  who has brought a municipality of Federal lawsuits as an ADA
                  'tester.'" Their IT analysis showed the website "never
                  presented significant barriers to accessibility."
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  🌐 5. The "Online-Only" Nexus Question
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  While the trend is toward including all websites under ADA
                  Title III, some jurisdictions still require a "nexus" between
                  the website and a physical place of public accommodation. If
                  your business is purely online with no physical location, the
                  law is less settled — though{" "}
                  <Link
                    href="/blog/online-only-stores-ada-compliance-2026"
                    className="text-blue-600 hover:underline"
                  >
                    February 2026 Wisconsin federal court rulings
                  </Link>{" "}
                  confirmed online-only stores must comply.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Right to Cure */}
          <section id="state-cure-laws">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              8. State "Right to Cure" Laws That May Protect You
            </h2>
            <p>
              A growing number of states are passing laws that give businesses a
              chance to fix accessibility issues before a lawsuit can proceed.
              If you're in one of these states, this could significantly change
              your response strategy:
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏔️</span>
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 text-lg">
                    Utah — SB 68 (Enacted)
                  </h3>
                </div>
                <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li>
                    • <strong>30-day cure period</strong> after notice
                  </li>
                  <li>
                    • Businesses must make "substantial progress" toward
                    compliance
                  </li>
                  <li>• Applies to state-level ADA claims</li>
                  <li>
                    • Does <em>not</em> block federal lawsuits (federal
                    preemption)
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🌻</span>
                  <h3 className="font-bold text-purple-800 dark:text-purple-200 text-lg">
                    Missouri — HB 1694 (Enacted)
                  </h3>
                </div>
                <ul className="space-y-1 text-sm text-purple-700 dark:text-purple-300">
                  <li>
                    • <strong>60-day cure period</strong> after written notice
                  </li>
                  <li>
                    • Plaintiffs must provide specific details of the alleged
                    violation
                  </li>
                  <li>
                    • Allows businesses to counter-sue for frivolous claims
                  </li>
                  <li>
                    • Strongest small business protection of any state to date
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🐻</span>
                  <h3 className="font-bold text-amber-800 dark:text-amber-200 text-lg">
                    California — SB 84 (Pending 2026)
                  </h3>
                </div>
                <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                  <li>
                    • <strong>120-day cure period</strong> — the longest
                    proposed in any state
                  </li>
                  <li>
                    • Requires plaintiffs to provide notice with specific
                    technical violations
                  </li>
                  <li>
                    • Requires third-party verification of compliance efforts
                  </li>
                  <li>
                    • Would dramatically change the landscape in the{" "}
                    <Link
                      href="/blog/ada-lawsuit-state-migration-2026"
                      className="underline"
                    >
                      state with the most ADA filings
                    </Link>{" "}
                    (3,252 federal filings in H1 2025)
                  </li>
                  <li>
                    • Read our{" "}
                    <Link
                      href="/blog/california-sb-84-ada-right-to-cure-2026"
                      className="underline font-semibold"
                    >
                      detailed California SB 84 analysis
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏛️</span>
                  <h3 className="font-bold text-gray-700 dark:text-gray-200 text-lg">
                    Federal — ADA 30 Days Act (Proposed)
                  </h3>
                </div>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    • 30-day notice before filing suit, 120-day cure window
                  </li>
                  <li>• Has not gained enough bipartisan support to advance</li>
                  <li>
                    • Previous versions died in committee across multiple
                    sessions
                  </li>
                  <li>
                    • Track the latest in our{" "}
                    <Link
                      href="/blog/state-ada-reform-laws-tracker-2026"
                      className="underline"
                    >
                      State ADA Reform Tracker
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Key caveat:</strong> State "right to cure" laws generally
              apply to state-law claims only. Federal ADA lawsuits filed in
              federal court may not be subject to state cure periods, depending
              on the court's interpretation. However, demonstrating that you
              utilized your state's cure period shows good faith.
            </p>
          </section>

          {/* Section 9: Fix Your Website */}
          <section id="fix-your-website">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              9. How to Fix Your Website (Whether You Settle or Not)
            </h2>
            <p>
              Regardless of your legal strategy, fixing your website is
              non-negotiable. Here's a practical remediation roadmap prioritized
              by impact:
            </p>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Phase 1: Quick Wins (Week 1)
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Add descriptive alt text to all images (not just
                    "image.jpg")
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Fix color contrast — ensure 4.5:1 ratio for body text, 3:1
                    for large text
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Add labels to all form inputs and search fields</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Ensure all links have descriptive text (replace "click here"
                    with meaningful descriptions)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Add a proper heading structure (H1 → H2 → H3 hierarchy)
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                These 5 fixes address{" "}
                <Link
                  href="/blog/top-10-wcag-failures"
                  className="text-blue-600 hover:underline"
                >
                  over 95% of automatically detectable issues
                </Link>
                .
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Phase 2: Structural Fixes (Weeks 2-4)
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Make all interactive elements keyboard-accessible (menus,
                    dropdowns, modals, carousels)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Add skip navigation link at the top of every page
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Ensure focus indicators are visible</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Add ARIA labels and roles where HTML semantics are
                    insufficient
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Make checkout and payment flows fully accessible
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Ensure error messages are programmatically associated with
                    form fields
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Phase 3: Deep Compliance (Weeks 4-8)
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Test with screen readers (NVDA, JAWS, VoiceOver) — not just
                    automated tools
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Make PDFs and documents accessible (a common overlooked
                    area)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Add captions/transcripts for video and audio content
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Publish an accessibility statement with contact information
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Create a{" "}
                    <Link
                      href="/blog/vpat-accessibility-conformance-report-guide-2026"
                      className="text-blue-600 hover:underline"
                    >
                      VPAT/Accessibility Conformance Report
                    </Link>{" "}
                    documenting your compliance level
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>💡 Platform-specific guides:</strong> If you're on a
                specific platform, check our detailed guides for{" "}
                <Link
                  href="/blog/shopify-ada-compliance-guide-2026"
                  className="underline font-semibold"
                >
                  Shopify
                </Link>
                ,{" "}
                <Link
                  href="/blog/squarespace-ada-compliance-guide-2026"
                  className="underline font-semibold"
                >
                  Squarespace
                </Link>
                ,{" "}
                <Link
                  href="/blog/wix-ada-compliance-guide-2026"
                  className="underline font-semibold"
                >
                  Wix
                </Link>
                , and{" "}
                <Link
                  href="/blog/wordpress-accessibility-guide"
                  className="underline font-semibold"
                >
                  WordPress
                </Link>
                . Uppercrust bakery in Gainesville discovered its Squarespace
                template wasn't ADA-compliant despite assuming it would be.
              </p>
            </div>
          </section>

          {/* Section 10: Preventing Repeat Lawsuits */}
          <section id="prevent-repeat-lawsuits">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              10. Preventing Repeat Lawsuits
            </h2>
            <p>
              Fixing your website once isn't enough. Sara Campbell fixed her
              site, hired specialized ADA coders, and even had a school for the
              blind help — then was <strong>sued two more times</strong>. As the
              National Retail Federation calculates, the cost of 15,000+
              lawsuits at $15,000+ each adds up to{" "}
              <strong>hundreds of millions in aggregate costs</strong> passed on
              to consumers.
            </p>

            <p>
              The problem? Websites change constantly. Every new product page,
              blog post, plugin update, or third-party integration can introduce
              new accessibility barriers. That's why{" "}
              <Link
                href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough"
                className="text-blue-600 hover:underline"
              >
                one-time fixes are never enough
              </Link>
              .
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-4">
                🛡️ The Ongoing Protection Stack
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <div>
                    <strong>Continuous automated monitoring</strong> — scan your
                    site regularly for new accessibility issues. Tools like{" "}
                    <Link
                      href="/check"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      RatedWithAI
                    </Link>{" "}
                    can catch violations before plaintiff attorneys do.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <div>
                    <strong>Manual testing quarterly</strong> — automated tools
                    catch ~30-50% of issues. Quarterly manual testing with
                    screen readers catches the rest.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <div>
                    <strong>Developer training</strong> — ensure everyone who
                    touches your website understands basic accessibility
                    requirements.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <div>
                    <strong>Accessibility statement</strong> — publish one with
                    a point of contact. This demonstrates ongoing commitment and
                    gives disabled users a way to report issues directly to you
                    instead of to a lawyer.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    5
                  </span>
                  <div>
                    <strong>Document everything</strong> — keep records of
                    audits, fixes, and monitoring. This evidence is your best
                    defense if you're sued again.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                💰 The Math: Prevention vs. Litigation
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-green-700 dark:text-green-300">
                  <p className="font-semibold mb-2">Annual monitoring cost:</p>
                  <p className="text-2xl font-bold">$300-$1,200/year</p>
                  <p className="text-xs mt-1">
                    Depending on site size and scanning frequency
                  </p>
                </div>
                <div className="text-red-700 dark:text-red-300">
                  <p className="font-semibold mb-2">
                    Cost of one lawsuit + settlement:
                  </p>
                  <p className="text-2xl font-bold">$8,500-$75,000+</p>
                  <p className="text-xs mt-1">
                    Not including business disruption and reputational damage
                  </p>
                </div>
              </div>
              <p className="text-green-600 dark:text-green-400 text-sm mt-4 font-semibold">
                Monitoring costs 7-250x less than a single lawsuit.
              </p>
            </div>
          </section>

          {/* Section 11: Tax Credits */}
          <section id="tax-credits">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              11. Tax Credits That Offset Your Costs
            </h2>
            <p>
              Here's some good news: the IRS offers tax benefits that can offset
              a significant portion of your accessibility remediation costs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                  📋 IRS Form 8826 — Disabled Access Credit
                </h3>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>
                    • <strong>Up to $5,000/year</strong> tax credit
                  </li>
                  <li>
                    • 50% of eligible costs between $250-$10,250
                  </li>
                  <li>
                    • For businesses with ≤30 employees or ≤$1M revenue
                  </li>
                  <li>
                    • Covers accessibility audits, remediation, training, and
                    monitoring tools
                  </li>
                  <li>
                    • Can be claimed <strong>every year</strong>
                  </li>
                </ul>
                <Link
                  href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                  className="inline-block mt-3 text-sm text-green-800 dark:text-green-200 font-semibold hover:underline"
                >
                  Read our detailed Form 8826 guide →
                </Link>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 text-lg mb-3">
                  📋 Section 190 — Barrier Removal Deduction
                </h3>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>
                    • <strong>Up to $15,000/year</strong> deduction
                  </li>
                  <li>
                    • Available to <em>all</em> businesses (no size limit)
                  </li>
                  <li>
                    • Covers architectural and communication barrier removal
                  </li>
                  <li>
                    • Can be combined with the Form 8826 credit for different
                    expenses
                  </li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Example:</strong> A small business that spends $10,000 on
              accessibility remediation could claim a $5,000 tax credit (Form
              8826) — effectively reducing their net cost to $5,000. That's
              significantly less than a single lawsuit settlement.
            </p>
          </section>

          {/* Section 12: Case Studies */}
          <section id="real-case-studies">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              12. Real Case Studies: What Businesses Actually Experienced
            </h2>

            <div className="space-y-6 my-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🥐</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Uppercrust Bakery — Gainesville, FL
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Situation:</strong> Small bakery used a Squarespace
                    template — didn't know it wasn't ADA-compliant until
                    September 2025. Sued by serial plaintiff Makeda Evans (49+
                    businesses sued in 18 months).
                  </p>
                  <p>
                    <strong>Response:</strong> An employee starting a
                    cybersecurity master's program audited and fixed the site.
                    Settled for ~$6,500 plus attorney's fees.
                  </p>
                  <p>
                    <strong>Owner's quote:</strong> "Our best-selling product
                    category is croissants, and we serve them for around $5
                    each. That's a lot of croissants to cover an unexpected
                    cost."
                  </p>
                  <p>
                    <strong>Key lesson:</strong> Website builder templates
                    (Squarespace, Wix, WordPress themes) are often not
                    ADA-compliant by default. External services like Shopify
                    checkout or delivery platforms add another layer of
                    inaccessibility you can't control.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🍕</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Satchel's Pizza — Gainesville, FL
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Situation:</strong> 23-year-old beloved local pizza
                    shop, also sued by Evans. Same serial plaintiff, same
                    attorney (Aleksandra Kravets — 256 ADA lawsuits across
                    Florida).
                  </p>
                  <p>
                    <strong>Response:</strong> <em>Fighting back.</em> Filed
                    motion to dismiss (Feb 18, 2026), accusing plaintiff of
                    being a "serial litigator." Included IT expert analysis
                    showing the website "never presented significant barriers"
                    and that "minor bugs have been eliminated."
                  </p>
                  <p>
                    <strong>Key lesson:</strong> Fighting can work when you have
                    strong evidence, a documented serial plaintiff, and a
                    website that was already substantially accessible.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 not-prose">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">👗</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Sara Campbell — Fashion Retail (Cox Investigation)
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Situation:</strong> Multiple store locations +
                    e-commerce site. Caught in a "blitz of dozens of business
                    lawsuits by just one plaintiff."
                  </p>
                  <p>
                    <strong>Response:</strong> Hired ADA-specialized coders.
                    Hired a school for the blind to help fix the site. Spent
                    over $200,000 addressing accessibility.
                  </p>
                  <p>
                    <strong>Result:</strong> Still sued two more times after
                    remediation. "I don't understand to this day what happened
                    with the last lawsuits."
                  </p>
                  <p>
                    <strong>Key lesson:</strong> One-time fixes aren't enough.
                    Without continuous monitoring, new issues emerge with every
                    website update — and a new plaintiff can always find
                    something to sue over.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 13: FAQ */}
          <section id="faq">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              13. Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-6">
              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  What should I do first when I receive an ADA website demand
                  letter?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Don't panic, but don't ignore it either. Within 24 hours:
                    (1) Preserve a copy of the demand letter with the date
                    received, (2) Document your current website with screenshots
                    and saved HTML, (3) Run a free accessibility scan to
                    understand your actual issues, (4) Contact an ADA defense
                    attorney. Do NOT contact the plaintiff's attorney directly,
                    make undocumented changes to your website, or admit fault.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  How much does it typically cost to settle an ADA website
                  lawsuit?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Demand letter settlements: $3,000-$10,000. Federal lawsuit
                    early settlements: $5,000-$25,000 plus your own attorney
                    fees. California Unruh Act: $4,000+ per occurrence. Full
                    defense litigation: $15,000-$75,000+. DOJ enforcement:
                    $75,000-$150,000+ in civil penalties. Uppercrust bakery
                    settled for ~$6,500; Sara Campbell spent $200,000+ across
                    multiple lawsuits.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Should I settle or fight an ADA website lawsuit?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Consider settling if your website has genuine barriers and
                    the settlement is less than defense costs ($15K-$75K+).
                    Consider fighting if the plaintiff is a serial filer, the
                    complaint has factual errors, or you have strong evidence of
                    pre-existing accessibility efforts. Either way, fix your
                    website — settling without fixing invites repeat lawsuits.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Can I be sued again after settling?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Yes. Settlement doesn't immunize you. A different plaintiff
                    — or even the same one — can sue if new barriers exist. Sara
                    Campbell was sued two more times after extensive
                    remediation. Ongoing monitoring is the only reliable
                    prevention.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Is my website actually required to be ADA compliant?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Almost certainly yes, if you serve the public. Courts have
                    overwhelmingly ruled websites are "places of public
                    accommodation" under ADA Title III. In February 2026,
                    Wisconsin courts confirmed even online-only stores must
                    comply. WCAG 2.1 Level AA is the de facto standard.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Do accessibility overlays protect me from lawsuits?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    No. The FTC fined accessiBe $1 million for deceptive claims.
                    Multiple lawsuits have targeted sites with overlays
                    installed. Over 800 accessibility professionals signed the
                    Overlay Fact Sheet opposing these tools. Spend the money on
                    actual remediation instead.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  What is the typical timeline for an ADA website lawsuit?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Demand letter response: 10-30 days. Federal lawsuit
                    response: 21 days (60 if out-of-state). Settlement
                    negotiations: 30-90 days. Full litigation: 3-24 months. Most
                    cases settle within 3-6 months. States with cure laws may
                    add 30-120 days before a lawsuit can proceed.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Can I claim the cost of accessibility fixes on my taxes?
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Yes. Small businesses can claim up to $5,000/year via IRS
                    Form 8826 (Disabled Access Credit). All businesses can
                    deduct up to $15,000/year under Section 190 for barrier
                    removal. These can offset a significant portion of
                    remediation costs.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white not-prose">
              <h2 className="text-2xl font-bold mb-4">
                Don't Wait for the Next Demand Letter
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                If you've already been sued, fix your website now and set up
                monitoring to prevent repeat lawsuits. If you haven't been sued
                yet, a free scan takes 60 seconds and could save you thousands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/check"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  🔍 Free Accessibility Scan
                </Link>
                <Link
                  href="/blog/ada-website-lawsuit-protection"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500/50 transition-colors border border-white/20"
                >
                  📖 Prevention Guide (Before You're Sued)
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/ada-website-lawsuit-protection"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  How to Protect Your Business from ADA Lawsuits
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The prevention guide — 5-step protection plan to avoid getting
                  sued in the first place.
                </p>
              </Link>
              <Link
                href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Repeat ADA Lawsuits: Why One Settlement Isn't Enough
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ~46% of ADA defendants are sued again. Here's why and how to
                  break the cycle.
                </p>
              </Link>
              <Link
                href="/blog/ada-lawsuit-reform-2026"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  ADA Lawsuit Reform 2026: Three States Fighting Back
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Utah, Missouri, and California are changing the rules — cure
                  periods, counter-suits, and more.
                </p>
              </Link>
              <Link
                href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  IRS Form 8826: Up to $5,000 Tax Credit for Accessibility
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  How to claim tax credits that offset your remediation costs.
                </p>
              </Link>
              <Link
                href="/blog/courts-fighting-back-serial-ada-website-plaintiffs"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Courts Fighting Back Against Serial ADA Plaintiffs
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  How judges are scrutinizing copy-paste complaints and tester
                  plaintiffs.
                </p>
              </Link>
              <Link
                href="/blog/ftc-accessibe-fine-overlay-failures"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  FTC Fined accessiBe $1 Million
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Why accessibility overlays failed — and what to use instead.
                </p>
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-sm text-gray-500 dark:text-gray-400 not-prose">
            <p className="font-semibold mb-2">⚠️ Legal Disclaimer</p>
            <p>
              This article is for informational purposes only and does not
              constitute legal advice. ADA litigation involves complex
              jurisdiction-specific laws and fact patterns. Always consult with
              an attorney experienced in ADA defense for advice specific to your
              situation. RatedWithAI provides accessibility monitoring tools but
              is not a law firm. Settlement amounts, costs, and legal strategies
              referenced in this article are based on publicly available
              information and may not reflect your specific circumstances.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
