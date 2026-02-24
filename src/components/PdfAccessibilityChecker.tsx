"use client";

import { useState, useCallback, useRef } from "react";

interface CheckResult {
  id: string;
  label: string;
  status: "pass" | "fail" | "warning" | "pending";
  detail: string;
  recommendation: string;
}

const initialChecks: CheckResult[] = [
  {
    id: "title",
    label: "Document Title",
    status: "pending",
    detail: "",
    recommendation:
      "Add a descriptive title in your PDF's document properties. In Adobe Acrobat: File → Properties → Description → Title.",
  },
  {
    id: "language",
    label: "Language Tag",
    status: "pending",
    detail: "",
    recommendation:
      "Set the document language in your PDF properties. In Adobe Acrobat: File → Properties → Advanced → Language.",
  },
  {
    id: "tagged",
    label: "Tagged PDF (Structure Tags)",
    status: "pending",
    detail: "",
    recommendation:
      'Enable tagged PDF when exporting. In Word: Save As PDF → Options → "Document structure tags for accessibility". In Acrobat: Accessibility → Add Tags.',
  },
  {
    id: "headings",
    label: "Heading Structure",
    status: "pending",
    detail: "",
    recommendation:
      "Use proper heading styles (H1, H2, H3) in your source document before converting to PDF. Avoid using bold text as a substitute for headings.",
  },
  {
    id: "images",
    label: "Images with Alt Text",
    status: "pending",
    detail: "",
    recommendation:
      "Add alternative text to all meaningful images. In Acrobat: Right-click image → Edit Alternate Text. Mark decorative images as artifacts.",
  },
  {
    id: "bookmarks",
    label: "Bookmarks / Navigation",
    status: "pending",
    detail: "",
    recommendation:
      "Generate bookmarks from headings. In Acrobat: View → Navigation Panels → Bookmarks. In Word: ensure heading styles are used before export.",
  },
  {
    id: "text",
    label: "Text Extractable (Not Scanned Image)",
    status: "pending",
    detail: "",
    recommendation:
      "If your PDF is a scanned image, run OCR to make text searchable. In Acrobat: Scan & OCR → Recognize Text. This is critical for screen reader access.",
  },
];

