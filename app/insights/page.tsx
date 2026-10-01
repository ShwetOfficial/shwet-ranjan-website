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
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest">
            <span>EDITORIAL WRITING & DISPATCHES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Technical & Financial <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cobalt-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Editorial Insights
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
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
