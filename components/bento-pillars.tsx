"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pillarsData } from "@/data/pillars";
import { Briefcase, ShoppingBag, Cpu, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function BentoPillars() {
  const TaxamicusTLogo = () => (
    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 5 40 C 18 10, 82 10, 95 40 C 85 22, 68 8, 50 8 C 32 8, 15 22, 5 40 Z"
        fill="currentColor"
      />
      <rect x="45.5" y="18" width="9" height="72" rx="4.5" fill="currentColor" />
    </svg>
  );

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "business":
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case "taxation":
        return <TaxamicusTLogo />;
      case "ecommerce":
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case "technology":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="pillars" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block mb-2">
            Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Four Core Pillars
          </h2>
        </div>
        <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
          Operational mastery requires combining business judgment, statutory tax precision, multi-channel commerce execution, and enterprise software leverage.
        </p>
      </div>

      {/* Asymmetric 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {pillarsData.map((pillar, idx) => {
          const isLarge = idx === 0 || idx === 3;
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-2xl bg-white/[0.02] border border-white/[0.07] p-8 hover:border-white/[0.16] hover:bg-white/[0.03] transition-all flex flex-col justify-between overflow-hidden group ${
                isLarge ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <span className="text-xs font-medium text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-slate-600 group-hover:text-blue-400 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium text-blue-400 mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pillar.keyCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Pill */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>{pillar.metricsHighlight}</span>
                </div>
                <Link
                  href="/advisory#contact"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
