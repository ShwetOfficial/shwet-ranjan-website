"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { journeyTimeline, mentalModels, personalRules, nonLinearPursuits } from "@/data/journey";
import { MapPin, ChevronRight, UserCheck, Zap } from "lucide-react";
import ScrollTracingBeam from "./scroll-tracing-beam";

export default function JourneyPhilosophy() {
  const [activeTab, setActiveTab] = useState<"journey" | "philosophy" | "code">("journey");

  return (
    <section id="journey" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header & View Toggles */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>05. THE NARRATIVE & OPERATING CODE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Journey & Operating Code
          </h2>
        </div>

        {/* 3-Tab Selector */}
        <div className="inline-flex p-1.5 rounded-full bg-zinc-900 border border-zinc-800 flex-wrap gap-1">
          <button
            onClick={() => setActiveTab("journey")}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "journey"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
            data-cursor="TIMELINE"
          >
            Milestones
          </button>
          <button
            onClick={() => setActiveTab("philosophy")}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "philosophy"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
            data-cursor="MODELS"
          >
            System Models
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "code"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
            data-cursor="ETHICS"
          >
            Operating Code & Ethics
          </button>
        </div>
      </div>

      {/* Tab 1: Chronological Journey Timeline wrapped in ScrollTracingBeam */}
      {activeTab === "journey" && (
        <ScrollTracingBeam>
          <div className="relative pl-6 md:pl-8 border-l-2 border-zinc-800 space-y-12">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
              className="relative group transform-gpu"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cobalt-500 group-hover:bg-cobalt-400 transition-colors shadow-md shadow-cobalt-500/50" />

              <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl hover:border-cobalt-500/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-cobalt-400 uppercase tracking-widest">
                    {item.phase}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 font-bold border border-zinc-800">{item.year}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cobalt-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-zinc-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Takeaways */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                      Key Takeaways & Impact:
                    </span>
                    <ul className="space-y-1.5 text-xs font-sans text-zinc-300">
                      {item.keyTakeaways.map((k) => (
                        <li key={k} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                      Skills & Tools Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsGained.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </ScrollTracingBeam>
      )}

      {/* Tab 2: Mental Models / Philosophy */}
      {activeTab === "philosophy" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentalModels.map((model, idx) => (
            <motion.div
              key={model.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl hover:border-cobalt-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl font-black text-cobalt-500/40">
                    {model.number}
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    {model.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                  {model.title}
                </h3>

                <blockquote className="p-4 rounded-xl bg-zinc-900 border-l-4 border-cobalt-500 italic text-xs font-sans text-zinc-300 mb-4">
                  "{model.quote}"
                </blockquote>

                <p className="font-sans text-zinc-300 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 3: Personal Code & Operating Ethics */}
      {activeTab === "code" && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 text-white mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">
              <UserCheck className="w-4 h-4" />
              <span>THE OPERATING CODE & ETHICS</span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              5 Foundational Professional Principles
            </h3>
            <p className="font-sans text-xs text-zinc-300 mt-2 leading-relaxed max-w-3xl">
              Grounded in direct reciprocal trust, relational isolation, time asset priority, operational sovereignty, and mutual privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalRules.map((rule, idx) => (
              <motion.div
                key={rule.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-7 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl hover:border-cobalt-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-black text-white/20">
                      {rule.number}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-cobalt-500/20 text-cobalt-300 font-mono text-[10px] font-bold uppercase tracking-widest border border-cobalt-500/30">
                      {rule.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white tracking-tight mb-1">
                    {rule.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 font-semibold uppercase tracking-wider block mb-4">
                    {rule.subtitle}
                  </span>

                  <blockquote className="p-3.5 rounded-xl bg-zinc-900 border-l-3 border-cobalt-500 italic text-xs font-sans text-zinc-200 font-medium mb-4 leading-relaxed">
                    "{rule.quote}"
                  </blockquote>

                  <p className="font-sans text-zinc-400 text-xs leading-relaxed">
                    {rule.rule}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Non-Linear Pursuits Grid */}
      <div className="mt-16 p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
        <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">
          Non-Linear Pursuits & Intellectual Curiosities
        </h4>
        <div className="flex flex-wrap gap-3">
          {nonLinearPursuits.map((p) => (
            <div key={p.topic} className="px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3 text-xs">
              <span className="font-mono font-bold text-cobalt-400">{p.cat}</span>
              <span className="font-sans text-zinc-300">{p.topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
