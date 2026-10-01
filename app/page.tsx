import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ContactFooter from "@/components/contact-footer";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  BarChart3,
  TrendingUp,
  Layers,
  Sparkles,
  Calculator,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SHWET RANJAN — Enterprise Systems, Tax Compliance Architecture & Capital Allocation",
  description:
    "Executive portfolio of Shwet Ranjan: Multi-disciplinary Business Operator, Tax Compliance Architect, Full-Stack Engineer, and Intrinsic Value Investor.",
};

export default function Home() {
  const flagshipSystems = [
    {
      id: "taxamicus-sales-crm",
      name: "Taxamicus Sales CRM & AI WhatsApp Auto-Pilot",
      category: "Enterprise CRM & WhatsApp Automation",
      status: "⚡ Production-Ready",
      desc: "Full-stack multi-agent CRM with Baileys WhatsApp Engine, Gemini Flash auto-pilot, and service-aware drip cadences built for Indian professional services.",
      metrics: "Sub-200ms Socket • 40% Reply Boost • SQLite WAL",
      tag: "WhatsApp CRM",
    },
    {
      id: "gst-purchase-invoice-ocr",
      name: "99% Precision GST Purchase Invoice OCR",
      category: "Computer Vision & Statutory Checksums",
      status: "⚡ 99.2% Precision",
      desc: "Self-hosted PaddleOCR 3.x engine with 2D spatial coordinate parsing, Modulo-36 check-digit auto-repair, and ₹0 marginal API cost.",
      metrics: "620ms CPU Inference • Zero Cloud Leakage • 100% On-Premise",
      tag: "Vision OCR",
    },
    {
      id: "auto-gst-registration-drafting",
      name: "Auto GST Registration & Legal Drafter",
      category: "Multimodal AI & Legal Drafting",
      status: "⚡ 90% Automation",
      desc: "Autonomous drafting of GST-ready Landlord NOC, Commercial Rent Agreement & Partnership Deed with instant notarization-ready formatting.",
      metrics: "Under 4s Generation • Multi-State Stamp Rules • Automated AST",
      tag: "Legal AI",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 01. EXECUTIVE VALUE PROPOSITION & FOUR PILLARS */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURAL DISCIPLINES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Where Strategy Meets Execution
            </h2>
          </div>
          <p className="max-w-md font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
            Eliminating organizational silos by unifying complex statutory taxation, software engineering, and disciplined public equity capital allocation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#121620] border border-white/10 hover:border-cobalt-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cobalt-500/10 text-cobalt-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-cobalt-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                Tax Compliance Architecture
              </h3>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                Multi-state GST infrastructure, automated GSTR-2B ITC reconciliation, and marketplace tax compliance for Amazon, Flipkart & D2C brands.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-cobalt-400 font-bold">
              ₹14.8L+ ITC Unlocked
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-emerald-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                Enterprise Software Systems
              </h3>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                Full-stack Next.js, Python, and SQLite engines. Turnkey operational CRMs, WhatsApp automation sockets, and on-premise vision OCR.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-emerald-400 font-bold">
              8 Production Platforms
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-cyan-500/20">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                Quantitative Capital Allocation
              </h3>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                Intrinsic value DCF modeling synthesizing Warren Buffett’s franchise moats with Peter Lynch’s PEG ratios. Active Indian market investor since 2010.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-cyan-400 font-bold">
              5 In-Depth Stock Studies
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121620] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-amber-500/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                Operational Strategy & Scale
              </h3>
              <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                Cross-functional execution navigating regulatory audits, courier freight RTO minimization, and multi-state fulfillment hub arbitrage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-amber-400 font-bold">
              End-to-End Leadership
            </div>
          </div>
        </div>

        {/* Link to About */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono text-cobalt-400 hover:text-cobalt-300 font-bold uppercase tracking-wider transition group"
          >
            <span>Read Shwet's Full Journey & Operating Philosophy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 02. AUDITED TRACK RECORD & QUANTIFIED IMPACT STRIP */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-950/90 via-[#0F1422]/90 to-zinc-950/90 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800/80 gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Audited Operational Track Record
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Measurable Impact Across Client Platforms
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Verified across high-volume E-Com sellers & enterprises
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-400">₹14.8L+</span>
              <span className="font-sans text-xs font-bold text-white mt-2 block">ITC Cash Flow Unlocked</span>
              <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">
                Automated GSTR-2B reconciliation mitigating delinquent supplier locks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="font-mono text-2xl sm:text-3xl font-black text-amber-400">+31.4%</span>
              <span className="font-sans text-xs font-bold text-white mt-2 block">Amazon Buy Box Lift</span>
              <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">
                Multi-state VPOB hub deployment unlocking 1-day Prime delivery badges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="font-mono text-2xl sm:text-3xl font-black text-cyan-400">90%</span>
              <span className="font-sans text-xs font-bold text-white mt-2 block">Drafting Time Eliminated</span>
              <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">
                AI multimodal engine generating Rent Agreements & Deeds in &lt;4s.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <span className="font-mono text-2xl sm:text-3xl font-black text-cobalt-400">99.2%</span>
              <span className="font-sans text-xs font-bold text-white mt-2 block">Invoice OCR Line Precision</span>
              <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">
                On-premise PaddleOCR 3.x with Mod-36 checksum auto-healing at ₹0 API cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED FLAGSHIP SYSTEMS (CLEAN 3-CARD SHOWCASE) */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED SOFTWARE INNOVATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Production Software Platforms
            </h2>
          </div>
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-mono font-bold transition group shrink-0"
          >
            <span>View All 8 Built Platforms</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Clean Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flagshipSystems.map((sys) => (
            <div
              key={sys.id}
              className="p-7 rounded-3xl bg-[#121620] border border-white/10 hover:border-cobalt-500/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase font-semibold">
                    {sys.tag}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    {sys.status}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cobalt-300 transition-colors mb-2">
                  {sys.name}
                </h3>
                <p className="font-mono text-xs text-cobalt-400 font-semibold mb-4">
                  {sys.category}
                </p>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-6">
                  {sys.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-mono text-zinc-400 block mb-3">
                  {sys.metrics}
                </span>
                <Link
                  href="/systems"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-cobalt-600 text-zinc-300 hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-zinc-800 group-hover:border-cobalt-500"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Systems Action Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cobalt-500/10 text-cobalt-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                Looking for the interactive simulators & public web apps?
              </span>
              <span className="text-xs text-zinc-400">
                Explore our full engineering portfolio including live simulators for OCR, CRM, and Legal Drafting.
              </span>
            </div>
          </div>
          <Link
            href="/systems"
            className="px-6 py-2.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition shrink-0"
          >
            Launch Systems Suite →
          </Link>
        </div>
      </section>

      {/* 04. CALCULATORS LAB & EQUITY RESEARCH TEASER */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculators Teaser Box */}
          <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE COMPLIANCE LAB</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                Financial & Operational Calculators
              </h3>

              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Test real numbers against statutory tax rules and fulfillment models:
              </p>

              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs flex items-center justify-between">
                  <span className="text-zinc-200 font-medium">1. GST ITC Cash Lock & Leakage Audit</span>
                  <span className="text-[11px] font-mono text-emerald-400">GSTR-2B Model</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs flex items-center justify-between">
                  <span className="text-zinc-200 font-medium">2. D2C Unit Economics & RTO Margin Stress Test</span>
                  <span className="text-[11px] font-mono text-cyan-400">CM3 Waterfall</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs flex items-center justify-between">
                  <span className="text-zinc-200 font-medium">3. VPOB & Amazon Prime 1-Day Multi-State ROI</span>
                  <span className="text-[11px] font-mono text-amber-400">Hub Arbitrage</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800">
              <Link
                href="/calculators"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <span>Launch Calculators Lab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Equity Research Teaser Box */}
          <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>QUANTITATIVE RESEARCH</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                Fundamental Equity Case Studies
              </h3>

              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                In-depth institutional valuation studies evaluating economic moats and exit multiples:
              </p>

              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">Bharat Electronics Ltd (BEL)</span>
                    <span className="text-[11px] text-zinc-400 font-mono">Radar & EW Monopoly • 28% ROE • Zero Debt</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">9.2/10 Moat</span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">Central Depository Services (CDSL)</span>
                    <span className="text-[11px] text-zinc-400 font-mono">Capital Markets Duopoly • 60%+ Margin</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold">9.5/10 Moat</span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">HUDCO, HAL & IRCTC Studies</span>
                    <span className="text-[11px] text-zinc-400 font-mono">Sovereign infra, defense aerospace & rail</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 font-bold">DCF Models</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800 flex gap-3">
              <Link
                href="/research"
                className="flex-1 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/investing-modeler"
                className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>Terminal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05. EDITORIAL INSIGHTS PREVIEW */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>TECHNICAL DISPATCHES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Selected Writings & Essays
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-cobalt-400 hover:text-cobalt-300 font-bold uppercase tracking-wider transition group"
          >
            <span>Browse All 5 Technical Essays</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/insights"
            className="p-7 rounded-3xl bg-[#121620] border border-white/10 hover:border-cobalt-500/40 transition-all block group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-cobalt-500/10 text-cobalt-400 font-bold">
                Technology & AI
              </span>
              <span>10 min read</span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cobalt-300 transition-colors mb-2">
              Why Regex Fails at Indian Invoices: Engineering a 99% Precision OCR with Spatial Context & Mod-36 Checksums
            </h3>
            <p className="font-sans text-xs text-zinc-300 leading-relaxed">
              How we replaced fragile cloud vision APIs with PaddleOCR 3.x spatial coordinates, Luhn-derived Mod-36 checksum auto-repair, and ₹0 marginal API cost.
            </p>
          </Link>

          <Link
            href="/insights"
            className="p-7 rounded-3xl bg-[#121620] border border-white/10 hover:border-cobalt-500/40 transition-all block group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold">
                Taxation Architecture
              </span>
              <span>7 min read</span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-white group-hover:text-emerald-300 transition-colors mb-2">
              GST Architecture Demystified for Digital Founders & Tech Operators
            </h3>
            <p className="font-sans text-xs text-zinc-300 leading-relaxed">
              Why Input Tax Credit (ITC) mismatches kill cash flow in high-growth companies—and how to build automated reconciliation pipelines that guarantee compliance.
            </p>
          </Link>
        </div>
      </section>

      {/* 06. STRATEGIC ADVISORY CALLOUT */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 text-white">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cobalt-950/60 via-[#121625] to-zinc-950 border border-cobalt-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-cobalt-400 uppercase tracking-widest block">
              Strategic Partnership
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              Looking for Strategic Counsel or Turnkey Systems Engineering?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Engage directly on GST compliance architecture, custom operational CRM builds, or quantitative equity modeling. Tailored for founders, CFOs, and institutional allocators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/advisory"
              className="px-6 py-3.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-cobalt-600/30 text-center"
            >
              Explore Advisory Models
            </Link>
            <Link
              href="/advisory#contact"
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition border border-zinc-800 text-center"
            >
              Direct Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Global Contact Footer */}
      <ContactFooter />
    </main>
  );
}
