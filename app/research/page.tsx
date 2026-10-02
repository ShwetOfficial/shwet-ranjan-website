import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import StockCaseStudies from "@/components/stock-case-studies";
import ContactFooter from "@/components/contact-footer";
import { ArrowRight, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Equity Research & Intrinsic Valuation — Shwet Ranjan",
  description: "Fundamental equity research, moat analysis, and dual Buffett & Peter Lynch valuation case studies covering Bharat Electronics (BEL), HUDCO, CDSL, HAL, and IRCTC.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Modern Page Header */}
      <section className="pt-36 pb-8 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Fundamental Equity Research</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Dual-Horizon Moat & <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">
                Intrinsic Valuation Studies
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Synthesizing Warren Buffett’s long-term economic franchise moats with Peter Lynch’s mid-term earnings acceleration PEG ratios. Backed by active Indian market participation since 2010.
            </p>
          </div>

          {/* Quick link to Terminal */}
          <Link
            href="/investing-modeler"
            className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.16] transition-all flex items-center gap-4 group shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider block">
                Live Terminal
              </span>
              <span className="font-semibold text-white text-sm sm:text-base flex items-center gap-1 group-hover:text-blue-300">
                Launch Valuation Terminal
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
