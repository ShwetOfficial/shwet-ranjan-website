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
  Eye,
  FileText,
  Scan,
  Copy,
  CheckCheck,
  Phone,
  UserCheck,
  RefreshCw,
  Terminal,
  FileCode,
  ArrowRight
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
            <label className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider block mb-1">
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
              <label className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                Select Filing Period Type
              </label>
              <div className="inline-flex p-0.5 rounded-md bg-zinc-900 border border-zinc-800 font-mono text-[10px]">
                <button
                  type="button"
                  onClick={() => setPeriodType("monthly")}
                  className={`px-2.5 py-0.5 rounded font-bold transition-all ${
                    periodType === "monthly" ? "bg-cobalt-600 text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setPeriodType("quarterly")}
                  className={`px-2.5 py-0.5 rounded font-bold transition-all ${
                    periodType === "quarterly" ? "bg-cobalt-600 text-white" : "text-zinc-300 hover:text-white"
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
            <label className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider block mb-1">
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
                      : "bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700"
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
            <p className="font-sans text-[11px] text-zinc-300 mb-3">
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
          <thead className="bg-zinc-900 text-zinc-300 border-b border-zinc-800">
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
                <td className="p-3 text-zinc-300">{task.client}</td>
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
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold">
          <Globe className="w-3 h-3" />
          <span>Authorized Client & Business Web App</span>
        </div>
      </div>

      {/* Financial Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1">
            <span>EST. OUTPUT GST</span>
            <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse" />
          </div>
          <p className="font-display text-2xl font-black text-white">{current.gst}</p>
          <span className="text-[10px] font-mono text-emerald-400 mt-1 block">{current.trend}</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1">
            <span>TOTAL SALES</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <p className="font-display text-2xl font-black text-emerald-400">{current.sales}</p>
          <span className="text-[10px] font-mono text-zinc-500 mt-1 block">Verified sales ledger</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-1">
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
                    : "bg-zinc-800 text-zinc-300 hover:text-white"
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
          <div className="relative z-10 w-full flex items-end justify-between font-mono text-[10px] text-zinc-300 pt-20">
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
                : "bg-zinc-800/80 border border-zinc-700 text-zinc-300"
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
                : "bg-zinc-800/80 border border-zinc-700 text-zinc-300"
            }`}
          >
            <div className="font-bold block">2. Deep Search (2 credits)</div>
            <div className="text-[10px] opacity-80">Live web source verification</div>
          </button>
        </div>

        {/* Quick Test Chips */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-300">
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

          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[10px] text-zinc-300">
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
          <span className="text-zinc-300 font-bold shrink-0">Reconciliation Matrix:</span>
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
          <thead className="bg-zinc-900 text-zinc-300 border-b border-zinc-800">
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
          <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider shrink-0 flex items-center gap-1">
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
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white text-xs font-bold"
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
                    : "bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
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
                : "text-zinc-300 hover:text-white"
            }`}
          >
            Buffett Moats (Long-Term)
          </button>
          <button
            onClick={() => setStrategy("lynch")}
            className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all ${
              strategy === "lynch"
                ? "bg-emerald-600 text-white shadow"
                : "text-zinc-300 hover:text-white"
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
              <span className="px-2 py-0.5 rounded bg-zinc-900 font-mono text-xs text-zinc-300 border border-zinc-800">
                NSE / BSE
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-300 mt-0.5 block">
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
            <span className="text-zinc-300 text-[10px] uppercase block mb-1">Market Price</span>
            <span className="font-bold text-white text-base">₹{current.price.toLocaleString()}</span>
            <span className="text-[9px] text-zinc-300 block mt-0.5">Current Trading Price</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-300 text-[10px] uppercase block mb-1">
              {strategy === "buffett" ? "30% Safety Target" : "Lynch Fair Target"}
            </span>
            <span className="font-bold text-emerald-400 text-base">₹{targetPrice.toLocaleString()}</span>
            <span className="text-[9px] text-emerald-300 block mt-0.5">+{upsidePct}% Upside Band</span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-300 text-[10px] uppercase block mb-1">
              {strategy === "buffett" ? "5-Yr Avg ROIC" : "PEG Growth Ratio"}
            </span>
            <span className="font-bold text-cobalt-400 text-base">
              {strategy === "buffett" ? `${current.roic}%` : current.peg}
            </span>
            <span className="text-[9px] text-zinc-300 block mt-0.5">
              {strategy === "buffett" ? "High Reinvestment Moat" : "PEG < 1.0 Undervalued"}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-300 text-[10px] uppercase block mb-1">
              {strategy === "buffett" ? "Owner Cash Flow" : "Economic Moat Score"}
            </span>
            <span className="font-bold text-amber-400 text-base">
              {strategy === "buffett" ? current.ownerEarnings : `${current.moatScore}/100`}
            </span>
            <span className="text-[9px] text-zinc-300 block mt-0.5">Normalized CapEx</span>
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
              <span className="text-zinc-300 mr-0.5">Scenario:</span>
              {(["bear", "base", "bull"] as const).map((sc) => (
                <button
                  key={sc}
                  onClick={() => setScenario(sc)}
                  className={`px-2 py-0.5 rounded font-bold uppercase transition-all ${
                    scenario === sc
                      ? "bg-cobalt-600 text-white shadow-md shadow-cobalt-600/30 scale-105"
                      : "bg-zinc-800 text-zinc-300 hover:text-white"
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
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-zinc-300 mt-1 gap-1">
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
            <span className="font-mono text-[10px] text-zinc-300">
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
                : "bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            <span className="text-[10px] font-bold text-cobalt-400 block">{s.badge}</span>
            <span className="font-bold text-xs block text-white mt-0.5 truncate">{s.title}</span>
            <span className="text-[9px] text-zinc-300 block">{s.metric}</span>
          </button>
        ))}
      </div>

      {/* Lead Capture Funnel Preview */}
      <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between flex-wrap gap-3">
        <div>
          <span className="font-mono text-xs font-bold text-zinc-300 block">
            WordPress Lead Capture Funnel:
          </span>
          <span className="font-sans text-xs text-zinc-300">
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

