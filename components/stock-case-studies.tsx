"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stockCaseStudiesData, StockCaseStudy } from "@/data/stock-case-studies";
import Modal from "./modal";
import { TrendingUp, AlertTriangle, ShieldCheck, DollarSign, ArrowUpRight, Zap, BarChart2, BookOpen, Calendar, Star } from "lucide-react";

export default function StockCaseStudies() {
  const [selectedId, setSelectedId] = useState<string>(stockCaseStudiesData[0]?.id || "hcltech-ltd");
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [liveQuote, setLiveQuote] = useState<{
    price: number;
    previousClose: number;
    change: number;
    changePercent: number;
    currency: string;
    isLive: boolean;
  } | null>(null);
  const [loadingQuote, setLoadingQuote] = useState<boolean>(false);

  const currentStudy = stockCaseStudiesData.find((s) => s.id === selectedId) || stockCaseStudiesData[0];

  // Fetch live market quote & last day close price whenever active stock study changes
  React.useEffect(() => {
    let isMounted = true;
    const tickerMap: Record<string, string> = {
      "irctc-ltd": "IRCTC",
      "itc-ltd": "ITC",
      "hdfc-bank": "HDFCBANK",
      "infosys-ltd": "INFY",
      "tcs-ltd": "TCS",
      "wipro-ltd": "WIPRO",
      "sbi-ltd": "SBIN",
      "hcltech-ltd": "HCLTECH",
      "icicibank-ltd": "ICICIBANK",
    };
    const tickerKey = tickerMap[currentStudy.id] || currentStudy.ticker.replace("NSE: ", "").trim();
    setLoadingQuote(true);

    fetch(`/api/stock-quote?ticker=${tickerKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data && typeof data.price === "number") {
          setLiveQuote({
            price: data.price,
            previousClose: data.previousClose || data.price,
            change: data.change || 0,
            changePercent: data.changePercent || 0,
            currency: data.currency || "INR",
            isLive: data.isLive ?? true,
          });
        }
      })
      .catch((err) => console.error("Stock quote fetch error:", err))
      .finally(() => {
        if (isMounted) setLoadingQuote(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedId, currentStudy]);

  // Use Last Trading Day Closing Price as anchor for calculations (Buffett / Lynch Model Standard)
  const rawCentralValue = parseFloat(currentStudy.centralIntrinsicValue.replace(/[^0-9.]/g, "")) || 368;
  const fallbackStaticPrice = parseFloat(currentStudy.currentPrice.replace(/[^0-9.]/g, "")) || 272;
  const lastClosePrice = liveQuote?.previousClose || liveQuote?.price || fallbackStaticPrice;
  const currentLivePrice = liveQuote?.price || fallbackStaticPrice;

  const percentDiff = ((rawCentralValue - lastClosePrice) / lastClosePrice) * 100;
  const dynamicUpside = percentDiff > 0 
    ? `+${percentDiff.toFixed(1)}%`
    : `${percentDiff.toFixed(1)}%`;
  const dynamicMargin = percentDiff > 3
    ? `${percentDiff.toFixed(0)}% Margin of Safety`
    : percentDiff >= -3 && percentDiff <= 3
    ? "At Fair Value (0% Safety Margin)"
    : `${Math.abs(percentDiff).toFixed(1)}% Premium (0% Safety Margin)`;
  const upsideColor = percentDiff > 0 ? "text-cyan-400" : "text-rose-400";
  const marginColor = percentDiff > 0 ? "text-emerald-300" : "text-amber-300";

  return (
    <section id="stock-case-studies" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>09. PUBLIC EQUITY CASE STUDIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Fundamental Stock Research
          </h2>
        </div>
        <p className="max-w-md font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
          Warren Buffett & Peter Lynch-style fundamental intrinsic value case studies. Evaluating owner earnings, monopoly moats, segment economics, and safety margins.
        </p>
      </div>

      {/* Stock Switcher Buttons */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
        {stockCaseStudiesData.map((study) => {
          const isSelected = study.id === selectedId;
          return (
            <button
              key={study.id}
              onClick={() => setSelectedId(study.id)}
              className={`px-5 py-3 rounded-2xl font-mono text-xs font-bold transition-all duration-300 flex items-center gap-3 border ${
                isSelected
                  ? "bg-cobalt-600 text-white border-cobalt-500 shadow-lg shadow-cobalt-600/30"
                  : "bg-[#121218] text-zinc-300 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
              data-cursor="CASE STUDY"
            >
              <BarChart2 className={`w-4 h-4 ${isSelected ? "text-white" : "text-cobalt-400"}`} />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="block text-white font-extrabold">{study.companyName}</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-[10px] font-bold shrink-0 flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    <span>{study.qualityScore}</span>
                  </span>
                </div>
                <span className="text-[10px] text-zinc-300/80 font-normal">{study.ticker}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Panel */}
      <motion.div
        key={currentStudy.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl bg-[#121218] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8"
      >
        {/* Top Summary Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="font-mono text-xs text-cobalt-400 font-bold uppercase tracking-wider">
                {currentStudy.sector}
              </span>
              {currentStudy.frameworkBadge && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  {currentStudy.frameworkBadge}
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-amber-500/30 bg-amber-500/10 text-amber-300 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>QUALITY: {currentStudy.qualityScore}</span>
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${currentStudy.verdictColor}`}>
                {currentStudy.verdictBadge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>RESEARCH DATE: {currentStudy.researchDate}</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold border border-amber-500/30 bg-amber-500/10 text-amber-300 flex items-center gap-1.5">
                <span>📊 BASELINE: Last Day Close ({liveQuote?.currency === "USD" ? "$" : "₹"}{lastClosePrice.toLocaleString()})</span>
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              {currentStudy.companyName} ({currentStudy.ticker})
            </h3>
            <p className="font-sans text-sm text-zinc-300 mt-2 max-w-2xl">
              {currentStudy.summaryHeader}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setModalActive(true)}
              className="px-5 py-3 rounded-2xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-cobalt-600/30 flex items-center gap-2"
              data-cursor="READ FULL CASE STUDY"
            >
              <BookOpen className="w-4 h-4" />
              <span>Full Valuation Breakdown</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Metric Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] font-bold text-zinc-300 uppercase tracking-widest block">
                Last Trading Day Close
              </span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold border border-amber-500/30">
                LAST CLOSE
              </span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-black text-white">
              {liveQuote ? `${liveQuote.currency === "INR" ? "₹" : "$"}${lastClosePrice.toLocaleString()}` : currentStudy.currentPrice}
            </div>
            <span className="text-[10px] font-mono text-zinc-300 mt-1 block">
              Used as Baseline for DCF & Safety Margin
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="font-mono text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-1">
              Base Intrinsic Value
            </span>
            <div className="font-display text-xl sm:text-2xl font-black text-emerald-400">{currentStudy.centralIntrinsicValue}</div>
            <span className="text-[11px] font-mono text-zinc-300 mt-1 block">Range: {currentStudy.intrinsicValueRange}</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="font-mono text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-1">
              Margin of Safety / Upside
            </span>
            <div className={`font-display text-xl sm:text-2xl font-black ${upsideColor}`}>{dynamicUpside}</div>
            <span className={`text-[11px] font-mono ${marginColor} mt-1 block`}>{dynamicMargin}</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden">
            <span className="font-mono text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-1">
              Dividend Cushion
            </span>
            <div className="font-display text-xl sm:text-2xl font-black text-amber-400 tracking-tight">{currentStudy.dividendYield.split(' (')[0]}</div>
            <span className="text-[11px] font-mono text-amber-300/90 mt-0.5 block font-semibold">
              {currentStudy.dividendYield.includes('(') ? `(${currentStudy.dividendYield.split('(')[1]}` : "Annual Cash Payout"}
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden">
            <span className="font-mono text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-1">
              Company Quality Rating
            </span>
            <div className="font-display text-xl sm:text-2xl font-black text-amber-300 flex items-center gap-1.5">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
              <span>{currentStudy.qualityScore}</span>
            </div>
            <span className="text-[11px] font-mono text-amber-300/90 mt-0.5 block font-semibold truncate">
              {currentStudy.qualityTag}
            </span>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-zinc-800">
          {/* Column 1: Why It Fell & Normalized Cash Flow */}
          <div className="space-y-6">
            {/* Why It Fell Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{currentStudy.whyItFell.title}</span>
              </div>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                {currentStudy.whyItFell.description}
              </p>
              <div className="space-y-2 pt-2">
                {currentStudy.whyItFell.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-sans text-zinc-300">
                    <span className="text-cobalt-400 font-mono font-bold">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Normalized Earnings Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <DollarSign className="w-4 h-4 shrink-0" />
                <span>{currentStudy.normalizedEarnings.title}</span>
              </div>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                {currentStudy.normalizedEarnings.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentStudy.normalizedEarnings.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="font-mono text-[10px] text-zinc-300 block">{m.label}</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Intrinsic Valuation Matrix & Buffett/Lynch Buy Framework */}
          <div className="space-y-6">
            {/* Scenario Matrix */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>Intrinsic Value Scenarios</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-300">{currentStudy.intrinsicModel.method}</span>
              </div>
              <p className="font-sans text-xs text-zinc-300">
                {currentStudy.intrinsicModel.description}
              </p>

              <div className="space-y-2 pt-2">
                {currentStudy.intrinsicModel.scenarios.map((scenario) => (
                  <div
                    key={scenario.name}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono gap-2 ${
                      scenario.status === "base"
                        ? "bg-cobalt-500/10 border-cobalt-500/40 text-white font-bold"
                        : "bg-zinc-900/90 border-zinc-800 text-zinc-300"
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="font-bold block truncate">{scenario.name}</span>
                      <span className="text-[10px] text-zinc-300 font-sans block truncate">{scenario.condition}</span>
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-emerald-400 shrink-0">{scenario.intrinsicValue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buying Framework */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{currentStudy.framework === "Peter Lynch" ? "Peter Lynch Valuation & Buying Framework" : "Buffett Valuation & Buying Framework"}</span>
              </div>
              <div className="space-y-2 pt-1">
                {currentStudy.buffettFramework.buyThresholds.map((t) => (
                  <div key={t.priceRange} className="flex items-center justify-between text-[11px] sm:text-xs font-mono py-1.5 px-3 rounded bg-zinc-900/60 border border-zinc-800 gap-2">
                    <span className="text-zinc-300 font-bold shrink-0">{t.priceRange}</span>
                    <span className={`font-bold text-right ${t.color}`}>{t.verdict}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Deep-Dive Modal */}
      {modalActive && (
        <Modal
          isOpen={modalActive}
          onClose={() => setModalActive(false)}
          title={`${currentStudy.companyName} (${currentStudy.ticker}) — Comprehensive Analysis`}
          category={`${currentStudy.framework || "Fundamental"} Analysis • Intrinsic: ${currentStudy.centralIntrinsicValue} • Last Close: ${currentStudy.currentPrice}`}
        >
          {currentStudy.fullAnalysis ? (
            /* Rich Multi-Section Detailed Analysis for Lynch / Detailed Studies */
            <div className="space-y-8 font-sans text-white">
              {/* Verdict Header Card */}
              <div className="p-5 rounded-2xl bg-cobalt-500/10 border border-cobalt-500/30 text-sm text-zinc-200 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-mono text-xs font-bold text-cyan-300 uppercase tracking-widest">
                    Framework: {currentStudy.fullAnalysis.investingStyle} Style Investing
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {currentStudy.fullAnalysis.classification}
                  </span>
                </div>
                <div className="font-display text-base font-bold text-white">
                  {currentStudy.fullAnalysis.lynchVerdictSummary}
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  📅 Research Date: <strong>{currentStudy.researchDate}</strong> | Baseline Data: <strong>{currentStudy.dataAsOf}</strong>
                </div>
              </div>

              {/* 1. The Story in 3 Sentences */}
              <div className="space-y-3 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <h4 className="font-display text-lg font-bold text-cyan-400 flex items-center gap-2">
                  <span>📖 1. The Story in 3 Sentences</span>
                </h4>
                <p className="text-zinc-200 text-sm leading-relaxed italic bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                  &ldquo;{currentStudy.fullAnalysis.threeSentenceStory}&rdquo;
                </p>
              </div>

              {/* 2. Segment Economics Table */}
              <div className="space-y-3 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <h4 className="font-display text-lg font-bold text-amber-400 flex items-center gap-2">
                  <span>📊 2. Segment Economics Breakdown</span>
                </h4>
                <p className="text-xs text-zinc-300">
                  Revenue alone is misleading—profitability reveals the true underlying cash machine.
                </p>
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800 text-zinc-400 bg-zinc-950">
                        <th className="p-3 font-bold">Segment</th>
                        <th className="p-3 font-bold">FY26 Revenue</th>
                        <th className="p-3 font-bold">Segment Profit</th>
                        <th className="p-3 font-bold">Profit Margin</th>
                        <th className="p-3 font-bold">Strategic Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentStudy.fullAnalysis.segmentBreakdown.map((seg, idx) => (
                        <tr key={idx} className="border-b border-zinc-800/60 hover:bg-zinc-800/40 transition-colors">
                          <td className="p-3 font-bold text-white">{seg.name}</td>
                          <td className="p-3 text-cyan-300">{seg.revenue}</td>
                          <td className="p-3 text-emerald-400 font-bold">{seg.profit}</td>
                          <td className="p-3 text-amber-300 font-bold">{seg.margin}</td>
                          <td className="p-3 text-zinc-300 font-sans text-[11px]">{seg.quality}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Moat & Government Relationship */}
              <div className="space-y-4 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <h4 className="font-display text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <span>🏰 3. Moat Strength & Government Relationship</span>
                </h4>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                    Moat Score: {currentStudy.fullAnalysis.moatBreakdown.score}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                    <span className="font-mono text-xs font-bold text-emerald-400 block uppercase">Core Competitive Pillars</span>
                    {currentStudy.fullAnalysis.moatBreakdown.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                    <span className="font-mono text-xs font-bold text-amber-400 block uppercase">Government & Policy Caveats</span>
                    {currentStudy.fullAnalysis.moatBreakdown.caveats.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Latest Earnings Signal & Margin Analysis */}
              <div className="space-y-3 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <h4 className="font-display text-lg font-bold text-rose-400 flex items-center gap-2">
                  <span>⚡ 4. Q1 FY27 Signal & Margin Compression Analysis</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="font-mono text-[10px] text-zinc-400 block uppercase">Q1 FY27 Revenue</span>
                    <span className="font-mono text-sm font-bold text-emerald-400">{currentStudy.fullAnalysis.quarterlySignalQ1FY27.revenue} ({currentStudy.fullAnalysis.quarterlySignalQ1FY27.revenueGrowth})</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="font-mono text-[10px] text-zinc-400 block uppercase">Q1 FY27 PAT</span>
                    <span className="font-mono text-sm font-bold text-amber-300">{currentStudy.fullAnalysis.quarterlySignalQ1FY27.pat} ({currentStudy.fullAnalysis.quarterlySignalQ1FY27.patGrowth})</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-sans bg-zinc-950 p-3 rounded-xl border border-zinc-800 leading-relaxed">
                  <strong>Why Profit Stayed Flat:</strong> {currentStudy.fullAnalysis.quarterlySignalQ1FY27.marginCompressionReason}
                </p>
              </div>

              {/* 5. Peter Lynch Scorecard & 10x Reality Check */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Scorecard Table */}
                <div className="space-y-3 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                  <h4 className="font-display text-base font-bold text-cyan-300">
                    ⭐ {currentStudy.fullAnalysis.investingStyle === "Warren Buffett" ? "Warren Buffett Scorecard" : "Peter Lynch Scorecard"}
                  </h4>
                  <div className="space-y-2">
                    {currentStudy.fullAnalysis.lynchScorecard.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs font-mono p-2 rounded bg-zinc-950 border border-zinc-800">
                        <span className="text-zinc-300 font-bold">{item.factor}</span>
                        <span className="text-amber-300 font-bold">{item.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compounding & Growth Triggers */}
                <div className="space-y-4 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                  <h4 className="font-display text-base font-bold text-emerald-400">
                    🚀 {currentStudy.fullAnalysis.investingStyle === "Warren Buffett" ? "Intrinsic Compounding & Growth Drivers" : "Tenbagger Reality Check & Growth Drivers"}
                  </h4>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono">
                    <div>Target Market Cap: <span className="text-cyan-300 font-bold">{currentStudy.fullAnalysis.tenbaggerAnalysis.targetMarketCap}</span></div>
                    <div>Required PAT: <span className="text-emerald-400 font-bold">{currentStudy.fullAnalysis.tenbaggerAnalysis.requiredPAT}</span></div>
                    <div>Years @ 12% CAGR: <span className="text-amber-300 font-bold">{currentStudy.fullAnalysis.tenbaggerAnalysis.yearsAt12Percent}</span></div>
                    <div>Years @ 15% CAGR: <span className="text-amber-300 font-bold">{currentStudy.fullAnalysis.tenbaggerAnalysis.yearsAt15Percent}</span></div>
                    <p className="font-sans text-xs text-zinc-300 pt-2 border-t border-zinc-800 leading-relaxed">
                      {currentStudy.fullAnalysis.tenbaggerAnalysis.verdict}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-cyan-300 block uppercase">Key Long-Term Growth Engines</span>
                    {currentStudy.fullAnalysis.growthTriggers.map((trig, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans text-zinc-300">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{trig}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. Scuttlebutt Test & What To Watch */}
              <div className="space-y-4 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                <h4 className="font-display text-base font-bold text-amber-400">
                  🔍 Scuttlebutt Test & 5 Key Accumulation Triggers
                </h4>
                <p className="text-xs font-sans text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800 leading-relaxed">
                  <strong>The Scuttlebutt Verdict:</strong> {currentStudy.fullAnalysis.scuttlebuttVerdict}
                </p>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <span className="font-mono text-xs font-bold text-emerald-400 block uppercase">5 Conditions to Become Aggressive Buyer</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                    {currentStudy.fullAnalysis.fiveThingsToWatch.map((w, idx) => (
                      <div key={idx} className="p-2 rounded bg-zinc-900 border border-zinc-800 text-emerald-300 font-semibold">
                        {w}
                      </div>
                    ))}
                  </div>
                </div>
                {currentStudy.fullAnalysis.risksAndGovernance && (
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                    <span className="font-mono text-xs font-bold text-rose-400 block uppercase">Governance & Leadership Transition Notes</span>
                    {currentStudy.fullAnalysis.risksAndGovernance.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans text-zinc-300">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Standard Detailed Case Study view for other stocks */
            <div className="space-y-6 font-sans text-white">
              <div className="p-4 rounded-xl bg-cobalt-500/10 border-l-4 border-cobalt-500 text-sm text-zinc-200 flex flex-col gap-1">
                <div><strong>Summary Verdict:</strong> {currentStudy.buffettVerdict}</div>
                <div className="text-xs font-mono text-cyan-300 mt-1">
                  📅 Research Date: <strong>{currentStudy.researchDate}</strong> • Baseline: <strong>{currentStudy.dataAsOf}</strong>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-lg font-bold text-white">1. Market Context & Recent Price Decline</h4>
                <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                  {currentStudy.whyItFell.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-lg font-bold text-white">2. Normalized Earnings vs Accounting Noise</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {currentStudy.normalizedEarnings.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-lg font-bold text-white">3. Economic Moat & Reinvestment Return</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {currentStudy.buffettFramework.reinvestmentNote}
                </p>
              </div>
            </div>
          )}
        </Modal>
      )}
    </section>
  );
}
