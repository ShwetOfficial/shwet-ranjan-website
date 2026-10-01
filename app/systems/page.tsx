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
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest">
            <span>ENGINEERING & SOFTWARE SUITE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Built Platforms & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cobalt-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Systems
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
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
