"use client";

import React from "react";
import { motion } from "framer-motion";
import { labData } from "@/data/lab";
import { FlaskConical, Clock } from "lucide-react";

export default function LabExploring() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="p-8 sm:p-10 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cobalt-500/20 text-cobalt-300 border border-cobalt-500/30">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-cobalt-400 uppercase tracking-widest block">
                07. CURRENTLY EXPLORING & LAB
              </span>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Real-Time Research & Live Experiments
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-cobalt-400" />
            <span>Updated: August 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cobalt-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-cobalt-500/20 text-cobalt-300 text-[10px] font-mono font-bold uppercase border border-cobalt-500/30">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">{item.status}</span>
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-2">{item.title}</h4>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed">{item.detail}</p>
              </div>
              <div className="pt-3 mt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
