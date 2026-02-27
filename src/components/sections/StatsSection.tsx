"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { statsSection, type StatItem } from "@/data/stats-section";
import { cn } from "@/lib/utils";

// ─── animation helpers ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  transition: { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  transition: { duration: 0.45, delay, ease: EASE } satisfies Transition,
});

// ─── variant styles ───────────────────────────────────────────────────────────

const VARIANT: Record<
  StatItem["variant"],
  { bg: string; value: string; label: string; desc: string }
> = {
  primary: {
    bg: "bg-primary",
    value: "text-primary-foreground",
    label: "text-primary-foreground",
    desc: "text-primary-foreground/65",
  },
  dark: {
    bg: "bg-foreground",
    value: "text-primary-foreground",
    label: "text-primary-foreground",
    desc: "text-primary-foreground/65",
  },
  accent: {
    bg: "bg-accent",
    value: "text-accent-foreground",
    label: "text-accent-foreground",
    desc: "text-accent-foreground/70",
  },
  light: {
    bg: "bg-card border border-border",
    value: "text-foreground",
    label: "text-foreground",
    desc: "text-muted-foreground",
  },
};

// ─── stat card sub-component ──────────────────────────────────────────────────

function StatCard({
  item,
  animate,
  delay,
  isLastOdd,
}: {
  item: StatItem;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
  isLastOdd: boolean;
}) {
  const v = VARIANT[item.variant];

  return (
    <motion.div
      {...fadeUp(delay)}
      animate={animate}
      className={cn(
        "flex min-h-[200px] flex-col justify-between gap-6 rounded-2xl p-8 lg:min-h-[220px]",
        v.bg,
        // Wide card: full sm-width, then 2/3 on lg
        item.wide && "sm:col-span-1 lg:col-span-2",
        // Last card on odd-count: full width on sm, back to 1 col on lg
        isLastOdd && "sm:col-span-2 lg:col-span-1"
      )}
    >
      {/* Value */}
      <span
        className={cn(
          "text-6xl font-bold leading-none tracking-tight",
          v.value
        )}
      >
        {item.value}
      </span>

      {/* Label + description */}
      <div className="flex flex-col gap-1">
        <p className={cn("text-base font-semibold leading-snug", v.label)}>
          {item.label}
        </p>
        {item.description && (
          <p className={cn("text-sm leading-relaxed", v.desc)}>
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  const totalStats = statsSection.stats.length;

  return (
    <section
      ref={ref}
      className="w-full bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <motion.span
            {...fadeIn(0)}
            animate={animateFade}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
          >
            {statsSection.label}
          </motion.span>

          <motion.h2
            {...fadeUp(0.08)}
            animate={animateUp}
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {statsSection.headline}
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            animate={animateUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {statsSection.subheadline}
          </motion.p>
        </div>

        {/* Bento grid — 1 col mobile / 2 col sm / 3 col lg */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statsSection.stats.map((item, i) => (
            <StatCard
              key={item.label}
              item={item}
              animate={animateUp}
              delay={0.28 + i * 0.08}
              isLastOdd={i === totalStats - 1 && totalStats % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
