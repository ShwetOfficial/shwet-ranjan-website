"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, BarChart3, ArrowUpRight, Zap, FileText, CheckCircle2 } from "lucide-react";

export default function EngagementModels() {
  const models = [
    {
      id: "advisory",
      number: "01",
      title: "Strategic Advisory Retainer",
      subtitle: "Tax Compliance Architecture & Operational Risk",
      badge: "Retainer & Advisory",
      icon: <ShieldCheck className="w-6 h-6 text-cobalt-400" />,
      description:
        "High-touch strategic counsel for e-commerce sellers, enterprise platforms, and business operators facing complex Indian GST statutory frameworks, multi-state tax liabilities, and operational bottlenecks.",
      outcomes: [
        "GST statutory audit & Cash Lock / ITC delinquency mitigation",
        "Multi-marketplace tax liability normalization (Amazon, Flipkart, B2B)",
        "Turnaround SLA monitoring & tax risk exposure review"
      ],
      idealFor: "E-Com Brand Owners, CFOs & Enterprise Compliance Teams",
      ctaText: "Inquire for Advisory"
    },
    {
      id: "systems",
      number: "02",
      title: "Custom Systems Build & Automation",
      subtitle: "Full-Stack Enterprise Software & ETL Engines",
      badge: "Turnkey Platform Build",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      description:
        "Bespoke engineering of high-throughput tax filing engines, operational CRMs, automated billing portals, and AI-driven workflow dispatchers engineered to eliminate manual friction.",
      outcomes: [
        "Proprietary operational CRMs & task SLA dispatch engines",
        "Automated GSTR-1 & GSTR-3B audit-ready template generators",
        "Custom Chrome extension portal DOM overlays & web apps"
      ],
      idealFor: "Growing Enterprises, Tax Consultancies & Tech Platforms",
      ctaText: "Discuss Systems Scope"
    },
    {
      id: "capital",
      number: "03",
      title: "Institutional Capital & Valuation",
      subtitle: "Fundamental Intrinsic Value DCF & Moat Modeling",
      badge: "Equity Intelligence",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      description:
        "Quantitative equity valuation frameworks combining Warren Buffett’s long-term economic moat owner earnings analysis with Peter Lynch’s mid-term growth PEG ratio inflections.",
      outcomes: [
        "Multi-stage DCF intrinsic value band calculations & safety margins",
        "High-ROIC reinvestment moat ratings & normalized cash flow audits",
        "Side-by-side Buffett vs. Lynch dual recommendation matrices"
      ],
      idealFor: "Family Offices, Equity Investors & Capital Allocators",
      ctaText: "Explore Valuation Terminal"
    }
  ];

  return (
    <section id="advisory" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>08. STRATEGIC ADVISORY & ENGAGEMENT MODELS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            How We Engage & Deliver Value
          </h2>
        </div>
        <p className="max-w-md font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
          Structured engagement frameworks tailored for business leaders, enterprise compliance teams, and institutional capital allocators.
        </p>
      </div>

      {/* 3-Column Engagement Model Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {models.map((model, idx) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="p-8 rounded-3xl bg-[#121620] border border-white/10 shadow-2xl hover:border-cobalt-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-cobalt-500/40 transition-colors">
                  {model.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-cobalt-300 font-mono text-[11px] font-bold uppercase tracking-wider">
                  {model.badge}
                </span>
              </div>

              {/* Header */}
              <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-1">
                {model.title}
              </h3>
              <p className="font-mono text-xs text-cobalt-400 font-bold uppercase tracking-wider mb-4">
                {model.subtitle}
              </p>

              {/* Description */}
              <p className="font-sans text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                {model.description}
              </p>

              {/* Outcomes List */}
              <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800/80">
                <span className="font-mono text-[11px] font-bold text-zinc-300 uppercase tracking-widest block mb-2">
                  Key Deliverables & Scope:
                </span>
                {model.outcomes.map((out) => (
                  <div key={out} className="flex items-start gap-2 text-xs font-sans text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Target & CTA */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-500 block uppercase text-[10px] tracking-wider">Target Profile:</span>
                <span className="font-bold text-zinc-200">{model.idealFor}</span>
              </div>

              <a
                href={model.id === "capital" ? "/investing-modeler" : "#contact"}
                className="w-full py-3.5 rounded-2xl bg-zinc-900 hover:bg-cobalt-600 text-zinc-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-zinc-800 hover:border-cobalt-500 shadow-md group-hover:shadow-cobalt-600/20"
              >
                <span>{model.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Executive Brief Request Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-cobalt-400 font-bold uppercase">
            <FileText className="w-4 h-4" />
            <span>Executive Capability Overview</span>
          </div>
          <h4 className="font-display text-xl font-bold text-white">
            Need a Formal Strategic Proposal or Systems Architecture Review?
          </h4>
          <p className="font-sans text-xs text-zinc-300">
            Schedule a direct 1-on-1 strategic consultation to evaluate GST compliance exposure, operational CRM requirements, or equity modeling needs.
          </p>
        </div>

        <a
          href="#contact"
          className="px-6 py-3.5 rounded-2xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-cobalt-600/30 flex items-center gap-2"
        >
          <span>Initiate Consultation</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
