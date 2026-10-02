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
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Modern Page Header */}
      <section className="pt-36 pb-4 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Advisory & Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Strategic Advisory & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">
              Systems Engineering
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
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
