"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Transition } from "framer-motion";
import {
  LayoutDashboard,
  Workflow,
  Globe,
  Headphones,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutionsSection, type SolutionCard } from "@/data/solutions-section";
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

// ─── icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<SolutionCard["iconName"], LucideIcon> = {
  LayoutDashboard,
  Workflow,
  Globe,
  Headphones,
};

// ─── card sub-component ───────────────────────────────────────────────────────

function SolutionCardItem({
  card,
  animate,
  delay,
}: {
  card: SolutionCard;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
}) {
  const Icon = ICON_MAP[card.iconName];

  return (
    <motion.div
      {...fadeUp(delay)}
      animate={animate}
      className={cn(
        "group flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-center",
        "transition-shadow duration-300 hover:shadow-lg"
      )}
    >
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
        <Icon
          className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold tracking-tight text-foreground">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA — pushes to bottom */}
      <div className="mt-auto pt-2 w-full">
        <Button variant="default" className="w-full" asChild>
          <Link href={card.href}>
            {card.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function SolutionsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

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
            {solutionsSection.label}
          </motion.span>

          <motion.h2
            {...fadeUp(0.08)}
            animate={animateUp}
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {solutionsSection.headline}
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            animate={animateUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {solutionsSection.subheadline}
          </motion.p>
        </div>

        {/* Card grid — 1 col mobile → 2 col tablet → 4 col desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionsSection.cards.map((card, i) => (
            <SolutionCardItem
              key={card.title}
              card={card}
              animate={animateUp}
              delay={0.28 + i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
