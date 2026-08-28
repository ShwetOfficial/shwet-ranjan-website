"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Zap, ExternalLink, Bot, ShieldCheck, FileSpreadsheet, Layers, Sparkles } from "lucide-react";
import ScrollWordReveal from "./scroll-word-reveal";
import Hero3dBackground from "./hero-3d-background";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const quickLaunchers = [
    { title: "Filing Automation", url: "https://experts.taxamicus.in", tag: "E-Com Tax" },
    { title: "Enterprise CRM", url: "https://experts.taxamicus.in", tag: "Task Manager" },
    { title: "Invoicing Portal", url: "https://invoice.taxamicus.in", tag: "Web App" },
    { title: "VerifyReels.com", url: "https://verifyreels.com", tag: "AI Fact-Check" },
    { title: "GST Portal Extension", url: "#projects", tag: "Chrome Ext" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white w-full overflow-hidden">
      {/* 3D Perspective Cyber Grid & Horizon Floor Background (Full Viewport 100vw) */}
      <Hero3dBackground />

      {/* Background Radial Glow Orb */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-screen h-[500px] bg-gradient-to-tr from-cobalt-600/20 via-violet-600/15 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
        {/* Top Announcement Badge */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cobalt-500/10 border border-cobalt-500/30 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-cobalt-500/10">
            <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse" />
            <span>BUSINESS OPERATOR • GST ARCHITECT • AI & SOFTWARE ENGINEER</span>
          </div>
        </motion.div>

        {/* Primary Statement */}
        <motion.div variants={itemVariants} className="max-w-5xl">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white">
            Engineering scalable business systems & <span className="bg-gradient-to-r from-cobalt-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI automation leverage.</span>
          </h1>
        </motion.div>

        {/* Strategic Intro Paragraph with Scroll Word Reveal */}
        <motion.div variants={itemVariants} className="max-w-2xl">
          <ScrollWordReveal
            text="I am Shwet Ranjan. I build production-grade tax automation engines, enterprise operations CRMs, financial invoicing platforms, and AI video fact-checkers that turn complex operational friction into seamless asymmetric growth."
            className="font-sans text-base sm:text-lg leading-relaxed font-medium"
          />
        </motion.div>

        {/* Direct Quick Launcher Bar for 5 Built Apps */}
        <motion.div variants={itemVariants} className="space-y-3 pt-2">
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold block flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cobalt-400" />
            <span>Launch Built Applications & Engines Directly:</span>
          </span>

          <div className="flex flex-wrap items-center gap-2.5">
            {quickLaunchers.map((app) => (
              <a
                key={app.title}
                href={app.url}
                target={app.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-cobalt-500/50 hover:bg-cobalt-600/20 text-zinc-200 hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-md group"
                data-cursor="LAUNCH"
              >
                <span>{app.title}</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-cobalt-400 group-hover:bg-cobalt-500/30">
                  {app.tag}
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-cobalt-400" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Dual Primary CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 group shadow-xl shadow-cobalt-600/30"
            data-cursor="EXPLORE"
          >
            <span>Explore Interactive App Showcase</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>

          <a
            href="#journey"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span>Read Journey & Philosophy</span>
          </a>
        </motion.div>

        {/* 4 Feature Highlight Cards */}
        <motion.div variants={itemVariants} className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-cobalt-500/40 transition-all hover:scale-[1.02] shadow-xl">
            <div className="flex items-center gap-2 text-cobalt-400 mb-3">
              <FileSpreadsheet className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">01. Tax Engine</span>
            </div>
            <p className="font-display font-bold text-xl text-white">E-Com Tax Automation</p>
            <p className="text-xs text-zinc-400 font-mono mt-1.5 leading-relaxed">
              Flipkart, Amazon, Meesho, Myntra & B2B/B2C GST calculation
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-emerald-500/40 transition-all hover:scale-[1.02] shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <Layers className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">02. CRM Engine</span>
            </div>
            <p className="font-display font-bold text-xl text-white">Enterprise CRM</p>
            <p className="text-xs text-zinc-400 font-mono mt-1.5 leading-relaxed">
              324+ active jobs & real-time task inbox dispatching
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-cyan-400 mb-3 transition-all hover:scale-[1.02] shadow-xl">
            <div className="flex items-center gap-2 text-cyan-400 mb-3">
              <Bot className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">03. AI Platform</span>
            </div>
            <p className="font-display font-bold text-xl text-white">VerifyReels.com</p>
            <p className="text-xs text-zinc-400 font-mono mt-1.5 leading-relaxed">
              AI viral video fact-checking & WhatsApp verification bot
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 hover:border-violet-400 transition-all hover:scale-[1.02] shadow-xl">
            <div className="flex items-center gap-2 text-violet-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">04. Chrome Ext</span>
            </div>
            <p className="font-display font-bold text-xl text-white">GST Portal Automation</p>
            <p className="text-xs text-zinc-400 font-mono mt-1.5 leading-relaxed">
              Silent notice checking & GSTR-1 vs 3B rate comparison
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex items-center justify-between border-t border-white/10 text-xs font-mono text-zinc-400"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-cobalt-400 transition-colors group"
            data-cursor="SCROLL"
          >
            <span className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cobalt-500/50">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cobalt-400" />
            </span>
            <span>Scroll down to explore production systems & simulators</span>
          </a>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-500 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-cobalt-400" />
            <span>Built with Next.js 14, Framer Motion & Tailwind</span>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
