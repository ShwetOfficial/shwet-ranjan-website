"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X, Search, Sparkles, Activity, Cpu, ShieldCheck } from "lucide-react";
import CommandPalette from "./command-palette";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [liveAppsOpen, setLiveAppsOpen] = useState(false);
  const [popoverTab, setPopoverTab] = useState<"systems" | "telemetry">("systems");

  // Framer Motion live scroll progress with smooth spring physics
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const primaryNavLinks = [
    { label: "Systems", href: "/systems" },
    { label: "Calculators", href: "/calculators" },
    { label: "Research", href: "/research" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Advisory", href: "/advisory" },
  ];

  const liveApps = [
    {
      name: "Taxamicus Sales CRM & AI WhatsApp Engine",
      url: "#projects",
      tag: "WhatsApp CRM",
      status: "⚡ Production-Ready",
      desc: "Multi-agent WhatsApp CRM with Gemini AI Auto-Pilot & service-aware drip engine.",
      access: "🔒 Internal Team (Local Staging / Pilot)"
    },
    {
      name: "99% Precision GST Purchase OCR Engine",
      url: "#projects",
      tag: "PaddleOCR",
      status: "⚡ 99% Precision",
      desc: "Self-hosted PaddleOCR 3.x line-item extractor with Mod-36 checksum validation.",
      access: "🔒 Internal Team (Local Engine)"
    },
    {
      name: "Auto GST Registration & Legal Drafter",
      url: "#projects",
      tag: "AI Drafter",
      status: "⚡ 90% Automation",
      desc: "Autonomous drafting of GST-ready NOC, Commercial Rent Agreement & Partnership Deed.",
      access: "🔒 Internal Team (Local Engine)"
    },
    {
      name: "E-Commerce Tax Filing Engine",
      url: "https://experts.taxamicus.in",
      tag: "E-Com Tax",
      status: "99.9% Uptime",
      desc: "Auto-ingests Flipkart, Amazon, Meesho reports & outputs GSTR-1/3B templates.",
      access: "🔒 Internal Team & Client Access"
    },
    {
      name: "Enterprise Operations CRM",
      url: "https://experts.taxamicus.in",
      tag: "Task Manager",
      status: "324+ Active Jobs",
      desc: "Multi-tenant task management CRM for GST compliance & client tracking.",
      access: "🔒 Internal Team & Client Access"
    },
    {
      name: "Cloud Invoicing Portal",
      url: "https://invoice.taxamicus.in",
      tag: "Web App",
      status: "Operational",
      desc: "Generates B2B/B2C GST tax invoices, credit notes & GSTR-1 JSON dumps.",
      access: "🌐 Public Access Web App"
    },
    {
      name: "VerifyReels.com AI Bot",
      url: "https://verifyreels.com",
      tag: "AI Fact-Check",
      status: "WhatsApp Bot Live",
      desc: "AI viral video misinformation detector & automated WhatsApp bot.",
      access: "🌐 Public Access Web App"
    },
    {
      name: "GST Portal Chrome Extension",
      url: "#projects",
      tag: "Chrome Ext",
      status: "Silent Monitor",
      desc: "Browser extension running inside gst.gov.in for notice checks & GSTR-1 vs 3B.",
      access: "🔒 Internal Team Extension"
    },
    {
      name: "Intrinsic Value Equity Modeler",
      url: "/investing-modeler",
      tag: "Financial Terminal",
      status: "Buffett & Lynch Model",
      desc: "Bloomberg-style stock valuation terminal computing DCF fair value & moat score.",
      access: "🌐 Public Access Web App"
    }
  ];

  const telemetryStats = [
    {
      subsystem: "WhatsApp CRM Engine",
      runtime: "Baileys Multi-Device Socket",
      metric: "180ms avg response latency",
      health: "Online & Connected",
      tag: "Engine",
    },
    {
      subsystem: "PaddleOCR Line Ingestion",
      runtime: "ONNX / Local CPU Engine",
      metric: "620ms / invoice (₹0 API Cost)",
      health: "99.2% Accuracy",
      tag: "Vision OCR",
    },
    {
      subsystem: "GST Legal Drafting Agent",
      runtime: "Gemini 1.5 Flash AST Parser",
      metric: "3.2s full deed generation",
      health: "Operational",
      tag: "Legal AI",
    },
    {
      subsystem: "Local SQLite DB",
      runtime: "WAL Mode + 5000ms Busy Timeout",
      metric: "0.4ms single-row read",
      health: "Zero-Lock Concurrency",
      tag: "Database",
    },
    {
      subsystem: "VPOB Multi-State Gateway",
      runtime: "MH, KA, DL, TN, HR Hubs",
      metric: "5 Core Hubs Verified",
      health: "Statutory Compliant",
      tag: "Arbitrage",
    },
  ];

  return (
    <>
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cobalt-500 via-cyan-400 to-emerald-400 z-50 origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-8 flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 flex-nowrap ${
            scrolled
              ? "bg-[#0B0F17]/95 shadow-2xl shadow-black/90 backdrop-blur-2xl border border-white/10"
              : "bg-[#121620]/90 shadow-lg backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 group text-white font-bold text-sm sm:text-base whitespace-nowrap tracking-tight"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.08] border border-white/10 text-white flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-105 shadow-sm">
                SR
              </span>
              <span className="text-white font-semibold">Shwet Ranjan</span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-medium text-slate-300">
            {primaryNavLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                    isActive ? "text-white font-semibold" : "hover:text-white text-slate-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search & Contact CTA */}
          <div className="flex items-center gap-2.5 shrink-0 relative">
            {/* Live Interactive Status Pill */}
            <div className="relative">
              <button
                onClick={() => setLiveAppsOpen((prev) => !prev)}
                onMouseEnter={() => setLiveAppsOpen(true)}
                className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 whitespace-nowrap transition-all cursor-pointer shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>8 Live Systems</span>
              </button>

              {/* Live Systems Popover Dropdown */}
              <AnimatePresence>
                {liveAppsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseLeave={() => setLiveAppsOpen(false)}
                    onWheel={(e) => e.stopPropagation()}
                    className="absolute top-12 right-0 w-80 sm:w-96 p-4 rounded-2xl bg-[#09090b]/95 border border-white/10 shadow-2xl backdrop-blur-2xl z-50 space-y-3 pointer-events-auto overscroll-contain"
                  >
                    {/* Popover Tab Switcher */}
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-xl border border-zinc-800 text-[10px] font-mono">
                        <button
                          onClick={() => setPopoverTab("systems")}
                          className={`px-2.5 py-1 rounded-lg transition-all ${
                            popoverTab === "systems"
                              ? "bg-cobalt-600 text-white font-bold"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          8 Systems
                        </button>
                        <button
                          onClick={() => setPopoverTab("telemetry")}
                          className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                            popoverTab === "telemetry"
                              ? "bg-emerald-600 text-white font-bold"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Activity className="w-2.5 h-2.5" />
                          <span>Telemetry</span>
                        </button>
                      </div>

                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                        ● All Healthy
                      </span>
                    </div>

                    {popoverTab === "systems" ? (
                      <div
                        className="space-y-2 max-h-[380px] overflow-y-auto pr-1 overscroll-contain"
                        onWheel={(e) => e.stopPropagation()}
                      >
                        {liveApps.map((app) => (
                          <a
                            key={app.name}
                            href={app.url}
                            target={app.url.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            onClick={() => setLiveAppsOpen(false)}
                            className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-cobalt-500/50 hover:bg-zinc-800/80 transition-all block group"
                          >
                            <div className="flex items-center justify-between text-xs font-mono font-bold mb-0.5">
                              <span className="text-white group-hover:text-cobalt-400 transition-colors flex items-center gap-1.5">
                                {app.name}
                                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-cobalt-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                              <span className="text-[10px] text-emerald-400 font-mono">{app.status}</span>
                            </div>
                            <p className="text-[11px] text-zinc-300 font-sans leading-tight mb-1">
                              {app.desc}
                            </p>
                            <span className="text-[9px] font-mono text-amber-300/80 block">
                              {app.access}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="space-y-2 max-h-[380px] overflow-y-auto pr-1 overscroll-contain font-mono"
                        onWheel={(e) => e.stopPropagation()}
                      >
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Local Core Services & Daemons running at 100% SLA</span>
                        </div>

                        {telemetryStats.map((item) => (
                          <div
                            key={item.subsystem}
                            className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col gap-1 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-white flex items-center gap-1.5">
                                <Cpu className="w-3 h-3 text-cobalt-400" />
                                {item.subsystem}
                              </span>
                              <span className="text-[10px] text-emerald-400 font-bold">
                                {item.health}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-zinc-400">
                              <span>{item.runtime}</span>
                              <span className="text-zinc-300 font-bold">{item.metric}</span>
                            </div>
                          </div>
                        ))}

                        <div className="p-2 text-center text-[10px] text-zinc-500 border-t border-zinc-900">
                          Polled locally • Zero cloud leakage
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setCmdPaletteOpen(true)}
              data-cursor="SEARCH"
              className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
              aria-label="Search Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline-block text-[11px] text-slate-400">Cmd K</span>
            </button>

            <Link
              href="/advisory#contact"
              data-cursor="CONTACT"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-all shadow-sm shadow-blue-600/20 whitespace-nowrap group shrink-0"
            >
              <span>Consult / Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#0F1420]/95 border border-white/10 backdrop-blur-2xl shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-200 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-between"
              >
                <span>Home</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-200 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCmdPaletteOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] text-slate-300 text-xs font-medium flex items-center justify-center gap-2 border border-white/[0.08]"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span>Quick Search (Cmd + K)</span>
              </button>
              <Link
                href="/advisory#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold text-center block shadow-lg shadow-blue-600/30"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Command Palette */}
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
    </>
  );
}
