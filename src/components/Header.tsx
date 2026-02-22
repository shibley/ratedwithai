"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const ClerkComponents = hasClerk
  ? {
      SignInButton: dynamic(() => import("@clerk/nextjs").then((m) => m.SignInButton)),
      SignUpButton: dynamic(() => import("@clerk/nextjs").then((m) => m.SignUpButton)),
      SignedIn: dynamic(() => import("@clerk/nextjs").then((m) => m.SignedIn)),
      SignedOut: dynamic(() => import("@clerk/nextjs").then((m) => m.SignedOut)),
      UserButton: dynamic(() => import("@clerk/nextjs").then((m) => m.UserButton)),
    }
  : null;

function AuthButtons() {
  if (!hasClerk || !ClerkComponents) {
    return (
      <Link
        href="/scan"
        className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
      >
        Free Scan
      </Link>
    );
  }

  const { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } = ClerkComponents;

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white">
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="hidden rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] sm:block">
            Get started
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Link
          href="/dashboard"
          className="rounded-full border border-slate-700/60 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white"
        >
          Dashboard
        </Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-9 w-9",
            },
          }}
        />
      </SignedIn>
    </>
  );
}

function DropdownMenu({ label, items, isOpen, onToggle }: {
  label: string;
  items: { href: string; label: string; desc?: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm text-slate-300 transition hover:text-white"
      >
        {label}
        <svg className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-xl z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              <span className="font-medium">{item.label}</span>
              {item.desc && <span className="block text-xs text-slate-500 mt-0.5">{item.desc}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const resourcesItems = [
    { href: "/blog/ada-compliance-checklist-2026", label: "ADA Compliance Checklist", desc: "Step-by-step compliance guide" },
    { href: "/blog/how-to-check-website-ada-compliant", label: "How to Check ADA Compliance", desc: "Beginner-friendly guide" },
    { href: "/blog/top-10-wcag-failures", label: "Top 10 WCAG Failures", desc: "Most common issues & fixes" },
    { href: "/blog/european-accessibility-act-2025", label: "European Accessibility Act", desc: "What US companies need to know" },
    { href: "/blog/wcag-2-1-vs-2-2", label: "WCAG 2.1 vs 2.2", desc: "What changed and why" },
  ];

  const complianceItems = [
    { href: "/industry", label: "By Industry", desc: "33 industry-specific guides" },
    { href: "/state", label: "By State", desc: "ADA lawsuits in all 50 states" },
    { href: "/wcag", label: "WCAG Criteria", desc: "All Level A & AA criteria" },
    { href: "/check", label: "Brand Checks", desc: "75+ accessibility audits" },
    { href: "/blog", label: "Blog", desc: "Guides, tutorials & resources" },
  ];

  return (
    <>
      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold text-lg">
            R
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
            <p className="text-xs text-slate-400">Accessibility scanner</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          <Link className="transition hover:text-white" href="/scan">
            Scanner
          </Link>
          <DropdownMenu
            label="Resources"
            items={resourcesItems}
            isOpen={openMenu === "resources"}
            onToggle={() => toggleMenu("resources")}
          />
          <DropdownMenu
            label="Compliance"
            items={complianceItems}
            isOpen={openMenu === "compliance"}
            onToggle={() => toggleMenu("compliance")}
          />
          <Link className="transition hover:text-white" href="/pricing">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <AuthButtons />
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-lg border border-slate-800 p-2 text-slate-400 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur px-6 py-4 relative z-20">
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/scan" className="py-2 text-slate-200 hover:text-white" onClick={() => setMobileOpen(false)}>Scanner</Link>
            <div className="border-t border-slate-800 pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Resources</p>
              {resourcesItems.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1.5 text-slate-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-slate-800 pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Compliance</p>
              {complianceItems.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1.5 text-slate-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-slate-800 pt-2">
              <Link href="/pricing" className="py-2 text-slate-200 hover:text-white" onClick={() => setMobileOpen(false)}>Pricing</Link>
            </div>
          </nav>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {openMenu && (
        <div className="fixed inset-0 z-10" onClick={() => setOpenMenu(null)} />
      )}
    </>
  );
}
