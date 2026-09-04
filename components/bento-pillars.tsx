"use client";

import React from "react";
import { motion } from "framer-motion";
import { pillarsData } from "@/data/pillars";
import { Briefcase, ShoppingBag, Cpu, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";

export default function BentoPillars() {
  const [tiltStyle, setTiltStyle] = React.useState<{ [key: string]: { rotateX: number; rotateY: number } }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltStyle((prev) => ({
      ...prev,
      [id]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltStyle((prev) => ({
      ...prev,
      [id]: { rotateX: 0, rotateY: 0 },
    }));
  };

  const TaxamicusTLogo = () => (
    <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        return <Briefcase className="w-6 h-6 text-cobalt-400" />;
      case "taxation":
        return <TaxamicusTLogo />;
      case "ecommerce":
        return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case "technology":
        return <Cpu className="w-6 h-6 text-violet-400" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="pillars" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>02. CORE DOMAINS & EXPERTISE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Four Core Pillars
          </h2>
        </div>
        <p className="max-w-md font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
          Operational mastery requires combining business judgment, statutory tax precision, multi-channel commerce execution, and AI software leverage.
        </p>
      </div>

      {/* Asymmetric 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {pillarsData.map((pillar, idx) => {
          const isLarge = idx === 0 || idx === 3;
          const currentTilt = tiltStyle[pillar.id] || { rotateX: 0, rotateY: 0 };
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, pillar.id)}
              onMouseLeave={() => handleMouseLeave(pillar.id)}
              style={{
                perspective: 1000,
                transform: `rotateX(${currentTilt.rotateX}deg) rotateY(${currentTilt.rotateY}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className={`relative rounded-3xl bg-[#121218] border border-white/10 p-8 shadow-2xl hover:border-cobalt-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between overflow-hidden group ${
                isLarge ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-cobalt-500/40 transition-colors">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-300">
                      {pillar.badge}
                    </span>
                  </div>
                  <span className="font-display text-3xl font-black text-zinc-600 group-hover:text-cobalt-400 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="font-mono text-xs text-cobalt-400 font-bold uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-zinc-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[11px] font-bold text-zinc-300 uppercase tracking-widest block mb-2">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pillar.keyCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs font-sans text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Pill */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-cobalt-300">
                  <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse"></span>
                  <span>{pillar.metricsHighlight}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-cobalt-400 transition-colors"
                  data-cursor="CONTACT"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
