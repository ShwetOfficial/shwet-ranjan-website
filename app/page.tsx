import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import BentoPillars from "@/components/bento-pillars";
import ProjectsShowcase from "@/components/projects-showcase";
import Calculators from "@/components/calculators";
import JourneyPhilosophy from "@/components/journey-philosophy";
import SkillsMatrix from "@/components/skills-matrix";
import LabExploring from "@/components/lab-exploring";
import StockCaseStudies from "@/components/stock-case-studies";
import InsightsIndex from "@/components/insights-index";
import ContactFooter from "@/components/contact-footer";
import CustomCursor from "@/components/custom-cursor";
import ScrollVelocityMarquee from "@/components/scroll-velocity-marquee";

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
