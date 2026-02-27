"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { odooTrust } from "@/data/odoo-trust";

// ─── animation helpers ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  transition: { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  transition: { duration: 0.5, delay, ease: EASE } satisfies Transition,
});

// ─── component ────────────────────────────────────────────────────────────────

export default function OdooTrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animate = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  return (
    <section className="w-full bg-background px-4 py-8 sm:px-6 lg:px-8">
      {/* Dark card — mirrors reference exactly */}
      <div
        ref={ref}
        className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-foreground px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20"
      >

        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          animate={animate}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary-foreground/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/80">
            {odooTrust.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.p
          {...fadeUp(0.1)}
          animate={animate}
          className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-primary-foreground sm:text-xl"
        >
          {odooTrust.headline}
        </motion.p>

        {/* Logo strip */}
        <motion.div
          {...fadeIn(0.22)}
          animate={animateFade}
          className="mb-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
        >
          {odooTrust.clients.map((client) => (
            <span
              key={client.name}
              className={`
                text-xl tracking-wide text-primary-foreground/60
                transition-colors duration-200 hover:text-primary-foreground
                sm:text-2xl
                ${client.weight === "bold" ? "font-bold" : "font-semibold"}
              `}
            >
              {client.name}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          {...fadeIn(0.32)}
          animate={animateFade}
          className="mx-auto mb-10 h-px w-16 bg-primary-foreground/20"
        />

        {/* Footnote */}
        <motion.p
          {...fadeUp(0.38)}
          animate={animate}
          className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg"
        >
          {odooTrust.footnote}
        </motion.p>

      </div>
    </section>
  );
}
