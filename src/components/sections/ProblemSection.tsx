"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { Zap, Shield, LayoutGrid, type LucideIcon } from "lucide-react";
import { problemSection, type FeatureCard } from "@/data/problem-section";
import { cn } from "@/lib/utils";

// ─── animation helpers ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  transition: { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  transition: { duration: 0.5, delay, ease: EASE } satisfies Transition,
});

// ─── icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<FeatureCard["iconName"], LucideIcon> = {
  Zap: Zap,
  Shield: Shield,
  LayoutGrid: LayoutGrid,
};

// ─── sub-components ───────────────────────────────────────────────────────────

function Card({
  card,
  animate,
  delay,
}: {
  card: FeatureCard;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
}) {
  const Icon = ICON_MAP[card.iconName];

  return (
    <motion.div
      {...fadeUp(delay)}
      animate={animate}
      className="flex flex-col gap-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm"
    >
      {/* Icon container */}
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/20">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-primary-foreground">
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed text-primary-foreground/65">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

function TagRow({
  tags,
  animate,
  delay,
}: {
  tags: string[];
  animate: { opacity: number } | undefined;
  delay: number;
}) {
  return (
    <motion.div
      {...fadeIn(delay)}
      animate={animate}
      className="flex flex-wrap justify-center gap-2"
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full border border-primary-foreground/15 px-3.5 py-1",
            "text-xs font-medium text-primary-foreground/55",
            "transition-colors duration-200 hover:border-primary-foreground/30 hover:text-primary-foreground/80"
          )}
        >
          {tag}
        </span>
      ))}
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  return (
    <section
      ref={ref}
      className="w-full bg-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <motion.span
            {...fadeIn(0)}
            animate={animateFade}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
          >
            {problemSection.label}
          </motion.span>

          <motion.h2
            {...fadeUp(0.08)}
            animate={animateUp}
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl"
          >
            {problemSection.headline}
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            animate={animateUp}
            className="max-w-xl text-base leading-relaxed text-primary-foreground/65"
          >
            {problemSection.subheadline}
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {problemSection.cards.map((card, i) => (
            <Card
              key={card.title}
              card={card}
              animate={animateUp}
              delay={0.28 + i * 0.1}
            />
          ))}
        </div>

        {/* Tag rows */}
        <div className="flex flex-col gap-3">
          {problemSection.tagRows.map((row, i) => (
            <TagRow
              key={i}
              tags={row}
              animate={animateFade}
              delay={0.58 + i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
