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
  Sparkles,
  Calculator,
  FileText,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shwet Ranjan — Enterprise Systems, Tax Strategy & Capital Allocation",
  description:
    "Executive portfolio of Shwet Ranjan: Multi-disciplinary Business Operator, Tax Compliance Architect, Full-Stack Engineer, and Intrinsic Value Investor.",
};

export default function Home() {
  const flagshipSystems = [
    {
      id: "taxamicus-sales-crm",
      name: "Taxamicus Sales CRM & WhatsApp Engine",
      category: "Enterprise CRM & WhatsApp Automation",
      status: "Production-Ready",
      desc: "Full-stack multi-agent CRM with Baileys WhatsApp Socket, Gemini Flash auto-pilot, and service-aware drip cadences built for Indian professional services.",
      metrics: "Sub-200ms socket latency · 40% response uplift · SQLite WAL",
      tag: "WhatsApp CRM",
    },
    {
      id: "gst-purchase-invoice-ocr",
      name: "99% Precision GST Purchase Invoice OCR",
      category: "Computer Vision & Statutory Checksums",
      status: "99.2% Precision",
      desc: "Self-hosted PaddleOCR 3.x engine with 2D spatial coordinate parsing, Modulo-36 check-digit auto-repair, and ₹0 marginal API cost.",
      metrics: "620ms CPU inference · Zero cloud leakage · 100% On-premise",
      tag: "Vision OCR",
    },
    {
      id: "auto-gst-registration-drafting",
      name: "Auto GST Registration & Legal Drafter",
      category: "Multimodal AI & Legal Automation",
      status: "90% Automation",
      desc: "Autonomous drafting of GST-ready Landlord NOC, Commercial Rent Agreement & Partnership Deed with instant notarization-ready formatting.",
      metrics: "Under 4s generation · Multi-state stamp rules · Auto AST",
      tag: "Legal AI",
    },
  ];

  return (
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* CORE DISCIPLINES */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block mb-2">
              Core Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Where Strategy Meets Engineering
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminating organizational friction by unifying statutory taxation, software engineering, and disciplined capital allocation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-blue-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2 tracking-tight">
                Tax Compliance Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Multi-state GST infrastructure, automated GSTR-2B ITC reconciliation, and marketplace tax compliance for Amazon, Flipkart & D2C brands.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-semibold text-blue-400">
              ₹14.8L+ ITC Recovered
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-emerald-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2 tracking-tight">
                Enterprise Software Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Full-stack Next.js, Python, and SQLite engines. Turnkey operational CRMs, WhatsApp automation sockets, and on-premise vision OCR.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-semibold text-emerald-400">
              8 Production Platforms
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-indigo-500/20">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2 tracking-tight">
                Capital Allocation & DCF
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Intrinsic value DCF modeling synthesizing Warren Buffett’s franchise moats with Peter Lynch’s PEG ratios. Active Indian market investor since 2010.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-semibold text-indigo-400">
              5 In-Depth Stock Studies
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-amber-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2 tracking-tight">
                Operational Strategy & Scale
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Cross-functional leadership navigating statutory audits, courier freight RTO minimization, and multi-state fulfillment hub arbitrage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-semibold text-amber-400">
              End-to-End Execution
            </div>
          </div>
        </div>

        {/* Link to About */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition group"
          >
            <span>Learn more about Shwet's background & operating principles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FEATURED FLAGSHIP SYSTEMS */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block mb-2">
              Engineering Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Production Software Platforms
            </h2>
          </div>
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.08] text-xs font-medium transition group shrink-0"
          >
            <span>View All 8 Built Platforms</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Clean Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flagshipSystems.map((sys) => (
            <div
              key={sys.id}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-slate-400">
                    {sys.tag}
                  </span>
                  <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {sys.status}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors mb-1.5 tracking-tight">
                  {sys.name}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4">
                  {sys.category}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {sys.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-xs text-slate-400 block mb-4">
                  {sys.metrics}
                </span>
                <Link
                  href="/systems"
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-white/[0.08] hover:border-transparent"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Systems Action Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white text-sm block">
                Looking for the interactive simulators & public web apps?
              </span>
              <span className="text-xs text-slate-400">
                Explore our full engineering portfolio with live interactive simulators for OCR, CRM, and Legal Drafting.
              </span>
            </div>
          </div>
          <Link
            href="/systems"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shrink-0 shadow-sm"
          >
            Launch Systems Suite →
          </Link>
        </div>
      </section>

      {/* CALCULATORS LAB & EQUITY RESEARCH TEASER */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculators Teaser Box */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block">
                Financial & Tax Lab
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Interactive Compliance Calculators
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Quantitative modeling tools to test real business figures against Indian statutory rules and fulfillment models:
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs flex items-center justify-between">
                  <span className="text-slate-200 font-medium">1. GST ITC Cash Lock & Leakage Audit</span>
                  <span className="text-xs font-medium text-emerald-400">GSTR-2B Model</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs flex items-center justify-between">
                  <span className="text-slate-200 font-medium">2. D2C Unit Economics & RTO Margin Stress Test</span>
                  <span className="text-xs font-medium text-indigo-400">CM3 Waterfall</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs flex items-center justify-between">
                  <span className="text-slate-200 font-medium">3. VPOB & Amazon Prime 1-Day Multi-State ROI</span>
                  <span className="text-xs font-medium text-amber-400">Hub Arbitrage</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <Link
                href="/calculators"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Launch Calculators Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Equity Research Teaser Box */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.14] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block">
                Quantitative Research
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Fundamental Equity Case Studies
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                In-depth institutional valuation studies evaluating economic moats, owner earnings, and exit multiples:
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold block">Bharat Electronics Ltd (BEL)</span>
                    <span className="text-[11px] text-slate-400">Radar & EW Monopoly · 28% ROE · Zero Debt</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">9.2/10 Moat</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold block">Central Depository Services (CDSL)</span>
                    <span className="text-[11px] text-slate-400">Capital Markets Duopoly · 60%+ Margin</span>
                  </div>
                  <span className="text-xs font-semibold text-indigo-400">9.5/10 Moat</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold block">HUDCO, HAL & IRCTC Studies</span>
                    <span className="text-[11px] text-slate-400">Sovereign infra, defense aerospace & rail</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">DCF Models</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex gap-3">
              <Link
                href="/research"
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/investing-modeler"
                className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white text-xs font-medium transition flex items-center justify-center gap-1.5"
              >
                <span>Terminal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WRITINGS & ESSAYS */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block mb-2">
              Technical & Financial Dispatches
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Writings & Essays
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition group"
          >
            <span>Browse All 5 Technical Essays</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/insights"
            className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all block group"
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium">
                Technology & AI
              </span>
              <span>10 min read</span>
            </div>
            <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors mb-2 tracking-tight">
              Why Regex Fails at Indian Invoices: Engineering a 99% Precision OCR with Spatial Context & Mod-36 Checksums
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              How we replaced fragile cloud vision APIs with PaddleOCR 3.x spatial coordinates, Luhn-derived Mod-36 checksum auto-repair, and ₹0 marginal API cost.
            </p>
          </Link>

          <Link
            href="/insights"
            className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all block group"
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                Taxation Architecture
              </span>
              <span>7 min read</span>
            </div>
            <h3 className="font-bold text-xl text-white group-hover:text-emerald-300 transition-colors mb-2 tracking-tight">
              GST Architecture Demystified for Digital Founders & Tech Operators
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Why Input Tax Credit (ITC) mismatches kill cash flow in high-growth companies—and how to build automated reconciliation pipelines that guarantee compliance.
            </p>
          </Link>
        </div>
      </section>

      {/* STRATEGIC ADVISORY CALLOUT */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/30 via-slate-900/60 to-slate-950/80 border border-white/[0.09] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block">
              Strategic Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Looking for Strategic Counsel or Turnkey Systems Engineering?
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engage directly on GST compliance architecture, custom operational CRM builds, or quantitative equity modeling. Tailored for founders, CFOs, and institutional allocators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/advisory"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-md text-center"
            >
              Explore Advisory Models
            </Link>
            <Link
              href="/advisory#contact"
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-xs border border-white/[0.1] transition text-center"
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
