"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { ctaSection } from "@/data/cta-section";
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

// ─── dashboard mockup (CSS-only, no external assets) ─────────────────────────

const NAV_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "Fatture", active: false },
  { label: "Vendite", active: false },
  { label: "Acquisti", active: false },
  { label: "Magazzino", active: false },
  { label: "Supporto", active: false },
];

const BARS = [42, 67, 51, 83, 63, 91, 78, 88, 72, 96, 84, 100];

const STATS = [
  { label: "Efficienza", value: "+24%" },
  { label: "Clienti", value: "142" },
];

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-slate-900 px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
        <div className="ml-3 h-4 flex-1 max-w-[180px] rounded bg-white/10" />
      </div>

      {/* App body */}
      <div className="flex min-h-[300px]">

        {/* Sidebar — dark */}
        <div className="w-36 shrink-0 bg-slate-900 p-3 lg:w-40">
          {/* Logo mark */}
          <div className="mb-4 flex items-center gap-2 px-2 py-1">
            <div className="h-5 w-5 rounded bg-primary/70" />
            <div className="h-3 w-16 rounded bg-white/30" />
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5",
                  item.active ? "bg-primary/25" : "bg-transparent"
                )}
              >
                <div
                  className={cn(
                    "h-3 w-3 shrink-0 rounded-sm",
                    item.active ? "bg-primary/70" : "bg-white/15"
                  )}
                />
                <div
                  className={cn(
                    "h-2 rounded",
                    item.active ? "bg-white/60" : "bg-white/20"
                  )}
                  style={{ width: item.label.length * 5.5 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content — light */}
        <div className="flex-1 bg-slate-50 p-4">
          {/* Page title */}
          <p className="mb-3 text-xs font-semibold text-slate-500">Dashboard</p>

          {/* Stats row */}
          <div className="mb-3 grid grid-cols-2 gap-2">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <p className="mb-0.5 text-[10px] text-slate-400">{s.label}</p>
                <p className="text-sm font-bold text-slate-800">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <p className="mb-2 text-[10px] text-slate-400">Andamento mensile</p>
            <div className="flex h-14 items-end gap-0.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-t-sm transition-all",
                    i === BARS.length - 1
                      ? "bg-primary/80"
                      : "bg-slate-200"
                  )}
                  style={{ height: `${h}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Subtle radial glow — top-left */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: text + CTAs ── */}
          <div className="flex flex-col gap-8">

            {/* Overline label */}
            <motion.span
              {...fadeIn(0)}
              animate={animateFade}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            >
              {ctaSection.label}
            </motion.span>

            {/* Headline */}
            <motion.h2
              {...fadeUp(0.08)}
              animate={animateUp}
              className="-mt-4 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
            >
              {ctaSection.headline}
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.16)}
              animate={animateUp}
              className="-mt-2 text-base leading-relaxed text-white/60 sm:text-lg"
            >
              {ctaSection.subheadline}
            </motion.p>

            {/* Trust row */}
            <motion.div
              {...fadeIn(0.24)}
              animate={animateFade}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-xs font-medium text-white/40">
                {ctaSection.trustLabel}:
              </span>
              {ctaSection.trustNames.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs font-semibold text-white/60"
                >
                  {name}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.32)}
              animate={animateUp}
              className="flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary — white filled */}
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {ctaSection.primaryCta}
              </a>

              {/* Secondary — ghost */}
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {ctaSection.secondaryCta}
              </a>
            </motion.div>

          </div>

          {/* ── Right: dashboard mockup ── */}
          <motion.div
            {...fadeIn(0.2)}
            animate={animateFade}
            className="w-full"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
