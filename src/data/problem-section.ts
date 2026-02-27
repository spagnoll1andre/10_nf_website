export type FeatureCard = {
  /** Lucide icon name — mapped to component in ProblemSection.tsx */
  iconName: "Zap" | "Shield" | "LayoutGrid";
  title: string;
  description: string;
};

export type ProblemSectionData = {
  label: string;
  headline: string;
  subheadline: string;
  cards: FeatureCard[];
  /** Two rows of benefit tags rendered as pills */
  tagRows: string[][];
};

export const problemSection: ProblemSectionData = {
  label: "Di cosa ci occupiamo",
  headline: "Velocità, efficienza e sicurezza per le PMI italiane",
  subheadline:
    "Risolviamo situazioni in cui l'azienda utilizza strumenti obsoleti, frammentati o eccessivamente costosi — con un unico gestionale intelligente e assistenza reale.",
  cards: [
    {
      iconName: "Zap",
      title: "Velocità ed Efficienza",
      description:
        "Eliminiamo colli di bottiglia e pratiche manuali. I tuoi processi interni diventano fluidi, veloci e misurabili in tempo reale.",
    },
    {
      iconName: "Shield",
      title: "Sicurezza dei Dati",
      description:
        "Proteggiamo le informazioni aziendali con soluzioni conformi alla normativa sulla privacy, garantendo continuità e backup permanente.",
    },
    {
      iconName: "LayoutGrid",
      title: "Controllo Centralizzato",
      description:
        "Un unico portale per vendite, magazzino, produzione e contabilità. Tutto sotto controllo, da qualsiasi dispositivo.",
    },
  ],
  tagRows: [
    [
      "Meno errori manuali",
      "Processi unificati",
      "Controllo centralizzato",
      "Prezzi accessibili",
      "Facilità d'uso",
      "Report in tempo reale",
    ],
    [
      "Assistenza post-vendita",
      "Customizzazione reale",
      "Formazione inclusa",
      "Privacy garantita",
      "Automazioni integrate",
      "Scalabilità futura",
    ],
  ],
};
