"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    <section className="w-full bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 pb-24 pt-24 text-center sm:px-6 lg:gap-10 lg:px-8 lg:pt-32">

        {/* Badge pill */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3.5 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            Partner Odoo Certificato
          </span>
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
          <Button size="lg" asChild>
            <Link href="/contatti">Richiedi un&apos;analisi gratuita</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
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
            src="/dashboard_base.png"
            alt="Dashboard NovaFlow — gestione unificata dei processi aziendali"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </motion.div>

      </div>
    </section>
  );
}
