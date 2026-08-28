"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsMatrixData } from "@/data/skills";
import { Zap } from "lucide-react";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>06. ANALYTICAL MATRIX & FRAMEWORKS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Skills & Competency Framework
          </h2>
        </div>
        <p className="max-w-md font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
          Quantitative breakdown of multi-domain technical capabilities across business leadership, GST statutory compliance, full-stack web software, and fundamental valuation.
        </p>
      </div>

      {/* 4-Column Matrix Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsMatrixData.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
            className="p-6 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl hover:border-cobalt-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-cobalt-500/20 text-cobalt-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-cobalt-500/30">
                  {cat.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500 font-bold">0{idx + 1}</span>
              </div>

              <h3 className="font-display text-xl font-extrabold text-white tracking-tight mb-6 pb-3 border-b border-zinc-800">
                {cat.title}
              </h3>

              {/* Skills with Progress Micro-Bars */}
              <div className="space-y-5 mb-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-xs font-sans text-zinc-200 font-semibold mb-1">
                      <span>{skill.name}</span>
                      <span className="font-mono text-[11px] text-cobalt-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Micro-bar */}
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-1">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ originX: 0, width: `${skill.level}%` }}
                        className="h-full bg-gradient-to-r from-cobalt-500 to-emerald-400 rounded-full"
                      />
                    </div>
                    <p className="font-mono text-[10px] text-zinc-400">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Tooling Chips */}
            <div className="pt-4 border-t border-zinc-800">
              <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                Frameworks & Models:
              </span>
              <div className="flex flex-wrap gap-1">
                {cat.frameworks.map((f) => (
                  <span key={f} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
