import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import StockCaseStudies from "@/components/stock-case-studies";
import ContactFooter from "@/components/contact-footer";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Equity Research & Intrinsic Valuation — Shwet Ranjan",
  description: "Fundamental equity research, moat analysis, and dual Buffett & Peter Lynch valuation case studies covering Bharat Electronics (BEL), HUDCO, CDSL, HAL, and IRCTC.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
              <span>FUNDAMENTAL EQUITY RESEARCH</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Dual-Horizon Moat & <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-cobalt-400 to-emerald-400 bg-clip-text text-transparent">
                Intrinsic Valuation Studies
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
              Synthesizing Warren Buffett’s long-term economic franchise moats with Peter Lynch’s mid-term earnings acceleration PEG ratios. Backed by active Indian market participation since 2010.
            </p>
          </div>

          {/* Quick link to Terminal */}
          <Link
            href="/investing-modeler"
            className="p-5 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-cyan-500/50 transition-all flex items-center gap-4 group shrink-0"
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block">
                Interactive Terminal
              </span>
              <span className="font-display font-bold text-white text-base flex items-center gap-1 group-hover:text-cyan-300">
                Launch Live Valuation Terminal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Full Stock Case Studies Component */}
      <StockCaseStudies />

      <ContactFooter />
    </main>
  );
}
