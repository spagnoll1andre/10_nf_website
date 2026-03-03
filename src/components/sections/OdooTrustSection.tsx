"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Pill } from "@/components/ui/Pill";
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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animate = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  return (
    <Section ref={ref} className="py-8 lg:py-12">
      <Container>
        <Panel variant="darkPanel" className="px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-24 lg:py-24">

          {/* Strong inner glow — top centre */}
          <div
            className="pointer-events-none absolute left-1/2 -top-20 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.18] blur-3xl"
            aria-hidden="true"
          />
          {/* Softer secondary glow — bottom */}
          <div
            className="pointer-events-none absolute left-1/2 bottom-0 h-[220px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl"
            aria-hidden="true"
          />

          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            animate={animate}
            className="relative mb-8 flex justify-center"
          >
            <Pill variant="glass" size="lg" className="uppercase tracking-[0.15em]">
              {odooTrust.badge}
            </Pill>
          </motion.div>

          {/* Headline */}
          <motion.p
            {...fadeUp(0.1)}
            animate={animate}
            className="relative mx-auto mb-14 max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl"
          >
            {odooTrust.headline}
          </motion.p>

          {/* Logo strip */}
          <motion.div
            {...fadeIn(0.22)}
            animate={animateFade}
            className="relative mb-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16"
          >
            {odooTrust.clients.map((client) => (
              <span
                key={client.name}
                className={`
                  text-2xl tracking-wide text-white/50
                  transition-colors duration-300 hover:text-white/90
                  sm:text-3xl
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
            className="relative mx-auto mb-10 h-px w-20 bg-white/15"
          />

          {/* Footnote */}
          <motion.p
            {...fadeUp(0.38)}
            animate={animate}
            className="relative mx-auto max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {odooTrust.footnote}
          </motion.p>

        </Panel>
      </Container>
    </Section>
  );
}
