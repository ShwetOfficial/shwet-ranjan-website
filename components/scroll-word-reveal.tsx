"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  wordClassName?: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range, wordClassName = "" }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["rgba(161, 161, 170, 0.4)", "rgba(255, 255, 255, 1)"]);
  const translateY = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, color, y: translateY }}
      className={`inline-block mr-[0.28em] transition-shadow ${wordClassName}`}
    >
      {children}
    </motion.span>
  );
};

export default function ScrollWordReveal({
  text,
  className = "",
  wordClassName = "",
}: ScrollWordRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative flex flex-wrap leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            wordClassName={wordClassName}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
}
