/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Mobile App Accessibility: Complete ADA & WCAG Compliance Guide (2026) | RatedWithAI",
  description:
    "Complete guide to mobile app accessibility for ADA and WCAG 2.1 compliance in 2026. Covers iOS VoiceOver, Android TalkBack, Title II requirements, testing tools, and step-by-step remediation for native and hybrid apps.",
  openGraph: {
    title: "Mobile App Accessibility: Complete ADA & WCAG Compliance Guide (2026)",
    description:
      "The April 2026 Title II deadline requires government mobile apps to meet WCAG 2.1 AA. 71% of mobile apps fail basic accessibility checks. Here's how to fix yours.",
    type: "article",
    publishedTime: "2026-03-02T08:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "mobile app accessibility",
    "mobile accessibility",
    "ada mobile app compliance",
    "wcag mobile app",
    "mobile app accessibility testing",
    "mobile app accessibility guidelines",
    "mobile app accessibility checklist",
    "ios accessibility",
    "android accessibility",
    "voiceover accessibility",
    "talkback accessibility",
    "mobile app accessibility standards",
    "title ii mobile app",
    "mobile app wcag 2.1",
    "native app accessibility",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/mobile-app-accessibility-ada-compliance-guide-2026",
  },
};

export default function MobileAppAccessibilityGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Mobile App Accessibility: Complete ADA & WCAG Compliance Guide for 2026",
    description:
      "Comprehensive guide to making mobile apps accessible under ADA Title II and WCAG 2.1 Level AA, covering iOS, Android, testing tools, and remediation strategies.",
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
    datePublished: "2026-03-02T08:00:00.000Z",
    dateModified: "2026-03-02T08:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://ratedwithai.com/blog/mobile-app-accessibility-ada-compliance-guide-2026",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does the ADA require mobile apps to be accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The DOJ's April 2024 Title II rule explicitly requires state and local government mobile apps to conform to WCAG 2.1 Level AA. For private businesses under Title III, courts have increasingly held that mobile apps are covered as extensions of places of public accommodation. The compliance deadline for larger government entities (50,000+ population) is April 24, 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What WCAG guidelines apply to mobile apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.1 Level AA applies to mobile apps under the Title II rule. Key mobile-specific success criteria include 1.3.4 (Orientation), 1.3.5 (Identify Input Purpose), 1.4.10 (Reflow), 1.4.11 (Non-text Contrast), 1.4.12 (Text Spacing), 1.4.13 (Content on Hover or Focus), 2.1.4 (Character Key Shortcuts), 2.5.1 (Pointer Gestures), 2.5.2 (Pointer Cancellation), 2.5.3 (Label in Name), and 2.5.4 (Motion Actuation).",
        },
      },
      {
        "@type": "Question",
        name: "How do I test my mobile app for accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a combination of automated and manual testing. For iOS, use VoiceOver and Xcode's Accessibility Inspector. For Android, use TalkBack and Google's Accessibility Scanner app. Automated tools like Deque's axe DevTools Mobile and Evinced Mobile Flow Analyzer can catch common issues. Manual testing with real screen readers is essential — automated tools catch only about 30-40% of accessibility barriers.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common mobile app accessibility issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common issues include: missing or unclear accessibility labels on buttons and images, insufficient color contrast (below 4.5:1 for text), touch targets smaller than 44x44 points (iOS) or 48x48dp (Android), lack of screen reader support for custom UI components, gesture-dependent navigation without alternatives, and missing focus management when screens change.",
        },
      },
      {
        "@type": "Question",
        name: "Is WCAG designed for mobile apps or just websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While WCAG was originally written for web content, WCAG 2.1 specifically added 17 new success criteria to address mobile accessibility. The W3C also published 'Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile' as a companion note. The DOJ's Title II rule explicitly applies WCAG 2.1 to mobile applications, confirming its applicability beyond web.",
        },
      },
      {
        "@type": "Question",
        name: "How much does mobile app accessibility remediation cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary widely based on app complexity. A basic audit ranges from $5,000-$15,000. Remediation for a simple app might cost $10,000-$30,000, while complex apps with custom UI components can run $50,000-$150,000+. Building accessibility in from the start typically costs 10-20% more than a standard build, compared to 50-100% more for retrofitting. Government entities may offset costs using the IRS Disabled Access Credit (Form 8826).",
        },
      },
      {
        "@type": "Question",
        name: "Do hybrid apps (React Native, Flutter) need to be accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Hybrid and cross-platform apps must meet the same accessibility standards as native apps. React Native provides built-in accessibility props (accessible, accessibilityLabel, accessibilityRole). Flutter has a Semantics widget for screen reader support. Both frameworks support platform screen readers (VoiceOver/TalkBack) but require explicit implementation — accessibility is not automatic in any framework.",
        },
      },
      {
        "@type": "Question",
        name: "Can I be sued for an inaccessible mobile app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mobile app accessibility lawsuits have increased significantly. Notable cases include NAD v. Netflix (2012, extending ADA to streaming apps), Gomez v. GNC (2020, app accessibility under Title III), and multiple banking app lawsuits. Under Title II, the DOJ can enforce compliance with civil penalties up to $75,000 for first violations and $150,000 for subsequent violations. Private plaintiffs can seek injunctive relief and, in states like California, statutory damages of $4,000+ per violation under the Unruh Act.",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0b] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-purple-950/40 to-[#0a0a0b] py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 text-sm text-purple-300">
              <span>📱</span> Complete Guide — Updated March 2026
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Mobile App Accessibility:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ADA & WCAG Compliance Guide
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
              The April 2026 Title II deadline explicitly requires government mobile apps
              to meet WCAG 2.1 Level AA. Private sector lawsuits targeting apps are
              surging. Here's everything you need to know about making your mobile
              app accessible.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-purple-500/25"
              >
                Start With Your Website →
              </Link>
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-all hover:bg-white/5"
              >
                Title II Deadline Countdown
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-6 py-16">
          {/* Table of Contents */}
          <nav className="mb-16 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-white">
              📋 What's in This Guide
            </h2>
            <div className="grid gap-2 md:grid-cols-2">
              {[
                { href: "#why-mobile", label: "1. Why Mobile App Accessibility Matters Now" },
                { href: "#legal", label: "2. Legal Requirements: ADA, Title II & Title III" },
                { href: "#wcag-mobile", label: "3. WCAG 2.1 Success Criteria for Mobile" },
                { href: "#ios", label: "4. iOS Accessibility: VoiceOver & Beyond" },
                { href: "#android", label: "5. Android Accessibility: TalkBack & Tools" },
                { href: "#hybrid", label: "6. Hybrid & Cross-Platform Frameworks" },
                { href: "#common-issues", label: "7. Most Common Mobile Accessibility Failures" },
                { href: "#testing", label: "8. Testing Tools & Methodology" },
                { href: "#checklist", label: "9. Mobile Accessibility Checklist" },
                { href: "#remediation", label: "10. Remediation Strategy & Costs" },
                { href: "#lawsuits", label: "11. Mobile App Accessibility Lawsuits" },
                { href: "#government", label: "12. Government Agency Action Plan" },
                { href: "#faq", label: "13. Frequently Asked Questions" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-purple-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Key Statistics Banner */}
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "71%", desc: "of mobile apps fail basic accessibility checks" },
              { stat: "53 Days", desc: "until Title II deadline (April 24, 2026)" },
              { stat: "15%+", desc: "of global population has a disability" },
              { stat: "$75K+", desc: "civil penalties per first violation (Title II)" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <div className="text-2xl font-bold text-purple-400">
                  {item.stat}
                </div>
                <div className="mt-1 text-xs text-zinc-400">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Section 1: Why Mobile Accessibility Matters */}
          <section id="why-mobile" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              1. Why Mobile App Accessibility Matters Now
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Mobile devices are the primary way most people access digital services. In 2025,
              mobile traffic accounted for over 60% of all web traffic globally, and Americans
              spent an average of 4.5 hours per day on mobile apps. For people with disabilities —
              approximately 1.3 billion people worldwide — accessible mobile apps aren't a
              convenience. They're a necessity.
            </p>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Yet accessibility has been consistently overlooked in mobile development. A 2024
              study by the{" "}
              <a
                href="https://www.who.int/health-topics/disability"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                World Health Organization
              </a>{" "}
              found that less than 5% of mobile apps meet basic accessibility standards.
              The problem spans both iOS and Android ecosystems, affecting everything from
              banking apps to transit systems to healthcare portals.
            </p>

            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="mb-3 text-lg font-bold text-red-400">
                🚨 The Regulatory Trigger
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                The DOJ's April 2024 Title II rule is the first federal regulation to
                <strong className="text-white"> explicitly require mobile app accessibility</strong>.
                State and local governments serving 50,000+ people must make their mobile
                apps conform to WCAG 2.1 Level AA by{" "}
                <strong className="text-white">April 24, 2026</strong>. Smaller entities
                have until April 26, 2027. This isn't guidance — it's a binding legal requirement
                with enforceable penalties.
              </p>
            </div>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              For private businesses, the threat comes from litigation. Mobile app accessibility
              lawsuits have increased dramatically since 2020, with plaintiffs targeting banking
              apps, retail apps, food delivery services, and ride-sharing platforms. The legal
              theory: if your app is an extension of your business's services, it falls under
              Title III of the ADA as a place of public accommodation.
            </p>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
              <h3 className="mb-3 text-lg font-bold text-purple-300">
                💡 The Business Case
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-400">•</span>
                  <span>
                    <strong className="text-white">$13 trillion</strong> in annual
                    disposable income among people with disabilities globally (Return on
                    Disability Group)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-400">•</span>
                  <span>
                    <strong className="text-white">71% of users</strong> with
                    disabilities leave websites that aren't accessible (Click-Away Pound
                    Survey) — mobile abandonment rates are even higher
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-400">•</span>
                  <span>
                    Accessible apps consistently receive{" "}
                    <strong className="text-white">higher App Store ratings</strong> and
                    lower uninstall rates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-400">•</span>
                  <span>
                    Apple and Google both feature accessible apps in their "Editor's
                    Choice" selections, driving organic discovery
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Legal Requirements */}
          <section id="legal" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              2. Legal Requirements: ADA Title II, Title III & Beyond
            </h2>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Title II: Government Mobile Apps (Explicit Requirement)
            </h3>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              The DOJ's{" "}
              <a
                href="https://www.ada.gov/resources/web-rule-first-steps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                April 2024 final rule
              </a>{" "}
              creates a binding technical standard for state and local government digital
              content. The rule explicitly covers:
            </p>

            <ul className="mb-6 space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">✅</span>
                <span>Government websites and web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">✅</span>
                <span>
                  <strong className="text-white">Mobile applications</strong> (native
                  iOS and Android apps)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">✅</span>
                <span>Online documents including PDFs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">✅</span>
                <span>Third-party content embedded in government platforms</span>
              </li>
            </ul>

            <div className="mb-6 overflow-hidden rounded-xl border border-white/10">
              <div className="bg-white/5 px-6 py-3 font-semibold text-zinc-200">
                Title II Compliance Deadlines
              </div>
              <div className="divide-y divide-white/5">
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-zinc-300">
                    Entities serving 50,000+ people
                  </span>
                  <span className="font-bold text-red-400">April 24, 2026</span>
                </div>
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-zinc-300">
                    Entities serving under 50,000 people
                  </span>
                  <span className="font-bold text-yellow-400">April 26, 2027</span>
                </div>
              </div>
            </div>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Enforcement comes from the DOJ Civil Rights Division, which can pursue
              investigations, negotiate settlement agreements, and file federal
              litigation. Penalties include mandatory injunctive relief, compensatory
              damages, attorneys' fees, and civil penalties up to{" "}
              <strong className="text-white">$75,000</strong> for a first violation and{" "}
              <strong className="text-white">$150,000</strong> for subsequent violations
              (inflation-adjusted).
            </p>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-zinc-200">
              Title III: Private Business Mobile Apps
            </h3>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Unlike Title II, there is no explicit federal regulation requiring private
              business apps to meet a specific technical standard. However, courts have
              increasingly held that mobile apps fall under Title III's requirement that
              businesses provide "full and equal enjoyment" of their goods and services:
            </p>

            <ul className="mb-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">⚖️</span>
                <span>
                  <strong className="text-white">NAD v. Netflix (2012)</strong> — Court
                  held that streaming services are subject to ADA accessibility
                  requirements, setting precedent for app-based services
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">⚖️</span>
                <span>
                  <strong className="text-white">Gomez v. GNC (2020)</strong> — Mobile
                  app accessibility claims survived motion to dismiss under ADA Title III
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">⚖️</span>
                <span>
                  <strong className="text-white">Multiple banking app cases (2021-2025)</strong>{" "}
                  — Wells Fargo, Bank of America, and Capital One all faced lawsuits over
                  inaccessible mobile banking features
                </span>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-zinc-200">
              International Requirements
            </h3>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              If your app serves users outside the US, additional laws apply:
            </p>

            <ul className="mb-4 space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">🇪🇺</span>
                <span>
                  <strong className="text-white">European Accessibility Act (EAA)</strong>{" "}
                  — Enforced since June 2025. Requires accessible digital products
                  including mobile apps sold in the EU. Fines up to €100,000+ per member
                  state.{" "}
                  <Link
                    href="/blog/european-accessibility-act-eaa-compliance-us-businesses"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Read our EAA guide →
                  </Link>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">🇨🇦</span>
                <span>
                  <strong className="text-white">
                    Accessible Canada Act (ACA)
                  </strong>{" "}
                  — Requires federally regulated entities to make digital services
                  accessible by 2027-2028.{" "}
                  <Link
                    href="/blog/canada-accessible-canada-act-digital-accessibility-2027"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Read our ACA guide →
                  </Link>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">🇬🇧</span>
                <span>
                  <strong className="text-white">UK Equality Act 2010</strong> —
                  Public sector apps must meet WCAG 2.2 AA under the Public Sector
                  Bodies Accessibility Regulations 2018
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3: WCAG 2.1 for Mobile */}
          <section id="wcag-mobile" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              3. WCAG 2.1 Success Criteria Specifically for Mobile
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              While all{" "}
              <Link
                href="/blog/wcag-22-complete-guide"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                WCAG success criteria
              </Link>{" "}
              apply to mobile apps, WCAG 2.1 introduced 17 new criteria specifically
              addressing mobile challenges. Here are the most critical ones for app
              developers:
            </p>

            <div className="mb-6 space-y-4">
              {/* Perceivable */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-lg font-bold text-blue-400">
                  👁️ Perceivable
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-blue-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      1.3.4 Orientation (AA)
                    </p>
                    <p className="text-sm text-zinc-400">
                      Content must work in both portrait and landscape orientations
                      unless a specific orientation is essential (e.g., a piano app).
                      Don't lock your app to portrait mode.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      1.3.5 Identify Input Purpose (AA)
                    </p>
                    <p className="text-sm text-zinc-400">
                      Form fields that collect user information (name, email, phone)
                      must have programmatically determinable purposes so autofill and
                      assistive technologies can help users complete forms.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      1.4.10 Reflow (AA)
                    </p>
                    <p className="text-sm text-zinc-400">
                      Content must reflow without requiring two-dimensional scrolling
                      at 320 CSS pixels wide (equivalent to 400% zoom). For mobile,
                      this means supporting Dynamic Type (iOS) and adjustable font
                      sizes (Android).
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      1.4.11 Non-text Contrast (AA)
                    </p>
                    <p className="text-sm text-zinc-400">
                      UI components (buttons, form fields, icons) and graphical objects
                      must have at least 3:1 contrast ratio against adjacent colors. This
                      is especially critical for mobile where small screen sizes make
                      low-contrast elements even harder to distinguish.
                    </p>
                  </div>
                </div>
              </div>

              {/* Operable */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-lg font-bold text-green-400">
                  👆 Operable
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-green-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      2.5.1 Pointer Gestures (A)
                    </p>
                    <p className="text-sm text-zinc-400">
                      Any functionality that uses multipoint gestures (pinch, swipe
                      with two fingers) or path-based gestures (drawing a shape) must
                      also be operable with a single-pointer action. Users with motor
                      impairments may only be able to tap, not swipe.
                    </p>
                  </div>
                  <div className="border-l-2 border-green-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      2.5.2 Pointer Cancellation (A)
                    </p>
                    <p className="text-sm text-zinc-400">
                      For single-pointer actions, at least one of the following must be
                      true: the down-event doesn't trigger the function, or the action
                      completes on the up-event with the ability to abort. This prevents
                      accidental activation — critical for users with tremors.
                    </p>
                  </div>
                  <div className="border-l-2 border-green-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      2.5.3 Label in Name (A)
                    </p>
                    <p className="text-sm text-zinc-400">
                      For UI components with visible text labels, the accessible name
                      must include the visible text. Voice control users say what they
                      see — if the button says "Submit" but the accessible name is
                      "send-form-btn", voice commands won't work.
                    </p>
                  </div>
                  <div className="border-l-2 border-green-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      2.5.4 Motion Actuation (A)
                    </p>
                    <p className="text-sm text-zinc-400">
                      Functions triggered by device motion (shake to undo, tilt to
                      scroll) must have UI alternatives. Users may have their device
                      mounted on a wheelchair or may be unable to perform motion
                      gestures.
                    </p>
                  </div>
                  <div className="border-l-2 border-green-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      2.5.8 Target Size (Minimum) (AA) — WCAG 2.2
                    </p>
                    <p className="text-sm text-zinc-400">
                      Touch targets must be at least 24×24 CSS pixels, with Apple
                      recommending 44×44 points and Google recommending 48×48dp. This
                      is one of the most frequently failed criteria in mobile apps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Understandable & Robust */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-lg font-bold text-yellow-400">
                  🧠 Understandable & Robust
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-yellow-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      4.1.2 Name, Role, Value (A)
                    </p>
                    <p className="text-sm text-zinc-400">
                      All UI components must expose their name, role, states, and
                      properties to assistive technology. In mobile apps, this means
                      correctly using accessibility APIs: UIAccessibility on iOS and
                      AccessibilityNodeInfo on Android. Custom components are the #1
                      failure point.
                    </p>
                  </div>
                  <div className="border-l-2 border-yellow-400/30 pl-4">
                    <p className="font-semibold text-zinc-200">
                      4.1.3 Status Messages (AA)
                    </p>
                    <p className="text-sm text-zinc-400">
                      Status messages (success, error, loading states) must be
                      announced to screen readers without receiving focus. Use
                      UIAccessibilityPostNotification on iOS and
                      AccessibilityEvent.TYPE_ANNOUNCEMENT on Android.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: iOS Accessibility */}
          <section id="ios" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              4. iOS Accessibility: VoiceOver & Built-in Features
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Apple has invested heavily in accessibility since the original iPhone.
              iOS provides a comprehensive accessibility framework that, when properly
              implemented, makes apps work seamlessly with VoiceOver, Switch Control,
              Voice Control, and other assistive technologies.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              VoiceOver: The Foundation
            </h3>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              VoiceOver is Apple's built-in screen reader. It reads aloud what's on
              screen and lets users navigate by swiping left/right between elements.
              Key implementation requirements:
            </p>

            <div className="mb-6 rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h4 className="mb-3 font-mono text-sm font-bold text-green-400">
                {"// Swift — Proper Accessibility Labels"}
              </h4>
              <pre className="overflow-x-auto text-sm text-zinc-300">
                <code>{`// ✅ Good: Descriptive, contextual label
submitButton.accessibilityLabel = "Submit order"
submitButton.accessibilityHint = "Double-tap to place your order"

// ❌ Bad: Generic or missing label
submitButton.accessibilityLabel = "Button"
// or worse: no label at all (reads "button" to VoiceOver)

// ✅ Good: Image with meaningful alt text
profileImage.isAccessibilityElement = true
profileImage.accessibilityLabel = "Profile photo of Jane Smith"

// ❌ Bad: Decorative image exposed to screen reader
decorativeIcon.isAccessibilityElement = false // correct for decorative

// ✅ Good: Custom control with role
ratingSlider.accessibilityTraits = .adjustable
ratingSlider.accessibilityValue = "3 out of 5 stars"

// ✅ Good: Dynamic content updates
UIAccessibility.post(notification: .announcement, 
                     argument: "Order confirmed. Confirmation number 4829.")`}</code>
              </pre>
            </div>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Key iOS Accessibility APIs
            </h3>

            <ul className="mb-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">UIAccessibility protocol</strong> —
                  Core protocol for labeling elements, defining traits, and managing
                  focus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">accessibilityLabel</strong> — Short
                  description read by VoiceOver (e.g., "Close", "Add to cart")
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">accessibilityHint</strong> — Describes
                  the result of an action (e.g., "Double-tap to delete this item")
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">accessibilityTraits</strong> — Tells
                  VoiceOver the element's type (button, header, link, adjustable, etc.)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">Dynamic Type</strong> — Supports
                  system-wide font size preferences. Use UIFont.preferredFont and enable
                  adjustsFontForContentSizeCategory
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">
                    UIAccessibilityContainer
                  </strong>{" "}
                  — Groups related elements into logical containers for more intuitive
                  navigation
                </span>
              </li>
            </ul>

            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
              <h4 className="mb-2 font-bold text-blue-300">
                🍎 SwiftUI Accessibility (Modern Approach)
              </h4>
              <p className="mb-3 text-zinc-300 text-sm">
                SwiftUI makes accessibility easier with declarative modifiers:
              </p>
              <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
                <code>{`Button("Place Order") { placeOrder() }
  .accessibilityLabel("Place your order")
  .accessibilityHint("Charges your saved payment method")
  .accessibilityAddTraits(.isButton)

Image("product-photo")
  .accessibilityLabel("Red running shoes, size 10")
  // For decorative images:
  // .accessibilityHidden(true)

// Grouping elements
VStack {
  Text(product.name)
  Text(product.price)
}
.accessibilityElement(children: .combine)
// VoiceOver reads: "Running Shoes, $89.99"`}</code>
              </pre>
            </div>
          </section>

          {/* Section 5: Android Accessibility */}
          <section id="android" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              5. Android Accessibility: TalkBack & Accessibility Framework
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Android's accessibility framework centers on TalkBack (the built-in screen
              reader) and the AccessibilityNodeInfo class. While Android's APIs are
              powerful, they require more explicit implementation compared to iOS,
              especially for custom views.
            </p>

            <div className="mb-6 rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h4 className="mb-3 font-mono text-sm font-bold text-green-400">
                {`<!-- XML — Proper Content Descriptions -->`}
              </h4>
              <pre className="overflow-x-auto text-sm text-zinc-300">
                <code>{`<!-- ✅ Good: Descriptive content description -->
<ImageButton
    android:id="@+id/btn_submit"
    android:contentDescription="Submit order"
    android:src="@drawable/ic_submit" />

<!-- ❌ Bad: Missing content description -->
<ImageButton
    android:id="@+id/btn_submit"
    android:src="@drawable/ic_submit" />
<!-- TalkBack reads: "Unlabeled button" -->

<!-- ✅ Good: Decorative image hidden from TalkBack -->
<ImageView
    android:importantForAccessibility="no"
    android:src="@drawable/decorative_line" />

<!-- ✅ Good: Heading for navigation -->
<TextView
    android:text="Order Summary"
    android:accessibilityHeading="true" />`}</code>
              </pre>
            </div>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Jetpack Compose Accessibility
            </h3>

            <pre className="mb-6 overflow-x-auto rounded-xl border border-white/10 bg-zinc-900 p-6 text-sm text-zinc-300">
              <code>{`// Jetpack Compose — Semantics API
Button(
    onClick = { placeOrder() },
    modifier = Modifier.semantics {
        contentDescription = "Place your order"
        role = Role.Button
    }
) {
    Text("Place Order")
}

// Live region for dynamic updates
Text(
    text = "Order confirmed!",
    modifier = Modifier.semantics {
        liveRegion = LiveRegionMode.Polite
    }
)

// Minimum touch target size
IconButton(
    onClick = { /* ... */ },
    modifier = Modifier
        .size(48.dp) // Meets 48dp minimum
        .semantics { contentDescription = "Close dialog" }
) {
    Icon(Icons.Default.Close, null)
}`}</code>
            </pre>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Key Android Accessibility Features
            </h3>

            <ul className="mb-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">TalkBack</strong> — Screen reader.
                  Navigate by swiping left/right. Activate by double-tapping. Explore by
                  touch.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">Switch Access</strong> — Enables
                  navigation using external switches for users with severe motor
                  impairments
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">Voice Access</strong> — Hands-free
                  control using voice commands. Requires visible labels to match
                  accessible names.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">
                    Accessibility Scanner app
                  </strong>{" "}
                  — Google's automated tool that identifies contrast issues, small touch
                  targets, and missing labels
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">Font size scaling</strong> — Support
                  sp (scale-independent pixels) for text to respect system font size
                  settings
                </span>
              </li>
            </ul>
          </section>

          {/* Section 6: Hybrid & Cross-Platform */}
          <section id="hybrid" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              6. Hybrid & Cross-Platform Framework Accessibility
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Cross-platform frameworks like React Native, Flutter, and .NET MAUI power
              a significant percentage of mobile apps. Each has different accessibility
              capabilities and limitations.
            </p>

            <div className="mb-6 space-y-4">
              {/* React Native */}
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <h3 className="mb-3 text-lg font-bold text-cyan-300">
                  ⚛️ React Native
                </h3>
                <p className="mb-3 text-sm text-zinc-300">
                  React Native maps accessibility props to native platform APIs
                  (UIAccessibility on iOS, AccessibilityNodeInfo on Android).
                </p>
                <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
                  <code>{`<TouchableOpacity
  accessible={true}
  accessibilityLabel="Add to cart"
  accessibilityHint="Adds this item to your shopping cart"
  accessibilityRole="button"
  accessibilityState={{ disabled: outOfStock }}
  onPress={addToCart}
>
  <Text>Add to Cart</Text>
</TouchableOpacity>

// Live regions for dynamic content
<Text accessibilityLiveRegion="polite">
  {cartCount} items in cart
</Text>

// Group related elements
<View accessibilityRole="header">
  <Text>Product Details</Text>
</View>`}</code>
                </pre>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="text-green-400">
                    ✅ Good native accessibility API mapping
                  </p>
                  <p className="text-green-400">
                    ✅ accessibilityRole maps to platform roles
                  </p>
                  <p className="text-yellow-400">
                    ⚠️ Custom components need manual accessibility implementation
                  </p>
                  <p className="text-yellow-400">
                    ⚠️ Some third-party libraries lack accessibility support
                  </p>
                </div>
              </div>

              {/* Flutter */}
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
                <h3 className="mb-3 text-lg font-bold text-blue-300">
                  🐦 Flutter
                </h3>
                <p className="mb-3 text-sm text-zinc-300">
                  Flutter uses the Semantics widget to communicate with platform
                  accessibility services. Since Flutter renders its own UI (not native
                  views), explicit semantics are critical.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
                  <code>{`Semantics(
  label: 'Submit order',
  hint: 'Double-tap to place your order',
  button: true,
  child: ElevatedButton(
    onPressed: () => submitOrder(),
    child: Text('Submit'),
  ),
)

// Exclude decorative elements
ExcludeSemantics(
  child: Image.asset('decoration.png'),
)

// Merge child semantics
MergeSemantics(
  child: Column(
    children: [
      Text(product.name),
      Text(product.price),
    ],
  ),
)
// Screen reader reads: "Running Shoes \\$89.99"`}</code>
                </pre>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="text-green-400">
                    ✅ Semantics widget provides comprehensive control
                  </p>
                  <p className="text-green-400">
                    ✅ Built-in accessibility testing (semantics debugger)
                  </p>
                  <p className="text-red-400">
                    ❌ Custom rendering means MORE manual accessibility work, not less
                  </p>
                  <p className="text-yellow-400">
                    ⚠️ Platform-specific behaviors may differ from native apps
                  </p>
                </div>
              </div>

              {/* .NET MAUI */}
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-6">
                <h3 className="mb-3 text-lg font-bold text-violet-300">
                  🟣 .NET MAUI
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
                  <code>{`<!-- XAML — Semantic Properties -->
<Button 
  Text="Submit Order"
  SemanticProperties.Description="Place your order"
  SemanticProperties.Hint="Charges your saved payment method" />

<Image 
  Source="product.png"
  SemanticProperties.Description="Red running shoes" />

<!-- Headings for navigation -->
<Label 
  Text="Order Summary"
  SemanticProperties.HeadingLevel="Level1" />`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 7: Common Issues */}
          <section id="common-issues" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              7. Most Common Mobile App Accessibility Failures
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Based on analysis of accessibility audits across hundreds of mobile apps,
              these are the most frequent failures — and how to fix them.
            </p>

            <div className="space-y-4">
              {[
                {
                  rank: "#1",
                  title: "Missing or Unclear Accessibility Labels",
                  percent: "~68%",
                  desc: "Buttons, images, and icons without descriptive labels. Screen readers announce 'button' or 'image' with no context.",
                  fix: "Add descriptive accessibilityLabel (iOS) or contentDescription (Android) to every interactive element and meaningful image.",
                  color: "red",
                },
                {
                  rank: "#2",
                  title: "Insufficient Color Contrast",
                  percent: "~61%",
                  desc: "Text and UI elements that don't meet the 4.5:1 (text) or 3:1 (UI components) minimum contrast ratios.",
                  fix: "Use a contrast checker tool. Test in both light and dark modes. Don't rely on color alone to convey information.",
                  color: "orange",
                },
                {
                  rank: "#3",
                  title: "Touch Targets Too Small",
                  percent: "~52%",
                  desc: "Interactive elements smaller than 44×44pt (iOS) or 48×48dp (Android). Common on toolbars, navigation menus, and settings screens.",
                  fix: "Set minimum frame sizes. Use padding to expand hit areas without changing visual size.",
                  color: "yellow",
                },
                {
                  rank: "#4",
                  title: "Custom Components Not Exposed to AT",
                  percent: "~45%",
                  desc: "Custom sliders, carousels, accordions, and tab bars that screen readers can't interact with.",
                  fix: "Implement proper accessibility APIs. Set traits/roles. Expose values and states programmatically.",
                  color: "purple",
                },
                {
                  rank: "#5",
                  title: "No Focus Management After State Changes",
                  percent: "~40%",
                  desc: "When a modal opens, a new screen loads, or an error appears, focus doesn't move to the new content.",
                  fix: "Programmatically move focus to new content. Use UIAccessibility.post(.screenChanged) on iOS or sendAccessibilityEvent() on Android.",
                  color: "blue",
                },
                {
                  rank: "#6",
                  title: "Gesture-Only Navigation Without Alternatives",
                  percent: "~35%",
                  desc: "Swipe-to-delete, pinch-to-zoom, or shake-to-undo with no button alternatives. Locks out users with motor impairments.",
                  fix: "Provide button alternatives for every gesture. Ensure all functionality is reachable via single tap or screen reader navigation.",
                  color: "green",
                },
                {
                  rank: "#7",
                  title: "Form Errors Not Announced",
                  percent: "~33%",
                  desc: "Validation errors appear visually but screen readers don't announce them. Users don't know their submission failed.",
                  fix: "Use live regions or post accessibility announcements when errors appear. Move focus to the first error field.",
                  color: "pink",
                },
              ].map((issue) => (
                <div
                  key={issue.rank}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-lg bg-white/10 px-2.5 py-1 text-sm font-bold text-white">
                      {issue.rank}
                    </span>
                    <h3 className="font-bold text-zinc-200">{issue.title}</h3>
                    <span className="ml-auto text-sm text-zinc-500">
                      {issue.percent} of apps
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-zinc-400">{issue.desc}</p>
                  <p className="text-sm">
                    <span className="font-semibold text-green-400">Fix: </span>
                    <span className="text-zinc-300">{issue.fix}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Testing */}
          <section id="testing" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              8. Testing Tools & Methodology
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Effective mobile accessibility testing requires both automated tools and
              manual testing with assistive technology. Automated tools catch roughly
              30-40% of issues — the rest require human evaluation.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Platform-Specific Testing Tools
            </h3>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 font-bold text-zinc-200">🍎 iOS Tools</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>VoiceOver</strong> — Manual screen reader testing
                      (Settings → Accessibility → VoiceOver)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>Xcode Accessibility Inspector</strong> — Automated
                      audit + element inspection (Xcode → Open Developer Tool)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>XCTest accessibility audits</strong> — CI-integrated
                      automated checks in unit tests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>Voice Control</strong> — Test voice-driven navigation
                      and label accuracy
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 font-bold text-zinc-200">🤖 Android Tools</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>TalkBack</strong> — Manual screen reader testing
                      (Settings → Accessibility → TalkBack)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>Accessibility Scanner</strong> — Google's free app for
                      automated contrast, target size, and label checks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>Espresso AccessibilityChecks</strong> — CI-integrated
                      automated checks in instrumented tests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>
                      <strong>Layout Inspector</strong> — Android Studio tool to
                      inspect accessibility properties of views
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Third-Party Testing Tools
            </h3>

            <ul className="mb-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">
                    Deque axe DevTools Mobile
                  </strong>{" "}
                  — Automated WCAG testing for iOS and Android. Integrates with CI/CD
                  pipelines. Most comprehensive commercial tool.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">Evinced Mobile Flow Analyzer</strong>{" "}
                  — Records user flows and identifies accessibility issues at each step.
                  Good for regression testing.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">
                    BrowserStack App Accessibility Testing
                  </strong>{" "}
                  — Cloud-based testing on real devices. Tests against WCAG 2.0, 2.1,
                  and 2.2 standards.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-400">•</span>
                <span>
                  <strong className="text-white">Appium</strong> — Open-source test
                  automation framework. Use with accessibility-focused test scripts for
                  cross-platform testing.
                </span>
              </li>
            </ul>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Testing Methodology: The 5-Step Process
            </h3>

            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Automated Scan",
                  desc: "Run Accessibility Inspector (iOS) or Scanner (Android) on every screen. Fix all flagged contrast, label, and target size issues.",
                },
                {
                  step: "2",
                  title: "Screen Reader Walkthrough",
                  desc: "Navigate every screen with VoiceOver/TalkBack enabled. Verify all content is announced, order is logical, and actions are performable.",
                },
                {
                  step: "3",
                  title: "Keyboard/Switch Navigation",
                  desc: "Connect a Bluetooth keyboard or use Switch Control. Verify all interactive elements are reachable and operable without touch.",
                },
                {
                  step: "4",
                  title: "Visual/Display Testing",
                  desc: "Test with Large Text, Bold Text, Reduce Motion, and Dark Mode enabled. Verify no content is clipped, overlapping, or hidden.",
                },
                {
                  step: "5",
                  title: "User Testing",
                  desc: "Recruit users with disabilities for real-world testing. No amount of automated testing replaces the insights of actual assistive technology users.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-200">{step.title}</h4>
                    <p className="text-sm text-zinc-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Checklist */}
          <section id="checklist" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              9. Mobile App Accessibility Checklist
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Use this checklist to evaluate your app's accessibility. Based on WCAG
              2.1 Level AA requirements and platform-specific best practices.
            </p>

            <div className="space-y-6">
              {[
                {
                  category: "Labels & Text Alternatives",
                  items: [
                    "All images have descriptive accessibility labels (or are hidden from AT if decorative)",
                    "All buttons and interactive controls have clear, unique accessibility labels",
                    "Icon-only buttons have text alternatives that describe their function",
                    "Labels describe the element's purpose, not its appearance ('Close dialog' not 'X')",
                    "Accessibility labels update when element state changes",
                  ],
                },
                {
                  category: "Color & Contrast",
                  items: [
                    "Text meets 4.5:1 contrast ratio (3:1 for large text/headings)",
                    "UI components meet 3:1 contrast ratio against adjacent colors",
                    "Color is not the only means of conveying information (errors, status, links)",
                    "App is usable in both light and dark modes with sufficient contrast",
                    "Focus indicators are visible and meet contrast requirements",
                  ],
                },
                {
                  category: "Touch & Interaction",
                  items: [
                    "Touch targets are at least 44×44pt (iOS) or 48×48dp (Android)",
                    "Adequate spacing between touch targets (at least 8dp/pt)",
                    "All gesture-based actions have single-tap alternatives",
                    "Motion-triggered actions have UI alternatives (e.g., button for shake-to-undo)",
                    "Actions complete on touch-up (not touch-down) for cancellation ability",
                  ],
                },
                {
                  category: "Screen Reader Support",
                  items: [
                    "All screens navigable via VoiceOver/TalkBack swipe navigation",
                    "Reading order matches visual layout (logical content flow)",
                    "Headings are marked as headings for navigation",
                    "Custom components expose proper roles, states, and values",
                    "Focus moves to new content (modals, alerts, new screens)",
                    "Status messages announced without moving focus (live regions)",
                  ],
                },
                {
                  category: "Forms & Input",
                  items: [
                    "All form fields have associated labels",
                    "Input purpose is identified for autofill support",
                    "Error messages are specific and associated with the relevant field",
                    "Errors are announced to screen readers when they appear",
                    "Required fields are indicated accessibly (not just with color or asterisk)",
                  ],
                },
                {
                  category: "Layout & Visual",
                  items: [
                    "App works in both portrait and landscape orientations",
                    "Content respects system font size preferences (Dynamic Type / sp units)",
                    "No content is lost when text size is increased to 200%",
                    "Animations respect Reduce Motion preference",
                    "No content flashes more than 3 times per second",
                  ],
                },
                {
                  category: "Navigation & Structure",
                  items: [
                    "Consistent navigation patterns across screens",
                    "Back button/gesture works on every screen",
                    "App state is maintained during orientation changes",
                    "Timeout warnings with option to extend (if applicable)",
                    "External keyboard navigation works for all interactions",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.category}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="mb-3 font-bold text-purple-300">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-white/20 text-xs text-zinc-500">
                          ☐
                        </span>
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10: Remediation Strategy */}
          <section id="remediation" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              10. Remediation Strategy & Cost Breakdown
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Remediating an inaccessible mobile app requires a structured approach.
              Costs depend heavily on app complexity, framework used, and whether
              you're retrofitting or building accessibility in from scratch.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Cost Estimates by App Complexity
            </h3>

            <div className="mb-6 space-y-3">
              {[
                {
                  type: "Simple App",
                  desc: "5-10 screens, standard UI components, content-focused",
                  audit: "$5K-$10K",
                  remediation: "$10K-$30K",
                  timeline: "4-8 weeks",
                  examples: "Informational apps, basic forms, content readers",
                },
                {
                  type: "Medium App",
                  desc: "15-30 screens, some custom UI, form-heavy",
                  audit: "$10K-$20K",
                  remediation: "$30K-$75K",
                  timeline: "8-16 weeks",
                  examples: "Banking apps, e-commerce, booking systems",
                },
                {
                  type: "Complex App",
                  desc: "30+ screens, heavy custom UI, real-time features",
                  audit: "$15K-$30K",
                  remediation: "$75K-$200K+",
                  timeline: "16-32 weeks",
                  examples: "Ride-sharing, social media, mapping/navigation",
                },
              ].map((tier) => (
                <div
                  key={tier.type}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold text-zinc-200">{tier.type}</h4>
                    <span className="text-sm text-zinc-500">{tier.timeline}</span>
                  </div>
                  <p className="mb-3 text-sm text-zinc-400">{tier.desc}</p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-zinc-500">Audit: </span>
                      <span className="font-semibold text-purple-400">
                        {tier.audit}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Remediation: </span>
                      <span className="font-semibold text-green-400">
                        {tier.remediation}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    Examples: {tier.examples}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-6 rounded-xl border border-green-500/20 bg-green-500/5 p-6">
              <h3 className="mb-2 font-bold text-green-300">
                💰 Tax Credit: IRS Form 8826
              </h3>
              <p className="text-zinc-300 text-sm">
                Small businesses (under $1M revenue or fewer than 30 full-time
                employees) can claim up to{" "}
                <strong className="text-white">$5,000 annually</strong> via the
                Disabled Access Credit to offset accessibility costs.{" "}
                <Link
                  href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                  className="text-green-400 hover:text-green-300 underline"
                >
                  Read our Form 8826 guide →
                </Link>
              </p>
            </div>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Prioritization Framework: Fix What Matters Most First
            </h3>

            <div className="space-y-3">
              {[
                {
                  priority: "P0 — Critical",
                  color: "red",
                  items:
                    "Screen reader can't access core functionality (login, checkout, primary features). App crashes with assistive technology enabled.",
                },
                {
                  priority: "P1 — High",
                  color: "orange",
                  items:
                    "Missing labels on frequently-used elements. Form errors not announced. No focus management on screen changes. Touch targets too small on primary navigation.",
                },
                {
                  priority: "P2 — Medium",
                  color: "yellow",
                  items:
                    "Contrast failures. Gesture-only actions without alternatives. Custom components partially accessible. Heading structure incomplete.",
                },
                {
                  priority: "P3 — Low",
                  color: "blue",
                  items:
                    "Decorative images exposed to AT. Reading order quirks on secondary screens. Missing accessibility hints. Orientation lock on non-essential screens.",
                },
              ].map((p) => (
                <div
                  key={p.priority}
                  className={`rounded-xl border border-${p.color}-500/20 bg-${p.color}-500/5 p-4`}
                >
                  <h4 className="mb-1 font-bold text-zinc-200">{p.priority}</h4>
                  <p className="text-sm text-zinc-400">{p.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 11: Lawsuits */}
          <section id="lawsuits" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              11. Mobile App Accessibility Lawsuits: What You Need to Know
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              Mobile app accessibility litigation is accelerating. While website
              lawsuits dominate the headlines (
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                8,667+ federal filings in 2025
              </Link>
              ), app-specific cases are increasingly common — and settlements tend to
              be larger because apps represent a more significant barrier to access.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-zinc-200">
              Landmark Mobile App Cases
            </h3>

            <div className="mb-6 space-y-4">
              {[
                {
                  case: "NAD v. Netflix (2012)",
                  outcome: "Settlement — Netflix agreed to caption all streaming content",
                  significance:
                    "Established that digital streaming services are subject to ADA accessibility requirements. The case opened the door for app-based accessibility claims.",
                },
                {
                  case: "NFB v. Uber (2021)",
                  outcome: "Settlement — Uber improved app accessibility for blind riders",
                  significance:
                    "Uber's app failed to identify vehicle location via screen readers, announce ride status changes, or provide accessible navigation. Settlement required VoiceOver/TalkBack compatibility and accessibility training for drivers.",
                },
                {
                  case: "Domino's v. Robles (2019, Supreme Court)",
                  outcome: "Supreme Court declined to hear Domino's appeal — case returned to lower court",
                  significance:
                    "Ninth Circuit ruled that ADA applies to Domino's website and app. The Supreme Court's refusal to intervene effectively confirmed that digital services (including apps) are covered under ADA Title III.",
                },
                {
                  case: "Multiple Banking App Lawsuits (2020-2025)",
                  outcome: "Various settlements and consent decrees",
                  significance:
                    "Wells Fargo, Bank of America, and Capital One all faced lawsuits over inaccessible mobile banking features including inaccessible mobile check deposit, balance checking, and bill pay. Banking apps are now among the most-scrutinized app categories.",
                },
              ].map((lawsuit) => (
                <div
                  key={lawsuit.case}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="mb-1 font-bold text-zinc-200">{lawsuit.case}</h4>
                  <p className="mb-2 text-sm font-semibold text-purple-400">
                    {lawsuit.outcome}
                  </p>
                  <p className="text-sm text-zinc-400">{lawsuit.significance}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="mb-3 font-bold text-red-400">
                ⚠️ The Serial Plaintiff Threat
              </h3>
              <p className="mb-3 text-zinc-300 text-sm">
                The same serial plaintiff dynamics affecting{" "}
                <Link
                  href="/blog/courts-fighting-back-serial-ada-website-plaintiffs"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  website accessibility lawsuits
                </Link>{" "}
                are expanding to mobile apps. In 2025, Makeda Evans sued 50 businesses
                in the Gainesville, Florida area for website accessibility failures,
                with settlements averaging $6,500+. As app usage grows, expect serial
                plaintiffs to increasingly target mobile apps — particularly those
                with publicly visible accessibility failures.
              </p>
              <p className="text-zinc-300 text-sm">
                Your best defense is proactive compliance.{" "}
                <Link
                  href="/blog/how-to-respond-ada-website-lawsuit-demand-letter"
                  className="text-red-400 hover:text-red-300 underline"
                >
                  Learn how to respond if you receive a demand letter →
                </Link>
              </p>
            </div>
          </section>

          {/* Section 12: Government Action Plan */}
          <section id="government" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              12. Government Agency 53-Day Action Plan
            </h2>

            <p className="mb-4 text-zinc-300 leading-relaxed">
              With the April 24, 2026 Title II deadline now 53 days away, government
              entities serving 50,000+ people need to act immediately. Here's a
              realistic action plan.
            </p>

            <div className="space-y-4">
              {[
                {
                  week: "Week 1-2",
                  title: "Inventory & Audit",
                  tasks: [
                    "Catalog all mobile apps (both public-facing and internal)",
                    "Identify third-party apps used as part of government services",
                    "Run automated accessibility scans (Accessibility Inspector, Scanner)",
                    "Conduct VoiceOver/TalkBack walkthroughs of critical user flows",
                    "Document all findings with severity levels",
                  ],
                },
                {
                  week: "Week 3-4",
                  title: "Critical Fixes",
                  tasks: [
                    "Fix all P0 (crash/block) issues — screen reader access to core functions",
                    "Add missing accessibility labels to all interactive elements",
                    "Fix contrast failures on primary screens",
                    "Ensure touch targets meet minimum size requirements",
                    "Implement focus management for screen transitions",
                  ],
                },
                {
                  week: "Week 5-6",
                  title: "Comprehensive Remediation",
                  tasks: [
                    "Address P1 and P2 issues — custom components, gesture alternatives",
                    "Test all forms with screen readers, fix error announcement",
                    "Verify Dynamic Type / font scaling support",
                    "Test with Switch Control / Switch Access",
                    "Remediate third-party embedded content where possible",
                  ],
                },
                {
                  week: "Week 7-8",
                  title: "Validation & Documentation",
                  tasks: [
                    "Full WCAG 2.1 AA audit against all success criteria",
                    "Conduct user testing with assistive technology users",
                    "Document conformance status in an accessibility statement",
                    "Establish ongoing monitoring and testing processes",
                    "Create VPAT/ACR for each app (enterprise procurement)",
                  ],
                },
              ].map((phase) => (
                <div
                  key={phase.week}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-lg bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                      {phase.week}
                    </span>
                    <h3 className="font-bold text-zinc-200">{phase.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {phase.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-zinc-400"
                      >
                        <span className="mt-0.5 text-purple-400">→</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <h3 className="mb-2 font-bold text-yellow-300">
                📋 Don't Forget Third-Party Apps
              </h3>
              <p className="text-zinc-300 text-sm">
                The Title II rule covers third-party content embedded in government
                digital services. If your city uses a third-party transit app, parking
                app, or utility payment app as part of its services, those apps must
                also conform to WCAG 2.1 AA. Review vendor contracts and require
                accessibility conformance documentation.
              </p>
            </div>
          </section>

          {/* Section 13: FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white">
              13. Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Does the ADA require mobile apps to be accessible?",
                  a: "Yes. The DOJ's April 2024 Title II rule explicitly requires state and local government mobile apps to conform to WCAG 2.1 Level AA. For private businesses under Title III, courts have increasingly held that mobile apps are covered as extensions of places of public accommodation. The compliance deadline for larger government entities (50,000+ population) is April 24, 2026.",
                },
                {
                  q: "What WCAG guidelines apply to mobile apps?",
                  a: "WCAG 2.1 Level AA applies to mobile apps under the Title II rule. Key mobile-specific success criteria include 1.3.4 (Orientation), 1.4.10 (Reflow), 1.4.11 (Non-text Contrast), 2.5.1 (Pointer Gestures), 2.5.3 (Label in Name), and 2.5.4 (Motion Actuation). All four WCAG principles — Perceivable, Operable, Understandable, and Robust — apply to native mobile apps.",
                },
                {
                  q: "How do I test my mobile app for accessibility?",
                  a: "Use a combination of automated and manual testing. For iOS, use VoiceOver and Xcode's Accessibility Inspector. For Android, use TalkBack and Google's Accessibility Scanner app. Automated tools catch only about 30-40% of barriers — manual testing with real screen readers is essential.",
                },
                {
                  q: "What are the most common mobile app accessibility issues?",
                  a: "Missing or unclear accessibility labels (~68% of apps), insufficient color contrast (~61%), touch targets too small (~52%), custom components not exposed to assistive technology (~45%), and no focus management after state changes (~40%).",
                },
                {
                  q: "Is WCAG designed for mobile apps or just websites?",
                  a: "While WCAG was originally written for web content, WCAG 2.1 added 17 new success criteria specifically addressing mobile challenges. The W3C published supplementary guidance on applying WCAG to mobile. The DOJ's Title II rule explicitly applies WCAG 2.1 to mobile applications.",
                },
                {
                  q: "How much does mobile app accessibility remediation cost?",
                  a: "A basic accessibility audit ranges from $5,000-$15,000. Remediation for a simple app might cost $10,000-$30,000, while complex apps can run $75,000-$200,000+. Building accessibility in from the start costs 10-20% more than standard development, compared to 50-100% more for retrofitting.",
                },
                {
                  q: "Do hybrid apps (React Native, Flutter) need to be accessible?",
                  a: "Yes. Hybrid and cross-platform apps must meet the same accessibility standards. React Native provides accessibility props that map to native APIs. Flutter uses a Semantics widget. Both require explicit implementation — accessibility is not automatic in any framework.",
                },
                {
                  q: "Can I be sued for an inaccessible mobile app?",
                  a: "Yes. Notable cases include NAD v. Netflix, Domino's v. Robles (Supreme Court declined to hear appeal), and NFB v. Uber. Under Title II, the DOJ can enforce with civil penalties up to $75,000+ per first violation. In California, private plaintiffs can seek $4,000+ per occurrence under the Unruh Act.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-white/10 bg-white/5"
                >
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-zinc-200 hover:text-purple-400">
                    {faq.q}
                  </summary>
                  <div className="border-t border-white/5 px-6 py-4 text-sm text-zinc-400">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 to-pink-950/20 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Start With Your Website, Then Tackle Your App
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-zinc-400">
              Most organizations' websites and mobile apps share the same
              accessibility issues. Use RatedWithAI to scan your website first —
              the findings will inform your mobile app remediation strategy.
            </p>
            <Link
              href="/#scanner"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/25"
            >
              Scan Your Website Free →
            </Link>
          </section>

          {/* Related Articles */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-white">
              📚 Related Guides
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  href: "/blog/ada-title-ii-deadline-countdown-2026",
                  title: "ADA Title II April 2026 Deadline Countdown",
                  desc: "Everything you need to know about the approaching compliance deadline.",
                },
                {
                  href: "/blog/wcag-22-complete-guide",
                  title: "WCAG 2.2 Complete Guide",
                  desc: "Comprehensive breakdown of every WCAG success criterion.",
                },
                {
                  href: "/blog/best-accessibility-testing-tools",
                  title: "Best Accessibility Testing Tools (2026)",
                  desc: "12 tools compared for web and app accessibility testing.",
                },
                {
                  href: "/blog/ada-compliance-audit-guide-2026",
                  title: "How to Conduct an ADA Accessibility Audit",
                  desc: "7-step methodology for comprehensive accessibility audits.",
                },
                {
                  href: "/blog/european-accessibility-act-eaa-compliance-us-businesses",
                  title: "European Accessibility Act (EAA) Guide",
                  desc: "International compliance requirements for digital products.",
                },
                {
                  href: "/blog/section-508-compliance-guide",
                  title: "Section 508 Compliance Guide",
                  desc: "Federal government accessibility requirements for digital services.",
                },
                {
                  href: "/blog/vpat-accessibility-conformance-report-guide-2026",
                  title: "VPAT Guide: Accessibility Conformance Reports",
                  desc: "Create VPATs for enterprise and government procurement.",
                },
                {
                  href: "/blog/irs-form-8826-disabled-access-credit-website-accessibility",
                  title: "IRS Form 8826: Disabled Access Credit",
                  desc: "Claim up to $5,000 annually to offset accessibility costs.",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-500/30 hover:bg-white/10"
                >
                  <h3 className="mb-1 font-semibold text-zinc-200 group-hover:text-purple-400">
                    {article.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{article.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
