"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { insightsData, InsightArticle } from "@/data/insights";
import Modal from "./modal";
import { Clock, Calendar, ArrowRight, Zap } from "lucide-react";

export default function InsightsIndex() {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>08. NOTES & ESSAYS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Editorial Writing Index
          </h2>
        </div>
        <p className="max-w-md font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
          Analytical writings on Indian statutory tax architecture, e-commerce unit economics, intrinsic value DCF modeling, and software automation.
        </p>
      </div>

      {/* Editorial Index Table / List */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="divide-y divide-zinc-800 border-y border-zinc-800 mb-12"
      >
        {insightsData.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group py-8 px-4 sm:px-6 hover:bg-[#121218] rounded-2xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 border border-transparent hover:border-cobalt-500/40"
            data-cursor="READ"
          >
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-0.5 rounded bg-cobalt-500/20 text-cobalt-300 font-bold uppercase border border-cobalt-500/30">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cobalt-400" />
                  {article.readingTime}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {article.publishDate}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cobalt-400 transition-colors">
                {article.title}
              </h3>

              <p className="font-sans text-zinc-400 text-sm leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-cobalt-400 transition-colors shrink-0">
              <span>Read Essay</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <Modal
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          category={`${activeArticle.category} • ${activeArticle.readingTime}`}
        >
          <div className="space-y-8 font-sans text-white">
            <div className="p-4 rounded-xl bg-zinc-900 border-l-4 border-cobalt-500 text-sm text-zinc-300 italic">
              "{activeArticle.excerpt}"
            </div>

            {activeArticle.content.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-display text-xl font-bold text-white tracking-tight">
                  {sec.sectionTitle}
                </h4>
                <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </section>
  );
}
