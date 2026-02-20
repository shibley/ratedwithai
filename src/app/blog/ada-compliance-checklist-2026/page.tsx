/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ADA Compliance Checklist 2026: The Complete Guide for Business Owners | RatedWithAI",
  description:
    "Stay compliant and avoid lawsuits with our comprehensive ADA compliance checklist for 2026. Learn what ADA compliance means, who needs it, and get actionable steps to make your website accessible.",
  openGraph: {
    title: "ADA Compliance Checklist 2026: The Complete Guide for Business Owners",
    description:
      "Stay compliant and avoid lawsuits with our comprehensive ADA compliance checklist for 2026. Learn what ADA compliance means, who needs it, and get actionable steps to make your website accessible.",
    type: "article",
    publishedTime: "2026-01-15T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function AdaComplianceChecklistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Compliance Checklist 2026: The Complete Guide for Business Owners",
    description:
      "Stay compliant and avoid lawsuits with our comprehensive ADA compliance checklist for 2026.",
    datePublished: "2026-01-15T00:00:00.000Z",
    dateModified: "2026-01-15T00:00:00.000Z",
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

          <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold">
                R
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
                <p className="text-xs text-slate-400">Blog</p>
              </div>
            </Link>
            <Link
              className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              href="/"
            >
              Scan your site
            </Link>
          </header>

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Accessibility Guide
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Compliance Checklist 2026: The Complete Guide for Business Owners
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Website accessibility isn't just good practice—it's the law. Here's everything you need to know to keep your business compliant and avoid costly lawsuits.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-01-15">January 15, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* What is ADA Compliance */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What is ADA Compliance?
            </h2>
            <p className="text-lg leading-relaxed">
              The Americans with Disabilities Act (ADA) is a civil rights law that prohibits discrimination against individuals with disabilities. While the ADA was passed in 1990—long before the modern web—courts have consistently ruled that it applies to websites and digital properties.
            </p>
            <p className="text-lg leading-relaxed">
              In practical terms, <strong>ADA compliance means making your website usable by everyone</strong>, including people who are blind, deaf, have motor impairments, or cognitive disabilities. This typically means following the Web Content Accessibility Guidelines (WCAG), which provide technical standards for accessible web design.
            </p>
            <p className="text-lg leading-relaxed">
              Think of it this way: just as a physical store needs a wheelchair ramp, your website needs digital "ramps"—alternative text for images, keyboard navigation, proper color contrast, and more.
            </p>
          </section>

          {/* Who Needs ADA Compliance */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Who Needs to Comply?
            </h2>
            <p className="text-lg leading-relaxed">
              The short answer: <strong>almost every business with a website.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              While the legal landscape is still evolving, courts have consistently ruled that ADA Title III applies to "places of public accommodation"—and websites qualify. Here's who's definitely covered:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Retailers and e-commerce sites</strong> — If you sell products or services online, you're almost certainly required to be ADA compliant</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Service providers</strong> — <Link href="/industry/restaurants" className="text-sky-400 hover:text-sky-300 underline">Restaurants</Link>, <Link href="/industry/healthcare" className="text-sky-400 hover:text-sky-300 underline">healthcare providers</Link>, professional services, and consultants</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Government entities</strong> — Federal, state, and local government websites (covered under Section 508)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Educational institutions</strong> — Schools, universities, and online learning platforms</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ✓
                </span>
                <span><strong>Financial services</strong> — Banks, insurance companies, and fintech apps</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              Even if you're a small business or startup, you're not exempt. In fact, <strong>plaintiff law firms specifically target small businesses</strong> because they're less likely to have compliance programs in place.
            </p>
          </section>

          {/* The Checklist */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The ADA Compliance Checklist
            </h2>
            <p className="text-lg leading-relaxed">
              Here's your actionable roadmap to ADA compliance. This checklist is based on WCAG 2.1 Level AA, which is the standard most courts reference.
            </p>

            <div className="space-y-8 mt-8">
              {/* Section 1: Images and Media */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  1. Images and Media
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Add alt text to every image</strong> — Describe what the image shows. Skip decorative images with <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">alt=""</code></span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Caption all videos</strong> — Provide accurate captions for any video content</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Provide transcripts</strong> — Offer text versions of audio and video content</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Don't use images of text</strong> — Use real text whenever possible; it's more accessible and SEO-friendly</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: Color and Contrast */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  2. Color and Contrast
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Meet minimum contrast ratios</strong> — 4.5:1 for normal text, 3:1 for large text (<Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.4.3</Link>)</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Don't rely on color alone</strong> — Use icons, labels, or patterns in addition to color to convey meaning</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Test with color blindness simulators</strong> — Make sure your site works for users with color vision deficiencies</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Keyboard Navigation */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  3. Keyboard Navigation
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Make everything keyboard-accessible</strong> — Users should be able to navigate your entire site with Tab, Enter, and Arrow keys</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Show visible focus indicators</strong> — Make it obvious which element is currently focused</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Avoid keyboard traps</strong> — Users shouldn't get stuck in modals, dropdowns, or other interactive elements</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Logical tab order</strong> — Focus should move in a predictable sequence that matches visual layout</span>
                  </li>
                </ul>
              </div>

              {/* Section 4: Forms and Inputs */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  4. Forms and Inputs
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Label every form field</strong> — Use proper <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;label&gt;</code> elements associated with inputs</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Provide clear error messages</strong> — Tell users exactly what went wrong and how to fix it</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Mark required fields</strong> — Use both visual indicators (like *) and proper HTML attributes</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Use autocomplete attributes</strong> — Help users fill forms faster with standard autocomplete values</span>
                  </li>
                </ul>
              </div>

              {/* Section 5: Content Structure */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  5. Content Structure
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Use semantic HTML headings</strong> — One <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;h1&gt;</code> per page, followed by <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;h2&gt;</code>, <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;h3&gt;</code>, etc. in order</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Write descriptive link text</strong> — Avoid "click here" or "read more"—use meaningful phrases</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Use lists properly</strong> — Wrap navigation menus and lists in <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;ul&gt;</code> or <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;ol&gt;</code> tags</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Provide skip navigation links</strong> — Let users jump directly to main content</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Set the page language</strong> — Use <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">lang</code> attribute on the <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-300">&lt;html&gt;</code> tag</span>
                  </li>
                </ul>
              </div>

              {/* Section 6: Mobile and Responsive */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  6. Mobile and Responsive Design
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Support zoom up to 200%</strong> — Don't disable pinch-to-zoom on mobile devices</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Make touch targets large enough</strong> — Buttons and links should be at least 44×44 pixels</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Ensure responsive reflow</strong> — Content should adapt to different screen sizes without horizontal scrolling</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Violations */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Most Common ADA Violations
            </h2>
            <p className="text-lg leading-relaxed">
              According to accessibility audits performed in 2025, these are the violations that appear most frequently:
            </p>
            <ol className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 font-semibold text-rose-300">
                  1
                </span>
                <div>
                  <strong className="text-white">Missing alt text on images</strong> — Appears on 60% of homepages tested
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 font-semibold text-rose-300">
                  2
                </span>
                <div>
                  <strong className="text-white">Low color contrast</strong> — Light gray text on white backgrounds is a frequent offender
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 font-semibold text-rose-300">
                  3
                </span>
                <div>
                  <strong className="text-white">Form inputs without labels</strong> — Especially search boxes and newsletter signups
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 font-semibold text-rose-300">
                  4
                </span>
                <div>
                  <strong className="text-white">Unlabeled buttons and icons</strong> — Social media icons and hamburger menus without accessible names
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 font-semibold text-rose-300">
                  5
                </span>
                <div>
                  <strong className="text-white">Broken heading hierarchy</strong> — Skipping from H1 to H3, or multiple H1s on a page
                </div>
              </li>
            </ol>
            <p className="text-lg leading-relaxed text-slate-300">
              The good news? Most of these issues are straightforward to fix once you know they exist.
            </p>
          </section>

          {/* Lawsuit Statistics */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              ADA Lawsuit Statistics You Should Know
            </h2>
            <p className="text-lg leading-relaxed">
              ADA website accessibility lawsuits aren't slowing down—they're accelerating. Here's what the data shows:
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
                <p className="text-4xl font-bold text-amber-200">4,605</p>
                <p className="mt-2 text-base text-amber-100">
                  Federal ADA lawsuits filed in 2023 (US District Courts)
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
                <p className="text-4xl font-bold text-amber-200">$10K–$50K</p>
                <p className="mt-2 text-base text-amber-100">
                  Average settlement range for ADA website lawsuits
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
                <p className="text-4xl font-bold text-amber-200">76%</p>
                <p className="mt-2 text-base text-amber-100">
                  Of lawsuits target retail and e-commerce businesses
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
                <p className="text-4xl font-bold text-amber-200">3–5</p>
                <p className="mt-2 text-base text-amber-100">
                  Law firms are responsible for 70%+ of all filings
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-6">
              <strong className="text-white">Important context:</strong> Most of these lawsuits follow a pattern. Plaintiff law firms use automated scanning tools to identify non-compliant websites, then file lawsuits en masse. Settling is often cheaper than fighting in court, even if you believe you'd win.
            </p>
            <p className="text-lg leading-relaxed">
              This isn't about scaring you—it's about making an informed business decision. Investing in accessibility now costs far less than dealing with a lawsuit later.
            </p>
          </section>

          {/* How to Check Your Site */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
            <h2 className="text-3xl font-semibold text-white">
              How to Check Your Website for ADA Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              You don't need to hire an expensive consultant to get started. Here's a practical approach:
            </p>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Run an Automated Scan</h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Automated tools can catch 30-50% of accessibility issues instantly. They're a great starting point. Tools like <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> scan your site in seconds and provide a detailed accessibility report with specific issues and fixes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Manual Testing</h3>
                <p className="text-base text-slate-300 leading-relaxed mb-3">
                  Spend 15 minutes testing these yourself:
                </p>
                <ul className="space-y-2 text-base text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Unplug your mouse and navigate your site using only the keyboard (Tab, Enter, Arrow keys)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Turn on a screen reader (VoiceOver on Mac, NVDA on Windows) and listen to your homepage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Zoom your browser to 200% and make sure content doesn't break or require horizontal scrolling</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-400">•</span>
                    <span>Disable images and see if your site still makes sense</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Get a Professional Audit (Optional)</h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  If you're in a high-risk industry or want comprehensive coverage, hire an accessibility consultant for a full WCAG audit. Expect to pay $2,000–$10,000 depending on site complexity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Create an Accessibility Statement</h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Once you've addressed major issues, publish an accessibility statement on your website. Include your commitment to accessibility, known issues you're working on, and contact information for users who encounter barriers.
                </p>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Making ADA Compliance Feel Achievable
            </h2>
            <p className="text-lg leading-relaxed">
              Here's the truth: <strong>perfect accessibility is a journey, not a destination.</strong> Even the most accessibility-focused companies find new issues as standards evolve.
            </p>
            <p className="text-lg leading-relaxed">
              Your goal isn't perfection—it's <em>demonstrable effort</em> and <em>continuous improvement</em>. Courts look favorably on businesses that:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span>Have an accessibility policy in place</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span>Conduct regular accessibility audits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span>Fix issues promptly when discovered</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">→</span>
                <span>Provide alternative ways for users to access content or services</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              Start with the checklist above. Fix the low-hanging fruit first—missing alt text, form labels, color contrast. Then tackle keyboard navigation and semantic HTML. You'll be surprised how much progress you can make in a few focused days.
            </p>
            <p className="text-lg leading-relaxed">
              Remember: <strong>accessibility isn't just about avoiding lawsuits</strong>. It's about reaching more customers, improving SEO, and building a better web for everyone.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Free Accessibility Scan
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  See Your ADA Compliance Score in 60 Seconds
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Get a detailed report of accessibility issues on your site—completely free. No signup required.
                </p>
              </div>
              <Link
                href="/"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Scan Your Site Free
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/industry/restaurants"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Restaurant Website Accessibility
                </p>
              </Link>
              <Link
                href="/industry/healthcare"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Healthcare Website Compliance
                </p>
              </Link>
              <Link
                href="/wcag/1-4-3-contrast-minimum"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Color Contrast Requirements
                </p>
              </Link>
              <Link
                href="/blog/wcag-2-1-vs-2-2"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  WCAG 2.1 vs 2.2: What Changed
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
