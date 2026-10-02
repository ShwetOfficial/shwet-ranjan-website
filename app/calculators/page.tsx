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
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Modern Page Header */}
      <section className="pt-36 pb-8 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Interactive Financial Models</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Financial & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-100 bg-clip-text text-transparent">
              Compliance Simulators
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
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
