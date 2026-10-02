import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import InsightsIndex from "@/components/insights-index";
import ContactFooter from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "Editorial & Technical Insights — Shwet Ranjan",
  description: "In-depth technical and financial essays on Indian GST compliance architecture, D2C unit economics, intrinsic equity valuation, and autonomous AI automation.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Modern Page Header */}
      <section className="pt-36 pb-8 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Technical & Financial Essays</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Editorial Insights & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">
              Operating Dispatches
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
            Rigorous operational breakdowns, compliance engineering architectures, and investment memos written from first-principles operational experience.
          </p>
        </div>
      </section>

      {/* Full Insights Index with Modals & Reading View */}
      <InsightsIndex />

      <ContactFooter />
    </main>
  );
}
