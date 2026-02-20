"use client";

import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-purple-500 text-slate-900 font-bold">
          R
        </span>
        <div>
          <p className="text-lg font-semibold tracking-tight">RatedWithAI</p>
          <p className="text-xs text-slate-400">Accessibility scanner</p>
        </div>
      </Link>
      <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <Link className="transition hover:text-white" href="/#how-it-works">
          How it works
        </Link>
        <Link className="transition hover:text-white" href="/pricing">
          Pricing
        </Link>
        <Link className="transition hover:text-white" href="/#why">
          Why RatedWithAI
        </Link>
      </nav>
      <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
}
