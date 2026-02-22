/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ADA Title II Compliance Guide for Government Websites 2026 | RatedWithAI",
  description:
    "The DOJ's new ADA Title II rule requires state and local government websites to meet WCAG 2.1 AA by April 2026 or April 2027. Learn the compliance deadlines, requirements, and how to prepare your government website.",
  openGraph: {
    title: "ADA Title II Compliance Guide for Government Websites 2026",
    description:
      "The DOJ's new ADA Title II rule requires state and local government websites to meet WCAG 2.1 AA by April 2026 or April 2027. Learn the compliance deadlines, requirements, and how to prepare.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ADA Title II compliance",
    "government website accessibility",
    "WCAG 2.1 AA",
    "DOJ accessibility rule",
    "state local government ADA",
    "title ii web accessibility",
    "ada title ii compliance checker",
    "government accessibility deadline 2026",
  ],
};

export default function AdaTitleIIComplianceGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Title II Compliance Guide for Government Websites 2026",
    description:
      "Complete guide to the DOJ's new ADA Title II web accessibility requirements for state and local government websites.",
    datePublished: "2026-02-21T00:00:00.000Z",
    dateModified: "2026-02-21T00:00:00.000Z",
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

                    <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Government Accessibility
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Title II Compliance Guide for Government Websites 2026
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              The Department of Justice has finalized the first-ever web accessibility rule for state and local governments. With compliance deadlines as early as April 2026, time is running out. Here's everything you need to know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Critical Alert Box */}
          <section className="rounded-3xl border-2 border-red-500/50 bg-red-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-2xl">
                ⚠️
              </span>
              <h2 className="text-2xl font-bold text-red-300">
                Compliance Deadline Alert
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-red-100">
              <strong>Large state and local governments (50,000+ population)</strong> must comply by <strong>April 24, 2026</strong>. 
              Smaller entities have until April 26, 2027. Non-compliance can result in DOJ enforcement actions, private lawsuits, and loss of federal funding.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              Check Your Website's Compliance Now
              <span>→</span>
            </Link>
          </section>

          {/* What is ADA Title II */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What is ADA Title II?
            </h2>
            <p className="text-lg leading-relaxed">
              Title II of the Americans with Disabilities Act prohibits discrimination against people with disabilities by state and local government entities. This includes counties, cities, towns, school districts, public universities, public transit authorities, and any other government-funded organization.
            </p>
            <p className="text-lg leading-relaxed">
              While the ADA was enacted in 1990, the Department of Justice (DOJ) only recently issued formal technical standards for web accessibility. On April 24, 2024, the DOJ published the <strong>final rule on Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities</strong> — making WCAG 2.1 Level AA the legal standard for government websites.
            </p>
            <p className="text-lg leading-relaxed">
              This isn't a suggestion or best practice — it's a <strong>binding federal regulation</strong> with real consequences for non-compliance.
            </p>
          </section>

          {/* Why This Matters Now */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Why Government Websites Face Heightened Risk
            </h2>
            <p className="text-lg leading-relaxed">
              Government entities face unique liability because they're already covered under Title II — and have been since 1990. The new rule simply clarifies what compliance means in the digital context. Here's why the stakes are especially high:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  !
                </span>
                <span><strong>DOJ enforcement is active</strong> — The DOJ has already pursued settlements against government entities for inaccessible websites, including multi-million dollar agreements with cities and state agencies</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  !
                </span>
                <span><strong>No private right of action barrier</strong> — Unlike some other regulations, citizens can sue state and local governments directly under Title II without exhausting administrative remedies first</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  !
                </span>
                <span><strong>Federal funding at risk</strong> — Non-compliance can jeopardize federal grants and funding, affecting everything from infrastructure to education programs</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  !
                </span>
                <span><strong>Attorneys' fees</strong> — Prevailing plaintiffs can recover attorneys' fees, making it financially viable for law firms to pursue accessibility cases against government entities</span>
              </li>
            </ul>
          </section>

          {/* Compliance Deadlines */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              ADA Title II Compliance Deadlines
            </h2>
            <p className="text-lg leading-relaxed">
              The DOJ established a tiered deadline system based on population size:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-sky-500/50 bg-sky-950/30 p-6 space-y-3">
                <h3 className="text-xl font-semibold text-sky-300">Large Entities</h3>
                <p className="text-3xl font-bold text-white">April 24, 2026</p>
                <p className="text-slate-300">
                  State/local governments serving <strong>50,000+ people</strong>
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Most counties and cities</li>
                  <li>• State agencies</li>
                  <li>• Large school districts</li>
                  <li>• Public universities</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-purple-500/50 bg-purple-950/30 p-6 space-y-3">
                <h3 className="text-xl font-semibold text-purple-300">Smaller Entities</h3>
                <p className="text-3xl font-bold text-white">April 26, 2027</p>
                <p className="text-slate-300">
                  Special district governments with <strong>fewer than 50,000 people</strong>
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Small municipalities</li>
                  <li>• Special districts</li>
                  <li>• Small school districts</li>
                  <li>• Transit authorities</li>
                </ul>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              For large entities, that's <strong>less than 14 months away</strong>. Given the scope of most government web presences — often dozens of websites, portals, and applications — waiting is not an option.
            </p>
          </section>

          {/* WCAG 2.1 AA Requirements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What WCAG 2.1 Level AA Requires
            </h2>
            <p className="text-lg leading-relaxed">
              The rule mandates compliance with <Link href="/blog/wcag-2-1-vs-2-2" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.1 Level AA</Link> — the international standard for web accessibility. This covers 50 success criteria across four principles:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-sky-300">Perceivable</h3>
                <p className="text-sm text-slate-400">
                  Users must be able to perceive content — alt text for images, captions for video, sufficient color contrast
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-sky-300">Operable</h3>
                <p className="text-sm text-slate-400">
                  Users must be able to navigate and interact — keyboard navigation, skip links, no seizure-inducing content
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-sky-300">Understandable</h3>
                <p className="text-sm text-slate-400">
                  Content must be understandable — readable text, predictable navigation, input assistance
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 space-y-2">
                <h3 className="font-semibold text-sky-300">Robust</h3>
                <p className="text-sm text-slate-400">
                  Content must work with assistive technologies — valid HTML, proper ARIA, compatible with screen readers
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              Common violations on government websites include missing alt text on images, forms without proper labels, PDFs that aren't tagged for accessibility, videos without captions, and poor color contrast. Our <Link href="/blog/how-to-fix-common-wcag-failures" className="text-sky-400 hover:text-sky-300 underline">guide to fixing common WCAG failures</Link> covers remediation strategies.
            </p>
          </section>

          {/* What's Covered */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              What Digital Content is Covered?
            </h2>
            <p className="text-lg leading-relaxed">
              The rule covers <strong>web content and mobile applications</strong> that state and local governments use to provide services, programs, or activities to the public. This includes:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Main government websites</strong> — City halls, county offices, state agencies</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Online services portals</strong> — Permit applications, license renewals, tax payments</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Document libraries</strong> — PDFs, forms, meeting minutes, public records</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Public school websites</strong> — K-12 schools, community colleges, state universities</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Mobile apps</strong> — 311 apps, transit apps, parks & recreation booking systems</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Third-party platforms</strong> — Vendor-hosted services that government entities use to serve the public</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              The rule includes limited exceptions for archived content, third-party content posted by users (with conditions), and content where conformance would impose an undue burden — but these exceptions are narrow and require documentation.
            </p>
          </section>

          {/* How to Prepare */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              How to Prepare for ADA Title II Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              Compliance isn't achieved overnight. Here's a practical roadmap for government entities:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 font-bold text-slate-900">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Audit Your Current State</h3>
                  <p className="text-slate-300">
                    You can't fix what you don't measure. Start with a comprehensive accessibility scan of all public-facing websites and applications. Our <Link href="/" className="text-sky-400 hover:text-sky-300 underline">free accessibility scanner</Link> can identify WCAG violations across your digital properties in minutes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 font-bold text-slate-900">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Inventory All Digital Assets</h3>
                  <p className="text-slate-300">
                    Many government entities don't have a complete list of their web properties. Document every website, subdomain, application, and embedded third-party service. Include PDF libraries and video content.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 font-bold text-slate-900">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Prioritize High-Impact Issues</h3>
                  <p className="text-slate-300">
                    Not all violations are equal. Focus first on issues that completely block access — missing form labels, keyboard traps, inaccessible navigation. Then address lower-severity issues systematically.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 font-bold text-slate-900">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Remediate Systematically</h3>
                  <p className="text-slate-300">
                    Work with your web team or vendors to fix issues. Many common violations — like missing alt text or low contrast — can be fixed relatively quickly. Others, like complex form accessibility, may require development work.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 font-bold text-slate-900">
                  5
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Establish Ongoing Monitoring</h3>
                  <p className="text-slate-300">
                    Accessibility isn't a one-time project. Every content update, new feature, or vendor change can introduce new violations. Set up ongoing monitoring to catch issues before they become compliance failures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Overlays Don't Work */}
          <section className="space-y-6 rounded-3xl border border-amber-500/50 bg-amber-950/20 p-8">
            <h2 className="text-3xl font-semibold text-amber-200">
              Warning: Accessibility Overlays Won't Save You
            </h2>
            <p className="text-lg leading-relaxed">
              Some vendors market "quick fix" accessibility overlay widgets that claim to make websites compliant with a single line of JavaScript. <strong>These do not satisfy ADA Title II requirements.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              The DOJ rule explicitly requires that web content <em>itself</em> conform to WCAG 2.1 AA. An overlay that sits on top of non-compliant content doesn't fix the underlying issues — and courts have consistently rejected overlay installation as evidence of compliance. In fact, <Link href="/blog/ada-lawsuit-settlements-2026" className="text-sky-400 hover:text-sky-300 underline">25% of accessibility lawsuits in 2024</Link> specifically cited overlay widgets as barriers rather than solutions.
            </p>
            <p className="text-lg leading-relaxed">
              For government entities, using an overlay instead of proper remediation isn't just ineffective — it could be cited as evidence of deliberate indifference, potentially increasing liability.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-6 rounded-3xl bg-gradient-to-br from-sky-900/80 via-blue-900/80 to-purple-900/80 p-8 border border-sky-500/30">
            <h2 className="text-3xl font-semibold text-white">
              Start Your Compliance Journey Today
            </h2>
            <p className="text-lg leading-relaxed">
              Whether you're a city webmaster, county IT director, or state agency compliance officer, the clock is ticking. RatedWithAI provides honest, accurate accessibility scanning without the false promises of overlay vendors.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex gap-3 items-center">
                <span className="text-green-400">✓</span>
                <span>Instant WCAG 2.1 AA scanning</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-400">✓</span>
                <span>Detailed violation reports with fix guidance</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-400">✓</span>
                <span>Ongoing monitoring for new issues</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-400">✓</span>
                <span>No overlays, no false compliance claims</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Get Your Free Accessibility Scan
                <span>→</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 group">
                <summary className="cursor-pointer font-semibold text-white">
                  Does this rule apply to all government websites?
                </summary>
                <p className="mt-3 text-slate-300">
                  The rule applies to web content and mobile apps that state and local government entities use to provide services, programs, or activities to the public. Internal-only systems used solely by employees may not be covered under this specific rule, though they may be covered under other ADA provisions.
                </p>
              </details>
              <details className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 group">
                <summary className="cursor-pointer font-semibold text-white">
                  What about legacy PDFs and archived content?
                </summary>
                <p className="mt-3 text-slate-300">
                  The rule includes an exception for archived content that was created before the compliance date, is maintained exclusively for research or reference, and is clearly identified as archived. However, if that content is regularly accessed by the public for current services, it likely needs to be accessible.
                </p>
              </details>
              <details className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 group">
                <summary className="cursor-pointer font-semibold text-white">
                  Can we claim undue burden?
                </summary>
                <p className="mt-3 text-slate-300">
                  The rule allows entities to claim compliance would cause an undue financial or administrative burden, but this requires a documented determination by a senior official, and you must still provide services in an alternative accessible manner. This exception is narrow and should not be relied upon as a primary strategy.
                </p>
              </details>
              <details className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 group">
                <summary className="cursor-pointer font-semibold text-white">
                  What are the penalties for non-compliance?
                </summary>
                <p className="mt-3 text-slate-300">
                  Penalties can include DOJ enforcement actions, private lawsuits with damages and attorneys' fees, consent decrees requiring remediation under court supervision, and potential loss of federal funding. Settlement amounts in government accessibility cases have ranged from tens of thousands to millions of dollars.
                </p>
              </details>
            </div>
          </section>

          {/* Related Content */}
          <section className="space-y-6 border-t border-slate-800/70 pt-10">
            <h2 className="text-2xl font-semibold text-white">Related Articles</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 transition hover:border-sky-500/50 hover:bg-slate-900/70"
              >
                <h3 className="font-semibold text-sky-300">ADA Compliance Checklist 2026</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Complete guide to ADA web accessibility for all businesses
                </p>
              </Link>
              <Link
                href="/blog/how-to-fix-common-wcag-failures"
                className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 transition hover:border-sky-500/50 hover:bg-slate-900/70"
              >
                <h3 className="font-semibold text-sky-300">How to Fix Common WCAG Failures</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Practical remediation guide for the most frequent violations
                </p>
              </Link>
              <Link
                href="/blog/ada-lawsuit-settlements-2026"
                className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 transition hover:border-sky-500/50 hover:bg-slate-900/70"
              >
                <h3 className="font-semibold text-sky-300">ADA Lawsuit Settlements 2026</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Recent accessibility lawsuits and what they cost
                </p>
              </Link>
              <Link
                href="/blog/wcag-2-1-vs-2-2"
                className="rounded-xl border border-slate-700/70 bg-slate-900/40 p-5 transition hover:border-sky-500/50 hover:bg-slate-900/70"
              >
                <h3 className="font-semibold text-sky-300">WCAG 2.1 vs 2.2: What's Changed</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Understanding the differences between WCAG versions
                </p>
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
