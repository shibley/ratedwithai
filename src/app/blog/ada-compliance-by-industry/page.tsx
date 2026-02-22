/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ADA Website Compliance Requirements by Industry (2026 Guide) | RatedWithAI",
  description:
    "Industry-specific ADA compliance requirements for healthcare, ecommerce, banking, education, restaurants, and more. Learn what regulations apply to your business.",
  keywords: [
    "ADA compliance by industry",
    "healthcare website accessibility",
    "ecommerce ADA compliance",
    "banking accessibility requirements",
    "restaurant website ADA",
    "industry accessibility regulations",
  ],
  openGraph: {
    title: "ADA Website Compliance Requirements by Industry (2026 Guide)",
    description:
      "Industry-specific ADA compliance requirements for healthcare, ecommerce, banking, education, restaurants, and more.",
    type: "article",
    publishedTime: "2026-02-21T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
};

export default function AdaComplianceByIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Website Compliance Requirements by Industry (2026 Guide)",
    description:
      "Comprehensive guide to industry-specific ADA website compliance requirements and regulations.",
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
              Industry Guide
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Website Compliance Requirements by Industry
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Different industries face different accessibility challenges and regulations. Here's what you need to know about ADA compliance requirements for your specific sector.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-21">February 21, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Overview */}
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              While the ADA applies broadly to all businesses that serve the public, some industries face additional regulations, higher lawsuit rates, or unique accessibility challenges based on their services.
            </p>
            <p className="text-lg leading-relaxed">
              This guide breaks down the specific requirements, common issues, and lawsuit risk levels for 10 major industries. Find your sector below to understand exactly what's expected of your website.
            </p>
          </section>

          {/* Quick Reference Table */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Lawsuit Risk by Industry
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 pr-4 font-semibold text-white">Industry</th>
                    <th className="py-3 pr-4 font-semibold text-white">Risk Level</th>
                    <th className="py-3 font-semibold text-white">% of ADA Lawsuits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-3 pr-4">Retail & Ecommerce</td>
                    <td className="py-3 pr-4"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">High</span></td>
                    <td className="py-3">~35%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Restaurants & Food</td>
                    <td className="py-3 pr-4"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">High</span></td>
                    <td className="py-3">~18%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Healthcare</td>
                    <td className="py-3 pr-4"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">High</span></td>
                    <td className="py-3">~12%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Banking & Finance</td>
                    <td className="py-3 pr-4"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">High</span></td>
                    <td className="py-3">~8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Travel & Hospitality</td>
                    <td className="py-3 pr-4"><span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">High</span></td>
                    <td className="py-3">~7%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Education</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">Medium</span></td>
                    <td className="py-3">~5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Government</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">Medium</span></td>
                    <td className="py-3">~4%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Legal Services</td>
                    <td className="py-3 pr-4"><span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">Medium</span></td>
                    <td className="py-3">~3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Healthcare */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-2xl">🏥</span>
              <h2 className="text-3xl font-semibold text-white">Healthcare</h2>
              <span className="rounded bg-rose-500/20 px-3 py-1 text-sm font-semibold text-rose-300">High Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Healthcare websites face stringent requirements under multiple laws: ADA Title III, Section 504 (for entities receiving federal funding), and HIPAA considerations for patient portals.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Patient portals</strong> must be fully keyboard accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Appointment scheduling</strong> must work with screen readers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Medical documents</strong> must be accessible (not scanned images)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Telehealth platforms</strong> must support assistive technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Emergency alerts</strong> must be announced to screen readers</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Common Issues</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li>• PDF intake forms without proper tagging</li>
                <li>• Appointment calendar widgets without keyboard support</li>
                <li>• Low contrast on critical health alerts</li>
                <li>• Form fields without labels in patient registration</li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/healthcare" className="text-sky-400 hover:text-sky-300 underline">Read our complete Healthcare Accessibility Guide →</Link>
            </p>
          </section>

          {/* Ecommerce */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-2xl">🛒</span>
              <h2 className="text-3xl font-semibold text-white">Retail & Ecommerce</h2>
              <span className="rounded bg-rose-500/20 px-3 py-1 text-sm font-semibold text-rose-300">High Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Ecommerce sites are the #1 target for ADA lawsuits, accounting for over a third of all filings. The complete purchase journey—from browsing to checkout—must be accessible.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Product images</strong> need descriptive alt text</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Add-to-cart buttons</strong> must be properly labeled</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Checkout flow</strong> must be keyboard-only completable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Cart updates</strong> must be announced via live regions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Product filters</strong> must be operable without a mouse</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Error messages</strong> must explain what went wrong and how to fix</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Common Issues</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li>• Image carousels without keyboard controls</li>
                <li>• Product quick-view modals that trap focus</li>
                <li>• Size/color selectors without labels</li>
                <li>• Checkout timeouts without extension options</li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/ecommerce" className="text-sky-400 hover:text-sky-300 underline">Read our complete Ecommerce Accessibility Guide →</Link>
            </p>
          </section>

          {/* Restaurants */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-2xl">🍽️</span>
              <h2 className="text-3xl font-semibold text-white">Restaurants & Food Service</h2>
              <span className="rounded bg-rose-500/20 px-3 py-1 text-sm font-semibold text-rose-300">High Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Restaurant websites—particularly menus and online ordering—are frequent lawsuit targets. The shift to QR code menus during COVID made accessibility even more critical.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Menus must be text-based</strong>, not image-only PDFs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Online ordering</strong> must be keyboard accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Reservation forms</strong> need proper labels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Allergen information</strong> must be screen reader accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Delivery customizations</strong> (extra toppings, modifications) must be accessible</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/restaurants" className="text-sky-400 hover:text-sky-300 underline">Read our complete Restaurant Accessibility Guide →</Link>
            </p>
          </section>

          {/* Banking */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-2xl">🏦</span>
              <h2 className="text-3xl font-semibold text-white">Banking & Financial Services</h2>
              <span className="rounded bg-rose-500/20 px-3 py-1 text-sm font-semibold text-rose-300">High Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Financial institutions face heightened scrutiny due to the essential nature of banking services. Online banking, loan applications, and investment platforms must all be accessible.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Account dashboards</strong> must be navigable by keyboard</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Transaction tables</strong> need proper headers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Security timeouts</strong> must provide warnings and extensions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Two-factor authentication</strong> must offer accessible alternatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Balance and alert notifications</strong> must be announced to screen readers</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Common Issues</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li>• Custom form controls (date pickers, dropdowns) without ARIA</li>
                <li>• Session timeouts without warning</li>
                <li>• Charts and graphs without text alternatives</li>
                <li>• Focus trapped in authentication modals</li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/banking" className="text-sky-400 hover:text-sky-300 underline">Read our complete Banking Accessibility Guide →</Link>
            </p>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">🎓</span>
              <h2 className="text-3xl font-semibold text-white">Education</h2>
              <span className="rounded bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">Medium Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Educational institutions face requirements under ADA, Section 504 (for federal funding recipients), and Section 508 (for public schools). Learning management systems and course content must be accessible.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>All videos</strong> must have accurate captions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Course materials</strong> (PDFs, slides) must be accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>LMS platforms</strong> must support keyboard navigation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Interactive quizzes</strong> must be accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Live classes</strong> need real-time captioning options</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/education" className="text-sky-400 hover:text-sky-300 underline">Read our complete Education Accessibility Guide →</Link>
            </p>
          </section>

          {/* Government */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">🏛️</span>
              <h2 className="text-3xl font-semibold text-white">Government</h2>
              <span className="rounded bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">Medium Risk (Strict Requirements)</span>
            </div>
            <p className="text-lg leading-relaxed">
              Federal, state, and local government websites must comply with Section 508 and ADA Title II. The 2024 Title II rule explicitly requires WCAG 2.1 AA compliance for state and local government websites.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>WCAG 2.1 AA</strong> is now legally mandated for state/local governments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>All public-facing documents</strong> must be accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Online forms</strong> (permits, licenses, taxes) must work with assistive tech</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Public meeting recordings</strong> need captions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Emergency alerts</strong> must be announced properly</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-sky-500/10 border border-sky-500/30 p-4 mt-4">
              <p className="text-sm text-sky-200">
                <strong>Deadline:</strong> State and local governments with populations ≥50,000 must comply by April 2026. Smaller entities have until April 2027.
              </p>
            </div>

            <p className="text-base text-slate-300 mt-4">
              <Link href="/blog/ada-title-ii-compliance-guide" className="text-sky-400 hover:text-sky-300 underline">Read our ADA Title II Compliance Guide →</Link>
            </p>
          </section>

          {/* Legal Services */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">⚖️</span>
              <h2 className="text-3xl font-semibold text-white">Legal Services</h2>
              <span className="rounded bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">Medium Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Law firms face a unique irony: many firms that litigate ADA cases have inaccessible websites themselves. Contact forms, intake processes, and resource libraries must be accessible.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Contact and intake forms</strong> need proper labels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Attorney bios</strong> should use proper heading structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Legal resources/PDFs</strong> must be accessible documents</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Live chat</strong> must support keyboard users</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/law-firms" className="text-sky-400 hover:text-sky-300 underline">Read our complete Law Firm Accessibility Guide →</Link>
            </p>
          </section>

          {/* Travel & Hospitality */}
          <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-2xl">✈️</span>
              <h2 className="text-3xl font-semibold text-white">Travel & Hospitality</h2>
              <span className="rounded bg-rose-500/20 px-3 py-1 text-sm font-semibold text-rose-300">High Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Hotels, airlines, and travel booking sites face high lawsuit rates due to complex booking flows and the essential nature of travel services.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Booking engines</strong> must be fully keyboard accessible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Date pickers</strong> need keyboard support and screen reader announcements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Room/seat selection maps</strong> must have text alternatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Accessibility features</strong> (wheelchair rooms, etc.) must be clearly findable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Itinerary confirmations</strong> must be accessible</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/hotels" className="text-sky-400 hover:text-sky-300 underline">Read our complete Hotel Accessibility Guide →</Link> | <Link href="/industry/travel" className="text-sky-400 hover:text-sky-300 underline">Travel Accessibility Guide →</Link>
            </p>
          </section>

          {/* Real Estate */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">🏠</span>
              <h2 className="text-3xl font-semibold text-white">Real Estate</h2>
              <span className="rounded bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">Medium Risk</span>
            </div>
            <p className="text-lg leading-relaxed">
              Real estate websites with property listings, virtual tours, and mortgage calculators must ensure all search and inquiry functions are accessible.
            </p>

            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Requirements</h3>
              <ul className="space-y-2 text-base text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Property photo galleries</strong> need alt text and keyboard controls</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Virtual tours</strong> must have accessible alternatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Map-based search</strong> needs list-based alternative</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Mortgage calculators</strong> must work with screen readers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span>
                  <span><strong>Contact forms</strong> for showings need proper labels</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-slate-300">
              <Link href="/industry/real-estate" className="text-sky-400 hover:text-sky-300 underline">Read our complete Real Estate Accessibility Guide →</Link>
            </p>
          </section>

          {/* State-Specific Info */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Don't Forget: State-Level Regulations
            </h2>
            <p className="text-lg leading-relaxed">
              Beyond federal ADA requirements, some states have additional accessibility laws. <Link href="/state/california" className="text-sky-400 hover:text-sky-300 underline">California's Unruh Act</Link> and <Link href="/state/new-york" className="text-sky-400 hover:text-sky-300 underline">New York State Human Rights Law</Link> often lead to higher lawsuit volumes in those states.
            </p>
            <p className="text-lg leading-relaxed">
              Check our state-specific guides for detailed information on regulations in your area.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-950 p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Check Your Compliance
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  See How Your Industry-Specific Site Scores
                </h3>
                <p className="mt-3 text-base text-slate-300">
                  Our scanner checks for industry-relevant accessibility issues and provides tailored recommendations for your sector.
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
            <h2 className="text-2xl font-semibold text-white">Industry Guides</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/industry/healthcare"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Healthcare Website Accessibility
                </p>
              </Link>
              <Link
                href="/industry/ecommerce"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Ecommerce Website Accessibility
                </p>
              </Link>
              <Link
                href="/industry/banking"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Industry Guide</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Banking Website Accessibility
                </p>
              </Link>
              <Link
                href="/blog/ada-compliance-checklist-2026"
                className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <p className="text-sm text-slate-400">Checklist</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ADA Compliance Checklist 2026
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
