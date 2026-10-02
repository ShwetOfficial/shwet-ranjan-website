"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, BarChart3, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";

export default function EngagementModels() {
  const models = [
    {
      id: "advisory",
      number: "01",
      title: "Strategic Advisory Retainer",
      subtitle: "Tax Compliance Architecture & Operational Risk",
      badge: "Retainer & Advisory",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      description:
        "High-touch strategic counsel for e-commerce sellers, enterprise platforms, and business operators facing complex Indian GST statutory frameworks, multi-state tax liabilities, and operational bottlenecks.",
      outcomes: [
        "GST statutory audit & Cash Lock / ITC delinquency mitigation",
        "Multi-marketplace tax liability normalization (Amazon, Flipkart, B2B)",
        "Turnaround SLA monitoring & tax risk exposure review",
      ],
      idealFor: "E-Com Brand Owners, CFOs & Enterprise Compliance Teams",
      ctaText: "Inquire for Advisory",
    },
    {
      id: "systems",
      number: "02",
      title: "Custom Systems Build & Automation",
      subtitle: "Full-Stack Enterprise Software & ETL Engines",
      badge: "Turnkey Platform Build",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      description:
        "Bespoke engineering of high-throughput tax filing engines, operational CRMs, automated billing portals, and AI-driven workflow dispatchers engineered to eliminate manual friction.",
      outcomes: [
        "Proprietary operational CRMs & task SLA dispatch engines",
        "Automated GSTR-1 & GSTR-3B audit-ready template generators",
        "Custom Chrome extension portal DOM overlays & web apps",
      ],
      idealFor: "Growing Enterprises, Tax Consultancies & Tech Platforms",
      ctaText: "Discuss Systems Scope",
    },
    {
      id: "capital",
      number: "03",
      title: "Institutional Capital & Valuation",
      subtitle: "Fundamental Intrinsic Value DCF & Moat Modeling",
      badge: "Equity Intelligence",
      icon: <BarChart3 className="w-5 h-5 text-indigo-400" />,
      description:
        "Quantitative equity valuation frameworks combining Warren Buffett’s long-term economic moat owner earnings analysis with Peter Lynch’s mid-term growth PEG ratio inflections.",
      outcomes: [
        "Multi-stage DCF intrinsic value band calculations & safety margins",
        "High-ROIC reinvestment moat ratings & normalized cash flow audits",
        "Side-by-side Buffett vs. Lynch dual recommendation matrices",
      ],
      idealFor: "Family Offices, Equity Investors & Capital Allocators",
      ctaText: "Explore Valuation Terminal",
    },
  ];

  return (
    <section id="advisory" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08] text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block mb-2">
            Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How We Engage & Deliver Value
          </h2>
        </div>
        <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
          Structured engagement frameworks tailored for business leaders, enterprise compliance teams, and institutional capital allocators.
        </p>
      </div>

      {/* 3-Column Engagement Model Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {models.map((model, idx) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {model.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-medium">
                  {model.badge}
                </span>
              </div>

              {/* Header */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {model.title}
              </h3>
              <p className="text-xs font-medium text-blue-400 mb-4">
                {model.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {model.description}
              </p>

              {/* Outcomes List */}
              <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Key Deliverables & Scope:
                </span>
                {model.outcomes.map((out) => (
                  <div key={out} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Target & CTA */}
            <div className="pt-6 border-t border-white/[0.06] space-y-4">
              <div className="text-xs text-slate-400">
                <span className="text-slate-500 block uppercase text-[10px] tracking-wider mb-0.5">Target Profile:</span>
                <span className="font-semibold text-slate-200">{model.idealFor}</span>
              </div>

              <Link
                href={model.id === "capital" ? "/investing-modeler" : "#contact"}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-white/[0.08] hover:border-transparent"
              >
                <span>{model.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quantified Client Impact Strip */}
      <div className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.06] gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
              Quantified Track Record
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
              Measurable Outcomes Across Client Deployments
            </h4>
          </div>
          <span className="text-xs text-slate-400">
            Audited results across E-Com Sellers & Enterprises
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">₹14.8L+</span>
            <span className="text-xs font-semibold text-white mt-2 block">ITC Cash Flow Unlocked</span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Auto GSTR-2B reconciliation flagging delinquent vendors before filing deadlines.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">+31.4%</span>
            <span className="text-xs font-semibold text-white mt-2 block">Amazon Buy Box Lift</span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Multi-state VPOB hub deployment unlocking 1-day Prime delivery badges.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-2xl sm:text-3xl font-black text-blue-400">90%</span>
            <span className="text-xs font-semibold text-white mt-2 block">Turnaround Time Cut</span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              AI multimodal drafting generating statutory Rent Agreements & Deeds in &lt;4s.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-2xl sm:text-3xl font-black text-indigo-400">99.2%</span>
            <span className="text-xs font-semibold text-white mt-2 block">OCR Line Precision</span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              On-premise PaddleOCR 3.x with Mod-36 checksum auto-healing at ₹0 marginal API cost.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Brief Request Banner */}
      <div className="mt-8 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Capability Overview</span>
          </div>
          <h4 className="text-lg font-bold text-white tracking-tight">
            Need a Formal Strategic Proposal or Systems Architecture Review?
          </h4>
          <p className="text-xs text-slate-400">
            Schedule a direct strategic consultation to evaluate GST compliance exposure, operational CRM requirements, or equity modeling needs.
          </p>
        </div>

        <Link
          href="#contact"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shrink-0 shadow-sm flex items-center gap-2"
        >
          <span>Initiate Consultation</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
