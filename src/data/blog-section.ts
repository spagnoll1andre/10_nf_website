export type BlogPost = {
  date: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  /** Path to the cover image (used with next/image fill) */
  image: string;
  /** CSS linear-gradient tint overlay on top of the image */
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
      image: "/blog/blog-01.svg",
      gradient: "linear-gradient(145deg, rgba(13,31,66,0.72) 0%, rgba(26,58,110,0.68) 60%, rgba(10,42,84,0.72) 100%)",
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
      image: "/blog/blog-02.svg",
      gradient: "linear-gradient(145deg, rgba(10,36,22,0.72) 0%, rgba(13,74,38,0.68) 60%, rgba(6,32,18,0.72) 100%)",
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
      image: "/blog/blog-03.svg",
      gradient: "linear-gradient(145deg, rgba(26,10,46,0.72) 0%, rgba(45,16,82,0.68) 60%, rgba(19,8,32,0.72) 100%)",
      accentColor: "#a855f7",
    },
  ],
};
