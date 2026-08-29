"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap, ExternalLink, ShieldCheck, TrendingUp, BarChart3, Sliders, CheckCircle2 } from "lucide-react";
import { StockMarketInvestingSimulator } from "@/components/app-simulators";
import CustomCursor from "@/components/custom-cursor";

import StockCaseStudies from "@/components/stock-case-studies";

export default function InvestingModelerPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#FAFAF9] relative selection:bg-cobalt-700 selection:text-white px-4 sm:px-8 py-12 max-w-7xl mx-auto font-sans">
      <CustomCursor />

      {/* Top Header Navigation */}
      <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-bold transition-all border border-zinc-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ShwetRanjan.com</span>
        </Link>

        <div className="flex items-center gap-2 font-mono text-xs text-cobalt-400 font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SHWETRANJAN.COM / INVESTING-MODELER</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5" />
          <span>ACTIVE STOCK MARKET INVESTOR SINCE 2010</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Buffett & Lynch Dual-Horizon <br />
          <span className="bg-gradient-to-r from-cobalt-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Equity Valuation Engine
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
          Grounded in active public equity investing since 2010. This system combines Warren Buffett's long-term economic moat evaluation with Peter Lynch's mid-term fast-grower metrics to evaluate fair intrinsic value bands with a strict 30% margin of safety.
        </p>
      </div>

      {/* Embedded Bloomberg Terminal Simulator */}
      <div className="mb-16 rounded-3xl bg-[#121218] border border-white/10 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-cobalt-400" />
            <h3 className="font-display font-black text-xl text-white">
              Live Equity Valuation Terminal (Global & Indian Equities Search)
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
            Interactive Model Active
          </span>
        </div>

        <StockMarketInvestingSimulator />
      </div>

      {/* Methodological Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Buffett Pillar */}
        <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-cobalt-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cobalt-400" />
            <span>01. WARREN BUFFETT LONG-TERM STRATEGY</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            Economic Moats & Owner Cash Flows
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Focuses on durable competitive advantages (high switching costs, pricing power, brand moats), high 5-year average Return on Invested Capital (ROIC &gt; 20%), and normalized Owner Earnings (Net Income + Depreciation - Maintenance CapEx). Entry prices strictly demand a 30% Margin of Safety discount below DCF intrinsic value.
          </p>

          <ul className="space-y-2 pt-2 text-xs font-sans text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Owner Earnings CapEx Normalization</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ROIC Reinvestment Rate Analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>30% Margin of Safety DCF Discount</span>
            </li>
          </ul>
        </div>

        {/* Lynch Pillar */}
        <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>02. PETER LYNCH MID-TERM STRATEGY</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            Fast Growers & PEG Inflection Points
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Targets mid-term expansion opportunities (2 to 4 year hold horizons). Evaluates Price-to-Earnings to Growth ratios (PEG &lt; 1.0), inventory turnover velocity vs sales growth, and real-world consumer demand signals gathered directly from ground-level business execution.
          </p>

          <ul className="space-y-2 pt-2 text-xs font-sans text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>PEG Ratio Scanner (&lt; 1.0 Undervalued)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Inventory vs Sales Velocity Ratio</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Category Leader Turnaround Inflection</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Fundamental Equity Research Case Studies */}
      <div className="my-12">
        <StockCaseStudies />
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
        <h3 className="font-display text-2xl font-bold text-white">
          Interested in Quantitative Equity Valuation & Capital Allocation?
        </h3>
        <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto">
          Connect with Shwet Ranjan to discuss equity research, capital allocation frameworks, or automated financial engineering pipelines.
        </p>
        <div className="pt-2">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-cobalt-600/30"
          >
            <span>Get In Touch</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
