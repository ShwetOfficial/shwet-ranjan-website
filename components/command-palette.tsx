"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, FileText, X, Zap } from "lucide-react";
import { projectsData } from "@/data/projects";
import { insightsData } from "@/data/insights";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { label: "Launch Live Apps Showcase (8 Systems)", sectionId: "#projects", type: "Section" },
    { label: "Open Calculators Lab (VPOB, GST, D2C)", sectionId: "#calculators", type: "Tool" },
    { label: "Stock Investment Case Studies (HAL, CDSL, BEL)", sectionId: "#stocks", type: "Research" },
    { label: "View Four Pillars of Expertise", sectionId: "#pillars", type: "Section" },
    { label: "Explore Journey & Ethics", sectionId: "#journey", type: "Section" },
    { label: "Read Technical & Financial Essays", sectionId: "#insights", type: "Section" },
    { label: "Contact Shwet Ranjan", sectionId: "#contact", type: "Contact" },
  ];

  const simulatorActions = [
    { label: "Launch Invoice OCR & Mod-36 Checksum Simulator", queryTag: "ocr invoice paddle", sectionId: "#projects", tag: "Simulator" },
    { label: "Launch WhatsApp Sales CRM & Drip Cadence Engine", queryTag: "whatsapp crm sales baileys", sectionId: "#projects", tag: "Simulator" },
    { label: "Launch Auto GST Registration & Legal Drafting OS", queryTag: "rent agreement noc deed legal drafting", sectionId: "#projects", tag: "Simulator" },
    { label: "Launch VPOB & Amazon Prime 1-Day ROI Estimator", queryTag: "vpob amazon prime multi-state hub", sectionId: "#calculators", tag: "Calculator" },
    { label: "Launch D2C Unit Economics & RTO Margin Calculator", queryTag: "d2c unit economics rto cogs cac", sectionId: "#calculators", tag: "Calculator" },
    { label: "Launch GST Input Tax Credit (ITC) Leakage Audit Tool", queryTag: "gst itc 2b vendor leakage tax", sectionId: "#calculators", tag: "Calculator" },
  ];

  const filteredSimulators = simulatorActions.filter((s) =>
    !query || s.label.toLowerCase().includes(query.toLowerCase()) || s.queryTag.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredEssays = insightsData.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative z-10 w-full max-w-2xl bg-[#121218] rounded-3xl border border-white/10 shadow-2xl overflow-hidden text-white"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3">
            <Search className="w-5 h-5 text-cobalt-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 8 platforms, OCR/CRM simulators, calculators, essays, or keywords (e.g. 'ocr', 'vpob')..."
              className="w-full bg-transparent text-sm font-sans text-white placeholder-zinc-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {filteredSimulators.length > 0 && (
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-widest px-2 mb-2 block">
                  Interactive Simulators & Calculators:
                </span>
                <div className="space-y-1">
                  {filteredSimulators.map((sim) => (
                    <button
                      key={sim.label}
                      onClick={() => handleSelect(sim.sectionId)}
                      className="w-full px-3.5 py-2.5 rounded-xl hover:bg-amber-500/10 flex items-center justify-between text-xs font-sans text-zinc-200 hover:text-amber-300 transition-colors text-left group border border-transparent hover:border-amber-500/30"
                    >
                      <div className="flex items-center gap-2.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="font-medium">{sim.label}</span>
                      </div>
                      <span className="font-mono text-[10px] text-amber-400/80 uppercase font-semibold shrink-0 ml-2">
                        {sim.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!query && (
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 mb-2 block">
                  Quick Navigation:
                </span>
                <div className="space-y-1">
                  {quickActions.map((act) => (
                    <button
                      key={act.label}
                      onClick={() => handleSelect(act.sectionId)}
                      className="w-full px-3.5 py-2.5 rounded-xl hover:bg-zinc-900 flex items-center justify-between text-xs font-sans text-zinc-200 hover:text-white transition-colors group border border-transparent hover:border-zinc-800"
                    >
                      <div className="flex items-center gap-2.5">
                        <Command className="w-3.5 h-3.5 text-cobalt-400" />
                        <span>{act.label}</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase">{act.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredProjects.length > 0 && (
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 mb-2 block">
                  Built Platforms & Products:
                </span>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelect("#projects")}
                      className="w-full px-3.5 py-2.5 rounded-xl hover:bg-zinc-900 flex items-center justify-between text-xs font-sans text-zinc-200 hover:text-white transition-colors text-left group border border-transparent hover:border-zinc-800"
                    >
                      <div>
                        <span className="font-semibold block group-hover:text-cobalt-400 transition-colors">
                          {p.title}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500">{p.category}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredEssays.length > 0 && (
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 mb-2 block">
                  Editorial Writings:
                </span>
                <div className="space-y-1">
                  {filteredEssays.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => handleSelect("#insights")}
                      className="w-full px-3.5 py-2.5 rounded-xl hover:bg-zinc-900 flex items-center justify-between text-xs font-sans text-zinc-200 hover:text-white transition-colors text-left group border border-transparent hover:border-zinc-800"
                    >
                      <div>
                        <span className="font-semibold block group-hover:text-cobalt-400 transition-colors">
                          {e.title}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500">{e.readingTime}</span>
                      </div>
                      <FileText className="w-3.5 h-3.5 text-zinc-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query && filteredProjects.length === 0 && filteredEssays.length === 0 && (
              <div className="py-8 text-center font-mono text-xs text-zinc-500">
                No matching results found for "{query}".
              </div>
            )}
          </div>

          {/* Footer Key Hints */}
          <div className="px-4 py-2.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between font-mono text-[10px] text-zinc-500">
            <span>Use ↑ ↓ to navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">ESC</kbd> to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
