"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "hero" | "cta" | "subtle";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  // each particle's own slow cruise velocity — it eases back toward this
  // instead of decaying to a stop, so the field stays alive with no cursor
  // input at all (touch devices, or a mouse that's just sitting still)
  driftVx: number;
  driftVy: number;
  radius: number;
  color: [number, number, number];
  baseAlpha: number;
};

type VariantConfig = {
  areaPerParticle: number;
  minCount: number;
  maxCount: number;
  speed: number;
  connectDistance: number;
  cursorRadius: number;
  cursorStrength: number;
  lineAlpha: number;
};

const VARIANTS: Record<Variant, VariantConfig> = {
  hero: {
    areaPerParticle: 9000,
    minCount: 28,
    maxCount: 90,
    speed: 0.22,
    connectDistance: 120,
    cursorRadius: 150,
    cursorStrength: 0.55,
    lineAlpha: 0.1,
  },
  cta: {
    areaPerParticle: 11000,
    minCount: 20,
    maxCount: 64,
    speed: 0.18,
    connectDistance: 110,
    cursorRadius: 130,
    cursorStrength: 0.45,
    lineAlpha: 0.09,
  },
  subtle: {
    areaPerParticle: 16000,
    minCount: 12,
    maxCount: 40,
    speed: 0.14,
    connectDistance: 100,
    cursorRadius: 110,
    cursorStrength: 0.3,
    lineAlpha: 0.07,
  },
};

// white, soft gray, and a rare muted-red accent — matches the JDPsoft palette.
// red is weighted to ~7% of particles so it reads as a signal, not a color.
const WHITE: [number, number, number] = [255, 255, 255];
const GRAY: [number, number, number] = [229, 229, 229];
const RED: [number, number, number] = [199, 92, 92];
// warmer/brighter than the resting accent red — used only as a hover glow
// so cursor proximity reads clearly without recoloring the whole field
const GLOW: [number, number, number] = [255, 130, 70];

function pickColor(): [number, number, number] {
  const r = Math.random();
  if (r < 0.07) return RED;
  if (r < 0.52) return WHITE;
  return GRAY;
}

export function ParticleBackground({
  variant = "hero",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    let prefersReducedMotion = reduceMotionQuery.matches;
    let isCoarsePointer = coarsePointerQuery.matches;

    const config = VARIANTS[variant];
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointer: { x: number; y: number } | null = null;
    let rafId = 0;
    let running = false;

    function seedParticles() {
      // "compact" covers phones and tablets — narrow viewport OR touch as
      // the primary pointer — both get a lighter, calmer field
      const isCompact = width < 1024 || isCoarsePointer;
      const area = width * height;
      const densityDivisor = isCompact ? config.areaPerParticle * 1.8 : config.areaPerParticle;
      const count = Math.round(
        Math.min(config.maxCount, Math.max(config.minCount, area / densityDivisor)) *
          (isCompact ? 0.6 : 1),
      );

      particles = Array.from({ length: count }, () => {
        const driftVx = (Math.random() - 0.5) * config.speed;
        const driftVy = (Math.random() - 0.5) * config.speed;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: driftVx,
          vy: driftVy,
          driftVx,
          driftVy,
          radius: Math.random() * 1.3 + 0.8,
          color: pickColor(),
          baseAlpha: Math.random() * 0.3 + 0.35,
        };
      });
    }

    function resize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
      if (prefersReducedMotion) drawFrame();
    }

    function drawFrame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.connectDistance) {
            const falloff = 1 - dist / config.connectDistance;
            ctx.strokeStyle = `rgba(255,255,255,${config.lineAlpha * falloff})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        let glowT = 0;
        if (pointer) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.cursorRadius) {
            const falloff = 1 - dist / config.cursorRadius;
            // eased so nearby particles light up well before the cursor is
            // directly on top of them — reads as a visible glow, not a pixel-hunt
            glowT = Math.pow(falloff, 0.55);
            const [gr, gg, gb] = GLOW;
            ctx.strokeStyle = `rgba(${gr},${gg},${gb},${Math.min(0.9, config.lineAlpha * 4 * glowT)})`;
            ctx.lineWidth = 1 + glowT;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        const [r, g, b] = p.color;
        if (glowT > 0) {
          const [gr, gg, gb] = GLOW;
          const mr = Math.round(r + (gr - r) * glowT);
          const mg = Math.round(g + (gg - g) * glowT);
          const mb = Math.round(b + (gb - b) * glowT);
          ctx.fillStyle = `rgba(${mr},${mg},${mb},${Math.min(1, p.baseAlpha + glowT * 0.55)})`;
          ctx.shadowColor = `rgba(${gr},${gg},${gb},${Math.min(1, glowT * 1.1)})`;
          ctx.shadowBlur = glowT * 16;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * (1 + glowT * 0.9), 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `rgba(${r},${g},${b},${p.baseAlpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function step() {
      if (!running) return;

      for (const p of particles) {
        if (pointer) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < config.cursorRadius) {
            const force = ((config.cursorRadius - dist) / config.cursorRadius) * 0.02 * config.cursorStrength;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // ease toward the particle's own ambient drift rather than decaying
        // to zero — keeps slow, natural motion going with no pointer at all
        p.vx += (p.driftVx - p.vx) * 0.02;
        p.vy += (p.driftVy - p.vy) * 0.02;
        const speedCap = config.speed * 2.2;
        p.vx = Math.max(-speedCap, Math.min(speedCap, p.vx));
        p.vy = Math.max(-speedCap, Math.min(speedCap, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      drawFrame();
      rafId = requestAnimationFrame(step);
    }

    function start() {
      if (running || prefersReducedMotion) return;
      running = true;
      rafId = requestAnimationFrame(step);
    }

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    }

    function handlePointerMove(e: PointerEvent) {
      if (isCoarsePointer || !container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        pointer = { x, y };
      } else {
        pointer = null;
      }
    }

    function handlePointerLeave() {
      pointer = null;
    }

    function handleVisibility() {
      if (document.hidden) stop();
      else start();
    }

    function handleReducedMotionChange() {
      prefersReducedMotion = reduceMotionQuery.matches;
      if (prefersReducedMotion) {
        stop();
        drawFrame();
      } else {
        start();
      }
    }

    function handlePointerTypeChange() {
      isCoarsePointer = coarsePointerQuery.matches;
      if (isCoarsePointer) pointer = null;
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);
    resize();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    reduceMotionQuery.addEventListener("change", handleReducedMotionChange);
    coarsePointerQuery.addEventListener("change", handlePointerTypeChange);

    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      reduceMotionQuery.removeEventListener("change", handleReducedMotionChange);
      coarsePointerQuery.removeEventListener("change", handlePointerTypeChange);
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
