/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Axe MCP Server: AI-Powered Accessibility Testing in Your IDE (2026 Guide) | RatedWithAI",
  description:
    "Deque's Axe MCP Server brings accessibility testing directly into GitHub Copilot, Cursor, Claude Code, and VS Code. Analyze, remediate, and validate WCAG compliance without leaving your editor.",
  openGraph: {
    title:
      "Axe MCP Server: AI-Powered Accessibility Testing in Your IDE",
    description:
      "Fix accessibility issues with a single AI prompt. Deque's Axe MCP Server integrates enterprise-grade WCAG testing directly into your coding workflow.",
    type: "article",
    publishedTime: "2026-02-28T00:00:00.000Z",
    authors: ["RatedWithAI Team"],
  },
  keywords: [
    "axe mcp server",
    "accessibility mcp server",
    "deque axe ai",
    "axe devtools mcp",
    "mcp accessibility testing",
    "ai accessibility testing ide",
    "github copilot accessibility",
    "cursor accessibility testing",
    "claude code accessibility",
    "wcag testing ide",
    "axe devtools for web",
    "model context protocol accessibility",
    "accessibility ai coding agent",
    "deque mcp server setup",
    "automated accessibility remediation",
  ],
  alternates: {
    canonical:
      "https://ratedwithai.com/blog/axe-mcp-server-ai-accessibility-testing",
  },
};

