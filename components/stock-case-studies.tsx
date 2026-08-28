"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stockCaseStudiesData, StockCaseStudy } from "@/data/stock-case-studies";
import Modal from "./modal";
import { TrendingUp, AlertTriangle, ShieldCheck, DollarSign, ArrowUpRight, Zap, BarChart2, BookOpen, Calendar } from "lucide-react";

export default function StockCaseStudies() {
  const [selectedId, setSelectedId] = useState<string>("itc-ltd");
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
    const tickerKey = currentStudy.id === "itc-ltd" ? "ITC" : currentStudy.id === "hdfc-bank" ? "HDFCBANK" : currentStudy.id === "infosys-ltd" ? "INFY" : currentStudy.id === "tcs-ltd" ? "TCS" : "WIPRO";
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

  // Use Last Trading Day Closing Price as anchor for calculations (Buffett Model Standard)
  const rawCentralValue = parseFloat(currentStudy.centralIntrinsicValue.replace(/[^0-9.]/g, "")) || 368;
  const fallbackStaticPrice = parseFloat(currentStudy.currentPrice.replace(/[^0-9.]/g, "")) || 272;
  const lastClosePrice = liveQuote?.previousClose || liveQuote?.price || fallbackStaticPrice;
  const currentLivePrice = liveQuote?.price || fallbackStaticPrice;

  const dynamicUpside = rawCentralValue > lastClosePrice 
    ? `+${(((rawCentralValue - lastClosePrice) / lastClosePrice) * 100).toFixed(1)}%`
    : `${(((rawCentralValue - lastClosePrice) / lastClosePrice) * 100).toFixed(1)}%`;
  const dynamicMargin = rawCentralValue > lastClosePrice
    ? `${(((rawCentralValue - lastClosePrice) / lastClosePrice) * 100).toFixed(0)}% Margin of Safety`
    : "At Fair Value";

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
        <p className="max-w-md font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
          Warren Buffett-style fundamental intrinsic value case studies. Evaluating owner earnings, moat durability, temporary market panics, and safety margins.
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
                  : "bg-[#121218] text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
              data-cursor="CASE STUDY"
            >
              <BarChart2 className={`w-4 h-4 ${isSelected ? "text-white" : "text-cobalt-400"}`} />
              <div className="text-left">
                <span className="block text-white font-extrabold">{study.companyName}</span>
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

        {/* 4 Metric Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                Last Trading Day Close
              </span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold border border-amber-500/30">
                LAST CLOSE
              </span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-black text-white">
              {liveQuote ? `${liveQuote.currency === "INR" ? "₹" : "$"}${lastClosePrice.toLocaleString()}` : currentStudy.currentPrice}
            </div>
            <span className="text-[10px] font-mono text-zinc-400 mt-1 block">
              Used as Baseline for DCF & Safety Margin
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
              Base Intrinsic Value
            </span>
            <div className="font-display text-xl sm:text-2xl font-black text-emerald-400">{currentStudy.centralIntrinsicValue}</div>
            <span className="text-[11px] font-mono text-zinc-400 mt-1 block">Range: {currentStudy.intrinsicValueRange}</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
              Margin of Safety / Upside
            </span>
            <div className="font-display text-xl sm:text-2xl font-black text-cyan-400">{dynamicUpside}</div>
            <span className="text-[11px] font-mono text-emerald-300 mt-1 block">{dynamicMargin}</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden">
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
              Dividend Cushion
            </span>
            <div className="font-display text-xl sm:text-2xl font-black text-amber-400 tracking-tight">{currentStudy.dividendYield.split(' (')[0]}</div>
            <span className="text-[11px] font-mono text-amber-300/90 mt-0.5 block font-semibold">
              {currentStudy.dividendYield.includes('(') ? `(${currentStudy.dividendYield.split('(')[1]}` : "Annual Cash Payout"}
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
                    <span className="font-mono text-[10px] text-zinc-400 block">{m.label}</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Intrinsic Valuation Matrix & Buffett Buy Framework */}
          <div className="space-y-6">
            {/* DCF / Residual Scenario Matrix */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>Intrinsic Value Scenarios</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-400">{currentStudy.intrinsicModel.method}</span>
              </div>
              <p className="font-sans text-xs text-zinc-400">
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
                      <span className="text-[10px] text-zinc-400 font-sans block truncate">{scenario.condition}</span>
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-emerald-400 shrink-0">{scenario.intrinsicValue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buffett Buy Framework */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Buffett Valuation & Buying Framework</span>
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
          title={`${currentStudy.companyName} (${currentStudy.ticker}) — Full Case Study`}
          category={`Intrinsic Value: ${currentStudy.centralIntrinsicValue} • Current: ${currentStudy.currentPrice}`}
        >
          <div className="space-y-6 font-sans text-white">
            <div className="p-4 rounded-xl bg-cobalt-500/10 border-l-4 border-cobalt-500 text-sm text-zinc-200 flex flex-col gap-1">
              <div><strong>Buffett Summary Verdict:</strong> {currentStudy.buffettVerdict}</div>
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
        </Modal>
      )}
    </section>
  );
}
