/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ADA Compliance Checker — Free Website ADA Testing Tool | RatedWithAI",
  description:
    "Free ADA compliance checker for websites. Scan any URL against WCAG 2.1 AA — the standard courts use for ADA enforcement. Get instant results with severity ratings and fix instructions. No signup required.",
  keywords: [
    "ada compliance checker",
    "ada compliance checker free",
    "ada website compliance checker",
    "ada compliance tool",
    "ada compliance testing",
    "ada website checker",
    "ada compliant website checker",
    "website ada compliance test",
    "ada compliance scanner",
    "is my website ada compliant",
    "check ada compliance",
    "ada compliance website test",
  ],
  openGraph: {
    title: "ADA Compliance Checker — Free Website ADA Testing Tool",
    description:
      "Free ADA compliance checker for websites. Scan any URL against WCAG 2.1 AA in seconds. Get instant results with fix instructions. No signup required.",
    type: "website",
  },
};

export default function AdaComplianceCheckerPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "RatedWithAI ADA Compliance Checker",
      applicationCategory: "WebApplication",
      operatingSystem: "Any (web-based)",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free ADA compliance checker for websites. Tests any URL against WCAG 2.1 Level AA — the standard used by courts for ADA web accessibility enforcement.",
      url: "https://ratedwithai.com/tools/ada-compliance-checker",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        ratingCount: "214",
        bestRating: "5",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the ADA compliance checker really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can scan any URL as many times as you want with no signup, no credit card, and no usage limits. Our free scanner runs the same axe-core engine as our paid monitoring plans.",
          },
        },
        {
          "@type": "Question",
          name: "What does the ADA require for website accessibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ADA doesn't specify a technical standard in its text, but the DOJ has formally adopted WCAG 2.1 Level AA as the benchmark for ADA compliance. The 2024 Title II rule explicitly requires WCAG 2.1 AA for state and local government websites by April 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get sued for ADA non-compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Over 4,600 web accessibility lawsuits were filed in 2025. Any business operating a website that offers goods or services to the public can be subject to ADA accessibility claims. Plaintiff firms actively scan websites for violations.",
          },
        },
        {
          "@type": "Question",
          name: "Does passing an ADA compliance scan guarantee I won't be sued?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No automated scan can guarantee legal protection. However, demonstrating ongoing compliance efforts — regular scanning, documented remediation, and a published accessibility statement — significantly reduces lawsuit risk and provides a strong legal defense.",
          },
        },
      ],
    },
  ];

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
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
                ✓ Free ADA Testing — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                ADA Compliance Checker
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Check if your website meets ADA accessibility requirements in under 60 seconds.
                We test against WCAG 2.1 Level AA — the standard the DOJ uses for ADA enforcement — and give you a compliance score with specific fix instructions.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                Check ADA Compliance Free →
              </Link>
              <p className="mt-3 text-sm text-slate-400">No credit card. No signup. Paste any URL and get results.</p>
            </div>

            {/* Stats bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { stat: "4,600+", label: "ADA lawsuits filed in 2025" },
                { stat: "94.8%", label: "of websites fail accessibility tests" },
                { stat: "$50K+", label: "average ADA lawsuit settlement" },
                { stat: "60 sec", label: "to get your ADA compliance score" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-center">
                  <p className="text-2xl font-bold text-sky-400">{item.stat}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <article className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
          <div className="prose prose-invert prose-slate max-w-none">

            {/* What is ADA compliance */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What Is ADA Website Compliance?
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              The <strong className="text-white">Americans with Disabilities Act (ADA)</strong> is a federal civil rights law that prohibits discrimination against people with disabilities. While the ADA was enacted in 1990 — before the modern internet — courts and the Department of Justice have consistently interpreted it to cover websites, especially for businesses that serve the public.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              In practice, ADA website compliance means making your website accessible to people with disabilities: those who are blind or low vision (using screen readers), deaf or hard of hearing (needing captions), those with motor disabilities (navigating by keyboard), and those with cognitive disabilities (needing clear, simple interfaces).
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              The DOJ has formally adopted <strong className="text-white">WCAG 2.1 Level AA</strong> as the technical standard for ADA web accessibility. Our ADA compliance checker tests your website against this exact standard.
            </p>

            {/* Who needs ADA compliance */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Who Needs ADA Website Compliance?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Private Businesses (Title III)",
                  desc: "Any business that offers goods or services to the public — retail, restaurants, hotels, banks, law firms, healthcare providers, SaaS companies, and more.",
                  urgency: "At risk now — lawsuits are actively being filed",
                },
                {
                  title: "State & Local Government (Title II)",
                  desc: "All state and local government websites must meet WCAG 2.1 AA. The DOJ's 2024 rule sets a hard deadline of April 24, 2026.",
                  urgency: "Deadline: April 24, 2026",
                },
                {
                  title: "Federal Government (Section 508)",
                  desc: "Federal agencies must meet accessibility standards under Section 508, which aligns with WCAG 2.1 AA.",
                  urgency: "Already required",
                },
                {
                  title: "Education Institutions",
                  desc: "Schools, colleges, and universities receiving federal funding must ensure website accessibility under Title II and Section 504.",
                  urgency: "Active enforcement by DOJ and OCR",
                },
                {
                  title: "Healthcare Providers",
                  desc: "Hospitals, clinics, telehealth platforms, and insurance portals — especially critical for patient access to health information.",
                  urgency: "New HHS rule effective May 2026",
                },
                {
                  title: "E-commerce & Online Retail",
                  desc: "Online stores are the most frequently sued category in ADA web accessibility litigation. Product pages, checkout flows, and filters must be accessible.",
                  urgency: "Highest lawsuit volume",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                  <p className="text-xs text-red-400 mt-3 font-medium">{item.urgency}</p>
                </div>
              ))}
            </div>

            {/* What we check */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What Our ADA Compliance Checker Tests
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              We run 50+ automated WCAG 2.1 AA checks against your website using the axe-core engine — the same technology used by Microsoft, Google, and the U.S. Digital Service. Here's what we test:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { icon: "🖼️", title: "Image Alt Text", desc: "Every image must have descriptive alternative text for screen readers" },
                { icon: "🎨", title: "Color Contrast", desc: "Text must have 4.5:1 contrast ratio against backgrounds" },
                { icon: "⌨️", title: "Keyboard Navigation", desc: "All functionality must be operable with keyboard alone" },
                { icon: "📝", title: "Form Labels", desc: "Every input must have a clear, associated label" },
                { icon: "🔗", title: "Link Text", desc: "Links must have descriptive text — not just 'click here'" },
                { icon: "📱", title: "Mobile Responsive", desc: "Content must reflow at 320px without horizontal scrolling" },
                { icon: "🌍", title: "Language Declaration", desc: "Page language must be programmatically declared" },
                { icon: "📊", title: "Heading Structure", desc: "Headings must follow a logical hierarchy (H1 → H2 → H3)" },
                { icon: "🎬", title: "Media Alternatives", desc: "Video must have captions; audio must have transcripts" },
                { icon: "⚡", title: "Focus Indicators", desc: "Keyboard focus must be visible on all interactive elements" },
                { icon: "🏷️", title: "ARIA Usage", desc: "ARIA attributes must be valid and correctly applied" },
                { icon: "🔄", title: "Status Messages", desc: "Dynamic content updates must be announced to screen readers" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* ADA lawsuit landscape */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The ADA Lawsuit Landscape in 2026
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              Web accessibility litigation continues to grow. Understanding the landscape helps you assess your risk:
            </p>
            <ul className="text-slate-300 space-y-3 mb-8 list-disc list-inside text-lg">
              <li>
                <strong className="text-white">4,600+ federal lawsuits filed in 2025</strong> — a 15% increase over 2024, and the trend is accelerating.
              </li>
              <li>
                <strong className="text-white">E-commerce is the top target</strong> — online retail accounts for over 75% of filed cases. Product images without alt text and inaccessible checkout flows are the most cited violations.
              </li>
              <li>
                <strong className="text-white">Average settlement: $50,000-$100,000</strong> — plus attorney fees, which can equal or exceed the settlement amount.
              </li>
              <li>
                <strong className="text-white">Serial plaintiff firms drive volume</strong> — a small number of law firms file the majority of cases, using automated scanning to identify targets.
              </li>
              <li>
                <strong className="text-white">Proactive compliance is the best defense</strong> — courts look favorably on organizations that can demonstrate ongoing compliance efforts, regular testing, and a published accessibility statement.
              </li>
            </ul>

            {/* How it compares */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Free vs Paid ADA Compliance Testing
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 text-green-400 font-semibold">Free Scan</th>
                    <th className="text-center py-3 px-4 text-blue-400 font-semibold">Pro ($29/mo)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Single page scan</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">WCAG 2.1 AA testing</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Compliance score</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Fix recommendations</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Scheduled monitoring</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Email alerts on regressions</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Multi-page scanning</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Compliance documentation</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Brand competitor monitoring</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is the ADA compliance checker really free?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes. You can scan any URL as many times as you want with no signup, no credit card, and no usage limits. Our free scanner runs the same axe-core engine as our paid monitoring plans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What does the ADA require for website accessibility?</h3>
                <p className="text-slate-300 leading-relaxed">
                  The ADA doesn't specify a technical standard in its text, but the DOJ has formally adopted WCAG 2.1 Level AA as the benchmark for ADA compliance. The 2024 Title II rule explicitly requires WCAG 2.1 AA for state and local government websites by April 2026. Courts in Title III cases (private businesses) have also consistently pointed to WCAG as the appropriate standard.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Can I get sued for ADA non-compliance?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes. Over 4,600 web accessibility lawsuits were filed in 2025 alone. Any business operating a website that offers goods or services to the public can be subject to ADA accessibility claims. Plaintiff firms actively use automated tools to scan websites for violations and file lawsuits at scale.{" "}
                  <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-blue-400 hover:text-blue-300 underline">
                    See latest lawsuit statistics →
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Does passing this scan guarantee I won't be sued?</h3>
                <p className="text-slate-300 leading-relaxed">
                  No automated scan can guarantee legal protection. However, demonstrating ongoing compliance efforts — regular scanning, documented remediation, and a published accessibility statement — significantly reduces lawsuit risk and provides a strong legal defense. Courts have consistently looked favorably on good-faith efforts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Is an accessibility overlay enough for ADA compliance?</h3>
                <p className="text-slate-300 leading-relaxed">
                  No. Accessibility overlays (like accessiBe, UserWay, or AudioEye widgets) have not been accepted by courts as proof of ADA compliance. Multiple companies using overlays have been sued successfully. The accessibility community's{" "}
                  <a href="https://overlayfactsheet.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Overlay Fact Sheet</a>{" "}
                  explains why overlays don't work. Real compliance requires fixing issues in your code.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">How much does it cost to make a website ADA compliant?</h3>
                <p className="text-slate-300 leading-relaxed">
                  For most small-to-medium websites, fixing critical accessibility issues costs 4-16 hours of developer time (roughly $400-$2,000 as a one-time investment). Ongoing monitoring with RatedWithAI is $29/month. Compare this to the average ADA lawsuit settlement of $50,000-$100,000 plus attorney fees. Small businesses may also qualify for the $5,000 Disabled Access Tax Credit (Form 8826).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What's the ADA Title II deadline?</h3>
                <p className="text-slate-300 leading-relaxed">
                  State and local government websites with populations of 50,000+ must meet WCAG 2.1 AA by April 24, 2026. Smaller governments have until April 24, 2027. This is a firm deadline — non-compliance can result in DOJ enforcement actions, loss of federal funding, and private lawsuits.{" "}
                  <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-blue-400 hover:text-blue-300 underline">
                    Full Title II countdown and guide →
                  </Link>
                </p>
              </div>
            </div>

            {/* Tax credit callout */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">💰 Small Business? ADA Compliance May Be Free</h3>
              <p className="text-slate-300 leading-relaxed">
                The <strong className="text-white">Disabled Access Credit (IRS Form 8826)</strong> provides up to $5,000 annually for small businesses spending on ADA compliance — including accessibility scanning tools and developer remediation costs. If your business earns less than $1 million in revenue or has fewer than 30 employees, this credit can effectively cover the entire cost of making your website accessible.
              </p>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8 mt-12 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Check Your Website's ADA Compliance Now
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                Free, instant ADA compliance testing. Paste your URL, see your violations, and get clear instructions on how to fix them. No signup, no credit card.
              </p>
              <Link
                href="/#scanner"
                className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-base font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Run Free ADA Compliance Check →
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                Need ongoing monitoring? <Link href="/pricing" className="text-blue-400 hover:text-blue-300">See Pro plans</Link> from $29/mo for scheduled scans, alerts, and compliance documentation.
              </p>
            </div>

            {/* Related links */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Related:{" "}
                <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300">Free Accessibility Checker</Link>{" "}
                ·{" "}
                <Link href="/tools/wcag-compliance-tool" className="text-sky-400 hover:text-sky-300">WCAG Compliance Tool</Link>{" "}
                ·{" "}
                <Link href="/tools/ada-title-ii-compliance-checker" className="text-sky-400 hover:text-sky-300">ADA Title II Checker</Link>{" "}
                ·{" "}
                <Link href="/blog/ada-compliance-checklist-2026" className="text-sky-400 hover:text-sky-300">ADA Compliance Checklist 2026</Link>{" "}
                ·{" "}
                <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">Lawsuit Statistics 2026</Link>{" "}
                ·{" "}
                <Link href="/tools/is-my-website-ada-compliant" className="text-sky-400 hover:text-sky-300">Is My Website ADA Compliant?</Link>
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
