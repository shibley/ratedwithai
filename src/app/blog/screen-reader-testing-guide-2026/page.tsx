/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Screen Reader Testing Guide 2026: How to Test Your Website with NVDA, JAWS, and VoiceOver | RatedWithAI",
  description:
    "Complete guide to screen reader testing for web accessibility. Learn how to set up and use NVDA, JAWS, and VoiceOver to test your website, with keyboard shortcuts, testing checklists, and common issues to catch. Based on WebAIM Survey #10 data from 1,539 real screen reader users.",
  openGraph: {
    title:
      "Screen Reader Testing Guide 2026: How to Test Your Website with NVDA, JAWS, and VoiceOver",
    description:
      "Learn how to test your website with the screen readers your users actually use. NVDA, JAWS, VoiceOver setup guides, keyboard shortcuts, and a complete testing checklist for WCAG compliance.",
    type: "article",
    publishedTime: "2026-03-03T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "screen reader testing",
    "screen reader testing guide",
    "nvda testing",
    "jaws screen reader testing",
    "voiceover testing",
    "test website screen reader",
    "nvda keyboard shortcuts",
    "jaws keyboard shortcuts",
    "voiceover keyboard shortcuts",
    "accessibility testing screen reader",
    "wcag screen reader testing",
    "nvda tutorial",
    "screen reader testing checklist",
    "how to test with nvda",
    "nvda vs jaws",
    "screen reader accessibility",
    "web accessibility testing",
    "screen reader testing 2026",
    "ada screen reader testing",
    "screen reader web testing",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/screen-reader-testing-guide-2026",
  },
};

