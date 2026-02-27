"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import {
  Zap,
  LayoutDashboard,
  Globe,
  Users,
  type LucideIcon,
} from "lucide-react";
import { caseStudySection, type CaseStudyCard } from "@/data/case-study-section";
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

const ICON_MAP: Record<CaseStudyCard["iconName"], LucideIcon> = {
  Zap,
  LayoutDashboard,
  Globe,
  Users,
};

// ─── accent styles ────────────────────────────────────────────────────────────

const ACCENT: Record<
  CaseStudyCard["accent"],
  { block: string; icon: string }
> = {
  // Vivid blue — primary brand colour
  primary: {
    block: "bg-primary",
    icon: "text-primary-foreground",
  },
  // Near-black — strong contrast
  dark: {
    block: "bg-foreground",
    icon: "text-primary-foreground",
  },
  // Deep blue — accent-foreground token (oklch 0.38 0.14 265)
  deep: {
    block: "bg-accent-foreground",
    icon: "text-primary-foreground",
  },
  // Subtle — secondary surface with border
  subtle: {
    block: "bg-secondary border border-border",
    icon: "text-primary",
  },
};

// ─── card sub-component ───────────────────────────────────────────────────────

function CaseStudyCardItem({
  card,
  animate,
  delay,
}: {
  card: CaseStudyCard;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
}) {
  const Icon = ICON_MAP[card.iconName];
  const { block, icon } = ACCENT[card.accent];

  return (
    <motion.div
      {...fadeUp(delay)}
      animate={animate}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
        "transition-shadow duration-300 hover:shadow-md"
      )}
    >
      {/* ── Text content ── */}
      <div className="flex flex-col gap-4 p-6 pb-5">
        {/* Area pill tag */}
        <span className="flex w-fit items-center gap-1.5 text-xs font-semibold text-primary">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          {card.area}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Visual block ── */}
      <div
        className={cn(
          "mx-5 mb-5 flex aspect-video items-center justify-center rounded-xl",
          block
        )}
      >
        <Icon
          className={cn(
            "h-14 w-14 transition-transform duration-300 group-hover:scale-110",
            icon
          )}
          aria-hidden="true"
          strokeWidth={1.25}
        />
      </div>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function CaseStudySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  return (
    <section
      ref={ref}
      className="w-full bg-muted px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <motion.span
            {...fadeIn(0)}
            animate={animateFade}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
          >
            {caseStudySection.label}
          </motion.span>

          <motion.h2
            {...fadeUp(0.08)}
            animate={animateUp}
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {caseStudySection.headline}
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            animate={animateUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {caseStudySection.subheadline}
          </motion.p>
        </div>

        {/* Card grid — 1 col mobile / 2 col sm+ */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudySection.cards.map((card, i) => (
            <CaseStudyCardItem
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
