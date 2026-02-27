"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
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
      className="group relative flex min-h-[440px] cursor-pointer flex-col overflow-hidden rounded-2xl"
      style={{ background: post.gradient }}
    >
      {/* Decorative glow — bottom-right corner */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: post.accentColor }}
        aria-hidden="true"
      />

      {/* Subtle dot-grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay for text legibility */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent"
        aria-hidden="true"
      />

      {/* ── Text content (top) ── */}
      <div className="relative z-10 flex flex-col gap-2 p-6">
        {/* Date */}
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
          {post.date}
        </span>

        {/* Category */}
        <span
          className="mt-0.5 w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/90"
          style={{ backgroundColor: `${post.accentColor}33` }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-white">
          {post.title}
        </h3>
      </div>

      {/* ── Excerpt (bottom, revealed on hover) ── */}
      <div className="relative z-10 mt-auto px-6 pb-6">
        <p className="text-sm leading-relaxed text-white/55 transition-opacity duration-300 group-hover:text-white/75">
          {post.excerpt}
        </p>

        {/* Read-more link */}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
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
    <section
      ref={ref}
      className="w-full bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          {/* Dark pill badge — matches reference */}
          <motion.span
            {...fadeIn(0)}
            animate={animateFade}
            className="rounded-full bg-foreground px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground"
          >
            {blogSection.label}
          </motion.span>

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

      </div>
    </section>
  );
}