export default function AxeMCPServerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Axe MCP Server: AI-Powered Accessibility Testing in Your IDE (2026 Guide)",
    description:
      "Deque's Axe MCP Server brings enterprise-grade accessibility testing directly into GitHub Copilot, Cursor, Claude Code, and VS Code via the Model Context Protocol. Complete guide to setup, capabilities, and how it fits into modern development workflows.",
    datePublished: "2026-02-28T00:00:00.000Z",
    dateModified: "2026-02-28T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: "RatedWithAI",
    },
    publisher: {
      "@type": "Organization",
      name: "RatedWithAI",
      logo: {
        "@type": "ImageObject",
        url: "https://ratedwithai.com/logo.png",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Axe MCP Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Axe MCP Server is Deque's official Model Context Protocol (MCP) server for accessibility testing. It integrates directly into AI coding agents like GitHub Copilot, Cursor, Claude Code, and VS Code to provide enterprise-grade accessibility scanning and AI-powered remediation guidance without leaving your IDE.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Axe MCP Server free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Axe MCP Server is included at no additional cost with an Axe DevTools for Web subscription. It requires a paid Axe DevTools for Web subscription, a Docker installation, and an API key from your Axe account portal. For teams already using Axe DevTools, it's a free upgrade to their existing toolset.",
        },
      },
      {
        "@type": "Question",
        name: "Which IDEs and AI coding agents does Axe MCP Server support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axe MCP Server supports any MCP-compatible client, including GitHub Copilot, Cursor, Claude Code (Anthropic), Windsurf, and VS Code. It works with any AI coding agent that implements the Model Context Protocol standard.",
        },
      },
      {
        "@type": "Question",
        name: "How is Axe MCP Server different from axe-core?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axe-core is the open-source accessibility testing engine that performs rules-based scanning. Axe MCP Server builds on top of axe-core by adding AI-powered remediation guidance via axe Assistant, direct IDE integration through MCP, and the ability to analyze, remediate, and validate in a single workflow — all without leaving your editor.",
        },
      },
      {
        "@type": "Question",
        name: "What does MCP stand for in accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MCP stands for Model Context Protocol, an open standard for connecting AI models to external tools and data sources. In accessibility, MCP enables AI coding agents to connect to specialized testing tools like Deque's Axe platform, bringing expert accessibility knowledge directly into development workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can Axe MCP Server automatically fix accessibility issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Axe MCP Server provides two tools: 'analyze' for scanning pages and 'remediate' for generating code-level fix guidance. When used with an AI coding agent, it can automatically apply source code fixes based on remediation guidance. The developer reviews and accepts or rejects each fix, maintaining full control while dramatically speeding up the process.",
        },
      },
      {
        "@type": "Question",
        name: "Is my code data secure with Axe MCP Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Axe MCP Server adheres to enterprise-grade security protections and Deque's privacy policy. For generative AI remediation guidance, no data is stored — it's only used in dynamic memory to produce guidance for the AI agent. The server follows the same enterprise settings configured for Axe DevTools.",
        },
      },
      {
        "@type": "Question",
        name: "Do I still need manual accessibility testing if I use Axe MCP Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Automated tools like Axe MCP Server can catch approximately 50-57% of WCAG violations. Manual testing is still required for issues like logical reading order, keyboard focus management in complex widgets, and ensuring content makes sense to screen reader users. Axe MCP Server accelerates the automated portion but doesn't replace human testing entirely.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Developer Tools
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Axe MCP Server: AI-Powered Accessibility Testing in Your IDE
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Deque's Axe MCP Server brings enterprise-grade accessibility
              testing directly into GitHub Copilot, Cursor, Claude Code, and
              VS Code. Analyze pages, get AI-powered remediation guidance, and
              validate fixes — all with a single prompt, without leaving your
              editor. Here's everything developers need to know about the tool
              that's reshaping how teams build accessible software.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time dateTime="2026-02-28">February 28, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </section>
        </div>

        <article className="mx-auto w-full max-w-4xl space-y-10 px-6 pb-24 text-slate-200">
          {/* Key Takeaways */}
          <section className="rounded-3xl border-2 border-emerald-500/50 bg-emerald-950/30 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                🔧
              </span>
              <h2 className="text-2xl font-bold text-emerald-300">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3 text-lg text-emerald-100">
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  1
                </span>
                <span>
                  Axe MCP Server connects <strong>Deque's trusted axe engine</strong> to
                  AI coding agents via the <strong>Model Context Protocol</strong> — analyze,
                  remediate, and validate accessibility in one flow
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  2
                </span>
                <span>
                  Works with <strong>GitHub Copilot, Cursor, Claude Code, Windsurf, VS Code</strong>,
                  and any MCP-compatible client
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  3
                </span>
                <span>
                  Now <strong>included with Axe DevTools for Web</strong> subscriptions
                  at no extra cost — announced at Axe-con 2025
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  4
                </span>
                <span>
                  Powered by <strong>axe Assistant</strong> (Deque's AI chatbot) trained on
                  Deque University's comprehensive accessibility knowledge base
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                  5
                </span>
                <span>
                  Critical timing: <strong>April 24, 2026 ADA Title II deadline</strong> makes
                  development-stage accessibility testing more urgent than ever
                </span>
              </li>
            </ul>
          </section>

          {/* TOC */}
          <nav className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
            <h2 className="text-lg font-bold text-white mb-4">
              📋 In This Article
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#what-is-mcp" className="hover:text-sky-400 transition-colors">
                  1. What Is the Model Context Protocol (MCP)?
                </a>
              </li>
              <li>
                <a href="#what-is-axe-mcp" className="hover:text-sky-400 transition-colors">
                  2. What Is the Axe MCP Server?
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-sky-400 transition-colors">
                  3. How It Works: Analyze → Remediate → Validate
                </a>
              </li>
              <li>
                <a href="#supported-tools" className="hover:text-sky-400 transition-colors">
                  4. Supported IDEs and AI Agents
                </a>
              </li>
              <li>
                <a href="#vs-axe-core" className="hover:text-sky-400 transition-colors">
                  5. Axe MCP Server vs. axe-core vs. axe DevTools Linter
                </a>
              </li>
              <li>
                <a href="#setup" className="hover:text-sky-400 transition-colors">
                  6. Getting Started: Requirements and Setup
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-sky-400 transition-colors">
                  7. Data Security and Privacy
                </a>
              </li>
              <li>
                <a href="#why-now" className="hover:text-sky-400 transition-colors">
                  8. Why This Matters Now: The April 2026 Deadline
                </a>
              </li>
              <li>
                <a href="#limitations" className="hover:text-sky-400 transition-colors">
                  9. What Axe MCP Server Can't Do (Yet)
                </a>
              </li>
              <li>
                <a href="#alternatives" className="hover:text-sky-400 transition-colors">
                  10. Free Alternatives for Accessibility Testing in IDEs
                </a>
              </li>
              <li>
                <a href="#verdict" className="hover:text-sky-400 transition-colors">
                  11. The Verdict: Is Axe MCP Server Worth It?
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  12. Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          {/* What Is MCP */}
          <section id="what-is-mcp" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Is the Model Context Protocol (MCP)?
            </h2>
            <p className="text-lg leading-relaxed">
              Before diving into Deque's tool, it helps to understand the
              protocol that powers it. The{" "}
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Model Context Protocol (MCP)
              </a>{" "}
              is an open standard created by Anthropic for connecting AI models
              to external tools and data sources. Think of it as a universal
              adapter: instead of each AI tool building custom integrations with
              every service it needs to connect to, MCP provides a standardized
              way for AI agents to discover, connect to, and use external tools.
            </p>
            <p className="text-lg leading-relaxed">
              In practical terms, MCP lets your AI coding agent (Copilot,
              Cursor, Claude Code) talk to specialized tools — like
              accessibility scanners, databases, or APIs — in a standard way.
              The AI agent doesn't need to know how each tool works internally.
              It just calls the MCP server and gets structured responses it can
              act on.
            </p>

            <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-6 space-y-3">
              <h3 className="text-lg font-bold text-sky-300">
                Why MCP Matters for Developers
              </h3>
              <ul className="space-y-2 text-lg text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400 mt-1">→</span>
                  <span>
                    <strong>One protocol, many tools:</strong> Instead of
                    separate extensions for each service, MCP provides a
                    unified interface
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 mt-1">→</span>
                  <span>
                    <strong>AI-native integration:</strong> Tools expose
                    capabilities that AI agents can reason about and use
                    contextually
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 mt-1">→</span>
                  <span>
                    <strong>Growing ecosystem:</strong> By 2027, an estimated{" "}
                    <a
                      href="https://medium.com/ai-rockstars/zapier-mcp-ai-tool-access-is-fundamentally-changed-7-000-apps-without-api-integration-9e6bdc118c9c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      65% of enterprise automation
                    </a>{" "}
                    is predicted to run through MCP
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* What Is Axe MCP Server */}
          <section id="what-is-axe-mcp" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Is the Axe MCP Server?
            </h2>
            <p className="text-lg leading-relaxed">
              The{" "}
              <a
                href="https://www.deque.com/axe/mcp-server/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Axe MCP Server
              </a>{" "}
              is Deque's official implementation of the Model Context Protocol
              for accessibility testing. It connects two powerful systems:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">🔍</p>
                <h3 className="font-bold text-white">
                  The Axe Testing Engine
                </h3>
                <p className="text-slate-300">
                  The same enterprise-grade engine that powers the axe
                  DevTools browser extension — trusted by billions of users
                  worldwide. Performs real browser testing against WCAG
                  standards with industry-leading accuracy.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2">
                <p className="text-2xl">🤖</p>
                <h3 className="font-bold text-white">
                  Axe Assistant AI
                </h3>
                <p className="text-slate-300">
                  Deque's generative AI chatbot, trained on{" "}
                  <strong>Deque University</strong> — the most comprehensive
                  digital accessibility knowledge base in the industry.
                  Provides expert-level remediation guidance in natural
                  language.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Together, these systems give your AI coding agent two tools:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-mono mt-1">analyze</span>
                <span className="text-slate-300">
                  — Scan web pages for accessibility issues using the axe
                  engine. Performs real browser testing against WCAG 2.1 AA
                  standards and returns structured results the AI agent can
                  reason about.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-mono mt-1">remediate</span>
                <span className="text-slate-300">
                  — Get AI-powered, code-level guidance to fix identified
                  issues. The AI coding agent can then automatically apply
                  source code changes, which you review and accept or reject.
                </span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed">
              First{" "}
              <a
                href="https://www.deque.com/blog/one-click-fix-get-suggestions-to-make-your-code-accessible-in-the-ide/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                introduced at Axe-con 2025
              </a>
              , the Axe MCP Server is now bundled with all Axe DevTools for Web
              subscriptions at no additional cost. As Deque CTO Dylan Barrell
              noted: "With Axe MCP Server as part of Axe DevTools for Web,
              developers can contribute to accessibility earlier in the
              software development lifecycle, all while using existing tools
              and their preferred AI coding agent."
            </p>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              How It Works: Analyze → Remediate → Validate
            </h2>
            <p className="text-lg leading-relaxed">
              The workflow is remarkably simple. Here's what happens when you
              use Axe MCP Server with an AI coding agent:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 font-bold text-lg">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Analyze: Scan Your Page
                    </h3>
                    <p className="text-lg text-slate-300">
                      Prompt your AI agent something like: "Check this page
                      for accessibility issues." The agent calls the Axe MCP
                      Server's <code className="text-emerald-400">analyze</code>{" "}
                      tool, which launches a real browser, renders your page,
                      and runs the full axe engine against it. Results come
                      back as structured data the AI can reason about.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 font-bold text-lg">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Remediate: Get Fix Guidance
                    </h3>
                    <p className="text-lg text-slate-300">
                      For each issue found, the{" "}
                      <code className="text-emerald-400">remediate</code> tool
                      leverages axe Assistant to generate context-specific,
                      code-level fix guidance. This isn't generic advice — it
                      understands your actual code and provides precise
                      changes. The AI agent can then propose or apply these
                      fixes directly to your source code.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-lg">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Validate: Confirm the Fix
                    </h3>
                    <p className="text-lg text-slate-300">
                      After applying fixes, run another{" "}
                      <code className="text-emerald-400">analyze</code> scan to
                      confirm the issues are resolved. This close-the-loop
                      verification ensures fixes actually work — not just in
                      theory, but in the rendered browser environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6">
              <h3 className="text-lg font-bold text-purple-300 mb-3">
                💡 Example Prompt
              </h3>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-300 space-y-2">
                <p className="text-purple-400">{"// In your AI coding agent:"}</p>
                <p>
                  "Scan http://localhost:3000 for accessibility issues, fix
                  any critical WCAG violations you find, then re-scan to
                  verify the fixes."
                </p>
              </div>
              <p className="text-sm text-slate-400 mt-3">
                A single prompt triggers the full analyze → remediate →
                validate cycle. The AI agent handles the orchestration
                automatically.
              </p>
            </div>
          </section>

          {/* Supported Tools */}
          <section id="supported-tools" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Supported IDEs and AI Agents
            </h2>
            <p className="text-lg leading-relaxed">
              Axe MCP Server works with any tool that supports the Model
              Context Protocol. As of early 2026, the major supported
              platforms include:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "GitHub Copilot",
                  desc: "Integrated via VS Code MCP support. Works with Copilot Chat and agent mode.",
                  icon: "🐙",
                },
                {
                  name: "Cursor",
                  desc: "Native MCP support. Configure in Cursor settings to add Axe MCP Server as a tool.",
                  icon: "⚡",
                },
                {
                  name: "Claude Code",
                  desc: "Anthropic's CLI coding agent. Full MCP support for accessibility testing.",
                  icon: "🧠",
                },
                {
                  name: "VS Code",
                  desc: "Direct MCP integration. Works alongside other VS Code extensions.",
                  icon: "💻",
                },
                {
                  name: "Windsurf",
                  desc: "Codeium's AI-first IDE with built-in MCP client support.",
                  icon: "🏄",
                },
                {
                  name: "Any MCP Client",
                  desc: "Any tool implementing the MCP specification can connect to Axe MCP Server.",
                  icon: "🔌",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 space-y-2"
                >
                  <p className="text-2xl">{tool.icon}</p>
                  <h3 className="font-bold text-white">{tool.name}</h3>
                  <p className="text-sm text-slate-300">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* vs axe-core */}
          <section id="vs-axe-core" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Axe MCP Server vs. axe-core vs. axe DevTools Linter
            </h2>
            <p className="text-lg leading-relaxed">
              Deque offers several accessibility tools that serve different
              purposes. Here's how they compare:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🧱</span>
                  <h3 className="text-xl font-bold text-white">axe-core</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">
                    Open Source · Free
                  </span>
                </div>
                <p className="text-slate-300">
                  The open-source JavaScript library that powers all of
                  Deque's testing tools. Used by{" "}
                  <strong>billions of scans worldwide</strong>. Performs
                  rules-based WCAG testing. You integrate it into your test
                  suite programmatically (Selenium, Playwright, Cypress,
                  etc.).
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Best for: Automated test suites, CI/CD pipelines, custom
                  integrations
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📏</span>
                  <h3 className="text-xl font-bold text-white">
                    axe DevTools Linter
                  </h3>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">
                    Paid · Axe DevTools
                  </span>
                </div>
                <p className="text-slate-300">
                  Static analysis tool that catches accessibility issues in
                  your source code <em>before</em> it renders. Works like
                  ESLint for accessibility — flagging issues as you type.
                  Doesn't require running the application.
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Best for: Catching issues during development, enforcing
                  standards in code review
                </p>
              </div>

              <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🤖</span>
                  <h3 className="text-xl font-bold text-white">
                    Axe MCP Server
                  </h3>
                  <span className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded-full">
                    Included · Axe DevTools for Web
                  </span>
                </div>
                <p className="text-slate-300">
                  AI-native integration that brings both{" "}
                  <strong>
                    real browser testing AND AI remediation guidance
                  </strong>{" "}
                  into your IDE. Understands the rendered state of your
                  application. Provides context-specific code fixes via AI.
                  Closes the testing loop in a single workflow.
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Best for: Development-stage testing with AI-assisted
                  remediation, teams wanting to shift accessibility left
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              The key differentiator: axe-core tells you{" "}
              <em>what's wrong</em>. Axe DevTools Linter catches issues{" "}
              <em>before they render</em>. Axe MCP Server tells you{" "}
              <em>what's wrong, how to fix it, and then verifies the fix</em>{" "}
              — all within your AI agent's conversation flow.
            </p>
          </section>

          {/* Setup */}
          <section id="setup" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Getting Started: Requirements and Setup
            </h2>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Prerequisites</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>Docker</strong> installed and running (Axe MCP
                    Server runs as a Docker container)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>Axe DevTools for Web subscription</strong> (the
                    MCP server is bundled at no extra cost)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>API key</strong> from your{" "}
                    <a
                      href="https://axe.deque.com/settings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      Axe Account Portal
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>MCP-compatible client</strong> (VS Code, Cursor,
                    Claude Code, etc.)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Quick Start: Docker Setup
              </h3>
              <p className="text-slate-300 mb-3">
                The Axe MCP Server is distributed as a Docker image. Pull it
                from Docker Hub:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                <p className="text-slate-500"># Pull the latest image</p>
                <p>docker pull dequesystems/axe-mcp-server</p>
              </div>
              <p className="text-slate-300 mt-3">
                Then configure your MCP client to connect to the server. The
                exact configuration varies by client — see{" "}
                <a
                  href="https://docs.deque.com/devtools-server/4.0.0/en/axe-mcp-server/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  Deque's complete setup documentation
                </a>{" "}
                for step-by-step instructions for each supported IDE.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6">
              <h3 className="text-lg font-bold text-amber-300 mb-2">
                ⚠️ Pricing Note
              </h3>
              <p className="text-slate-300">
                Axe MCP Server requires an Axe DevTools for Web subscription.
                It's not available as a standalone free tool. If you're
                already an Axe DevTools customer, it's included at no extra
                cost. If you're new to Axe DevTools, you can{" "}
                <a
                  href="https://accessibility.deque.com/request-a-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  request a demo
                </a>{" "}
                from Deque. For free alternatives, see our{" "}
                <a href="#alternatives" className="text-sky-400 hover:text-sky-300 underline">
                  alternatives section below
                </a>
                .
              </p>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Data Security and Privacy
            </h2>
            <p className="text-lg leading-relaxed">
              Enterprise teams rightly worry about code and data flowing
              through AI tools. Deque addresses this directly:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">🔒</span>
                <span>
                  <strong>No data stored:</strong> For AI remediation
                  guidance, data is only used in dynamic memory to produce
                  the guidance — never stored
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">🔒</span>
                <span>
                  <strong>Enterprise settings respected:</strong> Axe MCP
                  Server follows the same security configuration you've set
                  up for Axe DevTools across your organization
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 mt-1">🔒</span>
                <span>
                  <strong>Local execution:</strong> The Docker container runs
                  locally — your code doesn't leave your machine for
                  accessibility scanning
                </span>
              </li>
            </ul>
          </section>

          {/* Why Now */}
          <section id="why-now" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Why This Matters Now: The April 2026 Deadline
            </h2>
            <p className="text-lg leading-relaxed">
              The timing of Axe MCP Server's availability is no coincidence.
              The{" "}
              <Link
                href="/blog/ada-website-compliance-deadline-2025-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                ADA Title II April 24, 2026 deadline
              </Link>{" "}
              requires all public entities — including universities, state
              agencies, and local governments — to achieve WCAG 2.1 AA
              compliance. That deadline is{" "}
              <strong>less than 55 days away</strong>.
            </p>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                The Scale of the Problem
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-sky-400">8,667</p>
                  <p className="text-sm text-slate-400 mt-1">
                    ADA lawsuits filed in 2025
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-amber-400">$5/pg</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Manual PDF remediation cost
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/40">
                  <p className="text-2xl font-bold text-emerald-400">55 days</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Until Title II deadline
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              For development teams building or maintaining websites that
              fall under Title II, tools like Axe MCP Server represent the
              difference between "accessibility is something we deal with in
              QA" and "accessibility is part of how we write code." The
              former approach is{" "}
              <Link
                href="/blog/repeat-ada-lawsuits-why-one-settlement-isnt-enough"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                increasingly untenable
              </Link>
              .
            </p>

            <p className="text-lg leading-relaxed">
              As GAAD Foundation co-founder Jennison Asuncion put it: "For
              years, we've talked about the promise of 'shifting left' —
              finding and fixing accessibility issues earlier in the process.
              With technologies like this, real change happens."
            </p>
          </section>

          {/* Limitations */}
          <section id="limitations" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              What Axe MCP Server Can't Do (Yet)
            </h2>
            <p className="text-lg leading-relaxed">
              No tool is a silver bullet. Here's what you should know about
              the current limitations:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-400 mt-1">⚠️</span>
                <span>
                  <strong>Web only (for now):</strong> Currently focuses on
                  web environments. Native mobile testing is on the roadmap
                  but not yet available.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 mt-1">⚠️</span>
                <span>
                  <strong>~50-57% automated coverage:</strong> Like all
                  automated accessibility tools, Axe MCP Server catches
                  roughly half of WCAG violations. Issues like logical
                  reading order, complex keyboard interactions, and cognitive
                  accessibility require manual review.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 mt-1">⚠️</span>
                <span>
                  <strong>Requires Docker:</strong> The server runs as a
                  Docker container, which adds a setup step for teams not
                  already using Docker in their workflow.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 mt-1">⚠️</span>
                <span>
                  <strong>Paid subscription required:</strong> Unlike the
                  open-source axe-core, the MCP server requires an Axe
                  DevTools for Web subscription.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 mt-1">⚠️</span>
                <span>
                  <strong>AI remediation isn't perfect:</strong> While
                  powered by expert knowledge, AI-generated fixes should
                  always be reviewed by a developer. Edge cases and complex
                  component patterns may need human judgment.
                </span>
              </li>
            </ul>
          </section>

          {/* Free Alternatives */}
          <section id="alternatives" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Free Alternatives for Accessibility Testing in IDEs
            </h2>
            <p className="text-lg leading-relaxed">
              If you're not ready for a paid Axe DevTools subscription,
              there are several free tools that provide accessibility
              testing in development environments:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  axe-core (Open Source)
                </h3>
                <p className="text-slate-300">
                  The engine behind Axe MCP Server is fully open source.
                  Integrate directly into Playwright, Cypress, or Selenium
                  test suites. No MCP integration, but gives you the same
                  scanning accuracy.
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  <a
                    href="https://github.com/dequelabs/axe-core"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    github.com/dequelabs/axe-core
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  axe Accessibility Linter (VS Code Extension)
                </h3>
                <p className="text-slate-300">
                  Free VS Code extension that catches accessibility issues
                  in HTML, React, Vue, and Angular as you type. Static
                  analysis — doesn't require running the app.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Pa11y
                </h3>
                <p className="text-slate-300">
                  Open-source accessibility testing tool that runs from the
                  command line. Supports WCAG 2.1 AA testing and integrates
                  into CI/CD pipelines. Can be configured as a custom MCP
                  server by advanced users.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Google Lighthouse
                </h3>
                <p className="text-slate-300">
                  Built into Chrome DevTools. Includes accessibility auditing
                  (powered by axe-core under the hood). Not IDE-integrated,
                  but free and ubiquitous.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              For a comprehensive comparison of all available tools, see our{" "}
              <Link
                href="/blog/best-accessibility-testing-tools"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Best Accessibility Testing Tools Compared (2026)
              </Link>
              .
            </p>
          </section>

          {/* Verdict */}
          <section id="verdict" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              The Verdict: Is Axe MCP Server Worth It?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-emerald-300">
                  ✅ Best For
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>▸ Teams already using Axe DevTools for Web</li>
                  <li>▸ Organizations facing Title II compliance deadlines</li>
                  <li>▸ Developers who want accessibility in their flow, not as an afterthought</li>
                  <li>▸ Enterprise teams needing consistent, standards-aligned guidance</li>
                  <li>▸ Teams using AI coding agents (Copilot, Cursor, Claude Code)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-3">
                <h3 className="text-xl font-bold text-rose-300">
                  ❌ Skip If
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>▸ You're on a tight budget and axe-core + Lighthouse cover your needs</li>
                  <li>▸ You don't use AI coding agents yet</li>
                  <li>▸ You need mobile native app testing (not yet supported)</li>
                  <li>▸ Your team is small and manual testing is sufficient</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              The Axe MCP Server represents a genuine shift in how
              accessibility testing integrates into development workflows.
              It's not just another scanning tool — it's an{" "}
              <strong>
                AI-native bridge between accessibility expertise and
                developer productivity
              </strong>
              . For teams already invested in the Axe ecosystem and using
              AI coding agents, it's a natural and valuable upgrade. For
              everyone else, the free alternatives (especially axe-core)
              remain excellent starting points.
            </p>

            <p className="text-lg leading-relaxed">
              The real question isn't whether to test for accessibility in
              your IDE — it's whether you can afford not to, with 8,667 ADA
              lawsuits filed in 2025 and the April deadline{" "}
              <Link
                href="/blog/ada-website-compliance-deadline-2025-2026"
                className="text-sky-400 hover:text-sky-300 underline"
              >
                just weeks away
              </Link>
              .
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl bg-gradient-to-br from-sky-900/40 via-blue-900/30 to-indigo-900/40 border border-sky-500/20 p-8 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              Already Shipping Code? Check Your Site's Accessibility Score
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you use Axe MCP Server, axe-core, or any other testing
              tool — RatedWithAI gives you a quick accessibility score and
              actionable fixes for your live website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white hover:bg-sky-400 transition-colors"
              >
                Scan Your Website Free →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  What is the Axe MCP Server?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The Axe MCP Server is Deque's official Model Context
                  Protocol server for accessibility testing. It integrates
                  directly into AI coding agents like GitHub Copilot, Cursor,
                  Claude Code, and VS Code to provide enterprise-grade
                  accessibility scanning and AI-powered remediation guidance
                  without leaving your IDE.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Is the Axe MCP Server free?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The Axe MCP Server is included at no additional cost with
                  an Axe DevTools for Web subscription. It requires a paid
                  subscription, a Docker installation, and an API key from
                  your Axe account portal. For teams already using Axe
                  DevTools, it's a free addition to their existing toolset.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Which IDEs and AI coding agents does Axe MCP Server
                  support?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Axe MCP Server supports any MCP-compatible client,
                  including GitHub Copilot, Cursor, Claude Code (Anthropic),
                  Windsurf, and VS Code. It works with any AI coding agent
                  that implements the Model Context Protocol standard.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  How is Axe MCP Server different from axe-core?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Axe-core is the open-source accessibility testing engine
                  that performs rules-based scanning. Axe MCP Server builds
                  on top of axe-core by adding AI-powered remediation
                  guidance via axe Assistant, direct IDE integration through
                  MCP, and the ability to analyze, remediate, and validate in
                  a single workflow — all without leaving your editor.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  What does MCP stand for in accessibility?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  MCP stands for Model Context Protocol, an open standard
                  for connecting AI models to external tools and data
                  sources. In accessibility, MCP enables AI coding agents to
                  connect to specialized testing tools like Deque's Axe
                  platform, bringing expert accessibility knowledge directly
                  into development workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Can Axe MCP Server automatically fix accessibility issues?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Axe MCP Server provides two tools:{" "}
                  <code className="text-emerald-400">analyze</code> for
                  scanning pages and{" "}
                  <code className="text-emerald-400">remediate</code> for
                  generating code-level fix guidance. When used with an AI
                  coding agent, it can automatically apply source code fixes
                  based on remediation guidance. The developer reviews and
                  accepts or rejects each fix, maintaining full control while
                  dramatically speeding up the process.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Is my code data secure with Axe MCP Server?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Yes. Axe MCP Server adheres to enterprise-grade security
                  protections and Deque's privacy policy. For generative AI
                  remediation guidance, no data is stored — it's only used
                  in dynamic memory to produce guidance for the AI agent. The
                  server follows the same enterprise settings configured for
                  Axe DevTools.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Do I still need manual accessibility testing if I use Axe
                  MCP Server?
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Yes. Automated tools like Axe MCP Server can catch
                  approximately 50-57% of WCAG violations. Manual testing is
                  still required for issues like logical reading order,
                  keyboard focus management in complex widgets, and ensuring
                  content makes sense to screen reader users. Axe MCP Server
                  accelerates the automated portion but doesn't replace human
                  testing entirely.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/blog/best-accessibility-testing-tools"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Tools Guide</p>
                <p className="text-lg font-semibold text-white mt-1">
                  Best Accessibility Testing Tools Compared (2026)
                </p>
              </Link>
              <Link
                href="/blog/meta-ai-accessibility-fixes-axe-con-2026"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Industry News</p>
                <p className="text-lg font-semibold text-white mt-1">
                  How Meta Used AI to Fix 2,500 Accessibility Issues
                </p>
              </Link>
              <Link
                href="/blog/section-508-compliance-guide"
                className="text-sky-400 hover:text-sky-300 rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Compliance Guide</p>
                <p className="text-lg font-semibold text-white mt-1">
                  Section 508 Compliance: The Complete Guide for 2026
                </p>
              </Link>
              <Link
                href="/blog/ada-website-compliance-deadline-2025-2026"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-5 hover:border-sky-500/50 transition-colors block"
              >
                <p className="text-sm text-sky-400">Deadline Tracker</p>
                <p className="text-lg font-semibold text-white mt-1">
                  ADA Title II April 2026 Deadline Countdown
                </p>
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}
