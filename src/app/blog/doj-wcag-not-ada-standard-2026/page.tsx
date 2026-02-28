/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "DOJ Says WCAG Is Not the ADA Standard: What This Means for Your Business in 2026 | RatedWithAI",
  description:
    "The DOJ declared it does not endorse WCAG as the ADA accessibility standard. Learn what this unprecedented footnote means for web accessibility compliance, why WCAG is still your best framework, and how to protect your business.",
  openGraph: {
    title: "DOJ Says WCAG Is Not the ADA Standard: What This Means for Your Business",
    description:
      "A DOJ footnote in the Fashion Nova case states the US 'does not endorse WCAG' as the ADA standard. Here's what businesses need to know and why WCAG compliance still matters.",
    type: "article",
    publishedTime: "2026-02-28T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "doj wcag standard",
    "wcag not ada standard",
    "ada website compliance standard 2026",
    "doj does not endorse wcag",
    "web content accessibility guidelines ada",
    "ada title iii wcag",
    "wcag 2.1 ada requirement",
    "ada website accessibility standard",
    "doj fashion nova wcag",
    "wcag compliance required",
    "ada accessibility standard 2026",
    "what standard for ada compliance",
    "wcag ada relationship",
    "doj accessibility enforcement 2026",
    "ada website compliance without wcag",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/doj-wcag-not-ada-standard-2026",
  },
};

export default function DOJWCAGNotADAStandardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "DOJ Says WCAG Is Not the ADA Standard: What This Means for Your Business in 2026",
    description:
      "Analysis of the DOJ's unprecedented footnote declaring WCAG is not the endorsed ADA standard. Covers the Fashion Nova case context, 15 years of contradictory DOJ settlements, what this means for businesses, and why WCAG remains the best compliance framework.",
    datePublished: "2026-02-28T00:00:00.000Z",
    dateModified: "2026-02-28T00:00:00.000Z",
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
        name: "Did the DOJ say WCAG is not required for ADA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In a February 2026 Statement of Interest in Alcazar v. Fashion Nova, the DOJ stated in a footnote that 'the United States does not endorse WCAG as the appropriate or necessary standard for the provision of auxiliary aids and services under Title III of the ADA.' However, this does not mean WCAG is irrelevant — it means the DOJ is taking the position that WCAG is not the only path to ADA compliance. The ADA itself does not specify a technical standard, and courts have historically used WCAG as a benchmark.",
        },
      },
      {
        "@type": "Question",
        name: "Is WCAG still the best standard for website accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Despite the DOJ's footnote, WCAG 2.1 Level AA remains the most widely accepted, well-documented, and court-recognized framework for web accessibility. Over 15 years of DOJ settlement agreements have required WCAG compliance. The ADA Title II rule for state and local government websites explicitly adopted WCAG 2.1 AA. There is currently no alternative technical standard with comparable breadth, testing methodology, or legal precedent.",
        },
      },
      {
        "@type": "Question",
        name: "Why did the DOJ oppose the Fashion Nova settlement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The DOJ opposed the proposed $5.15 million class action settlement in Alcazar v. Fashion Nova because: (1) the injunctive relief lacked concrete steps to ensure actual accessibility, (2) there was no monitoring or enforcement mechanism — audits were optional, (3) attorneys' fees ($2.52M) exceeded what the class members received ($2.43M), and (4) the settlement administrator's own website was not accessible to screen readers.",
        },
      },
      {
        "@type": "Question",
        name: "Does this DOJ position contradict previous DOJ settlements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Legal experts at Seyfarth Shaw noted that the DOJ's position 'seems inconsistent with DOJ's many settlement agreements which adopt WCAG 2.0 AA or 2.1 AA as the accessibility standard.' For over 15 years, the DOJ has required WCAG compliance in settlement agreements with companies like Uber, Rite Aid, H&R Block, Peapod, and many others. The new footnote may reflect a shift in enforcement philosophy under the current administration rather than settled legal doctrine.",
        },
      },
      {
        "@type": "Question",
        name: "What should my business do about ADA website accessibility now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Continue using WCAG 2.1 Level AA as your primary compliance framework. The DOJ's footnote creates uncertainty but does not establish a new standard or invalidate WCAG. Your strategy should include: (1) following WCAG 2.1 AA guidelines as the most defensible technical standard, (2) implementing ongoing monitoring to catch issues proactively, (3) documenting your accessibility efforts and remediation timeline, (4) focusing on actual usability for people with disabilities rather than checkbox compliance, and (5) staying informed about evolving legal standards.",
        },
      },
      {
        "@type": "Question",
        name: "Does the ADA specify a website accessibility standard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The ADA was enacted in 1990 — before the modern web existed — and does not specify any technical standard for website accessibility. Title III requires that public accommodations provide 'full and equal enjoyment' of goods and services, but leaves the specific technical requirements undefined for websites. The DOJ's 2024 Title II rule adopted WCAG 2.1 AA for state and local government websites, but no equivalent rule exists for private businesses under Title III. This ambiguity is exactly why WCAG has served as the de facto standard in litigation.",
        },
      },
      {
        "@type": "Question",
        name: "Could a different standard replace WCAG for ADA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In theory, yes — but practically, no viable alternative exists today. WCAG is maintained by the World Wide Web Consortium (W3C), has decades of development, is adopted internationally (EU's EN 301 549, Canada's Accessible Canada Act, Australia's DDA), and has extensive testing tools and methodologies. WCAG 3.0 is in development but years from completion. The DOJ has not proposed any alternative standard. Until a concrete replacement exists, WCAG remains the only credible framework.",
        },
      },
      {
        "@type": "Question",
        name: "How does this affect the ADA Title II rule for government websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The DOJ's footnote was specifically about Title III (private businesses). The 2024 ADA Title II rule explicitly adopted WCAG 2.1 Level AA as the standard for state and local government websites, with compliance deadlines in April 2026 and April 2027. That rule remains in effect and is legally binding, though the current administration has been less active in Title III enforcement. The distinction between Title II (government) and Title III (private) is important — different legal frameworks apply.",
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
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/30 via-orange-500/20 to-amber-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-red-500/20 via-orange-500/10 to-amber-500/20 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-400">
              BREAKING LEGAL ANALYSIS
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              DOJ Says WCAG Is Not the ADA Standard: What This Means for Your Business
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              For 15 years, every DOJ accessibility settlement required WCAG compliance. Now, in an
              unprecedented footnote buried in the Fashion Nova case, the Department of Justice declared
              it "does not endorse WCAG as the appropriate or necessary standard" for ADA compliance.
              This single sentence could reshape how businesses approach web accessibility — or it could
              mean nothing at all. Here's what you need to know.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-28">February 28, 2026</time>
              <span>·</span>
              <span>14 min read</span>
            </div>

            {/* Key callout */}
            <div className="mt-10 rounded-xl border border-red-500/30 bg-red-500/5 p-8">
              <div className="text-center">
                <div className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">The DOJ Footnote</div>
                <blockquote className="text-xl sm:text-2xl font-medium text-white italic leading-relaxed">
                  "The United States does not endorse WCAG as the appropriate or necessary standard
                  for the provision of auxiliary aids and services under Title III of the ADA."
                </blockquote>
                <div className="text-sm text-slate-400 mt-3">
                  — DOJ Statement of Interest, <em>Alcazar v. Fashion Nova Inc.</em>, February 2026
                </div>
              </div>
            </div>

            {/* TOC */}
            <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="font-bold text-white text-lg mb-4">Table of Contents</h2>
              <nav className="space-y-2 text-sm">
                {[
                  { label: "What the DOJ Actually Said", id: "what-doj-said" },
                  { label: "The Fashion Nova Case: Context Matters", id: "fashion-nova-context" },
                  { label: "15 Years of DOJ Settlements That Required WCAG", id: "doj-wcag-history" },
                  { label: "Why This Footnote Is Unprecedented", id: "unprecedented" },
                  { label: "The ADA's Technical Standard Problem", id: "technical-standard-gap" },
                  { label: "What This Means for Your Business", id: "business-impact" },
                  { label: "Why WCAG Is Still Your Best Framework", id: "wcag-still-best" },
                  { label: "What Could Replace WCAG?", id: "alternatives" },
                  { label: "The Real Compliance Standard: Usability", id: "usability-standard" },
                  { label: "How to Protect Your Business Now", id: "protect-business" },
                  { label: "Looking Ahead: What to Watch For", id: "looking-ahead" },
                  { label: "Frequently Asked Questions", id: "faq" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>→</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Section 1: What the DOJ Actually Said */}
            <div className="mt-14">
              <h2 id="what-doj-said" className="text-3xl font-bold text-white mb-6">
                What the DOJ Actually Said
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                On February 2, 2026, the Department of Justice filed a{" "}
                <a
                  href="https://www.justice.gov/crt/case-document/statement-interest-alcazar-v-fashion-nova"
                  className="text-red-400 hover:text-red-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Statement of Interest
                </a>{" "}
                in <em>Alcazar v. Fashion Nova Inc.</em>, a federal class action in the Northern District
                of California. The DOJ opposed the proposed settlement — but it was a footnote that sent
                shockwaves through the accessibility community.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Buried within the filing, the DOJ stated that "the United States does not endorse WCAG as
                the appropriate or necessary standard for the provision of auxiliary aids and services under
                Title III of the ADA." The DOJ clarified it was merely applying WCAG because the plaintiff
                had chosen it as the benchmark in the proposed settlement.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                This matters because WCAG — the Web Content Accessibility Guidelines — has been the de facto
                standard for web accessibility compliance in virtually every ADA lawsuit, DOJ settlement, and
                consent decree for over 15 years. No government agency, court, or legal authority has ever
                formally established an alternative.
              </p>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 mb-4">
                <p className="text-amber-200 font-semibold mb-2">⚠️ Important Context</p>
                <p className="text-slate-300">
                  This was a footnote in one case — not a new regulation, executive order, or formal policy
                  change. It carries legal significance as a statement of the government's position, but it
                  does not create new law or invalidate existing WCAG-based settlements and consent decrees.
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                As noted by legal experts at{" "}
                <a
                  href="https://www.adatitleiii.com/2026/02/doj-throws-wrench-into-proposed-ada-website-accessibility-class-settlement/"
                  className="text-red-400 hover:text-red-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seyfarth Shaw
                </a>
                , this position "seems inconsistent with DOJ's many settlement agreements which adopt
                WCAG 2.0 AA or 2.1 AA as the accessibility standard."
              </p>
            </div>

            {/* Section 2: Fashion Nova Context */}
            <div className="mt-14">
              <h2 id="fashion-nova-context" className="text-3xl font-bold text-white mb-6">
                The Fashion Nova Case: Context Matters
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                To understand the DOJ's footnote, you need to understand the case it appeared in.{" "}
                <em>Alcazar v. Fashion Nova</em> alleged that the California-based online retailer's website
                was inaccessible to blind users, violating both ADA Title III and California's Unruh Civil
                Rights Act.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The proposed settlement included three components that concerned the DOJ:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <div className="text-2xl font-bold text-red-400 mb-2">$2.43M</div>
                  <div className="text-sm text-slate-300">To class members (blind California residents)</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <div className="text-2xl font-bold text-orange-400 mb-2">$2.52M</div>
                  <div className="text-sm text-slate-300">To attorneys' fees and costs</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <div className="text-2xl font-bold text-amber-400 mb-2">Optional</div>
                  <div className="text-sm text-slate-300">Accessibility audit — not required</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                The math tells the story: attorneys would receive <strong>more money than the people they
                claimed to represent</strong>. The injunctive relief required Fashion Nova to modify its
                website "as needed" to achieve "substantial conformance" with WCAG 2.1 — vague language
                with no enforcement mechanism. Accessibility audits were purely optional.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Perhaps most damning: the DOJ engaged its own digital accessibility consultant to inspect
                the settlement administrator's website — the site where blind class members would need to
                submit claims — and found it <strong>was not accessible to screen readers</strong>. The
                very mechanism created to help blind people was itself inaccessible.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The DOJ also noted that the plaintiff had filed 20 nearly identical lawsuits in 2020 and
                2021, and that Class Counsel had filed "the same exact lawsuit, on behalf of repeat plaintiffs"
                in <strong>over 500 cases between 2019 and 2023</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed">
                As Assistant Attorney General Harmeet K. Dhillon stated: "Congress intended the Department
                and Courts to be skeptical of settlements that instead enrich private counsel." The DOJ's
                opposition was clearly aimed at the settlement structure — but the WCAG footnote adds a
                different dimension entirely.
              </p>
            </div>

            {/* Section 3: 15 Years of DOJ WCAG History */}
            <div className="mt-14">
              <h2 id="doj-wcag-history" className="text-3xl font-bold text-white mb-6">
                15 Years of DOJ Settlements That Required WCAG
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The DOJ's footnote is remarkable precisely because it contradicts over a decade of the
                department's own enforcement history. Here are just some of the major settlements where
                the DOJ itself required WCAG compliance:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { year: "2014", entity: "Peapod / Ahold", detail: "Online grocery delivery — DOJ consent decree required WCAG 2.0 Level AA compliance" },
                  { year: "2014", entity: "H&R Block", detail: "Tax preparation — DOJ settlement required website and mobile app conform to WCAG 2.0 AA" },
                  { year: "2015", entity: "Carnival Cruise Lines", detail: "Travel — consent decree required WCAG 2.0 AA for website booking systems" },
                  { year: "2016", entity: "Rite Aid", detail: "Pharmacy — DOJ agreement required WCAG 2.0 AA for website and kiosk accessibility" },
                  { year: "2021", entity: "Uber Technologies", detail: "Transportation — DOJ settlement required WCAG 2.1 AA compliance for app and website" },
                  { year: "2024", entity: "ADA Title II Rule", detail: "DOJ formally adopted WCAG 2.1 AA as THE standard for all state and local government websites" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                    <div className="text-sm font-mono text-red-400 font-bold whitespace-nowrap">{item.year}</div>
                    <div>
                      <div className="text-white font-semibold">{item.entity}</div>
                      <div className="text-sm text-slate-400">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                The pattern is unmistakable: when the DOJ resolved accessibility cases, it consistently
                pointed to WCAG as the technical benchmark. The 2024 Title II rule went even further,
                explicitly codifying WCAG 2.1 Level AA as a binding legal requirement for government
                websites.
              </p>
              <p className="text-slate-300 leading-relaxed">
                So when the same department now says it "does not endorse WCAG" for Title III purposes,
                accessibility professionals and legal experts are understandably confused. Is this a genuine
                policy shift, or a narrowly tailored argument in one specific case?
              </p>
            </div>

            {/* Section 4: Why This Is Unprecedented */}
            <div className="mt-14">
              <h2 id="unprecedented" className="text-3xl font-bold text-white mb-6">
                Why This Footnote Is Unprecedented
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Three things make this footnote historically significant:
              </p>
              <div className="space-y-6 mb-4">
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                  <h3 className="text-lg font-bold text-white mb-2">1. It's the First Time the DOJ Has Explicitly Distanced Itself from WCAG</h3>
                  <p className="text-slate-300">
                    While the DOJ has never formally adopted WCAG as a Title III regulation, it has never
                    before stated that it does <em>not</em> endorse it. There's a world of difference between
                    "we haven't issued a formal rule" and "we do not endorse this standard." The latter is
                    an active rejection — and that's new.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                  <h3 className="text-lg font-bold text-white mb-2">2. It Creates a Vacuum with No Alternative</h3>
                  <p className="text-slate-300">
                    The DOJ has said WCAG isn't endorsed — but hasn't proposed what <em>is</em>. There is
                    currently no alternative technical standard for web accessibility with comparable
                    breadth, international adoption, or testing infrastructure. This leaves businesses in
                    a compliance limbo: the old standard is questioned, but nothing replaces it.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                  <h3 className="text-lg font-bold text-white mb-2">3. It Contradicts the DOJ's Own Title II Rule</h3>
                  <p className="text-slate-300">
                    In 2024, the same DOJ formally adopted WCAG 2.1 AA as the binding standard for state
                    and local government websites under ADA Title II. That rule has compliance deadlines in
                    April 2026 (large entities) and April 2027 (small entities). The apparent contradiction
                    between the Title II rule and this Title III footnote adds to the confusion.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: The ADA's Technical Standard Problem */}
            <div className="mt-14">
              <h2 id="technical-standard-gap" className="text-3xl font-bold text-white mb-6">
                The ADA's Technical Standard Problem
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                To understand why this matters, you need to understand a fundamental gap in the ADA itself.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Americans with Disabilities Act was signed into law in 1990 — five years before
                JavaScript, seven years before Google, and nine years before WiFi. The law requires
                "full and equal enjoyment" of goods and services offered by places of public accommodation,
                but it does not define what that means for a website.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Compare this to the physical world: the ADA Accessibility Guidelines (ADAAG) specify exactly
                how wide a doorway must be (32 inches minimum), how steep a ramp can be (1:12 ratio), and
                where grab bars must be placed. For websites? Nothing. The law is silent.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                This gap has been filled by WCAG through practical necessity. Courts needed a standard to
                evaluate accessibility claims. The DOJ needed a benchmark for settlement terms. Businesses
                needed something concrete to build toward. WCAG — developed by the W3C with input from
                disability advocates, technologists, and government agencies worldwide — became that standard
                by default.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                For Section 508 — the law governing federal government technology — this gap was formally
                closed in 2017 when the{" "}
                <Link href="/blog/section-508-compliance-guide" className="text-red-400 hover:text-red-300 underline">
                  Access Board adopted WCAG 2.0 AA
                </Link>{" "}
                as the binding technical standard. For ADA Title II, the 2024 rule adopted WCAG 2.1 AA. But
                for Title III — which covers private businesses, and where the overwhelming majority of
                accessibility lawsuits are filed — no formal standard has ever been adopted.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The DOJ's footnote highlights this gap rather than closing it. It essentially says: "We
                acknowledge there's no formal standard for private websites, and we're not going to create
                one by endorsing WCAG." The problem is that 8,667 federal{" "}
                <Link href="/blog/website-accessibility-lawsuit-statistics-2026" className="text-red-400 hover:text-red-300 underline">
                  ADA lawsuits were filed in 2025
                </Link>{" "}
                — and every one of them needs some technical framework to evaluate claims.
              </p>
            </div>

            {/* Section 6: Business Impact */}
            <div className="mt-14">
              <h2 id="business-impact" className="text-3xl font-bold text-white mb-6">
                What This Means for Your Business
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Let's be direct about the practical implications:
              </p>
              <div className="space-y-4 mb-6">
                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                  <h3 className="text-lg font-bold text-green-400 mb-2">✅ What Hasn't Changed</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2"><span className="text-green-400">•</span>Your legal obligation under the ADA to provide accessible websites (courts have consistently ruled websites are "places of public accommodation")</li>
                    <li className="flex gap-2"><span className="text-green-400">•</span>The effectiveness of WCAG 2.1 AA as a technical framework for achieving actual accessibility</li>
                    <li className="flex gap-2"><span className="text-green-400">•</span>The risk of lawsuits — 8,667 filed in 2025, with{" "}
                      <Link href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough" className="text-red-400 hover:text-red-300 underline">
                        ~46% of defendants facing repeat litigation
                      </Link></li>
                    <li className="flex gap-2"><span className="text-green-400">•</span>Existing DOJ consent decrees and settlement agreements requiring WCAG compliance</li>
                    <li className="flex gap-2"><span className="text-green-400">•</span>The Title II rule requiring WCAG 2.1 AA for government websites</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                  <h3 className="text-lg font-bold text-red-400 mb-2">⚠️ What Has Changed</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2"><span className="text-red-400">•</span>Defendants may now argue that WCAG is not the definitive standard, citing the DOJ's own position</li>
                    <li className="flex gap-2"><span className="text-red-400">•</span>The DOJ is less likely to intervene in Title III cases to enforce WCAG compliance under the current administration</li>
                    <li className="flex gap-2"><span className="text-red-400">•</span>Class action settlement structures may face greater DOJ scrutiny, potentially driving more cases to individual resolution</li>
                    <li className="flex gap-2"><span className="text-red-400">•</span>The compliance standard debate could become a litigation strategy — adding cost and complexity to every case</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
                <p className="text-amber-200 font-semibold mb-2">The Bottom Line</p>
                <p className="text-slate-300">
                  The DOJ's footnote does not give you permission to ignore web accessibility. It does not
                  reduce your legal exposure. If anything, it increases uncertainty — which means more
                  litigation, not less. Plaintiffs' attorneys will continue filing lawsuits, courts will
                  continue looking to WCAG as the benchmark, and businesses that aren't accessible will
                  continue getting sued.
                </p>
              </div>
            </div>

            {/* Section 7: Why WCAG Is Still Your Best Framework */}
            <div className="mt-14">
              <h2 id="wcag-still-best" className="text-3xl font-bold text-white mb-6">
                Why WCAG Is Still Your Best Framework
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Despite the DOJ's position, WCAG remains the most defensible, practical, and well-supported
                standard for web accessibility. Here's why:
              </p>
              <div className="space-y-4 mb-4">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-red-400 mt-1">1</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Legal Precedent</h3>
                    <p className="text-slate-400 mt-1">
                      Hundreds of court decisions have used WCAG as the benchmark for evaluating accessibility
                      claims. One DOJ footnote doesn't erase a decade of case law. Judges who've been applying
                      WCAG for years aren't going to suddenly abandon it — especially without an alternative.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-red-400 mt-1">2</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">International Adoption</h3>
                    <p className="text-slate-400 mt-1">
                      WCAG is the foundation for accessibility laws worldwide: the{" "}
                      <Link href="/blog/european-accessibility-act-eaa-compliance-us-businesses" className="text-red-400 hover:text-red-300 underline">
                        European Accessibility Act
                      </Link>
                      , Canada's Accessible Canada Act, Australia's Disability Discrimination Act, and
                      dozens more. If you operate internationally, WCAG isn't optional — it's mandatory.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-red-400 mt-1">3</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Testing Infrastructure</h3>
                    <p className="text-slate-400 mt-1">
                      WCAG has mature testing tools (axe-core, WAVE, Pa11y, Lighthouse), established testing
                      methodologies, certified professionals, and documented success criteria. No other standard
                      has this ecosystem. Abandoning WCAG means rebuilding this infrastructure from scratch.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-red-400 mt-1">4</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Federal Government Requirement</h3>
                    <p className="text-slate-400 mt-1">
                      Section 508 requires WCAG 2.0 AA for all federal government technology. ADA Title II
                      requires WCAG 2.1 AA for state and local government websites. If the government itself
                      uses WCAG, it's hard to argue that WCAG isn't a credible standard for the private sector.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl font-bold text-red-400 mt-1">5</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Actual Effectiveness</h3>
                    <p className="text-slate-400 mt-1">
                      This is the most important reason: WCAG works. Following WCAG guidelines produces
                      websites that are genuinely usable by people with disabilities. Screen readers work.
                      Keyboard navigation functions. Color contrast is readable. The standard exists because
                      people with disabilities helped create it — and their input makes it effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: What Could Replace WCAG */}
            <div className="mt-14">
              <h2 id="alternatives" className="text-3xl font-bold text-white mb-6">
                What Could Replace WCAG?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If not WCAG, what? The honest answer is: nothing viable exists today.
              </p>
              <div className="space-y-4 mb-6">
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">WCAG 3.0 (W3C Accessibility Guidelines)</h3>
                  <p className="text-slate-400 text-sm">
                    In early development. Proposes a scoring-based model instead of pass/fail, with bronze,
                    silver, and gold conformance levels. Still years from completion — current W3C working
                    drafts estimate a finalization timeline no earlier than 2028-2030.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">EN 301 549 (European Standard)</h3>
                  <p className="text-slate-400 text-sm">
                    Europe's harmonized standard for ICT accessibility, used by the EAA and EU public
                    procurement. It incorporates WCAG 2.1 AA as its web component — so it's not really
                    a WCAG alternative but a WCAG-plus standard with additional requirements for non-web
                    ICT products.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">User-Centered Testing</h3>
                  <p className="text-slate-400 text-sm">
                    Some advocates argue for outcome-based testing — judging accessibility by whether actual
                    users with disabilities can accomplish tasks, rather than checking technical criteria. This
                    has merit but is subjective, expensive, and not scalable for the millions of websites that
                    need evaluation. WCAG provides the testable criteria that make compliance measurable.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">AI-Powered Adaptive Accessibility</h3>
                  <p className="text-slate-400 text-sm">
                    WebAIM recently proposed the concept of "Intelligent Digital Accessibility Assistance" —
                    AI systems that adapt content to individual users' needs in real-time. This is a compelling
                    vision of the future, but it's conceptual and years from practical implementation. It also
                    doesn't address the legal need for a testable compliance standard.
                  </p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The reality is stark: WCAG is the only comprehensive, testable, internationally recognized
                web accessibility standard that exists today. The DOJ can decline to endorse it, but until
                a concrete alternative materializes, businesses have no better option — and courts will
                continue to reference it.
              </p>
            </div>

            {/* Section 9: Usability Standard */}
            <div className="mt-14">
              <h2 id="usability-standard" className="text-3xl font-bold text-white mb-6">
                The Real Compliance Standard: Usability
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Here's what the DOJ's footnote may actually be pointing toward — even if unintentionally.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The ADA doesn't say "follow WCAG." It says provide "full and equal enjoyment" of goods and
                services. The real standard is functional: <strong>can people with disabilities use your
                website to do what everyone else does?</strong>
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                WCAG is a means to that end — an excellent means, but not the end itself. A website can
                technically pass every WCAG criterion and still be confusing or unusable. Conversely, a
                thoughtfully designed website might violate some WCAG guidelines but be perfectly usable.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The most defensible accessibility program combines both approaches:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>WCAG compliance</strong> as your technical baseline — it ensures you've addressed the known, testable barriers that affect the most people</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>User testing</strong> with people who use assistive technology — it catches the usability issues that automated tools miss</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>Ongoing monitoring</strong> to catch regressions — because accessibility isn't a one-time project, it's a continuous process</span>
                </li>
              </ul>
              <p className="text-slate-300 leading-relaxed">
                Think of WCAG as the building code and usability testing as the home inspection. You want both.
                The DOJ's footnote doesn't change that equation — it just highlights that the building code
                alone isn't sufficient.
              </p>
            </div>

            {/* Section 10: How to Protect Your Business */}
            <div className="mt-14">
              <h2 id="protect-business" className="text-3xl font-bold text-white mb-6">
                How to Protect Your Business Now
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The DOJ's footnote creates uncertainty. Here's how to turn that uncertainty into a strength:
              </p>
              <div className="space-y-4 mb-6">
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">1. Continue Targeting WCAG 2.1 Level AA</h3>
                  <p className="text-slate-400 text-sm">
                    It remains the most defensible standard. If challenged, you can demonstrate concrete
                    compliance efforts aligned with the same standard the DOJ itself uses for Title II and
                    Section 508. No judge will penalize you for following WCAG — the DOJ's footnote doesn't
                    change that calculus.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">2. Go Beyond Checkbox Compliance</h3>
                  <p className="text-slate-400 text-sm">
                    The DOJ's position arguably supports a broader view of accessibility — not just
                    technical conformance, but actual usability. Test with real assistive technology. Ensure
                    your checkout process, forms, and navigation work with screen readers. The goal isn't
                    passing a scan — it's making your website genuinely usable.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">3. Implement Continuous Monitoring</h3>
                  <p className="text-slate-400 text-sm">
                    With enforcement standards in flux, proactive monitoring is your best insurance.
                    Regular automated scans catch issues before plaintiffs do. Documented remediation
                    timelines demonstrate good faith. This is especially critical given that{" "}
                    <Link href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough" className="text-red-400 hover:text-red-300 underline">
                      nearly half of defendants face repeat lawsuits
                    </Link>.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">4. Document Everything</h3>
                  <p className="text-slate-400 text-sm">
                    In a world where the compliance standard is uncertain, documentation becomes your most
                    powerful defense. Keep records of accessibility audits, remediation efforts, policy
                    commitments, and training programs. If you can demonstrate a comprehensive, good-faith
                    accessibility program, you're in a strong position regardless of which standard applies.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                  <h3 className="text-white font-semibold mb-2">5. Don't Fall for Overlays</h3>
                  <p className="text-slate-400 text-sm">
                    If the compliance standard is uncertain, a widget that claims to solve everything with
                    one line of JavaScript is <em>more</em> suspect, not less. The{" "}
                    <Link href="/blog/ftc-accessibe-fine-overlay-failures" className="text-red-400 hover:text-red-300 underline">
                      FTC's $1 million fine against accessiBe
                    </Link>{" "}
                    for deceptive compliance claims should be warning enough. Real accessibility requires
                    real work — no shortcut has ever survived legal scrutiny.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11: Looking Ahead */}
            <div className="mt-14">
              <h2 id="looking-ahead" className="text-3xl font-bold text-white mb-6">
                Looking Ahead: What to Watch For
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The DOJ's footnote may be a one-off position in a specific case, or it may signal a broader
                shift. Here's what to monitor:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>The court's ruling in Alcazar v. Fashion Nova</strong> — the court heard arguments
                    on February 12, 2026 and a decision is pending. If the judge rejects the settlement citing
                    the DOJ's concerns, it could reshape how class action accessibility settlements are structured.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>Additional DOJ filings</strong> — if the DOJ repeats this position in other cases,
                    it signals an intentional policy shift rather than a case-specific argument.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>The Title II rule's fate</strong> — with compliance deadlines in{" "}
                    <Link href="/blog/ada-title-ii-deadline-countdown-2026" className="text-red-400 hover:text-red-300 underline">
                      April 2026
                    </Link>
                    , any modifications to the Title II rule would further clarify the administration's position on WCAG.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>State-level legislation</strong> — states like{" "}
                    <Link href="/blog/california-sb-84-ada-right-to-cure-2026" className="text-red-400 hover:text-red-300 underline">
                      California (SB 84)
                    </Link>
                    , Utah, and Missouri are passing their own accessibility legislation. These state laws
                    may establish their own technical standards, creating a patchwork that could ultimately
                    force federal clarity.</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold">→</span>
                  <span><strong>WCAG 3.0 development</strong> — the W3C's next-generation standard could
                    address some of WCAG 2.x's limitations. If WCAG 3.0 gains traction, it could become the
                    basis for a future DOJ position or formal rulemaking.</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-14 rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Don't Wait for Clarity — Monitor Your Accessibility Now
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                While legal standards evolve, accessibility barriers remain real — and so do lawsuits.
                RatedWithAI provides continuous AI-powered monitoring that catches issues before plaintiffs
                do, regardless of which standard courts apply.
              </p>
              <Link
                href="/#scanner"
                className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-white font-semibold hover:bg-red-600 transition-colors"
              >
                Scan Your Website Free →
              </Link>
            </div>

            {/* FAQ */}
            <div className="mt-14">
              <h2 id="faq" className="text-3xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Did the DOJ say WCAG is not required for ADA compliance?",
                    a: "In a footnote within a February 2026 Statement of Interest, the DOJ stated it 'does not endorse WCAG as the appropriate or necessary standard' for ADA Title III. However, this doesn't mean WCAG is irrelevant — it means the DOJ is not formally adopting WCAG as THE compliance standard for private businesses. Courts continue to use WCAG as their primary benchmark, and no alternative standard exists."
                  },
                  {
                    q: "Is WCAG still the best standard for website accessibility?",
                    a: "Yes. WCAG 2.1 Level AA remains the most widely accepted, well-documented, and court-recognized framework for web accessibility. It's required by the DOJ's own Title II rule for government websites, by Section 508 for federal technology, and by accessibility laws in Europe, Canada, Australia, and dozens of other countries. No viable alternative with comparable breadth or testing infrastructure exists."
                  },
                  {
                    q: "Why did the DOJ oppose the Fashion Nova settlement?",
                    a: "The DOJ opposed the proposed $5.15 million settlement because: (1) injunctive relief lacked concrete steps to ensure accessibility, (2) monitoring was optional with no enforcement mechanism, (3) attorneys' fees ($2.52M) exceeded what class members received ($2.43M), and (4) the settlement administrator's own website was inaccessible to screen readers. The DOJ's core concern was that the settlement enriched lawyers without actually helping blind users."
                  },
                  {
                    q: "Does this DOJ position contradict previous DOJ settlements?",
                    a: "Yes. Legal experts at Seyfarth Shaw noted the position 'seems inconsistent with DOJ's many settlement agreements which adopt WCAG 2.0 AA or 2.1 AA.' For over 15 years, the DOJ required WCAG in settlements with Uber, Rite Aid, H&R Block, Peapod, and others. The footnote may reflect a shift in enforcement philosophy under the current administration."
                  },
                  {
                    q: "What should my business do about ADA website accessibility now?",
                    a: "Continue using WCAG 2.1 Level AA as your compliance framework — it remains the most legally defensible approach. Additionally: implement ongoing monitoring, document all accessibility efforts, focus on actual usability beyond checkbox compliance, and avoid accessibility overlay widgets that make unsubstantiated compliance claims."
                  },
                  {
                    q: "Does the ADA specify a website accessibility standard?",
                    a: "No. The ADA was enacted in 1990 before the modern web existed and does not specify a technical standard for websites. Title III requires 'full and equal enjoyment' of goods and services but leaves the technical requirements undefined. This ambiguity is precisely why WCAG has served as the de facto standard — courts needed something testable and concrete to evaluate accessibility claims."
                  },
                  {
                    q: "Could a different standard replace WCAG for ADA compliance?",
                    a: "In theory, yes — but practically, no viable alternative exists. WCAG 3.0 is in early development (estimated 2028-2030). EN 301 549 incorporates WCAG rather than replacing it. User-centered testing has merit but isn't scalable. The DOJ has not proposed any alternative. Until a concrete replacement materializes, WCAG is the only credible framework."
                  },
                  {
                    q: "How does this affect the ADA Title II rule for government websites?",
                    a: "The DOJ's footnote was about Title III (private businesses). The 2024 Title II rule explicitly adopted WCAG 2.1 AA for state and local government websites, with compliance deadlines in April 2026 and April 2027. That rule remains in effect and legally binding. The distinction matters — Title II and Title III have different legal frameworks."
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                    <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div className="mt-14 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="font-bold text-white text-lg mb-4">Related Reading</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/blog/fashion-nova-doj-settlement-rejected-2026", label: "Fashion Nova: Why the DOJ Opposed the Settlement" },
                  { href: "/blog/ada-compliance-checklist-2026", label: "ADA Compliance Checklist 2026" },
                  { href: "/blog/wcag-22-complete-guide", label: "WCAG 2.1 vs 2.2: Complete Guide" },
                  { href: "/blog/section-508-compliance-guide", label: "Section 508 Compliance Guide" },
                  { href: "/blog/ada-title-ii-deadline-countdown-2026", label: "ADA Title II Deadline Countdown" },
                  { href: "/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough", label: "Repeat ADA Lawsuits: Why One Settlement Isn't Enough" },
                  { href: "/blog/ftc-accessibe-fine-overlay-failures", label: "FTC Fined accessiBe $1M: Why Overlays Failed" },
                  { href: "/blog/european-accessibility-act-eaa-compliance-us-businesses", label: "European Accessibility Act: What US Businesses Need to Know" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
