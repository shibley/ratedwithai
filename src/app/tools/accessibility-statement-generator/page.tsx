/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const conformanceLevels = ["WCAG 2.0 Level AA", "WCAG 2.1 Level AA", "WCAG 2.1 Level AAA", "WCAG 2.2 Level AA", "WCAG 2.2 Level AAA"];

const technologyOptions = ["HTML", "CSS", "JavaScript", "WAI-ARIA", "PDF", "SVG"];

const effortOptions = [
  "Keyboard navigation throughout the site",
  "Screen reader compatibility (NVDA, JAWS, VoiceOver)",
  "Sufficient color contrast ratios",
  "Text alternatives for non-text content",
  "Captions and transcripts for multimedia",
  "Consistent and predictable navigation",
  "Clear and descriptive link text",
  "Focus indicators on all interactive elements",
  "Resizable text up to 200% without loss of functionality",
  "No content that flashes more than 3 times per second",
];

export default function AccessibilityStatementGeneratorPage() {
  const [formData, setFormData] = useState({
    organizationName: "",
    websiteUrl: "",
    websiteName: "",
    conformanceLevel: "WCAG 2.1 Level AA",
    technologies: ["HTML", "CSS", "JavaScript"] as string[],
    efforts: [] as string[],
    limitations: "",
    contactEmail: "",
    contactPhone: "",
    contactFormUrl: "",
    lastUpdated: new Date().toISOString().split("T")[0],
    thirdPartyNote: "",
    assessmentMethod: "self" as "self" | "external" | "both",
    assessorName: "",
  });

  const [generated, setGenerated] = useState("");

  const handleTechToggle = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  const handleEffortToggle = (effort: string) => {
    setFormData((prev) => ({
      ...prev,
      efforts: prev.efforts.includes(effort)
        ? prev.efforts.filter((e) => e !== effort)
        : [...prev.efforts, effort],
    }));
  };

  const generateStatement = () => {
    const d = formData;
    const name = d.organizationName || "[Organization Name]";
    const siteName = d.websiteName || d.websiteUrl || "[Website Name]";
    const siteUrl = d.websiteUrl || "[https://example.com]";

    const contactLines: string[] = [];
    if (d.contactEmail) contactLines.push(`Email: ${d.contactEmail}`);
    if (d.contactPhone) contactLines.push(`Phone: ${d.contactPhone}`);
    if (d.contactFormUrl) contactLines.push(`Contact form: ${d.contactFormUrl}`);

    const effortList =
      d.efforts.length > 0
        ? d.efforts.map((e) => `- ${e}`).join("\n")
        : "- Providing text alternatives for non-text content\n- Ensuring keyboard accessibility\n- Maintaining sufficient color contrast";

    let assessmentText = "";
    if (d.assessmentMethod === "self") {
      assessmentText = `${name} assessed the accessibility of ${siteName} through self-evaluation.`;
    } else if (d.assessmentMethod === "external") {
      assessmentText = `The accessibility of ${siteName} was evaluated by ${d.assessorName || "an external accessibility consultant"}.`;
    } else {
      assessmentText = `${name} assessed the accessibility of ${siteName} through both internal testing and evaluation by ${d.assessorName || "an external accessibility consultant"}.`;
    }

    const limitationsSection = d.limitations
      ? `\n## Known Limitations\n\nDespite our best efforts, some areas of ${siteName} may not yet be fully accessible. Known limitations include:\n\n${d.limitations}\n\nWe are actively working to address these issues. If you encounter any problems, please contact us using the information below.`
      : "";

    const thirdPartySection = d.thirdPartyNote
      ? `\n## Third-Party Content\n\n${d.thirdPartyNote}`
      : "";

    const statement = `# Accessibility Statement for ${siteName}

**${name}** is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

## Conformance Status

${siteName} (${siteUrl}) is partially conformant with **${d.conformanceLevel}**. "Partially conformant" means that some parts of the content do not fully conform to the accessibility standard.

## Measures to Support Accessibility

${name} takes the following measures to ensure accessibility of ${siteName}:

${effortList}

## Technologies Used

This website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:

${d.technologies.map((t) => `- ${t}`).join("\n")}

These technologies are relied upon for conformance with the accessibility standards used.

## Assessment Method

${assessmentText}${limitationsSection}${thirdPartySection}

## Feedback

We welcome your feedback on the accessibility of ${siteName}. Please let us know if you encounter accessibility barriers:

${contactLines.length > 0 ? contactLines.join("\n") : "Email: [accessibility@example.com]\nPhone: [+1 (555) 000-0000]"}

We aim to respond to accessibility feedback within 2 business days.

## Date

This statement was last updated on **${d.lastUpdated}**.

---

*This accessibility statement was generated using the [RatedWithAI Accessibility Statement Generator](https://ratedwithai.com/tools/accessibility-statement-generator). We recommend supplementing this statement with a comprehensive [accessibility audit](https://ratedwithai.com/scan).*`;

    setGenerated(statement);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/10 to-purple-500/30 blur-3xl" />

          <Header />

          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 pt-4">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
                ✍️ Free Tool — No Signup Required
              </span>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
                Accessibility Statement<br />Generator
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Generate a professional, legally-sound accessibility statement for your website in
                minutes. Based on the W3C model and aligned with ADA, Section 508, and EAA requirements.
              </p>
            </div>
          </section>

          {/* Generator Form */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Fill in Your Details</h2>
              <div className="space-y-6">
                {/* Organization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, organizationName: e.target.value }))
                      }
                      placeholder="Acme Inc."
                      className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Website Name
                    </label>
                    <input
                      type="text"
                      value={formData.websiteName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, websiteName: e.target.value }))
                      }
                      placeholder="Acme Platform"
                      className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }))
                    }
                    placeholder="https://example.com"
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                </div>

                {/* Conformance Level */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Target Conformance Level
                  </label>
                  <select
                    value={formData.conformanceLevel}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, conformanceLevel: e.target.value }))
                    }
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                  >
                    {conformanceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-slate-500">
                    Most organizations target WCAG 2.1 Level AA. The ADA Title II deadline (April 2026)
                    requires WCAG 2.1 AA.
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Technologies Used
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {technologyOptions.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechToggle(tech)}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                          formData.technologies.includes(tech)
                            ? "bg-sky-600 text-white"
                            : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accessibility Efforts */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Accessibility Measures (select all that apply)
                  </label>
                  <div className="space-y-2">
                    {effortOptions.map((effort) => (
                      <label
                        key={effort}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={formData.efforts.includes(effort)}
                          onChange={() => handleEffortToggle(effort)}
                          className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="text-sm text-slate-400 group-hover:text-slate-300 transition">
                          {effort}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Assessment Method */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Assessment Method
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "self", label: "Self-evaluation" },
                      { value: "external", label: "External audit" },
                      { value: "both", label: "Both" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            assessmentMethod: opt.value as "self" | "external" | "both",
                          }))
                        }
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                          formData.assessmentMethod === opt.value
                            ? "bg-sky-600 text-white"
                            : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {(formData.assessmentMethod === "external" ||
                    formData.assessmentMethod === "both") && (
                    <input
                      type="text"
                      value={formData.assessorName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, assessorName: e.target.value }))
                      }
                      placeholder="Assessor name (e.g., Deque Systems)"
                      className="mt-3 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  )}
                </div>

                {/* Known Limitations */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Known Limitations (optional)
                  </label>
                  <textarea
                    value={formData.limitations}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, limitations: e.target.value }))
                    }
                    placeholder="e.g., Some older PDF documents may not be fully accessible. Third-party embedded maps have limited keyboard navigation."
                    rows={3}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                </div>

                {/* Third-party Note */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Third-Party Content Note (optional)
                  </label>
                  <textarea
                    value={formData.thirdPartyNote}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, thirdPartyNote: e.target.value }))
                    }
                    placeholder="e.g., Our website may include content from third-party sources that we do not control. While we strive to ensure all content meets accessibility standards..."
                    rows={2}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">
                        Accessibility Contact Email
                      </label>
                      <input
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, contactEmail: e.target.value }))
                        }
                        placeholder="accessibility@example.com"
                        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, contactPhone: e.target.value }))
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Contact Form URL (optional)
                    </label>
                    <input
                      type="url"
                      value={formData.contactFormUrl}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, contactFormUrl: e.target.value }))
                      }
                      placeholder="https://example.com/contact"
                      className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                    />
                  </div>
                </div>

                {/* Last Updated */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Statement Date
                  </label>
                  <input
                    type="date"
                    value={formData.lastUpdated}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, lastUpdated: e.target.value }))
                    }
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2.5 text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={generateStatement}
                  className="w-full rounded-lg bg-sky-600 px-6 py-3.5 text-lg font-semibold text-white hover:bg-sky-500 transition"
                >
                  Generate Accessibility Statement →
                </button>
              </div>
            </div>
          </section>

          {/* Generated Output */}
          {generated && (
            <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">Your Accessibility Statement</h2>
                  <button
                    onClick={copyToClipboard}
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition"
                  >
                    📋 Copy to Clipboard
                  </button>
                </div>
                <pre className="whitespace-pre-wrap text-sm text-slate-300 leading-relaxed font-mono bg-slate-900 rounded-lg p-6 overflow-x-auto max-h-[600px] overflow-y-auto">
                  {generated}
                </pre>
                <p className="mt-4 text-sm text-slate-500">
                  This is generated in Markdown format. Convert to HTML for your website, or paste directly
                  into your CMS. Review the content and customize any sections before publishing.
                </p>
              </div>
            </section>
          )}

          {/* Why you need an accessibility statement */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Every Website Needs an Accessibility Statement
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                An accessibility statement is a public commitment to making your website usable by everyone,
                including people with disabilities. While not always legally required, it serves several
                critical purposes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  {
                    icon: "⚖️",
                    title: "Legal Protection",
                    desc: "In ADA lawsuits, demonstrating a commitment to accessibility (including a statement + remediation plan) can reduce liability. Courts look favorably on documented good-faith efforts.",
                  },
                  {
                    icon: "🤝",
                    title: "User Trust",
                    desc: "Disabled users look for accessibility statements before engaging with a product. It signals that you take their needs seriously and provides a clear feedback channel.",
                  },
                  {
                    icon: "📋",
                    title: "Regulatory Compliance",
                    desc: "The European Accessibility Act (EAA), ADA Title II, and Section 508 all expect organizations to document their accessibility status. A statement is the baseline.",
                  },
                  {
                    icon: "🏛️",
                    title: "Government Contracts",
                    desc: "Government agencies increasingly require accessibility statements alongside VPATs. Having both ready gives you a competitive edge in procurement.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-5"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What to include */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <h2 className="text-3xl font-bold text-white mb-6">
              What Should an Accessibility Statement Include?
            </h2>
            <p className="text-slate-300 mb-4">
              The W3C Web Accessibility Initiative (WAI) recommends including these key elements:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Commitment statement",
                  desc: "A clear declaration that your organization is committed to accessibility",
                },
                {
                  title: "Standard referenced",
                  desc: "Which WCAG version and conformance level you're targeting (e.g., WCAG 2.1 AA)",
                },
                {
                  title: "Conformance status",
                  desc: "Honest assessment: fully conformant, partially conformant, or non-conformant",
                },
                {
                  title: "Known limitations",
                  desc: "Specific areas where accessibility falls short, with remediation timelines",
                },
                {
                  title: "Feedback mechanism",
                  desc: "Clear contact information for reporting accessibility barriers",
                },
                {
                  title: "Technologies used",
                  desc: "Technologies relied upon for conformance with the standard",
                },
                {
                  title: "Assessment approach",
                  desc: "How you evaluated accessibility (self-assessment, external audit, user testing)",
                },
                {
                  title: "Date",
                  desc: "When the statement was last reviewed or updated",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg bg-slate-800/30 p-4"
                >
                  <span className="mt-0.5 text-sky-400">✓</span>
                  <div>
                    <span className="font-medium text-white">{item.title}</span>
                    <span className="text-slate-400"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deadline callout */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-8 text-center">
              <p className="text-amber-400 text-lg font-semibold">⏰ April 24, 2026 — ADA Title II Deadline</p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Don't Just Write a Statement — Verify Your Compliance
              </h2>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                An accessibility statement is step one. Before you commit to conformance claims,
                scan your website to know exactly where you stand. Our free checker tests against
                WCAG 2.1 AA criteria in under 60 seconds.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/scan"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-sky-500 transition"
                >
                  Run Free Accessibility Scan →
                </Link>
                <Link
                  href="/tools/vpat-template"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
                >
                  Get VPAT Template
                </Link>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "VPAT Template (Free Download)", href: "/tools/vpat-template", icon: "📋" },
                { title: "Free Accessibility Checker", href: "/tools/free-accessibility-checker", icon: "🔍" },
                { title: "ADA Title II Deadline Guide", href: "/blog/ada-title-ii-deadline-countdown-2026", icon: "⏰" },
                { title: "Accessibility Audit Checklist", href: "/blog/accessibility-audit-checklist-2026", icon: "✅" },
                { title: "WCAG 2.2 Complete Guide", href: "/blog/wcag-22-complete-guide", icon: "📖" },
                { title: "Website Accessibility Lawsuit Stats", href: "/blog/website-accessibility-lawsuit-statistics-2026", icon: "⚖️" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 hover:border-sky-500/30 hover:bg-slate-800/60 transition"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-white font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
