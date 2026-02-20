/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RatedWithAI vs accessiBe: Honest Accessibility Scanning vs Overlay Widgets | Comparison 2026",
  description:
    "Compare RatedWithAI and accessiBe for website accessibility. We show real issues with transparent scanning, they cover them with widgets. Learn the key differences and controversy around overlay solutions.",
  openGraph: {
    title: "RatedWithAI vs accessiBe: Honest Accessibility Scanning vs Overlay Widgets",
    description:
      "Compare RatedWithAI and accessiBe for website accessibility. We show real issues with transparent scanning, they cover them with widgets.",
    type: "article",
  },
};

export default function RatedWithAIvsAccessiBePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RatedWithAI vs accessiBe: Honest Accessibility Scanning vs Overlay Widgets",
    description:
      "Compare RatedWithAI and accessiBe for website accessibility. Learn the key differences between transparent scanning and overlay solutions.",
    datePublished: "2026-02-19T00:00:00.000Z",
    dateModified: "2026-02-19T00:00:00.000Z",
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
                <p className="text-xs text-slate-400">Compare</p>
              </div>
            </Link>
            <Link
              className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
              href="/"
            >
              Try free scan
            </Link>
          </header>

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Tool Comparison
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              RatedWithAI vs accessiBe: Honest Accessibility Scanning vs Overlay Widgets
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              When it comes to website accessibility, how you solve the problem matters. Let's compare two fundamentally different approaches: transparent scanning vs. overlay widgets.
            </p>
          </section>
        </div>

        <article className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Fundamental Difference</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              <strong className="text-white">RatedWithAI</strong> shows you the real accessibility issues on your website using industry-standard axe-core scanning. We believe in transparency: you see what's broken, you fix it at the source.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              <strong className="text-white">accessiBe</strong> uses an overlay widget that attempts to modify your website on the fly for users with disabilities. The underlying code remains unchanged, and according to{" "}
              <a 
                href="https://overlayfactsheet.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                overlay criticism from the accessibility community
              </a>, this approach has significant limitations.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Pricing Comparison</h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">RatedWithAI</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-2">$29/month</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>✓ Unlimited scans</li>
                    <li>✓ Real axe-core violations</li>
                    <li>✓ Transparent reports</li>
                    <li>✓ Fix issues at the source</li>
                    <li>✓ Developer-friendly</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">accessiBe</h3>
                  <p className="text-3xl font-bold text-slate-400 mb-2">From $490/year</p>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Overlay-based solution</li>
                    <li>• Doesn't fix source code</li>
                    <li>• Annual commitment</li>
                    <li>• Enterprise focus</li>
                    <li>• Widget dependency</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 text-white font-semibold">RatedWithAI</th>
                    <th className="text-center py-3 px-4 text-white font-semibold">accessiBe</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Transparent scanning</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Fixes source code issues</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Uses axe-core (industry standard)</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">No widget dependency</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Monthly pricing</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Free trial / scan</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Overlay widget available</td>
                    <td className="text-center py-3 px-4 text-slate-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Overlay Controversy</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              We believe it's important to address the ongoing debate in the accessibility community about overlay solutions. Over 700 accessibility professionals and advocates have signed the{" "}
              <a 
                href="https://overlayfactsheet.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Overlay Fact Sheet
              </a>, which states that "overlays do not provide full conformance with any accessibility standard."
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              The key concerns include:
            </p>
            <ul className="text-slate-300 space-y-3 mb-6 list-disc list-inside">
              <li>Overlays interfere with assistive technologies that users already rely on</li>
              <li>They don't fix the underlying accessibility issues in your code</li>
              <li>Legal protection claims are disputed by accessibility lawyers</li>
              <li>They can actually make the experience worse for some users with disabilities</li>
            </ul>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              We believe the better approach is to identify and fix real issues at the source—which is exactly what RatedWithAI helps you do.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Who Should Choose RatedWithAI?</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              RatedWithAI is perfect for teams that want to:
            </p>
            <ul className="text-slate-300 space-y-3 mb-6 list-disc list-inside">
              <li><strong className="text-white">Fix real issues:</strong> Get actionable insights on what's actually broken in your code</li>
              <li><strong className="text-white">Save money:</strong> $29/month vs $490+/year makes accessibility affordable for small businesses</li>
              <li><strong className="text-white">Stay transparent:</strong> See exactly what axe-core finds, no black box solutions</li>
              <li><strong className="text-white">Build better:</strong> Learn and improve your development practices over time</li>
              <li><strong className="text-white">Avoid controversy:</strong> No reliance on overlay widgets that the accessibility community critiques</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Who Might Prefer accessiBe?</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              To be fair, accessiBe might be suitable if you:
            </p>
            <ul className="text-slate-300 space-y-3 mb-6 list-disc list-inside">
              <li>Want a quick overlay solution without code changes</li>
              <li>Have a legacy system that's difficult to modify</li>
              <li>Are comfortable with the overlay approach despite community criticism</li>
              <li>Need enterprise-level support and services</li>
            </ul>

            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8 mt-12 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to try real accessibility scanning?</h3>
              <p className="text-slate-300 text-lg mb-6">
                Get your website accessibility score in 30 seconds. See exactly what needs fixing with axe-core powered scanning.
              </p>
              <Link 
                href="/"
                className="inline-block rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-base font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/50"
              >
                Try a real accessibility scan — free
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Related Resources</h2>
            <ul className="text-slate-300 space-y-3 mb-6">
              <li>
                <Link href="/blog/ada-compliance-checklist-2026" className="text-blue-400 hover:text-blue-300 underline">
                  ADA Compliance Checklist 2026
                </Link> — Complete guide for business owners
              </li>
              <li>
                <Link href="/compare/ratedwithai-vs-wave" className="text-blue-400 hover:text-blue-300 underline">
                  RatedWithAI vs WAVE
                </Link> — Compare with the free developer tool
              </li>
              <li>
                <Link href="/compare/ratedwithai-vs-audioeye" className="text-blue-400 hover:text-blue-300 underline">
                  RatedWithAI vs AudioEye
                </Link> — Affordable accessibility for small business
              </li>
              <li>
                <a href="https://overlayfactsheet.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  Overlay Fact Sheet
                </a> — Learn why accessibility professionals avoid overlays
              </li>
            </ul>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
