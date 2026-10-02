import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import ProjectsShowcase from "@/components/projects-showcase";
import ContactFooter from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "Systems & Software Engineering — Shwet Ranjan",
  description: "8 production-ready software platforms, enterprise CRMs, automated GST filing engines, and on-premise AI automation tools built by Shwet Ranjan.",
};

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Modern Page Header */}
      <section className="pt-36 pb-8 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Systems & Software Suite</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Built Platforms & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">
              Enterprise Software
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
            A comprehensive suite of 8 production-grade platforms engineered for complex Indian GST statutory compliance, enterprise workflow orchestration, on-premise vision OCR, and autonomous document generation.
          </p>
        </div>
      </section>

      {/* Full Projects Showcase with interactive simulators */}
      <ProjectsShowcase />

      <ContactFooter />
    </main>
  );
}
