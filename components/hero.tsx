"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, BarChart3, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const proofMetrics = [
    { label: "ITC Cash Flow Recovered", value: "₹14.8L+" },
    { label: "Production Platforms Built", value: "8 Systems" },
    { label: "Active Public Equity Investor", value: "Since 2010" },
    { label: "Legal Drafting Cycle Reduction", value: "90%" },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 text-white w-full overflow-hidden">
      {/* Modern Refined Ambient Glow (Clean, subtle, high-end) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-blue-600/[0.08] via-indigo-600/[0.04] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Executive Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 backdrop-blur-xl shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Tax Compliance Strategist · Software Systems Architect · Capital Allocator</span>
          </div>

          {/* Primary Executive Headline */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] text-white">
              Building scalable systems for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">
                enterprise tax, automation & capital allocation.
              </span>
            </h1>
          </div>

          {/* Strategic Executive Summary */}
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              I eliminate organizational friction by engineering high-throughput tax compliance engines, enterprise operations software, and quantitative equity valuation frameworks.
            </p>
          </div>

          {/* Executive Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/systems"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 group"
            >
              <span>Explore Built Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/advisory"
              className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-sm border border-white/[0.1] transition-all"
            >
              <span>Strategic Advisory</span>
            </Link>

            <Link
              href="/research"
              className="px-5 py-3.5 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5"
            >
              <span>Equity Research</span>
              <span className="text-slate-500">→</span>
            </Link>
          </div>

          {/* Key Executive Proof Metrics Strip */}
          <div className="pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
            {proofMetrics.map((item) => (
              <div key={item.label} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs text-slate-400 block leading-tight">
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
