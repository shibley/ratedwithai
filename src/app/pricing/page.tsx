"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What counts as a scan?",
    answer:
      "A scan is a full accessibility audit of a single URL. Each page you scan counts as one scan. If you re-scan the same page, it counts as an additional scan.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the end of your billing cycle.",
  },
  {
    question: "What accessibility standards do you check?",
    answer:
      "We run axe-core checks covering WCAG 2.1 AA criteria, plus additional best practices. This includes contrast, ARIA labels, keyboard navigation, heading structure, and more.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes! Annual billing saves you 20%. Contact us at hello@ratedwithai.com to set up annual billing.",
  },
  {
    question: "What's included in white-label reports?",
    answer:
      "Business plan reports can include your company logo, custom colors, and your domain on the report URL. Perfect for agencies delivering reports to clients.",
  },
  {
    question: "How does monitoring work?",
    answer:
      "Set up automated scans on a daily or weekly schedule. We'll track your score over time and alert you via email or Slack when accessibility regressions are detected.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. No long-term contracts. Cancel anytime from your dashboard and you'll retain access until the end of your billing period.",
  },
];

function PricingContent() {
  const searchParams = useSearchParams();
  const checkoutStatus = useMemo(() => searchParams.get("checkout"), [searchParams]);
  const [proEmail, setProEmail] = useState("");
  const [proLoading, setProLoading] = useState(false);
  const [proError, setProError] = useState<string | null>(null);

  const handleProCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProError(null);
    setProLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "pro", email: proEmail }),
      });

      const payload = await response.json();

      if (!response.ok || !payload?.url) {
        throw new Error(payload?.error || "Unable to start checkout.");
      }

      window.location.href = payload.url as string;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Checkout failed.";
      setProError(message);
    } finally {
      setProLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/40 via-blue-500/20 to-purple-500/40 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

        <Header />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-12">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Simple, transparent pricing
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Plans that scale with you
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Start free, upgrade when you need more scans or advanced features.
              All plans include our full WCAG 2.1 AA audit engine.
            </p>
          </div>

          {checkoutStatus === "success" && (
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100">
              Welcome to Pro! Enter your email when scanning to unlock 100 scans/month.
            </div>
          )}
          {checkoutStatus === "cancelled" && (
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-4 text-sm text-slate-300">
              Checkout was cancelled. You can restart anytime when you are ready.
            </div>
          )}
        </section>

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-sm text-slate-400">Free</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-sm text-slate-400">forever</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Perfect for trying out RatedWithAI
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "5 scans per month",
                  "Basic accessibility report",
                  "WCAG 2.1 AA coverage",
                  "Shareable report link",
                  "Email support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/"
                className="mt-8 block w-full rounded-xl border border-slate-700/60 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Start Free
              </Link>
            </div>

            <div className="relative rounded-3xl border border-sky-400/60 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8 shadow-xl shadow-sky-500/10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-slate-950">
                Most Popular
              </span>
              <p className="text-sm text-slate-400">Pro</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                For teams serious about accessibility
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "100 scans per month",
                  "Detailed reports with remediation guides",
                  "Monitoring alerts (daily/weekly)",
                  "Severity trend tracking",
                  "Export to PDF & CSV",
                  "Priority email support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleProCheckout} className="mt-8 space-y-3">
                <input
                  type="email"
                  required
                  value={proEmail}
                  onChange={(event) => setProEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={proLoading}
                  className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {proLoading ? "Redirecting..." : "Subscribe"}
                </button>
                {proError && (
                  <p className="text-xs text-rose-300">{proError}</p>
                )}
              </form>
            </div>

            <div className="relative rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-sm text-slate-400">Business</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                For agencies and enterprise teams
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Unlimited scans",
                  "API access for CI/CD integration",
                  "White-label reports (your branding)",
                  "Multi-user team workspace",
                  "Custom monitoring schedules",
                  "Priority support + onboarding call",
                  "SSO & advanced security",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:shibley@saasintegrate.com?subject=Business Plan Inquiry"
                className="mt-8 block w-full rounded-xl border border-slate-700/60 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            All plans include 14-day money-back guarantee. No questions asked.
          </p>
        </section>
      </div>

      <section className="border-t border-slate-800/70 bg-slate-900/40">
        <div className="mx-auto w-full max-w-4xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Common questions
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-300">
              Still have questions?{" "}
              <a
                href="mailto:hello@ratedwithai.com"
                className="text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Ready to make your site accessible?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Join thousands of teams using RatedWithAI to catch accessibility
            issues before they reach production.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Start free scan
            </Link>
            <a
              href="mailto:hello@ratedwithai.com?subject=Demo Request"
              className="rounded-xl border border-slate-700/60 px-8 py-3 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              Request a demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-slate-100" />}>
      <PricingContent />
    </Suspense>
  );
}
