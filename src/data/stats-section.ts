export type StatItem = {
  value: string;
  label: string;
  description?: string;
  /** Visual style for the card */
  variant: "primary" | "dark" | "accent" | "light";
  /** Spans 2 columns on lg breakpoint */
  wide?: boolean;
};

export type StatsSectionData = {
  label: string;
  headline: string;
  subheadline: string;
  stats: StatItem[];
};

export const statsSection: StatsSectionData = {
  label: "I nostri numeri",
  headline: "Noi, raccontati dai nostri numeri",
  subheadline:
    "Fatti concreti e tangibili che riassumono la nostra esperienza, la base per iniziare a conoscerci meglio e costruire un rapporto di fiducia che duri nel tempo.",
  stats: [
    {
      value: "5+",
      label: "Anni di esperienza",
      description:
        "Al fianco delle PMI italiane nel percorso di digitalizzazione.",
      variant: "primary",
    },
    {
      value: "30+",
      label: "Clienti PMI seguiti",
      description:
        "Aziende che hanno scelto NovaFlow come partner tecnologico di fiducia.",
      variant: "dark",
      wide: true,
    },
    {
      value: "50+",
      label: "Progetti completati",
      description: "Soluzioni su misura consegnate e operative.",
      variant: "light",
    },
    {
      value: "150+",
      label: "Moduli Odoo attivi",
      description:
        "Configurazioni specializzate per ogni area aziendale.",
      variant: "accent",
    },
    {
      value: "1.000+",
      label: "Ore di formazione",
      description:
        "Erogate ai team dei nostri clienti per garantire piena autonomia.",
      variant: "light",
    },
  ],
};
