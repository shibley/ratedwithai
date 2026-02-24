"use client";

import { useState, useCallback, useRef } from "react";

interface AltTextResult {
  concise: string;
  descriptive: string;
  isDecorative: boolean;
  decorativeReason: string;
  context: string;
}

const MAX_GENERATIONS = 10;
const SESSION_KEY = "alt-text-gen-count";

function getSessionCount(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(sessionStorage.getItem(SESSION_KEY) || "0", 10);
}

function incrementSessionCount(): number {
  const count = getSessionCount() + 1;
  sessionStorage.setItem(SESSION_KEY, String(count));
  return count;
}

export default function AltTextGenerator() {
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageSource, setImageSource] = useState<"file" | "url" | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [result, setResult] = useState<AltTextResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [genCount, setGenCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPEG, PNG, GIF, WebP).");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB.");
      return;
    }
    setError(null);
    setResult(null);
    setImageSource("file");
    setImageUrl("");

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setImagePreview(dataUrl);
      // Extract base64 from data URL
      const base64 = dataUrl.split(",")[1];
      setImageBase64(base64);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragActive(false);
  }, []);

  const handleUrlSubmit = useCallback(() => {
    if (!imageUrl.trim()) return;
    try {
      new URL(imageUrl);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }
    setError(null);
    setResult(null);
    setImageSource("url");
    setImageBase64(null);
    setImagePreview(imageUrl);
  }, [imageUrl]);

  const handleGenerate = useCallback(async () => {
    const count = getSessionCount();
    if (count >= MAX_GENERATIONS) {
      setError(
        `You've reached the limit of ${MAX_GENERATIONS} generations per session. Refresh the page to reset.`
      );
      return;
    }

    if (!imageBase64 && !imageUrl) {
      setError("Please upload an image or enter an image URL first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const body: Record<string, string> = {};
      if (imageSource === "file" && imageBase64) {
        body.imageBase64 = imageBase64;
      } else if (imageSource === "url" && imageUrl) {
        body.imageUrl = imageUrl;
      } else {
        setError("Please upload an image or enter an image URL.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/generate-alt-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to generate alt text");
      }

      const data = await response.json();
      setResult(data);
      const newCount = incrementSessionCount();
      setGenCount(newCount);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate alt text"
      );
    } finally {
      setLoading(false);
    }
  }, [imageBase64, imageUrl, imageSource]);

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  const handleReset = useCallback(() => {
    setImageUrl("");
    setImagePreview(null);
    setImageSource(null);
    setImageBase64(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const remaining = MAX_GENERATIONS - genCount;

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button
            onClick={() => {
              setImageSource(null);
              setResult(null);
              setError(null);
              setImagePreview(null);
              setImageBase64(null);
            }}
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              imageSource !== "url"
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                : "bg-slate-700/50 text-slate-400 border border-slate-600 hover:text-slate-200"
            }`}
          >
            📁 Upload Image
          </button>
          <button
            onClick={() => {
              setImageSource("url");
              setResult(null);
              setError(null);
              setImagePreview(null);
              setImageBase64(null);
            }}
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              imageSource === "url"
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                : "bg-slate-700/50 text-slate-400 border border-slate-600 hover:text-slate-200"
            }`}
          >
            🔗 Image URL
          </button>
        </div>

        {imageSource !== "url" ? (
          /* Drop Zone */
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 sm:p-12 cursor-pointer transition-all ${
              dragActive
                ? "border-sky-400 bg-sky-500/10"
                : "border-slate-600 bg-slate-900/50 hover:border-slate-500 hover:bg-slate-900/80"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            <svg
              className="h-10 w-10 text-slate-500 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-slate-400">
              <span className="text-sky-400 font-medium">Click to upload</span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-slate-500 mt-1">
              JPEG, PNG, GIF, or WebP — max 5MB
            </p>
          </div>
        ) : (
          /* URL Input */
          <div className="flex gap-2">
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
              placeholder="https://example.com/image.jpg"
              className="flex-1 rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <button
              onClick={handleUrlSubmit}
              className="rounded-lg bg-slate-700 px-4 py-3 text-sm font-medium text-slate-200 hover:bg-slate-600 transition"
            >
              Load
            </button>
          </div>
        )}

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4 relative">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-500">Image preview</p>
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-red-400 transition"
              >
                ✕ Remove
              </button>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center max-h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Preview of uploaded image"
                className="max-h-64 max-w-full object-contain"
                onError={() => {
                  setError("Could not load image. Please check the URL.");
                  setImagePreview(null);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Generate Button */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleGenerate}
          disabled={loading || (!imageBase64 && !imagePreview)}
          className="w-full sm:w-auto rounded-xl bg-sky-500 px-8 py-3.5 text-base font-bold text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-sky-500"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Analyzing Image…
            </span>
          ) : (
            "Generate Alt Text"
          )}
        </button>
        <p className="text-xs text-slate-500">
          {remaining > 0
            ? `${remaining} generation${remaining === 1 ? "" : "s"} remaining this session`
            : "Session limit reached — refresh to reset"}
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {result.isDecorative ? (
            /* Decorative Image */
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-amber-300">
                    This appears to be a decorative image
                  </h3>
                  <p className="text-sm text-amber-200/80 mt-1">
                    {result.decorativeReason}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <code className="rounded bg-slate-900 px-3 py-1.5 text-sm text-amber-300 font-mono">
                      alt=&quot;&quot;
                    </code>
                    <button
                      onClick={() => copyToClipboard('alt=""', "decorative")}
                      className="rounded-lg bg-amber-500/20 px-3 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/30 transition"
                    >
                      {copied === "decorative" ? "✓ Copied!" : "Copy"}
                    </button>
                  </div>
                  <p className="text-xs text-amber-200/60 mt-2">
                    Use an empty alt attribute so screen readers skip this
                    image entirely.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Concise Alt Text */}
              <div className="rounded-xl border border-sky-500/30 bg-slate-800/50 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider">
                    Concise Alt Text
                  </h3>
                  <span className="text-xs text-slate-500">
                    {result.concise.length}/125 chars
                  </span>
                </div>
                <p className="text-white font-medium leading-relaxed">
                  {result.concise}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <code className="flex-1 rounded bg-slate-900 px-3 py-2 text-sm text-slate-300 font-mono overflow-x-auto">
                    alt=&quot;{result.concise}&quot;
                  </code>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `alt="${result.concise}"`,
                        "concise"
                      )
                    }
                    className="shrink-0 rounded-lg bg-sky-500/20 px-3 py-2 text-xs font-medium text-sky-400 hover:bg-sky-500/30 transition"
                  >
                    {copied === "concise" ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Descriptive Alt Text */}
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                    Descriptive Alt Text
                  </h3>
                  <span className="text-xs text-slate-500">
                    {result.descriptive.length} chars
                  </span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {result.descriptive}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <code className="flex-1 rounded bg-slate-900 px-3 py-2 text-sm text-slate-300 font-mono overflow-x-auto">
                    alt=&quot;{result.descriptive}&quot;
                  </code>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `alt="${result.descriptive}"`,
                        "descriptive"
                      )
                    }
                    className="shrink-0 rounded-lg bg-purple-500/20 px-3 py-2 text-xs font-medium text-purple-400 hover:bg-purple-500/30 transition"
                  >
                    {copied === "descriptive" ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Context */}
          {result.context && (
            <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-medium">
                AI Notes
              </p>
              <p className="text-sm text-slate-400">{result.context}</p>
            </div>
          )}
        </div>
      )}

      {/* Tips Section */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6 mt-2">
        <h3 className="text-lg font-bold text-white mb-4">
          ✍️ Quick Alt Text Tips
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="space-y-3">
            <div>
              <p className="font-medium text-emerald-400">
                ✅ Do
              </p>
              <ul className="text-slate-400 mt-1 space-y-1 list-disc list-inside">
                <li>Be specific and concise</li>
                <li>Describe the content and function</li>
                <li>Include text visible in the image</li>
                <li>Keep under 125 characters when possible</li>
                <li>
                  Use <code className="text-sky-400">alt=&quot;&quot;</code> for
                  decorative images
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-400">
                ❌ Don&apos;t
              </p>
              <ul className="text-slate-400 mt-1 space-y-1 list-disc list-inside">
                <li>
                  Start with &quot;Image of&quot; or &quot;Photo of&quot;
                </li>
                <li>Use filenames as alt text</li>
                <li>Leave alt attributes missing entirely</li>
                <li>Stuff keywords for SEO</li>
                <li>Describe purely visual aesthetics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
