"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface ScrollVelocityMarqueeProps {
  items: string[];
  baseVelocity?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function ScrollVelocityMarquee({
  items,
  baseVelocity = 2,
  direction = "left",
  className = "",
}: ScrollVelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out the scroll velocity
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [ -1000, 0, 1000 ], [ -4, 1, 4 ], {
    clamp: false,
  });

  const dirFactor = useRef<number>(direction === "right" ? -1 : 1);

  useAnimationFrame((_, delta) => {
    let moveBy = dirFactor.current * baseVelocity * (delta / 1000);

    // Accelerate marquee when user scrolls
    const currentVelocityFactor = velocityFactor.get();
    if (currentVelocityFactor < 0) {
      dirFactor.current = -1;
    } else if (currentVelocityFactor > 0) {
      dirFactor.current = 1;
    }

    moveBy += dirFactor.current * moveBy * Math.abs(currentVelocityFactor);
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap percentage value between -20% and 0% for infinite looping
  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);

  return (
    <div className={`w-full max-w-full overflow-hidden whitespace-nowrap py-6 relative select-none ${className}`}>
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

      <motion.div className="flex flex-nowrap w-max font-mono text-xs sm:text-sm uppercase tracking-widest font-extrabold" style={{ x }}>
        {/* Render 4 sets of items for seamless infinite marquee loop */}
        {[0, 1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex flex-nowrap items-center gap-8 pr-8 shrink-0">
            {items.map((item, idx) => (
              <React.Fragment key={`${setIndex}-${idx}`}>
                <span className="text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400 inline-block"></span>
                  {item}
                </span>
                <span className="text-cobalt-500/40 font-bold">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
