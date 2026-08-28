"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

interface ScrollTracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollTracingBeam({ children, className = "" }: ScrollTracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Smooth scroll progress spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  useEffect(() => {
    if (containerRef.current) {
      setSvgHeight(containerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setSvgHeight(containerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y1 = useTransform(smoothProgress, [0, 1], [50, svgHeight - 50]);
  const y2 = useTransform(smoothProgress, [0, 1], [50, svgHeight - 20]);

  return (
    <div ref={containerRef} className={`relative w-full max-w-7xl mx-auto overflow-hidden ${className}`}>
      {/* Vertical SVG Tracing Beam on Desktop */}
      <div className="absolute left-0 top-0 pointer-events-none hidden md:block h-full z-20">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-2 block"
          aria-hidden="true"
        >
          {/* Background dimmed path */}
          <path
            d={`M 10 20 V ${svgHeight - 20}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2"
          />

          {/* Active scroll animated gradient beam */}
          <motion.path
            d={`M 10 20 V ${svgHeight - 20}`}
            fill="none"
            stroke="url(#gradient-beam)"
            strokeWidth="3"
            transition={{ duration: 0.2 }}
          />

          <defs>
            <motion.linearGradient
              id="gradient-beam"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#3B82F6" stopOpacity="0" />
              <stop stopColor="#3B82F6" stopOpacity="1" />
              <stop stopColor="#10B981" stopOpacity="1" />
              <stop stopColor="#8B5CF6" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div>{children}</div>
    </div>
  );
}
