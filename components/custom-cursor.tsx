"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest("a, button, input, [role='button']") !== null;
      setIsPointer(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Sleek, understated micro-dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white/80 pointer-events-none shadow-sm backdrop-blur-sm"
        animate={{
          x: mousePosition.x - (isPointer ? 8 : 4),
          y: mousePosition.y - (isPointer ? 8 : 4),
          width: isPointer ? 16 : 8,
          height: isPointer ? 16 : 8,
          opacity: isPointer ? 0.4 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
          mass: 0.2,
        }}
      />
    </div>
  );
}
