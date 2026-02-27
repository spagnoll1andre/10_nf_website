export type WhyUsItem = {
  /** Lucide icon name — mapped to component in WhyUsSection.tsx */
  iconName: "Award" | "Layers" | "CircleDollarSign" | "SlidersHorizontal" | "Users";
  title: string;
  description: string;
};

export type WhyUsSectionData = {
  label: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  items: WhyUsItem[];
};

export const whyUsSection: WhyUsSectionData = {
  label: "Perché scegliere noi",
  headline: "Non solo un fornitore.\nIl tuo partner tecnologico.",
  subheadline:
    "La differenza tra chi installa un software e chi costruisce una soluzione con te — presente oggi e nei tuoi sviluppi futuri.",
  ctaLabel: "Richiedi un'analisi gratuita",
  ctaHref: "/contatti",
  items: [
    {
      iconName: "Award",
      title: "Completezza delle competenze",
      description:
        "Copriamo finanza agevolata, intelligenza artificiale, cybersecurity e gestione dei processi aziendali: competenze rare, riunite in un unico interlocutore.",
    },
    {
      iconName: "Layers",
      title: "Unificazione dei processi",
      description:
        "Un solo strumento per ufficio, magazzino, produzione e vendite. Niente più dati dispersi tra tool separati, niente più inefficienze da riconciliazione manuale.",
    },
    {
      iconName: "CircleDollarSign",
      title: "Prezzi accessibili",
      description:
        "Costi chiari, nessuna sorpresa. Il nostro modello permette alle PMI italiane di accedere a tecnologia enterprise a un prezzo realmente sostenibile.",
    },
    {
      iconName: "SlidersHorizontal",
      title: "Personalizzazione reale",
      description:
        "Adattiamo ogni dettaglio alla tua realtà. Partiamo da un'infrastruttura solida collaudata sui nostri progetti passati e costruiamo intorno alle esigenze specifiche di chi lavora nella tua azienda.",
    },
    {
      iconName: "Users",
      title: "Assistenza post-vendita",
      description:
        "Non scompariamo dopo il go-live. Un contatto di fiducia dedicato, formazione del team, supporto continuo e sviluppi futuri a portata di mano: questo è essere partner, non fornitori.",
    },
  ],
};
