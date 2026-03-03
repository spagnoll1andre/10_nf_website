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
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
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
        "group flex flex-col items-center gap-5 rounded-2xl border border-white/[0.09] bg-white/[0.04] p-7 text-center backdrop-blur-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.07]"
      )}
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
        <Icon
          className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold tracking-tight text-white">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/60">
        {card.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {card.tags.map((tag) => (
          <Pill key={tag} variant="outline" size="sm">{tag}</Pill>
        ))}
      </div>

      {/* CTA — pushes to bottom */}
      <div className="mt-auto pt-2 w-full">
        <Button variant="pillPrimary" className="w-full" asChild>
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
    <Section ref={ref}>
      <Container>
        <Panel variant="darkPanel" className="px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* Ambient accent glow — top-right */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-primary/[0.14] blur-3xl"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative mb-14 flex flex-col items-center gap-4 text-center">
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
              className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
            >
              {solutionsSection.headline}
            </motion.h2>

            <motion.p
              {...fadeUp(0.18)}
              animate={animateUp}
              className="max-w-xl text-base leading-relaxed text-white/60"
            >
              {solutionsSection.subheadline}
            </motion.p>
          </div>

          {/* Card grid — 1 col mobile → 2 col tablet → 4 col desktop */}
          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutionsSection.cards.map((card, i) => (
              <SolutionCardItem
                key={card.title}
                card={card}
                animate={animateUp}
                delay={0.28 + i * 0.1}
              />
            ))}
          </div>

        </Panel>
      </Container>
    </Section>
  );
}
