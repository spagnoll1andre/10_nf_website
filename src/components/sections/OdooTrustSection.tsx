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
        <Panel variant="darkPanel" className="px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20">

          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            animate={animate}
            className="mb-8 flex justify-center"
          >
            <Pill variant="glass" size="lg" className="uppercase tracking-[0.15em]">
              {odooTrust.badge}
            </Pill>
          </motion.div>

          {/* Headline */}
          <motion.p
            {...fadeUp(0.1)}
            animate={animate}
            className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl"
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
                  text-xl tracking-wide text-white/60
                  transition-colors duration-200 hover:text-white
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
            className="mx-auto mb-10 h-px w-16 bg-white/20"
          />

          {/* Footnote */}
          <motion.p
            {...fadeUp(0.38)}
            animate={animate}
            className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {odooTrust.footnote}
          </motion.p>

        </Panel>
      </Container>
    </Section>
  );
}
