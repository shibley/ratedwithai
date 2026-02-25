/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "IRS Form 8826: How Small Businesses Can Claim Up to $5,000 for Website Accessibility | RatedWithAI",
  description:
    "The IRS Disabled Access Credit (Form 8826) lets small businesses claim up to $5,000 per year for website accessibility expenses. Learn who qualifies, what's covered, and how to file.",
  openGraph: {
    title:
      "IRS Form 8826: Claim Up to $5,000 for Website Accessibility",
    description:
      "Small businesses can recoup up to $5,000 per year in website accessibility costs through the IRS Disabled Access Credit. Here's exactly how to claim it.",
    type: "article",
    publishedTime: "2026-02-25T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "irs form 8826",
    "disabled access credit",
    "website accessibility tax credit",
    "ada tax credit",
    "small business accessibility tax credit",
    "disabled access credit website",
    "ada compliance tax credit 2026",
    "irs disabled access credit form 8826",
    "website accessibility tax deduction",
    "ada tax incentives small business",
    "section 44 disabled access credit",
    "accessibility tax credit eligible expenses",
    "web accessibility irs credit",
    "ada compliance cost offset",
    "small business ada tax credit 2026",
  ],
};

export default function IRSForm8826DisabledAccessCreditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "IRS Form 8826: How Small Businesses Can Claim Up to $5,000 for Website Accessibility",
    description:
      "Complete guide to the IRS Disabled Access Credit (Form 8826) for website accessibility expenses. Learn eligibility, covered expenses, calculation, and filing instructions.",
    datePublished: "2026-02-25T00:00:00.000Z",
    dateModified: "2026-02-25T00:00:00.000Z",
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
        name: "Can I claim the Disabled Access Credit for website accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The IRS considers website accessibility improvements as eligible expenditures under the Disabled Access Credit. Expenses for removing digital barriers, adding alt text, improving keyboard navigation, and purchasing accessibility monitoring tools all qualify, provided your business meets the eligibility criteria (under $1M gross receipts or 30 or fewer full-time employees).",
        },
      },
      {
        "@type": "Question",
        name: "How much is the IRS Disabled Access Credit worth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Disabled Access Credit covers 50% of eligible accessibility expenditures between $250 and $10,250 per tax year. This means the maximum credit is $5,000 per year. For example, if you spend $2,000 on accessibility improvements, you can claim (($2,000 - $250) × 50%) = $875 as a tax credit.",
        },
      },
      {
        "@type": "Question",
        name: "Who qualifies for the Disabled Access Credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To qualify, your business must meet one of two criteria for the preceding tax year: (1) gross receipts of $1 million or less, OR (2) no more than 30 full-time employees (defined as working at least 30 hours per week for 20 or more calendar weeks). You only need to meet one criterion — not both.",
        },
      },
      {
        "@type": "Question",
        name: "Can I claim the Disabled Access Credit every year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Unlike one-time credits, the Disabled Access Credit can be claimed every tax year in which you incur eligible accessibility expenditures. This makes ongoing costs like annual accessibility monitoring subscriptions, periodic audits, and remediation work eligible year after year.",
        },
      },
      {
        "@type": "Question",
        name: "What website accessibility expenses are eligible for the tax credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligible expenses include: accessibility audits and evaluations, remediation of accessibility issues, accessibility monitoring tools and subscriptions, developer training on WCAG standards, captioning and audio description services, screen reader compatibility improvements, PDF and document remediation, and accessibility consulting services.",
        },
      },
      {
        "@type": "Question",
        name: "How do I file IRS Form 8826?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Complete IRS Form 8826 and include it with your annual tax return. Enter your total eligible expenditures on Line 1, subtract the $250 minimum on Line 3, apply the 50% rate on Line 6, and cap at $5,000 on Line 8. The credit flows into Form 3800 (General Business Credit) for most filers. Partnerships and S corporations report on Schedule K.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Disabled Access Credit different from the ADA tax deduction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Disabled Access Credit (Section 44, Form 8826) is a tax credit of up to $5,000 for small businesses. The Architectural Barrier Removal Deduction (Section 190) is a tax deduction of up to $15,000 for businesses of any size. Small businesses may be able to use both, but the same expenses cannot be claimed under both provisions.",
        },
      },
      {
        "@type": "Question",
        name: "Do accessibility monitoring subscriptions qualify for the tax credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Ongoing accessibility monitoring subscriptions — like those offered by RatedWithAI starting at $29/month ($348/year) — qualify as eligible expenditures for removing barriers that prevent accessibility. Since the credit is available annually, recurring subscription costs can be claimed each year.",
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
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-teal-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-teal-500/30 via-green-500/10 to-emerald-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Tax Credits &amp; Compliance
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              IRS Form 8826: How Small Businesses Can Claim Up to $5,000 for
              Website Accessibility
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Most small business owners don't know this exists: the IRS offers
              a tax credit that covers up to 50% of your website accessibility
              expenses — up to $5,000 every year. With ADA lawsuits hitting
              record highs and the{" "}
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                Title II compliance deadline
              </Link>{" "}
              approaching in April 2026, this is the most underused financial
              tool in accessibility compliance. Here's exactly how to claim it.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-25">February 25, 2026</time>
              <span>·</span>
              <span>16 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Takeaways */}
          <section className="rounded-3xl border-2 border-emerald-500/50 bg-emerald-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                💰
              </span>
              <h2 className="text-2xl font-bold text-emerald-300">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-emerald-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  1
                </span>
                <span>
                  The IRS Disabled Access Credit (Form 8826) covers{" "}
                  <strong>50% of eligible accessibility expenses</strong> between
                  $250 and $10,250 — up to <strong>$5,000 per year</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  2
                </span>
                <span>
                  <strong>Website accessibility expenses qualify</strong> —
                  including audits, remediation, monitoring tools, developer
                  training, and consulting
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  3
                </span>
                <span>
                  Small businesses with{" "}
                  <strong>
                    under $1M gross receipts OR ≤30 full-time employees
                  </strong>{" "}
                  qualify — you only need to meet one criterion
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  4
                </span>
                <span>
                  The credit is <strong>available every year</strong> — making
                  ongoing subscriptions like accessibility monitoring eligible
                  annually
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  5
                </span>
                <span>
                  At $348/year, RatedWithAI's accessibility monitoring{" "}
                  <strong>pays for itself 14× over</strong> through the tax
                  credit alone
                </span>
              </li>
            </ul>
          </section>

          {/* Table of Contents */}
          <nav className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              📋 Table of Contents
            </h2>
            <ol className="space-y-2 text-slate-300">
              <li>
                <a href="#what-is" className="hover:text-emerald-400 transition">
                  1. What Is the Disabled Access Credit?
                </a>
              </li>
              <li>
                <a href="#who-qualifies" className="hover:text-emerald-400 transition">
                  2. Who Qualifies?
                </a>
              </li>
              <li>
                <a href="#eligible-expenses" className="hover:text-emerald-400 transition">
                  3. Eligible Website Accessibility Expenses
                </a>
              </li>
              <li>
                <a href="#how-to-calculate" className="hover:text-emerald-400 transition">
                  4. How to Calculate Your Credit
                </a>
              </li>
              <li>
                <a href="#real-world-examples" className="hover:text-emerald-400 transition">
                  5. Real-World Calculation Examples
                </a>
              </li>
              <li>
                <a href="#how-to-file" className="hover:text-emerald-400 transition">
                  6. How to File Form 8826
                </a>
              </li>
              <li>
                <a href="#annual-credit" className="hover:text-emerald-400 transition">
                  7. Why This Is an Annual Opportunity
                </a>
              </li>
              <li>
                <a href="#section-190" className="hover:text-emerald-400 transition">
                  8. Disabled Access Credit vs. Section 190 Deduction
                </a>
              </li>
              <li>
                <a href="#why-now" className="hover:text-emerald-400 transition">
                  9. Why 2026 Is the Year to Act
                </a>
              </li>
              <li>
                <a href="#cost-analysis" className="hover:text-emerald-400 transition">
                  10. The True Cost of Accessibility (Hint: It's Negative)
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="hover:text-emerald-400 transition">
                  11. Common Mistakes to Avoid
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition">
                  12. Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#sources" className="hover:text-emerald-400 transition">
                  13. Sources
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Is the Disabled Access Credit? */}
          <section id="what-is" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              1. What Is the Disabled Access Credit?
            </h2>
            <p>
              The Disabled Access Credit is a federal tax credit established
              under{" "}
              <strong>Internal Revenue Code Section 44</strong> as part of the
              Americans with Disabilities Act of 1990. It's designed to help
              small businesses offset the cost of making their operations —
              including their websites — accessible to people with disabilities.
            </p>
            <p>
              Unlike a tax <em>deduction</em> (which reduces your taxable
              income), a tax <em>credit</em> directly reduces the amount of tax
              you owe. Dollar for dollar, credits are more valuable than
              deductions.
            </p>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-3">
              <h3 className="text-xl font-semibold text-emerald-300">
                Credit at a Glance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-slate-400">IRS Form</p>
                  <p className="text-white font-semibold">
                    Form 8826 — Disabled Access Credit
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400">IRC Section</p>
                  <p className="text-white font-semibold">Section 44</p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400">Credit Rate</p>
                  <p className="text-white font-semibold">
                    50% of eligible expenses
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400">Eligible Range</p>
                  <p className="text-white font-semibold">$250 – $10,250</p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400">Maximum Annual Credit</p>
                  <p className="text-white font-semibold text-emerald-300">
                    $5,000
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-400">Frequency</p>
                  <p className="text-white font-semibold">
                    Every year (recurring)
                  </p>
                </div>
              </div>
            </div>
            <p>
              The credit flows into{" "}
              <strong>Form 3800, General Business Credit</strong> (Part III,
              Line 1e) for most filers. Partnerships and S corporations report
              the credit on Schedule K and pass it through to partners or
              shareholders.
            </p>
          </section>

          {/* Section 2: Who Qualifies? */}
          <section id="who-qualifies" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              2. Who Qualifies for the Disabled Access Credit?
            </h2>
            <p>
              The credit is available to{" "}
              <strong>eligible small businesses</strong> that meet{" "}
              <em>either</em> of the following criteria for the preceding tax
              year:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-lg font-semibold text-white">
                    Revenue Test
                  </h3>
                </div>
                <p className="text-3xl font-bold text-emerald-400">≤ $1M</p>
                <p className="text-slate-300">
                  Gross receipts of $1 million or less in the preceding tax year
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <h3 className="text-lg font-semibold text-white">
                    Employee Test
                  </h3>
                </div>
                <p className="text-3xl font-bold text-emerald-400">≤ 30</p>
                <p className="text-slate-300">
                  No more than 30 full-time employees (30+ hours/week for 20+
                  calendar weeks)
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-5">
              <p className="text-amber-200">
                <strong>Important:</strong> You only need to meet{" "}
                <em>one</em> of these criteria — not both. A business with $5M
                in revenue but only 15 employees would still qualify. And a
                sole proprietor with $800K in revenue and no employees would
                qualify too.
              </p>
            </div>
            <p>
              According to the{" "}
              <a
                href="https://www.sba.gov/about-sba/sba-performance/sba-data-statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                U.S. Small Business Administration
              </a>
              , approximately <strong>33.2 million small businesses</strong>{" "}
              operate in the United States, and the vast majority would meet at
              least one of these qualifications. If your business directly
              serves customers — whether through a physical location, a website,
              or both — you likely qualify.
            </p>
          </section>

          {/* Section 3: Eligible Expenses */}
          <section id="eligible-expenses" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              3. Eligible Website Accessibility Expenses
            </h2>
            <p>
              The IRS defines eligible expenditures broadly as amounts paid or
              incurred to comply with the ADA. According to{" "}
              <a
                href="https://www.irs.gov/pub/irs-pdf/f8826.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Form 8826 instructions
              </a>{" "}
              and IRS Publication 535, eligible expenses include those for:
            </p>
            <ul className="space-y-2 text-slate-200">
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>
                  <strong>
                    Removing barriers that prevent accessibility
                  </strong>{" "}
                  — including digital barriers on websites and applications
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>
                  <strong>
                    Making audio materials available to hearing-impaired
                    individuals
                  </strong>{" "}
                  — captioning, transcripts, audio descriptions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>
                  <strong>
                    Making visual materials available to visually impaired
                    individuals
                  </strong>{" "}
                  — alt text, screen reader compatibility, accessible PDFs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>
                  <strong>
                    Acquiring or modifying equipment/devices for individuals
                    with disabilities
                  </strong>{" "}
                  — accessibility tools, software, and subscriptions
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8">
              Specific Website Accessibility Expenses That Qualify
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    <th className="py-3 pr-4 text-slate-300 font-semibold">
                      Expense Category
                    </th>
                    <th className="py-3 pr-4 text-slate-300 font-semibold">
                      Examples
                    </th>
                    <th className="py-3 text-slate-300 font-semibold">
                      Typical Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">
                      Accessibility Audits
                    </td>
                    <td className="py-3 pr-4">
                      WCAG 2.1/2.2 audits, automated + manual testing
                    </td>
                    <td className="py-3">$1,500 – $10,000</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">Remediation</td>
                    <td className="py-3 pr-4">
                      Fixing WCAG failures, alt text, keyboard navigation,
                      ARIA labels
                    </td>
                    <td className="py-3">$2,000 – $25,000+</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">
                      Monitoring Tools
                    </td>
                    <td className="py-3 pr-4">
                      RatedWithAI, axe DevTools Pro, WAVE subscriptions
                    </td>
                    <td className="py-3">$300 – $3,000/yr</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">
                      Developer Training
                    </td>
                    <td className="py-3 pr-4">
                      WCAG standards training, accessible coding practices
                    </td>
                    <td className="py-3">$500 – $5,000</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">
                      Captioning & Transcripts
                    </td>
                    <td className="py-3 pr-4">
                      Video captions, audio descriptions, transcript services
                    </td>
                    <td className="py-3">$300 – $3,000/yr</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">
                      Document Remediation
                    </td>
                    <td className="py-3 pr-4">
                      Accessible PDF conversion, document structure fixes
                    </td>
                    <td className="py-3">$500 – $5,000</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">Consulting</td>
                    <td className="py-3 pr-4">
                      Accessibility strategy, compliance roadmap, legal
                      consultation
                    </td>
                    <td className="py-3">$1,000 – $10,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">
                      Accessibility Statement
                    </td>
                    <td className="py-3 pr-4">
                      VPAT creation, accessibility policy documentation
                    </td>
                    <td className="py-3">$500 – $3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-5 mt-4">
              <p className="text-sky-200">
                <strong>💡 Pro tip:</strong> The DOJ ruled in 2018 that websites
                are{" "}
                <a
                  href="https://archive.ada.gov/taxcred.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  places of public accommodation
                </a>
                , which means digital accessibility expenses are firmly within
                the scope of ADA compliance — and therefore eligible for the
                Disabled Access Credit.
              </p>
            </div>
          </section>

          {/* Section 4: How to Calculate */}
          <section id="how-to-calculate" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              4. How to Calculate Your Credit
            </h2>
            <p>
              The calculation is straightforward. Here's how Form 8826 works
              line by line:
            </p>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 space-y-4">
              <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-3 items-center text-sm">
                <span className="text-slate-400 font-mono">Line 1</span>
                <span>Total eligible access expenditures</span>
                <span className="text-white font-semibold">
                  Your expenses
                </span>

                <span className="text-slate-400 font-mono">Line 2</span>
                <span>Minimum threshold</span>
                <span className="text-white font-semibold">$250</span>

                <span className="text-slate-400 font-mono">Line 3</span>
                <span>Subtract Line 2 from Line 1</span>
                <span className="text-white font-semibold">
                  (Expenses − $250)
                </span>

                <span className="text-slate-400 font-mono">Line 4</span>
                <span>Maximum eligible amount</span>
                <span className="text-white font-semibold">$10,000</span>

                <span className="text-slate-400 font-mono">Line 5</span>
                <span>Lesser of Line 3 or Line 4</span>
                <span className="text-white font-semibold">
                  ≤ $10,000
                </span>

                <span className="text-slate-400 font-mono">Line 6</span>
                <span>Multiply Line 5 by 50%</span>
                <span className="text-white font-semibold text-emerald-300">
                  ≤ $5,000
                </span>

                <span className="text-slate-400 font-mono">Line 8</span>
                <span>Total credit (capped at $5,000)</span>
                <span className="text-white font-bold text-emerald-300">
                  Your credit
                </span>
              </div>
            </div>
            <p>
              The formula is simple:{" "}
              <strong className="text-emerald-300">
                Credit = (Eligible Expenses − $250) × 50%
              </strong>
              , capped at $5,000.
            </p>
          </section>

          {/* Section 5: Real-World Examples */}
          <section id="real-world-examples" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              5. Real-World Calculation Examples
            </h2>

            <div className="space-y-6">
              {/* Example 1 */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Example A: Small Business Using RatedWithAI Only
                </h3>
                <p className="text-slate-300">
                  A local restaurant subscribes to RatedWithAI's Starter plan
                  ($29/month = <strong>$348/year</strong>) for ongoing
                  accessibility monitoring.
                </p>
                <div className="bg-slate-800/50 rounded-xl p-4 font-mono text-sm space-y-1">
                  <p>
                    Eligible expenditures:{" "}
                    <span className="text-white">$348</span>
                  </p>
                  <p>
                    Minus threshold:{" "}
                    <span className="text-white">$348 − $250 = $98</span>
                  </p>
                  <p>
                    Credit (50%):{" "}
                    <span className="text-emerald-400 font-bold">
                      $98 × 50% = $49
                    </span>
                  </p>
                </div>
                <p className="text-slate-300">
                  Even at the most basic level, the tax credit reduces the
                  effective annual cost from $348 to <strong>$299</strong> — just
                  $24.92/month for continuous accessibility monitoring.
                </p>
              </div>

              {/* Example 2 */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Example B: Audit + Monitoring Bundle
                </h3>
                <p className="text-slate-300">
                  A law firm gets a WCAG accessibility audit ($3,000) and
                  subscribes to RatedWithAI Pro ($79/month = $948/year) for
                  ongoing monitoring. Total:{" "}
                  <strong>$3,948</strong>.
                </p>
                <div className="bg-slate-800/50 rounded-xl p-4 font-mono text-sm space-y-1">
                  <p>
                    Eligible expenditures:{" "}
                    <span className="text-white">$3,948</span>
                  </p>
                  <p>
                    Minus threshold:{" "}
                    <span className="text-white">$3,948 − $250 = $3,698</span>
                  </p>
                  <p>
                    Credit (50%):{" "}
                    <span className="text-emerald-400 font-bold">
                      $3,698 × 50% = $1,849
                    </span>
                  </p>
                </div>
                <p className="text-slate-300">
                  The tax credit nearly pays for the entire monitoring
                  subscription. Effective cost: $3,948 − $1,849 ={" "}
                  <strong>$2,099</strong> for a full audit + year of monitoring.
                </p>
              </div>

              {/* Example 3 */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Example C: Full Remediation Project
                </h3>
                <p className="text-slate-300">
                  An e-commerce store invests in a comprehensive accessibility
                  overhaul: audit ($5,000), developer remediation ($8,000),
                  accessibility monitoring ($348/year), captioning ($1,500).
                  Total: <strong>$14,848</strong>.
                </p>
                <div className="bg-slate-800/50 rounded-xl p-4 font-mono text-sm space-y-1">
                  <p>
                    Eligible expenditures:{" "}
                    <span className="text-white">$14,848</span>
                  </p>
                  <p>
                    Minus threshold:{" "}
                    <span className="text-white">$14,848 − $250 = $14,598</span>
                  </p>
                  <p>
                    Cap applied:{" "}
                    <span className="text-white">$10,000 (max eligible)</span>
                  </p>
                  <p>
                    Credit (50%):{" "}
                    <span className="text-emerald-400 font-bold">
                      $10,000 × 50% = $5,000
                    </span>
                  </p>
                </div>
                <p className="text-slate-300">
                  Even though expenditures exceeded $10,250, the business still
                  claims the <strong>maximum $5,000 credit</strong>. The
                  remaining expenses above the cap may qualify for the{" "}
                  <a href="#section-190" className="text-sky-400 hover:text-sky-300 underline">
                    Section 190 deduction
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: How to File */}
          <section id="how-to-file" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              6. How to File Form 8826
            </h2>
            <p>
              Filing is straightforward — no separate application or
              pre-approval needed. Simply include Form 8826 with your annual
              tax return.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Track Your Expenses
                  </h3>
                  <p className="text-slate-300">
                    Keep invoices, receipts, and subscription records for all
                    accessibility-related expenditures during the tax year. This
                    includes monitoring tool subscriptions, audit fees, developer
                    invoices, and consulting bills.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Download Form 8826
                  </h3>
                  <p className="text-slate-300">
                    Available at{" "}
                    <a
                      href="https://www.irs.gov/forms-pubs/about-form-8826"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      irs.gov/forms-pubs/about-form-8826
                    </a>
                    . Most tax software (TurboTax, H&amp;R Block, etc.) includes
                    this form automatically when you indicate general business
                    credits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Complete the Form
                  </h3>
                  <p className="text-slate-300">
                    Enter your total eligible expenditures on Line 1. The form
                    does the math: subtract $250, cap at $10,000, multiply by
                    50%.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Include with Your Return
                  </h3>
                  <p className="text-slate-300">
                    The credit transfers to Form 3800 (General Business Credit),
                    Part III, Line 1e. For partnerships and S corporations,
                    report on Schedule K.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-5 mt-4">
              <p className="text-amber-200">
                <strong>⚠️ Tax professional disclaimer:</strong> While this
                guide explains how the credit works, always consult with your
                CPA or tax advisor before filing. They can ensure your specific
                expenses qualify and the form is completed correctly.
              </p>
            </div>
          </section>

          {/* Section 7: Annual Opportunity */}
          <section id="annual-credit" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              7. Why This Is an Annual Opportunity
            </h2>
            <p>
              One of the most powerful aspects of the Disabled Access Credit is
              that it's <strong>not a one-time benefit</strong>. You can claim
              it every year you incur eligible accessibility expenses. This
              fundamentally changes the economics of accessibility compliance.
            </p>
            <p>Consider the math for ongoing monitoring:</p>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                5-Year Cost of RatedWithAI with Tax Credit
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-700 text-left">
                      <th className="py-2 pr-4 text-slate-300">Year</th>
                      <th className="py-2 pr-4 text-slate-300">
                        Subscription
                      </th>
                      <th className="py-2 pr-4 text-slate-300">Tax Credit</th>
                      <th className="py-2 text-slate-300">Net Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 pr-4">Year 1</td>
                      <td className="py-2 pr-4">$348</td>
                      <td className="py-2 pr-4 text-emerald-400">−$49</td>
                      <td className="py-2 font-semibold">$299</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 pr-4">Year 2</td>
                      <td className="py-2 pr-4">$348</td>
                      <td className="py-2 pr-4 text-emerald-400">−$49</td>
                      <td className="py-2 font-semibold">$299</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 pr-4">Year 3</td>
                      <td className="py-2 pr-4">$348</td>
                      <td className="py-2 pr-4 text-emerald-400">−$49</td>
                      <td className="py-2 font-semibold">$299</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 pr-4">Year 4</td>
                      <td className="py-2 pr-4">$348</td>
                      <td className="py-2 pr-4 text-emerald-400">−$49</td>
                      <td className="py-2 font-semibold">$299</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Year 5</td>
                      <td className="py-2 pr-4">$348</td>
                      <td className="py-2 pr-4 text-emerald-400">−$49</td>
                      <td className="py-2 font-semibold">$299</td>
                    </tr>
                    <tr className="border-t-2 border-emerald-500/30">
                      <td className="py-2 pr-4 font-bold">5-Year Total</td>
                      <td className="py-2 pr-4 font-bold">$1,740</td>
                      <td className="py-2 pr-4 font-bold text-emerald-400">
                        −$245
                      </td>
                      <td className="py-2 font-bold text-emerald-300">
                        $1,495
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Based on RatedWithAI Starter plan at $29/month. Businesses with
                additional accessibility expenses (audits, developer time,
                consulting) would see significantly larger credits — up to
                $5,000 per year.
              </p>
            </div>
            <p>
              Now compare this to the cost of{" "}
              <strong>not having monitoring</strong>: the average ADA website
              lawsuit settlement ranges from{" "}
              <Link
                href="/blog/ada-lawsuit-settlements-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                $5,000 to $40,000
              </Link>
              , with some cases reaching millions. Fashion Nova's settlement was{" "}
              <Link
                href="/blog/fashion-nova-doj-settlement-rejected-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                $5.15 million
              </Link>
              .
            </p>
          </section>

          {/* Section 8: Credit vs Deduction */}
          <section id="section-190" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              8. Disabled Access Credit vs. Section 190 Deduction
            </h2>
            <p>
              The IRS provides two separate tax incentives for accessibility
              improvements. Understanding the difference can help you maximize
              your benefit:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    <th className="py-3 pr-4 text-slate-300">Feature</th>
                    <th className="py-3 pr-4 text-slate-300">
                      Disabled Access Credit (§44)
                    </th>
                    <th className="py-3 text-slate-300">
                      Barrier Removal Deduction (§190)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">IRS Form</td>
                    <td className="py-3 pr-4">Form 8826</td>
                    <td className="py-3">Schedule C or business return</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">Type</td>
                    <td className="py-3 pr-4 text-emerald-400 font-semibold">
                      Tax credit (dollar-for-dollar)
                    </td>
                    <td className="py-3">Tax deduction (reduces income)</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">Maximum benefit</td>
                    <td className="py-3 pr-4">$5,000/year</td>
                    <td className="py-3">$15,000/year</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">Eligibility</td>
                    <td className="py-3 pr-4">
                      Small businesses only (≤$1M or ≤30 employees)
                    </td>
                    <td className="py-3">Any size business</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 font-medium">
                      Covers digital expenses?
                    </td>
                    <td className="py-3 pr-4 text-emerald-400">
                      Yes — website accessibility
                    </td>
                    <td className="py-3">Primarily physical barriers</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Can combine?</td>
                    <td className="py-3 pr-4" colSpan={2}>
                      Yes — but not for the same expenses. Use §44 for the
                      first $10,250, then §190 for additional costs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 mt-4">
              <p className="text-emerald-200">
                <strong>💡 Strategy:</strong> If your total accessibility
                expenses exceed $10,250, claim the Disabled Access Credit for
                the first $10,250 (getting up to $5,000 back as a credit), then
                use the Section 190 deduction for expenses above that threshold
                (up to an additional $15,000 deduction). Consult your tax
                professional to optimize this combination.
              </p>
            </div>
          </section>

          {/* Section 9: Why 2026 */}
          <section id="why-now" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              9. Why 2026 Is the Year to Act
            </h2>
            <p>
              Three converging forces make 2026 the most important year for
              small businesses to invest in accessibility — and claim this tax
              credit:
            </p>

            <div className="space-y-6">
              <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-3">
                <h3 className="text-xl font-semibold text-rose-300">
                  🏛️ The ADA Title II Deadline (April 24, 2026)
                </h3>
                <p>
                  The DOJ's{" "}
                  <Link
                    href="/blog/ada-title-ii-deadline-countdown-2026"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    ADA Title II compliance deadline
                  </Link>{" "}
                  requires all state and local government entities with 50,000+
                  population to meet WCAG 2.1 AA standards by April 24, 2026.
                  Government contractors and vendors — many of them small
                  businesses — must ensure their web services are compliant too.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 space-y-3">
                <h3 className="text-xl font-semibold text-amber-300">
                  ⚖️ Record ADA Lawsuits
                </h3>
                <p>
                  Over{" "}
                  <Link
                    href="/blog/ada-website-lawsuit-statistics-2026"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    8,800 ADA website accessibility lawsuits
                  </Link>{" "}
                  were filed in 2024, according to Seyfarth Shaw. Florida saw a{" "}
                  <strong>143% increase</strong> in filings. Serial litigants
                  are targeting small businesses specifically — a single
                  attorney in Missouri filed 126 lawsuits.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6 space-y-3">
                <h3 className="text-xl font-semibold text-purple-300">
                  📅 Tax Season + ADA Deadline Convergence
                </h3>
                <p>
                  For the 2025 tax year (filing by April 15, 2026), any
                  accessibility expenses you incurred in 2025 are eligible for
                  the credit. And any expenses in 2026 will qualify for next
                  year's filing. This creates a perfect window: invest in
                  accessibility now, claim the credit when you file, and be
                  compliant before enforcement ramps up.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: True Cost Analysis */}
          <section id="cost-analysis" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              10. The True Cost of Accessibility (Hint: It's Negative)
            </h2>
            <p>
              When you factor in the tax credit, lawsuit risk reduction, and
              business benefits, the ROI on accessibility investment becomes
              overwhelming:
            </p>

            <div className="rounded-2xl border-2 border-emerald-500/50 bg-emerald-950/30 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-emerald-300">
                Cost-Benefit Analysis: Accessibility Monitoring
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span>RatedWithAI Starter ($29/mo)</span>
                  <span className="text-white font-semibold">
                    $348/year
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span>Tax credit (50% above $250)</span>
                  <span className="text-emerald-400 font-semibold">
                    −$49/year
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="font-semibold">Net annual cost</span>
                  <span className="text-white font-bold">$299/year</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2 pt-2">
                  <span className="text-rose-300">
                    Average ADA lawsuit settlement
                  </span>
                  <span className="text-rose-400 font-bold">
                    $5,000 – $40,000
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-emerald-300 font-semibold">
                    Years of monitoring to equal one lawsuit
                  </span>
                  <span className="text-emerald-300 font-bold text-xl">
                    17 – 134 years
                  </span>
                </div>
              </div>
            </div>

            <p>
              Put differently: <strong>one prevented lawsuit</strong> pays for
              17 to 134 years of accessibility monitoring. The math isn't just
              favorable — it's absurd. Accessibility compliance with ongoing
              monitoring is one of the highest-ROI investments a small business
              can make.
            </p>

            <p>
              And this doesn't even account for the business benefits of an
              accessible website: reaching the{" "}
              <strong>75+ million Americans with disabilities</strong> (per the
              CDC), improved SEO from clean semantic markup, higher conversion
              rates from better UX, and enhanced brand reputation.
            </p>
          </section>

          {/* Section 11: Common Mistakes */}
          <section id="common-mistakes" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              11. Common Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 space-y-2">
                <h3 className="font-semibold text-rose-300">
                  ❌ Double-dipping on the same expenses
                </h3>
                <p className="text-slate-300">
                  Expenses claimed under Form 8826 cannot also be claimed as a
                  business deduction or used for any other tax benefit. However,
                  you <em>can</em> split expenses — using §44 for the first
                  $10,250 and §190 for any excess.
                </p>
              </div>

              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 space-y-2">
                <h3 className="font-semibold text-rose-300">
                  ❌ Not keeping documentation
                </h3>
                <p className="text-slate-300">
                  Save all invoices, receipts, subscription confirmations, and
                  contracts related to accessibility work. The IRS may request
                  documentation to substantiate the credit.
                </p>
              </div>

              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 space-y-2">
                <h3 className="font-semibold text-rose-300">
                  ❌ Thinking it's only for physical modifications
                </h3>
                <p className="text-slate-300">
                  Many businesses — and even some accountants — don't realize
                  that website accessibility expenses qualify. The DOJ's
                  classification of websites as public accommodations makes
                  digital accessibility firmly within scope.
                </p>
              </div>

              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 space-y-2">
                <h3 className="font-semibold text-rose-300">
                  ❌ Only claiming it once
                </h3>
                <p className="text-slate-300">
                  This is a recurring credit. If you have annual accessibility
                  expenses (monitoring subscriptions, periodic audits, ongoing
                  remediation), you can claim it every year. Many businesses
                  leave thousands on the table by treating it as one-time.
                </p>
              </div>

              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 space-y-2">
                <h3 className="font-semibold text-rose-300">
                  ❌ Relying on overlays instead of real compliance
                </h3>
                <p className="text-slate-300">
                  While overlay tool subscriptions may technically qualify as an
                  expense, they{" "}
                  <Link
                    href="/blog/accessibility-widgets"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    don't provide real WCAG compliance
                  </Link>{" "}
                  — and the FTC{" "}
                  <strong>fined accessiBe $1 million</strong> for misleading
                  claims. Invest in tools that actually analyze your code and
                  identify real accessibility barriers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12: FAQ */}
          <section id="faq" className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              12. Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Can I claim the Disabled Access Credit for website
                  accessibility?
                </h3>
                <p className="text-slate-300">
                  Yes. The IRS considers website accessibility improvements as
                  eligible expenditures under the Disabled Access Credit.
                  Expenses for removing digital barriers, adding alt text,
                  improving keyboard navigation, and purchasing accessibility
                  monitoring tools all qualify, provided your business meets the
                  eligibility criteria (under $1M gross receipts or 30 or fewer
                  full-time employees).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  How much is the IRS Disabled Access Credit worth?
                </h3>
                <p className="text-slate-300">
                  The credit covers 50% of eligible expenditures between $250
                  and $10,250 per tax year. The maximum credit is{" "}
                  <strong>$5,000 per year</strong>. For example, if you spend
                  $2,000 on accessibility improvements, your credit would be
                  ($2,000 − $250) × 50% = $875.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Who qualifies for the Disabled Access Credit?
                </h3>
                <p className="text-slate-300">
                  Your business must meet <em>one</em> of two criteria for the
                  preceding tax year: (1) gross receipts of $1 million or less,
                  OR (2) no more than 30 full-time employees (defined as
                  working at least 30 hours/week for 20+ calendar weeks). You
                  only need to meet one criterion — not both.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Can I claim the credit every year?
                </h3>
                <p className="text-slate-300">
                  Yes. Unlike many one-time credits, the Disabled Access Credit
                  can be claimed every tax year in which you incur eligible
                  expenditures. This makes ongoing costs like monitoring
                  subscriptions, periodic audits, and annual remediation work
                  eligible year after year.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  What if my credit exceeds my tax liability?
                </h3>
                <p className="text-slate-300">
                  The Disabled Access Credit is a non-refundable credit,
                  meaning it can reduce your tax liability to zero but won't
                  generate a refund. However, if the credit exceeds your
                  current year tax liability, the unused portion can be carried
                  back one year and carried forward up to 20 years as part of
                  the General Business Credit (Form 3800).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Is the Disabled Access Credit different from the Section 190
                  deduction?
                </h3>
                <p className="text-slate-300">
                  Yes. The Disabled Access Credit (Section 44, Form 8826) is a
                  tax <em>credit</em> of up to $5,000 for small businesses. The
                  Architectural Barrier Removal Deduction (Section 190) is a
                  tax <em>deduction</em> of up to $15,000 available to
                  businesses of any size. Small businesses can use both, but the
                  same expenses cannot be claimed under both provisions.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Do accessibility monitoring subscriptions qualify?
                </h3>
                <p className="text-slate-300">
                  Yes. Ongoing accessibility monitoring subscriptions — like
                  those offered by RatedWithAI starting at $29/month
                  ($348/year) — qualify as eligible expenditures for removing
                  barriers that prevent accessibility. Since the credit is
                  available annually, recurring costs can be claimed each year.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  My accountant hasn't heard of this. What do I do?
                </h3>
                <p className="text-slate-300">
                  It's more common than you'd think — many tax professionals
                  aren't aware that website accessibility qualifies for this
                  credit. Simply tell them the form number (8826) and reference
                  IRC Section 44. They can quickly pull up the form and
                  instructions from the{" "}
                  <a
                    href="https://www.irs.gov/forms-pubs/about-form-8826"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    IRS website
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 to-teal-950/40 p-8 space-y-5 text-center">
            <h2 className="text-3xl font-bold text-white">
              Start Monitoring — and Start Claiming
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              RatedWithAI's accessibility monitoring starts at $29/month. With
              the Disabled Access Credit, your effective cost could be as low as
              $24.92/month — less than a single lunch. One prevented lawsuit
              pays for over a decade of monitoring.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <Link
                href="/#pricing"
                className="rounded-full bg-emerald-600 px-8 py-3 text-white font-semibold hover:bg-emerald-500 transition"
              >
                View Pricing Plans
              </Link>
              <Link
                href="/"
                className="rounded-full border border-slate-600 px-8 py-3 text-slate-200 font-semibold hover:bg-slate-800 transition"
              >
                Scan Your Website Free
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              Save your invoice — it's your documentation for Form 8826.
            </p>
          </section>

          {/* Sources */}
          <section id="sources" className="space-y-4 border-t border-slate-800 pt-10">
            <h2 className="text-2xl font-semibold text-white">13. Sources</h2>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="https://www.irs.gov/forms-pubs/about-form-8826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  IRS — About Form 8826, Disabled Access Credit
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/pub/irs-pdf/f8826.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  IRS — Form 8826 (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://archive.ada.gov/taxcred.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  ADA.gov — Tax Credits and Deductions Information
                </a>
              </li>
              <li>
                <a
                  href="https://www.teachmepersonalfinance.com/irs-form-8826-instructions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Teach Me Personal Finance — IRS Form 8826 Instructions
                </a>
              </li>
              <li>
                <a
                  href="https://216digital.com/web-accessibility-the-disabled-access-tax-credit-who-qualifies-and-key-stipulations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  216digital — Web Accessibility &amp; the Disabled Access Tax
                  Credit
                </a>
              </li>
              <li>
                <a
                  href="https://vancebell.com/blog/reduce-your-web-accessibility-costs-through-an-irs-tax-credit-disabled-access-credit-form-8826/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Vance Bell — Reduce Your Web Accessibility Costs Through an
                  IRS Tax Credit
                </a>
              </li>
              <li>
                <a
                  href="https://www.adatitleiii.com/2025/01/ada-title-iii-federal-lawsuit-numbers-rebound-to-8800-in-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Seyfarth Shaw — ADA Title III Federal Lawsuit Numbers Rebound
                  to 8,800 in 2024
                </a>
              </li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="space-y-6 border-t border-slate-800 pt-10">
            <h2 className="text-2xl font-semibold text-white">
              Related Articles
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/blog/ada-title-ii-deadline-countdown-2026"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-rose-400 uppercase tracking-wider">
                  Deadline
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  ADA Title II April 2026 Deadline Countdown
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Everything you need to know about the Title II compliance
                  deadline, who must comply, and what happens next.
                </p>
              </Link>
              <Link
                href="/blog/ada-website-lawsuit-statistics-2026"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-amber-400 uppercase tracking-wider">
                  Data
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  ADA Website Lawsuit Statistics 2026
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  8,800+ federal lawsuits filed in 2024. Here's the data on who
                  gets sued and how much it costs.
                </p>
              </Link>
              <Link
                href="/blog/small-business-accessibility-guide"
                className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition hover:border-slate-700 hover:bg-slate-900/70"
              >
                <p className="text-xs text-emerald-400 uppercase tracking-wider">
                  Guide
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  Small Business Accessibility Guide
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  The complete guide to making your small business website
                  accessible and ADA compliant.
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
