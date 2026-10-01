import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Calculators from "@/components/calculators";
import ContactFooter from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "Financial & Operational Calculators Lab — Shwet Ranjan",
  description: "Interactive financial tools for GST Input Tax Credit leakage audit, D2C Unit Economics & CM3 margin analysis, and Multi-State VPOB Amazon Prime 1-Day ROI simulation.",
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
            <span>FINANCIAL & TAX ARBITRAGE LAB</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Interactive Financial & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Compliance Simulators
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            Quantitative modeling tools engineered to calculate real-world financial metrics: audit delinquent vendor ITC cash traps under GSTR-2B, stress-test D2C unit economics against RTO freight costs, and model multi-state VPOB expansion ROI.
          </p>
        </div>
      </section>

      {/* Full Calculators Component */}
      <Calculators />

      <ContactFooter />
    </main>
  );
}
