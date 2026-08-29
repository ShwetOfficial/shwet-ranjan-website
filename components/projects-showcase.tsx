"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, futureLabExperiments, Project } from "@/data/projects";
import Modal from "./modal";
import BrowserFrame from "./browser-frame";
import dynamic from "next/dynamic";

const FilingAutomationSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.FilingAutomationSimulator),
  { ssr: false }
);
const EnterpriseCrmSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.EnterpriseCrmSimulator),
  { ssr: false }
);
const InvoicingAppSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.InvoicingAppSimulator),
  { ssr: false }
);
const VerifyReelsSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.VerifyReelsSimulator),
  { ssr: false }
);
const GstExtensionSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.GstExtensionSimulator),
  { ssr: false }
);
const StockMarketInvestingSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.StockMarketInvestingSimulator),
  { ssr: false }
);
const TaxamicusWordPressSimulator = dynamic(
  () => import("./app-simulators").then((mod) => mod.TaxamicusWordPressSimulator),
  { ssr: false }
);

import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GitCommit,
  Layers,
  Zap,
  Bot,
  LayoutGrid
} from "lucide-react";

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Mouse tilt tracking state
  const [tiltStyle, setTiltStyle] = useState<{ [key: string]: { rotateX: number; rotateY: number } }>({});

  const categories = ["All", "Tax Compliance", "Technology & AI", "E-Commerce", "Investing"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * 6;  // tilt left/right

    setTiltStyle((prev) => ({
      ...prev,
      [id]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltStyle((prev) => ({
      ...prev,
      [id]: { rotateX: 0, rotateY: 0 },
    }));
  };

  // Render simulator content for project IDs
  const renderSimulatorForProject = (id: string) => {
    switch (id) {
      case "taxamicus-ecom-automation":
        return <FilingAutomationSimulator />;
      case "taxamicus-enterprise-crm":
        return <EnterpriseCrmSimulator />;
      case "taxamicus-invoicing-platform":
        return <InvoicingAppSimulator />;
      case "verifyreels-ai-engine":
        return <VerifyReelsSimulator />;
      case "taxamicus-gst-chrome-extension":
        return <GstExtensionSimulator />;
      case "intrinsic-value-modeler":
        return <StockMarketInvestingSimulator />;
      case "taxamicus-wordpress-portal":
        return <TaxamicusWordPressSimulator />;
      default:
        return null;
    }
  };

  const getDisplayUrl = (id: string) => {
    switch (id) {
      case "taxamicus-ecom-automation":
        return "experts.taxamicus.in/automation";
      case "taxamicus-enterprise-crm":
        return "experts.taxamicus.in/admin-command-center";
      case "taxamicus-invoicing-platform":
        return "invoice.taxamicus.in/dashboard";
      case "verifyreels-ai-engine":
        return "verifyreels.com";
      case "taxamicus-gst-chrome-extension":
        return "return.gst.gov.in/returns/auth/dashboard";
      case "intrinsic-value-modeler":
        return "shwetranjan.com/investing-modeler";
      case "taxamicus-wordpress-portal":
        return "taxamicus.in";
      default:
        return "shwetranjan.com/case-study";
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cobalt-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-semibold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>01. FEATURED BUILT PRODUCTS & SYSTEMS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Interactive Product Showcase
          </h2>
          <p className="font-sans text-sm text-zinc-400 mt-2 max-w-2xl">
            Explore live interactive previews of my 5 built software platforms, tax automation engines, enterprise CRM, and AI fact-checking tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold transition-colors ${
                  isActive
                    ? "text-white"
                    : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
                data-cursor="FILTER"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-cobalt-600 shadow-lg shadow-cobalt-600/30 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with 3D Tilt & Interactive macOS Windows */}
      <div className="space-y-16 mb-20 relative z-10">
        {filteredProjects.map((project, idx) => {
          const currentTilt = tiltStyle[project.id] || { rotateX: 0, rotateY: 0 };
          const displayUrl = getDisplayUrl(project.id);
          const simulatorContent = renderSimulatorForProject(project.id);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
              style={{
                perspective: 1000,
                transform: `rotateX(${currentTilt.rotateX}deg) rotateY(${currentTilt.rotateY}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="group rounded-3xl bg-[#121218]/90 border border-white/10 p-6 sm:p-8 hover:border-cobalt-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] transition-[border-color,box-shadow] duration-300 relative"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3.5 py-1 rounded-full bg-cobalt-500/20 text-cobalt-400 font-mono text-xs font-bold uppercase tracking-wider border border-cobalt-500/30">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{project.year}</span>
                  {project.id === "ecom-tax-filing-engine" || project.id === "enterprise-tax-crm" || project.id === "gst-notice-extension" ? (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold flex items-center gap-1">
                      🔒 Only for Internal Company Team & Enterprise Client Use
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold flex items-center gap-1">
                      🌐 Public Access Web App
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 border border-zinc-700 hover:border-zinc-500"
                    data-cursor="DETAILS"
                  >
                    <span>Architecture Spec</span>
                    <GitCommit className="w-3.5 h-3.5 text-cobalt-400" />
                  </button>

                  {project.linkUrl && (
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-cobalt-600/30"
                      data-cursor="LAUNCH"
                    >
                      <span>Launch Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Summary */}
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-cobalt-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                  {project.fullDescription}
                </p>
              </div>

              {/* Impact Metrics Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6">
                {project.impactMetrics.map((m) => (
                  <div key={m.label} className="text-center p-2 rounded-xl bg-zinc-900/50 sm:bg-transparent border sm:border-0 border-zinc-800/60">
                    <span className="font-display font-black text-lg sm:text-2xl text-cobalt-400 block leading-tight">
                      {m.value}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* macOS Interactive Window Frame Simulator */}
              <BrowserFrame
                url={displayUrl}
                badgeText={project.status}
                externalUrl={project.linkUrl}
              >
                {simulatorContent ? (
                  simulatorContent
                ) : (
                  <div className="py-12 text-center text-zinc-400 font-mono text-xs">
                    Interactive architecture preview active for {project.title}
                  </div>
                )}
              </BrowserFrame>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs border border-zinc-800 hover:border-cobalt-500/40 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Future Research Lab Experiments Ticker */}
      <div className="p-8 rounded-3xl bg-zinc-900/90 border border-white/10 shadow-2xl relative overflow-hidden z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-4 h-4" />
          <span>RESEARCH & PIPELINE EXPERIMENTS</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
          Active Prototypes & Lab Pipeline
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {futureLabExperiments.map((exp) => (
            <div
              key={exp.title}
              className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-cobalt-500/40 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span className="text-cobalt-400 font-bold">{exp.tag}</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 text-[10px] font-bold">
                  {exp.status}
                </span>
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">{exp.title}</h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal with Architecture Flowchart */}
      {activeModalProject && (
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
          category={activeModalProject.category}
        >
          <div className="space-y-6">
            <p className="text-base text-zinc-200 font-medium leading-relaxed">
              {activeModalProject.fullDescription}
            </p>

            {/* System Architecture Flowchart */}
            {activeModalProject.flowchartNodes && activeModalProject.flowchartNodes.length > 0 && (
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-wider">
                  <GitCommit className="w-4 h-4" />
                  <span>System Architecture & Pipeline Flow</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {activeModalProject.flowchartNodes.map((node, i) => (
                    <div
                      key={node.step}
                      className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display text-xs font-black text-cobalt-400">
                          {node.step}
                        </span>
                        {i < activeModalProject.flowchartNodes.length - 1 && (
                          <ArrowRight className="hidden sm:block w-3.5 h-3.5 text-zinc-600" />
                        )}
                      </div>
                      <h5 className="font-display font-bold text-sm text-white mb-1">
                        {node.label}
                      </h5>
                      <p className="font-sans text-[11px] text-zinc-400 leading-normal">
                        {node.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            <div>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
                Technical Highlights
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Live Link Button */}
            {activeModalProject.linkUrl && (
              <div className="pt-4 border-t border-zinc-800">
                <a
                  href={activeModalProject.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-cobalt-600/30"
                >
                  <span>Launch Live Platform ({new URL(activeModalProject.linkUrl).hostname})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