export default function PdfAccessibilityChecker() {
  const [checks, setChecks] = useState<CheckResult[]>(initialChecks);
  const [analyzing, setAnalyzing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [dragOver, setDragOver] = useState(false);
  const [done, setDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const analyzePdf = useCallback(async (file: File) => {
    setAnalyzing(true);
    setDone(false);
    setFileName(file.name);
    setFileSize(file.size);
    setChecks(initialChecks);

    try {
      // Dynamic import to keep bundle small and avoid SSR issues
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      setPageCount(pdf.numPages);

      const metadata = await pdf.getMetadata();
      const info = metadata.info as Record<string, unknown>;

      const results: CheckResult[] = [...initialChecks];

      // 1. Document Title
      const title = info?.Title as string | undefined;
      if (title && title.trim().length > 0) {
        results[0] = {
          ...results[0],
          status: "pass",
          detail: `Title: "${title.trim()}"`,
        };
      } else {
        results[0] = {
          ...results[0],
          status: "fail",
          detail: "No document title found in PDF metadata.",
        };
      }

      // 2. Language Tag
      const lang = info?.Language as string | undefined;
      // Also check the catalog for Lang
      let catalogLang: string | null = null;
      try {
        const metaXml = metadata.metadata;
        if (metaXml) {
          const xmlStr = metaXml.getAll();
          if (xmlStr && typeof xmlStr === "object") {
            const dcLang = (xmlStr as Record<string, unknown>)["dc:language"];
            if (typeof dcLang === "string" && dcLang.trim()) {
              catalogLang = dcLang.trim();
            }
          }
        }
      } catch {
        // ignore
      }
      const effectiveLang = lang || catalogLang;
      if (effectiveLang && effectiveLang.trim().length > 0) {
        results[1] = {
          ...results[1],
          status: "pass",
          detail: `Language: "${effectiveLang.trim()}"`,
        };
      } else {
        results[1] = {
          ...results[1],
          status: "fail",
          detail: "No language tag found. Screen readers may mispronounce content.",
        };
      }

      // 3. Tagged PDF
      let isTagged = false;
      try {
        const markInfo = await (pdf as unknown as { getMarkInfo?: () => Promise<Record<string, boolean> | null> }).getMarkInfo?.();
        if (markInfo && markInfo.Marked) {
          isTagged = true;
        }
      } catch {
        // fallback: check metadata
      }
      if (!isTagged) {
        // Secondary check: look at metadata XML for pdfuaid
        try {
          const metaXml = metadata.metadata;
          if (metaXml) {
            const xmlStr = metaXml.getAll();
            if (xmlStr && typeof xmlStr === "object") {
              const pdfuaid = (xmlStr as Record<string, unknown>)["pdfuaid:part"];
              if (pdfuaid) isTagged = true;
            }
          }
        } catch {
          // ignore
        }
      }
      if (isTagged) {
        results[2] = {
          ...results[2],
          status: "pass",
          detail: "PDF is tagged with structure tags.",
        };
      } else {
        results[2] = {
          ...results[2],
          status: "fail",
          detail: "PDF is not tagged. Screen readers cannot determine document structure.",
        };
      }

      // 4. Heading Structure - check structure tree for headings
      let hasHeadings = false;
      let headingCount = 0;
      try {
        // We'll scan first few pages text for heading-like patterns in the structure
        // pdf.js exposes getStructTree on pages in newer versions
        const maxPagesToScan = Math.min(pdf.numPages, 5);
        for (let i = 1; i <= maxPagesToScan; i++) {
          const page = await pdf.getPage(i);
          try {
            const structTree = await page.getStructTree();
            if (structTree) {
              const countHeadings = (node: unknown): number => {
                let count = 0;
                const n = node as { role?: string; children?: unknown[] };
                if (n.role && /^H\d?$/i.test(n.role)) {
                  count++;
                }
                if (n.children) {
                  for (const child of n.children) {
                    count += countHeadings(child);
                  }
                }
                return count;
              };
              headingCount += countHeadings(structTree);
            }
          } catch {
            // getStructTree not available on this version
          }
        }
        hasHeadings = headingCount > 0;
      } catch {
        // ignore
      }

      if (hasHeadings) {
        results[3] = {
          ...results[3],
          status: "pass",
          detail: `Found ${headingCount} heading(s) in structure tags.`,
        };
      } else if (isTagged) {
        results[3] = {
          ...results[3],
          status: "warning",
          detail: "PDF is tagged but no heading tags were detected in the first 5 pages.",
        };
      } else {
        results[3] = {
          ...results[3],
          status: "fail",
          detail: "No heading structure found. Document lacks navigational headings.",
        };
      }

      // 5. Images with Alt Text
      let totalImages = 0;
      let imagesWithAlt = 0;
      try {
        const maxPagesToScan = Math.min(pdf.numPages, 10);
        for (let i = 1; i <= maxPagesToScan; i++) {
          const page = await pdf.getPage(i);
          const ops = await page.getOperatorList();
          // Count image operators
          const pdfjsOps = pdfjsLib.OPS;
          for (const op of ops.fnArray) {
            if (
              op === pdfjsOps.paintImageXObject ||
              op === (pdfjsOps as Record<string, number>)["paintJpegXObject"] ||
              op === pdfjsOps.paintImageXObjectRepeat
            ) {
              totalImages++;
            }
          }
          // Check struct tree for figures with alt text
          try {
            const structTree = await page.getStructTree();
            if (structTree) {
              const countFigures = (node: unknown): void => {
                const n = node as { role?: string; alt?: string; children?: unknown[] };
                if (n.role === "Figure" || n.role === "figure") {
                  if (n.alt && n.alt.trim().length > 0) {
                    imagesWithAlt++;
                  }
                }
                if (n.children) {
                  for (const child of n.children) {
                    countFigures(child);
                  }
                }
              };
              countFigures(structTree);
            }
          } catch {
            // ignore
          }
        }
      } catch {
        // ignore
      }

      if (totalImages === 0) {
        results[4] = {
          ...results[4],
          status: "pass",
          detail: "No images detected — no alt text required.",
        };
      } else if (imagesWithAlt >= totalImages && totalImages > 0) {
        results[4] = {
          ...results[4],
          status: "pass",
          detail: `All ${totalImages} image(s) have alt text.`,
        };
      } else if (imagesWithAlt > 0) {
        results[4] = {
          ...results[4],
          status: "warning",
          detail: `${imagesWithAlt} of ${totalImages} image(s) have alt text. Some may be missing.`,
        };
      } else {
        results[4] = {
          ...results[4],
          status: totalImages > 0 ? "fail" : "pass",
          detail:
            totalImages > 0
              ? `Found ${totalImages} image(s) but no alt text detected in structure tags.`
              : "No images detected.",
        };
      }

      // 6. Bookmarks
      try {
        const outline = await pdf.getOutline();
        if (outline && outline.length > 0) {
          results[5] = {
            ...results[5],
            status: "pass",
            detail: `${outline.length} bookmark(s) found for navigation.`,
          };
        } else {
          results[5] = {
            ...results[5],
            status: pdf.numPages > 5 ? "fail" : "warning",
            detail:
              pdf.numPages > 5
                ? `No bookmarks found in a ${pdf.numPages}-page document. Long documents need bookmarks for navigation.`
                : "No bookmarks found. Short documents may not need them.",
          };
        }
      } catch {
        results[5] = {
          ...results[5],
          status: "warning",
          detail: "Could not check bookmarks.",
        };
      }

      // 7. Text Extractable
      let totalTextLength = 0;
      try {
        const maxPagesToScan = Math.min(pdf.numPages, 5);
        for (let i = 1; i <= maxPagesToScan; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          for (const item of textContent.items) {
            if ("str" in item) {
              totalTextLength += (item as { str: string }).str.trim().length;
            }
          }
        }
      } catch {
        // ignore
      }

      if (totalTextLength > 50) {
        results[6] = {
          ...results[6],
          status: "pass",
          detail: `Text is extractable (${totalTextLength.toLocaleString()} characters in first ${Math.min(pdf.numPages, 5)} pages).`,
        };
      } else if (totalTextLength > 0) {
        results[6] = {
          ...results[6],
          status: "warning",
          detail: `Very little text extracted (${totalTextLength} characters). This may be a scanned document with minimal OCR.`,
        };
      } else {
        results[6] = {
          ...results[6],
          status: "fail",
          detail: "No text could be extracted. This appears to be a scanned image PDF without OCR.",
        };
      }

      setChecks(results);
      setDone(true);
    } catch (err) {
      console.error("PDF analysis error:", err);
      setChecks(
        initialChecks.map((c) => ({
          ...c,
          status: "fail" as const,
          detail: "Error analyzing PDF. The file may be corrupted or password-protected.",
        }))
      );
      setDone(true);
    } finally {
      setAnalyzing(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type === "application/pdf") {
        analyzePdf(file);
      }
    },
    [analyzePdf]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        analyzePdf(file);
      }
    },
    [analyzePdf]
  );

  const passCount = checks.filter((c) => c.status === "pass").length;
  const failCount = checks.filter((c) => c.status === "fail").length;
  const warnCount = checks.filter((c) => c.status === "warning").length;
  const totalChecks = checks.length;

  const statusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        );
      case "fail":
        return (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-red-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        );
      case "warning":
        return (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M12 3l9.5 16.5H2.5L12 3z" />
            </svg>
          </span>
        );
      default:
        return (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-slate-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="3" strokeWidth={2} />
            </svg>
          </span>
        );
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const scoreColor =
    passCount === totalChecks
      ? "text-emerald-400"
      : passCount >= 5
        ? "text-amber-400"
        : "text-red-400";

  return (
    <div>
      {/* Privacy Badge */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your PDF never leaves your browser — 100% client-side
        </span>
      </div>

      {/* Upload Area */}
      <div
        className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 ${
          dragOver
            ? "border-sky-400 bg-sky-500/10"
            : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
        } ${analyzing ? "opacity-60 pointer-events-none" : "cursor-pointer"}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center py-12 px-6 text-center">
          {analyzing ? (
            <>
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-500 border-t-transparent mb-4" />
              <p className="text-lg font-semibold text-white">Analyzing {fileName}...</p>
              <p className="text-sm text-slate-400 mt-1">Running accessibility checks</p>
            </>
          ) : (
            <>
              <svg className="h-12 w-12 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-lg font-semibold text-white">
                Drop a PDF file here, or click to browse
              </p>
              <p className="text-sm text-slate-400 mt-1">
                PDF files only • Max 100MB • Processed entirely in your browser
              </p>
            </>
          )}
        </div>
      </div>

      {/* Results */}
      {done && (
        <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Score Summary */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Accessibility Score</p>
                <p className={`text-4xl font-bold ${scoreColor}`}>
                  {passCount}/{totalChecks} checks passed
                </p>
              </div>
              <div className="text-sm text-slate-400 text-right">
                <p className="font-medium text-white">{fileName}</p>
                <p>
                  {formatFileSize(fileSize)} · {pageCount} page{pageCount !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
            {/* Score bar */}
            <div className="mt-4 h-3 w-full rounded-full bg-slate-700 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  passCount === totalChecks
                    ? "bg-emerald-500"
                    : passCount >= 5
                      ? "bg-amber-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${(passCount / totalChecks) * 100}%` }}
              />
            </div>
            <div className="mt-2 flex gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {passCount} passed
              </span>
              {warnCount > 0 && (
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  {warnCount} warning{warnCount !== 1 ? "s" : ""}
                </span>
              )}
              {failCount > 0 && (
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  {failCount} failed
                </span>
              )}
            </div>
          </div>

          {/* Individual Checks */}
          <div className="space-y-3">
            {checks.map((check) => (
              <div
                key={check.id}
                className={`rounded-xl border p-4 transition-all ${
                  check.status === "pass"
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : check.status === "fail"
                      ? "border-red-500/20 bg-red-500/5"
                      : check.status === "warning"
                        ? "border-amber-500/20 bg-amber-500/5"
                        : "border-slate-700 bg-slate-800/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {statusIcon(check.status)}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white">{check.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{check.detail}</p>
                    {(check.status === "fail" || check.status === "warning") && (
                      <div className="mt-3 rounded-lg bg-slate-900/60 border border-slate-700/50 p-3">
                        <p className="text-xs font-medium text-sky-400 uppercase tracking-wider mb-1">
                          How to fix
                        </p>
                        <p className="text-sm text-slate-300">{check.recommendation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Re-check button */}
          <div className="text-center">
            <button
              onClick={() => {
                setDone(false);
                setFileName(null);
                setChecks(initialChecks);
                fileInputRef.current?.click();
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-all"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Check Another PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
