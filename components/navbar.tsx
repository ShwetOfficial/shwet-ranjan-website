"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X, Search, Sparkles } from "lucide-react";
import CommandPalette from "./command-palette";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [liveAppsOpen, setLiveAppsOpen] = useState(false);

  // Framer Motion live scroll progress with smooth spring physics
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["projects", "calculators", "pillars", "journey", "insights"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
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

  const primaryNavLinks = [
    { label: "Built Apps", href: "#projects", id: "projects" },
    { label: "Calculators", href: "#calculators", id: "calculators" },
    { label: "Core Pillars", href: "#pillars", id: "pillars" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Insights", href: "#insights", id: "insights" },
  ];

  const liveApps = [
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
          className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#09090b]/90 shadow-2xl shadow-black/80 backdrop-blur-2xl border border-white/10"
              : "bg-[#121218]/80 shadow-lg backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              data-cursor="HOME"
              className="flex items-center gap-2.5 group text-white font-display font-black text-base sm:text-lg whitespace-nowrap"
            >
              <span className="w-8 h-8 rounded-full bg-cobalt-600 text-white flex items-center justify-center font-mono text-xs font-bold tracking-tighter transition-transform group-hover:scale-105 shadow-md shadow-cobalt-600/30">
                SR
              </span>
              <span className="tracking-tight font-black uppercase text-white">SHWET RANJAN</span>
            </a>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-zinc-300">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                    isActive ? "text-white font-extrabold" : "hover:text-white text-zinc-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-cobalt-600/30 border border-cobalt-500/40 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
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
                className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 whitespace-nowrap transition-all cursor-pointer shadow-sm hover:scale-105"
                data-cursor="LIVE APPS"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold">5 Live Systems Online</span>
              </button>

              {/* Live Systems Popover Dropdown */}
              <AnimatePresence>
                {liveAppsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseLeave={() => setLiveAppsOpen(false)}
                    className="absolute top-12 right-0 w-80 sm:w-96 p-4 rounded-2xl bg-[#09090b]/95 border border-white/10 shadow-2xl backdrop-blur-2xl z-50 space-y-3 pointer-events-auto"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        5 LIVE OPERATIONAL SYSTEMS
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                        ● All Systems Active
                      </span>
                    </div>

                    <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setCmdPaletteOpen(true)}
              data-cursor="SEARCH"
              className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 transition-colors flex items-center gap-1.5 text-xs font-mono font-semibold whitespace-nowrap"
              aria-label="Search Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-zinc-300" />
              <span className="hidden sm:inline-block">Cmd + K</span>
            </button>

            <a
              href="#contact"
              data-cursor="CONTACT"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cobalt-600 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-cobalt-500 transition-all shadow-md shadow-cobalt-600/30 whitespace-nowrap group shrink-0"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-zinc-300 hover:bg-zinc-800 transition-colors"
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
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#09090b]/95 border border-white/10 backdrop-blur-2xl shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-3 font-mono text-sm font-bold uppercase tracking-wider">
              {primaryNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-900/80 text-zinc-200 hover:bg-cobalt-600 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCmdPaletteOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-zinc-900 text-zinc-300 font-mono text-xs font-bold flex items-center justify-center gap-2 border border-zinc-800"
              >
                <Search className="w-4 h-4 text-zinc-300" />
                <span>Search Command Palette (Cmd + K)</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-cobalt-600 text-white font-mono text-xs font-bold uppercase tracking-wider text-center block shadow-lg shadow-cobalt-600/30"
              >
                Get In Touch Direct
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Command Palette */}
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
    </>
  );
}
