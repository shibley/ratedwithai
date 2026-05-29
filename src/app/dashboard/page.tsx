import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const gradeColors: Record<string, string> = {
  A: "text-emerald-400",
  B: "text-sky-400",
  C: "text-amber-400",
  D: "text-orange-400",
  F: "text-rose-400",
};

const planBadge = (plan: string) => {
  if (plan === "business") return { label: "Business", className: "bg-emerald-500/10 text-emerald-200 border-emerald-400/40" };
  if (plan === "pro") return { label: "Pro", className: "bg-sky-500/10 text-sky-200 border-sky-400/40" };
  return { label: "Free", className: "bg-slate-800/40 text-slate-300 border-slate-700" };
};

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const [{ data: profile }, { data: scans }] = await Promise.all([
    supabase.from("profiles").select("plan, stripe_customer_id").eq("id", user.id).maybeSingle(),
    supabase
      .from("scans")
      .select("id, url, score, grade, violations_count, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  const plan = profile?.plan ?? "free";
  const badge = planBadge(plan);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-white">My scans</h1>
            <p className="mt-1 text-sm text-slate-400">Signed in as {user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badge.className}`}>
              {badge.label}
            </span>
            <Link
              href="/"
              className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              New scan
            </Link>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>

        {!scans || scans.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 text-center">
            <p className="text-slate-300">No scans yet.</p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Run your first scan
            </Link>
          </div>
        ) : (
          <ul className="mt-10 space-y-3">
            {scans.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/scan/${s.id}`}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 px-5 py-4 transition hover:border-sky-400/60 hover:bg-slate-900"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-white">{s.url}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {new Date(s.created_at).toLocaleString()} · {s.violations_count} issue{s.violations_count === 1 ? "" : "s"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${gradeColors[s.grade] ?? "text-white"}`}>
                      {s.grade}
                    </p>
                    <p className="text-xs text-slate-400">{s.score}/100</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
