"use client";

import { useState, useCallback, useEffect } from "react";

// ─── Color math ────────────────────────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"))
      .join("")
  );
}

function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(fg: [number, number, number], bg: [number, number, number]): number {
  const l1 = relativeLuminance(...fg);
  const l2 = relativeLuminance(...bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ─── Types ─────────────────────────────────────────────────────────────────
interface WcagResult {
  label: string;
  ratio: number;
  required: number;
  pass: boolean;
}

// ─── Sub-components ────────────────────────────────────────────────────────

function ColorInput({
  label,
  hex,
  onHexChange,
  rgb,
  onRgbChange,
  id,
}: {
  label: string;
  hex: string;
  onHexChange: (v: string) => void;
  rgb: [number, number, number];
  onRgbChange: (v: [number, number, number]) => void;
  id: string;
}) {
  const [localHex, setLocalHex] = useState(hex);

  useEffect(() => {
    setLocalHex(hex);
  }, [hex]);

  const handleHexBlur = () => {
    const clean = localHex.startsWith("#") ? localHex : "#" + localHex;
    const parsed = hexToRgb(clean);
    if (parsed) {
      onHexChange(clean.toUpperCase());
    } else {
      setLocalHex(hex);
    }
  };

  const handleRgbChange = (idx: number, val: string) => {
    const n = Math.max(0, Math.min(255, parseInt(val) || 0));
    const next: [number, number, number] = [...rgb] as [number, number, number];
    next[idx] = n;
    onRgbChange(next);
  };

  return (
    <div className="flex-1">
      <label className="block text-sm font-semibold text-slate-300 mb-3">{label}</label>

      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <input
            type="color"
            value={hex.toLowerCase()}
            onChange={(e) => onHexChange(e.target.value.toUpperCase())}
            className="h-12 w-12 cursor-pointer rounded-lg border border-slate-600 bg-transparent p-0.5 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-md [&::-webkit-color-swatch]:border-none"
            aria-label={`${label} color picker`}
          />
        </div>
        <div className="flex-1">
          <label htmlFor={`${id}-hex`} className="sr-only">Hex value for {label}</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-mono">#</span>
            <input
              id={`${id}-hex`}
              type="text"
              value={localHex.replace("#", "")}
              onChange={(e) => setLocalHex("#" + e.target.value)}
              onBlur={handleHexBlur}
              onKeyDown={(e) => e.key === "Enter" && handleHexBlur()}
              maxLength={6}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 pl-7 pr-3 py-2.5 text-sm font-mono text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="000000"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {(["R", "G", "B"] as const).map((ch, i) => (
          <div key={ch}>
            <label htmlFor={`${id}-${ch}`} className="block text-xs text-slate-500 mb-1">
              {ch}
            </label>
            <input
              id={`${id}-${ch}`}
              type="number"
              min={0}
              max={255}
              value={rgb[i]}
              onChange={(e) => handleRgbChange(i, e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-2 text-sm font-mono text-white text-center focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Badge({ pass }: { pass: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
        pass
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-red-500/20 text-red-400 border border-red-500/30"
      }`}
    >
      {pass ? "✓ Pass" : "✗ Fail"}
    </span>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function ColorContrastChecker() {
  const [fgHex, setFgHex] = useState("#FFFFFF");
  const [bgHex, setBgHex] = useState("#1E293B");
  const [copied, setCopied] = useState(false);

  const fgRgb = hexToRgb(fgHex) ?? [255, 255, 255];
  const bgRgb = hexToRgb(bgHex) ?? [30, 41, 59];

  const ratio = contrastRatio(fgRgb as [number, number, number], bgRgb as [number, number, number]);
  const ratioStr = ratio.toFixed(2);

  const results: WcagResult[] = [
    { label: "AA Normal Text", ratio, required: 4.5, pass: ratio >= 4.5 },
    { label: "AA Large Text", ratio, required: 3, pass: ratio >= 3 },
    { label: "AAA Normal Text", ratio, required: 7, pass: ratio >= 7 },
    { label: "AAA Large Text", ratio, required: 4.5, pass: ratio >= 4.5 },
  ];

  const handleFgHex = useCallback((hex: string) => {
    const clean = hex.startsWith("#") ? hex : "#" + hex;
    if (hexToRgb(clean)) setFgHex(clean.toUpperCase());
  }, []);

  const handleBgHex = useCallback((hex: string) => {
    const clean = hex.startsWith("#") ? hex : "#" + hex;
    if (hexToRgb(clean)) setBgHex(clean.toUpperCase());
  }, []);

  const handleFgRgb = useCallback((rgb: [number, number, number]) => {
    setFgHex(rgbToHex(...rgb).toUpperCase());
  }, []);

  const handleBgRgb = useCallback((rgb: [number, number, number]) => {
    setBgHex(rgbToHex(...rgb).toUpperCase());
  }, []);

  const swap = () => {
    const prevFg = fgHex;
    const prevBg = bgHex;
    setFgHex(prevBg);
    setBgHex(prevFg);
  };

  const copyRatio = async () => {
    try {
      await navigator.clipboard.writeText(`${ratioStr}:1`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: ignore */
    }
  };

  const passCount = results.filter((r) => r.pass).length;

  return (
    <div className="space-y-8">
      {/* Color Pickers */}
      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-end">
          <ColorInput
            label="Foreground (Text) Color"
            hex={fgHex}
            onHexChange={handleFgHex}
            rgb={fgRgb as [number, number, number]}
            onRgbChange={handleFgRgb}
            id="fg"
          />

          {/* Swap button */}
          <div className="flex-shrink-0 self-center sm:self-end sm:pb-1">
            <button
              onClick={swap}
              className="rounded-full border border-slate-600 bg-slate-800 p-3 text-slate-300 transition hover:border-sky-500 hover:text-sky-400 hover:bg-slate-700"
              aria-label="Swap foreground and background colors"
              title="Swap colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          <ColorInput
            label="Background Color"
            hex={bgHex}
            onHexChange={handleBgHex}
            rgb={bgRgb as [number, number, number]}
            onRgbChange={handleBgRgb}
            id="bg"
          />
        </div>
      </div>

      {/* Contrast Ratio Display */}
      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8 text-center">
        <p className="text-sm text-slate-400 mb-2">Contrast Ratio</p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-5xl sm:text-6xl font-bold text-white font-mono tracking-tight">
            {ratioStr}
          </span>
          <span className="text-2xl text-slate-400 font-light">: 1</span>
        </div>
        <button
          onClick={copyRatio}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
        >
          {copied ? (
            <>
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Ratio
            </>
          )}
        </button>

        {/* Overall score indicator */}
        <div className="mt-4">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${
              passCount === 4
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : passCount >= 2
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {passCount === 4
              ? "✓ Passes all WCAG levels"
              : passCount >= 2
              ? "⚠ Partial WCAG compliance"
              : "✗ Fails most WCAG requirements"}
          </span>
        </div>
      </div>

      {/* WCAG Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {results.map((r) => (
          <div
            key={r.label}
            className={`rounded-xl border p-5 transition ${
              r.pass
                ? "border-green-500/30 bg-green-500/5"
                : "border-red-500/30 bg-red-500/5"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-white">WCAG {r.label}</h3>
              <Badge pass={r.pass} />
            </div>
            <p className="text-xs text-slate-400">
              Required ratio: <span className="font-mono text-slate-300">{r.required}:1</span>
              {r.label.includes("Large") && (
                <span className="ml-2 text-slate-500">(≥18pt or 14pt bold)</span>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Live Preview */}
      <div className="rounded-2xl border border-slate-700 overflow-hidden">
        <div className="px-6 py-3 border-b border-slate-700 bg-slate-900/80">
          <h3 className="text-sm font-semibold text-slate-300">Live Preview</h3>
        </div>
        <div className="p-8 space-y-4" style={{ backgroundColor: bgHex }}>
          <p className="text-2xl font-bold" style={{ color: fgHex }}>
            Large Text Preview (24px Bold)
          </p>
          <p className="text-lg" style={{ color: fgHex }}>
            This is 18pt text which qualifies as &ldquo;large text&rdquo; under WCAG guidelines. Large text has a lower contrast requirement of 3:1 for AA compliance.
          </p>
          <p className="text-base" style={{ color: fgHex }}>
            This is normal body text (16px). Under WCAG 2.1, normal text requires a minimum contrast ratio of 4.5:1 for Level AA and 7:1 for Level AAA compliance.
          </p>
          <p className="text-sm" style={{ color: fgHex }}>
            This is small text (14px) — the kind used in captions, footnotes, and UI labels. Good contrast here is essential for readability.
          </p>
          <div className="flex gap-3 pt-2">
            <button
              className="rounded-lg px-5 py-2.5 text-sm font-semibold border-2 transition"
              style={{ color: fgHex, borderColor: fgHex }}
            >
              Sample Button
            </button>
            <button
              className="rounded-lg px-5 py-2.5 text-sm font-semibold transition"
              style={{ backgroundColor: fgHex, color: bgHex }}
            >
              Filled Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
