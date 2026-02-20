import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">RatedWithAI</p>
          <p className="mt-2 text-sm text-slate-400">
            Built for teams that ship accessible experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a className="transition hover:text-white" href="https://apistatuscheck.com">
            API Status Check
          </a>
          <a className="transition hover:text-white" href="https://aisotools.com">
            AISO Tools
          </a>
          <a className="transition hover:text-white" href="https://usersrated.com">
            UsersRated
          </a>
          <a className="transition hover:text-white" href="https://4dayjob.com">
            4DayJob
          </a>
          <Link className="transition hover:text-white" href="/">
            Free scanner
          </Link>
        </div>
      </div>
    </footer>
  );
}
