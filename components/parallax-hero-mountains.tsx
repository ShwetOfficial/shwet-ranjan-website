"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHeroMountains() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // CodePen / Awwwards Precision Parallax Speed Curves
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const kumo3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yama1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const kumo2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const yama2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const kumo1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const yama3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    >
      {/* 1. Deep Cyber Sky & Nebula Background (bg) */}
      <motion.div style={{ y: skyY }} className="absolute inset-0 w-full h-[115%] -top-[5%]">
        <img
          src="/hero_background_sky.jpg"
          alt="Cyber Sky"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/50 via-transparent to-[#09090b]" />
      </motion.div>

      {/* 2. High Distant Clouds Layer (kumo3) */}
      <motion.div style={{ y: kumo3Y }} className="absolute inset-x-0 top-[8%] h-[35%] opacity-50">
        <svg viewBox="0 0 1400 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cloudGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M -100,140 Q 200,40 500,110 T 1000,70 T 1500,150 L 1500,400 L -100,400 Z"
            fill="url(#cloudGrad3)"
          />
        </svg>
      </motion.div>

      {/* 3. Distant Back Mountain Silhouette Layer (yama1) - Transparent Cutout */}
      <motion.div style={{ y: yama1Y }} className="absolute inset-x-0 bottom-[16%] h-[42%]">
        <svg viewBox="0 0 1400 500" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="yama1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="0.98" />
            </linearGradient>
            <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Transparent Cutout Back Mountain Range */}
          <path
            d="M 0,340 L 140,190 L 260,270 L 440,110 L 610,250 L 790,90 L 960,230 L 1180,120 L 1400,280 L 1400,500 L 0,500 Z"
            fill="url(#yama1Grad)"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeOpacity="0.6"
            filter="url(#glowCyan)"
          />
        </svg>
      </motion.div>

      {/* 4. Midground Cloud Veil Layer (kumo2) */}
      <motion.div style={{ y: kumo2Y }} className="absolute inset-x-0 bottom-[14%] h-[35%] opacity-65">
        <svg viewBox="0 0 1400 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M -50,190 C 250,110 400,230 650,130 C 900,40 1150,200 1450,120 L 1450,400 L -50,400 Z"
            fill="url(#cloudGrad2)"
          />
        </svg>
      </motion.div>

      {/* 5. Midground Mountain Range (yama2) - Transparent Cutout */}
      <motion.div style={{ y: yama2Y }} className="absolute inset-x-0 bottom-[8%] h-[48%]">
        <svg viewBox="0 0 1400 500" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="yama2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Transparent Cutout Midground Peaks */}
          <path
            d="M -50,390 L 120,210 L 250,300 L 410,140 L 560,280 L 720,110 L 900,270 L 1080,130 L 1280,310 L 1450,220 L 1450,500 L -50,500 Z"
            fill="url(#yama2Grad)"
            stroke="#22d3ee"
            strokeWidth="2.5"
            strokeOpacity="0.8"
          />
          {/* Mountain Ridge Accent Lines */}
          <polyline points="410,140 560,280" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.5" />
          <polyline points="720,110 900,270" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.5" />
        </svg>
      </motion.div>

      {/* 6. Foreground Atmospheric Cloud Layer (kumo1) */}
      <motion.div style={{ y: kumo1Y }} className="absolute inset-x-0 bottom-[3%] h-[32%] opacity-80">
        <svg viewBox="0 0 1400 300" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cloudGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#09090b" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#1e293b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M -50,110 C 200,20 450,150 700,40 C 950,-50 1150,120 1450,50 L 1450,300 L -50,300 Z"
            fill="url(#cloudGrad1)"
          />
        </svg>
      </motion.div>

      {/* 7. Foreground Sharp Giant Mountain Peaks (yama3) - Transparent Cutout */}
      <motion.div style={{ y: yama3Y }} className="absolute inset-x-0 bottom-0 h-[38%]">
        <svg viewBox="0 0 1400 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="yama3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#09090b" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Transparent Cutout Foreground Mountain Silhouette */}
          <path
            d="M -100,400 L 90,220 L 260,330 L 490,160 L 680,310 L 960,130 L 1160,280 L 1380,170 L 1500,320 L 1500,400 Z"
            fill="url(#yama3Grad)"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeOpacity="0.85"
          />
          <polyline points="490,160 680,310" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
          <polyline points="960,130 1160,280" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}
