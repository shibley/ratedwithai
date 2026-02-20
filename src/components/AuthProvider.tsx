"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const clerkAppearance = {
  variables: {
    colorPrimary: "#38bdf8",
    colorBackground: "#0f172a",
    colorInputBackground: "#1e293b",
    colorInputText: "#f8fafc",
    colorText: "#f8fafc",
    colorTextSecondary: "#94a3b8",
  },
  elements: {
    card: "bg-slate-900 border border-slate-800",
    headerTitle: "text-white",
    headerSubtitle: "text-slate-400",
    socialButtonsBlockButton: "bg-slate-800 border-slate-700 text-white hover:bg-slate-700",
    formFieldLabel: "text-slate-300",
    formFieldInput: "bg-slate-800 border-slate-700 text-white",
    formButtonPrimary: "bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-slate-950",
    footerActionLink: "text-sky-400 hover:text-sky-300",
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  // Skip Clerk if no publishable key (allows builds without auth configured)
  const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
  if (!hasClerkKey) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider appearance={clerkAppearance}>
      {children}
    </ClerkProvider>
  );
}
