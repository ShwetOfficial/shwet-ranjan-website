import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import BentoPillars from "@/components/bento-pillars";
import JourneyPhilosophy from "@/components/journey-philosophy";
import SkillsMatrix from "@/components/skills-matrix";
import ContactFooter from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "About & Operating Philosophy — Shwet Ranjan",
  description: "Learn about Shwet Ranjan: trajectory from commerce, law, and taxation to full-stack software engineering and fundamental equity capital allocation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest">
            <span>BACKGROUND & DISCIPLINE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            The Trajectory, Philosophy & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cobalt-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Operating Discipline
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            Operating at the intersection of three demanding domains: statutory taxation law, modern software engineering, and disciplined public equity investment. Here is the trajectory, ethical foundation, and technical capabilities that govern my work.
          </p>
        </div>
      </section>

      {/* Four Core Pillars */}
      <BentoPillars />

      {/* Narrative Journey & Operating Philosophy */}
      <JourneyPhilosophy />

      {/* Analytical Skills Matrix */}
      <SkillsMatrix />

      <ContactFooter />
    </main>
  );
}
