import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold text-sm">
                R
              </span>
              <p className="text-lg font-semibold text-white">RatedWithAI</p>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Free accessibility scanner powered by axe-core. Get your WCAG score in seconds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <Link className="transition hover:text-white" href="/scan">Free Scanner</Link>
              <Link className="transition hover:text-white" href="/pricing">Pricing</Link>
              <Link className="transition hover:text-white" href="/compare/ratedwithai-vs-accessibe">vs accessiBe</Link>
              <Link className="transition hover:text-white" href="/compare/ratedwithai-vs-wave">vs WAVE</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <Link className="transition hover:text-white" href="/blog/ada-compliance-checklist-2026">ADA Compliance Checklist</Link>
              <Link className="transition hover:text-white" href="/blog/top-10-wcag-failures">Top WCAG Failures</Link>
              <Link className="transition hover:text-white" href="/blog/european-accessibility-act-2025">European Accessibility Act</Link>
              <Link className="transition hover:text-white" href="/wcag/1-1-1-non-text-content">WCAG Criteria Guide</Link>
              <Link className="transition hover:text-white" href="/industry">Industry Guides</Link>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Compliance</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <Link className="transition hover:text-white" href="/state/california">California ADA Lawsuits</Link>
              <Link className="transition hover:text-white" href="/state/new-york">New York ADA Lawsuits</Link>
              <Link className="transition hover:text-white" href="/state/florida">Florida ADA Lawsuits</Link>
              <Link className="transition hover:text-white" href="/industry/healthcare">Healthcare Compliance</Link>
              <Link className="transition hover:text-white" href="/industry/ecommerce">E-Commerce Compliance</Link>
              <Link className="transition hover:text-white" href="/check/amazon">Brand Checks</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} RatedWithAI. Built by <a href="https://saasintegrate.com" className="hover:text-slate-300">Bity LLC</a>.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <a className="transition hover:text-slate-300" href="https://apistatuscheck.com">API Status Check</a>
            <a className="transition hover:text-slate-300" href="https://aisotools.com">AISO Tools</a>
            <a className="transition hover:text-slate-300" href="https://usersrated.com">UsersRated</a>
            <a className="transition hover:text-slate-300" href="https://4dayjob.com">4DayJob</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