export default function ScreenReaderTestingGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Screen Reader Testing Guide 2026: How to Test Your Website with NVDA, JAWS, and VoiceOver",
    description:
      "Complete guide to screen reader testing for web accessibility. Setup guides for NVDA, JAWS, and VoiceOver, essential keyboard shortcuts, testing methodology, common issues, and a comprehensive testing checklist.",
    datePublished: "2026-03-03T00:00:00.000Z",
    dateModified: "2026-03-03T00:00:00.000Z",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which screen reader should I use for testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For comprehensive coverage, test with at least two screen readers. Start with NVDA (free, Windows) paired with Chrome — the most common screen reader/browser combination used by 21.3% of real users according to WebAIM's 2024 survey. Add VoiceOver with Safari for macOS/iOS testing. If your audience includes enterprise users, test with JAWS and Chrome (the #1 combination at 24.7%). NVDA alone catches approximately 80% of screen reader accessibility issues.",
        },
      },
      {
        "@type": "Question",
        name: "Is NVDA or JAWS better for accessibility testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both are excellent but serve different purposes. NVDA is free, open-source, and ideal for developers — it's precise at catching code-level issues like missing ARIA attributes, broken heading hierarchies, and form labeling problems. JAWS ($90/year or $1,000 perpetual license) is better at simulating the real-world user experience, especially for complex web applications. WebAIM's Survey #10 shows JAWS at 40.5% primary usage and NVDA at 37.7%, so testing with both ensures the broadest coverage.",
        },
      },
      {
        "@type": "Question",
        name: "How do I set up NVDA for the first time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Download NVDA free from nvaccess.org, run the installer, and choose 'Install on this computer.' On first launch, a Welcome dialog appears — check 'Use Caps Lock as an NVDA modifier key' for easier testing. Open Chrome or Firefox, navigate to any website, and NVDA will start reading. Press Insert+Space to toggle between Browse Mode (for reading) and Focus Mode (for interacting with forms). Press Insert+F7 to see a list of all links, headings, and landmarks on the page — this is your most important testing tool.",
        },
      },
      {
        "@type": "Question",
        name: "What are the essential NVDA keyboard shortcuts for testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most important NVDA shortcuts: Insert+Space (toggle browse/focus mode), Insert+F7 (elements list — links, headings, landmarks), H/Shift+H (next/previous heading), K/Shift+K (next/previous link), F/Shift+F (next/previous form field), D/Shift+D (next/previous landmark), T/Shift+T (next/previous table), Insert+F5 (elements list for forms), Tab (next focusable element), Insert+Down Arrow (read from cursor), and Ctrl (stop speech). Single-letter navigation only works in Browse Mode.",
        },
      },
      {
        "@type": "Question",
        name: "How do I test with VoiceOver on Mac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Press Cmd+F5 to turn VoiceOver on. Use Safari for best compatibility. Before testing, enable full keyboard access in Safari Preferences > Advanced > Accessibility > 'Press Tab to highlight each item on a webpage.' The VoiceOver modifier (VO) is Control+Option. Navigate with VO+Right/Left Arrow, use the Web Rotor (VO+U) to browse headings, links, landmarks, and form controls. Press VO+Shift+Down Arrow to interact with groups/frames, and VO+Shift+Up Arrow to stop interacting. Tab moves between focusable elements.",
        },
      },
      {
        "@type": "Question",
        name: "What should I test with a screen reader?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Test these critical areas: (1) Page structure — are headings in logical order (h1→h2→h3)? (2) Navigation — can you reach all menu items and skip to main content? (3) Images — do all informational images have descriptive alt text? (4) Forms — are all inputs labeled, errors announced, and required fields indicated? (5) Links — do link texts make sense out of context (no 'click here')? (6) Dynamic content — are ARIA live regions announcing updates? (7) Keyboard traps — can you Tab through everything without getting stuck? (8) Tables — do data tables have proper headers? (9) Modals — does focus move to and trap inside dialogs?",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to test on mobile screen readers too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WebAIM's Survey #10 found 91.3% of screen reader users use a screen reader on mobile devices, with VoiceOver on iOS dominant at 70.6%. TalkBack on Android is used by 26.4%. Mobile testing is especially important for touch interactions, responsive layouts, and native app experiences. At minimum, test with VoiceOver on an iPhone — it's the mobile screen reader your users are most likely to encounter. Key gestures: swipe right/left to navigate elements, double-tap to activate, rotor (two-finger rotate) to change navigation mode.",
        },
      },
      {
        "@type": "Question",
        name: "Can automated testing replace screen reader testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Automated tools like RatedWithAI, axe-core, and Lighthouse catch approximately 30-40% of WCAG issues — primarily code-level problems like missing alt text, low contrast, and invalid ARIA attributes. Screen reader testing catches the other 60-70%: whether alt text is actually meaningful, whether the reading order makes sense, whether dynamic content updates are announced, whether custom widgets are actually usable, and whether the overall experience is navigable. Use automated tools as your first pass, then validate with screen readers for the complete picture.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300">
        <Header />
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-sky-400">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-sky-400">
              Blog
            </Link>{" "}
            / Screen Reader Testing Guide 2026
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 ring-1 ring-sky-500/20">
                Developer Guide
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                Testing
              </span>
              <time className="text-xs text-slate-500" dateTime="2026-03-03">
                March 3, 2026
              </time>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Screen Reader Testing Guide 2026: How to Test Your Website with NVDA, JAWS, and VoiceOver
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              65.6% of screen reader users rely on NVDA, 60.5% use JAWS, and 43.9% use VoiceOver — most use multiple screen readers. If you're building websites and never testing with one, you're shipping inaccessible code to millions of users. This guide teaches you exactly how to set up, navigate, and test with every major screen reader, step by step.
            </p>
          </header>

          {/* Key stats banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { stat: "1,539", label: "Screen reader users surveyed" },
              { stat: "65.6%", label: "Use NVDA regularly" },
              { stat: "91.3%", label: "Use mobile screen readers" },
              { stat: "71.6%", label: "Use 2+ screen readers" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-4 text-center"
              >
                <p className="text-2xl font-bold text-sky-400">{item.stat}</p>
                <p className="text-xs text-slate-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* TOC */}
          <nav className="mb-12 rounded-xl border border-slate-700/60 bg-slate-900/40 p-6">
            <h2 className="text-lg font-bold text-white mb-4">
              📑 Table of Contents
            </h2>
            <ol className="space-y-2 text-sm text-slate-400 list-decimal list-inside">
              <li>
                <a href="#why-test-with-screen-readers" className="hover:text-sky-400">
                  Why You Need to Test with Screen Readers
                </a>
              </li>
              <li>
                <a href="#which-screen-readers" className="hover:text-sky-400">
                  Which Screen Readers to Test With (Data-Driven)
                </a>
              </li>
              <li>
                <a href="#nvda-setup-guide" className="hover:text-sky-400">
                  NVDA Setup and Testing Guide (Windows, Free)
                </a>
              </li>
              <li>
                <a href="#nvda-shortcuts" className="hover:text-sky-400">
                  Essential NVDA Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a href="#jaws-setup-guide" className="hover:text-sky-400">
                  JAWS Setup and Testing Guide (Windows, Paid)
                </a>
              </li>
              <li>
                <a href="#jaws-shortcuts" className="hover:text-sky-400">
                  Essential JAWS Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a href="#voiceover-setup-guide" className="hover:text-sky-400">
                  VoiceOver Setup and Testing Guide (macOS/iOS, Free)
                </a>
              </li>
              <li>
                <a href="#voiceover-shortcuts" className="hover:text-sky-400">
                  Essential VoiceOver Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a href="#narrator-talkback" className="hover:text-sky-400">
                  Narrator (Windows) and TalkBack (Android) Quick Start
                </a>
              </li>
              <li>
                <a href="#browser-pairings" className="hover:text-sky-400">
                  Screen Reader + Browser Pairings That Matter
                </a>
              </li>
              <li>
                <a href="#testing-methodology" className="hover:text-sky-400">
                  Screen Reader Testing Methodology: Step-by-Step
                </a>
              </li>
              <li>
                <a href="#common-issues" className="hover:text-sky-400">
                  15 Common Issues Screen Reader Testing Reveals
                </a>
              </li>
              <li>
                <a href="#testing-checklist" className="hover:text-sky-400">
                  Complete Screen Reader Testing Checklist
                </a>
              </li>
              <li>
                <a href="#automated-vs-manual" className="hover:text-sky-400">
                  Automated Testing vs. Screen Reader Testing
                </a>
              </li>
              <li>
                <a href="#mobile-testing" className="hover:text-sky-400">
                  Mobile Screen Reader Testing
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-400">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: Why Test with Screen Readers */}
          <section id="why-test-with-screen-readers" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              1. Why You Need to Test with Screen Readers
            </h2>
            <p className="mb-4">
              Automated accessibility testing tools — including{" "}
              <Link href="/" className="text-sky-400 hover:underline">
                RatedWithAI
              </Link>
              , axe-core, and Lighthouse — can detect approximately{" "}
              <strong className="text-white">30-40% of WCAG violations</strong> automatically.
              They excel at catching missing alt text, insufficient color contrast, invalid ARIA
              attributes, and broken heading hierarchies. But the majority of accessibility issues
              can only be found by experiencing your site the way screen reader users do.
            </p>
            <p className="mb-4">
              According to the <strong className="text-white">WebAIM Screen Reader User Survey #10</strong> (December 2023 – January 2024,
              1,539 respondents), 89.9% of screen reader users have a disability, with 76.6% reporting blindness as their
              primary disability. These users navigate entirely by keyboard and audio output — if your site
              doesn't work without a mouse and without seeing the screen, it doesn't work for them.
            </p>
            <p className="mb-6">
              Screen reader testing reveals issues that no automated tool can catch:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Reading order doesn't match visual order — content announced in a confusing sequence",
                "Alt text is present but meaningless ('image1.jpg', 'photo', 'banner') — technically passes automation, completely fails users",
                "Custom widgets (dropdowns, date pickers, accordions) look interactive but are completely invisible or inoperable to screen readers",
                "Dynamic content updates (notifications, form errors, live feeds) happen silently — no ARIA live regions announce them",
                "Focus management is broken — modals don't trap focus, page transitions don't reset focus position",
                "Heading structure is technically valid but semantically wrong — screen readers use headings as the primary way to scan page content",
                "Form error messages exist visually but aren't programmatically associated with their fields",
                "Tables are used for layout but announced as data tables, creating a confusing experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-red-400">⚠️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 mb-6">
              <p className="text-amber-300 font-semibold mb-2">
                💡 The Developer Reality Check
              </p>
              <p className="text-slate-300">
                Turn off your monitor, launch NVDA, and try to complete one task on your website —
                fill out a form, navigate to a product page, or complete a checkout. If you can't do
                it in under 3 minutes, neither can your screen reader users. Most developers who try
                this for the first time are shocked at how broken the experience is.
              </p>
            </div>
          </section>

          {/* Section 2: Which Screen Readers */}
          <section id="which-screen-readers" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              2. Which Screen Readers to Test With (Data-Driven)
            </h2>
            <p className="mb-6">
              Don't guess — let the data guide your testing priorities.
              WebAIM's Survey #10 provides the most comprehensive picture of real screen reader usage.
              Here's what 1,539 actual screen reader users told us:
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Primary Desktop Screen Reader Market Share</h3>
            <div className="space-y-3 mb-8">
              {[
                { name: "JAWS", share: "40.5%", color: "bg-sky-500", width: "w-[81%]", note: "Freedom Scientific — $90/year or ~$1,000 perpetual" },
                { name: "NVDA", share: "37.7%", color: "bg-emerald-500", width: "w-[75%]", note: "NV Access — Free, open source" },
                { name: "VoiceOver", share: "9.7%", color: "bg-violet-500", width: "w-[19%]", note: "Apple — Built into macOS/iOS, free" },
                { name: "Dolphin SuperNova", share: "3.7%", color: "bg-orange-500", width: "w-[7%]", note: "Dolphin — ~$800, UK-based" },
                { name: "ZoomText/Fusion", share: "2.7%", color: "bg-rose-500", width: "w-[5%]", note: "Freedom Scientific — $699+" },
                { name: "Orca", share: "2.4%", color: "bg-teal-500", width: "w-[5%]", note: "GNOME — Free, Linux" },
                { name: "Narrator", share: "0.7%", color: "bg-blue-500", width: "w-[1%]", note: "Microsoft — Built into Windows, free" },
              ].map((sr) => (
                <div key={sr.name} className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{sr.name}</span>
                    <span className="text-sky-400 font-bold">{sr.share}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                    <div className={`${sr.color} h-2 rounded-full ${sr.width}`} />
                  </div>
                  <p className="text-xs text-slate-500">{sr.note}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Regional Differences Matter</h3>
            <p className="mb-4">
              Your audience's geography determines which screen reader matters most:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "North America: JAWS dominates (55.5% vs. NVDA 24.0%) — enterprise IT departments buy JAWS licenses",
                "Europe: NVDA leads (37.2% vs. JAWS 29.7%) — cost sensitivity and open-source culture",
                "Asia: NVDA dominant (70.8% vs. JAWS 22.9%) — price sensitivity, NVDA's localization support",
                "Africa/Middle East: NVDA overwhelming (69.9% vs. JAWS 23.3%) — free is essential",
                "Australia: JAWS slightly ahead (45.8% vs. NVDA 37.5%)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">🌍</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">The Minimum Testing Matrix</h3>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 mb-6">
              <p className="text-emerald-300 font-semibold mb-3">
                ✅ Recommended Testing Combinations (covers 90%+ of users)
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">1.</span>
                  <span><strong className="text-white">NVDA + Chrome</strong> (Windows) — 21.3% of users, free, catches most code issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">2.</span>
                  <span><strong className="text-white">JAWS + Chrome</strong> (Windows) — 24.7% of users, the #1 combination by market share</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">3.</span>
                  <span><strong className="text-white">VoiceOver + Safari</strong> (macOS) — 7.0% desktop, plus 70.6% of all mobile screen reader users on iOS</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-3">
                If you can only test with one: use <strong className="text-white">NVDA + Chrome</strong>. It's free, widely used, and catches the vast majority of issues.
              </p>
            </div>
          </section>

          {/* Section 3: NVDA Setup */}
          <section id="nvda-setup-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              3. NVDA Setup and Testing Guide (Windows, Free)
            </h2>
            <p className="mb-6">
              <strong className="text-white">NVDA (NonVisual Desktop Access)</strong> is the best screen reader for developers to start with.
              It's free, open-source, actively maintained by NV Access, and used regularly by 65.6% of screen reader users.
              NVDA has two modes you need to understand:
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Installation (5 Minutes)</h3>
            <ol className="space-y-3 mb-6 list-decimal list-inside text-slate-300">
              <li>Download from <strong className="text-white">nvaccess.org/download</strong> (free, 40MB)</li>
              <li>Run the installer → select <strong className="text-white">"Install NVDA on this computer"</strong></li>
              <li>On the Welcome dialog:
                <ul className="ml-6 mt-2 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400">•</span>
                    Check <strong className="text-white">"Use Caps Lock as an NVDA modifier key"</strong> — much easier than Insert on laptop keyboards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400">•</span>
                    Uncheck "Start NVDA after I log on" unless you want it running always
                  </li>
                </ul>
              </li>
              <li>Launch NVDA → an icon appears in the system tray</li>
              <li>Open <strong className="text-white">Chrome</strong> or <strong className="text-white">Firefox</strong> and navigate to your site</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">Understanding Browse Mode vs. Focus Mode</h3>
            <p className="mb-4">
              This is the single most important concept in NVDA testing.
              If you don't understand these two modes, you'll think NVDA is broken:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">
                <p className="text-sky-300 font-semibold mb-2">📖 Browse Mode (Default)</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Read and navigate web content</li>
                  <li>• Single-letter shortcuts work (H for heading, K for link)</li>
                  <li>• Arrow keys move through content linearly</li>
                  <li>• Content is presented as a flat text document</li>
                  <li>• You CANNOT type in text fields</li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                <p className="text-emerald-300 font-semibold mb-2">✏️ Focus Mode (For Interactions)</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Interact with form controls, menus, widgets</li>
                  <li>• Single-letter shortcuts are disabled</li>
                  <li>• Keystrokes go directly to the web page</li>
                  <li>• You CAN type in text fields</li>
                  <li>• Automatically enters when you Tab to a form field</li>
                </ul>
              </div>
            </div>
            <p className="mb-4">
              Toggle between modes with <strong className="text-white">NVDA+Space</strong> (Insert+Space or CapsLock+Space).
              NVDA plays a distinctive sound when switching — a low tone for Browse Mode and a high tone for Focus Mode.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Recommended NVDA Settings for Testing</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Speech rate: NVDA Preferences → Settings → Speech → Rate slider. Start at 40-50% speed while learning; experienced testers use 70-80%",
                "Install Focus Highlight add-on: Red outline = Browse Mode, Blue outline = Focus Mode — essential visual feedback for sighted testers",
                "Enable Speech Viewer: NVDA menu → Tools → Speech Viewer — shows everything NVDA says in a text window, great for documentation",
                "Set punctuation level to 'All': NVDA → Settings → Speech → Punctuation/Symbol Level → All — hear symbols that might indicate ARIA roles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">⚙️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
              <p className="text-amber-300 font-semibold mb-2">
                ⚠️ Critical NVDA Rule
              </p>
              <p className="text-slate-300">
                Never use your mouse while testing with NVDA. Screen reader users don't have a mouse.
                The moment you click somewhere, you've broken the test. Navigate entirely with the keyboard.
                If you get stuck, press <strong className="text-white">Ctrl</strong> to stop speech, then
                <strong className="text-white"> NVDA+Space</strong> to ensure you're in Browse Mode, then use
                <strong className="text-white"> Ctrl+Home</strong> to return to the top of the page.
              </p>
            </div>
          </section>

          {/* Section 4: NVDA Shortcuts */}
          <section id="nvda-shortcuts" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              4. Essential NVDA Keyboard Shortcuts
            </h2>
            <p className="mb-6">
              The NVDA modifier key (shown as <strong className="text-white">NVDA</strong> below) is either Insert or CapsLock, depending on your settings.
              Single-letter shortcuts only work in Browse Mode.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">General Navigation</h3>
            <div className="space-y-2 mb-8">
              {[
                { keys: "NVDA + Space", action: "Toggle Browse / Focus Mode — the most important shortcut" },
                { keys: "↓ / ↑ Arrow", action: "Move to next / previous line in Browse Mode" },
                { keys: "Tab / Shift+Tab", action: "Next / previous focusable element (links, buttons, form fields)" },
                { keys: "Enter", action: "Activate link or button" },
                { keys: "NVDA + ↓ Arrow", action: "Read from current position to end of page ('say all')" },
                { keys: "Ctrl", action: "Stop speaking immediately" },
                { keys: "NVDA + F7", action: "Elements list — browse all links, headings, landmarks, and form fields" },
                { keys: "Ctrl + Home", action: "Go to top of page" },
                { keys: "NVDA + Q", action: "Quit NVDA" },
              ].map((shortcut) => (
                <div
                  key={shortcut.keys}
                  className="flex items-start gap-4 rounded-lg border border-slate-700/60 bg-slate-900/40 p-3"
                >
                  <code className="shrink-0 rounded bg-slate-800 px-2 py-1 text-sm font-mono text-sky-400 min-w-[160px]">
                    {shortcut.keys}
                  </code>
                  <span className="text-slate-300 text-sm">{shortcut.action}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Quick Navigation Keys (Browse Mode Only)</h3>
            <p className="mb-4 text-sm text-slate-400">
              Press the key to move forward; hold Shift + key to move backward.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {[
                { key: "H", action: "Next heading" },
                { key: "1-6", action: "Next heading at level 1-6" },
                { key: "K", action: "Next link" },
                { key: "U", action: "Next unvisited link" },
                { key: "V", action: "Next visited link" },
                { key: "F", action: "Next form field" },
                { key: "B", action: "Next button" },
                { key: "E", action: "Next edit field (text input)" },
                { key: "T", action: "Next table" },
                { key: "D", action: "Next landmark/region" },
                { key: "L", action: "Next list" },
                { key: "I", action: "Next list item" },
                { key: "G", action: "Next graphic (image)" },
                { key: "N", action: "Next block of text not a link" },
                { key: "R", action: "Next radio button" },
                { key: "X", action: "Next checkbox" },
              ].map((shortcut) => (
                <div
                  key={shortcut.key}
                  className="flex items-center gap-3 rounded-lg border border-slate-700/60 bg-slate-900/40 p-2"
                >
                  <code className="shrink-0 rounded bg-slate-800 px-2 py-0.5 text-sm font-mono text-emerald-400 w-8 text-center">
                    {shortcut.key}
                  </code>
                  <span className="text-slate-300 text-sm">{shortcut.action}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Table Navigation (Inside a Table)</h3>
            <div className="space-y-2 mb-6">
              {[
                { keys: "Ctrl + Alt + → Arrow", action: "Next column (move right)" },
                { keys: "Ctrl + Alt + ← Arrow", action: "Previous column (move left)" },
                { keys: "Ctrl + Alt + ↓ Arrow", action: "Next row (move down)" },
                { keys: "Ctrl + Alt + ↑ Arrow", action: "Previous row (move up)" },
              ].map((shortcut) => (
                <div
                  key={shortcut.keys}
                  className="flex items-start gap-4 rounded-lg border border-slate-700/60 bg-slate-900/40 p-3"
                >
                  <code className="shrink-0 rounded bg-slate-800 px-2 py-1 text-sm font-mono text-sky-400 min-w-[200px]">
                    {shortcut.keys}
                  </code>
                  <span className="text-slate-300 text-sm">{shortcut.action}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: JAWS Setup */}
          <section id="jaws-setup-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              5. JAWS Setup and Testing Guide (Windows, Paid)
            </h2>
            <p className="mb-4">
              <strong className="text-white">JAWS (Job Access With Speech)</strong> by Freedom Scientific is the
              most-used primary screen reader at 40.5% market share, especially dominant in
              North American enterprises (55.5%). JAWS costs $90/year (Home Annual) or approximately
              $1,000 for a perpetual Professional license — but there's a way to test for free.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Getting JAWS for Testing</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Free 40-minute mode: Download JAWS from freedomscientific.com — it runs in full-featured demo mode for 40 minutes per restart. Restart your computer (or JAWS) to get another 40 minutes. Sufficient for testing sessions.",
                "Home Annual license: $90/year — best option for developers who test regularly",
                "Professional license: ~$1,000 one-time — includes enterprise features, network licensing",
                "Trial: Contact Freedom Scientific for a full 30-day trial license",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">💰</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">JAWS Key Concepts</h3>
            <p className="mb-4">
              JAWS works similarly to NVDA but with some important differences:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "JAWS modifier key is Insert (not configurable to CapsLock like NVDA)",
                "Virtual PC Cursor = NVDA's Browse Mode — arrow keys read through content",
                "Forms Mode = NVDA's Focus Mode — activated when you press Enter on a form field",
                "JAWS is generally better at announcing ARIA roles and states in complex web applications",
                "JAWS has built-in verbosity settings: Beginner (most detail) through Advanced (minimal) — set to Beginner for testing",
                "JAWS + Chrome is the #1 screen reader/browser combination at 24.7% market share",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">📌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-6">
              <p className="text-sky-300 font-semibold mb-2">
                🔑 JAWS vs. NVDA for Testing: When to Use Each
              </p>
              <p className="text-slate-300 mb-3">
                <strong className="text-white">Use NVDA</strong> for initial development and code-level testing — it's stricter about
                standards compliance and will catch more technical errors. It's also free, so every team member can use it.
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Use JAWS</strong> for final user-experience validation, especially if your audience includes
                enterprise or government users. JAWS is more forgiving of non-standard markup (which means
                something that "works" in JAWS might still fail in NVDA). Test with both to catch the full range of issues.
              </p>
            </div>
          </section>

          {/* Section 6: JAWS Shortcuts */}
          <section id="jaws-shortcuts" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              6. Essential JAWS Keyboard Shortcuts
            </h2>
            <p className="mb-6">
              JAWS shortcuts are similar to NVDA in many cases. The JAWS modifier key is always
              <strong className="text-white"> Insert</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">General Navigation</h3>
            <div className="space-y-2 mb-8">
              {[
                { keys: "Insert + ↓ Arrow", action: "Read from current position ('say all')" },
                { keys: "Insert + F6", action: "Heading list — browse all headings on the page" },
                { keys: "Insert + F7", action: "Links list — browse all links on the page" },
                { keys: "Insert + F5", action: "Form fields list — all form controls" },
                { keys: "Insert + F3", action: "Virtual HTML features — landmarks, headings, links, form fields, buttons, tables" },
                { keys: "Insert + Space", action: "Toggle Virtual PC Cursor mode" },
                { keys: "Enter", action: "Enter Forms Mode (on a form field)" },
                { keys: "Numpad +", action: "Exit Forms Mode (return to Virtual PC Cursor)" },
                { keys: "Insert + Z", action: "Toggle JAWS verbosity level" },
                { keys: "Ctrl", action: "Stop speech" },
                { keys: "Insert + F4", action: "Quit JAWS" },
              ].map((shortcut) => (
                <div
                  key={shortcut.keys}
                  className="flex items-start gap-4 rounded-lg border border-slate-700/60 bg-slate-900/40 p-3"
                >
                  <code className="shrink-0 rounded bg-slate-800 px-2 py-1 text-sm font-mono text-sky-400 min-w-[160px]">
                    {shortcut.keys}
                  </code>
                  <span className="text-slate-300 text-sm">{shortcut.action}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Quick Navigation Keys (Same as NVDA)</h3>
            <p className="mb-4">
              JAWS uses the same single-letter navigation keys as NVDA in Virtual PC Cursor mode:
              <strong className="text-white"> H</strong> for headings,
              <strong className="text-white"> K</strong> for links,
              <strong className="text-white"> F</strong> for form fields,
              <strong className="text-white"> T</strong> for tables,
              <strong className="text-white"> D</strong> for landmarks,
              <strong className="text-white"> B</strong> for buttons. Add Shift to move backward.
            </p>
          </section>

          {/* Section 7: VoiceOver Setup */}
          <section id="voiceover-setup-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              7. VoiceOver Setup and Testing Guide (macOS/iOS, Free)
            </h2>
            <p className="mb-4">
              <strong className="text-white">VoiceOver</strong> is Apple's built-in screen reader, available on macOS,
              iOS, iPadOS, watchOS, and tvOS. It's free with every Apple device and used regularly by
              43.9% of screen reader users. While only 9.7% use it as their primary desktop screen reader,
              it dominates mobile at <strong className="text-white">70.6% of all mobile screen reader usage</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">macOS Setup (2 Minutes)</h3>
            <ol className="space-y-3 mb-6 list-decimal list-inside text-slate-300">
              <li>Press <strong className="text-white">Cmd + F5</strong> to toggle VoiceOver on/off</li>
              <li>The VoiceOver modifier (called <strong className="text-white">VO</strong>) is <strong className="text-white">Control + Option</strong></li>
              <li>
                <strong className="text-white">Critical step:</strong> Enable full keyboard access in Safari →
                Preferences → Advanced → Accessibility → check{" "}
                <strong className="text-white">"Press Tab to highlight each item on a webpage"</strong>
              </li>
              <li>Use <strong className="text-white">Safari</strong> for testing — VoiceOver works best with Safari due to Apple's tight integration</li>
              <li>VoiceOver will start narrating everything. Press <strong className="text-white">Ctrl</strong> to pause speech at any time</li>
            </ol>

            <h3 className="text-xl font-bold text-white mb-4">VoiceOver Key Concepts</h3>
            <ul className="space-y-2 mb-6">
              {[
                "VO (VoiceOver modifier) = Control + Option — you'll use this with almost every command",
                "Web Rotor (VO+U): The single most powerful VoiceOver feature — opens a heads-up display to browse headings, links, landmarks, form controls, tables, and more. Use Left/Right arrows to switch categories.",
                "Interact (VO+Shift+↓ Arrow): Enters a group or container to navigate its contents — essential for complex layouts, iframes, and web apps",
                "Stop Interacting (VO+Shift+↑ Arrow): Exits the current group — moves up one level in the element hierarchy",
                "Unlike NVDA/JAWS, VoiceOver doesn't have distinct Browse/Focus modes — it uses a single navigation model",
                "VoiceOver with Chrome is not as well-supported as VoiceOver with Safari — always test VoiceOver in Safari",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-violet-400">🍎</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 8: VoiceOver Shortcuts */}
          <section id="voiceover-shortcuts" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              8. Essential VoiceOver Keyboard Shortcuts
            </h2>
            <p className="mb-6">
              VO below means <strong className="text-white">Control + Option</strong>. All shortcuts assume macOS with Safari.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <div className="space-y-2 mb-8">
              {[
                { keys: "Cmd + F5", action: "Toggle VoiceOver on/off" },
                { keys: "VO + → / ← Arrow", action: "Move to next / previous element" },
                { keys: "VO + A", action: "Read from current position ('read all')" },
                { keys: "VO + U", action: "Open Web Rotor — browse headings, links, landmarks, forms" },
                { keys: "VO + Shift + ↓", action: "Interact with (enter) a group/container" },
                { keys: "VO + Shift + ↑", action: "Stop interacting (exit group/container)" },
                { keys: "VO + Space", action: "Activate (click) the current element" },
                { keys: "Tab / Shift+Tab", action: "Next / previous focusable element" },
                { keys: "Ctrl", action: "Pause/resume speech" },
                { keys: "VO + H", action: "VoiceOver Help menu — lists all available commands" },
                { keys: "VO + Cmd + H", action: "Next heading (add Shift for previous)" },
                { keys: "VO + Cmd + L", action: "Next link (add Shift for previous)" },
                { keys: "VO + Cmd + J", action: "Next form control (add Shift for previous)" },
                { keys: "VO + Cmd + T", action: "Next table (add Shift for previous)" },
              ].map((shortcut) => (
                <div
                  key={shortcut.keys}
                  className="flex items-start gap-4 rounded-lg border border-slate-700/60 bg-slate-900/40 p-3"
                >
                  <code className="shrink-0 rounded bg-slate-800 px-2 py-1 text-sm font-mono text-violet-400 min-w-[200px]">
                    {shortcut.keys}
                  </code>
                  <span className="text-slate-300 text-sm">{shortcut.action}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Web Rotor Categories</h3>
            <p className="mb-4">
              After pressing <strong className="text-white">VO+U</strong>, use Left/Right arrows to switch between:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {[
                "Headings", "Links", "Form Controls",
                "Tables", "Landmarks", "Web Spots",
                "Visited Links", "Non-Visited Links", "Images",
              ].map((category) => (
                <div
                  key={category}
                  className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-3 text-center text-sm text-violet-300"
                >
                  {category}
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Narrator + TalkBack */}
          <section id="narrator-talkback" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              9. Narrator (Windows) and TalkBack (Android) Quick Start
            </h2>

            <h3 className="text-xl font-bold text-white mb-4">Windows Narrator</h3>
            <p className="mb-4">
              While only 0.7% of users rely on Narrator as their primary screen reader,{" "}
              <strong className="text-white">37.3% use it regularly</strong> — often as a quick-check tool. It's
              built into every Windows installation since Windows 10 and has improved dramatically in recent versions.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Toggle: Windows key + Ctrl + Enter",
                "Narrator key: CapsLock or Insert",
                "Read from cursor: Narrator + ↓ Arrow",
                "Next heading: Narrator + H",
                "Element list: Narrator + F6 (headings), F7 (links)",
                "Best paired with Microsoft Edge for compatibility",
                "Scan Mode: Toggle with CapsLock + Space — similar to NVDA's Browse Mode",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-400">🪟</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Android TalkBack</h3>
            <p className="mb-4">
              TalkBack is used by <strong className="text-white">26.4% of mobile screen reader users</strong>. If your site or
              app serves Android users, TalkBack testing is essential.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Enable: Settings → Accessibility → TalkBack → On",
                "Navigate: Swipe right (next element), swipe left (previous element)",
                "Activate: Double-tap anywhere on screen",
                "Scroll: Two-finger swipe up/down",
                "Reading controls (rotor equivalent): Swipe up/down to change navigation mode (headings, links, characters)",
                "Quick menu: Three-finger tap — access TalkBack settings during testing",
                "Explore by touch: Drag your finger across the screen — TalkBack reads what's under your finger",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-400">🤖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 10: Browser Pairings */}
          <section id="browser-pairings" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              10. Screen Reader + Browser Pairings That Matter
            </h2>
            <p className="mb-6">
              Not all screen reader and browser combinations work equally well.
              Testing with the wrong pairing can give you false positives or false negatives.
              Based on WebAIM Survey #10 real-world usage data:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { combo: "JAWS + Chrome", share: "24.7%", priority: "🔴 Must test", notes: "The #1 combination. Enterprise standard. Best ARIA support." },
                { combo: "NVDA + Chrome", share: "21.3%", priority: "🔴 Must test", notes: "Free + widely used. Strict standards compliance. Developer favorite." },
                { combo: "JAWS + Edge", share: "11.4%", priority: "🟡 Should test", notes: "Growing as enterprises adopt Edge. Edge = Chromium, similar to Chrome." },
                { combo: "NVDA + Firefox", share: "10.0%", priority: "🟡 Should test", notes: "Some ARIA features work differently in Firefox. Good diversity testing." },
                { combo: "VoiceOver + Safari", share: "7.0%", priority: "🔴 Must test", notes: "Only way to test macOS + the dominant mobile screen reader. Safari-only features." },
                { combo: "NVDA + Edge", share: "5.0%", priority: "🟢 Optional", notes: "Edge is Chromium-based; results will mirror NVDA + Chrome in most cases." },
                { combo: "JAWS + Firefox", share: "2.6%", priority: "🟢 Optional", notes: "Low usage, declining. Firefox/JAWS combination has some rendering differences." },
                { combo: "Orca + Firefox", share: "1.9%", priority: "🟢 Linux only", notes: "The primary screen reader for Linux desktop users. Test if Linux audience." },
              ].map((pair) => (
                <div
                  key={pair.combo}
                  className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{pair.combo}</span>
                    <span className="text-sky-400 font-bold text-sm">{pair.share}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">{pair.priority}</span>
                    <span className="text-sm text-slate-400">{pair.notes}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
              <p className="text-amber-300 font-semibold mb-2">
                ⚠️ Don't Test VoiceOver with Chrome
              </p>
              <p className="text-slate-300">
                While VoiceOver technically works with Chrome on macOS, Apple's support for Chrome with
                VoiceOver is inconsistent. You'll encounter bugs and behaviors that don't represent real
                user experiences. VoiceOver was designed for Safari — test it in Safari. If you need to
                test Chrome, use NVDA or JAWS on Windows.
              </p>
            </div>
          </section>

          {/* Section 11: Testing Methodology */}
          <section id="testing-methodology" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              11. Screen Reader Testing Methodology: Step-by-Step
            </h2>
            <p className="mb-6">
              Follow this structured approach for consistent, thorough testing.
              Each step maps to specific WCAG 2.2 success criteria.
            </p>

            <div className="space-y-6 mb-6">
              {[
                {
                  step: "Step 1: First Impression Audit (5 min)",
                  wcag: "WCAG 1.3.1, 1.3.2, 2.4.1, 2.4.2",
                  tasks: [
                    "Load the page and listen to what NVDA announces first — is it the page title? (WCAG 2.4.2)",
                    "Press D to navigate by landmarks — does the page have main, nav, banner, contentinfo? (WCAG 1.3.1)",
                    "Check for a 'Skip to main content' link — Tab should hit it first (WCAG 2.4.1)",
                    "Press Insert+F7 to open the Elements List → Headings tab — is there exactly one H1? Do headings create a logical outline?",
                  ],
                },
                {
                  step: "Step 2: Navigation Audit (10 min)",
                  wcag: "WCAG 2.1.1, 2.4.3, 2.4.7",
                  tasks: [
                    "Tab through the entire page — does every interactive element receive focus in a logical order? (WCAG 2.4.3)",
                    "Can you see where focus is? (Check with eyes — WCAG 2.4.7, but also listen to what NVDA announces)",
                    "Try the main navigation menu — can you expand/collapse dropdowns? Are submenus reachable? (WCAG 2.1.1)",
                    "Are there any keyboard traps? Tab forward and backward — can you always escape? (WCAG 2.1.2)",
                    "Interact with any skip links, back-to-top buttons, or in-page anchors",
                  ],
                },
                {
                  step: "Step 3: Content Audit (10 min)",
                  wcag: "WCAG 1.1.1, 1.3.1, 1.3.5",
                  tasks: [
                    "Press G to navigate between images — does NVDA announce meaningful alt text? (WCAG 1.1.1)",
                    "For decorative images, NVDA should say nothing — they should have alt=\"\" or role=\"presentation\"",
                    "Navigate through text content — is the reading order logical? (WCAG 1.3.2)",
                    "Check lists — are they marked up as <ul>/<ol>? NVDA should announce 'list of X items'",
                    "Check any data tables — press T to jump to tables, then use Ctrl+Alt+Arrow keys to navigate cells. Are headers announced? (WCAG 1.3.1)",
                  ],
                },
                {
                  step: "Step 4: Form Audit (15 min)",
                  wcag: "WCAG 1.3.1, 3.3.1, 3.3.2, 4.1.2",
                  tasks: [
                    "Tab to each form field — does NVDA announce the label? Not just 'edit,' but 'Name, edit' or 'Email address, edit' (WCAG 4.1.2)",
                    "Are required fields announced? NVDA should say 'required' (aria-required='true' or required attribute)",
                    "Submit a form with errors — are error messages announced? Do they identify which field has the error? (WCAG 3.3.1)",
                    "Are input purposes identified for autocomplete? (WCAG 1.3.5) — name, email, tel, address fields should have autocomplete attributes",
                    "Check select dropdowns, checkboxes, radio buttons — can you operate all of them with keyboard only?",
                    "Test any custom form controls (date pickers, sliders, toggle switches) — these are the most common failure points",
                  ],
                },
                {
                  step: "Step 5: Interactive Component Audit (10 min)",
                  wcag: "WCAG 4.1.2, 4.1.3",
                  tasks: [
                    "Open any modal/dialog — does focus move into it? Can you Tab within it without focus escaping behind the overlay? (Focus trap)",
                    "When the modal closes, does focus return to the element that opened it?",
                    "Test accordions — are they announced as 'expanded' or 'collapsed'? Do they use proper ARIA states?",
                    "Test tab panels — is the selected tab announced? Can you arrow between tabs and Tab into the panel content?",
                    "Check any carousels, sliders, or auto-playing content — can you pause, stop, or control them? (WCAG 2.2.2)",
                    "Dynamic content: trigger content changes (add to cart, loading spinners, notifications) — does NVDA announce the update? (WCAG 4.1.3, aria-live regions)",
                  ],
                },
                {
                  step: "Step 6: Link and Button Audit (5 min)",
                  wcag: "WCAG 2.4.4, 4.1.2",
                  tasks: [
                    "Press Insert+F7 → Links tab — read the link list. Do links make sense out of context? (No 'click here,' 'read more,' 'learn more') (WCAG 2.4.4)",
                    "Check that links are links (<a>) and buttons are buttons (<button>) — NVDA should announce the correct role (WCAG 4.1.2)",
                    "Are icon-only buttons labeled? An icon button with no text should have aria-label or visually hidden text",
                    "External links — are they indicated? Users should know when a link opens in a new window",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.step}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{section.step}</h3>
                  <p className="text-xs text-slate-500 mb-3">{section.wcag}</p>
                  <ul className="space-y-2">
                    {section.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm">
                        <span className="text-emerald-400 mt-0.5">☐</span>
                        <span className="text-slate-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 12: Common Issues */}
          <section id="common-issues" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              12. 15 Common Issues Screen Reader Testing Reveals
            </h2>
            <p className="mb-6">
              These are the issues you'll find most frequently when testing real websites.
              Each one fails at least one WCAG 2.2 success criterion and directly impacts usability.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  issue: "Missing or meaningless alt text",
                  what: "NVDA announces 'graphic' with no description, or reads the filename: 'IMG_3847.jpg'",
                  fix: "Add descriptive alt text: alt=\"Team reviewing accessibility audit results.\" For decorative images, use alt=\"\".",
                  wcag: "1.1.1",
                },
                {
                  issue: "Broken heading hierarchy",
                  what: "Page jumps from H1 to H3, or uses headings for visual styling (making a paragraph H2 because it 'looks right')",
                  fix: "Ensure headings are sequential (H1→H2→H3). Use CSS for styling; headings are for document structure.",
                  wcag: "1.3.1",
                },
                {
                  issue: "Unlabeled form fields",
                  what: "NVDA says 'edit' instead of 'Email address, edit' — users don't know what to type",
                  fix: "Associate labels with for/id attributes, or use aria-label/aria-labelledby on the input.",
                  wcag: "4.1.2",
                },
                {
                  issue: "Keyboard trap in modal",
                  what: "Modal opens, but Tab moves focus behind the overlay to page content underneath",
                  fix: "Trap focus within the modal using JavaScript. On close, return focus to the triggering element.",
                  wcag: "2.1.2",
                },
                {
                  issue: "Layout tables announced as data tables",
                  what: "NVDA says 'table with 3 rows and 2 columns' for a layout that isn't tabular data",
                  fix: "Add role=\"presentation\" to layout tables so screen readers ignore the table structure.",
                  wcag: "1.3.1",
                },
                {
                  issue: "Dynamic content not announced",
                  what: "An error message appears visually after form submission, but NVDA says nothing",
                  fix: "Use aria-live=\"polite\" on the container, or aria-live=\"assertive\" for critical errors. Or use role=\"alert\".",
                  wcag: "4.1.3",
                },
                {
                  issue: "Links that say 'click here' or 'read more'",
                  what: "In the NVDA links list (Insert+F7), you see 20 links all labeled 'Read More' with no context",
                  fix: "Make link text descriptive: 'Read the full accessibility audit report' instead of 'Read more'.",
                  wcag: "2.4.4",
                },
                {
                  issue: "Custom dropdown not operable",
                  what: "A styled select menu opens on click but doesn't respond to arrow keys or keyboard activation",
                  fix: "Use native <select> when possible. For custom dropdowns, implement full ARIA listbox pattern with keyboard support.",
                  wcag: "2.1.1",
                },
                {
                  issue: "Missing skip navigation link",
                  what: "Tab lands on the first nav link, and you must Tab through 50+ navigation items to reach main content",
                  fix: "Add a visually-hidden 'Skip to main content' link as the first focusable element on the page.",
                  wcag: "2.4.1",
                },
                {
                  issue: "Auto-playing video or carousel",
                  what: "Content moves automatically, NVDA tries to read it, and the user can't stop or control it",
                  fix: "No auto-play. If auto-playing content exists, provide visible pause/stop controls that are keyboard accessible.",
                  wcag: "2.2.2",
                },
                {
                  issue: "Icon buttons without labels",
                  what: "NVDA announces 'button' with no label — user has no idea what the button does (hamburger menu, search, close)",
                  fix: "Add aria-label=\"Menu\", aria-label=\"Search\", or visually-hidden text inside the button.",
                  wcag: "4.1.2",
                },
                {
                  issue: "Focus not visible on interactive elements",
                  what: "CSS removes focus outlines (outline: none) without providing an alternative focus indicator",
                  fix: "Never remove focus outlines without a replacement. Use :focus-visible for modern focus indicators.",
                  wcag: "2.4.7",
                },
                {
                  issue: "Data table without headers",
                  what: "NVDA reads table cells without context — you hear 'John Smith' but don't know which column it belongs to",
                  fix: "Use <th> elements for headers with scope=\"col\" or scope=\"row\". For complex tables, use id/headers attributes.",
                  wcag: "1.3.1",
                },
                {
                  issue: "ARIA state not updated",
                  what: "Accordion button says 'collapsed' even after expanding, because aria-expanded isn't toggled",
                  fix: "Toggle aria-expanded=\"true\"/\"false\" with JavaScript when state changes. Test with screen reader to verify.",
                  wcag: "4.1.2",
                },
                {
                  issue: "iframe without title",
                  what: "NVDA encounters an iframe and announces 'frame' with no description — user doesn't know what it contains",
                  fix: "Add a title attribute to every iframe: <iframe title=\"YouTube video: How to use our product\">",
                  wcag: "4.1.2",
                },
              ].map((item, index) => (
                <div
                  key={item.issue}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="shrink-0 rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-400">
                      #{index + 1}
                    </span>
                    <h3 className="font-semibold text-white">{item.issue}</h3>
                    <span className="shrink-0 ml-auto rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                      WCAG {item.wcag}
                    </span>
                  </div>
                  <p className="text-sm text-red-300 mb-1">
                    <strong>What you'll hear:</strong> {item.what}
                  </p>
                  <p className="text-sm text-emerald-300">
                    <strong>Fix:</strong> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 13: Testing Checklist */}
          <section id="testing-checklist" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              13. Complete Screen Reader Testing Checklist
            </h2>
            <p className="mb-6">
              Use this checklist for every page and feature you test.
              Each item can be verified with any screen reader (NVDA, JAWS, or VoiceOver).
            </p>

            {[
              {
                category: "Page Structure",
                items: [
                  "Page has a descriptive <title> that's announced on load",
                  "Exactly one <h1> that describes the page content",
                  "Heading levels are sequential — no skipping from H2 to H4",
                  "ARIA landmarks present: main, navigation, banner, contentinfo",
                  "Skip-to-main-content link is first focusable element",
                  "Language is set correctly (lang attribute on <html>)",
                ],
              },
              {
                category: "Navigation",
                items: [
                  "All interactive elements reachable by keyboard (Tab key)",
                  "Tab order matches visual/logical reading order",
                  "No keyboard traps — can Tab into and out of every component",
                  "Focus indicator visible on every focusable element",
                  "Menu items accessible — can expand, navigate, and close with keyboard",
                  "Focus returns to trigger element when closing dialogs/menus",
                ],
              },
              {
                category: "Images & Media",
                items: [
                  "All informational images have descriptive alt text",
                  "Decorative images have alt=\"\" or role=\"presentation\"",
                  "Complex images (charts, diagrams) have long descriptions",
                  "Video has captions and/or transcript",
                  "Audio-only content has transcript",
                  "No auto-playing media, or pause/stop control is keyboard accessible",
                ],
              },
              {
                category: "Forms",
                items: [
                  "Every input has an associated label (announced by screen reader)",
                  "Required fields indicated both visually and programmatically (aria-required)",
                  "Error messages are associated with their fields (aria-describedby)",
                  "Error messages are announced when they appear (aria-live or role=\"alert\")",
                  "Input purpose identified for autocomplete (name, email, tel, etc.)",
                  "Custom controls (date pickers, toggles) fully keyboard operable",
                  "Form validation errors are specific — 'Email is invalid' not just 'Error'",
                ],
              },
              {
                category: "Links & Buttons",
                items: [
                  "Link text descriptive out of context (no 'click here')",
                  "Links use <a>, buttons use <button> — correct semantic roles",
                  "Icon-only buttons have aria-label or visually-hidden text",
                  "New-window links indicated (e.g., 'opens in new tab' in link text)",
                  "No empty links or buttons (no <a href></a> without content)",
                ],
              },
              {
                category: "Dynamic Content",
                items: [
                  "Content updates announced via aria-live regions",
                  "Loading states communicated (aria-busy='true' or status messages)",
                  "Modal dialogs trap focus and return focus on close",
                  "Accordion/disclosure widgets announce expanded/collapsed state",
                  "Tab panels indicate selected state and are keyboard navigable",
                  "Toast/notification messages announced (role=\"alert\" or aria-live=\"assertive\")",
                ],
              },
              {
                category: "Tables",
                items: [
                  "Data tables have <th> header cells with proper scope",
                  "Layout tables use role=\"presentation\" to suppress table semantics",
                  "Complex tables use id/headers attributes for cell-to-header mapping",
                  "Tables have caption or aria-label describing their purpose",
                  "Can navigate cells with Ctrl+Alt+Arrow keys (NVDA/JAWS)",
                ],
              },
            ].map((section) => (
              <div key={section.category} className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-slate-700/60 bg-slate-900/40 p-3"
                    >
                      <span className="mt-0.5 text-sky-400">☐</span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Section 14: Automated vs Manual */}
          <section id="automated-vs-manual" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              14. Automated Testing vs. Screen Reader Testing
            </h2>
            <p className="mb-6">
              Automated tools and screen reader testing are complementary, not interchangeable.
              Here's what each approach catches — and what it misses.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">
                <h3 className="text-sky-300 font-semibold mb-3">🤖 Automated Tools Catch</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Missing alt text (attribute absent)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Color contrast ratios below thresholds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Invalid ARIA attributes and roles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Missing form labels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Duplicate IDs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Empty links and buttons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Missing lang attribute
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                <h3 className="text-emerald-300 font-semibold mb-3">🧑‍🦯 Screen Reader Testing Catches</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Alt text that exists but is meaningless
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Illogical reading order
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Keyboard traps and focus management issues
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Custom widget usability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Dynamic content not announced
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Confusing or verbose screen reader output
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✅</span>
                    Overall user experience and task completion
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-6">
              <p className="text-sky-300 font-semibold mb-2">
                🎯 The Optimal Testing Workflow
              </p>
              <ol className="space-y-2 text-slate-300 list-decimal list-inside">
                <li>
                  <strong className="text-white">Automated scan first:</strong> Run{" "}
                  <Link href="/" className="text-sky-400 hover:underline">RatedWithAI</Link> or axe-core to catch the low-hanging fruit (30-40% of issues)
                </li>
                <li>
                  <strong className="text-white">Fix automated findings:</strong> Resolve all critical and serious issues before manual testing
                </li>
                <li>
                  <strong className="text-white">Screen reader testing:</strong> Use NVDA + Chrome to test the full user experience (catches the other 60-70%)
                </li>
                <li>
                  <strong className="text-white">Cross-screen-reader validation:</strong> Test critical flows in JAWS + Chrome and VoiceOver + Safari
                </li>
                <li>
                  <strong className="text-white">User testing:</strong> If possible, have actual screen reader users test — they'll find nuances that even skilled testers miss
                </li>
              </ol>
            </div>
          </section>

          {/* Section 15: Mobile Testing */}
          <section id="mobile-testing" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              15. Mobile Screen Reader Testing
            </h2>
            <p className="mb-6">
              <strong className="text-white">91.3% of screen reader users access content on mobile devices</strong> (WebAIM Survey #10).
              If you only test on desktop, you're missing the majority of your users' actual experience.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">VoiceOver on iOS (70.6% of Mobile Users)</h3>
            <div className="rounded-xl border border-violet-500/30 bg-violet-500/5 p-6 mb-6">
              <p className="text-violet-300 font-semibold mb-3">Essential iOS VoiceOver Gestures</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {[
                  "Enable: Settings → Accessibility → VoiceOver → On (or triple-click Side Button)",
                  "Navigate forward: Swipe right with one finger",
                  "Navigate backward: Swipe left with one finger",
                  "Activate element: Double-tap anywhere on screen",
                  "Scroll: Three-finger swipe up/down",
                  "Rotor: Two-finger rotate gesture — changes navigation mode (headings, links, form controls)",
                  "Navigate by rotor setting: Swipe up/down with one finger",
                  "Read from top: Two-finger swipe up",
                  "Stop reading: Two-finger tap",
                  "Magic tap: Two-finger double-tap — starts/stops audio or video",
                ].map((gesture) => (
                  <li key={gesture} className="flex items-start gap-2">
                    <span className="text-violet-400">•</span>
                    <span>{gesture}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">TalkBack on Android (26.4% of Mobile Users)</h3>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 mb-6">
              <p className="text-emerald-300 font-semibold mb-3">Essential Android TalkBack Gestures</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {[
                  "Enable: Settings → Accessibility → TalkBack → On",
                  "Navigate forward: Swipe right",
                  "Navigate backward: Swipe left",
                  "Activate element: Double-tap",
                  "Scroll: Two-finger swipe up/down",
                  "Reading controls: Swipe up/down to change navigation granularity (characters, words, headings, links)",
                  "Context menu: Three-finger tap for global actions",
                  "Explore by touch: Drag finger across screen to hear what's under it",
                  "Read from top: Swipe down then right in one motion",
                  "Stop reading: Two-finger tap",
                ].map((gesture) => (
                  <li key={gesture} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{gesture}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Mobile Testing Priorities</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Touch target size: Buttons and links should be at least 44×44 CSS pixels (WCAG 2.5.8 Target Size) — small touch targets are the #1 mobile accessibility failure",
                "Responsive layout: Does content reflow properly? Horizontal scrolling at 320px viewport breaks screen reader users who rely on linear reading",
                "Gesture alternatives: Any custom swipe or pinch interactions must have button alternatives",
                "Orientation: Does the site work in both portrait and landscape? (WCAG 1.3.4) — some users mount their phones in fixed orientations",
                "Focus management: Tap targets and keyboard focus must match — what you tap and what gets focused should be the same element",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-sky-400">📱</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 16: FAQs */}
          <section id="faqs" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              16. Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Which screen reader should I use for testing?",
                  a: "For comprehensive coverage, test with at least two screen readers. Start with NVDA (free, Windows) paired with Chrome — the most common screen reader/browser combination used by 21.3% of real users according to WebAIM's 2024 survey. Add VoiceOver with Safari for macOS/iOS testing. If your audience includes enterprise users, test with JAWS and Chrome (the #1 combination at 24.7%). NVDA alone catches approximately 80% of screen reader accessibility issues.",
                },
                {
                  q: "Is NVDA or JAWS better for accessibility testing?",
                  a: "Both are excellent but serve different purposes. NVDA is free, open-source, and ideal for developers — it's precise at catching code-level issues. JAWS ($90/year) is better at simulating the real-world user experience, especially for complex web applications. WebAIM's Survey #10 shows JAWS at 40.5% and NVDA at 37.7% primary usage. Test with both for the broadest coverage, or start with NVDA if budget is a concern.",
                },
                {
                  q: "How often should I test with screen readers?",
                  a: "Test during development (not just before launch). Ideally, test key user flows with a screen reader after every sprint or major feature change. At minimum: test new pages, new forms, new interactive components, and any significant layout changes. Integrate screen reader testing into your QA process alongside automated scanning.",
                },
                {
                  q: "Can automated testing replace screen reader testing?",
                  a: "No. Automated tools catch approximately 30-40% of WCAG issues. Screen reader testing catches the other 60-70% — whether alt text is meaningful, whether reading order is logical, whether custom widgets are usable, and whether the overall experience is navigable. Use automated tools as your first pass, then validate with screen readers.",
                },
                {
                  q: "How long does screen reader testing take?",
                  a: "A focused screen reader test of a single page takes 30-60 minutes. A full audit of a multi-page site takes 2-5 hours, depending on complexity. The first time will be slower as you learn the shortcuts. After practice, you can test a form or component in 10-15 minutes. Start with the most critical user flows: homepage, navigation, primary CTA pages, forms, and checkout.",
                },
                {
                  q: "Do I need to test on mobile screen readers too?",
                  a: "Yes. 91.3% of screen reader users use mobile devices, with VoiceOver on iOS at 70.6% market share. At minimum, test your critical flows with VoiceOver on an iPhone. Focus on touch target sizes (44×44px minimum), responsive reflow, and gesture alternatives.",
                },
                {
                  q: "I'm on Mac — can I test with NVDA?",
                  a: "Not natively. NVDA is Windows-only. Your options: (1) Use VoiceOver + Safari (built into macOS). (2) Install Windows via Parallels, UTM, or Boot Camp and run NVDA there. (3) Use BrowserStack or similar cloud services that provide Windows VMs with screen readers. Option 1 (VoiceOver) is the practical choice for daily testing on Mac.",
                },
                {
                  q: "What if I find too many issues to fix?",
                  a: "Prioritize by impact. Fix these first: (1) keyboard traps that block navigation entirely, (2) unlabeled form fields on critical pages (login, signup, checkout), (3) missing skip navigation, (4) broken heading hierarchy, (5) empty links and buttons. Then work through the rest. Use an automated tool like RatedWithAI to track your progress over time.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-5"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="mb-16">
            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Start Your Accessibility Testing with an Automated Scan
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Before diving into screen reader testing, get a baseline.{" "}
                <Link href="/" className="text-sky-400 hover:underline">
                  RatedWithAI
                </Link>{" "}
                scans your website for WCAG 2.2 violations in seconds — catching the 30-40% of issues
                that automated tools can detect. Fix those first, then use this guide to
                test the rest with NVDA, JAWS, or VoiceOver.
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600 transition-colors"
              >
                Scan Your Website Free →
              </Link>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Accessibility Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Best Accessibility Testing Tools Compared (2026)",
                  href: "/blog/best-accessibility-testing-tools-compared-2026",
                  desc: "12 tools reviewed — axe-core, WAVE, Lighthouse, Pa11y, and more",
                },
                {
                  title: "ADA Compliance Audit Guide 2026",
                  href: "/blog/ada-compliance-audit-guide-2026",
                  desc: "7-step methodology for comprehensive accessibility audits",
                },
                {
                  title: "WCAG 2.2 Complete Guide",
                  href: "/blog/wcag-22-complete-guide",
                  desc: "Every success criterion explained with real-world examples",
                },
                {
                  title: "Accessibility Widgets: Do They Actually Work?",
                  href: "/blog/accessibility-widgets",
                  desc: "Why overlays can't replace proper accessibility testing",
                },
                {
                  title: "Shopify ADA Compliance Guide 2026",
                  href: "/blog/shopify-ada-compliance-2026",
                  desc: "Platform-specific accessibility guide for Shopify stores",
                },
                {
                  title: "Email Accessibility Guide 2026",
                  href: "/blog/email-accessibility-guide-2026",
                  desc: "99.89% of emails fail accessibility — how to fix yours",
                },
                {
                  title: "VPAT Guide: Accessibility Conformance Reports",
                  href: "/blog/vpat-accessibility-conformance-report-guide-2026",
                  desc: "Create VPATs for enterprise and government procurement",
                },
                {
                  title: "Section 508 Compliance Guide",
                  href: "/blog/section-508-compliance-guide",
                  desc: "Federal accessibility requirements for government websites",
                },
                {
                  title: "IAAP Certification Guide 2026",
                  href: "/blog/iaap-accessibility-certification-guide-2026",
                  desc: "CPACC, WAS, and CPWA — study paths, costs, and career impact",
                },
                {
                  title: "Ecommerce Accessibility: ADA Compliance Guide",
                  href: "/blog/ecommerce-accessibility-ada-compliance-guide",
                  desc: "70% of ADA lawsuits target e-commerce — is your store compliant?",
                },
                {
                  title: "PDF Accessibility Guide 2026",
                  href: "/blog/pdf-accessibility-guide-2026",
                  desc: "How to make ADA-compliant PDFs — tagged structure, remediation, testing",
                },
                {
                  title: "ADA Compliance Checklist 2026",
                  href: "/blog/ada-compliance-checklist-2026",
                  desc: "Step-by-step checklist for website ADA compliance",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl border border-slate-700/60 bg-slate-900/40 p-4 hover:border-sky-500/40 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-sky-400 mb-1">
                    {link.title}
                  </h3>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-4">Sources</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                {
                  name: "WebAIM Screen Reader User Survey #10 (2024)",
                  url: "https://webaim.org/projects/screenreadersurvey10/",
                },
                {
                  name: "WebAIM: Using NVDA to Evaluate Web Accessibility",
                  url: "https://webaim.org/articles/nvda/",
                },
                {
                  name: "WebAIM: Using VoiceOver to Evaluate Web Accessibility",
                  url: "https://webaim.org/articles/voiceover/",
                },
                {
                  name: "Deque University: NVDA Keyboard Shortcuts",
                  url: "https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts",
                },
                {
                  name: "NV Access: NVDA Downloads",
                  url: "https://www.nvaccess.org/download/",
                },
                {
                  name: "Freedom Scientific: JAWS Screen Reader",
                  url: "https://www.freedomscientific.com/products/software/jaws/",
                },
                {
                  name: "Apple: VoiceOver User Guide for Mac",
                  url: "https://support.apple.com/guide/voiceover/welcome/mac",
                },
                {
                  name: "Harvard Digital Accessibility: Getting Started with NVDA",
                  url: "https://accessibility.huit.harvard.edu/nvda",
                },
              ].map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    {source.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <Footer />
      </div>
    </>
  );
}
