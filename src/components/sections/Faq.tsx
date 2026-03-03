"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, type Transition } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { faqSection, type FaqItem } from "@/data/faq-section";

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

// ─── accordion item ───────────────────────────────────────────────────────────

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  animate,
  delay,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
}) {
  return (
    <motion.div
      {...fadeUp(delay)}
      animate={animate}
      className="border-b border-white/[0.12]"
    >
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-8 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <span className="text-base font-semibold leading-snug text-white sm:text-lg">
          {item.question}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="shrink-0 text-white/50 transition-colors duration-200 group-hover:text-white/80"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE } satisfies Transition}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm leading-relaxed text-white/65 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function FaqSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  const handleToggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <Section ref={ref}>
      <Container size="lg">
        <Panel variant="darkPanel" className="px-8 py-16 sm:px-12 sm:py-20">

          {/* Top-centre inner glow */}
          <div
            className="pointer-events-none absolute left-1/2 -top-16 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-3xl"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative mb-16 flex flex-col items-center gap-5 text-center">
            <motion.div {...fadeIn(0)} animate={animateFade}>
              <Pill variant="glass" size="lg" className="uppercase tracking-[0.15em]">
                {faqSection.label}
              </Pill>
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              animate={animateUp}
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {faqSection.headline}
            </motion.h2>

            <motion.p
              {...fadeUp(0.18)}
              animate={animateUp}
              className="max-w-xl text-base leading-relaxed text-white/55"
            >
              {faqSection.subheadline}
            </motion.p>
          </div>

          {/* Accordion list */}
          <motion.div
            {...fadeIn(0.28)}
            animate={animateFade}
            className="relative border-t border-white/[0.12]"
          >
            {faqSection.items.map((item, i) => (
              <AccordionItem
                key={item.question}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={handleToggle}
                animate={animateUp}
                delay={0.3 + i * 0.06}
              />
            ))}
          </motion.div>

        </Panel>
      </Container>
    </Section>
  );
}
