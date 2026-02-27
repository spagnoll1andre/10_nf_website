"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Transition } from "framer-motion";
import {
  Award,
  Layers,
  CircleDollarSign,
  SlidersHorizontal,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whyUsSection, type WhyUsItem } from "@/data/whyus-section";
import { cn } from "@/lib/utils";

// ─── animation helpers ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  transition: { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  transition: { duration: 0.45, delay, ease: EASE } satisfies Transition,
});

// ─── icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<WhyUsItem["iconName"], LucideIcon> = {
  Award,
  Layers,
  CircleDollarSign,
  SlidersHorizontal,
  Users,
};

// ─── feature row sub-component ────────────────────────────────────────────────

function FeatureRow({
  item,
  animate,
  delay,
  isLast,
}: {
  item: WhyUsItem;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
  isLast: boolean;
}) {
  const Icon = ICON_MAP[item.iconName];

  return (
    <motion.div
      {...fadeUp(delay)}
      animate={animate}
      className={cn(
        "flex gap-4 py-6",
        !isLast && "border-b border-border"
      )}
    >
      {/* Icon */}
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon
          className="h-5 w-5 text-primary"
          aria-hidden="true"
          strokeWidth={1.75}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function WhyUsSection() {
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">

          {/* ── Left: anchor text block ── */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">

            <motion.span
              {...fadeIn(0)}
              animate={animateFade}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            >
              {whyUsSection.label}
            </motion.span>

            <motion.h2
              {...fadeUp(0.08)}
              animate={animateUp}
              className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
              style={{ whiteSpace: "pre-line" }}
            >
              {whyUsSection.headline}
            </motion.h2>

            <motion.p
              {...fadeUp(0.16)}
              animate={animateUp}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {whyUsSection.subheadline}
            </motion.p>

            {/* Divider */}
            <motion.div
              {...fadeIn(0.24)}
              animate={animateFade}
              className="h-px w-12 bg-border"
            />

            {/* CTA */}
            <motion.div {...fadeUp(0.28)} animate={animateUp}>
              <Button asChild>
                <Link href={whyUsSection.ctaHref}>
                  {whyUsSection.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>

          </div>

          {/* ── Right: feature list ── */}
          <div className="flex flex-col divide-y-0">
            {whyUsSection.items.map((item, i) => (
              <FeatureRow
                key={item.title}
                item={item}
                animate={animateUp}
                delay={0.12 + i * 0.1}
                isLast={i === whyUsSection.items.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
