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
    <main className="min-h-screen bg-[#090B10] text-slate-100 relative selection:bg-blue-600 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Modern Page Header */}
      <section className="pt-36 pb-8 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Trajectory & Principles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Background, Philosophy & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">
              Operating Discipline
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
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
