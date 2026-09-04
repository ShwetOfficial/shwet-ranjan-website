import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

// Below-the-fold sections dynamically imported to reduce initial JS payload
const ProjectsShowcase = dynamic(() => import("@/components/projects-showcase"), {
  ssr: true,
});

const BentoPillars = dynamic(() => import("@/components/bento-pillars"), {
  ssr: true,
});

const Calculators = dynamic(() => import("@/components/calculators"), {
  ssr: true,
});

const StockCaseStudies = dynamic(() => import("@/components/stock-case-studies"), {
  ssr: true,
});

const JourneyPhilosophy = dynamic(() => import("@/components/journey-philosophy"), {
  ssr: true,
});

const SkillsMatrix = dynamic(() => import("@/components/skills-matrix"), {
  ssr: true,
});

const InsightsIndex = dynamic(() => import("@/components/insights-index"), {
  ssr: true,
});

const EngagementModels = dynamic(() => import("@/components/engagement-models"), {
  ssr: true,
});

const ContactFooter = dynamic(() => import("@/components/contact-footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-zinc-100 relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Floating Glass Navbar with Cmd + K Command Palette */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 01. Selected Works & Built Systems Showcase */}
      <ProjectsShowcase />

      {/* 02. Four Pillars Bento Grid */}
      <BentoPillars />

      {/* 03. Financial & GST Simulators / Calculators Lab */}
      <Calculators />

      {/* 04. Stock Research & Fundamental Intrinsic Value Case Studies */}
      <StockCaseStudies />

      {/* 05. The Narrative, Journey & Operating Philosophy */}
      <JourneyPhilosophy />

      {/* 06. Analytical Skills Matrix */}
      <SkillsMatrix />

      {/* 07. Editorial Writing Index */}
      <InsightsIndex />

      {/* 08. Strategic Advisory & Engagement Models */}
      <EngagementModels />

      {/* 09. Direct Contact & Advisory Footer Dock */}
      <ContactFooter />
    </main>
  );
}
