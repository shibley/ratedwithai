import Link from "next/link";
import dynamic from "next/dynamic";

const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Dynamically import SignIn only when Clerk is configured
const SignIn = hasClerk
  ? dynamic(() => import("@clerk/nextjs").then((m) => m.SignIn))
  : null;

const clerkAppearance = {
  elements: {
    rootBox: "mx-auto",
    card: "bg-slate-900 border border-slate-800",
    headerTitle: "text-white",
    headerSubtitle: "text-slate-400",
    socialButtonsBlockButton:
      "bg-slate-800 border-slate-700 text-white hover:bg-slate-700",
    socialButtonsBlockButtonText: "text-white",
    dividerLine: "bg-slate-700",
    dividerText: "text-slate-400",
    formFieldLabel: "text-slate-300",
    formFieldInput:
      "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500",
    formButtonPrimary:
      "bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-slate-950 hover:opacity-90",
    footerActionLink: "text-sky-400 hover:text-sky-300",
    identityPreviewText: "text-white",
    identityPreviewEditButton: "text-sky-400",
  },
};

export default function SignInPage() {
  if (!hasClerk || !SignIn) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-bold mb-4">Authentication Coming Soon</h1>
        <p className="text-slate-400 mb-6">Sign-in functionality is not yet configured.</p>
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-slate-950"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <SignIn appearance={clerkAppearance} />
    </div>
  );
}
