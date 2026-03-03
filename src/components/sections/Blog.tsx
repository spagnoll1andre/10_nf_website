"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Transition } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { blogSection, type BlogPost } from "@/data/blog-section";

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

// ─── blog card sub-component ──────────────────────────────────────────────────

function BlogCard({
  post,
  animate,
  delay,
}: {
  post: BlogPost;
  animate: { opacity: number; y: number } | undefined;
  delay: number;
}) {
  return (
    <motion.article
      {...fadeUp(delay)}
      animate={animate}
      className="group relative flex h-[460px] cursor-pointer flex-col overflow-hidden rounded-2xl"
    >
      {/* ── Cover image ── */}
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient tint overlay (brand colour) */}
      <div
        className="absolute inset-0"
        style={{ background: post.gradient }}
        aria-hidden="true"
      />

      {/* Dark gradient for text legibility — heavier at top and bottom */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/80"
        aria-hidden="true"
      />

      {/* Decorative glow — bottom-right corner */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ backgroundColor: post.accentColor }}
        aria-hidden="true"
      />

      {/* ── Text content (top) ── */}
      <div className="relative z-10 flex flex-col gap-2 p-6">
        {/* Date */}
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/55">
          {post.date}
        </span>

        {/* Category pill */}
        <span
          className="mt-0.5 w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/90"
          style={{ backgroundColor: `${post.accentColor}40` }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-white">
          {post.title}
        </h3>
      </div>

      {/* ── Excerpt + read-more (bottom) ── */}
      <div className="relative z-10 mt-auto px-6 pb-6">
        <p className="text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/75">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-1.5">
          <span
            className="text-sm font-semibold transition-colors duration-200"
            style={{ color: post.accentColor }}
          >
            Leggi di più
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: post.accentColor }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: post.accentColor }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const animateUp = isInView ? { opacity: 1, y: 0 } : undefined;
  const animateFade = isInView ? { opacity: 1 } : undefined;

  return (
    <Section ref={ref}>
      <Container>

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <motion.div {...fadeIn(0)} animate={animateFade}>
            <Pill variant="dark" size="lg" className="uppercase tracking-[0.15em]">
              {blogSection.label}
            </Pill>
          </motion.div>

          <motion.h2
            {...fadeUp(0.08)}
            animate={animateUp}
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {blogSection.headline}
          </motion.h2>
        </div>

        {/* Card grid — 1 col mobile / 2 col sm / 3 col lg */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogSection.posts.map((post, i) => (
            <BlogCard
              key={post.title}
              post={post}
              animate={animateUp}
              delay={0.2 + i * 0.1}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
