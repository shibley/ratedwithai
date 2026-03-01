/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Restaurant Website ADA Compliance Guide 2026: Avoid the #1 Sued Industry | RatedWithAI",
  description:
    "Restaurants are the most-sued industry for ADA website violations — 30% of all lawsuits. Learn how to make your restaurant website accessible, avoid demand letters, and comply with WCAG 2.1 AA.",
  openGraph: {
    title:
      "Restaurant Website ADA Compliance Guide 2026",
    description:
      "Restaurants face 30% of all ADA website lawsuits. This guide covers menus, online ordering, reservations, and the accessibility fixes that keep you out of court.",
    type: "article",
    publishedTime: "2026-03-01T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "restaurant ada compliance",
    "restaurant website accessibility",
    "ada compliance restaurant website",
    "restaurant ada lawsuit",
    "restaurant website wcag",
    "online ordering accessibility",
    "restaurant menu accessibility",
    "ada website compliance food service",
    "restaurant demand letter ada",
    "accessible restaurant website",
    "restaurant ada compliance checklist",
    "restaurant website ada requirements 2026",
    "food service website accessibility",
    "ada title iii restaurant",
    "restaurant online ordering ada",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/restaurant-website-ada-compliance-2026",
  },
};

export default function RestaurantADACompliancePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Restaurant Website ADA Compliance: The Complete 2026 Guide for the Most-Sued Industry",
    description:
      "Restaurants face 30% of all ADA website lawsuits — more than any other industry. Complete guide to making restaurant websites accessible: menus, online ordering, reservations, and WCAG compliance.",
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
        "https://ratedwithai.com/blog/restaurant-website-ada-compliance-2026",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are restaurant websites required to be ADA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Department of Justice has consistently held that websites of businesses open to the public — including restaurants — are covered under ADA Title III as 'places of public accommodation.' This applies whether you're a single-location diner or a national chain. The April 2024 Title II rule update and multiple federal court decisions have reinforced that websites must be accessible, typically measured against WCAG 2.1 Level AA standards.",
        },
      },
      {
        "@type": "Question",
        name: "Why are restaurants the most-sued industry for ADA website violations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to EcomBack's 2025 mid-year report, restaurants, food, and beverage businesses faced 614 lawsuits (30.49% of all ADA website lawsuits) — the highest of any industry. Restaurants are targeted because: (1) They rely heavily on PDF menus that are almost never accessible, (2) Online ordering systems often have critical accessibility barriers, (3) Most restaurant websites are built on budget templates with no accessibility testing, (4) There are hundreds of thousands of restaurant websites, giving serial plaintiffs a massive target pool, and (5) Restaurant owners are typically unfamiliar with digital accessibility requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can my restaurant be sued for an inaccessible PDF menu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — and PDF menus are one of the most common triggers for restaurant ADA lawsuits. PDF files are notoriously difficult to make accessible. Scanned image PDFs are completely inaccessible to screen readers. Even properly generated PDFs often lack proper heading structure, reading order, and alt text. The best approach is to offer your menu as accessible HTML on your website in addition to (or instead of) a PDF download. If you must use PDFs, they need proper tags, alt text, reading order, and language designation.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost if my restaurant gets sued for ADA website violations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary significantly. Demand letter settlements typically range from $3,000-$10,000. If a federal lawsuit is filed, settlements for small restaurants average $5,000-$20,000, plus plaintiff's attorney fees of $5,000-$25,000+. In California, statutory damages under the Unruh Civil Rights Act start at $4,000 per visit. A Gainesville, Florida bakery settled for approximately $6,500. Multi-location chains face exponentially higher exposure. The total cost of fixing accessibility issues proactively ($2,000-$8,000) is almost always less than a single lawsuit settlement.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common accessibility issues on restaurant websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common issues include: (1) PDF menus without proper tags or alt text — often scanned images that screen readers can't read at all, (2) Online ordering forms with unlabeled inputs, inaccessible dropdown menus, and missing error messages, (3) Image-heavy pages with no alt text — food photography without descriptions, (4) Low contrast text, especially over background images, (5) Reservation widgets that aren't keyboard accessible, (6) Missing page titles and heading structure, (7) Auto-playing background videos or music, (8) Interactive maps without text-based address alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "Do food delivery and online ordering platforms like DoorDash and Uber Eats handle accessibility for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partially. Third-party platforms like DoorDash, Uber Eats, and Grubhub manage their own platform accessibility, but your restaurant's OWN website is a separate legal obligation. If you use a self-hosted ordering system (Toast, Square Online, ChowNow, etc.), accessibility is primarily your responsibility. Even if you use third-party delivery platforms, having an accessible website is still required under the ADA if you maintain one. Additionally, the menu content you upload to third-party platforms (photos, descriptions) should include accessibility considerations.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a tax credit to help my restaurant pay for website accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small businesses with revenue under $1 million or fewer than 30 full-time employees can claim IRS Form 8826 (Disabled Access Credit) for up to $5,000 per year toward accessibility expenditures — including website accessibility audits and remediation. Additionally, Section 190 of the tax code allows businesses to deduct up to $15,000 per year in accessibility-related expenses. Combined, these can offset $20,000 per year in accessibility costs. Many restaurant owners don't know these credits exist.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make my restaurant website ADA compliant quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with these high-impact steps: (1) Run a free accessibility scan at ratedwithai.com to identify your specific issues, (2) Convert PDF menus to accessible HTML pages, (3) Add alt text to all food images, (4) Ensure your online ordering flow is keyboard-accessible, (5) Fix color contrast issues (minimum 4.5:1 ratio for text), (6) Add proper form labels to reservation and contact forms, (7) Include text-based hours, address, and phone number (don't rely only on images or maps), (8) Test your site with a screen reader. For a small restaurant website, these fixes can typically be completed in 1-2 weeks for $2,000-$5,000.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">
            Restaurant Website ADA Compliance
          </span>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span>·</span>
              <span>20 min read</span>
              <span>·</span>
              <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-2 py-0.5 rounded-full text-xs font-medium">
                Industry Guide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Restaurant Website ADA Compliance: The Complete 2026 Guide for the
              Most-Sued Industry in America
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Restaurants now face{" "}
              <strong>30.49% of all ADA website lawsuits</strong> — more than
              fashion, more than retail, more than any other industry. In the
              first half of 2025 alone, 614 restaurants were sued over website
              accessibility barriers. PDF menus, inaccessible online ordering,
              and missing alt text are turning restaurants into the easiest
              targets for serial plaintiffs. Here's how to protect your business.
            </p>
          </header>

          {/* Alert Banner */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mb-10 not-prose">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🍽️</span>
              <div>
                <h3 className="font-bold text-orange-800 dark:text-orange-200 text-lg mb-2">
                  Restaurant Owner? Scan Your Website Now
                </h3>
                <p className="text-orange-700 dark:text-orange-300 mb-3">
                  Most restaurant websites have 15-50+ accessibility violations.
                  Find yours before a plaintiff does.
                </p>
                <Link
                  href="/check"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm"
                >
                  🔍 Free Restaurant Website Accessibility Scan
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
                href="#why-restaurants-top-target"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                1. Why Restaurants Are the #1 ADA Lawsuit Target
              </a>
              <a
                href="#the-numbers"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                2. The Numbers: Restaurant ADA Lawsuits by the Data
              </a>
              <a
                href="#real-cases"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                3. Real Restaurant ADA Cases: From Cupcake Shops to Chinese Restaurants
              </a>
              <a
                href="#common-violations"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                4. The 10 Most Common Restaurant Website Accessibility Violations
              </a>
              <a
                href="#pdf-menu-problem"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                5. The PDF Menu Problem: Your Biggest Liability
              </a>
              <a
                href="#online-ordering"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                6. Online Ordering Accessibility: A Compliance Minefield
              </a>
              <a
                href="#reservation-systems"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                7. Reservation Systems and Forms
              </a>
              <a
                href="#platform-guide"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                8. Platform-Specific Guide: Wix, Squarespace, WordPress, and Toast
              </a>
              <a
                href="#fix-your-site"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                9. How to Fix Your Restaurant Website: The 30-Day Plan
              </a>
              <a
                href="#third-party-platforms"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                10. Do DoorDash and Uber Eats Handle This for You?
              </a>
              <a
                href="#courts-fighting-back"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                11. Good News: Courts Are Scrutinizing Serial Plaintiffs
              </a>
              <a
                href="#tax-credits"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                12. Tax Credits That Pay for Your Fixes
              </a>
              <a
                href="#compliance-checklist"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                13. Restaurant Website Accessibility Checklist
              </a>
              <a
                href="#faq"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                14. FAQ
              </a>
            </nav>
          </div>

          {/* Section 1: Why Restaurants Are the Top Target */}
          <section id="why-restaurants-top-target">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              1. Why Restaurants Are the #1 ADA Lawsuit Target
            </h2>

            <p>
              If you own a restaurant, you're in the crosshairs. Not because the
              ADA singles out food service businesses — it doesn't. But because
              restaurant websites have a unique combination of characteristics
              that make them{" "}
              <strong>irresistible to serial ADA plaintiffs</strong>:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-4">
                Why Restaurants Get Sued More Than Any Other Industry
              </h3>
              <ul className="space-y-3 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">📄</span>
                  <div>
                    <strong>PDF menus everywhere:</strong> The single most common
                    restaurant accessibility failure. Scanned image PDFs are
                    100% invisible to screen readers. Even "native" PDFs rarely
                    have proper tags, alt text, or reading order.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🍕</span>
                  <div>
                    <strong>Image-heavy design:</strong> Restaurant websites are
                    built to show off food photography — gorgeous images with no
                    alt text, text baked into images, and decorative backgrounds
                    that destroy contrast ratios.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🛒</span>
                  <div>
                    <strong>Online ordering barriers:</strong> COVID permanently
                    shifted restaurants to digital ordering, but most ordering
                    systems were built for speed, not accessibility.
                    Inaccessible checkout flows affect real customers every day.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">💰</span>
                  <div>
                    <strong>Small, easy targets:</strong> Most restaurants are
                    small businesses without legal teams. Serial plaintiffs know
                    that restaurant owners settle quickly for $3,000-$10,000
                    rather than fight.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">📊</span>
                  <div>
                    <strong>Massive target pool:</strong> There are over 1
                    million restaurants in the U.S. Most have websites. Almost
                    none have been accessibility tested. That's a nearly
                    unlimited supply of potential defendants.
                  </div>
                </li>
              </ul>
            </div>

            <p>
              The result? In the first half of 2025, restaurants, food, and
              beverage businesses faced{" "}
              <strong>614 ADA website lawsuits — 30.49% of all filings</strong>,
              according to{" "}
              <a
                href="https://www.ecomback.com/ada-website-lawsuits-recap-report/2025-mid-year-ada-website-lawsuit-report"
                target="_blank"
                rel="noopener noreferrer"
              >
                EcomBack's 2025 Mid-Year Report
              </a>
              . That's nearly 1 in 3 lawsuits targeting your industry.
            </p>
          </section>

          {/* Section 2: The Numbers */}
          <section id="the-numbers">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              2. The Numbers: Restaurant ADA Lawsuits by the Data
            </h2>

            <p>
              The trajectory of restaurant ADA lawsuits tells a clear story —
              this problem is getting worse, not better:
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                📊 Restaurant/Food ADA Website Lawsuits by Year
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span>2022 (AudioEye data)</span>
                  <span className="font-mono font-bold">292 lawsuits</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span>2023 (EcomBack — 22.92% share)</span>
                  <span className="font-mono font-bold">885 lawsuits</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span>2024 (EcomBack — 23.78% share)</span>
                  <span className="font-mono font-bold">758 lawsuits</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>2025 H1 (EcomBack — 30.49% share)</span>
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">
                    614 lawsuits (pace: ~1,200+/year)
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Sources: EcomBack Annual ADA Website Lawsuit Reports (2023,
                2024, 2025 Mid-Year), AudioEye 2022 Report
              </p>
            </div>

            <p>
              The share of lawsuits targeting restaurants{" "}
              <strong>jumped from 23.78% to 30.49%</strong> between 2024 and the
              first half of 2025. At the current pace, restaurants could face
              over 1,200 ADA website lawsuits in 2025 — a potential new record
              for the industry.
            </p>

            <p>
              Meanwhile, according to{" "}
              <Link href="/blog/ada-lawsuits-ai-powered-pro-se-2025">
                Seyfarth Shaw's annual data
              </Link>
              , total ADA Title III federal lawsuits held steady at 8,667 in
              2025. California leads with 3,252 filings, followed by Florida
              (1,823) and New York (1,471). Just{" "}
              <strong>16 law firms filed over 90% of all cases</strong>, with
              Manning Law, APC alone responsible for 14% of filings.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6 not-prose">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                    The Numbers Are Actually Higher
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    These statistics only cover{" "}
                    <strong>federal court filings</strong>. Many firms —
                    including Mizrahi Kroub LLP — have shifted to filing in
                    state courts, where cases are harder to track. Additionally,
                    thousands of demand letters are sent each year that never
                    become formal lawsuits. The true number of restaurants facing
                    ADA legal action is likely{" "}
                    <strong>2-3x higher than reported</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Real Cases */}
          <section id="real-cases">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              3. Real Restaurant ADA Cases: From Cupcake Shops to Chinese
              Restaurants
            </h2>

            <p>
              ADA website lawsuits hit restaurants of every size, from
              neighborhood bakeries to national chains. Here are real cases that
              illustrate the landscape:
            </p>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                🥡 Black v. 3 Times 90, Inc. (EDNY, 2025)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                A serial plaintiff claimed he visited a Chinese restaurant's
                website because he "enjoyed this type of cuisine" and wanted to
                visit a location "immediately" based on a friend's
                recommendation. He alleged the website's accessibility barriers
                prevented him from finding menu and location information.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>The court's response?</strong> Judge Natasha Merle{" "}
                <strong>dismissed the case sua sponte</strong> (on her own
                initiative) for lack of standing. The judge pointed out that the
                plaintiff frequented the neighborhoods where the restaurants were
                located but never actually visited any of them. The court
                questioned why someone allegedly desperate to try the food never
                attempted to find the information through other means. And, as
                the court noted, "there are countless options for dumplings and
                unique dining experiences in New York City."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Source:{" "}
                <a
                  href="https://www.adatitleiii.com/2025/05/new-york-federal-courts-are-not-rolling-out-the-welcome-mat-for-serial-plaintiffs-in-website-accessibility-lawsuits-anymore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Seyfarth Shaw LLP / ADA Title III
                </a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                🧁 Uppercrust Bakery (Gainesville, FL)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                A small bakery in Gainesville, Florida received an ADA demand
                letter alleging website accessibility violations. The bakery
                settled for approximately <strong>$6,500</strong> — a significant
                sum for a small food service business. As reported in the{" "}
                <Link
                  href="/blog/how-to-respond-ada-website-lawsuit-demand-letter"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Cox Media Group investigation
                </Link>
                , one plaintiff in the Gainesville area alone filed lawsuits
                against 49 local businesses.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                🍕 Satchel's Pizza (Gainesville, FL)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Unlike Uppercrust, Satchel's Pizza decided to fight. The
                restaurant filed a{" "}
                <strong>motion to dismiss in February 2026</strong>, challenging
                the plaintiff's standing to sue. Satchel's is one of a growing
                number of small businesses pushing back against serial ADA
                plaintiffs — though fighting a lawsuit typically costs
                significantly more than settling.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Source:{" "}
                <a
                  href="https://www.coxmediagroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Cox Media Group Investigation
                </a>
                ,{" "}
                <a
                  href="https://www.alligator.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  UF Independent Florida Alligator
                </a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                🧸 Fernandez v. Cuddle Clones (SDNY, 2026) — Not a Restaurant, But a Warning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                While not a restaurant case, this February 2026 ruling is
                directly relevant. A serial plaintiff who filed 57+ lawsuits —
                including 22 in just four days — claimed she wanted to buy a "pet
                toy" from Cuddle Clones. The problem? Cuddle Clones sells
                $249-$499 <em>custom pet replicas</em>, not pet toys. Judge
                Vargas ordered <strong>jurisdictional discovery</strong> into
                whether the plaintiff genuinely intended to make a purchase,
                including a forensic examination of her devices.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                This decision — alongside{" "}
                <Link
                  href="/blog/courts-fighting-back-serial-ada-website-plaintiffs"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  others we've covered in detail
                </Link>{" "}
                — signals that federal judges are increasingly skeptical of
                copy-paste complaints filed by serial plaintiffs against small
                businesses.
              </p>
            </div>

            <p>
              <strong>The takeaway for restaurants:</strong> While courts are
              pushing back against serial plaintiffs, the lawsuits are still
              coming. The best defense is making your website accessible before
              you get targeted.
            </p>
          </section>

          {/* Section 4: Common Violations */}
          <section id="common-violations">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              4. The 10 Most Common Restaurant Website Accessibility Violations
            </h2>

            <p>
              After analyzing hundreds of restaurant websites with accessibility
              testing tools, these are the violations we see most frequently —
              and the ones most likely to trigger a lawsuit:
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 font-bold px-3 py-1 rounded-full text-sm">
                    #1
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Inaccessible PDF Menus
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Scanned image PDFs are completely invisible to screen readers.
                  Even "digital native" PDFs usually lack proper tags, heading
                  structure, and alt text. This is the most cited violation in
                  restaurant ADA lawsuits.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Publish your menu as an accessible HTML
                  page. Keep PDFs as a secondary download option.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 font-bold px-3 py-1 rounded-full text-sm">
                    #2
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Missing Alt Text on Food Images
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Restaurant websites showcase food photography heavily. When
                  images lack alt text, screen reader users encounter a wall of
                  unlabeled images. The alt text should describe both the dish
                  and its key ingredients.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Add descriptive alt text: "Grilled
                  salmon with lemon butter sauce, roasted asparagus, and wild
                  rice" — not just "food photo" or "IMG_3847.jpg."
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 font-bold px-3 py-1 rounded-full text-sm">
                    #3
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Inaccessible Online Ordering Forms
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Unlabeled form fields, inaccessible dropdown menus for
                  customizations (e.g., "Choose your toppings"), missing error
                  messages when required fields are skipped, and checkout buttons
                  that can't be activated by keyboard.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Ensure all form inputs have associated{" "}
                  <code>&lt;label&gt;</code> elements. Use ARIA attributes for
                  custom dropdowns. Provide clear error messages linked to the
                  fields they describe.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-bold px-3 py-1 rounded-full text-sm">
                    #4
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Low Contrast Text Over Images
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  White text over a food photograph might look elegant, but if
                  the contrast ratio drops below 4.5:1, it fails WCAG 2.1 AA.
                  Restaurant websites often use light text on busy background
                  images, making content unreadable for users with low vision.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Add a dark overlay behind text on
                  images. Use our{" "}
                  <Link
                    href="/color-contrast"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    color contrast checker
                  </Link>{" "}
                  to verify ratios.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-bold px-3 py-1 rounded-full text-sm">
                    #5
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Keyboard-Inaccessible Navigation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Hamburger menus that only respond to touch/click, dropdown
                  navigation that requires hover, and interactive elements
                  without visible focus indicators. Users who can't use a mouse
                  are completely locked out.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Test your entire site using only the Tab
                  key. Every interactive element must be reachable and operable
                  via keyboard.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-bold px-3 py-1 rounded-full text-sm">
                    #6
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Missing or Improper Heading Structure
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Restaurant websites frequently use visual styling for headings
                  (large bold text) without using proper{" "}
                  <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> HTML tags.
                  Screen reader users rely on heading hierarchy to navigate
                  content.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Use semantic HTML headings in proper
                  order. Don't skip levels (e.g., h1 → h3).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 font-bold px-3 py-1 rounded-full text-sm">
                    #7
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Reservation Widgets Without Accessibility
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Third-party reservation widgets (OpenTable, Resy, Yelp
                  Reservations) embedded via iframes may not be fully accessible.
                  Date pickers are notoriously difficult for screen readers, and
                  time selection dropdowns often lack proper labels.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Test your reservation widget with
                  keyboard-only navigation. Provide a phone number as an
                  alternative booking method. If using an iframe, add a
                  descriptive <code>title</code> attribute.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 font-bold px-3 py-1 rounded-full text-sm">
                    #8
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Auto-Playing Video and Audio
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Background videos of sizzling steaks or ambient restaurant
                  music that plays automatically. This disorients screen reader
                  users and can trigger seizures for users with photosensitive
                  epilepsy if the video contains flashing content.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Never auto-play audio. Auto-playing
                  video must be muted by default with visible pause controls.
                  Add captions to all video content.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 font-bold px-3 py-1 rounded-full text-sm">
                    #9
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Location Info Only as Embedded Map
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Many restaurant websites show their address only on an
                  embedded Google Map. If the map fails to load or is
                  inaccessible, users have no way to find the restaurant. Hours
                  embedded as images are equally problematic.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Always include a text-based address,
                  phone number, and hours in addition to any interactive map. Use{" "}
                  <code>&lt;address&gt;</code> HTML tags for semantic clarity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 font-bold px-3 py-1 rounded-full text-sm">
                    #10
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Missing Page Titles and Language Attributes
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Pages without descriptive <code>&lt;title&gt;</code> tags
                  (e.g., "Home" or blank), and HTML documents missing the{" "}
                  <code>lang</code> attribute. These are WCAG Level A
                  failures — the most basic level of compliance.
                </p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-2">
                  <strong>Fix:</strong> Every page should have a unique,
                  descriptive title: "Mario's Italian Kitchen — Menu | Portland,
                  OR." Add <code>lang="en"</code> to your HTML tag.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: PDF Menu Problem */}
          <section id="pdf-menu-problem">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              5. The PDF Menu Problem: Your Biggest Liability
            </h2>

            <p>
              If there's one thing that makes restaurant websites uniquely
              vulnerable, it's the PDF menu. Here's why this format is so
              dangerous:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-4">
                🚫 Why PDF Menus Fail Accessibility
              </h3>
              <ul className="space-y-3 text-red-700 dark:text-red-300">
                <li>
                  <strong>Scanned image PDFs</strong> contain zero readable
                  text. A screen reader encounters nothing — it's as if the
                  document doesn't exist.
                </li>
                <li>
                  <strong>Even "native" PDFs</strong> generated from Word or
                  InDesign usually lack proper tag structure, reading order, alt
                  text for images, and bookmarks.
                </li>
                <li>
                  <strong>Menu PDFs change frequently</strong> (seasonal menus,
                  price updates), and accessibility is rarely maintained through
                  updates.
                </li>
                <li>
                  <strong>PDF menus on mobile</strong> often require zooming and
                  scrolling that breaks for assistive technology users.
                </li>
                <li>
                  <strong>Multi-language menus</strong> (common at sushi,
                  Chinese, Thai restaurants) rarely have proper language
                  attributes set.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              The Solution: HTML Menus
            </h3>

            <p>
              The gold standard for restaurant menu accessibility is an HTML
              page. Here's what an accessible restaurant menu looks like:
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono">
{`<!-- Accessible Restaurant Menu Structure -->
<main>
  <h1>Mario's Italian Kitchen — Dinner Menu</h1>
  <p>Updated March 2026. Allergen info marked with icons.
     Ask your server about accommodations.</p>

  <section aria-labelledby="appetizers">
    <h2 id="appetizers">Appetizers</h2>

    <div role="list">
      <div role="listitem">
        <h3>Bruschetta Trio</h3>
        <p>Grilled ciabatta topped with tomato-basil,
           roasted garlic, and olive tapenade.</p>
        <p><strong>$14</strong></p>
        <p>
          <span aria-label="Vegetarian">🌱</span>
          <span aria-label="Contains gluten">🌾</span>
        </p>
      </div>
      <!-- More items... -->
    </div>
  </section>

  <section aria-labelledby="allergen-key">
    <h2 id="allergen-key">Allergen Key</h2>
    <ul>
      <li>🌱 Vegetarian</li>
      <li>🌾 Contains Gluten</li>
      <li>🥜 Contains Tree Nuts</li>
      <li>🥛 Contains Dairy</li>
    </ul>
  </section>
</main>`}
              </pre>
            </div>

            <p>
              This structure gives screen reader users full navigation through
              menu sections, clear pricing, allergen information, and dietary
              labels — the same experience sighted users get from a beautifully
              designed menu card.
            </p>

            <p>
              <strong>Can you still offer a PDF download?</strong> Yes — as long
              as the HTML version is the primary menu and the PDF is an optional
              download. If you must use PDFs, ensure they're tagged,
              bookmarked, and tested with a screen reader.
            </p>
          </section>

          {/* Section 6: Online Ordering */}
          <section id="online-ordering">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              6. Online Ordering Accessibility: A Compliance Minefield
            </h2>

            <p>
              Online ordering became essential during COVID and is now
              permanently embedded in how restaurants operate. But most ordering
              systems were built for conversion speed, not accessibility. Here
              are the critical areas:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Menu Browsing and Item Selection
            </h3>
            <ul>
              <li>
                Menu categories must be navigable by keyboard and screen reader
              </li>
              <li>
                Item descriptions, prices, and customization options need proper
                labels
              </li>
              <li>
                "Add to Cart" buttons must be clearly associated with their
                respective menu items
              </li>
              <li>
                Quantity selectors need increment/decrement buttons that work
                with keyboard
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Customization and Modifiers
            </h3>
            <ul>
              <li>
                Checkboxes for toppings must have visible labels (not just icons)
              </li>
              <li>
                Required vs. optional modifiers must be clearly communicated
              </li>
              <li>
                Special instructions text areas need associated{" "}
                <code>&lt;label&gt;</code> elements
              </li>
              <li>
                Upcharge amounts must be programmatically associated with their
                options
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Cart and Checkout
            </h3>
            <ul>
              <li>
                Cart contents must be readable by screen readers with item
                names, quantities, and prices
              </li>
              <li>
                The checkout flow should be navigable with keyboard only — no
                mouse traps
              </li>
              <li>
                Error messages ("Please enter a valid zip code") must be
                announced to screen readers and visually associated with the
                correct field
              </li>
              <li>
                Order confirmation must be accessible — not just a popup that
                screen readers can't detect
              </li>
              <li>
                Payment form fields (card number, expiration, CVV) must have
                proper labels
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-6 not-prose">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                    Pro Tip: Test the Entire Ordering Flow
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Don't just test individual pages. Complete an entire order
                    using only your keyboard (no mouse). Start from the menu,
                    add items, customize them, proceed to checkout, and complete
                    payment. If you get stuck at any point, your customers with
                    disabilities are stuck there too.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Popular Ordering Platforms: Accessibility Status
            </h3>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">⚠️</span>
                  <div>
                    <strong>Toast:</strong> Has made accessibility improvements
                    but still has gaps in customization modals and keyboard
                    navigation. Test thoroughly.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">⚠️</span>
                  <div>
                    <strong>Square Online:</strong> Basic accessibility support
                    but custom themes can break it. Use their default templates
                    as a starting point.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">⚠️</span>
                  <div>
                    <strong>ChowNow:</strong> Embedded ordering widgets may not
                    integrate cleanly with your site's accessibility. Test the
                    iframe integration.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <div>
                    <strong>Shopify (for food retail):</strong> Stronger
                    accessibility foundations, but still requires theme testing
                    and custom work. See our{" "}
                    <Link
                      href="/blog/shopify-ada-compliance-guide-2026"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Shopify ADA compliance guide
                    </Link>
                    .
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Note: Accessibility status changes frequently. Always test your
                specific implementation rather than relying on platform claims.
              </p>
            </div>
          </section>

          {/* Section 7: Reservation Systems */}
          <section id="reservation-systems">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              7. Reservation Systems and Forms
            </h2>

            <p>
              Reservation systems are a critical touch point. A customer who
              can't make a reservation online is being excluded from your
              business — exactly the kind of barrier the ADA is designed to
              address.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Key Requirements for Accessible Reservations
            </h3>

            <ul>
              <li>
                <strong>Date pickers</strong> must be keyboard operable. Users
                should be able to select a date using arrow keys, Enter, and
                Escape. Consider offering a text input alternative (type the
                date directly).
              </li>
              <li>
                <strong>Time selection</strong> dropdowns need proper
                <code>&lt;label&gt;</code> elements and ARIA attributes if
                custom-styled.
              </li>
              <li>
                <strong>Party size</strong> selectors must be accessible. If
                using a custom stepper (+/- buttons), ensure they're keyboard
                operable and announce the current value.
              </li>
              <li>
                <strong>Confirmation messages</strong> should use ARIA live
                regions to announce success or failure to screen readers.
              </li>
              <li>
                <strong>Phone alternative:</strong> Always display a phone
                number prominently as an alternative to online reservation.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Contact Forms
            </h3>

            <p>
              Your contact form needs proper{" "}
              <code>&lt;label&gt;</code> elements for every input field, clear
              required field indicators (not just color — use text like
              "required"), accessible error messages that identify which fields
              need correction, and a visible focus state on all form elements.
            </p>
          </section>

          {/* Section 8: Platform Guide */}
          <section id="platform-guide">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              8. Platform-Specific Guide: Wix, Squarespace, WordPress, and
              Toast
            </h2>

            <p>
              Your website platform determines your accessibility baseline. Here
              are platform-specific tips for the most common restaurant website
              builders:
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  WordPress (40%+ of restaurant websites)
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>
                    ✅ Use an accessibility-tested theme (Flavor, flavor-starter,
                    flavor-developer themes have accessible options)
                  </li>
                  <li>
                    ✅ Install WP Accessibility plugin for quick fixes (skip
                    links, focus styles, alt text enforcement)
                  </li>
                  <li>
                    ⚠️ Avoid page builders that generate non-semantic HTML
                    (test with a screen reader)
                  </li>
                  <li>
                    ⚠️ Restaurant-specific plugins (menu builders, reservation
                    systems) often have poor accessibility — test each one
                  </li>
                  <li>
                    📖 See our{" "}
                    <Link
                      href="/blog/wordpress-accessibility-guide"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      complete WordPress accessibility guide
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  Squarespace
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>
                    ✅ Uses semantic HTML by default (better baseline than many
                    platforms)
                  </li>
                  <li>
                    ✅ Built-in alt text fields for images (use them!)
                  </li>
                  <li>
                    ⚠️ Restaurant templates with full-bleed images often have
                    contrast issues
                  </li>
                  <li>
                    ⚠️ Custom CSS can break accessibility — test after any
                    styling changes
                  </li>
                  <li>
                    📖 See our{" "}
                    <Link
                      href="/blog/squarespace-ada-compliance-guide-2026"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Squarespace ADA compliance guide
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  Wix
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>
                    ✅ Wix Accessibility Wizard helps fix basic issues
                  </li>
                  <li>
                    ✅ Restaurant-specific template (Wix Restaurant) has ordering
                    integration
                  </li>
                  <li>
                    ⚠️ Drag-and-drop design freedom can easily create
                    inaccessible layouts
                  </li>
                  <li>
                    ⚠️ Menu display apps may not be fully accessible — test with
                    keyboard
                  </li>
                  <li>
                    📖 See our{" "}
                    <Link
                      href="/blog/wix-ada-compliance-guide-2026"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Wix ADA compliance guide
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
                  Toast (Restaurant-Specific)
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>
                    ✅ POS-integrated ordering reduces some website dependencies
                  </li>
                  <li>
                    ⚠️ Toast websites use custom templates — accessibility
                    varies significantly
                  </li>
                  <li>
                    ⚠️ The online ordering iframe may not meet all WCAG
                    requirements
                  </li>
                  <li>
                    ❌ Limited customization options make fixing accessibility
                    issues harder
                  </li>
                  <li>
                    💡 If using Toast for ordering, ensure your main website
                    (separate from Toast) meets WCAG independently
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: 30-Day Fix Plan */}
          <section id="fix-your-site">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              9. How to Fix Your Restaurant Website: The 30-Day Plan
            </h2>

            <p>
              You don't need to hire a $50,000 consulting firm. Most restaurant
              websites can be brought to reasonable WCAG 2.1 AA compliance in 30
              days. Here's the prioritized plan:
            </p>

            <div className="space-y-6 my-6 not-prose">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-800 dark:text-red-200 text-lg mb-3">
                  🔴 Week 1: Critical Fixes (Lawsuit Triggers)
                </h3>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>
                    <strong>Day 1:</strong>{" "}
                    <Link
                      href="/check"
                      className="underline font-semibold hover:text-red-900"
                    >
                      Run a free accessibility scan
                    </Link>{" "}
                    to baseline your issues
                  </li>
                  <li>
                    <strong>Day 2-3:</strong> Convert your PDF menu to an HTML
                    page (or create one alongside the PDF)
                  </li>
                  <li>
                    <strong>Day 4-5:</strong> Add alt text to all images across
                    the site
                  </li>
                  <li>
                    <strong>Day 6-7:</strong> Fix color contrast issues and add
                    page titles
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-orange-800 dark:text-orange-200 text-lg mb-3">
                  🟠 Week 2: Navigation and Structure
                </h3>
                <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                  <li>
                    Fix heading hierarchy (proper h1-h6 structure)
                  </li>
                  <li>
                    Add skip-to-content link for keyboard users
                  </li>
                  <li>
                    Ensure all navigation is keyboard accessible
                  </li>
                  <li>
                    Add <code>lang</code> attribute to HTML tag
                  </li>
                  <li>
                    Fix any auto-playing media (mute by default, add controls)
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-200 text-lg mb-3">
                  🟡 Week 3: Forms and Interactive Elements
                </h3>
                <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                  <li>
                    Label all form fields (reservation, contact, ordering)
                  </li>
                  <li>
                    Add accessible error messages to forms
                  </li>
                  <li>
                    Test and fix reservation widget accessibility
                  </li>
                  <li>
                    Ensure embedded maps have text alternatives
                  </li>
                  <li>
                    Add text-based hours and address (not just in images)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                  🟢 Week 4: Testing and Documentation
                </h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>
                    Complete end-to-end keyboard testing of the entire site
                  </li>
                  <li>
                    Test with a screen reader (VoiceOver on Mac, NVDA on
                    Windows)
                  </li>
                  <li>
                    Run a final{" "}
                    <Link
                      href="/check"
                      className="underline font-semibold hover:text-green-900"
                    >
                      accessibility scan
                    </Link>{" "}
                    to verify fixes
                  </li>
                  <li>
                    Document your accessibility efforts (create an accessibility
                    statement page)
                  </li>
                  <li>
                    Set up ongoing monitoring to catch regressions
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                💰 Typical Costs for Restaurant Website Accessibility
              </h3>
              <ul className="space-y-2 text-green-700 dark:text-green-300">
                <li>
                  <strong>DIY (using free tools + guides):</strong> $0-$500 +
                  your time (10-30 hours)
                </li>
                <li>
                  <strong>Freelancer/developer:</strong> $1,500-$5,000 for a
                  typical restaurant website
                </li>
                <li>
                  <strong>Professional audit + remediation:</strong>{" "}
                  $3,000-$10,000 depending on site complexity
                </li>
                <li>
                  <strong>Ongoing monitoring:</strong> $50-$200/month for
                  automated scanning and alerts
                </li>
                <li>
                  <strong>Compare to a single lawsuit settlement:</strong>{" "}
                  $5,000-$25,000+
                </li>
              </ul>
              <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                The math is clear: fixing your website proactively costs 50-80%
                less than one ADA lawsuit settlement.
              </p>
            </div>
          </section>

          {/* Section 10: Third-Party Platforms */}
          <section id="third-party-platforms">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              10. Do DoorDash and Uber Eats Handle This for You?
            </h2>

            <p>
              A common misconception: "I'm on DoorDash, so I don't need to worry
              about my own website." This is <strong>incorrect</strong>.
            </p>

            <p>Here's how the responsibility breaks down:</p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Who's Responsible for What?
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <div>
                    <strong>DoorDash/Uber Eats/Grubhub:</strong> Responsible for
                    the accessibility of their own platform and app. The overall
                    ordering experience on their platform is their obligation.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <div>
                    <strong>Your own website:</strong> Even if you use third-party
                    delivery platforms, your restaurant's website is a separate
                    ADA obligation. If you have a website (and virtually all
                    restaurants do), it must be accessible.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">⚠️</span>
                  <div>
                    <strong>Self-hosted ordering (Toast, Square, ChowNow):</strong>{" "}
                    When you embed third-party ordering on YOUR website, the
                    accessibility responsibility is primarily yours. The
                    platform provides the tools; you're responsible for how
                    they're implemented.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">⚠️</span>
                  <div>
                    <strong>Menu content on third-party platforms:</strong> The
                    menu descriptions, photos, and allergen information you
                    upload to delivery platforms should also consider
                    accessibility (descriptive item names, accurate
                    descriptions).
                  </div>
                </li>
              </ul>
            </div>

            <p>
              <strong>Bottom line:</strong> Third-party delivery platforms don't
              eliminate your ADA obligations. If you maintain a website — even a
              simple one with just your address, hours, and menu — it needs to
              be accessible.
            </p>
          </section>

          {/* Section 11: Courts Fighting Back */}
          <section id="courts-fighting-back">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              11. Good News: Courts Are Scrutinizing Serial Plaintiffs
            </h2>

            <p>
              While the lawsuit numbers are sobering, there's genuine good news
              for restaurant owners. Federal judges — particularly in New York,
              which historically saw the most ADA website filings — are
              increasingly skeptical of serial plaintiffs filing identical
              complaints against small businesses.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Key Rulings Protecting Businesses
            </h3>

            <ul>
              <li>
                <strong>
                  <Link href="/blog/courts-fighting-back-serial-ada-website-plaintiffs">
                    Fernandez v. Cuddle Clones (Feb 2026)
                  </Link>
                  :
                </strong>{" "}
                Judge Vargas ordered jurisdictional discovery after a serial
                plaintiff who filed 57+ lawsuits — 22 in four days — couldn't
                explain why she wanted a $249-$499 custom pet replica she called
                a "pet toy." The ruling includes forensic device examination.
              </li>
              <li>
                <strong>Fernandez v. Buffalo Jackson (May 2025):</strong> The
                court noted that the plaintiff attempted to buy 40 products from
                dozens of websites in a single week, calling the complaints
                "cookie-cutter, fill-in-the-blanks." Jurisdictional discovery
                ordered.
              </li>
              <li>
                <strong>Black v. 3 Times 90, Inc. (EDNY, 2025):</strong>{" "}
                Dismissed sua sponte — the Chinese restaurant case described
                above. The court found the plaintiff's story of wanting
                dumplings "immediately" unconvincing given he'd never visited
                the neighborhood restaurants.
              </li>
              <li>
                <strong>Martin & Panarese v. [Online Retailer] (SDNY, 2024):</strong>{" "}
                Dismissed <strong>with prejudice</strong> — the most severe
                outcome. Judge Vyskocil rejected boilerplate allegations from
                testers who filed nine lawsuits on the same day.
              </li>
            </ul>

            <p>
              The result of this judicial skepticism?{" "}
              <strong>
                New York federal ADA website filings dropped 39% between 2022
                and 2024
              </strong>{" "}
              (from 3,173 to 2,220), and further to 1,471 in 2025. Many
              plaintiff firms have shifted to state courts where standing
              requirements are less rigorous.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-6 not-prose">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                    State Reform Legislation
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Three states are actively passing "right to cure" laws that
                    give businesses a chance to fix accessibility issues before
                    being sued:{" "}
                    <Link
                      href="/blog/california-sb-84-ada-right-to-cure-2026"
                      className="underline hover:text-blue-900"
                    >
                      California SB 84
                    </Link>{" "}
                    (120-day cure period),{" "}
                    <Link
                      href="/blog/state-ada-reform-laws-tracker-2026"
                      className="underline hover:text-blue-900"
                    >
                      Missouri HB 1694, and Utah SB 68
                    </Link>
                    . Check our{" "}
                    <Link
                      href="/blog/state-ada-reform-laws-tracker-2026"
                      className="underline hover:text-blue-900"
                    >
                      State ADA Reform Laws Tracker
                    </Link>{" "}
                    for current status.
                  </p>
                </div>
              </div>
            </div>

            <p>
              <strong>But don't rely on courts to protect you.</strong> The best
              defense remains making your website accessible. Even if a
              serial plaintiff's case gets dismissed, you've still spent time,
              money, and stress defending yourself. And legitimate accessibility
              improvements help real customers with disabilities use your
              website.
            </p>
          </section>

          {/* Section 12: Tax Credits */}
          <section id="tax-credits">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              12. Tax Credits That Pay for Your Fixes
            </h2>

            <p>
              Most restaurant owners don't know these exist, but two tax
              provisions can significantly offset the cost of making your website
              accessible:
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                  💵 IRS Form 8826 — Disabled Access Credit
                </h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>
                    <strong>Who qualifies:</strong> Small businesses with revenue
                    under $1 million OR fewer than 30 full-time employees (most
                    restaurants qualify)
                  </li>
                  <li>
                    <strong>Credit amount:</strong> 50% of eligible expenses
                    between $250 and $10,250, for a{" "}
                    <strong>maximum credit of $5,000/year</strong>
                  </li>
                  <li>
                    <strong>What it covers:</strong> Website accessibility
                    audits, remediation, ongoing monitoring, consulting fees
                  </li>
                  <li>
                    <strong>Key detail:</strong> This is a tax{" "}
                    <em>credit</em> (reduces your tax bill dollar-for-dollar),
                    not just a deduction
                  </li>
                </ul>
                <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                  📖{" "}
                  <Link
                    href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                    className="underline hover:text-green-900"
                  >
                    Complete guide to IRS Form 8826 for website accessibility
                  </Link>
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                  💵 Section 190 Tax Deduction
                </h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>
                    <strong>Who qualifies:</strong> Any business (no size limit)
                  </li>
                  <li>
                    <strong>Deduction amount:</strong> Up to{" "}
                    <strong>$15,000/year</strong> for removing accessibility
                    barriers
                  </li>
                  <li>
                    <strong>What it covers:</strong> Physical and digital
                    accessibility improvements
                  </li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Combined potential savings:</strong> Up to $20,000/year in
              tax benefits. For a restaurant spending $5,000 on website
              accessibility, the Form 8826 credit alone could reimburse $2,375
              (50% of $4,750), bringing your net cost to $2,625. That's less
              than the typical demand letter settlement.
            </p>
          </section>

          {/* Section 13: Compliance Checklist */}
          <section id="compliance-checklist">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              13. Restaurant Website Accessibility Checklist
            </h2>

            <p>
              Print this out and work through it. Every checked item reduces
              your lawsuit risk and helps real customers access your business:
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                ✅ Menu Accessibility
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ Menu available as accessible HTML (not just PDF)</li>
                <li>☐ If PDF exists, it's tagged and screen-reader tested</li>
                <li>☐ Prices are in text (not embedded in images)</li>
                <li>☐ Allergen and dietary info has proper labels</li>
                <li>☐ Menu is keyboard navigable (can browse using Tab key)</li>
              </ul>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 mt-6">
                ✅ Images and Media
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ All food images have descriptive alt text</li>
                <li>
                  ☐ Decorative images have empty alt attributes (alt="")
                </li>
                <li>
                  ☐ No text baked into images (or text alternative provided)
                </li>
                <li>☐ Videos have captions and transcripts</li>
                <li>☐ No auto-playing audio; video muted by default</li>
              </ul>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 mt-6">
                ✅ Navigation and Structure
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ All pages have unique, descriptive titles</li>
                <li>☐ Proper heading hierarchy (h1 → h2 → h3, no skipping)</li>
                <li>☐ Skip-to-content link present</li>
                <li>☐ HTML lang attribute set correctly</li>
                <li>☐ All navigation works with keyboard only</li>
                <li>☐ Visible focus indicators on interactive elements</li>
              </ul>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 mt-6">
                ✅ Forms and Ordering
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ All form fields have associated labels</li>
                <li>☐ Required fields clearly indicated (not just by color)</li>
                <li>☐ Error messages are specific and linked to fields</li>
                <li>☐ Online ordering flow works with keyboard only</li>
                <li>☐ Cart/checkout is screen-reader accessible</li>
              </ul>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 mt-6">
                ✅ Color and Contrast
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ Text contrast ratio ≥ 4.5:1 (normal text)</li>
                <li>☐ Large text contrast ratio ≥ 3:1</li>
                <li>
                  ☐ Information not conveyed by color alone (e.g., "red =
                  spicy")
                </li>
                <li>☐ Text over images has sufficient contrast (dark overlay)</li>
              </ul>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 mt-6">
                ✅ Location and Contact Info
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ Address in text (not only in map/image)</li>
                <li>☐ Phone number in text (clickable tel: link)</li>
                <li>☐ Hours in text (not embedded in image)</li>
                <li>☐ Embedded map has descriptive iframe title</li>
                <li>☐ Phone number displayed as reservation alternative</li>
              </ul>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 mt-6">
                ✅ Documentation
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ Accessibility statement published on website</li>
                <li>☐ Contact method for accessibility feedback</li>
                <li>☐ Remediation efforts documented (dates, changes made)</li>
                <li>☐ Ongoing monitoring in place</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-6 not-prose">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                    Start Your Restaurant Accessibility Journey
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 mb-3">
                    The checklist above covers manual items. For automated issue
                    detection, scan your restaurant website for free:
                  </p>
                  <Link
                    href="/check"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    🔍 Free Restaurant Website Accessibility Scan
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 14: FAQ */}
          <section id="faq">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              14. Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-6 not-prose">
              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  Are restaurant websites required to be ADA compliant?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Yes. The DOJ has consistently held that websites of businesses
                  open to the public — including restaurants — are covered under
                  ADA Title III as "places of public accommodation." This
                  applies whether you're a single-location diner or a national
                  chain. The April 2024 Title II rule and multiple federal court
                  decisions have reinforced that websites must be accessible,
                  typically measured against WCAG 2.1 Level AA standards.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  Why are restaurants the most-sued industry for ADA website
                  violations?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  According to EcomBack's 2025 mid-year report, restaurants,
                  food, and beverage businesses faced 614 lawsuits (30.49% of all
                  ADA website lawsuits). They're targeted because of heavy
                  reliance on inaccessible PDF menus, image-heavy designs without
                  alt text, online ordering systems with accessibility barriers,
                  budget website templates with no accessibility testing, and a
                  massive pool of potential targets (1M+ restaurants in the U.S.).
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  Can my restaurant be sued for an inaccessible PDF menu?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Yes — PDF menus are one of the most common triggers for
                  restaurant ADA lawsuits. Scanned image PDFs are completely
                  inaccessible to screen readers. The best approach is to offer
                  your menu as accessible HTML on your website. If you must use
                  PDFs, they need proper tags, alt text, reading order, and
                  language designation.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  How much does it cost if my restaurant gets sued?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Demand letter settlements: $3,000-$10,000. Federal lawsuit
                  settlements for small restaurants: $5,000-$20,000 plus
                  plaintiff's attorney fees of $5,000-$25,000+. California
                  statutory damages start at $4,000 per visit. Compare to
                  proactive fixes: $2,000-$8,000, which is almost always less
                  than a single lawsuit.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  What are the most common accessibility issues on restaurant
                  websites?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Inaccessible PDF menus, missing alt text on food images,
                  unlabeled online ordering forms, low contrast text over food
                  photography, keyboard-inaccessible navigation, missing heading
                  structure, inaccessible reservation widgets, auto-playing
                  media, location info only in maps/images, and missing page
                  titles.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  Do DoorDash and Uber Eats handle accessibility for me?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Partially. Third-party platforms manage their own platform
                  accessibility, but your restaurant's OWN website is a separate
                  legal obligation. If you use a self-hosted ordering system
                  (Toast, Square Online, ChowNow), accessibility is primarily
                  your responsibility. Having an accessible website is required
                  under the ADA regardless of whether you also use third-party
                  delivery platforms.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  Is there a tax credit to help pay for accessibility?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Yes. IRS Form 8826 (Disabled Access Credit) provides up to
                  $5,000/year for small businesses. Section 190 allows a
                  $15,000/year deduction. Combined, these can offset up to
                  $20,000/year in accessibility costs. Most restaurants qualify
                  for the Form 8826 credit.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 group">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                  How do I make my restaurant website ADA compliant quickly?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  Start with a{" "}
                  <Link
                    href="/check"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    free accessibility scan
                  </Link>{" "}
                  to identify issues. Then: convert PDF menus to HTML, add alt
                  text to food images, ensure keyboard-accessible ordering, fix
                  color contrast, add form labels, and include text-based hours
                  and address. Most restaurant websites can reach reasonable
                  compliance in 2-4 weeks for $2,000-$5,000.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 not-prose text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Don't Wait for a Demand Letter
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                614 restaurants were sued in just the first half of 2025.
                A 2-minute scan can show you exactly what a serial plaintiff's
                automated tools would find on your website. Fix the issues
                before they become a lawsuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/check"
                  className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  🔍 Scan Your Restaurant Website Free
                </Link>
                <Link
                  href="/blog/how-to-respond-ada-website-lawsuit-demand-letter"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  📋 Already Got a Demand Letter? Read This
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
                href="/blog/how-to-respond-ada-website-lawsuit-demand-letter"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  How to Respond to an ADA Demand Letter (2026)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Step-by-step emergency guide if you've already been targeted.
                </p>
              </Link>
              <Link
                href="/blog/courts-fighting-back-serial-ada-website-plaintiffs"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Courts Fighting Back: Serial ADA Plaintiffs Under Scrutiny
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  How judges are questioning copy-paste complaints and demanding
                  proof of genuine intent.
                </p>
              </Link>
              <Link
                href="/blog/ecommerce-accessibility-ada-compliance-guide"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Ecommerce Accessibility: Complete ADA Compliance Guide
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Deep dive into making online ordering and checkout flows
                  accessible.
                </p>
              </Link>
              <Link
                href="/blog/irs-form-8826-disabled-access-credit-website-accessibility"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  IRS Form 8826: Claim Up to $5,000 for Accessibility
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  How to offset accessibility costs with tax credits most
                  restaurant owners don't know about.
                </p>
              </Link>
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  ADA Website Lawsuit Statistics 2026
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Comprehensive data on lawsuit filing trends, top states, and
                  serial plaintiff firms.
                </p>
              </Link>
              <Link
                href="/blog/state-ada-reform-laws-tracker-2026"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  State ADA Reform Laws Tracker 2026
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Track right-to-cure legislation in California, Missouri, Utah,
                  and more.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
