import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import EngagementModels from "@/components/engagement-models";
import ContactFooter from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "Strategic Advisory & Consultation — Shwet Ranjan",
  description: "Direct strategic counsel for e-commerce brands, CFOs, and enterprise platforms facing complex Indian GST statutory frameworks, multi-state tax liabilities, and custom automation needs.",
};

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-4 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest">
            <span>ENGAGEMENT & PARTNERSHIP</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Strategic Advisory & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cobalt-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Systems Engineering
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            High-touch strategic counsel, compliance risk mitigation, and turnkey enterprise software builds tailored for founders, operators, and institutional capital allocators.
          </p>
        </div>
      </section>

      {/* Engagement Models and Quantified Track Record */}
      <EngagementModels />

      {/* Direct Contact & Inquiry Form */}
      <ContactFooter />
    </main>
  );
}
