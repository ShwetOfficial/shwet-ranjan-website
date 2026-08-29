import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CustomCursor from "@/components/custom-cursor";

// Below-the-fold sections dynamically imported to reduce initial JS payload
const ScrollVelocityMarquee = dynamic(() => import("@/components/scroll-velocity-marquee"), {
  ssr: true,
});

const BentoPillars = dynamic(() => import("@/components/bento-pillars"), {
  ssr: true,
});

const ProjectsShowcase = dynamic(() => import("@/components/projects-showcase"), {
  ssr: true,
});

const Calculators = dynamic(() => import("@/components/calculators"), {
  ssr: true,
});

const JourneyPhilosophy = dynamic(() => import("@/components/journey-philosophy"), {
  ssr: true,
});

const SkillsMatrix = dynamic(() => import("@/components/skills-matrix"), {
  ssr: true,
});

const LabExploring = dynamic(() => import("@/components/lab-exploring"), {
  ssr: true,
});

const StockCaseStudies = dynamic(() => import("@/components/stock-case-studies"), {
  ssr: true,
});

const InsightsIndex = dynamic(() => import("@/components/insights-index"), {
  ssr: true,
});

const ContactFooter = dynamic(() => import("@/components/contact-footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-obsidian relative selection:bg-cobalt-700 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Custom Contextual Cursor Follower */}
      <CustomCursor />

      {/* Floating Glass Navbar with Cmd + K Command Palette */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Dynamic Velocity Scroll Marquee 1 */}
      <ScrollVelocityMarquee
        items={[
          "BUSINESS OPERATOR",
          "GST TAX ARCHITECT",
          "ENTERPRISE SOFTWARE",
          "AI AUTOMATION",
          "FINANCIAL SIMULATORS",
          "ASYMMETRIC LEVERAGE",
        ]}
        baseVelocity={2}
        className="bg-zinc-950/80 border-y border-white/10"
      />

      {/* Four Pillars Bento Grid */}
      <BentoPillars />

      {/* Selected Works & Case Studies with Architecture Flowcharts */}
      <ProjectsShowcase />

      {/* Dynamic Velocity Scroll Marquee 2 (Reverse Direction) */}
      <ScrollVelocityMarquee
        items={[
          "E-COM TAX AUTOMATION ENGINE",
          "ENTERPRISE CRM DISPATCHER",
          "VERIFYREELS AI FACT-CHECKER",
          "GST PORTAL EXTENSION",
          "INTRINSIC VALUE MODELING",
        ]}
        baseVelocity={2.5}
        direction="right"
        className="bg-zinc-950/80 border-y border-white/10"
      />

      {/* Financial & GST Simulators / Calculators Lab */}
      <Calculators />

      {/* The Narrative, Journey & Philosophy */}
      <JourneyPhilosophy />

      {/* Analytical Skills Matrix */}
      <SkillsMatrix />

      {/* Real-time Lab & Exploring */}
      <LabExploring />

      {/* Stock Research & Fundamental Intrinsic Value Case Studies */}
      <StockCaseStudies />

      {/* Editorial Writing Index */}
      <InsightsIndex />

      {/* Direct Contact & Footer Dock */}
      <ContactFooter />
    </main>
  );
}

