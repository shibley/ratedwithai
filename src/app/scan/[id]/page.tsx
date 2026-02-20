'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import ScoreCircle from '@/components/ScoreCircle';

interface ScanResult {
  id: string;
  url: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  violations: Array<{
    id: string;
    impact: string;
    description: string;
    help: string;
    helpUrl: string;
    tags: string[];
    nodes: Array<{
      html: string;
      target: string[];
      failureSummary: string;
    }>;
  }>;
  violationsCount: number;
  passesCount: number;
  incompleteCount: number;
  timestamp: string;
}

export default function ScanResultPage() {
  const [result, setResult] = useState<ScanResult | null>(null);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load scan result from localStorage
    const storedResult = localStorage.getItem('scanResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500';
      case 'serious':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'moderate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'minor':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500';
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleScanAnother = () => {
    router.push('/');
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading scan results...</p>
        </div>
      </div>
    );
  }

  // Group violations by severity
  const violationsBySeverity = {
    critical: result.violations.filter(v => v.impact === 'critical'),
    serious: result.violations.filter(v => v.impact === 'serious'),
    moderate: result.violations.filter(v => v.impact === 'moderate'),
    minor: result.violations.filter(v => v.impact === 'minor'),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            RatedWithAI
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Score Circle */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <ScoreCircle grade={result.grade} score={result.score} size="lg" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Accessibility Score</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Scanned: <span className="text-blue-400">{result.url}</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {new Date(result.timestamp).toLocaleString()}
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-red-400 mb-2">{result.violationsCount}</div>
            <div className="text-slate-400">Issues Found</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">{result.passesCount}</div>
            <div className="text-slate-400">Tests Passed</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{result.incompleteCount}</div>
            <div className="text-slate-400">Needs Review</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleScanAnother}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition-all"
          >
            Scan Another Site
          </button>
          <button
            onClick={handleShare}
            className="px-6 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 font-semibold transition-all"
          >
            {copied ? '✓ Copied!' : 'Share Results'}
          </button>
        </div>

        {/* CTA for Monitoring */}
        {result.violationsCount > 0 && (
          <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Get Monitoring — Never Miss an Issue</h3>
            <p className="text-slate-300 mb-6">
              Automatically scan your site weekly and get instant email alerts when new accessibility issues appear.
            </p>
            <a
              href="/pricing"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition-all"
            >
              View Pricing Plans
            </a>
          </div>
        )}

        {/* Violations List */}
        {result.violationsCount > 0 ? (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Issues by Severity</h3>

            {/* Critical */}
            {violationsBySeverity.critical.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-red-400">
                  Critical ({violationsBySeverity.critical.length})
                </h4>
                <div className="space-y-4">
                  {violationsBySeverity.critical.map((violation, idx) => (
                    <div key={idx} className={`p-6 rounded-lg border ${getImpactColor('critical')}`}>
                      <h5 className="font-semibold mb-2">{violation.help}</h5>
                      <p className="text-sm text-slate-300 mb-3">{violation.description}</p>
                      <div className="text-sm mb-3">
                        <span className="text-slate-400">Affected elements: </span>
                        <span className="font-mono text-xs">{violation.nodes.length}</span>
                      </div>
                      <a
                        href={violation.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Learn more →
                      </a>
                      {violation.nodes.slice(0, 2).map((node, nodeIdx) => (
                        <div key={nodeIdx} className="mt-3 p-3 bg-slate-900/50 rounded text-xs font-mono overflow-x-auto">
                          <div className="text-slate-400 mb-1">Target: {node.target.join(' > ')}</div>
                          <div className="text-slate-500">{node.html.substring(0, 200)}{node.html.length > 200 ? '...' : ''}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Serious */}
            {violationsBySeverity.serious.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-orange-400">
                  Serious ({violationsBySeverity.serious.length})
                </h4>
                <div className="space-y-4">
                  {violationsBySeverity.serious.map((violation, idx) => (
                    <div key={idx} className={`p-6 rounded-lg border ${getImpactColor('serious')}`}>
                      <h5 className="font-semibold mb-2">{violation.help}</h5>
                      <p className="text-sm text-slate-300 mb-3">{violation.description}</p>
                      <div className="text-sm mb-3">
                        <span className="text-slate-400">Affected elements: </span>
                        <span className="font-mono text-xs">{violation.nodes.length}</span>
                      </div>
                      <a
                        href={violation.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Learn more →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Moderate */}
            {violationsBySeverity.moderate.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-yellow-400">
                  Moderate ({violationsBySeverity.moderate.length})
                </h4>
                <div className="space-y-4">
                  {violationsBySeverity.moderate.map((violation, idx) => (
                    <div key={idx} className={`p-6 rounded-lg border ${getImpactColor('moderate')}`}>
                      <h5 className="font-semibold mb-2">{violation.help}</h5>
                      <p className="text-sm text-slate-300 mb-3">{violation.description}</p>
                      <div className="text-sm mb-3">
                        <span className="text-slate-400">Affected elements: </span>
                        <span className="font-mono text-xs">{violation.nodes.length}</span>
                      </div>
                      <a
                        href={violation.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Learn more →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Minor */}
            {violationsBySeverity.minor.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">
                  Minor ({violationsBySeverity.minor.length})
                </h4>
                <div className="space-y-4">
                  {violationsBySeverity.minor.map((violation, idx) => (
                    <div key={idx} className={`p-6 rounded-lg border ${getImpactColor('minor')}`}>
                      <h5 className="font-semibold mb-2">{violation.help}</h5>
                      <p className="text-sm text-slate-300 mb-3">{violation.description}</p>
                      <div className="text-sm mb-3">
                        <span className="text-slate-400">Affected elements: </span>
                        <span className="font-mono text-xs">{violation.nodes.length}</span>
                      </div>
                      <a
                        href={violation.helpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Learn more →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center bg-green-500/20 border border-green-500 rounded-lg p-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-3">Congratulations!</h3>
            <p className="text-slate-300">
              No accessibility violations were found on this page. Your website is doing great!
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-400 text-center">
          <p>
            ⚠️ This automated scan identifies common accessibility issues but is not a substitute for manual testing or legal advice.
            Consult with an accessibility expert and attorney for comprehensive compliance guidance.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
