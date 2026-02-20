import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <SignIn
        appearance={{
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
        }}
      />
    </div>
  );
}
