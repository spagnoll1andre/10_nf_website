export type CtaSectionData = {
  label: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  trustLabel: string;
  trustNames: string[];
};

export const ctaSection: CtaSectionData = {
  label: "Inizia oggi",
  headline: "Pronto a semplificare la tua azienda?",
  subheadline:
    "Scopri come NovaFlow può trasformare i tuoi processi in un unico gestionale intelligente. L'analisi iniziale è gratuita e senza impegno.",
  primaryCta: "Richiedi un'analisi gratuita",
  secondaryCta: "Prenota una demo",
  trustLabel: "Già al fianco di",
  trustNames: ["Tada", "Stemau", "Kosmail", "Fraglia"],
};
