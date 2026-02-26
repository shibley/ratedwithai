/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ADA Lawsuit Reform 2026: Missouri, Utah Bills Target Abusive Litigation | RatedWithAI",
  description:
    "Missouri HB 1694 and Utah SB 68 propose cure periods and counter-sue provisions for ADA web accessibility lawsuits. With 8,667 federal lawsuits in 2025, states are fighting back. Here's what it means for businesses.",
  openGraph: {
    title: "ADA Lawsuit Reform 2026: States Fight Abusive Accessibility Lawsuits",
    description:
      "With 8,667 ADA lawsuits in 2025, Missouri and Utah are proposing cure periods and counter-sue rights. What businesses need to know.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "ada title iii",
    "ada website lawsuit",
    "ada lawsuit reform",
    "ada cure period",
    "ada abusive lawsuits",
    "missouri hb 1694",
    "utah sb 68",
    "ada web accessibility lawsuit",
    "accessibility lawsuit statistics 2025",
    "ada serial litigation",
  ],
  alternates: {
    canonical: "https://ratedwithai.com/blog/ada-lawsuit-reform-2026",
  },
};

export default function AdaLawsuitReformPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "ADA Lawsuit Reform 2026: Missouri and Utah Bills Target Abusive Web Accessibility Litigation",
    description:
      "Analysis of Missouri HB 1694 and Utah SB 68, two state bills proposing cure periods and counter-sue provisions for ADA web accessibility lawsuits.",
    datePublished: "2026-02-22T00:00:00.000Z",
    dateModified: "2026-02-22T00:00:00.000Z",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/30 via-red-500/20 to-rose-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-orange-500/20 via-red-500/10 to-rose-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              LEGISLATIVE UPDATE
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              ADA Lawsuit Reform 2026: States Push Back Against Abusive Accessibility Litigation
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              In 2025, <strong className="text-white">8,667 federal ADA Title III lawsuits</strong> were filed across the
              United States — the highest number on record. Now, states are fighting back. Missouri and Utah have introduced
              landmark bills that would fundamentally change how ADA web accessibility lawsuits work, giving businesses a
              chance to fix violations before facing legal action. Here's what's happening, why it matters, and what you
              should do.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-22">February 22, 2026</time>
              <span>·</span>
              <span>10 min read</span>
              <span>·</span>
              <span className="text-orange-400">Analysis</span>
            </div>

            {/* Key stats box */}
            <div className="mt-10 rounded-xl border border-orange-500/30 bg-orange-500/5 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-orange-400">8,667</div>
                  <div className="text-sm text-slate-400 mt-1">Lawsuits in 2025</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400">3,252</div>
                  <div className="text-sm text-slate-400 mt-1">California Alone</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">30%</div>
                  <div className="text-sm text-slate-400 mt-1">Involved Overlays</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400">$75K+</div>
                  <div className="text-sm text-slate-400 mt-1">Avg Settlement</div>
                </div>
              </div>
            </div>

            <div className="mt-10 prose prose-lg prose-invert max-w-none">
              {/* Section 1: The Lawsuit Landscape */}
              <h2 className="text-2xl font-bold text-white">The ADA Lawsuit Landscape: 2025 in Numbers</h2>
              <p className="text-slate-300">
                According to <strong className="text-white">Seyfarth Shaw</strong>, the most authoritative source for ADA
                Title III litigation data, <strong className="text-white">8,667 federal ADA Title III lawsuits</strong> were
                filed in 2025 — a slight decrease of 2% from the 8,800 filed in 2024, but still near the all-time high.
                These numbers tell a story of an enforcement ecosystem that shows no signs of slowing down.
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-3 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Year</div>
                    <div>Federal ADA Title III Lawsuits</div>
                    <div>Change</div>
                  </div>
                  {[
                    { year: "2018", count: "2,258", change: "+" },
                    { year: "2019", count: "2,256", change: "Flat" },
                    { year: "2020", count: "3,550", change: "+57%" },
                    { year: "2021", count: "4,055", change: "+14%" },
                    { year: "2022", count: "8,694", change: "+114%" },
                    { year: "2023", count: "8,227", change: "-5%" },
                    { year: "2024", count: "8,800", change: "+7%" },
                    { year: "2025", count: "8,667", change: "-2%" },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 p-4 text-sm border-t border-slate-700 ${
                      row.year === '2025' ? 'bg-orange-500/5' : 'bg-slate-800/50'
                    }`}>
                      <div className={row.year === '2025' ? 'text-orange-400 font-semibold' : 'text-slate-300'}>{row.year}</div>
                      <div className="text-white font-semibold">{row.count}</div>
                      <div className={row.change.startsWith('+') && row.change !== '+' ? 'text-red-400' : row.change.startsWith('-') ? 'text-green-400' : 'text-slate-400'}>{row.change}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">Source: Seyfarth Shaw ADA Title III Lawsuit Tracker</p>
              </div>

              <h3 className="text-xl font-bold text-white mt-8">State-by-State Filing Data</h3>
              <p className="text-slate-300">
                The geographic distribution of ADA lawsuits is heavily concentrated in three states, which account for
                nearly <strong className="text-white">75% of all federal filings</strong>:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { state: "California", filings: "3,252", pct: "37.5%", note: "Led by serial litigants in LA and SF. No cure period. Plaintiff-friendly courts.", color: "text-red-400" },
                  { state: "Florida", filings: "1,823", pct: "21.0%", note: "Concentrated in Miami-Dade. Aggressive law firms like Bursor & Fisher. No mandatory mediation.", color: "text-orange-400" },
                  { state: "New York", filings: "1,471", pct: "17.0%", note: "DOWN from 2,500+ in 2023. Stricter standing requirements after Laufer v. Acheson Hotels ruling by the Supreme Court.", color: "text-amber-400" },
                  { state: "Texas", filings: "412", pct: "4.8%", note: "Growing rapidly. Houston and Dallas courts. No state ADA equivalent provides leverage.", color: "text-yellow-400" },
                  { state: "Pennsylvania", filings: "287", pct: "3.3%", note: "Philadelphia courts. Targeting retail and hospitality.", color: "text-slate-400" },
                  { state: "All Other States", filings: "1,422", pct: "16.4%", note: "Only Montana, North Dakota, and South Dakota had ZERO federal ADA Title III lawsuits in 2025.", color: "text-slate-400" },
                ].map((item) => (
                  <div key={item.state} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white">{item.state}</h3>
                      <div className="flex items-center gap-3">
                        <span className={`font-bold ${item.color}`}>{item.filings}</span>
                        <span className="text-xs text-slate-500">{item.pct}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{item.note}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                For detailed state-by-state filing data, see our{" "}
                <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">
                  complete 2026 lawsuit statistics report
                </Link>{" "}
                and{" "}
                <Link href="/state/california" className="text-sky-400 hover:text-sky-300">
                  state-specific accessibility guides
                </Link>.
              </p>

              {/* Section 2: The Reform Bills */}
              <h2 className="text-2xl font-bold text-white mt-12">The Backlash: Two State Bills That Could Change Everything</h2>
              <p className="text-slate-300">
                The sheer volume of lawsuits — many filed by a small number of serial litigants against small businesses —
                has sparked a legislative backlash. Two states are now proposing laws to curb what they call "abusive"
                ADA litigation, while maintaining protections for people with disabilities.
              </p>

              {/* Missouri HB 1694 */}
              <div className="not-prose rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mt-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏛️</span>
                  <div>
                    <h3 className="font-bold text-white text-xl">Missouri HB 1694</h3>
                    <p className="text-sm text-orange-400">"Accessible Business Protection Act"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Key Provision: 90-Day Cure Period</h4>
                    <p className="text-sm text-slate-300">
                      Before filing a lawsuit, plaintiffs must provide <strong className="text-white">written notice</strong> of
                      the specific accessibility barrier and give the business <strong className="text-white">90 days to cure</strong> the
                      violation. If the business makes a "good faith effort" to remediate within that window, no lawsuit
                      can proceed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Sponsor & Backers</h4>
                    <p className="text-sm text-slate-300">
                      Backed by the <strong className="text-white">National Federation of Independent Business (NFIB)</strong>.
                      Introduced after 100+ small businesses in Missouri received ADA demand letters from a single law
                      firm in a 90-day period. Many businesses settled for $5,000-$15,000 rather than fight.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Impact on Businesses</h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• Businesses get a genuine opportunity to fix issues before facing litigation costs</li>
                      <li>• "Good faith" standard means you need to show real remediation effort, not just intent</li>
                      <li>• Does NOT eliminate the obligation to be accessible — only changes the enforcement pathway</li>
                      <li>• Serial litigants can still file, but must wait through the cure period each time</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-orange-500/20">
                    <p className="text-xs text-slate-500">Status: Introduced February 2026. Committee hearing scheduled. Expected floor vote Q2 2026.</p>
                  </div>
                </div>
              </div>

              {/* Utah SB 68 */}
              <div className="not-prose rounded-xl border border-blue-500/30 bg-blue-500/5 p-6 mt-4 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⚖️</span>
                  <div>
                    <h3 className="font-bold text-white text-xl">Utah SB 68</h3>
                    <p className="text-sm text-blue-400">"ADA Accountability & Fairness Act"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Key Provision: Counter-Sue Right</h4>
                    <p className="text-sm text-slate-300">
                      If an ADA claim is found to be "abusive" or filed in "bad faith," the defendant can
                      <strong className="text-white"> counter-sue for attorney's fees and damages</strong>. This is
                      unprecedented — currently, ADA defendants who win can rarely recover their legal costs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">30-Day Remediation Presumption</h4>
                    <p className="text-sm text-slate-300">
                      Creates a legal presumption that if a business fixes the accessibility barrier within
                      <strong className="text-white"> 30 days of notification</strong>, the claim should be dismissed.
                      Courts retain discretion for repeat offenders or egregious cases.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">"Abusive Litigation" Definition</h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• Filing 10+ substantially similar ADA claims in a 12-month period</li>
                      <li>• Claims where the plaintiff never visited or intended to use the business's services</li>
                      <li>• Demand letters that seek monetary settlement without providing specific violation details</li>
                      <li>• Claims filed against businesses that can demonstrate ongoing remediation efforts</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-blue-500/20">
                    <p className="text-xs text-slate-500">Status: Introduced January 2026. Passed committee. Expected Senate floor vote March 2026.</p>
                  </div>
                </div>
              </div>

              {/* Section 3: What This Means */}
              <h2 className="text-2xl font-bold text-white mt-12">What These Bills Mean for Your Business</h2>
              <p className="text-slate-300">
                Let's be clear about something: <strong className="text-white">reduced fear of lawsuits does not mean reduced
                obligation to be accessible</strong>. The ADA is still the law. WCAG compliance is still the standard.
                People with disabilities still deserve equal access to digital services.
              </p>
              <p className="text-slate-300">
                That said, these bills — if passed — would change the game in meaningful ways:
              </p>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-8">
                {[
                  { title: "For Small Businesses", desc: "A 90-day cure period means a demand letter doesn't automatically mean a $75K settlement. You get time to fix the issue, which costs far less than litigation.", icon: "🏪" },
                  { title: "For Serial Litigants", desc: "Counter-sue provisions and the 'abusive litigation' definition make drive-by lawsuits riskier. Filing 10+ cookie-cutter complaints could trigger consequences.", icon: "⚠️" },
                  { title: "For Accessibility Industry", desc: "Demand for proactive compliance tools and audits will increase. Businesses will want to fix issues during the cure period, not wait for lawsuits.", icon: "✅" },
                  { title: "For People with Disabilities", desc: "Advocates worry cure periods delay access. But the current system — where most settlements result in zero actual remediation — isn't working either.", icon: "♿" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Section 4: The Overlay Problem */}
              <h2 className="text-2xl font-bold text-white mt-12">The Overlay Problem: Why 30% of Lawsuits Involve "Accessible" Sites</h2>
              <p className="text-slate-300">
                Perhaps the most damning statistic in the 2025 lawsuit data: <strong className="text-white">30% of ADA web
                accessibility lawsuits</strong> were filed against websites that use accessibility overlay widgets — the
                very products marketed as lawsuit prevention tools.
              </p>
              <p className="text-slate-300">
                This isn't surprising to accessibility professionals. Overlay widgets add a JavaScript toolbar to websites
                that promises WCAG compliance through automated "fixes." In reality:
              </p>

              <div className="not-prose space-y-3 mt-4 mb-8">
                {[
                  { fact: "$1M fine", desc: "In 2025, a major overlay provider was fined $1 million for deceptive marketing claims about compliance guarantees." },
                  { fact: "WCAG ≠ widget", desc: "WCAG compliance requires structural HTML changes, meaningful alt text written by humans, and logical content organization. No JavaScript widget can provide these." },
                  { fact: "Courts reject overlays", desc: "Multiple federal courts have ruled that the presence of an overlay widget does not demonstrate WCAG compliance or provide a valid defense in ADA lawsuits." },
                  { fact: "Screen reader conflicts", desc: "Major screen reader vendors (NVDA, JAWS) have documented conflicts between overlay widgets and assistive technologies, sometimes making sites LESS accessible." },
                  { fact: "NFB opposition", desc: "The National Federation of the Blind has formally opposed overlay widgets, calling them 'more of an obstacle than a benefit to blind people.'" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 font-bold text-sm min-w-[120px]">{item.fact}</span>
                      <span className="text-sm text-slate-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                If your business uses an overlay widget thinking it provides lawsuit protection, you may actually
                be <strong className="text-white">increasing your legal risk</strong>. The data shows that overlays draw
                plaintiff attention rather than deflecting it — they signal to ADA law firms that a site has known
                accessibility issues and chose a shortcut instead of real remediation.
              </p>

              {/* Section 5: Proactive vs Reactive */}
              <h2 className="text-2xl font-bold text-white mt-12">Proactive Compliance vs. Reactive Litigation: The Cost Comparison</h2>
              <p className="text-slate-300">
                Whether or not these reform bills pass, the math is clear: fixing accessibility proactively costs a
                fraction of fighting a lawsuit.
              </p>

              <div className="not-prose mt-4 mb-8">
                <div className="rounded-xl border border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-3 bg-slate-800 p-4 font-semibold text-sm text-slate-300">
                    <div>Approach</div>
                    <div>Typical Cost</div>
                    <div>Outcome</div>
                  </div>
                  {[
                    { approach: "Monthly automated scanning", cost: "$29–99/mo", outcome: "Continuous monitoring, early detection, compliance documentation", good: true },
                    { approach: "Annual accessibility audit", cost: "$5,000–15,000", outcome: "Comprehensive assessment, prioritized remediation plan", good: true },
                    { approach: "Full remediation project", cost: "$10,000–50,000", outcome: "WCAG conformance, VPAT documentation, ongoing monitoring", good: true },
                    { approach: "Demand letter settlement", cost: "$5,000–15,000", outcome: "No fixes required, repeat targeting likely", good: false },
                    { approach: "Lawsuit defense (win)", cost: "$50,000–100,000", outcome: "Legal fees, distraction, no fixes guaranteed", good: false },
                    { approach: "Lawsuit settlement", cost: "$75,000–300,000", outcome: "Payment + required fixes + monitoring + legal fees", good: false },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 p-4 text-sm border-t border-slate-700 ${
                      row.good ? 'bg-green-500/5' : 'bg-red-500/5'
                    }`}>
                      <div className="text-slate-300">{row.approach}</div>
                      <div className={row.good ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>{row.cost}</div>
                      <div className="text-slate-400 text-xs">{row.outcome}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-300">
                <strong className="text-white">The tax credit angle:</strong> Small businesses can claim the
                <strong className="text-white"> Disabled Access Credit</strong> (IRS Form 8826) — up to $5,000/year for
                accessibility improvements. At $29/month, a tool like RatedWithAI costs $348/year — well within the credit
                threshold and effectively free after the tax benefit.
              </p>

              {/* Section 6: Action Plan */}
              <h2 className="text-2xl font-bold text-white mt-12">What Businesses Should Do NOW: 5-Step Action Plan</h2>
              <p className="text-slate-300">
                Regardless of whether these reform bills pass, here's the smartest path forward:
              </p>

              <div className="not-prose space-y-4 mt-4 mb-8">
                {[
                  {
                    step: "1",
                    title: "Scan Your Website Today",
                    desc: "Run a free automated accessibility scan to understand your current compliance level. This takes 60 seconds and gives you a baseline score plus a prioritized list of violations.",
                    cta: { text: "Run Free Scan", href: "/#scanner" },
                  },
                  {
                    step: "2",
                    title: "Fix Critical Violations First",
                    desc: "Focus on the issues most likely to trigger lawsuits: missing alt text, color contrast failures, keyboard traps, and missing form labels. These four categories account for 80%+ of ADA web lawsuits.",
                    cta: null,
                  },
                  {
                    step: "3",
                    title: "Remove Overlay Widgets",
                    desc: "If you're using an accessibility overlay, remove it. Replace it with real WCAG fixes. The overlay may be increasing your legal risk while providing a false sense of security.",
                    cta: null,
                  },
                  {
                    step: "4",
                    title: "Document Your Compliance Efforts",
                    desc: "Keep records of scans, fixes, and remediation plans. If a cure period law passes, 'good faith effort' documentation is your defense. Even without these laws, courts look favorably on businesses that demonstrate genuine accessibility efforts.",
                    cta: null,
                  },
                  {
                    step: "5",
                    title: "Set Up Ongoing Monitoring",
                    desc: "Accessibility isn't a one-time project. Content updates, CMS changes, and third-party integrations can introduce new violations at any time. Monthly or weekly automated scans catch regressions before they become lawsuit triggers.",
                    cta: { text: "See Monitoring Plans", href: "/pricing" },
                  },
                ].map((item) => (
                  <div key={item.step} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold text-sm">{item.step}</span>
                      <h3 className="font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                    {item.cta && (
                      <div className="mt-3">
                        <Link
                          href={item.cta.href}
                          className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors"
                        >
                          {item.cta.text} →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="not-prose rounded-xl border border-sky-500/30 bg-sky-500/5 p-8 text-center mt-8 mb-8">
                <h3 className="text-2xl font-bold text-white">Don't Wait for Reform — Be Proactive</h3>
                <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
                  Whether or not cure period laws pass in your state, proactive compliance is always cheaper than reactive
                  litigation. Start with a free scan to see where you stand.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#scanner"
                    className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition-colors"
                  >
                    Free Accessibility Scan →
                  </Link>
                  <Link
                    href="/tools/free-accessibility-checker"
                    className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    Learn About Our Scanner
                  </Link>
                </div>
              </div>

              {/* Key Resources */}
              <h2 className="text-2xl font-bold text-white mt-12">Key Resources</h2>
              <div className="not-prose space-y-2 mt-4 mb-8">
                {[
                  { label: "Seyfarth Shaw ADA Title III News & Insights", url: "https://www.seyfarth.com/services/practices/ada-title-iii.html" },
                  { label: "ADA.gov — Americans with Disabilities Act", url: "https://www.ada.gov/" },
                  { label: "NFIB Small Business Legal Center", url: "https://www.nfib.com/legal/" },
                  { label: "IRS Form 8826 — Disabled Access Credit", url: "https://www.irs.gov/forms-pubs/about-form-8826" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="not-prose mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  Related reading: {" "}
                  <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-sky-400 hover:text-sky-300">
                    Lawsuit Statistics 2026
                  </Link>{" "}
                  · {" "}
                  <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-sky-400 hover:text-sky-300">
                    ADA Title II Deadline
                  </Link>{" "}
                  · {" "}
                  <Link href="/state/california" className="text-sky-400 hover:text-sky-300">
                    California Accessibility Laws
                  </Link>{" "}
                  · {" "}
                  <Link href="/state/florida" className="text-sky-400 hover:text-sky-300">
                    Florida Accessibility Laws
                  </Link>{" "}
                  · {" "}
                  <Link href="/tools/free-accessibility-checker" className="text-sky-400 hover:text-sky-300">
                    Free Accessibility Checker
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
