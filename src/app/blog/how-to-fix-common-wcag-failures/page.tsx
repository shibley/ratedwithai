/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Fix Common WCAG Failures (2026 Guide) | RatedWithAI",
  description:
    "Learn how to fix the top 10 most common WCAG accessibility failures with practical code examples and step-by-step remediation guides. Updated for 2026.",
  keywords: [
    "WCAG failures",
    "fix accessibility issues",
    "WCAG remediation",
    "accessibility fixes",
    "common accessibility errors",
    "WCAG 2.2 compliance",
    "web accessibility fixes",
  ],
  openGraph: {
    title: "How to Fix Common WCAG Failures (2026 Guide)",
    description:
      "Learn how to fix the top 10 most common WCAG accessibility failures with practical code examples and step-by-step remediation guides.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function HowToFixWcagFailuresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Fix Common WCAG Failures (2026 Guide)",
    description:
      "Comprehensive guide to fixing the top 10 most common WCAG accessibility failures with practical code examples.",
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
              WCAG Remediation
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              How to Fix Common WCAG Failures (2026 Guide)
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Accessibility audits reveal the same issues over and over. Here's how to fix the top 10 WCAG failures—with code examples you can copy-paste today.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Introduction */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Why These Failures Keep Appearing
            </h2>
            <p className="text-lg leading-relaxed">
              After scanning thousands of websites for WCAG compliance, we've identified the same issues appearing on the vast majority of sites. The WebAIM Million study confirms it: <strong>96.3% of home pages have detectable WCAG 2 failures</strong>—and most of those failures come from a short list of common mistakes.
            </p>
            <p className="text-lg leading-relaxed">
              The good news? These failures are fixable. In most cases, you can resolve them in minutes with the right knowledge. This guide covers the ten most common WCAG failures, explains why they matter, and provides practical code examples for fixing each one.
            </p>
            <p className="text-lg leading-relaxed">
              Before diving in, consider running a <Link href="/" className="text-sky-400 hover:text-sky-300 underline">free accessibility scan</Link> on your site to see which of these issues affect you. Then use this guide as your remediation playbook.
            </p>
          </section>

          {/* Failure #1: Missing Alt Text */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">1</span>
              <h2 className="text-2xl font-semibold text-white">Missing Alternative Text for Images</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">1.1.1 Non-text Content (Level A)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Missing alt text is the single most common accessibility failure, appearing on over 55% of all websites. When images lack text alternatives, screen reader users encounter "image" or "graphic" with no context about what they're looking at.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Why It Matters</h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Images often convey critical information—product photos, instructional diagrams, team headshots, infographics. Without alt text, blind and low-vision users miss this content entirely. Search engines also rely on alt text to understand images, so fixing this improves SEO as well.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-300 mb-3">❌ Common Mistakes</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- Missing alt entirely -->
<img src="product.jpg">

<!-- Placeholder alt -->
<img src="chart.png" alt="image">

<!-- Filename as alt -->
<img src="hero.jpg" alt="IMG_4521.jpg">

<!-- Keyword stuffing -->
<img src="shoes.jpg" alt="shoes sneakers running shoes athletic shoes buy shoes">`}</pre>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Proper Implementation</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- Descriptive alt text -->
<img src="product.jpg" 
     alt="Red Nike Air Max sneakers, side view">

<!-- Decorative image (empty alt) -->
<img src="decorative-line.svg" alt="">

<!-- Complex image with longer description -->
<img src="chart.png" 
     alt="Bar chart showing 40% increase in sales from Q1 to Q4 2025">`}</pre>
              </div>
            </div>

            <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
              <p className="font-semibold text-sky-200 mb-2">💡 Quick Tips</p>
              <ul className="space-y-2 text-sm text-sky-100">
                <li>• <strong>Be concise:</strong> Aim for under 125 characters when possible</li>
                <li>• <strong>Don't start with "Image of" or "Picture of"</strong>—screen readers announce it's an image</li>
                <li>• <strong>Empty alt for decorative images:</strong> Use <code className="bg-slate-800 px-1 rounded">alt=""</code> (not omitting the attribute)</li>
                <li>• <strong>Describe function, not appearance:</strong> For a search icon button, use "Search" not "magnifying glass"</li>
              </ul>
            </div>
          </section>

          {/* Failure #2: Low Contrast */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">2</span>
              <h2 className="text-2xl font-semibold text-white">Insufficient Color Contrast</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">1.4.3 Contrast (Minimum) (Level AA)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Low contrast text appears on over 80% of websites, making it the most widespread accessibility issue. Light gray text on white backgrounds is the classic offender—trendy in design mockups but unreadable for many users.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Required Contrast Ratios</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white mb-2">Normal Text (&lt;24px)</p>
                  <p className="text-3xl font-bold text-amber-300">4.5:1</p>
                  <p className="text-sm text-slate-400 mt-2">Minimum contrast ratio required</p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white mb-2">Large Text (≥24px or 18.5px bold)</p>
                  <p className="text-3xl font-bold text-amber-300">3:1</p>
                  <p className="text-sm text-slate-400 mt-2">Minimum contrast ratio required</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-white">Common Low-Contrast Offenders:</p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-white px-4 py-3">
                  <span className="text-gray-400 text-sm">❌ #9CA3AF on white (3.0:1)</span>
                </div>
                <div className="rounded-lg bg-white px-4 py-3">
                  <span className="text-gray-600 text-sm">✓ #4B5563 on white (5.9:1)</span>
                </div>
                <div className="rounded-lg bg-slate-900 px-4 py-3">
                  <span className="text-slate-500 text-sm">❌ #64748B on dark (3.9:1)</span>
                </div>
                <div className="rounded-lg bg-slate-900 px-4 py-3">
                  <span className="text-slate-300 text-sm">✓ #CBD5E1 on dark (7.5:1)</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
              <p className="font-semibold text-sky-200 mb-2">💡 How to Fix</p>
              <ol className="space-y-2 text-sm text-sky-100 list-decimal list-inside">
                <li>Use a contrast checker tool (WebAIM Contrast Checker, Stark, or browser DevTools)</li>
                <li>Audit placeholder text—it often fails contrast requirements</li>
                <li>Check text over images—add overlays or text shadows if needed</li>
                <li>Don't rely on hover states for critical information</li>
              </ol>
            </div>
          </section>

          {/* Failure #3: Missing Form Labels */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">3</span>
              <h2 className="text-2xl font-semibold text-white">Missing or Improper Form Labels</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/3-3-2-labels-or-instructions" className="text-sky-400 hover:text-sky-300 underline">3.3.2 Labels or Instructions (Level A)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Form inputs without proper labels leave screen reader users guessing about what information to enter. Placeholder text alone doesn't count—it disappears when users start typing and isn't announced consistently by assistive technology.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-300 mb-3">❌ Common Mistakes</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- Placeholder instead of label -->
<input type="email" placeholder="Email">

<!-- Label not associated -->
<label>Email</label>
<input type="email" id="email">

<!-- Hidden label (sometimes okay) -->
<label class="sr-only">Email</label>
<input type="email">`}</pre>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Proper Implementation</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- Explicit label association -->
<label for="email">Email address</label>
<input type="email" id="email">

<!-- Implicit label (wrapping) -->
<label>
  Email address
  <input type="email">
</label>

<!-- With aria-labelledby -->
<span id="email-label">Email</span>
<input type="email" 
       aria-labelledby="email-label">`}</pre>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What About Visually Hidden Labels?</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Sometimes designers want a cleaner look without visible labels. You can visually hide labels while keeping them accessible, but this should be used sparingly and only when the input's purpose is obvious from context (like a search box with a magnifying glass icon).
              </p>
              <pre className="text-sm text-slate-300 overflow-x-auto rounded-lg bg-slate-900/60 p-4">{`.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`}</pre>
            </div>
          </section>

          {/* Failure #4: Empty Links/Buttons */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">4</span>
              <h2 className="text-2xl font-semibold text-white">Empty Links and Buttons</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/2-4-4-link-purpose" className="text-sky-400 hover:text-sky-300 underline">2.4.4 Link Purpose (Level A)</Link> and <Link href="/wcag/4-1-2-name-role-value" className="text-sky-400 hover:text-sky-300 underline">4.1.2 Name, Role, Value (Level A)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Icon-only buttons and links are everywhere—social media icons, hamburger menus, close buttons, arrow navigation. Without accessible names, screen readers announce them as "button" or "link" with no indication of what they do.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-300 mb-3">❌ Common Mistakes</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- Icon button without label -->
<button>
  <svg><!-- hamburger icon --></svg>
</button>

<!-- Empty link -->
<a href="/twitter">
  <i class="fa-twitter"></i>
</a>

<!-- Image link without alt -->
<a href="/">
  <img src="logo.svg">
</a>`}</pre>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Proper Implementation</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- aria-label for icon buttons -->
<button aria-label="Open menu">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Visually hidden text -->
<a href="/twitter">
  <i class="fa-twitter" aria-hidden="true"></i>
  <span class="sr-only">Follow us on Twitter</span>
</a>

<!-- Alt text for image links -->
<a href="/">
  <img src="logo.svg" alt="RatedWithAI home">
</a>`}</pre>
              </div>
            </div>

            <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
              <p className="font-semibold text-sky-200 mb-2">💡 Pro Tip: Hide Decorative Icons</p>
              <p className="text-sm text-sky-100">
                When you add an accessible name to a button, hide the icon from assistive technology using <code className="bg-slate-800 px-1 rounded">aria-hidden="true"</code>. This prevents screen readers from announcing both the icon and the label (e.g., "hamburger, open menu").
              </p>
            </div>
          </section>

          {/* Failure #5: Missing Document Language */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">5</span>
              <h2 className="text-2xl font-semibold text-white">Missing Document Language</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/3-1-1-language-of-page" className="text-sky-400 hover:text-sky-300 underline">3.1.1 Language of Page (Level A)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              This is the easiest fix on the list but often overlooked. Without a language declaration, screen readers may use the wrong pronunciation rules, making content incomprehensible. French words read with English pronunciation? Not a great experience.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-300 mb-3">❌ Missing Language</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!DOCTYPE html>
<html>
  <head>...</head>
  <body>...</body>
</html>`}</pre>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✓ With Language Declared</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>...</body>
</html>

<!-- For other languages -->
<html lang="es"> <!-- Spanish -->
<html lang="fr"> <!-- French -->
<html lang="de"> <!-- German -->`}</pre>
              </div>
            </div>

            <p className="text-base text-slate-300">
              For pages with mixed languages, use the <code className="bg-slate-800 px-2 py-1 rounded text-sky-300">lang</code> attribute on specific elements. See <Link href="/wcag/3-1-2-language-of-parts" className="text-sky-400 hover:text-sky-300 underline">3.1.2 Language of Parts</Link> for details.
            </p>
          </section>

          {/* Failure #6: Missing Focus Indicators */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">6</span>
              <h2 className="text-2xl font-semibold text-white">Missing or Low-Contrast Focus Indicators</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/2-4-7-focus-visible" className="text-sky-400 hover:text-sky-300 underline">2.4.7 Focus Visible (Level AA)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Removing the default focus outline is one of the most common (and harmful) CSS practices. Without visible focus indicators, keyboard users can't tell which element they're interacting with. It's like hiding the mouse cursor.
            </p>

            <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
              <p className="text-sm font-semibold text-rose-300 mb-3">❌ Never Do This</p>
              <pre className="text-sm text-slate-300 overflow-x-auto">{`/* This breaks keyboard navigation */
*:focus {
  outline: none;
}

button:focus,
a:focus {
  outline: 0;
}`}</pre>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
              <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Better Approaches</p>
              <pre className="text-sm text-slate-300 overflow-x-auto">{`/* Use :focus-visible for keyboard-only focus */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Custom focus styles that match your design */
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

/* High contrast focus for dark backgrounds */
a:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
  border-radius: 2px;
}`}</pre>
            </div>

            <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
              <p className="font-semibold text-sky-200 mb-2">💡 Why :focus-visible?</p>
              <p className="text-sm text-sky-100">
                The <code className="bg-slate-800 px-1 rounded">:focus-visible</code> selector only shows focus indicators when keyboard navigation is detected, not on mouse clicks. This gives you clean visuals for mouse users while maintaining accessibility for keyboard users. It's supported in all modern browsers.
              </p>
            </div>
          </section>

          {/* Failure #7: Broken Heading Structure */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">7</span>
              <h2 className="text-2xl font-semibold text-white">Broken Heading Hierarchy</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-3-1-info-and-relationships" className="text-sky-400 hover:text-sky-300 underline">1.3.1 Info and Relationships (Level A)</Link> and <Link href="/wcag/2-4-6-headings-and-labels" className="text-sky-400 hover:text-sky-300 underline">2.4.6 Headings and Labels (Level AA)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Headings aren't just for styling—they create a navigable document outline. Screen reader users jump between headings to scan content. Skipping levels or using headings inconsistently breaks this navigation pattern.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-300 mb-3">❌ Common Mistakes</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<!-- Skipping heading levels -->
<h1>Page Title</h1>
<h4>Section Title</h4>  <!-- Skipped h2, h3 -->

<!-- Multiple h1s -->
<h1>Logo</h1>
<h1>Page Title</h1>
<h1>Section</h1>

<!-- Using headings for styling -->
<h3>This small text looks nice</h3>`}</pre>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Proper Hierarchy</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`<h1>Page Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>
      <h4>Detail 2.1.1</h4>

<!-- Style with classes, not heading level -->
<p class="text-sm font-semibold">
  This small text looks nice
</p>`}</pre>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Test</h3>
              <p className="text-base text-slate-300">
                Install the <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline">WAVE browser extension</a> and look at the Structure tab. You'll see your heading outline instantly. If it doesn't read like a table of contents, fix it.
              </p>
            </div>
          </section>

          {/* Failure #8: Links Not Distinguishable */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">8</span>
              <h2 className="text-2xl font-semibold text-white">Links Not Distinguishable from Text</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-4-1-use-of-color" className="text-sky-400 hover:text-sky-300 underline">1.4.1 Use of Color (Level A)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              If links are only distinguished by color (no underline or other visual cue), color-blind users may not recognize them as clickable. This is especially problematic when links are embedded in paragraphs of text.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="text-sm font-semibold text-rose-300 mb-3">❌ Color-Only Links</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`/* Only difference is color */
a {
  color: #3b82f6;
  text-decoration: none;
}`}</pre>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Multiple Visual Cues</p>
                <pre className="text-sm text-slate-300 overflow-x-auto">{`/* Underline + color */
a {
  color: #3b82f6;
  text-decoration: underline;
}

/* Or underline on hover with high contrast */
a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
}
a:hover, a:focus {
  text-decoration: underline;
}`}</pre>
              </div>
            </div>
          </section>

          {/* Failure #9: Non-text Contrast */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">9</span>
              <h2 className="text-2xl font-semibold text-white">Low Non-Text Contrast</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/1-4-11-non-text-contrast" className="text-sky-400 hover:text-sky-300 underline">1.4.11 Non-text Contrast (Level AA)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              UI components like form field borders, icons, and focus indicators also need sufficient contrast. A light gray input border on a white background may be too subtle for users with low vision to see.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Minimum: 3:1 Contrast Ratio</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Unlike text (4.5:1), UI components only need 3:1 contrast. But this still catches many common designs.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm text-slate-600 mb-2">❌ Light borders</p>
                  <input type="text" placeholder="Email" className="w-full border border-gray-200 rounded px-3 py-2 text-slate-900" readOnly />
                  <p className="text-xs text-gray-400 mt-2">#E5E7EB border (1.3:1 on white)</p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm text-slate-600 mb-2">✓ Visible borders</p>
                  <input type="text" placeholder="Email" className="w-full border border-gray-500 rounded px-3 py-2 text-slate-900" readOnly />
                  <p className="text-xs text-gray-400 mt-2">#6B7280 border (4.6:1 on white)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Failure #10: Keyboard Traps */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 font-bold text-xl">10</span>
              <h2 className="text-2xl font-semibold text-white">Keyboard Traps</h2>
            </div>
            <p className="text-base leading-relaxed">
              <strong>WCAG Criterion:</strong> <Link href="/wcag/2-1-2-no-keyboard-trap" className="text-sky-400 hover:text-sky-300 underline">2.1.2 No Keyboard Trap (Level A)</Link>
            </p>
            <p className="text-lg leading-relaxed">
              Keyboard traps occur when users can Tab into a component but can't Tab out. This is common with modals, embedded media players, and custom widgets that capture keyboard events. Users get stuck and have to refresh the page.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Common Keyboard Trap Sources</h3>
              <ul className="space-y-3 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-rose-400">•</span>
                  <span><strong>Modal dialogs</strong> that don't trap focus properly (or trap it too aggressively)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">•</span>
                  <span><strong>Embedded content</strong> (iframes, video players) that capture all keyboard input</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">•</span>
                  <span><strong>Custom widgets</strong> that use <code className="bg-slate-800 px-1 rounded">event.preventDefault()</code> on keydown events</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">•</span>
                  <span><strong>Date pickers and autocomplete dropdowns</strong> that don't close with Escape</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
              <p className="text-sm font-semibold text-emerald-300 mb-3">✓ Modal Best Practices</p>
              <pre className="text-sm text-slate-300 overflow-x-auto">{`// 1. Trap focus inside the modal
// 2. Allow Escape to close
// 3. Return focus to trigger element on close

dialog.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    triggerButton.focus(); // Return focus
  }
});

