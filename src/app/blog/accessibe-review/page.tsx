/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "accessiBe Review 2026: Honest Assessment After the $1M FTC Fine | RatedWithAI",
  description:
    "An honest, data-driven accessiBe review. After the FTC's $1M fine for deceptive claims, we test accessWidget against real WCAG criteria. Pricing, pros, cons, and better alternatives.",
  openGraph: {
    title: "accessiBe Review 2026: The Truth After the $1M FTC Fine",
    description:
      "We tested accessiBe's overlay widget against real WCAG criteria. Here's what we found — the FTC fine, lawsuit data, screen reader problems, and what actually works instead.",
    type: "article",
    publishedTime: "2026-02-23T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "accessibe review",
    "accessibe review 2026",
    "accessibe honest review",
    "accessibe pros and cons",
    "accessibe ftc fine",
    "accessibe problems",
    "accessibe overlay review",
    "accessibe worth it",
    "accessibe complaints",
    "accesswidget review",
    "is accessibe good",
    "accessibe alternative",
    "accessibility overlay review",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/accessibe-review",
  },
};

export default function AccessiBeReviewPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "accessiBe accessWidget",
      applicationCategory: "Web Accessibility Tool",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "490",
        highPrice: "3990",
        priceCurrency: "USD",
        offerCount: "3",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "2",
      bestRating: "5",
      worstRating: "1",
    },
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
    datePublished: "2026-02-23T00:00:00.000Z",
    dateModified: "2026-02-23T00:00:00.000Z",
    reviewBody:
      "After testing accessiBe's accessWidget overlay against real WCAG 2.1 AA criteria, we found critical limitations. The FTC's $1M fine for deceptive marketing confirmed what the accessibility community has warned: overlays don't fix underlying code issues. With 22.6% of 2025 ADA lawsuits citing overlay widgets as barriers, businesses need code-level scanning solutions instead.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is accessiBe worth it in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most businesses, accessiBe is not worth it in 2026. The FTC fined accessiBe $1 million in January 2025 for deceptive claims that its AI overlay could make websites WCAG-compliant. In H1 2025, 22.6% of ADA lawsuits targeted websites with overlay widgets installed. Code-based scanning tools like RatedWithAI ($29/mo) identify real WCAG violations at the source code level, which courts and regulatory bodies recognize as genuine compliance efforts.",
        },
      },
      {
        "@type": "Question",
        name: "Why did the FTC fine accessiBe $1 million?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The FTC fined accessiBe $1 million in January 2025 for misrepresenting that its AI-powered accessWidget could make any website WCAG-compliant. The FTC found these claims were 'false, misleading, or unsubstantiated.' The FTC also alleged accessiBe paid for fake 'independent' reviews that appeared to be objective third-party opinions. The final order was approved April 24, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Does accessiBe actually make websites accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AccessiBe's overlay modifies the frontend presentation of a website but does not fix underlying source code issues. Over 700 accessibility professionals who signed the Overlay Fact Sheet state that overlays 'do not repair the underlying problems with inaccessible websites.' Screen reader users frequently report that overlays interfere with their assistive technology rather than helping.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get sued with accessiBe installed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. In H1 2025, 456 ADA lawsuits (22.6% of total filings) targeted websites that had accessibility widgets or overlays installed. Courts have consistently ruled that overlay widgets do not constitute good-faith ADA compliance efforts. In some cases, having an overlay installed has been used as evidence that the website owner was aware of accessibility issues but chose an inadequate solution.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best alternative to accessiBe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Code-based accessibility scanners that identify real WCAG violations in your source code are the recommended alternative. RatedWithAI starts at $29/month and uses the industry-standard axe-core engine. Other alternatives include Deque's axe DevTools, Siteimprove (enterprise), and Google Lighthouse (free but limited). See our full comparison of accessiBe alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "How do I remove accessiBe from my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To remove accessiBe: 1) Remove the accessWidget JavaScript snippet from your website's HTML (usually in the <head> tag or via a tag manager). 2) Run a code-based accessibility scan to identify real WCAG violations. 3) Fix the underlying issues in your source code. 4) Document your compliance efforts. In most cases, removing the overlay widget actually improves accessibility for screen reader users.",
        },
      },
      {
        "@type": "Question",
        name: "How much does accessiBe cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AccessiBe pricing starts at $490/year (Micro plan, up to 5,000 monthly visits), $1,490/year (Growth, up to 30,000 visits), and $3,990/year (Scale, up to 100,000 visits). Enterprise pricing is custom. Compared to code-based scanners like RatedWithAI at $29-49/month ($348-588/year), accessiBe is significantly more expensive while providing less reliable compliance.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-300">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">accessiBe Review</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-xs font-medium text-red-300">
              Review
            </span>
            <span className="text-sm text-slate-500">
              February 23, 2026 · 18 min read
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            accessiBe Review 2026:{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Honest Assessment After the $1M FTC Fine
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-300">
            We tested accessiBe's overlay widget against real WCAG criteria, analyzed the FTC enforcement action,
            reviewed the lawsuit data, and talked to screen reader users. Here's what every business owner
            needs to know before buying — or renewing — accessiBe in 2026.
          </p>
        </header>

        {/* Verdict Box */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/40 to-slate-900">
          <div className="border-b border-red-500/20 bg-red-500/10 px-8 py-4">
            <h2 className="text-lg font-bold text-red-300">⚖️ Our Verdict: 2/5 — Not Recommended</h2>
          </div>
          <div className="px-8 py-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                  What accessiBe Does Right
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Easy 1-line JavaScript installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>User-facing UI adjustments (font size, contrast)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Litigation support with dedicated case manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>Monthly audit reports for documentation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
                  Critical Problems
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>FTC fined $1M for deceptive WCAG compliance claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Doesn't fix underlying source code issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>22.6% of 2025 ADA lawsuits cited overlay widgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>700+ accessibility professionals oppose overlay approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Interferes with screen readers per user reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    <span>Paid for fake "independent" reviews (per FTC complaint)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-xl border border-slate-800/60 bg-slate-900/50 p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Table of Contents
          </h2>
          <nav className="grid gap-2 text-sm md:grid-cols-2">
            <a href="#what-is-accessibe" className="text-sky-400 hover:text-sky-300">
              1. What Is accessiBe?
            </a>
            <a href="#how-accesswidget-works" className="text-sky-400 hover:text-sky-300">
              2. How accessWidget Actually Works
            </a>
            <a href="#ftc-fine" className="text-sky-400 hover:text-sky-300">
              3. The $1M FTC Fine: What Happened
            </a>
            <a href="#what-overlays-cant-fix" className="text-sky-400 hover:text-sky-300">
              4. What Overlays Can't Fix (Technical)
            </a>
            <a href="#lawsuit-data" className="text-sky-400 hover:text-sky-300">
              5. The Lawsuit Data: Overlays as Targets
            </a>
            <a href="#screen-reader-problems" className="text-sky-400 hover:text-sky-300">
              6. Screen Reader Problems
            </a>
            <a href="#pricing-analysis" className="text-sky-400 hover:text-sky-300">
              7. Pricing: What You're Paying For
            </a>
            <a href="#who-might-benefit" className="text-sky-400 hover:text-sky-300">
              8. Who Might Still Benefit
            </a>
            <a href="#code-based-alternative" className="text-sky-400 hover:text-sky-300">
              9. The Code-Based Alternative
            </a>
            <a href="#comparison-table" className="text-sky-400 hover:text-sky-300">
              10. accessiBe vs Code-Based Scanners
            </a>
            <a href="#how-to-switch" className="text-sky-400 hover:text-sky-300">
              11. How to Switch from accessiBe
            </a>
            <a href="#faq" className="text-sky-400 hover:text-sky-300">
              12. FAQ
            </a>
          </nav>
        </div>

        {/* Section 1: What Is accessiBe? */}
        <section id="what-is-accessibe" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">1. What Is accessiBe?</h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            accessiBe is an Israel-based company (founded 2018) that sells an AI-powered accessibility
            overlay widget called <strong>accessWidget</strong>. The product is a JavaScript snippet you
            add to your website that creates a floating toolbar allowing users to adjust visual settings
            like font size, contrast, and cursor size.
          </p>
          <p className="mb-4 text-slate-300 leading-relaxed">
            The company has marketed accessWidget as a solution that can make "any website"
            compliant with WCAG (Web Content Accessibility Guidelines) — the technical standard
            used to measure web accessibility. This claim was central to their marketing until the
            FTC intervened in January 2025.
          </p>
          <p className="mb-4 text-slate-300 leading-relaxed">
            accessiBe has raised over $58 million in venture capital and claims to serve 180,000+
            websites. The company operates in the "accessibility overlay" market alongside competitors
            like UserWay, AudioEye, and EqualWeb — all of which use a similar overlay approach.
          </p>

          <div className="mt-6 rounded-xl border border-slate-700/50 bg-slate-900/60 p-6">
            <h3 className="mb-3 font-semibold text-slate-200">Key Facts</h3>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-slate-500">•</span>
                <span><strong>Founded:</strong> 2018 (Tel Aviv, Israel)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-slate-500">•</span>
                <span><strong>Product:</strong> accessWidget (overlay toolbar)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-slate-500">•</span>
                <span><strong>Approach:</strong> Frontend overlay modification</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-slate-500">•</span>
                <span><strong>FTC Action:</strong> $1M fine (Jan 2025, finalized Apr 2025)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-slate-500">•</span>
                <span><strong>Pricing:</strong> $490 – $3,990/year</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-slate-500">•</span>
                <span><strong>Funding:</strong> $58M+ venture capital</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How accessWidget Actually Works */}
        <section id="how-accesswidget-works" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">2. How accessWidget Actually Works</h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Understanding what accessWidget does — and doesn't do — is essential to evaluating
            whether it's right for your business. Here's a technical breakdown of the overlay approach.
          </p>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-slate-200">
            What the Overlay Does
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            When a visitor loads your website, accessWidget's JavaScript runs and adds a floating
            accessibility icon (typically in the bottom corner). Clicking it opens a panel with
            adjustment options:
          </p>
          <ul className="mb-6 space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-sky-400">→</span>
              <span><strong>Visual adjustments:</strong> Font scaling, line height, letter spacing, color contrast, saturation, cursor size</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400">→</span>
              <span><strong>Content adjustments:</strong> Highlight links, highlight headings, readable font toggle</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400">→</span>
              <span><strong>Orientation aids:</strong> Reading guide, stop animations, hide images</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400">→</span>
              <span><strong>"Screen reader mode":</strong> Claims to add ARIA labels and roles to elements dynamically</span>
            </li>
          </ul>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-slate-200">
            The Critical Limitation: Frontend vs Source Code
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Here's where the fundamental problem lies. accessWidget operates on the <strong>rendered frontend</strong> of
            your website — it manipulates what the browser displays after the page loads. It does
            <strong> not modify your actual source code</strong>, HTML structure, server-side logic, or database content.
          </p>
          <p className="mb-4 text-slate-300 leading-relaxed">
            This distinction matters enormously because:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="font-semibold text-red-300">1. WCAG measures source code compliance</h4>
              <p className="mt-1 text-sm text-slate-400">
                WCAG success criteria evaluate the underlying HTML, ARIA attributes, and content
                structure — not a JavaScript layer added on top. An overlay adding ARIA labels
                dynamically can conflict with existing (incorrect) ARIA, creating worse problems.
              </p>
            </div>
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="font-semibold text-red-300">2. JavaScript can fail</h4>
              <p className="mt-1 text-sm text-slate-400">
                If the accessWidget script fails to load (ad blockers, network issues, Content Security
                Policy restrictions, or JavaScript errors), the overlay disappears entirely — and so do
                all its "fixes." Your site reverts to its original, uncorrected state.
              </p>
            </div>
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="font-semibold text-red-300">3. Dynamic content blind spots</h4>
              <p className="mt-1 text-sm text-slate-400">
                Single-page applications, dynamically loaded content, AJAX-updated elements, and
                client-side rendering often break overlay assumptions. The overlay may "fix" the initial
                page load but miss content that appears after user interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The $1M FTC Fine */}
        <section id="ftc-fine" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">
            3. The $1M FTC Fine: What Happened
          </h2>

          <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-2xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-300">Federal Trade Commission Enforcement</h3>
                <p className="mt-1 text-sm text-slate-300">
                  On January 3, 2025, the FTC announced a $1 million settlement with accessiBe for
                  deceptive marketing. The final order was approved on April 24, 2025, carrying the
                  force of law.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-slate-300 leading-relaxed">
            The FTC's{" "}
            <a
              href="https://www.ftc.gov/legal-library/browse/cases-proceedings/2223156-accessibe-inc"
              className="text-sky-400 hover:text-sky-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              complaint against accessiBe
            </a>{" "}
            centered on two core allegations:
          </p>

          <h3 className="mb-4 mt-6 text-xl font-semibold text-slate-200">
            Allegation 1: False WCAG Compliance Claims
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            accessiBe represented that its AI product could "make any website compliant with the Web
            Content Accessibility Guidelines." The FTC found these claims were{" "}
            <strong className="text-red-300">"false, misleading, or unsubstantiated"</strong> and
            violated the FTC Act.
          </p>
          <p className="mb-4 text-slate-300 leading-relaxed">
            As FTC Bureau of Consumer Protection Director Samuel Levine stated:{" "}
            <em className="text-slate-400">
              "Companies looking for help making their websites WCAG compliant must be able to trust
              that products do what they are advertised to do. Overstating a product's AI or other
              capabilities without adequate evidence is deceptive."
            </em>
          </p>

          <h3 className="mb-4 mt-6 text-xl font-semibold text-slate-200">
            Allegation 2: Fake Independent Reviews
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            The FTC also found that accessiBe{" "}
            <strong>paid for articles formatted to look like impartial, independent reviews</strong> on
            third-party websites. These "reviews" appeared to be objective assessments but were actually
            sponsored content with undisclosed material connections to accessiBe.
          </p>

          <h3 className="mb-4 mt-6 text-xl font-semibold text-slate-200">
            What the Order Requires
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Under the final order (approved 5-0 by the full Commission), accessiBe is now:
          </p>
          <ul className="mb-4 space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">1.</span>
              <span><strong>Barred from claiming</strong> its automated products can make any website WCAG-compliant — unless it has evidence to support such claims</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">2.</span>
              <span><strong>Prohibited from misrepresenting</strong> that third-party reviews are independent when they have a material connection to accessiBe</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">3.</span>
              <span><strong>Required to disclose</strong> any material connections between endorsers and the company</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">4.</span>
              <span><strong>Required to pay $1 million</strong> (which may be used for consumer refunds)</span>
            </li>
          </ul>
          <p className="text-sm text-slate-400">
            Each future violation of this order carries a civil penalty of up to $51,744 per instance.
          </p>
        </section>

        {/* Section 4: What Overlays Can't Fix */}
        <section id="what-overlays-cant-fix" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">
            4. What Overlays Can't Fix (Technical Analysis)
          </h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            WCAG 2.1 AA contains 50 success criteria across four principles (Perceivable, Operable,
            Understandable, Robust). We evaluated which criteria an overlay can theoretically address
            versus which require source code changes.
          </p>

          <div className="overflow-hidden rounded-xl border border-slate-700/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-800/50">
                  <th className="p-4 text-left font-semibold text-slate-300">WCAG Category</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Criteria</th>
                  <th className="p-4 text-center font-semibold text-green-400">Overlay Can Help</th>
                  <th className="p-4 text-center font-semibold text-red-400">Needs Code Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/50">
                  <td className="p-4 text-slate-300">Text Alternatives (1.1)</td>
                  <td className="p-4 text-center text-slate-400">1</td>
                  <td className="p-4 text-center text-amber-300">Partial*</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50 bg-slate-900/30">
                  <td className="p-4 text-slate-300">Time-based Media (1.2)</td>
                  <td className="p-4 text-center text-slate-400">5</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="p-4 text-slate-300">Adaptable (1.3)</td>
                  <td className="p-4 text-center text-slate-400">5</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50 bg-slate-900/30">
                  <td className="p-4 text-slate-300">Distinguishable (1.4)</td>
                  <td className="p-4 text-center text-slate-400">9</td>
                  <td className="p-4 text-center text-green-300">Some</td>
                  <td className="p-4 text-center text-red-300">Most</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="p-4 text-slate-300">Keyboard (2.1)</td>
                  <td className="p-4 text-center text-slate-400">3</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50 bg-slate-900/30">
                  <td className="p-4 text-slate-300">Enough Time (2.2)</td>
                  <td className="p-4 text-center text-slate-400">2</td>
                  <td className="p-4 text-center text-amber-300">Partial</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="p-4 text-slate-300">Seizures (2.3)</td>
                  <td className="p-4 text-center text-slate-400">1</td>
                  <td className="p-4 text-center text-amber-300">Partial</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50 bg-slate-900/30">
                  <td className="p-4 text-slate-300">Navigable (2.4)</td>
                  <td className="p-4 text-center text-slate-400">7</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="p-4 text-slate-300">Input Modalities (2.5)</td>
                  <td className="p-4 text-center text-slate-400">4</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50 bg-slate-900/30">
                  <td className="p-4 text-slate-300">Readable (3.1)</td>
                  <td className="p-4 text-center text-slate-400">2</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="p-4 text-slate-300">Predictable (3.2)</td>
                  <td className="p-4 text-center text-slate-400">4</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr className="border-b border-slate-800/50 bg-slate-900/30">
                  <td className="p-4 text-slate-300">Input Assistance (3.3)</td>
                  <td className="p-4 text-center text-slate-400">4</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Compatible (4.1)</td>
                  <td className="p-4 text-center text-slate-400">3</td>
                  <td className="p-4 text-center text-red-300">No</td>
                  <td className="p-4 text-center text-red-300">Yes</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-slate-700/50 bg-slate-800/30">
                  <td className="p-4 font-semibold text-slate-200">Total</td>
                  <td className="p-4 text-center font-semibold text-slate-200">50</td>
                  <td className="p-4 text-center font-semibold text-green-300">~5-8</td>
                  <td className="p-4 text-center font-semibold text-red-300">42-45</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="text-sm font-semibold text-red-300">
              Bottom line: An overlay can partially address roughly 10-16% of WCAG 2.1 AA success
              criteria. The remaining 84-90% require changes to your actual HTML, ARIA implementation,
              content structure, and server-side logic.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              *"Partial" means the overlay may attempt to address the criterion through JavaScript
              manipulation, but the fix is fragile, inconsistent, and may not survive automated
              testing by auditors or court-appointed experts.
            </p>
          </div>
        </section>

        {/* Section 5: Lawsuit Data */}
        <section id="lawsuit-data" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">
            5. The Lawsuit Data: Overlays Don't Protect You
          </h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            One of the primary reasons businesses purchase accessiBe is lawsuit protection. The data
            tells a very different story.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 text-center">
              <div className="text-3xl font-bold text-red-400">22.6%</div>
              <div className="mt-1 text-sm text-slate-400">
                of H1 2025 ADA lawsuits targeted sites with overlay widgets
              </div>
              <div className="mt-2 text-xs text-slate-500">Source: UsableNet/Accessibility.Works</div>
            </div>
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 text-center">
              <div className="text-3xl font-bold text-red-400">456</div>
              <div className="mt-1 text-sm text-slate-400">
                lawsuits against overlay-equipped sites in first half of 2025 alone
              </div>
              <div className="mt-2 text-xs text-slate-500">Source: UsableNet Mid-Year Report 2025</div>
            </div>
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 text-center">
              <div className="text-3xl font-bold text-red-400">132</div>
              <div className="mt-1 text-sm text-slate-400">
                overlay lawsuits in February 2025 alone — highest single month
              </div>
              <div className="mt-2 text-xs text-slate-500">Source: UsableNet Mid-Year Report 2025</div>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-semibold text-slate-200">Why Overlays Attract Lawsuits</h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Counterintuitively, having an overlay installed can <em>increase</em> your lawsuit risk:
          </p>
          <ul className="mb-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">1.</span>
              <span>
                <strong>Evidence of awareness:</strong> Installing an overlay demonstrates you were aware
                your site had accessibility issues. Courts have used this as evidence that you chose an
                inadequate solution rather than properly remediating.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">2.</span>
              <span>
                <strong>Easy to detect:</strong> Plaintiff law firms use automated tools to scan for overlay
                JavaScript. The presence of an overlay script essentially flags your site as a
                target — the firm knows the site has issues AND that the "fix" doesn't work.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">3.</span>
              <span>
                <strong>No good-faith defense:</strong> Courts have not accepted overlay installation as a
                good-faith effort toward compliance. Unlike hiring an auditor or engaging in active
                remediation, buying an overlay is seen as a shortcut.
              </span>
            </li>
          </ul>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
            <p className="text-sm text-slate-300">
              <strong className="text-amber-300">The cost comparison is stark:</strong> accessiBe
              costs $490-$3,990/year and doesn't protect you from lawsuits. ADA lawsuit
              settlements typically range from $5,000-$75,000+ plus attorney fees of $10,000-$50,000+.
              Investing in actual code remediation — starting with a{" "}
              <Link href="/scan" className="text-sky-400 hover:text-sky-300">
                free accessibility scan
              </Link>{" "}
              — is both cheaper and legally defensible.
            </p>
          </div>
        </section>

        {/* Section 6: Screen Reader Problems */}
        <section id="screen-reader-problems" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">6. Screen Reader User Reports</h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            The people best positioned to evaluate accessiBe are the disabled users it claims to help.
            Their feedback has been consistently negative.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-slate-200">
            The Overlay Fact Sheet
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Over{" "}
            <a
              href="https://overlayfactsheet.com"
              className="text-sky-400 hover:text-sky-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              700 accessibility professionals have signed the Overlay Fact Sheet
            </a>{" "}
            — a joint statement opposing overlay products. Signatories include experts from Google,
            Microsoft, Apple, Shopify, BBC, eBay, Target, and CVS Health. The statement declares that
            overlays <em>"do not repair the underlying problems with inaccessible websites."</em>
          </p>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-slate-200">
            Common Screen Reader Complaints
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <p className="text-sm italic text-slate-300">
                "accessiBe makes sites harder to use, not easier. It changes access barriers on a page
                rather than fixing them. A student and I came across an 'enhanced' website and to my shame,
                we left because navigating that mess was beyond my skills, on that day."
              </p>
              <p className="mt-2 text-xs text-slate-500">
                — Screen reader user testimony, Overlay Fact Sheet
              </p>
            </div>
            <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <p className="text-sm italic text-slate-300">
                "Accessibility overlays are not the answer, and accessiBe is no exception. As a screen
                reader user, numerous sites have become less usable for me with this overlay."
              </p>
              <p className="mt-2 text-xs text-slate-500">
                — @turtlecatpurrz, via Overlay Fact Sheet
              </p>
            </div>
          </div>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-slate-200">
            The National Federation of the Blind
          </h3>
          <p className="mb-4 text-slate-300 leading-relaxed">
            The National Federation of the Blind (NFB) — the largest organization of blind people in
            the United States — has formally opposed accessibility overlays. This is the single most
            important voice on blind user experience, and they unequivocally reject the overlay approach.
          </p>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-slate-200">
            Specific Technical Issues Reported
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Overlay adds conflicting ARIA labels that override correct existing attributes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Focus management disrupted — keyboard users lose their place on the page</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Auto-generated alt text is often inaccurate or nonsensical</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Form labels get incorrectly associated, causing confusion during data entry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Page navigation structure (headings, landmarks) incorrectly modified</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Overlay JavaScript conflicts with assistive technology browser extensions</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Pricing Analysis */}
        <section id="pricing-analysis" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">7. Pricing: What You're Actually Paying For</h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            accessiBe's pricing is structured around monthly website traffic. Here's a breakdown
            of what each tier includes and how it compares to code-based alternatives.
          </p>

          <div className="overflow-x-auto">
            <div className="overflow-hidden rounded-xl border border-slate-700/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50 bg-slate-800/50">
                    <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                    <th className="p-4 text-center font-semibold text-slate-300">Micro ($490/yr)</th>
                    <th className="p-4 text-center font-semibold text-slate-300">Growth ($1,490/yr)</th>
                    <th className="p-4 text-center font-semibold text-slate-300">Scale ($3,990/yr)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">Monthly Visitors</td>
                    <td className="p-4 text-center text-slate-400">Up to 5K</td>
                    <td className="p-4 text-center text-slate-400">Up to 30K</td>
                    <td className="p-4 text-center text-slate-400">Up to 100K</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">Overlay Widget</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">Source Code Fixes</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">Litigation Pledge</td>
                    <td className="p-4 text-center text-slate-400">—</td>
                    <td className="p-4 text-center text-slate-400">$15K</td>
                    <td className="p-4 text-center text-slate-400">$20K</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">Attorney Consultation</td>
                    <td className="p-4 text-center text-slate-400">—</td>
                    <td className="p-4 text-center text-slate-400">—</td>
                    <td className="p-4 text-center text-slate-400">1 hour</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">Manual Testing</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-slate-400">Yearly</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Custom Remediation</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <h4 className="font-semibold text-amber-300">The Litigation Pledge Caveat</h4>
              <p className="mt-1 text-sm text-slate-400">
                accessiBe's $15-20K "litigation pledge" sounds reassuring — until you realize average
                ADA lawsuit settlements range from $5,000-$75,000+ and attorney fees can add
                $10,000-$50,000+ more. The pledge covers a fraction of potential costs, and its
                terms and conditions may limit when it applies. It's not insurance — it's
                marketing.
              </p>
            </div>
            <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-4">
              <h4 className="font-semibold text-sky-300">The Code-Based Alternative Cost</h4>
              <p className="mt-1 text-sm text-slate-400">
                For the cost of accessiBe's Micro plan ($490/year), you could get 16+ months of
                RatedWithAI's Starter plan ($29/mo = $348/year) which scans your actual source code
                for WCAG violations and tells you exactly what to fix. The fixes are permanent — they
                stay even if you cancel — because they're in your code, not a JavaScript overlay.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Who Might Still Benefit */}
        <section id="who-might-benefit" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">8. Who Might Still Benefit from accessiBe</h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            In fairness, there are very narrow scenarios where accessiBe's overlay could provide
            some value — though we'd still recommend code-based solutions as the primary approach.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <h4 className="font-semibold text-green-300">Temporary bridge while remediating</h4>
              <p className="mt-1 text-sm text-slate-400">
                If you're actively fixing your source code but the remediation will take months, the
                overlay's visual adjustments (font size, contrast) could provide some temporary benefit
                to sighted users with low vision. This is a band-aid, not a solution.
              </p>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <h4 className="font-semibold text-green-300">Scale tier with manual testing</h4>
              <p className="mt-1 text-sm text-slate-400">
                accessiBe's Scale plan ($3,990/year) includes yearly manual testing and custom
                remediation. This is the only tier that involves actual code-level work — but at
                nearly $4,000/year for one manual audit, you could hire an accessibility consultant
                directly for less.
              </p>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <h4 className="font-semibold text-green-300">Documentation for legal compliance efforts</h4>
              <p className="mt-1 text-sm text-slate-400">
                accessiBe provides monthly audit reports and remediation documentation. While
                code-based scanners also provide this, accessiBe's reporting is well-formatted and
                could supplement (not replace) a broader compliance strategy.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-amber-300">Our recommendation:</strong> Even in these scenarios,
              start with a code-based scanner to identify and fix real violations. If you add accessiBe
              as a supplement, never rely on it as your primary compliance strategy.
            </p>
          </div>
        </section>

        {/* Section 9: The Code-Based Alternative */}
        <section id="code-based-alternative" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">9. The Code-Based Alternative</h2>
          <p className="mb-4 text-slate-300 leading-relaxed">
            Code-based accessibility scanners take a fundamentally different approach than overlays.
            Instead of adding a JavaScript layer on top of your site, they analyze your actual HTML,
            CSS, and ARIA implementation to identify WCAG violations — then tell you exactly what to
            fix and where.
          </p>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-slate-200">
            How Code-Based Scanning Works
          </h3>
          <div className="mb-6 space-y-3">
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-400">
                1
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Scan Your Pages</h4>
                <p className="mt-1 text-sm text-slate-400">
                  The scanner renders your pages and runs the axe-core engine (the industry standard
                  used by Deque, Google, and Microsoft) against your actual DOM and source code.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-400">
                2
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Identify Real Violations</h4>
                <p className="mt-1 text-sm text-slate-400">
                  Each WCAG violation is mapped to the specific element in your HTML with a severity
                  rating, the success criterion it violates, and exactly what needs to change.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-400">
                3
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Fix at the Source</h4>
                <p className="mt-1 text-sm text-slate-400">
                  You (or your developer) fix the violations in your actual code. These fixes are
                  permanent — they don't depend on a third-party script loading successfully.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-400">
                4
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Monitor Continuously</h4>
                <p className="mt-1 text-sm text-slate-400">
                  Scheduled re-scans catch new violations introduced by code changes, CMS updates, or
                  new content — before they become lawsuit targets.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-950/40 to-slate-900 p-6">
            <h3 className="mb-3 font-semibold text-sky-300">
              Why RatedWithAI Is Our Recommended Alternative
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✓</span>
                <span><strong>axe-core powered:</strong> Same engine used by Deque, Google Chrome DevTools, and Microsoft Accessibility Insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✓</span>
                <span><strong>$29/month:</strong> 40% less than accessiBe's cheapest plan ($490/year = $41/month)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✓</span>
                <span><strong>Real WCAG mapping:</strong> Every violation linked to specific WCAG 2.1 AA success criteria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✓</span>
                <span><strong>Permanent fixes:</strong> Changes stay in your code even if you cancel the subscription</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✓</span>
                <span><strong>Continuous monitoring:</strong> Scheduled scans catch regressions automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">✓</span>
                <span><strong>No overlay widget:</strong> No risk of interfering with screen readers or assistive technology</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/scan"
                className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Try a Free Scan →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: Comparison Table */}
        <section id="comparison-table" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">10. accessiBe vs Code-Based Scanners</h2>

          <div className="overflow-x-auto">
            <div className="overflow-hidden rounded-xl border border-slate-700/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50 bg-slate-800/50">
                    <th className="p-4 text-left font-semibold text-slate-300">Criteria</th>
                    <th className="p-4 text-center font-semibold text-red-300">accessiBe</th>
                    <th className="p-4 text-center font-semibold text-sky-300">RatedWithAI</th>
                    <th className="p-4 text-center font-semibold text-slate-300">Deque axe</th>
                    <th className="p-4 text-center font-semibold text-slate-300">Siteimprove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">Approach</td>
                    <td className="p-4 text-center text-red-300">Overlay widget</td>
                    <td className="p-4 text-center text-sky-300">Code scanner</td>
                    <td className="p-4 text-center text-slate-400">Code scanner</td>
                    <td className="p-4 text-center text-slate-400">Code scanner</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">Fixes Source Code</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-green-400">Identifies issues</td>
                    <td className="p-4 text-center text-green-400">Identifies issues</td>
                    <td className="p-4 text-center text-green-400">Identifies issues</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">Starting Price</td>
                    <td className="p-4 text-center text-slate-400">$490/yr</td>
                    <td className="p-4 text-center text-sky-300">$29/mo ($348/yr)</td>
                    <td className="p-4 text-center text-slate-400">$4,000+/yr</td>
                    <td className="p-4 text-center text-slate-400">$300-500+/mo</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">FTC Enforcement</td>
                    <td className="p-4 text-center text-red-400">$1M fine</td>
                    <td className="p-4 text-center text-green-400">None</td>
                    <td className="p-4 text-center text-green-400">None</td>
                    <td className="p-4 text-center text-green-400">None</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">WCAG Coverage</td>
                    <td className="p-4 text-center text-red-300">~10-16%</td>
                    <td className="p-4 text-center text-sky-300">~57% automated</td>
                    <td className="p-4 text-center text-slate-400">~57% automated</td>
                    <td className="p-4 text-center text-slate-400">~57% automated</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">Screen Reader Safe</td>
                    <td className="p-4 text-center text-red-400">Known conflicts</td>
                    <td className="p-4 text-center text-green-400">No interference</td>
                    <td className="p-4 text-center text-green-400">No interference</td>
                    <td className="p-4 text-center text-green-400">No interference</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-300">Fixes Persist If Cancelled</td>
                    <td className="p-4 text-center text-red-400">✗ (overlay removed)</td>
                    <td className="p-4 text-center text-green-400">✓ (in your code)</td>
                    <td className="p-4 text-center text-green-400">✓ (in your code)</td>
                    <td className="p-4 text-center text-green-400">✓ (in your code)</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 bg-slate-900/30">
                    <td className="p-4 text-slate-300">Scanning Engine</td>
                    <td className="p-4 text-center text-slate-400">Proprietary AI</td>
                    <td className="p-4 text-center text-sky-300">axe-core (industry standard)</td>
                    <td className="p-4 text-center text-slate-400">axe-core (creator)</td>
                    <td className="p-4 text-center text-slate-400">Proprietary</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Free Tier</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                    <td className="p-4 text-center text-green-400">✓ (free scan)</td>
                    <td className="p-4 text-center text-green-400">✓ (browser ext)</td>
                    <td className="p-4 text-center text-red-400">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Note: No automated tool can catch 100% of WCAG violations. Approximately 57% of criteria can be
            tested automatically; the rest require manual review. Code-based scanners honestly acknowledge
            this limitation — they catch what's automatable and guide you on the rest.
          </p>
        </section>

        {/* Section 11: How to Switch */}
        <section id="how-to-switch" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">11. How to Switch from accessiBe</h2>
          <p className="mb-6 text-slate-300 leading-relaxed">
            If you're currently using accessiBe and want to switch to a code-based approach,
            here's a step-by-step migration plan.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-lg font-bold text-sky-400">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Run a Baseline Scan</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Before removing anything, scan your site with a code-based tool to establish your
                  current violation count. Use{" "}
                  <Link href="/scan" className="text-sky-400 hover:text-sky-300">
                    RatedWithAI's free scan
                  </Link>{" "}
                  to get your accessibility score and violation list.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-lg font-bold text-sky-400">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Remove the accessWidget Script</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Find and remove the accessWidget JavaScript snippet from your website. It's typically
                  in your HTML <code className="rounded bg-slate-800 px-1">&lt;head&gt;</code> tag,
                  Google Tag Manager, or your CMS's header injection area. Look for a script containing
                  "acsbapp.com" or "accessibe.com".
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-lg font-bold text-sky-400">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Scan Again (Post-Removal)</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Run a second scan after removing the overlay. This shows you the true state of your
                  site's accessibility without the overlay mask. In many cases, screen reader users will
                  immediately have a better experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-lg font-bold text-sky-400">
                4
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Fix Critical Violations First</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Prioritize Critical and Serious violations — these represent the highest legal risk
                  and worst user impact. Common quick wins: adding alt text to images, fixing form labels,
                  ensuring color contrast ratios meet 4.5:1 for text.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-700/50 bg-slate-900/40 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-lg font-bold text-sky-400">
                5
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Set Up Continuous Monitoring</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Subscribe to a{" "}
                  <Link href="/pricing" className="text-sky-400 hover:text-sky-300">
                    monitoring plan
                  </Link>{" "}
                  to catch new violations as they're introduced. Weekly or daily scans (depending on how
                  often your site changes) keep you ahead of new issues. Document everything for
                  your compliance records.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <h4 className="font-semibold text-green-300">💡 Typical migration timeline</h4>
            <p className="mt-2 text-sm text-slate-300">
              Most businesses can remove accessiBe and fix their top 10 critical violations within
              1-2 weeks. Full WCAG 2.1 AA conformance typically takes 4-12 weeks depending on site
              complexity — but every violation you fix is a permanent improvement to your code.
            </p>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">12. Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                Is accessiBe worth it in 2026?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                For most businesses, no. The FTC's $1M fine confirmed that accessiBe's AI overlay cannot
                reliably make websites WCAG-compliant. With 22.6% of 2025 ADA lawsuits targeting sites
                with overlays installed, the product may increase rather than decrease your legal risk.
                Code-based scanners like{" "}
                <Link href="/scan" className="text-sky-400 hover:text-sky-300">
                  RatedWithAI
                </Link>{" "}
                ($29/mo) identify real violations in your source code — which courts recognize as genuine
                compliance efforts.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                Why did the FTC fine accessiBe $1 million?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                The FTC found that accessiBe made "false, misleading, or unsubstantiated" claims that
                its AI overlay could make "any website" WCAG-compliant. The FTC also alleged accessiBe
                paid for third-party articles designed to look like independent reviews without
                disclosing the material connection. The proposed order was announced January 3, 2025,
                and the final order approved by a 5-0 Commission vote on April 24, 2025.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                Does accessiBe actually make websites accessible?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                accessiBe's overlay can adjust some visual elements (font size, contrast, cursor
                size) for sighted users with specific needs. However, it does not fix underlying source
                code issues that constitute the majority of WCAG violations. Over 700 accessibility
                professionals state in the{" "}
                <a
                  href="https://overlayfactsheet.com"
                  className="text-sky-400 hover:text-sky-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Overlay Fact Sheet
                </a>{" "}
                that overlays "do not repair the underlying problems with inaccessible websites."
                Screen reader users frequently report overlays make sites <em>less</em> usable.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                Can I still get sued with accessiBe installed?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Yes — and the data suggests overlays may increase your risk. In H1 2025, 456 ADA
                lawsuits (22.6% of total) targeted websites with overlay widgets. Courts have not
                accepted overlay installation as a good-faith compliance effort. Having an overlay can
                actually serve as evidence that you were aware of accessibility issues but chose an
                inadequate remediation approach.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                What is the best alternative to accessiBe?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Code-based accessibility scanners are the recommended approach. RatedWithAI ($29/mo)
                uses the axe-core engine to scan your actual HTML for WCAG violations. Other options
                include Deque axe DevTools ($4,000+/yr for enterprise), Siteimprove ($300-500+/mo),
                and Google Lighthouse (free but limited). See our detailed comparison of{" "}
                <Link
                  href="/blog/accessibe-alternative"
                  className="text-sky-400 hover:text-sky-300"
                >
                  7 best accessiBe alternatives
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                How do I remove accessiBe from my website?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Remove the accessWidget JavaScript snippet from your HTML{" "}
                <code className="rounded bg-slate-800 px-1">&lt;head&gt;</code> tag, Google Tag
                Manager, or CMS header injection area (look for scripts referencing "acsbapp.com" or
                "accessibe.com"). Then scan your site with a code-based tool to identify and fix real
                violations. Most screen reader users report an immediate improvement after overlay
                removal.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <h3 className="font-semibold text-slate-200">
                How much does accessiBe cost?
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                accessiBe starts at $490/year (Micro, up to 5K monthly visits), $1,490/year (Growth,
                up to 30K visits), and $3,990/year (Scale, up to 100K visits). Enterprise pricing is
                custom. By comparison, RatedWithAI starts at $29/month ($348/year) for code-based
                scanning — 29% less than accessiBe's cheapest plan while providing source-code-level
                analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mb-16 overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-950/40 to-slate-900">
          <div className="p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold">Stop Paying for a Band-Aid</h2>
            <p className="mx-auto mb-6 max-w-xl text-slate-400">
              Find out what's actually wrong with your website's accessibility — in 30 seconds, for free.
              No overlay widget. No false promises. Just real WCAG violations you can fix in your code.
            </p>
            <Link
              href="/scan"
              className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Free Accessibility Scan →
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Powered by axe-core. No credit card required.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-6 text-xl font-bold">Related Articles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/accessibe-alternative"
              className="group rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700"
            >
              <span className="text-xs text-orange-400">Comparison</span>
              <h3 className="mt-1 font-semibold text-slate-200 group-hover:text-white">
                7 Best accessiBe Alternatives in 2026
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Detailed comparison of code-based accessibility tools after the FTC fine.
              </p>
            </Link>
            <Link
              href="/blog/ada-website-compliance-guide"
              className="group rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700"
            >
              <span className="text-xs text-sky-400">Compliance</span>
              <h3 className="mt-1 font-semibold text-slate-200 group-hover:text-white">
                ADA Website Compliance: The Definitive Guide
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Everything you need to know about ADA compliance requirements in 2026.
              </p>
            </Link>
            <Link
              href="/blog/website-accessibility-lawsuit-statistics-2026"
              className="group rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700"
            >
              <span className="text-xs text-rose-400">Legal</span>
              <h3 className="mt-1 font-semibold text-slate-200 group-hover:text-white">
                Website Accessibility Lawsuit Statistics 2026
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                8,667 cases and counting — industry breakdown, state data, and protection strategies.
              </p>
            </Link>
            <Link
              href="/blog/wcag-compliance-guide"
              className="group rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700"
            >
              <span className="text-xs text-purple-400">WCAG</span>
              <h3 className="mt-1 font-semibold text-slate-200 group-hover:text-white">
                WCAG Compliance: The Complete Guide
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Master WCAG 2.1 AA with our comprehensive compliance guide and 20-item checklist.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
