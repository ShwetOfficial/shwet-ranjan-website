"use client";

import React, { useState } from "react";
import {
  Upload,
  Check,
  X,
  Sparkles,
  FileSpreadsheet,
  Zap,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Send,
  Plus,
  BarChart3,
  Bot,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Globe,
  Sliders,
  Award,
  Layers,
  PieChart,
  Download,
  Lock,
  Eye
} from "lucide-react";

// ==========================================
// 1. FILING AUTOMATION INTERACTIVE SIMULATOR
// ==========================================
export function FilingAutomationSimulator() {
  const [selectedPlatform, setSelectedPlatform] = useState("Auto-Detect (All Platforms)");
  const [periodType, setPeriodType] = useState<"monthly" | "quarterly">("monthly");
  const [selectedMonth, setSelectedMonth] = useState("August 2026");
  const [selectedQuarter, setSelectedQuarter] = useState("Q2 FY 2026-27 (Jul - Sep)");
  const [selectedClient, setSelectedClient] = useState("Neelkanth Enterprises — GSTIN: 19AUEPG0367J1ZK");
  const [isUploaded, setIsUploaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const platforms = [
    "Auto-Detect (All Platforms)",
    "Flipkart",
    "Amazon",
    "Meesho",
    "Myntra",
    "Ajio",
    "1mg",
    "B2B",
    "B2C"
  ];

  const handleSimulateUpload = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsUploaded(true);
    }, 1200);
  };

  return (
    <div className="space-y-4">
      {/* Access Control & Dummy Notice Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono">
        <div className="flex items-center gap-2 text-amber-300 font-bold">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — Illustrative Tax Engine Data Only</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] font-bold">
          <Lock className="w-3 h-3 text-amber-400" />
          <span>Internal Company Team & Enterprise Client Access Only</span>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Inputs */}
        <div className="space-y-3">
          <div>
            <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
              Select Client *
            </label>
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-cobalt-500"
            >
              <option>Neelkanth Enterprises — GSTIN: 19AUEPG0367J1ZK</option>
              <option>Apex Digital Commerce Ltd — GSTIN: 27AABCA1234F1Z5</option>
              <option>Zenith Logistics LLP — GSTIN: 07AAACZ9988H1Z2</option>
            </select>
          </div>

          {/* Period Selection (Monthly vs Quarterly) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Select Filing Period Type
              </label>
              <div className="inline-flex p-0.5 rounded-md bg-zinc-900 border border-zinc-800 font-mono text-[10px]">
                <button
                  type="button"
                  onClick={() => setPeriodType("monthly")}
                  className={`px-2.5 py-0.5 rounded font-bold transition-all ${
                    periodType === "monthly" ? "bg-cobalt-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setPeriodType("quarterly")}
                  className={`px-2.5 py-0.5 rounded font-bold transition-all ${
                    periodType === "quarterly" ? "bg-cobalt-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Quarterly
                </button>
              </div>
            </div>

            {periodType === "monthly" ? (
              <div>
                <label className="text-[10px] font-mono text-zinc-500 block mb-1">
                  Select Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-cobalt-500"
                >
                  <option>August 2026</option>
                  <option>July 2026</option>
                  <option>June 2026</option>
                  <option>May 2026</option>
                  <option>April 2026</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="text-[10px] font-mono text-zinc-500 block mb-1">
                  Select Quarter
                </label>
                <select
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-cobalt-500"
                >
                  <option>Q2 FY 2026-27 (Jul - Sep)</option>
                  <option>Q1 FY 2026-27 (Apr - Jun)</option>
                  <option>Q4 FY 2025-26 (Jan - Mar)</option>
                  <option>Q3 FY 2025-26 (Oct - Dec)</option>
                </select>
              </div>
            )}
          </div>

          <div>
            <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
              Platform Format Engine
            </label>
            <div className="flex flex-wrap gap-1.5">
              {platforms.slice(0, 5).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPlatform(p)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                    selectedPlatform === p
                      ? "bg-cobalt-600 text-white font-bold shadow-sm"
                      : "bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Drag & Drop Interactive Zone */}
        <div className="flex flex-col justify-between p-5 rounded-xl border-2 border-dashed border-cobalt-500/40 bg-cobalt-500/5 hover:border-cobalt-500 transition-all text-center">
          <div>
            <Upload className="w-8 h-8 text-cobalt-400 mx-auto mb-2 animate-bounce" />
            <h5 className="font-display text-xs font-bold text-white mb-1">
              Upload Sales Reports
            </h5>
            <p className="font-sans text-[11px] text-zinc-400 mb-3">
              Drag & drop CSV/Excel from Flipkart, Amazon, Meesho or click below
            </p>
          </div>

          <button
            onClick={handleSimulateUpload}
            disabled={isProcessing}
            className="w-full py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cobalt-600/30"
          >
            {isProcessing ? (
              <span>Running Automation Engine...</span>
            ) : isUploaded ? (
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Check className="w-4 h-4" /> Re-upload Sales File
              </span>
            ) : (
              <span>Simulate Sales Report Ingestion</span>
            )}
          </button>
        </div>
      </div>

      {/* Processed Output Status Banner */}
      {isUploaded && (
        <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-mono space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between font-bold text-emerald-400">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> 1,420 Sales Line-Items Processed Successfully!
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
              {periodType === "monthly" ? selectedMonth : selectedQuarter}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/20 text-[11px]">
            <div>CGST Calculated: <strong className="text-white">₹48,210.50</strong></div>
            <div>SGST Calculated: <strong className="text-white">₹48,210.50</strong></div>
            <div>IGST Calculated: <strong className="text-white">₹96,421.00</strong></div>
          </div>
          <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-300">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Government GSTR-1 & GSTR-3B Excel Templates Ready for Tax Filing!</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. ENTERPRISE CRM INTERACTIVE SIMULATOR
// ==========================================
export function EnterpriseCrmSimulator() {
  const [tasks, setTasks] = useState([
    {
      id: "JUBS-8516",
      title: "GST Filing [JUL-2026]",
      client: "Neelkanth Enterprises — GSTIN: 19AUEPG0367J1ZK",
      daysLeft: 8,
      status: "pending"
    },
    {
      id: "ZVBW-4679",
      title: "GST Filing [AUG-2026]",
      client: "Neelkanth Enterprises — GSTIN: 19AUEPG0367J1ZK",
      daysLeft: 14,
      status: "pending"
    },
    {
      id: "GVCT-9102",
      title: "Income Tax Return [AY-2025-26]",
      client: "Apex Digital Commerce Ltd — GSTIN: 27AABCA1234F1Z5",
      daysLeft: 291,
      status: "pending"
    }
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === "pending" ? "completed" : "pending" } : t));
  };

  return (
    <div className="space-y-4">
      {/* Access Control & Dummy Notice Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono">
        <div className="flex items-center gap-2 text-amber-300 font-bold">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — Illustrative CRM Operations Data Only</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] font-bold">
          <Lock className="w-3 h-3 text-amber-400" />
          <span>Internal Company Team & Enterprise Client Access Only</span>
        </div>
      </div>

      {/* CRM Task Operations Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950">
        <table className="w-full text-left font-mono text-xs">
          <thead className="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
            <tr>
              <th className="p-3">Job ID</th>
              <th className="p-3">Compliance Task Title</th>
              <th className="p-3">Enterprise Client</th>
              <th className="p-3">Deadline</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900 text-zinc-300">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-zinc-900/50 transition-colors">
                <td className="p-3 font-bold text-cobalt-400">{task.id}</td>
                <td className="p-3 font-bold text-white">{task.title}</td>
                <td className="p-3 text-zinc-400">{task.client}</td>
                <td className="p-3 text-amber-400 font-bold">{task.daysLeft} Days Left</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      task.status === "completed"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-cobalt-600 hover:bg-cobalt-500 text-white"
                    }`}
                  >
                    {task.status === "completed" ? "✓ Done" : "Mark Filed"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================
// 3. INVOICING APP INTERACTIVE SIMULATOR
// ==========================================
export function InvoicingAppSimulator() {
  const [timeRange, setTimeRange] = useState<"6months" | "q2_2026" | "allTime">("6months");

  const timeRangeData = {
    "6months": {
      gst: "₹16,199.97",
      sales: "₹106,199.80",
      pending: "₹12,450.00",
      trend: "↑ +14.2% vs last month",
      path: "M0 90 Q 100 70, 200 85 T 400 30 T 600 10 L 600 120 L 0 120 Z",
      stroke: "M0 90 Q 100 70, 200 85 T 400 30 T 600 10",
      labels: ["Mar: ₹30k", "Apr: ₹45k", "May: ₹60k", "Jun: ₹75k", "Jul: ₹90k", "Aug: ₹106k"]
    },
    "q2_2026": {
      gst: "₹42,800.00",
      sales: "₹280,400.00",
      pending: "₹18,200.00",
      trend: "↑ +22.4% quarterly growth",
      path: "M0 85 Q 150 45, 300 60 T 600 8 L 600 120 L 0 120 Z",
      stroke: "M0 85 Q 150 45, 300 60 T 600 8",
      labels: ["Jul: ₹85k", "Aug: ₹98k", "Sep: ₹97k", "Quarter Total: ₹280.4k"]
    },
    "allTime": {
      gst: "₹128,500.00",
      sales: "₹840,000.00",
      pending: "₹45,600.00",
      trend: "↑ +180.5% lifetime growth",
      path: "M0 95 Q 120 70, 240 50 T 480 20 T 600 2 L 600 120 L 0 120 Z",
      stroke: "M0 95 Q 120 70, 240 50 T 480 20 T 600 2",
      labels: ["FY 21: ₹120k", "FY 22: ₹180k", "FY 23: ₹240k", "FY 24: ₹350k", "FY 25: ₹580k", "FY 26: ₹840k"]
    }
  };

  const current = timeRangeData[timeRange];

  return (
    <div className="space-y-4">
      {/* Access Control & Dummy Notice Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-300 font-bold">
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — Illustrative Invoicing Ledger</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
          <Globe className="w-3 h-3" />
          <span>Public Access Web App</span>
        </div>
      </div>

      {/* Financial Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
            <span>EST. OUTPUT GST</span>
            <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse" />
          </div>
          <p className="font-display text-2xl font-black text-white">{current.gst}</p>
          <span className="text-[10px] font-mono text-emerald-400 mt-1 block">{current.trend}</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
            <span>TOTAL SALES</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <p className="font-display text-2xl font-black text-emerald-400">{current.sales}</p>
          <span className="text-[10px] font-mono text-zinc-500 mt-1 block">Verified sales ledger</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
            <span>PENDING PAYMENTS</span>
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
          <p className="font-display text-2xl font-black text-amber-400">{current.pending}</p>
          <span className="text-[10px] font-mono text-amber-400/80 mt-1 block">Outstanding customer invoices</span>
        </div>
      </div>

      {/* Interactive Sales Performance Chart Simulated Preview */}
      <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
            Sales Performance Analytics
          </span>
          <div className="flex items-center gap-1.5">
            {[
              { id: "6months", label: "LAST 6 MONTHS" },
              { id: "q2_2026", label: "Q2 2026" },
              { id: "allTime", label: "ALL TIME" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTimeRange(tab.id as any)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  timeRange === tab.id
                    ? "bg-cobalt-600 text-white shadow-md shadow-cobalt-600/30 scale-105"
                    : "bg-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Simulated SVG Graph Line */}
        <div className="h-28 w-full relative flex items-end justify-between gap-2 pt-4 px-2">
          <svg className="absolute inset-0 w-full h-full text-cobalt-500/20" preserveAspectRatio="none">
            <path
              d={current.path}
              fill="currentColor"
            />
            <path
              d={current.stroke}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
          </svg>
          <div className="relative z-10 w-full flex items-end justify-between font-mono text-[10px] text-zinc-400 pt-20">
            {current.labels.map((lbl, idx) => (
              <span key={idx} className={idx === current.labels.length - 1 ? "text-cobalt-400 font-bold" : ""}>
                {lbl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. VERIFYREELS.COM INTERACTIVE SIMULATOR
// ==========================================
export function VerifyReelsSimulator() {
  const [videoUrl, setVideoUrl] = useState("https://www.instagram.com/reel/C-892x0KlpM/");
  const [creditMode, setCreditMode] = useState<"standard" | "deep">("standard");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { score: number; claims: string[]; verdict: string }>(null);

  const sampleTopics = [
    { label: "🍋 Lemon Water Weight Loss", url: "https://instagram.com/reel/lemon_water_claim" },
    { label: "💸 ₹10k/day Autopilot Scam", url: "https://youtube.com/shorts/autopilot_scam" },
    { label: "🤖 Deepfake: Celebrity Promo", url: "https://x.com/tech_insider/status/1820" },
  ];

  const handleRunCheck = () => {
    setIsAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        score: creditMode === "deep" ? 35 : 42,
        claims: [
          "Claim 1: Drinking warm lemon water burns 500 kcal automatically — FALSE (No clinical proof).",
          "Claim 2: Alkaline water permanently changes blood pH — MISLEADING (Renal homeostasis balances pH).",
        ],
        verdict: creditMode === "deep" ? "HIGH MISINFORMATION RISK (35% Accuracy)" : "PARTIALLY MISLEADING (42% Accuracy)"
      });
    }, 1500);
  };

  return (
    <div className="space-y-4">
      {/* Access Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-300 font-bold">
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — Illustrative Fact-Check Scanner</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
          <Globe className="w-3 h-3" />
          <span>Public Access Web App</span>
        </div>
      </div>

      {/* Scanner Control Box */}
      <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-emerald-400" />
            <span className="font-display font-bold text-xs text-white">SOURCE-AWARE AI REEL SCANNER</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
            10 Credits Available
          </span>
        </div>

        {/* Input Link Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste Instagram, YouTube, X, TikTok, or Facebook video link..."
            className="w-full flex-1 bg-black/60 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={handleRunCheck}
            disabled={isAnalyzing}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 shrink-0"
          >
            {isAnalyzing ? (
              <span>Transcribing & Fact-Checking...</span>
            ) : (
              <span>Check Reel Now ⚡</span>
            )}
          </button>
        </div>

        {/* Mode Toggles */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => setCreditMode("standard")}
            className={`p-2.5 rounded-lg text-left text-xs font-mono transition-all ${
              creditMode === "standard"
                ? "bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-bold"
                : "bg-zinc-800/80 border border-zinc-700 text-zinc-400"
            }`}
          >
            <div className="font-bold block">1. Standard (1 credit)</div>
            <div className="text-[10px] opacity-80">Fast transcript analysis & quick check</div>
          </button>

          <button
            onClick={() => setCreditMode("deep")}
            className={`p-2.5 rounded-lg text-left text-xs font-mono transition-all ${
              creditMode === "deep"
                ? "bg-cobalt-500/20 border border-cobalt-500 text-cobalt-300 font-bold"
                : "bg-zinc-800/80 border border-zinc-700 text-zinc-400"
            }`}
          >
            <div className="font-bold block">2. Deep Search (2 credits)</div>
            <div className="text-[10px] opacity-80">Live web source verification</div>
          </button>
        </div>

        {/* Quick Test Chips */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-400">
          <span>Test Instantly:</span>
          {sampleTopics.map((topic) => (
            <button
              key={topic.label}
              onClick={() => {
                setVideoUrl(topic.url);
                handleRunCheck();
              }}
              className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Card */}
      {result && (
        <div className="p-4 rounded-xl bg-zinc-900 border border-red-500/40 text-xs font-mono space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> VERDICT: {result.verdict}
            </span>
            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px]">
              Accuracy Score: {result.score}%
            </span>
          </div>

          <div className="space-y-1 pt-2 border-t border-zinc-800 text-zinc-300 text-[11px]">
            {result.claims.map((claim, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>{claim}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[10px] text-zinc-400">
            <span>Verified via Live Web Engine</span>
            <span className="text-emerald-400 flex items-center gap-1 font-bold">
              <MessageSquare className="w-3 h-3" /> WhatsApp Bot Integrated
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 5. GST CHROME EXTENSION INTERACTIVE SIMULATOR
// ==========================================
export function GstExtensionSimulator() {
  const [activeMatrix, setActiveMatrix] = useState("GSTR-1 vs GSTR-3B");
  const [downloadingState, setDownloadingState] = useState<"csv" | "json" | null>(null);
  const [downloadMsg, setDownloadMsg] = useState("");

  const matrixDatasets: {
    [key: string]: {
      headers: string[];
      rows: { col1: string; col2: string; col3: string; col4: string; col5: string; diff: string; isDiff: boolean }[];
    };
  } = {
    "GSTR-1 vs GSTR-3B": {
      headers: ["Month", "R1 Taxable", "R1 IGST", "3B Taxable", "3B IGST", "Diff Taxable"],
      rows: [
        { col1: "042023", col2: "₹895,941.19", col3: "₹29,706.07", col4: "₹895,941.19", col5: "₹29,706.07", diff: "₹0.00", isDiff: false },
        { col1: "052023", col2: "₹800,998.67", col3: "₹22,935.06", col4: "₹802,974.70", col5: "₹23,026.03", diff: "-₹1,976.03", isDiff: true },
        { col1: "062023", col2: "₹742,026.38", col3: "₹30,367.39", col4: "₹742,026.38", col5: "₹30,367.39", diff: "₹0.00", isDiff: false },
        { col1: "072023", col2: "₹921,186.79", col3: "₹31,365.22", col4: "₹921,186.79", col5: "₹31,365.22", diff: "₹0.00", isDiff: false },
      ]
    },
    "GSTR-1 vs GSTR-3B (State-wise)": {
      headers: ["State Code", "State Name", "R1 Taxable", "R1 Tax", "3B Taxable", "Diff Mismatch"],
      rows: [
        { col1: "27-MH", col2: "Maharashtra", col3: "₹1,240,500.00", col4: "₹223,290.00", col5: "₹1,240,500.00", diff: "₹0.00", isDiff: false },
        { col1: "19-WB", col2: "West Bengal", col3: "₹895,941.19", col4: "₹161,269.41", col5: "₹895,941.19", diff: "₹0.00", isDiff: false },
        { col1: "07-DL", col2: "Delhi (NCR)", col3: "₹650,200.00", col4: "₹117,036.00", col5: "₹645,380.00", diff: "-₹4,820.00", isDiff: true },
        { col1: "33-TN", col2: "Tamil Nadu", col3: "₹480,100.00", col4: "₹86,418.00", col5: "₹480,100.00", diff: "₹0.00", isDiff: false },
      ]
    },
    "GSTR-3B vs GSTR-2B": {
      headers: ["Month", "3B Claimed ITC", "3B IGST", "2B Auto ITC", "2B IGST", "Locked Delinquencies"],
      rows: [
        { col1: "042023", col2: "₹142,500.00", col3: "₹25,650.00", col4: "₹142,500.00", col5: "₹25,650.00", diff: "₹0.00", isDiff: false },
        { col1: "052023", col2: "₹128,400.00", col3: "₹23,112.00", col4: "₹115,200.00", col5: "₹20,736.00", diff: "-₹13,200.00 (Locked)", isDiff: true },
        { col1: "062023", col2: "₹156,000.00", col3: "₹28,080.00", col4: "₹156,000.00", col5: "₹28,080.00", diff: "₹0.00", isDiff: false },
        { col1: "072023", col2: "₹180,200.00", col3: "₹32,436.00", col4: "₹180,200.00", col5: "₹32,436.00", diff: "₹0.00", isDiff: false },
      ]
    },
    "TDS & TCS vs GSTR-3B": {
      headers: ["Month", "Sec 51 TDS Credit", "Sec 52 TCS Credit", "Cash Ledger Credit", "3B Offset Used", "Net Difference"],
      rows: [
        { col1: "042023", col2: "₹12,400.00", col3: "₹8,500.00", col4: "₹20,900.00", col5: "₹20,900.00", diff: "₹0.00 Verified", isDiff: false },
        { col1: "052023", col2: "₹10,800.00", col3: "₹7,200.00", col4: "₹18,000.00", col5: "₹18,000.00", diff: "₹0.00 Verified", isDiff: false },
        { col1: "062023", col2: "₹14,100.00", col3: "₹9,800.00", col4: "₹23,900.00", col5: "₹23,900.00", diff: "₹0.00 Verified", isDiff: false },
        { col1: "072023", col2: "₹16,500.00", col3: "₹11,200.00", col4: "₹27,700.00", col5: "₹27,700.00", diff: "₹0.00 Verified", isDiff: false },
      ]
    }
  };

  const currentDataset = matrixDatasets[activeMatrix] || matrixDatasets["GSTR-1 vs GSTR-3B"];

  const handleDownload = (type: "csv" | "json") => {
    setDownloadingState(type);
    setDownloadMsg(type === "csv" ? "Generating GSTR1_FY2025-26_Audit_Report.csv..." : "Archiving GSTR_2B_Raw_Payload.zip...");
    setTimeout(() => {
      setDownloadMsg(type === "csv" ? "✓ Downloaded GSTR1_FY2025-26_Audit_Report.csv!" : "✓ Downloaded GSTR_2B_Raw_Payload.zip!");
      setTimeout(() => {
        setDownloadingState(null);
        setDownloadMsg("");
      }, 2500);
    }, 1200);
  };

  return (
    <div className="space-y-3">
      {/* Access Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-300 font-bold">
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — Chrome Extension DOM Injection</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] font-bold">
          <Lock className="w-3 h-3 text-amber-400" />
          <span>Internal Team & Extension Automation</span>
        </div>
      </div>

      {/* Top Banner on GST Portal */}
      <div className="p-2.5 sm:p-3 rounded-lg bg-cobalt-600 text-white font-mono text-xs font-bold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-md">
        <span className="flex items-center gap-2 leading-tight">
          <Zap className="w-4 h-4 text-yellow-300 shrink-0 animate-pulse" />
          <span>Taxamicus Extension: Checking GST Notices silently...</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-black/30 text-cobalt-200 text-[10px] shrink-0 font-mono">
          GSTIN: 19AUEPG0367J1ZK
        </span>
      </div>

      {/* Extension Dropdown Menu Simulator */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-zinc-400 font-bold shrink-0">Reconciliation Matrix:</span>
          <select
            value={activeMatrix}
            onChange={(e) => setActiveMatrix(e.target.value)}
            className="bg-black border border-cobalt-500/50 rounded px-2.5 py-1 text-cobalt-300 font-bold focus:outline-none max-w-full text-xs truncate"
          >
            <option>GSTR-1 vs GSTR-3B</option>
            <option>GSTR-1 vs GSTR-3B (State-wise)</option>
            <option>GSTR-3B vs GSTR-2B</option>
            <option>TDS & TCS vs GSTR-3B</option>
          </select>
        </div>

        {/* Download Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDownload("csv")}
            disabled={downloadingState !== null}
            className="flex-1 sm:flex-initial px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-cobalt-600 text-zinc-200 hover:text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1"
          >
            <Download className="w-3 h-3 text-cobalt-400 shrink-0" />
            <span>GSTR-1 FY CSV</span>
          </button>

          <button
            onClick={() => handleDownload("json")}
            disabled={downloadingState !== null}
            className="flex-1 sm:flex-initial px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-emerald-600 text-zinc-200 hover:text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1"
          >
            <Download className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Raw JSON Archive (.zip)</span>
          </button>
        </div>
      </div>

      {/* Download Status Toast */}
      {downloadMsg && (
        <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center justify-between animate-fadeIn">
          <span>{downloadMsg}</span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        </div>
      )}

      {/* Simulated Live Table */}
      <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 w-full touch-pan-x">
        <table className="w-full text-left font-mono text-[11px] min-w-[540px]">
          <thead className="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
            <tr>
              {currentDataset.headers.map((h, i) => (
                <th key={h} className={`p-2.5 ${i === currentDataset.headers.length - 1 ? "text-right" : ""}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900 text-zinc-300">
            {currentDataset.rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                <td className="p-2.5 font-bold text-cobalt-400">{row.col1}</td>
                <td className="p-2.5">{row.col2}</td>
                <td className="p-2.5">{row.col3}</td>
                <td className="p-2">{row.col4}</td>
                <td className="p-2">{row.col5}</td>
                <td className={`p-2 text-right font-bold ${!row.isDiff ? "text-emerald-400" : "text-red-400 bg-red-950/40"}`}>
                  {row.diff}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ====================================================
// 6. STOCK MARKET DUAL-HORIZON INVESTING TERMINAL
// ====================================================
export function StockMarketInvestingSimulator() {
  const [selectedTicker, setSelectedTicker] = useState("TITAN");
  const [strategy, setStrategy] = useState<"buffett" | "lynch">("buffett");
  const [scenario, setScenario] = useState<"base" | "bull" | "bear">("base");
  const [searchQuery, setSearchQuery] = useState("");

  const stocksData: Record<string, any> = {
    TITAN: {
      name: "Titan Company Ltd",
      price: 3450,
      buffettTarget: 4150,
      lynchTarget: 4200,
      moatScore: 92,
      roic: 24.8,
      peg: 0.92,
      ownerEarnings: "₹3,850 Cr",
      verdict: "STRONG MOAT & HIGH ROIC",
      curves: {
        base: "0,80 100,60 200,45 300,30 400,20 500,10",
        bull: "0,80 100,50 200,30 300,15 400,5 500,0",
        bear: "0,80 100,72 200,65 300,55 400,45 500,38",
      }
    },
    ITC: {
      name: "ITC Limited",
      price: 272,
      buffettTarget: 368,
      lynchTarget: 380,
      moatScore: 94,
      roic: 29.0,
      peg: 0.88,
      ownerEarnings: "₹16,300 Cr",
      verdict: "ATTRACTIVE ENTRY • 5.3% YIELD",
      curves: {
        base: "0,82 100,62 200,48 300,32 400,22 500,12",
        bull: "0,82 100,52 200,32 300,18 400,8 500,2",
        bear: "0,82 100,75 200,68 300,60 400,50 500,40",
      }
    },
    HDFCBANK: {
      name: "HDFC Bank Ltd",
      price: 728,
      buffettTarget: 734,
      lynchTarget: 830,
      moatScore: 91,
      roic: 13.8,
      peg: 1.15,
      ownerEarnings: "₹19,060 Cr (Q1 PAT)",
      verdict: "FAIR VALUE • WATCH ROE RECOVERY",
      curves: {
        base: "0,70 100,58 200,46 300,34 400,26 500,18",
        bull: "0,70 100,48 200,32 300,20 400,10 500,4",
        bear: "0,70 100,68 200,62 300,54 400,48 500,42",
      }
    },
    RELIANCE: {
      name: "Reliance Industries",
      price: 2980,
      buffettTarget: 3450,
      lynchTarget: 3500,
      moatScore: 88,
      roic: 12.4,
      peg: 1.12,
      ownerEarnings: "₹79,000 Cr",
      verdict: "SUSTAINABLE SCALE MOAT",
      curves: {
        base: "0,75 100,62 200,50 300,40 400,28 500,18",
        bull: "0,75 100,52 200,38 300,24 400,14 500,6",
        bear: "0,75 100,70 200,64 300,56 400,48 500,40",
      }
    },
    TCS: {
      name: "Tata Consultancy Services",
      price: 4120,
      buffettTarget: 4800,
      lynchTarget: 4750,
      moatScore: 96,
      roic: 52.1,
      peg: 1.04,
      ownerEarnings: "₹45,900 Cr",
      verdict: "ULTRA HIGH ROIC MOAT",
      curves: {
        base: "0,85 100,66 200,50 300,36 400,20 500,8",
        bull: "0,85 100,56 200,36 300,20 400,8 500,2",
        bear: "0,85 100,76 200,70 300,64 400,58 500,48",
      }
    },
    AAPL: {
      name: "Apple Inc.",
      price: 224,
      buffettTarget: 260,
      lynchTarget: 255,
      moatScore: 98,
      roic: 56.4,
      peg: 1.25,
      ownerEarnings: "$108,000 M",
      verdict: "GLOBAL CONSUMER ECOSYSTEM MOAT",
      curves: {
        base: "0,80 100,64 200,48 300,32 400,18 500,8",
        bull: "0,80 100,52 200,34 300,18 400,6 500,1",
        bear: "0,80 100,72 200,66 300,58 400,48 500,38",
      }
    },
    NVDA: {
      name: "NVIDIA Corp.",
      price: 128,
      buffettTarget: 145,
      lynchTarget: 160,
      moatScore: 94,
      roic: 68.2,
      peg: 0.85,
      ownerEarnings: "$32,400 M",
      verdict: "FAST GROWER PEG < 1.0",
      curves: {
        base: "0,88 100,60 200,40 300,22 400,10 500,2",
        bull: "0,88 100,45 200,25 300,10 400,2 500,0",
        bear: "0,88 100,75 200,65 300,52 400,40 500,30",
      }
    }
  };

  // Synthesize dynamic equity profile if query is typed
  const activeTicker = searchQuery.trim().toUpperCase() || selectedTicker;
  
  const current = stocksData[activeTicker] || {
    name: `${activeTicker} Equity`,
    price: 1500,
    buffettTarget: 1850,
    lynchTarget: 1920,
    moatScore: 88,
    roic: 22.4,
    peg: 0.94,
    ownerEarnings: "₹5,200 Cr (Est)",
    verdict: "DYNAMIC MODEL ESTIMATE",
    curves: {
      base: "0,80 100,62 200,48 300,32 400,22 500,12",
      bull: "0,82 100,52 200,32 300,18 400,8 500,2",
      bear: "0,82 100,75 200,68 300,60 400,50 500,40",
    }
  };

  // Adjust target by scenario multiplier
  const multiplier = scenario === "bull" ? 1.2 : scenario === "bear" ? 0.85 : 1.0;
  const targetPrice = Math.round(
    (strategy === "buffett" ? current.buffettTarget : current.lynchTarget) * multiplier
  );
  const upsidePct = (((targetPrice - current.price) / current.price) * 100).toFixed(1);
  const activePolylinePoints = current.curves[scenario];

  return (
    <div className="space-y-4 text-white font-sans">
      {/* Access Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-300 font-bold">
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — Intrinsic Value Equity Modeler</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
          <Globe className="w-3 h-3" />
          <span>Public Access Web App</span>
        </div>
      </div>

      {/* Top Controls: Dynamic Ticker Search & Preset Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
        {/* Ticker Selector Pills & Dynamic Search Input */}
        <div className="flex items-center gap-2 flex-wrap flex-1">
          <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-cobalt-400" />
            <span>Equity Query:</span>
          </span>

          <div className="relative flex-1 min-w-[180px] max-w-[240px]">
            <input
              type="text"
              placeholder="Search (e.g. ITC, AAPL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-cobalt-500 uppercase font-bold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {Object.keys(stocksData).map((ticker) => (
              <button
                key={ticker}
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTicker(ticker);
                }}
                className={`px-2.5 py-1 rounded-lg font-mono text-xs font-extrabold transition-all shrink-0 ${
                  !searchQuery && selectedTicker === ticker
                    ? "bg-cobalt-600 text-white shadow-md shadow-cobalt-600/30 scale-105"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                ${ticker}
              </button>
            ))}
          </div>
        </div>

        {/* Buffett vs Lynch Strategy Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
          <button
            onClick={() => setStrategy("buffett")}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
              strategy === "buffett"
                ? "bg-cobalt-600 text-white shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Buffett Moats (Long-Term)
          </button>
          <button
            onClick={() => setStrategy("lynch")}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
              strategy === "lynch"
                ? "bg-emerald-600 text-white shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Lynch Growth (Mid-Term)
          </button>
        </div>
      </div>

      {/* Main Financial Terminal View */}
      <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
        {/* Ticker Header & Live Valuation Verdict */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-display font-black text-xl text-white tracking-tight">
                {current.name} (${selectedTicker})
              </h4>
              <span className="px-2 py-0.5 rounded bg-zinc-900 font-mono text-xs text-zinc-400 border border-zinc-800">
                NSE / BSE
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400 mt-0.5 block">
              Active stock market valuation model since 2010
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
              {current.verdict}
            </span>
          </div>
        </div>

        {/* 4 Financial Key Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-400 text-[10px] uppercase block mb-1">Market Price</span>
            <span className="font-bold text-white text-base">₹{current.price.toLocaleString()}</span>
            <span className="text-[9px] text-zinc-400 block mt-0.5">Current Trading Price</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-400 text-[10px] uppercase block mb-1">
              {strategy === "buffett" ? "30% Safety Target" : "Lynch Fair Target"}
            </span>
            <span className="font-bold text-emerald-400 text-base">₹{targetPrice.toLocaleString()}</span>
            <span className="text-[9px] text-emerald-300 block mt-0.5">+{upsidePct}% Upside Band</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-400 text-[10px] uppercase block mb-1">
              {strategy === "buffett" ? "5-Yr Avg ROIC" : "PEG Growth Ratio"}
            </span>
            <span className="font-bold text-cobalt-400 text-base">
              {strategy === "buffett" ? `${current.roic}%` : current.peg}
            </span>
            <span className="text-[9px] text-zinc-400 block mt-0.5">
              {strategy === "buffett" ? "High Reinvestment Moat" : "PEG < 1.0 Undervalued"}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-400 text-[10px] uppercase block mb-1">
              {strategy === "buffett" ? "Owner Cash Flow" : "Economic Moat Score"}
            </span>
            <span className="font-bold text-amber-400 text-base">
              {strategy === "buffett" ? current.ownerEarnings : `${current.moatScore}/100`}
            </span>
            <span className="text-[9px] text-zinc-400 block mt-0.5">Normalized CapEx</span>
          </div>
        </div>

        {/* Visual Intrinsic Value Projection Chart & Monte Carlo Controls */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs gap-2">
            <span className="text-zinc-300 font-bold flex items-center gap-1.5 truncate">
              <BarChart3 className="w-3.5 h-3.5 text-cobalt-400 shrink-0" />
              <span className="truncate">10-Year Intrinsic Curve (${activeTicker}):</span>
            </span>

            {/* Monte Carlo Scenario Selector */}
            <div className="flex items-center gap-1 font-mono text-[10px] shrink-0">
              <span className="text-zinc-400 mr-0.5">Scenario:</span>
              {(["bear", "base", "bull"] as const).map((sc) => (
                <button
                  key={sc}
                  onClick={() => setScenario(sc)}
                  className={`px-2 py-0.5 rounded font-bold uppercase transition-all ${
                    scenario === sc
                      ? "bg-cobalt-600 text-white shadow-md shadow-cobalt-600/30 scale-105"
                      : "bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  {sc}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Valuation Graph */}
          <div className="relative h-28 w-full bg-zinc-950 rounded-lg p-2 border border-zinc-800/80">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
              {/* Background Grid Lines */}
              <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

              {/* Glowing Intrinsic Target Projection Line */}
              <polyline
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                points={activePolylinePoints}
              />

              {/* Live Market Price Line */}
              <polyline
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                points="0,90 100,78 200,65 300,52 400,45 500,32"
              />

              {/* Target Marker Dot */}
              <circle cx="500" cy={scenario === "bull" ? 2 : scenario === "bear" ? 60 : 10} r="5" fill="#3B82F6" className="animate-pulse" />
            </svg>
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-zinc-400 mt-1 gap-1">
              <span className="truncate">Hist Base</span>
              <span className="text-emerald-400 truncate">Mkt (₹{current.price})</span>
              <span className="text-cobalt-400 font-bold truncate">Target ({scenario.toUpperCase()}: ₹{targetPrice})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ====================================================
// 7. TAXAMICUS WORDPRESS.COM PORTAL SIMULATOR
// ====================================================
export function TaxamicusWordPressSimulator() {
  const [activeTab, setActiveTab] = useState("GST Automation");
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(148);

  const services = [
    { title: "GST Automation", metric: "10+ E-Com Channels", badge: "Live API" },
    { title: "Enterprise Retainers", metric: "Monthly Bookkeeping", badge: "Full Service" },
    { title: "Corporate Incorporation", metric: "MCA Compliance", badge: "Legal" },
    { title: "Tax Audit Notice Check", metric: "GSTR 1 vs 3B", badge: "Automated" },
  ];

  const handleSimulateInquiry = () => {
    setLeadCaptured(true);
    setInquiryCount((prev) => prev + 1);
    setTimeout(() => setLeadCaptured(false), 3000);
  };

  return (
    <div className="space-y-4 text-white">
      {/* Access Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-300 font-bold">
          <span>⚠️ DUMMY SIMULATION ENVIRONMENT — WordPress Corporate Hub</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
          <Globe className="w-3 h-3" />
          <span>Public Access Web App</span>
        </div>
      </div>

      {/* WordPress Header Bar */}
      <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-cobalt-400" />
          <div>
            <h4 className="font-display font-black text-white text-base tracking-tight">
              Taxamicus.in – Official Corporate Portal
            </h4>
            <span className="font-mono text-[10px] text-zinc-400">
              Built from Scratch on WordPress.com • Custom Content Engine
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30">
            SEO Index: #1
          </span>
          <span className="px-2.5 py-1 rounded-full bg-cobalt-500/20 text-cobalt-300 font-mono text-[10px] font-bold border border-cobalt-500/30">
            {inquiryCount} Leads Recv
          </span>
        </div>
      </div>

      {/* Service Tabs Simulator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {services.map((s) => (
          <button
            key={s.title}
            onClick={() => setActiveTab(s.title)}
            className={`p-3 rounded-xl border text-left font-mono transition-all ${
              activeTab === s.title
                ? "bg-cobalt-600/20 border-cobalt-500 text-white"
                : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <span className="text-[10px] font-bold text-cobalt-400 block">{s.badge}</span>
            <span className="font-bold text-xs block text-white mt-0.5 truncate">{s.title}</span>
            <span className="text-[9px] text-zinc-400 block">{s.metric}</span>
          </button>
        ))}
      </div>

      {/* Lead Capture Funnel Preview */}
      <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between flex-wrap gap-3">
        <div>
          <span className="font-mono text-xs font-bold text-zinc-300 block">
            WordPress Lead Capture Funnel:
          </span>
          <span className="font-sans text-xs text-zinc-400">
            {leadCaptured ? "Client inquiry ingested & dispatched to Taxamicus CRM!" : "Simulate client booking tax advisory lead from taxamicus.in"}
          </span>
        </div>
        <button
          onClick={handleSimulateInquiry}
          disabled={leadCaptured}
          className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
            leadCaptured
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
              : "bg-cobalt-600 hover:bg-cobalt-500 text-white shadow-lg shadow-cobalt-600/30"
          }`}
        >
          {leadCaptured ? "✓ Inquiry Logged to CRM" : "Simulate Client Lead Capture"}
        </button>
      </div>
    </div>
  );
}
