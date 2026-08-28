"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Hero3dBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dynamic Pixel Ratio Scaler (Cap at 2.0 to prevent GPU overheat on 4K/Retina)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateSize = () => {
      const w = window.innerWidth;
      const h = canvas.parentElement?.offsetHeight || 800;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Mouse tracking & Scroll position state
    const mouse = {
      x: window.innerWidth / 2,
      y: (canvas.parentElement?.offsetHeight || 800) / 2,
      targetX: window.innerWidth / 2,
      targetY: (canvas.parentElement?.offsetHeight || 800) / 2,
      radius: 260,
    };

    let lastClientX = window.innerWidth / 2;
    let lastClientY = (canvas.parentElement?.offsetHeight || 800) / 2;

    const updateMousePos = () => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = lastClientX - rect.left;
      mouse.targetY = lastClientY - rect.top;
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      updateMousePos();
    };

    const handleScroll = () => {
      if (isVisible) updateMousePos();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver: Pause animation loop when Hero is out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
        if (isVisible && !prefersReducedMotion && !animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        } else if (!isVisible && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // 3D Perspective Grid Parameters
    const gridCols = 38;
    const gridRows = 28;
    let time = 0;

    // Laser Data Pulses travelling along 3D Grid Lines
    const gridPulses: {
      row: number;
      col: number;
      progress: number;
      speed: number;
      isRow: boolean;
      color: string;
    }[] = [];

    const spawnGridPulse = () => {
      if (gridPulses.length >= 10) return;
      const isRow = Math.random() > 0.5;
      gridPulses.push({
        row: Math.floor(Math.random() * gridRows),
        col: Math.floor(Math.random() * gridCols),
        progress: 0,
        speed: Math.random() * 0.02 + 0.015,
        isRow,
        color: Math.random() > 0.5 ? "rgba(34, 211, 238, " : "rgba(59, 130, 246, ",
      });
    };

    const render = () => {
      if (!isVisible) return;

      time += 0.015;

      updateMousePos();
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const w = window.innerWidth;
      const h = canvas.parentElement?.offsetHeight || 800;

      ctx.clearRect(0, 0, w, h);

      // 1. Ambient Horizon Volumetric Glow
      const horizonY = h * 0.36;
      const cameraTiltX = ((mouse.x - w / 2) / w) * 90;
      const cameraTiltY = ((mouse.y - h / 2) / h) * 40;

      const vanishingPointX = w / 2 + cameraTiltX;
      const vanishingPointY = horizonY + cameraTiltY * 0.5;

      const horizonGrad = ctx.createRadialGradient(
        vanishingPointX,
        vanishingPointY,
        0,
        vanishingPointX,
        vanishingPointY,
        w * 0.65
      );
      horizonGrad.addColorStop(0, "rgba(59, 130, 246, 0.3)");
      horizonGrad.addColorStop(0.3, "rgba(34, 211, 238, 0.15)");
      horizonGrad.addColorStop(0.7, "rgba(139, 92, 246, 0.04)");
      horizonGrad.addColorStop(1, "rgba(9, 9, 11, 0)");

      ctx.fillStyle = horizonGrad;
      ctx.beginPath();
      ctx.arc(vanishingPointX, vanishingPointY, w * 0.65, 0, Math.PI * 2);
      ctx.fill();

      // Horizon Glow Laser Line
      ctx.strokeStyle = "rgba(34, 211, 238, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#3b82f6";
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.moveTo(0, vanishingPointY);
      ctx.lineTo(w, vanishingPointY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 2. Render 3D Perspective Cyber Grid Plane
      const projectedGrid: { x: number; y: number; z: number }[][] = [];

      for (let r = 0; r <= gridRows; r++) {
        projectedGrid[r] = [];
        const rowNorm = r / gridRows;

        const depth = Math.pow(rowNorm, 2.2);
        const screenY = vanishingPointY + depth * (h - vanishingPointY + 100);

        for (let c = 0; c <= gridCols; c++) {
          const colNorm = (c - gridCols / 2) / (gridCols / 2);
          const spread = 1 + depth * 2.8;
          const screenX = vanishingPointX + colNorm * (w * 0.6) * spread;

          // Mouse magnetic wave elevation
          const dx = mouse.x - screenX;
          const dy = mouse.y - screenY;
          const dist = Math.hypot(dx, dy);

          let elevateZ = 0;
          if (dist < mouse.radius && dist > 0.001) {
            const force = (1 - dist / mouse.radius);
            elevateZ = Math.sin(force * Math.PI) * -35;
          }

          projectedGrid[r][c] = {
            x: screenX,
            y: screenY + elevateZ,
            z: depth,
          };
        }
      }

      // Draw Grid Horizontal Lines
      for (let r = 0; r <= gridRows; r++) {
        const rowNorm = r / gridRows;
        const alpha = Math.min(0.75, Math.max(0.04, Math.pow(rowNorm, 1.4) * 0.8));

        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.lineWidth = 1 + rowNorm * 0.8;

        ctx.beginPath();
        for (let c = 0; c <= gridCols; c++) {
          const pt = projectedGrid[r][c];
          if (c === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // Draw Grid Vertical Lines
      for (let c = 0; c <= gridCols; c++) {
        ctx.strokeStyle = "rgba(34, 211, 238, 0.12)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        for (let r = 0; r <= gridRows; r++) {
          const pt = projectedGrid[r][c];
          if (r === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // 3. Render Mouse Target Light Aura on Grid Floor
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      mouseGrad.addColorStop(0, "rgba(34, 211, 238, 0.35)");
      mouseGrad.addColorStop(0.5, "rgba(59, 130, 246, 0.15)");
      mouseGrad.addColorStop(1, "rgba(9, 9, 11, 0)");

      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();

      // Concentric Target Reticle Rings
      ctx.strokeStyle = "rgba(34, 211, 238, 0.55)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 45, time * 0.8, time * 0.8 + Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 4. Render Laser Pulses along Grid Lines
      if (Math.random() < 0.06) spawnGridPulse();

      for (let i = gridPulses.length - 1; i >= 0; i--) {
        const pulse = gridPulses[i];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          gridPulses.splice(i, 1);
          continue;
        }

        if (pulse.isRow) {
          const r = pulse.row;
          const cIndex = Math.floor(pulse.progress * gridCols);
          if (projectedGrid[r] && projectedGrid[r][cIndex]) {
            const pt = projectedGrid[r][cIndex];
            const pulseAlpha = Math.sin(pulse.progress * Math.PI) * 0.85;

            ctx.fillStyle = `${pulse.color}${pulseAlpha})`;
            ctx.shadowColor = "#22d3ee";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        } else {
          const c = pulse.col;
          const rIndex = Math.floor(pulse.progress * gridRows);
          if (projectedGrid[rIndex] && projectedGrid[rIndex][c]) {
            const pt = projectedGrid[rIndex][c];
            const pulseAlpha = Math.sin(pulse.progress * Math.PI) * 0.85;

            ctx.fillStyle = `${pulse.color}${pulseAlpha})`;
            ctx.shadowColor = "#3b82f6";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (!prefersReducedMotion) {
      render();
    } else {
      // Render static frame once for accessibility
      render();
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