// Use the native <dialog> element when possible
<dialog>
  <button onclick="this.closest('dialog').close()">
    Close
  </button>
</dialog>`}</pre>
            </div>
          </section>

          {/* Next Steps */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Your Remediation Checklist
            </h2>
            <p className="text-lg leading-relaxed">
              Here's a prioritized action plan for fixing these issues:
            </p>
            <ol className="space-y-4 text-base text-slate-300">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">1</span>
                <span><strong>Run an automated scan</strong> — Use <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> to identify issues on your site</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">2</span>
                <span><strong>Add document language</strong> — One line fix: <code className="bg-slate-800 px-2 py-1 rounded">&lt;html lang="en"&gt;</code></span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">3</span>
                <span><strong>Fix alt text globally</strong> — Audit all images, add meaningful descriptions</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">4</span>
                <span><strong>Restore focus indicators</strong> — Remove any <code className="bg-slate-800 px-2 py-1 rounded">outline: none</code> without replacements</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">5</span>
                <span><strong>Label all form fields</strong> — Associate labels with inputs using <code className="bg-slate-800 px-2 py-1 rounded">for</code> attribute</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">6</span>
                <span><strong>Fix contrast issues</strong> — Use a contrast checker, aim for 4.5:1 minimum</span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold">7</span>
                <span><strong>Do keyboard testing</strong> — Tab through your site, escape from all modals</span>
              </li>
            </ol>
            <p className="text-base text-slate-300 mt-6">
              For more detailed guidance, see our <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300 underline">ADA Compliance Checklist</Link> and <Link href="/blog/website-accessibility-testing-guide" className="text-sky-400 hover:text-sky-300 underline">Website Accessibility Testing Guide</Link>.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Find Your Issues
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Scan Your Site for WCAG Failures
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Get a detailed report showing exactly which of these issues affect your site—with prioritized fixes.
                </p>
              </div>
              <Link
                href="/"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Free Accessibility Scan
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Compliance Checklist 2026
                </p>
              </Link>
              <Link
                href="/blog/website-accessibility-testing-guide"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Blog Post</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Website Accessibility Testing Guide
                </p>
              </Link>
              <Link
                href="/wcag/1-4-3-contrast-minimum"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  1.4.3 Contrast (Minimum)
                </p>
              </Link>
              <Link
                href="/industry/healthcare"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Healthcare Accessibility Compliance
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
