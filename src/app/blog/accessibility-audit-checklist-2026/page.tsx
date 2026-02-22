/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Accessibility Audit Checklist 2026 (Step-by-Step) | RatedWithAI",
  description:
    "Complete website accessibility audit checklist for 2026. Step-by-step guide covering automated testing, manual checks, WCAG compliance, and remediation prioritization.",
  keywords: [
    "website accessibility audit",
    "accessibility audit checklist",
    "WCAG audit",
    "web accessibility testing",
    "accessibility compliance audit",
    "a11y audit checklist",
  ],
  openGraph: {
    title: "Website Accessibility Audit Checklist 2026 (Step-by-Step)",
    description:
      "Complete website accessibility audit checklist covering automated testing, manual checks, WCAG compliance, and remediation prioritization.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function AccessibilityAuditChecklistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Website Accessibility Audit Checklist 2026",
    description:
      "Step-by-step guide to conducting a comprehensive website accessibility audit.",
    step: [
      {
        "@type": "HowToStep",
        name: "Automated Scanning",
        text: "Run automated accessibility scans on all key page templates.",
      },
      {
        "@type": "HowToStep",
        name: "Keyboard Testing",
        text: "Test all interactive elements for keyboard accessibility.",
      },
      {
        "@type": "HowToStep",
        name: "Screen Reader Testing",
        text: "Navigate the site using a screen reader to identify issues.",
      },
      {
        "@type": "HowToStep",
        name: "Visual Inspection",
        text: "Check color contrast, text sizing, and visual indicators.",
      },
      {
        "@type": "HowToStep",
        name: "Remediation Planning",
        text: "Prioritize and document fixes based on impact and effort.",
      },
    ],
    datePublished: "2026-02-21T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: "RatedWithAI",
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
              Actionable Checklist
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Website Accessibility Audit Checklist for 2026
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A comprehensive, step-by-step checklist for conducting a professional accessibility audit. Use this guide to systematically evaluate your website and create a clear remediation plan.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Introduction */}
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              A proper accessibility audit goes beyond running an automated scanner. It requires systematic testing across multiple dimensions: automated tools, keyboard navigation, screen reader compatibility, and visual inspection.
            </p>
            <p className="text-lg leading-relaxed">
              This checklist breaks down the audit process into manageable steps, so you can conduct a thorough assessment whether you're auditing your own site or a client's.
            </p>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <p className="font-semibold text-white mb-2">What you'll need:</p>
              <ul className="space-y-2 text-base text-slate-300">
                <li>• Access to all major page templates (homepage, product pages, checkout, forms, etc.)</li>
                <li>• A keyboard (laptop or external)</li>
                <li>• Screen reader (VoiceOver on Mac, NVDA on Windows)</li>
                <li>• Automated scanning tool like <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link></li>
                <li>• Browser developer tools</li>
                <li>• Spreadsheet or tracking system for findings</li>
              </ul>
            </div>
          </section>

          {/* Phase 1: Preparation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Phase 1: Audit Preparation
            </h2>
            <p className="text-lg leading-relaxed">
              Before you start testing, you need to define scope and set up your environment.
            </p>

            <div className="space-y-4 mt-6">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">📋 Preparation Checklist</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Identify key page templates</strong> — List all unique page types (homepage, category pages, product detail, checkout, contact form, blog post, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Map user journeys</strong> — Document critical paths like signup, purchase, and support request flows</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Gather existing documentation</strong> — Collect any previous audits, accessibility statements, or known issues</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Define conformance target</strong> — Typically WCAG 2.1 AA or WCAG 2.2 AA</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Set up testing environment</strong> — Clear browser cache, disable extensions that might interfere</span>
                  </li>
                  <li className="flex gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                    <span><strong>Create findings template</strong> — Spreadsheet with columns for issue, WCAG criterion, severity, location, and fix</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Phase 2: Automated Scanning */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Phase 2: Automated Scanning
            </h2>
            <p className="text-lg leading-relaxed">
              Automated tools catch 30-50% of accessibility issues instantly. They're excellent for identifying low-hanging fruit like missing alt text, contrast failures, and improperly labeled forms.
            </p>

            <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Run Your Initial Scan</h3>
              <p className="text-base text-slate-300 mb-4">
                Start with a comprehensive automated scan of your key pages. <Link href="/" className="text-sky-400 hover:text-sky-300 underline">RatedWithAI</Link> provides instant results with specific remediation guidance.
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Scan Your Site Free →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Automated Testing Checklist</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Scan homepage and landing pages</strong></span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Scan category/listing pages</strong></span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Scan detail pages</strong> (product, article, profile)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Scan all forms</strong> (contact, signup, checkout)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Scan login/authentication pages</strong></span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Scan error pages</strong> (404, server error)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Export and categorize results</strong> by WCAG criterion</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Note false positives</strong> for later review</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phase 3: Keyboard Testing */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Phase 3: Keyboard Accessibility Testing
            </h2>
            <p className="text-lg leading-relaxed">
              Put your mouse away. Everything on your site should be operable using only a keyboard. This is critical for users with motor disabilities and those using assistive devices.
            </p>

            <div className="rounded-xl bg-slate-950 p-4 mt-6">
              <p className="text-sm font-semibold text-slate-400 mb-2">Key commands:</p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li><kbd className="rounded bg-slate-700 px-2 py-0.5">Tab</kbd> — Move forward through elements</li>
                <li><kbd className="rounded bg-slate-700 px-2 py-0.5">Shift + Tab</kbd> — Move backward</li>
                <li><kbd className="rounded bg-slate-700 px-2 py-0.5">Enter</kbd> — Activate links and buttons</li>
                <li><kbd className="rounded bg-slate-700 px-2 py-0.5">Space</kbd> — Activate buttons, checkboxes</li>
                <li><kbd className="rounded bg-slate-700 px-2 py-0.5">Arrow keys</kbd> — Navigate within menus, sliders</li>
                <li><kbd className="rounded bg-slate-700 px-2 py-0.5">Escape</kbd> — Close modals, cancel</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Keyboard Testing Checklist</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Focus indicator visible</strong> — Can you always see which element is focused? (<Link href="/wcag/2-4-7-focus-visible" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.4.7</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Logical tab order</strong> — Does focus move in a sensible sequence? (<Link href="/wcag/2-4-3-focus-order" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.4.3</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>All interactive elements reachable</strong> — Can you Tab to every button, link, and form field? (<Link href="/wcag/2-1-1-keyboard" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.1.1</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>No keyboard traps</strong> — Can you Tab away from every element? (<Link href="/wcag/2-1-2-no-keyboard-trap" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.1.2</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Modals trap focus correctly</strong> — Focus stays within modal until closed</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Skip links present</strong> — "Skip to main content" link available</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Dropdown menus navigable</strong> — Can open, navigate, and close with keyboard</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Forms completable</strong> — Can fill and submit without a mouse</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Carousels/sliders controllable</strong> — Play/pause and navigation work with keyboard</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phase 4: Screen Reader Testing */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Phase 4: Screen Reader Testing
            </h2>
            <p className="text-lg leading-relaxed">
              Screen readers reveal whether your content is properly structured and labeled. Even 15 minutes of screen reader testing will uncover issues that automated tools miss.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="font-semibold text-white mb-2">Mac (VoiceOver)</p>
                <p className="text-sm text-slate-300">
                  Press <kbd className="rounded bg-slate-700 px-2 py-0.5 text-xs">Cmd + F5</kbd> to toggle. Use <kbd className="rounded bg-slate-700 px-2 py-0.5 text-xs">VO + Arrow keys</kbd> to navigate.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="font-semibold text-white mb-2">Windows (NVDA)</p>
                <p className="text-sm text-slate-300">
                  Free download. Press <kbd className="rounded bg-slate-700 px-2 py-0.5 text-xs">Insert</kbd> as the NVDA modifier key.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Screen Reader Testing Checklist</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Page title announced</strong> — Describes the page purpose (<Link href="/wcag/2-4-2-page-titled" className="text-sky-400 hover:text-sky-300 underline">WCAG 2.4.2</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Headings hierarchy correct</strong> — H1 → H2 → H3 structure announced properly</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Images have meaningful alt text</strong> — Not "image" or "IMG_2847.jpg" (<Link href="/wcag/1-1-1-non-text-content" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.1.1</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Links have clear purpose</strong> — Not just "click here" or "read more"</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Form fields labeled</strong> — Each input announces what it's for (<Link href="/wcag/1-3-1-info-and-relationships" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.3.1</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Buttons have accessible names</strong> — Not just icon descriptions</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Tables have headers</strong> — Row/column headers announced properly</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Landmarks present</strong> — Navigation, main, footer regions announced</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Error messages announced</strong> — Form errors are read when they appear</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Dynamic content announced</strong> — Live regions for updates, alerts</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phase 5: Visual Testing */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Phase 5: Visual Accessibility Testing
            </h2>
            <p className="text-lg leading-relaxed">
              Some accessibility issues are visible to the eye—you just need to know what to look for.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Visual Testing Checklist</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Color contrast passes</strong> — 4.5:1 for normal text, 3:1 for large text (<Link href="/wcag/1-4-3-contrast-minimum" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.4.3</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Color not sole indicator</strong> — Errors/status use more than just color (<Link href="/wcag/1-4-1-use-of-color" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.4.1</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>200% zoom works</strong> — Content reflows without horizontal scroll (<Link href="/wcag/1-4-4-resize-text" className="text-sky-400 hover:text-sky-300 underline">WCAG 1.4.4</Link>)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>400% zoom usable</strong> — Core content accessible at extreme zoom</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Touch targets large enough</strong> — At least 24×24 CSS pixels</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>No flashing content</strong> — Nothing flashes more than 3 times/second</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Motion can be paused</strong> — Carousels and animations have controls</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Text not in images</strong> — Real text used instead of image-text</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Focus indicator contrast</strong> — Focus outline meets 3:1 ratio</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phase 6: Cognitive & Content */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Phase 6: Cognitive & Content Accessibility
            </h2>
            <p className="text-lg leading-relaxed">
              These checks help users with cognitive disabilities, learning differences, and attention challenges.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Cognitive Accessibility Checklist</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Error messages clear</strong> — Explain what went wrong and how to fix</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Form instructions provided</strong> — Required fields and formats explained</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Consistent navigation</strong> — Same menus in same places across pages</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Help consistently located</strong> — Contact/support in same spot everywhere</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>No redundant entry</strong> — Previously entered info auto-filled</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Timeouts have warnings</strong> — Users can extend session time</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Plain language used</strong> — Complex jargon avoided or explained</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Password managers supported</strong> — Paste not disabled in auth fields</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phase 7: Documentation & Remediation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Phase 7: Documentation & Remediation Planning
            </h2>
            <p className="text-lg leading-relaxed">
              An audit is only useful if findings are documented and prioritized for action.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">📋 Documentation Checklist</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Catalog all issues</strong> — Each issue with location, WCAG criterion, and screenshot</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Assign severity levels</strong> — Critical (blocks users), Major (difficult), Minor (inconvenient)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Estimate effort</strong> — Quick fix (&lt;1 hour), Medium (1-4 hours), Major (&gt;4 hours)</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Prioritize by impact</strong> — Critical + quick fixes first</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Create remediation roadmap</strong> — Assign owners and deadlines</span>
                </li>
                <li className="flex gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800" readOnly />
                  <span><strong>Schedule follow-up audit</strong> — Re-test after fixes are deployed</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3">Prioritization Matrix</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-slate-900 p-4">
                  <p className="font-semibold text-emerald-300">🔥 Do First</p>
                  <p className="text-sm text-slate-300 mt-1">Critical severity + low effort</p>
                </div>
                <div className="rounded-lg bg-slate-900 p-4">
                  <p className="font-semibold text-amber-300">📅 Plan</p>
                  <p className="text-sm text-slate-300 mt-1">Critical severity + high effort</p>
                </div>
                <div className="rounded-lg bg-slate-900 p-4">
                  <p className="font-semibold text-sky-300">✅ Quick Wins</p>
                  <p className="text-sm text-slate-300 mt-1">Minor severity + low effort</p>
                </div>
                <div className="rounded-lg bg-slate-900 p-4">
                  <p className="font-semibold text-slate-400">📋 Backlog</p>
                  <p className="text-sm text-slate-300 mt-1">Minor severity + high effort</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Start Your Audit
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Get Your Baseline Accessibility Report
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Begin your audit with an AI-powered scan that identifies WCAG violations and provides clear remediation steps.
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
                href="/blog/how-to-check-website-ada-compliant"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Beginner Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  How to Check if Your Site is ADA Compliant
                </p>
              </Link>
              <Link
                href="/blog/how-to-fix-common-wcag-failures"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  How to Fix Common WCAG Failures
                </p>
              </Link>
              <Link
                href="/state/california"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">State Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  California ADA Compliance
                </p>
              </Link>
              <Link
                href="/wcag/2-1-1-keyboard"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">WCAG Criterion</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Keyboard Accessibility (2.1.1)
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
