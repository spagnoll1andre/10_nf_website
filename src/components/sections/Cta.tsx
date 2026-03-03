"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
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

const BARS = [38, 55, 44, 72, 58, 85, 70, 80, 65, 92, 78, 100];

const STATS = [
  { label: "Efficienza", value: "+24%", accent: true },
  { label: "Clienti attivi", value: "142", accent: false },
  { label: "Fatturato", value: "€2.4M", accent: false },
];

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.55)]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-[#0b1424] px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <div className="ml-3 h-4 w-[180px] rounded bg-white/[0.07]" />
      </div>

      {/* App body */}
      <div className="flex min-h-[320px]">

        {/* Sidebar */}
        <div className="w-36 shrink-0 bg-[#091220] p-3 lg:w-40">
          {/* Logo mark */}
          <div className="mb-5 flex items-center gap-2 px-2 py-1.5">
            <div className="h-5 w-5 rounded-md bg-primary/80" />
            <div className="h-2.5 w-16 rounded bg-white/25" />
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-2",
                  item.active
                    ? "bg-primary/20"
                    : "bg-transparent"
                )}
              >
                <div
                  className={cn(
                    "h-3 w-3 shrink-0 rounded-sm",
                    item.active ? "bg-primary/80" : "bg-white/12"
                  )}
                />
                <div
                  className={cn(
                    "h-2 rounded",
                    item.active ? "bg-white/55" : "bg-white/16"
                  )}
                  style={{ width: item.label.length * 5.5 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-slate-50/[0.97] p-4">
          {/* Page title */}
          <p className="mb-4 text-xs font-semibold text-slate-400">Dashboard</p>

          {/* Stats row — 3 columns */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {STATS.map((s) => (
              <div
                key={s.label}
                className={cn(
                  "rounded-xl border p-3",
                  s.accent
                    ? "border-primary/20 bg-primary/[0.06]"
                    : "border-slate-200 bg-white shadow-sm"
                )}
              >
                <p className="mb-0.5 text-[9px] text-slate-400">{s.label}</p>
                <p className={cn(
                  "text-sm font-bold",
                  s.accent ? "text-primary" : "text-slate-800"
                )}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[9px] font-semibold text-slate-400">Andamento mensile</p>
              <div className="h-1.5 w-16 rounded-full bg-slate-100">
                <div className="h-1.5 w-10 rounded-full bg-primary/40" />
              </div>
            </div>
            <div className="flex h-16 items-end gap-0.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-t-sm",
                    i === BARS.length - 1
                      ? "bg-primary"
                      : i >= BARS.length - 4
                      ? "bg-primary/50"
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
    <Section ref={ref}>
      <Container>
        <Panel variant="darkPanel" className="overflow-hidden px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">

          {/* Glow — top-left */}
          <div
            className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/[0.16] blur-3xl"
            aria-hidden="true"
          />
          {/* Glow — bottom-right */}
          <div
            className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/[0.10] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* ── Left: text + CTAs ── */}
            <div className="flex flex-col gap-7">

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
                className="-mt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {ctaSection.headline}
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                {...fadeUp(0.16)}
                animate={animateUp}
                className="text-base leading-relaxed text-white/60 sm:text-lg"
              >
                {ctaSection.subheadline}
              </motion.p>

              {/* Trust row */}
              <motion.div
                {...fadeIn(0.24)}
                animate={animateFade}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-xs font-medium text-white/35">
                  {ctaSection.trustLabel}:
                </span>
                {ctaSection.trustNames.map((name) => (
                  <Pill key={name} variant="outline" size="sm" className="bg-white/[0.04] text-white/55">
                    {name}
                  </Pill>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                {...fadeUp(0.32)}
                animate={animateUp}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Button variant="glass" size="lg" asChild>
                  <a href="#contatti">{ctaSection.primaryCta}</a>
                </Button>

                <Button variant="ghostDark" size="lg" asChild>
                  <a href="#contatti">{ctaSection.secondaryCta}</a>
                </Button>
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
        </Panel>
      </Container>
    </Section>
  );
}
