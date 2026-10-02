"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsMatrixData } from "@/data/skills";
import { Zap, Sparkles } from "lucide-react";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Analytical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em]">
            Skills & Competency Framework
          </h2>
        </div>
        <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
          Quantitative breakdown of multi-domain capabilities across operational leadership, GST compliance, full-stack systems engineering, and equity valuation.
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
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
            className="specular-card p-7 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 font-mono text-[10px] font-semibold uppercase tracking-wider border border-white/[0.08]">
                  {cat.badge}
                </span>
                <span className="font-mono text-xs text-slate-500 font-bold">0{idx + 1}</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-5 pb-3 border-b border-white/[0.06] group-hover:text-blue-300 transition-colors">
                {cat.title}
              </h3>

              {/* Skills with Progress Micro-Bars */}
              <div className="space-y-4 mb-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-xs text-slate-200 font-medium mb-1">
                      <span className="truncate pr-2">{skill.name}</span>
                      <span className="font-mono text-[11px] text-blue-400 font-semibold shrink-0">{skill.level}%</span>
                    </div>

                    {/* Micro-bar */}
                    <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden mb-1">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ originX: 0, width: `${skill.level}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                      />
                    </div>
                    <p className="font-mono text-[10px] text-slate-400">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Tooling Chips */}
            <div className="pt-4 border-t border-white/[0.06] mt-auto">
              <span className="font-mono text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Frameworks & Models:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.frameworks.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-slate-300"
                  >
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