// ========================================================
// 8. TAXAMICUS SALES CRM & AI WHATSAPP AUTO-PILOT SIMULATOR
// ========================================================
export function SalesCrmSimulator() {
  const [activeLeadId, setActiveLeadId] = useState("lead_1");
  const [autoPilotEnabled, setAutoPilotEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const leads = [
    {
      id: "lead_1",
      name: "Rohan Verma",
      phone: "+91 70035 57928",
      stage: "Collecting Docs",
      track: "DOCS",
      service: "GST Registration (Single State)",
      dealValue: "₹499",
      dripStep: 2,
      lastMsg: "Do I need to send electricity bill of the landlord or owner?",
      time: "10:14 AM"
    },
    {
      id: "lead_2",
      name: "Vikram Singhania",
      phone: "+91 98201 44321",
      stage: "New Lead",
      track: "VPOB",
      service: "VPOB E-Commerce (Karnataka & Delhi)",
      dealValue: "₹24,000",
      dripStep: 1,
      lastMsg: "Need Amazon Prime 1-day badge for Bangalore warehouse.",
      time: "09:42 AM"
    },
    {
      id: "lead_3",
      name: "Ananya Rao",
      phone: "+91 99881 22334",
      stage: "Qualified",
      track: "GST",
      service: "GST Multi-State Expansion",
      dealValue: "₹4,999",
      dripStep: 0,
      lastMsg: "What are the documents needed for a private limited company?",
      time: "Yesterday"
    }
  ];

  const activeLead = leads.find((l) => l.id === activeLeadId) || leads[0];

  const [chatHistory, setChatHistory] = useState<{ [key: string]: { id: string; from: "client" | "bot" | "agent"; text: string; time: string; isDrip?: boolean }[] }>({
    lead_1: [
      { id: "m1", from: "client", text: "Hi, I want GST registration for my e-commerce business. What is the fee and process?", time: "10:02 AM" },
      { id: "m2", from: "bot", text: "Hello Rohan! Welcome to Taxamicus. Our single-state GST registration is ₹499 all-inclusive. Our CA team handles end-to-end filing, ARN tracking, and certificate issuance within 3-7 working days.", time: "10:02 AM" },
      { id: "m3", from: "client", text: "Do I need to send electricity bill of the landlord or owner?", time: "10:14 AM" },
      { id: "m4", from: "bot", text: "Yes, exactly! We need a clear photo or PDF of the recent Electricity Bill (within 2 months) along with the owner's Aadhaar or PAN to draft the free NOC & consent letter. You can share them right here on WhatsApp!", time: "10:14 AM" }
    ],
    lead_2: [
      { id: "m1", from: "client", text: "Need Amazon Prime 1-day badge for Bangalore warehouse.", time: "09:42 AM" },
      { id: "m2", from: "bot", text: "Hi Vikram! Following up on your VPOB inquiry.\n\nDid you know that having a registered virtual office & warehouse in Karnataka gets your products the Amazon Prime 1-Day Delivery badge, boosting your sales and Buy Box conversion by 30%+?\n\nOur plan includes 100% GST-approved address, Rent Agreement, NOC & Electricity Bill for ₹12,000/year.", time: "09:43 AM", isDrip: true }
    ],
    lead_3: [
      { id: "m1", from: "client", text: "What are the documents needed for a private limited company?", time: "Yesterday" },
      { id: "m2", from: "bot", text: "Hi Ananya! For a Pvt Ltd company, we require: 1. Certificate of Incorporation, 2. Company PAN, 3. Board Resolution authorizing director, 4. Directors' PAN & Aadhaar, and 5. Registered office address proof (Electricity bill + NOC).", time: "Yesterday" }
    ]
  });

  const activeMessages = chatHistory[activeLead.id] || [];

  const handleSendCustomMessage = (textToSend?: string) => {
    const text = textToSend || customMsg;
    if (!text.trim()) return;

    const newMsg = {
      id: `out_${Date.now()}`,
      from: autoPilotEnabled ? ("bot" as const) : ("agent" as const),
      text: text.trim(),
      time: "Just now"
    };

    setChatHistory((prev) => ({
      ...prev,
      [activeLead.id]: [...(prev[activeLead.id] || []), newMsg]
    }));
    if (!textToSend) setCustomMsg("");

    // Simulate client reply if sent by agent
    if (!autoPilotEnabled) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatHistory((prev) => ({
          ...prev,
          [activeLead.id]: [
            ...(prev[activeLead.id] || []),
            {
              id: `in_${Date.now()}`,
              from: "client" as const,
              text: "Got it! Reviewing the details and sending over the documents shortly.",
              time: "Just now"
            }
          ]
        }));
      }, 1500);
    }
  };

  const handleSimulateClientInquiry = () => {
    setIsTyping(true);
    setTimeout(() => {
      const incoming = {
        id: `in_${Date.now()}`,
        from: "client" as const,
        text: "Could you send the official bank account details so I can complete payment?",
        time: "Just now"
      };

      setChatHistory((prev) => ({
        ...prev,
        [activeLead.id]: [...(prev[activeLead.id] || []), incoming]
      }));
      setIsTyping(false);

      if (autoPilotEnabled) {
        setTimeout(() => {
          setChatHistory((prev) => ({
            ...prev,
            [activeLead.id]: [
              ...(prev[activeLead.id] || []),
              {
                id: `bot_${Date.now()}`,
                from: "bot" as const,
                text: "Here are our official settlement details:\n• Account Name: TAXAMICUS LEGAL TECH PVT LTD\n• Bank: Kotak Mahindra Bank\n• UPI ID: taxamicus@kotak\n\nOnce paid, please share the screenshot here and our team will generate your TRN immediately!",
                time: "Just now"
              }
            ]
          }));
        }, 1200);
      }
    }, 1000);
  };

  const handleCannedSnippet = (shortcut: "/docs" | "/vpob" | "/bank") => {
    if (shortcut === "/docs") {
      handleSendCustomMessage("📋 GST Document Checklist:\n1. PAN Card\n2. Aadhaar Card\n3. Electricity Bill or Rent Agreement\n4. Passport Photo\n\nYou can upload photos or PDFs directly here!");
    } else if (shortcut === "/vpob") {
      handleSendCustomMessage("🏢 VPOB State Pricing:\n• Plan A (Standard VPOB): ₹12,000/yr (Address, NOC, Rent Agreement & EB)\n• Plan B (Complete Compliance): ₹14,999/yr (VPOB + 1-Year GSTR-1/3B filing + Audit)\n\nAvailable across WB, Delhi, Karnataka, Haryana, UP, MP, Bihar, Punjab & Gujarat.");
    } else {
      handleSendCustomMessage("🏦 Payment & Settlement Details:\n• Account: Taxamicus Legal Tech Pvt Ltd\n• Bank: Kotak Mahindra Bank\n• UPI: taxamicus@kotak\n• Amount: " + activeLead.dealValue);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Status */}
      <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-white">Taxamicus Sales CRM Engine</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Baileys Socket Active
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-300">
              Real-time multi-agent live chat • Google Gemini 1.5 Flash Auto-Pilot • IST Business Hours Engine
            </p>
          </div>
        </div>

        {/* Auto-Pilot Toggle */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-300 font-bold">Auto-Pilot:</span>
          <button
            onClick={() => setAutoPilotEnabled(!autoPilotEnabled)}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
              autoPilotEnabled
                ? "bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/30"
                : "bg-zinc-800 text-zinc-300 border border-zinc-700"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            {autoPilotEnabled ? "Gemini AI ON" : "Human Takeover"}
          </button>
        </div>
      </div>

      {/* 3-Column Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Leads Pipeline (4 cols) */}
        <div className="lg:col-span-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cobalt-400" />
              Live Inbound Pipeline
            </span>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              3 Active Leads
            </span>
          </div>

          <div className="space-y-2">
            {leads.map((lead) => (
              <button
                key={lead.id}
                onClick={() => setActiveLeadId(lead.id)}
                className={`w-full p-3 rounded-xl border text-left transition-all ${
                  activeLeadId === lead.id
                    ? "bg-zinc-900 border-cobalt-500/80 shadow-md shadow-cobalt-500/10"
                    : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-bold text-xs text-white">{lead.name}</span>
                  <span className="font-mono text-[10px] text-zinc-400">{lead.time}</span>
                </div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-mono text-[11px] text-cobalt-300">{lead.phone}</span>
                  <span className="font-mono text-[10px] font-bold text-emerald-400">{lead.dealValue}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                    lead.stage === "Collecting Docs" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                    lead.stage === "New Lead" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" :
                    "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  }`}>
                    {lead.stage}
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono text-zinc-400 bg-zinc-800">
                    Track: {lead.track}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Business Hours Indicator */}
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono space-y-1">
            <div className="flex items-center justify-between text-zinc-300">
              <span>IST Hours Filter:</span>
              <span className="text-emerald-400 font-bold">10:00 - 19:30 IST</span>
            </div>
            <p className="text-[10px] text-zinc-400">
              Anti-Spam lock prevents automated messages outside official working hours.
            </p>
          </div>
        </div>

        {/* Center Column: Live WhatsApp Chat Window (5 cols) */}
        <div className="lg:col-span-5 p-4 rounded-2xl bg-[#0e1621] border border-zinc-800 flex flex-col justify-between h-[460px]">
          {/* Chat Header */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cobalt-600 flex items-center justify-center font-bold text-xs text-white">
                {activeLead.name.charAt(0)}
              </div>
              <div>
                <span className="font-display font-bold text-xs text-white block">{activeLead.name}</span>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online on WhatsApp
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">
              {activeLead.service.split("(")[0]}
            </span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1">
            {activeMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.from === "client" ? "items-start" : "items-end"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs font-sans leading-relaxed whitespace-pre-line ${
                    msg.from === "client"
                      ? "bg-[#182533] text-zinc-200 rounded-tl-sm border border-white/5"
                      : "bg-[#2b5278] text-white rounded-tr-sm border border-cobalt-400/20"
                  }`}
                >
                  {msg.isDrip && (
                    <div className="flex items-center gap-1 text-[9px] font-mono text-cyan-300 font-bold mb-1 pb-1 border-b border-cyan-400/20">
                      <Zap className="w-3 h-3 text-cyan-300" />
                      AUTO DRIP CADENCE (Track {activeLead.track})
                    </div>
                  )}
                  {msg.text}
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-zinc-300 font-mono">
                    <span>{msg.time}</span>
                    {msg.from !== "client" && <CheckCheck className="w-3 h-3 text-cyan-300" />}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#182533] w-24 text-[10px] text-zinc-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-200" />
                <span>typing...</span>
              </div>
            )}
          </div>

          {/* Quick Canned Snippet Triggers */}
          <div className="pt-2 border-t border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[9px] text-zinc-400 font-bold">SNIPPETS:</span>
              <button
                onClick={() => handleCannedSnippet("/docs")}
                className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-[10px] font-bold transition-all"
              >
                /docs
              </button>
              <button
                onClick={() => handleCannedSnippet("/vpob")}
                className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-[10px] font-bold transition-all"
              >
                /vpob
              </button>
              <button
                onClick={() => handleCannedSnippet("/bank")}
                className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-[10px] font-bold transition-all"
              >
                /bank
              </button>
              <button
                onClick={handleSimulateClientInquiry}
                className="ml-auto px-2 py-0.5 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold transition-all"
              >
                + Sim Client Reply
              </button>
            </div>

            {/* Input Form */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type reply or test auto-pilot..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendCustomMessage()}
                className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cobalt-500 font-sans"
              />
              <button
                onClick={() => handleSendCustomMessage()}
                className="p-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono transition-all"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Drip Engine & Safeguards Inspector (3 cols) */}
        <div className="lg:col-span-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4">
          <div>
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-1">
              Drip Follow-Up Engine
            </span>
            <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-zinc-400">Assigned Track:</span>
                <span className="text-cyan-400 font-bold">Track {activeLead.track}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Current Step:</span>
                <span className="text-white font-bold">{activeLead.dripStep} of 4</span>
              </div>
            </div>
          </div>

          {/* Drip Cadence Steps Visualizer */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
              Cadence Schedule:
            </span>
            <div className="space-y-1.5 text-xs font-sans">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-[11px]">
                <span className="text-emerald-300 font-semibold">1. Value Hook / Prime 1-Day</span>
                <span className="font-mono text-[9px] text-emerald-400">Delivered ✓</span>
              </div>
              <div className="p-2 rounded-lg bg-cobalt-500/10 border border-cobalt-500/30 flex items-center justify-between text-[11px]">
                <span className="text-cobalt-200 font-semibold">2. 4.9★ Review Proof</span>
                <span className="font-mono text-[9px] text-cobalt-400">Queued</span>
              </div>
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">3. Gentle Breakup / Close</span>
                <span className="font-mono text-[9px] text-zinc-500">Day 6</span>
              </div>
            </div>
          </div>

          {/* Anti-Spam Safeguards Audit */}
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-[10px] font-mono">
            <span className="text-zinc-300 font-bold block uppercase tracking-wider">
              Anti-Spam Safeguards:
            </span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Client Last-Msg Interceptor Active</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Self-Healing Drip Persistence</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Meta CAPI Ad Conversion Sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===============================================================
// 9. 99% PRECISION GST PURCHASE & SALES INVOICE OCR SIMULATOR
// ===============================================================
export function PurchaseInvoiceOcrSimulator() {
  const [selectedInvoice, setSelectedInvoice] = useState<"inv_1" | "inv_2">("inv_1");
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<"fields" | "json">("fields");

  const invoiceData = {
    inv_1: {
      title: "Silver Cloud Logistics Pvt Ltd (Inter-State IGST)",
      supplier: {
        name: "Silver Cloud Logistics Pvt Ltd",
        gstin: "27AABCS1429B1ZB",
        state: "Maharashtra (27)",
        status: "Valid Checksum (Mod-36 Verified)",
        spatialLabel: "Billed By / Supplier"
      },
      buyer: {
        name: "Neelkanth Enterprises",
        gstin: "19AUEPG0367J1ZK",
        state: "West Bengal (19)",
        status: "Valid Checksum (Mod-36 Verified)",
        spatialLabel: "Bill To / Recipient"
      },
      invoiceNo: "SCL/2026/0891",
      date: "18-Aug-2026",
      items: [
        { hsn: "996511", desc: "Freight Forwarding - Multi-State Hub Logistics", taxable: 65000, rate: "18% IGST", tax: 11700, total: 76700 },
        { hsn: "996512", desc: "Warehouse Cross-Docking Handling Charges", taxable: 19500, rate: "18% IGST", tax: 3510, total: 23010 }
      ],
      taxableValue: 84500,
      cgst: 0,
      sgst: 0,
      igst: 15210,
      grandTotal: 99710,
      delta: 0.00
    },
    inv_2: {
      title: "Apex Precision Tools Ltd (Intra-State CGST + SGST)",
      supplier: {
        name: "Apex Precision Tools Ltd",
        gstin: "19AAACP2341M1ZU",
        state: "West Bengal (19)",
        status: "Valid Checksum (Mod-36 Verified)",
        spatialLabel: "Billed By / Supplier"
      },
      buyer: {
        name: "Neelkanth Enterprises",
        gstin: "19AUEPG0367J1ZK",
        state: "West Bengal (19)",
        status: "Valid Checksum (Mod-36 Verified)",
        spatialLabel: "Bill To / Recipient"
      },
      invoiceNo: "APT-KOL-4421",
      date: "24-Aug-2026",
      items: [
        { hsn: "846693", desc: "CNC Industrial Cutting Inserts (Grade P25)", taxable: 42000, rate: "9% CGST + 9% SGST", tax: 7560, total: 49560 },
        { hsn: "846694", desc: "Hydraulic Clamping Tool Holders", taxable: 18000, rate: "9% CGST + 9% SGST", tax: 3240, total: 21240 }
      ],
      taxableValue: 60000,
      cgst: 5400,
      sgst: 5400,
      igst: 0,
      grandTotal: 70800,
      delta: 0.00
    }
  };

  const curr = invoiceData[selectedInvoice];

  return (
    <div className="space-y-6">
      {/* Top Banner Status */}
      <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cobalt-500/10 border border-cobalt-500/20 flex items-center justify-center text-cobalt-400">
            <Scan className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-white">PaddleOCR 3.x Purchase Invoice Engine</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                99% Precision • ₹0 API Cost
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-300">
              Spatial coordinate separation • Mod-36 GSTIN checksum validation • Automatic OCR typo correction
            </p>
          </div>
        </div>

        {/* Invoice Selector Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedInvoice("inv_1")}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
              selectedInvoice === "inv_1"
                ? "bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/30"
                : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            Invoice 1 (IGST)
          </button>
          <button
            onClick={() => setSelectedInvoice("inv_2")}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
              selectedInvoice === "inv_2"
                ? "bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/30"
                : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            Invoice 2 (CGST+SGST)
          </button>
        </div>
      </div>

      {/* Side-by-Side Document Renderer + Structured Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Document Canvas with Interactive SVG Bounding Boxes (6 cols) */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cobalt-400" />
              Document Spatial Bounding Canvas
            </span>
            <span className="font-mono text-[10px] text-zinc-400">
              Hover boxes to trace extracted fields
            </span>
          </div>

          {/* Simulated Paper Invoice Document */}
          <div className="relative p-6 rounded-xl bg-[#14171f] border border-zinc-700/80 shadow-2xl font-mono text-xs space-y-4">
            {/* Header / Invoice Title Box */}
            <div
              onMouseEnter={() => setActiveHighlight("header")}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${
                activeHighlight === "header"
                  ? "bg-cobalt-500/20 border-cobalt-400 ring-2 ring-cobalt-400/50"
                  : "bg-zinc-900/60 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-sm text-white block">{curr.supplier.name}</span>
                  <span className="text-[11px] text-zinc-300">GSTIN: {curr.supplier.gstin}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-cobalt-400 block">TAX INVOICE</span>
                  <span className="text-[11px] text-zinc-300">{curr.invoiceNo}</span>
                  <span className="text-[10px] text-zinc-400 block">Date: {curr.date}</span>
                </div>
              </div>
            </div>

            {/* Buyer Box */}
            <div
              onMouseEnter={() => setActiveHighlight("buyer")}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${
                activeHighlight === "buyer"
                  ? "bg-cobalt-500/20 border-cobalt-400 ring-2 ring-cobalt-400/50"
                  : "bg-zinc-900/60 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <span className="text-[10px] text-zinc-400 block uppercase font-bold">Billed To (Recipient):</span>
              <span className="font-bold text-xs text-white block">{curr.buyer.name}</span>
              <span className="text-[11px] text-zinc-300">GSTIN: {curr.buyer.gstin} ({curr.buyer.state})</span>
            </div>

            {/* Line Items Table Box */}
            <div
              onMouseEnter={() => setActiveHighlight("table")}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${
                activeHighlight === "table"
                  ? "bg-cobalt-500/20 border-cobalt-400 ring-2 ring-cobalt-400/50"
                  : "bg-zinc-900/60 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <div className="flex justify-between text-[10px] font-bold text-zinc-400 border-b border-zinc-700 pb-1 mb-2">
                <span>ITEM DESCRIPTION</span>
                <span>HSN</span>
                <span>TAXABLE</span>
                <span>TOTAL</span>
              </div>
              {curr.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-[11px] text-zinc-200 py-1">
                  <span className="truncate max-w-[160px]">{item.desc}</span>
                  <span className="text-zinc-400">{item.hsn}</span>
                  <span>₹{item.taxable.toLocaleString("en-IN")}</span>
                  <span className="font-bold text-white">₹{item.total.toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>

            {/* Totals & Taxes Box */}
            <div
              onMouseEnter={() => setActiveHighlight("totals")}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-3 rounded-lg border transition-all cursor-pointer flex justify-between items-center ${
                activeHighlight === "totals"
                  ? "bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-400/50"
                  : "bg-zinc-900/60 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <div>
                <span className="text-[10px] text-zinc-400 block">Total Taxable: ₹{curr.taxableValue.toLocaleString("en-IN")}</span>
                <span className="text-[10px] text-cyan-400 block">
                  {curr.igst > 0 ? `IGST (18%): ₹${curr.igst.toLocaleString("en-IN")}` : `CGST + SGST (9%+9%): ₹${(curr.cgst + curr.sgst).toLocaleString("en-IN")}`}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-400 block font-bold uppercase">Grand Total:</span>
                <span className="font-display font-extrabold text-sm text-emerald-400">
                  ₹{curr.grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Engine: PaddleOCR v4-REC + LayoutLM</span>
            <span className="text-emerald-400 font-bold">100% On-Device Processing</span>
          </div>
        </div>

        {/* Right: Extracted Structured Fields & Math Audit (6 cols) */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Extracted Accounting Schema
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveView("fields")}
                className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold ${
                  activeView === "fields" ? "bg-cobalt-600 text-white" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                Structured
              </button>
              <button
                onClick={() => setActiveView("json")}
                className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold ${
                  activeView === "json" ? "bg-cobalt-600 text-white" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                JSON Schema
              </button>
            </div>
          </div>

          {activeView === "fields" ? (
            <div className="space-y-4 font-mono text-xs">
              {/* Supplier Extracted Card */}
              <div className={`p-3 rounded-xl border transition-all ${
                activeHighlight === "header" ? "bg-cobalt-500/10 border-cobalt-400" : "bg-zinc-900 border-zinc-800"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-zinc-400">SUPPLIER (BILLED BY):</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Mod-36 Valid ✓
                  </span>
                </div>
                <div className="font-sans font-bold text-sm text-white mb-1">{curr.supplier.name}</div>
                <div className="flex justify-between text-[11px] text-zinc-300">
                  <span>GSTIN: <strong className="text-cobalt-400">{curr.supplier.gstin}</strong></span>
                  <span>{curr.supplier.state}</span>
                </div>
              </div>

              {/* Buyer Extracted Card */}
              <div className={`p-3 rounded-xl border transition-all ${
                activeHighlight === "buyer" ? "bg-cobalt-500/10 border-cobalt-400" : "bg-zinc-900 border-zinc-800"
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-zinc-400">BUYER (BILL TO):</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Mod-36 Valid ✓
                  </span>
                </div>
                <div className="font-sans font-bold text-sm text-white mb-1">{curr.buyer.name}</div>
                <div className="flex justify-between text-[11px] text-zinc-300">
                  <span>GSTIN: <strong className="text-cobalt-400">{curr.buyer.gstin}</strong></span>
                  <span>{curr.buyer.state}</span>
                </div>
              </div>

              {/* Mathematical Reconciliation Summary */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                activeHighlight === "totals" ? "bg-emerald-500/10 border-emerald-400" : "bg-zinc-900 border-zinc-800"
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase">Math Reconciliation Check:</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Delta: ₹0.00 (Zero Discrepancy)
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between text-zinc-300">
                    <span>Taxable Base Value:</span>
                    <span>₹{curr.taxableValue.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Total Computed GST (CGST/SGST/IGST):</span>
                    <span>₹{(curr.cgst + curr.sgst + curr.igst).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-1.5 border-t border-zinc-800">
                    <span>Reconciled Grand Total:</span>
                    <span className="text-emerald-400 font-display">₹{curr.grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-300 overflow-x-auto max-h-[300px]">
              <pre>{JSON.stringify(curr, null, 2)}</pre>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-3">
            <span className="text-[10px] font-mono text-zinc-400">
              Export formats: JSON / CSV / Excel (.xlsx)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert("JSON accounting payload copied to clipboard!")}
                className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Copy className="w-3 h-3" />
                Copy JSON
              </button>
              <button
                onClick={() => alert("Simulated Excel (.xlsx) generated with HSN breakdown!")}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-600/30"
              >
                <Download className="w-3 h-3" />
                Download Excel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 10. AUTO GST REGISTRATION & AUTONOMOUS LEGAL DRAFTING SIMULATOR
// =========================================================================
export function AutoGstDraftingSimulator() {
  const [docType, setDocType] = useState<"NOC" | "RENT" | "DEED">("NOC");
  const [selectedPreset, setSelectedPreset] = useState("preset_1");
  const [stampMarginMm, setStampMarginMm] = useState(80);
  const [monthlyRent, setMonthlyRent] = useState(25000);
  const [copied, setCopied] = useState(false);

  const presets = {
    preset_1: {
      location: "Commercial Office - Kolkata (West Bengal)",
      ownerName: "Subhash Chandra Ghosh",
      tenantName: "Neelkanth Enterprises (Prop. Shwet Ranjan)",
      propertyAddress: "Flat 4B, 3rd Floor, Diamond Heritage, 16 Strand Road, Fairley Place, Kolkata, West Bengal - 700001",
      electricityConsumerNo: "09124489102",
      tenureMonths: 11
    },
    preset_2: {
      location: "Fulfillment Warehouse - Gurugram (Haryana)",
      ownerName: "Harpreet Singh Narang",
      tenantName: "Apex Retail Solutions LLP",
      propertyAddress: "Plot No. 42, Sector 18, Udyog Vihar Phase IV, Gurugram, Haryana - 122015",
      electricityConsumerNo: "3319084421",
      tenureMonths: 24
    },
    preset_3: {
      location: "Registered Tech Office - Bengaluru (Karnataka)",
      ownerName: "K. R. Venkatesh",
      tenantName: "Taxamicus Legal Tech Solutions",
      propertyAddress: "Suite 302, 3rd Floor, Brigade Towers, 135 Residency Road, Bengaluru, Karnataka - 560025",
      electricityConsumerNo: "772109843",
      tenureMonths: 36
    }
  };

  const curr = presets[selectedPreset as keyof typeof presets];

  // Number to Indian words conversion
  const numberToWords = (num: number) => {
    if (num === 25000) return "Twenty Five Thousand Rupees Only";
    if (num === 35000) return "Thirty Five Thousand Rupees Only";
    if (num === 50000) return "Fifty Thousand Rupees Only";
    return `${num.toLocaleString("en-IN")} Rupees Only`;
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Status */}
      <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-white">Auto GST Registration & Legal Drafter</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-mono font-bold border border-purple-500/30">
                Gemini Multimodal • 90% Automation
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-300">
              Autonomous legal generation of NOC, Commercial Rent Agreement & Partnership Deeds with Address Audit Match
            </p>
          </div>
        </div>

        {/* Document Format Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDocType("NOC")}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
              docType === "NOC"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            Owner NOC
          </button>
          <button
            onClick={() => setDocType("RENT")}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
              docType === "RENT"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            Rent Agreement
          </button>
          <button
            onClick={() => setDocType("DEED")}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
              docType === "DEED"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                : "bg-zinc-800 text-zinc-300 hover:text-white"
            }`}
          >
            Partnership Deed
          </button>
        </div>
      </div>

      {/* Main Grid: Controls + Document Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Preset Selectors & Customization (4 cols) */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div>
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-2">
              Select Property Preset:
            </span>
            <div className="space-y-2">
              {Object.entries(presets).map(([k, val]) => (
                <button
                  key={k}
                  onClick={() => setSelectedPreset(k)}
                  className={`w-full p-3 rounded-xl border text-left font-mono text-xs transition-all ${
                    selectedPreset === k
                      ? "bg-purple-600/20 border-purple-500 text-white"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
                  }`}
                >
                  <span className="font-bold text-white block mb-0.5">{val.location}</span>
                  <span className="text-[10px] text-zinc-400 block truncate">{val.propertyAddress}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Parameters */}
          <div className="space-y-3 pt-3 border-t border-zinc-800 font-mono text-xs">
            <div>
              <div className="flex justify-between items-center mb-1 text-zinc-300">
                <span>Stamp Paper Margin:</span>
                <span className="text-purple-400 font-bold">{stampMarginMm} mm</span>
              </div>
              <input
                type="range"
                min="50"
                max="120"
                step="5"
                value={stampMarginMm}
                onChange={(e) => setStampMarginMm(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <span className="text-[10px] text-zinc-400 block mt-1">
                Preserves physical stamp paper printing clearance.
              </span>
            </div>

            {docType === "RENT" && (
              <div>
                <span className="text-zinc-300 block mb-1">Monthly Rent (INR):</span>
                <select
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono text-xs"
                >
                  <option value={25000}>₹25,000 / month</option>
                  <option value={35000}>₹35,000 / month</option>
                  <option value={50000}>₹50,000 / month</option>
                </select>
                <span className="text-[10px] text-emerald-400 block mt-1 font-sans">
                  Words: {numberToWords(monthlyRent)}
                </span>
              </div>
            )}
          </div>

          {/* Address Parity Audit Status */}
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5 text-xs font-mono">
            <div className="flex items-center justify-between text-zinc-300 font-bold">
              <span>Address Parity Audit:</span>
              <span className="text-emerald-400">100% Match ✓</span>
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">
              Electricity bill consumer #{curr.electricityConsumerNo} cross-verified against Principal Place of Business address. Zero GSTR-REG-01 notice risk.
            </p>
          </div>
        </div>

        {/* Right Column: Live Formatted Legal Document Preview (8 cols) */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
            <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              Statutory Formatted Legal Preview
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-purple-300">
              GSTN Compliant Layout
            </span>
          </div>

          {/* Document Sheet Viewer */}
          <div className="p-6 rounded-xl bg-[#0f1117] border border-zinc-700 shadow-2xl font-serif text-zinc-200 text-xs leading-relaxed space-y-4 max-h-[380px] overflow-y-auto">
            {/* Stamp Paper Top Header Margin */}
            <div
              style={{ height: `${stampMarginMm * 0.9}px` }}
              className="border-2 border-dashed border-zinc-700/60 rounded-lg flex items-center justify-center text-zinc-500 font-mono text-[10px] uppercase tracking-widest text-center px-4"
            >
              [ {stampMarginMm}mm Stamp Paper Margin Reserved for State Judicial Stamp ]
            </div>

            {/* Document Content based on Type */}
            {docType === "NOC" && (
              <div className="space-y-3 font-sans">
                <h3 className="font-display font-extrabold text-center text-sm uppercase text-white tracking-wide border-b border-zinc-800 pb-2">
                  NO OBJECTION CERTIFICATE (NOC)
                </h3>
                <p className="text-justify text-zinc-300">
                  I, <strong>{curr.ownerName}</strong>, residing at the address mentioned herein, hereby solemnly declare and state as follows:
                </p>
                <p className="text-justify text-zinc-300">
                  1. That I am the absolute legal owner and in lawful possession of the premises situated at <strong>{curr.propertyAddress}</strong> (Electricity Consumer No: <strong>{curr.electricityConsumerNo}</strong>).
                </p>
                <p className="text-justify text-zinc-300">
                  2. That I have granted permission and have <strong>NO OBJECTION</strong> whatsoever for <strong>{curr.tenantName}</strong> to operate their business and obtain Goods and Services Tax (GST) Registration under the CGST/SGST Act at the aforesaid premises.
                </p>
                <p className="text-justify text-zinc-300">
                  3. That I have not rented out this specific allotted portion to any conflicting business entity.
                </p>
                <div className="pt-4 flex justify-between font-mono text-xs text-zinc-300">
                  <div>
                    <span>Date: <strong>01-Oct-2026</strong></span><br />
                    <span>Place: <strong>Kolkata</strong></span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white">Signature of Owner</span><br />
                    <span>({curr.ownerName})</span>
                  </div>
                </div>
              </div>
            )}

            {docType === "RENT" && (
              <div className="space-y-3 font-sans">
                <h3 className="font-display font-extrabold text-center text-sm uppercase text-white tracking-wide border-b border-zinc-800 pb-2">
                  COMMERCIAL LEASE & RENT AGREEMENT
                </h3>
                <p className="text-justify text-zinc-300">
                  This Commercial Lease Agreement is executed on this <strong>1st day of October, 2026</strong>, between <strong>{curr.ownerName}</strong> (hereinafter referred to as the <em>LESSOR</em>) of the ONE PART and <strong>{curr.tenantName}</strong> (hereinafter referred to as the <em>LESSEE</em>) of the OTHER PART.
                </p>
                <p className="text-justify text-zinc-300">
                  <strong>1. PREMISES:</strong> The Lessor hereby lets out the commercial premises situated at <strong>{curr.propertyAddress}</strong> for carrying on commercial activities and e-commerce trade.
                </p>
                <p className="text-justify text-zinc-300">
                  <strong>2. MONTHLY RENT:</strong> The Lessee shall pay to the Lessor a monthly sum of <strong>₹{monthlyRent.toLocaleString("en-IN")} ({numberToWords(monthlyRent)})</strong> payable on or before the 10th of every calendar month.
                </p>
                <p className="text-justify text-zinc-300">
                  <strong>3. TENURE:</strong> This Agreement shall remain in full force for an initial term of <strong>{curr.tenureMonths} Months</strong> with a standard 5% escalation upon mutual renewal.
                </p>
              </div>
            )}

            {docType === "DEED" && (
              <div className="space-y-3 font-sans">
                <h3 className="font-display font-extrabold text-center text-sm uppercase text-white tracking-wide border-b border-zinc-800 pb-2">
                  DEED OF PARTNERSHIP
                </h3>
                <p className="text-justify text-zinc-300">
                  This Partnership Deed is made on this <strong>1st day of October, 2026</strong>, between Party of the First Part and Party of the Second Part to carry on business under the name and style of <strong>{curr.tenantName}</strong>.
                </p>
                <p className="text-justify text-zinc-300">
                  <strong>1. CAPITAL CONTRIBUTION & PROFIT SHARING:</strong> Both partners have agreed to contribute working capital in equal proportions. The net profits or losses of the firm shall be divided equally in the ratio of <strong>50% : 50%</strong>.
                </p>
                <p className="text-justify text-zinc-300">
                  <strong>2. BANK ACCOUNTS & SIGNING POWERS:</strong> All bank accounts shall be operated jointly or severally by both partners as decided mutually by formal resolution.
                </p>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono text-xs text-zinc-400">
              Format: Legal Stamped Layout • Automated Stamp Clearance
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied ✓" : "Copy Legal Text"}
              </button>
              <button
                onClick={() => alert("Simulating Chrome Extension Injector: Pushing verified draft directly into gst.gov.in (GSTR-REG-01) form!")}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-600/30 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Simulate Portal Injection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

