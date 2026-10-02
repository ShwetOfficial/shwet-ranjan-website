"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  BarChart3,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Terminal,
  Activity,
  Play,
  RotateCw,
  Sliders,
  MessageSquare,
  Lock,
  ArrowUpRight
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"tax" | "crm" | "equity">("tax");

  // Interactive Tax Demo State
  const [taxVerifying, setTaxVerifying] = useState(false);
  const [taxInvoiceIndex, setTaxInvoiceIndex] = useState(0);
  const simulatedInvoices = [
    {
      vendor: "Apex Industrial Logistics Ltd",
      gstin: "27AAACA1234A1Z5",
      amount: "₹4,82,400",
      itcClaim: "₹86,832",
      checksum: "Valid (Mod-36)",
      status: "Reconciled & Claimable",
    },
    {
      vendor: "CloudScale Infra Solutions",
      gstin: "07AABCS9876C1Z3",
      amount: "₹1,95,000",
      itcClaim: "₹35,100",
      checksum: "Auto-Healed Checksum",
      status: "Verified 2B Match",
    },
    {
      vendor: "Precision Bharat Componentry",
      gstin: "29AADCP4567M1ZX",
      amount: "₹12,40,000",
      itcClaim: "₹2,23,200",
      checksum: "Valid (Mod-36)",
      status: "Safe Harbor ITC",
    },
  ];

  const handleVerifyNextInvoice = () => {
    setTaxVerifying(true);
    setTimeout(() => {
      setTaxInvoiceIndex((prev) => (prev + 1) % simulatedInvoices.length);
      setTaxVerifying(false);
    }, 450);
  };

  // Interactive Equity Demo State
  const [discountRate, setDiscountRate] = useState(10.5);
  const [selectedStock, setSelectedStock] = useState<"BEL" | "CDSL">("BEL");

  const stockData = {
    BEL: {
      name: "Bharat Electronics Ltd",
      ticker: "NSE: BEL",
      baseCashFlow: 3840, // ₹ Cr
      growth5Yr: 16.5,
      terminalGrowth: 5.0,
      shares: 731, // Cr shares
      cmp: 288,
      moat: "9.2/10 (Defense Radar Monopoly)",
      peg: "1.1x (Lynch Fair Band)",
    },
    CDSL: {
      name: "Central Depository Services Ltd",
      ticker: "NSE: CDSL",
      baseCashFlow: 520, // ₹ Cr
      growth5Yr: 20.0,
      terminalGrowth: 5.5,
      shares: 20.9, // Cr shares
      cmp: 1540,
      moat: "9.5/10 (Demat Duopoly 60% Margin)",
      peg: "1.2x (High ROE Compounder)",
    },
  };

  const currStock = stockData[selectedStock];
  // Dynamic DCF approximation based on discount rate slider
  const calcFairValue = () => {
    const rateFactor = (13 - discountRate) / 2.5;
    if (selectedStock === "BEL") {
      return Math.round(315 + rateFactor * 32);
    } else {
      return Math.round(1680 + rateFactor * 140);
    }
  };

  const calculatedFV = calcFairValue();
  const marginOfSafety = Math.round(((calculatedFV - currStock.cmp) / calculatedFV) * 100);

  const proofMetrics = [
    { label: "ITC Cash Flow Recovered", value: "₹14.8L+" },
    { label: "Production Platforms Built", value: "8 Systems" },
    { label: "Active Public Equity Investor", value: "Since 2010" },
    { label: "Legal Drafting Cycle Reduction", value: "90%" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white w-full overflow-hidden">
      {/* Modern Refined Ambient Glow (Atmospheric, deep-space cobalt & indigo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-b from-blue-600/[0.10] via-indigo-600/[0.05] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-72 left-10 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Executive Value Proposition (7 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-slate-300 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Tax Compliance Strategist · Software Systems Architect · Capital Allocator</span>
            </div>

            {/* Primary Executive Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] leading-[1.05] text-white">
                Building scalable systems for{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent">
                  enterprise tax, software & capital allocation.
                </span>
              </h1>
            </div>

            {/* Strategic Value Narrative */}
            <div className="max-w-xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                I eliminate organizational friction by engineering high-throughput tax compliance engines, enterprise operations software, and quantitative equity valuation frameworks.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/systems"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 group hover:translate-y-[-1px]"
              >
                <span>Explore Built Systems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/advisory"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 font-semibold text-sm border border-white/[0.1] transition-all hover:translate-y-[-1px]"
              >
                <span>Strategic Advisory</span>
              </Link>

              <Link
                href="/calculators"
                className="px-5 py-3.5 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <span>Financial Lab</span>
                <span className="text-slate-500">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: World-Class Interactive Live Command Center (5 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#0B0F17]/90 border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden relative">
              {/* Subtle top specular sheen */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Console Header Bar */}
              <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2 font-medium">
                    live_system_console.sh
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE · 99.8% SLA</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="p-2 border-b border-white/[0.06] bg-black/30 flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("tax")}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "tax"
                      ? "bg-blue-600 text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="truncate">Tax Core</span>
                </button>

                <button
                  onClick={() => setActiveTab("crm")}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "crm"
                      ? "bg-blue-600 text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="truncate">WhatsApp CRM</span>
                </button>

                <button
                  onClick={() => setActiveTab("equity")}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "equity"
                      ? "bg-blue-600 text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span className="truncate">Equity DCF</span>
                </button>
              </div>

              {/* Tab Body */}
              <div className="p-5 sm:p-6 min-h-[340px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {/* TAB 1: TAX CORE */}
                  {activeTab === "tax" && (
                    <motion.div
                      key="tax-tab"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">
                          // GSTR-2B Ingestion & Checksum Engine
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-semibold">
                          ZERO-CLOUD LEAKAGE
                        </span>
                      </div>

                      {/* Invoice Simulation Card */}
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-xs text-slate-400 font-mono block">
                              Active Vendor
                            </span>
                            <span className="text-sm font-bold text-white block">
                              {simulatedInvoices[taxInvoiceIndex].vendor}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold">
                            {simulatedInvoices[taxInvoiceIndex].checksum}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.06] text-xs">
                          <div>
                            <span className="text-slate-400 block font-mono text-[11px]">GSTIN Verified</span>
                            <span className="text-slate-200 font-mono font-medium">
                              {simulatedInvoices[taxInvoiceIndex].gstin}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-mono text-[11px]">ITC Value Claimed</span>
                            <span className="text-emerald-400 font-bold text-sm">
                              {simulatedInvoices[taxInvoiceIndex].itcClaim}
                            </span>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-black/40 border border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{simulatedInvoices[taxInvoiceIndex].status}</span>
                          </span>
                          <span className="text-slate-500">2B Table 4(A)(5)</span>
                        </div>
                      </div>

                      {/* Interactive Button */}
                      <div className="pt-1 flex items-center justify-between">
                        <button
                          onClick={handleVerifyNextInvoice}
                          disabled={taxVerifying}
                          className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono font-medium border border-white/[0.1] transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                          <RotateCw className={`w-3.5 h-3.5 ${taxVerifying ? "animate-spin text-blue-400" : ""}`} />
                          <span>{taxVerifying ? "Verifying AST..." : "Test Next Inbound Invoice"}</span>
                        </button>

                        <span className="text-[11px] text-slate-400 font-mono">
                          Cumulative: ₹14.8L+
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: WHATSAPP CRM */}
                  {activeTab === "crm" && (
                    <motion.div
                      key="crm-tab"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">
                          // Baileys Multi-Device Socket + Gemini 1.5
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-semibold">
                          180ms LATENCY
                        </span>
                      </div>

                      {/* Simulated Chat Bubble */}
                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2.5 font-sans">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] text-xs text-slate-300 border border-white/[0.04]">
                          <span className="text-[10px] font-mono text-blue-400 block mb-0.5">
                            Inbound Client Query (WhatsApp Socket)
                          </span>
                          &ldquo;We received DRC-01A for FY 22-23 alleging ₹3.4L ITC mismatch. Can your system verify?&rdquo;
                        </div>

                        <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-200">
                          <span className="text-[10px] font-mono text-emerald-400 block mb-0.5 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            Auto-Pilot AI Agent Response (142ms)
                          </span>
                          &ldquo;Analyzing DRC-01A against GSTR-2B. Auto-extracted 18 invoices. Full statutory reply with Sec 16(2) case citations ready for filing.&rdquo;
                        </div>
                      </div>

                      {/* Socket Telemetry Metrics */}
                      <div className="grid grid-cols-3 gap-2 text-center font-mono">
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-[10px] text-slate-400 block">Socket</span>
                          <span className="text-xs text-emerald-400 font-bold">Connected</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-[10px] text-slate-400 block">Database</span>
                          <span className="text-xs text-blue-400 font-bold">SQLite WAL</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-[10px] text-slate-400 block">API Cost</span>
                          <span className="text-xs text-amber-400 font-bold">₹0 Marginal</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: EQUITY DCF */}
                  {activeTab === "equity" && (
                    <motion.div
                      key="equity-tab"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setSelectedStock("BEL")}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                              selectedStock === "BEL"
                                ? "bg-blue-600 text-white"
                                : "text-slate-400 hover:text-white bg-white/[0.04]"
                            }`}
                          >
                            NSE: BEL
                          </button>
                          <button
                            onClick={() => setSelectedStock("CDSL")}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                              selectedStock === "CDSL"
                                ? "bg-blue-600 text-white"
                                : "text-slate-400 hover:text-white bg-white/[0.04]"
                            }`}
                          >
                            NSE: CDSL
                          </button>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 font-medium">
                          {currStock.moat}
                        </span>
                      </div>

                      {/* DCF Valuation Metrics */}
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3 font-mono">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">Current Market Price</span>
                            <span className="text-lg font-extrabold text-white">₹{currStock.cmp}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 block">Intrinsic DCF Fair Value</span>
                            <span className="text-lg font-extrabold text-emerald-400">₹{calculatedFV}</span>
                          </div>
                        </div>

                        {/* Interactive Discount Rate Slider */}
                        <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">Discount Rate (WACC): {discountRate}%</span>
                            <span className="text-blue-400 font-bold">
                              MoS: {marginOfSafety > 0 ? `+${marginOfSafety}%` : `${marginOfSafety}%`}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="8.5"
                            max="13.5"
                            step="0.5"
                            value={discountRate}
                            onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Lynch PEG: {currStock.peg}</span>
                        <Link
                          href="/investing-modeler"
                          className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                        >
                          <span>Full DCF Terminal</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400">Interactive Production Preview</span>
                  <Link
                    href={activeTab === "tax" ? "/calculators" : activeTab === "crm" ? "/systems" : "/research"}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 group"
                  >
                    <span>Inspect Full Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Executive Proof Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-white/[0.08] w-full"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {proofMetrics.map((item, idx) => (
              <div
                key={item.label}
                className={`space-y-2 ${
                  idx !== proofMetrics.length - 1
                    ? "lg:border-r lg:border-white/[0.08] lg:pr-8"
                    : ""
                }`}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 block leading-snug font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
