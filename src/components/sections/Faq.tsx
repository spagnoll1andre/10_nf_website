"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, type Transition } from "framer-motion";
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
      className="border-b border-white/10"
    >
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <span className="text-base font-semibold leading-snug text-white sm:text-lg">
          {item.question}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="shrink-0 text-white/60"
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
            transition={{ duration: 0.35, ease: EASE } satisfies Transition}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-white/60 sm:text-base">
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
    <section
      ref={ref}
      className="w-full bg-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          {/* Badge pill — dark bordered, matching reference */}
          <motion.span
            {...fadeIn(0)}
            animate={animateFade}
            className="rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white"
          >
            {faqSection.label}
          </motion.span>

          <motion.h2
            {...fadeUp(0.08)}
            animate={animateUp}
            className="text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
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
          className="border-t border-white/10"
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

      </div>
    </section>
  );
}
