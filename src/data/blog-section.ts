export type BlogPost = {
  date: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  /** CSS linear-gradient string for the card background */
  gradient: string;
  /** CSS color for the decorative glow accent */
  accentColor: string;
};

export type BlogSectionData = {
  label: string;
  headline: string;
  posts: BlogPost[];
};

export const blogSection: BlogSectionData = {
  label: "Blog",
  headline: "Gli ultimi aggiornamenti",
  posts: [
    {
      date: "10 GEN 2026",
      category: "ERP & Gestionale",
      title: "Come un ERP personalizzato può trasformare la tua azienda",
      subtitle:
        "Dai processi manuali all'automazione: perché le soluzioni su misura fanno la differenza",
      excerpt:
        "Non si tratta di adattare l'azienda al software, ma di modellare il software sull'azienda. Un ERP su misura elimina silos informativi e inefficienze operative.",
      gradient: "linear-gradient(145deg, #0d1f42 0%, #1a3a6e 60%, #0a2a54 100%)",
      accentColor: "#3b82f6",
    },
    {
      date: "28 GEN 2026",
      category: "Strategia Digitale",
      title:
        "5 segnali che indicano che la tua azienda ha bisogno di un nuovo sistema gestionale",
      subtitle:
        "Dalle inefficienze interne ai dati sparsi: come capire se è ora di evolversi",
      excerpt:
        "Processi manuali ripetitivi, informazioni disperse, report tardivi: i cinque segnali da non ignorare prima che il problema si aggravi.",
      gradient: "linear-gradient(145deg, #0a2416 0%, #0d4a26 60%, #062012 100%)",
      accentColor: "#22c55e",
    },
    {
      date: "14 FEB 2026",
      category: "Intelligenza Artificiale",
      title:
        "Intelligenza artificiale e automazione nei gestionali: cosa aspettarsi nel 2026",
      subtitle:
        "Come l'AI sta trasformando il modo in cui le aziende organizzano dati, processi e decisioni",
      excerpt:
        "Nel 2026 le soluzioni AI integrate nei gestionali non sono più un vantaggio futuro: sono un alleato concreto per la gestione quotidiana.",
      gradient: "linear-gradient(145deg, #1a0a2e 0%, #2d1052 60%, #130820 100%)",
      accentColor: "#a855f7",
    },
  ],
};
