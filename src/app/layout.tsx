import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RatedWithAI | Website Accessibility Scanner",
  description:
    "Get your website accessibility score in seconds with axe-core and AI-driven insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
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
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
