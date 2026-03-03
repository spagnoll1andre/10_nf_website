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

// Reusable fade-up variant factory — delay in seconds
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
    <Section className="pt-24 pb-24 lg:pt-32 lg:pb-24">
      <Container size="lg" className="flex flex-col items-center gap-8 text-center lg:gap-10">

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

        {/* Dashboard visual */}
        <motion.div
          {...fadeUp(0.54)}
          className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          <Image
            src={assetPath("/dashboard_base.png")}
            alt="Dashboard NovaFlow — gestione unificata dei processi aziendali"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </motion.div>

      </Container>
    </Section>
  );
}
