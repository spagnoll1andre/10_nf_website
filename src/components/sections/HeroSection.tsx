"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/asset-path";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: EASE,
  } satisfies Transition,
});

export default function HeroSection() {
  return (
    <Section className="overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">

      {/* ── Ambient background glows ── */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-60 -left-48 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-60 -right-48 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-3xl"
        aria-hidden="true"
      />

      <Container size="lg" className="relative flex flex-col items-center gap-8 text-center lg:gap-10">

        {/* Badge pill */}
        <motion.div {...fadeUp(0)}>
          <Pill>Partner Odoo Certificato</Pill>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
        >
          Il tuo partner tecnologico
          <br className="hidden sm:block" />
          {" "}per la digitalizzazione aziendale
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.22)}
          className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Automatizza ciò che ti rallenta, accelera ciò che ti fa crescere.
          Soluzioni ERP su misura per le PMI italiane — un unico strumento,
          tutti i processi, massimo controllo.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.34)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="pillPrimary" size="lg" asChild>
            <Link href="/contatti">Richiedi un&apos;analisi gratuita</Link>
          </Button>
          <Button variant="pillOutline" size="lg" asChild>
            <Link href="/contatti">Prenota una demo</Link>
          </Button>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          {...fadeUp(0.42)}
          className="text-xs text-muted-foreground"
        >
          Prima analisi senza impegno&nbsp;·&nbsp;Risposta entro 24h&nbsp;·&nbsp;Nessun vincolo contrattuale
        </motion.p>

        {/* ── Dashboard visual — tilted perspective + glow ── */}
        <motion.div
          {...fadeUp(0.54)}
          className="relative w-full"
        >
          {/* Glow aura behind the image */}
          <div
            className="pointer-events-none absolute inset-x-[8%] top-[15%] bottom-0 -z-10 rounded-2xl bg-primary/[0.22] blur-3xl"
            aria-hidden="true"
          />

          {/* Tilt frame */}
          <div
            className="relative overflow-hidden rounded-2xl border border-foreground/[0.08] shadow-2xl"
            style={{
              aspectRatio: "16 / 9",
              transform: "perspective(1400px) rotateX(5deg)",
              transformOrigin: "center top",
            }}
          >
            <Image
              src={assetPath("/dashboard_base.png")}
              alt="Dashboard NovaFlow — gestione unificata dei processi aziendali"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            />

            {/* Bottom fade to blend into page */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
