export type SolutionCard = {
  /** Lucide icon name — mapped to component in SolutionsSection.tsx */
  iconName: "LayoutDashboard" | "Workflow" | "Globe" | "Headphones";
  title: string;
  description: string;
  tags: string[];
  href: string;
  ctaLabel: string;
};

export type SolutionsSectionData = {
  label: string;
  headline: string;
  subheadline: string;
  cards: SolutionCard[];
};

export const solutionsSection: SolutionsSectionData = {
  label: "Le nostre soluzioni",
  headline: "Tutto ciò che serve, in un unico partner",
  subheadline:
    "Dalla gestione operativa alle automazioni intelligenti, dal digitale al supporto post-vendita: copriamo ogni esigenza della tua PMI.",
  cards: [
    {
      iconName: "LayoutDashboard",
      title: "Sviluppo ERP",
      description:
        "Unifichiamo contabilità, fatturazione, magazzino, produzione e vendite in un'unica piattaforma Odoo su misura per la tua realtà aziendale.",
      tags: ["Contabilità", "Magazzino", "Produzione", "Vendite"],
      href: "/erp",
      ctaLabel: "Scopri di più",
    },
    {
      iconName: "Workflow",
      title: "Automazioni",
      description:
        "Eliminiamo il lavoro ripetitivo con custom actions, import/export Excel, modelli previsionali e workflow agentici basati su AI.",
      tags: ["Custom Actions", "Import/Export", "Previsioni", "Agentic AI"],
      href: "/automazioni",
      ctaLabel: "Scopri di più",
    },
    {
      iconName: "Globe",
      title: "Digital Solutions",
      description:
        "Progettiamo siti web, eCommerce e app mobile per far crescere il tuo business online, integrati con il tuo gestionale ERP.",
      tags: ["Web & eCommerce", "App Mobile", "Infrastruttura", "Integrazioni"],
      href: "/servizi",
      ctaLabel: "Scopri di più",
    },
    {
      iconName: "Headphones",
      title: "Supporto al Cliente",
      description:
        "Formazione del team, assistenza post-rilascio e un punto di contatto dedicato che conosce la tua azienda e cresce con te.",
      tags: ["Formazione", "Assistenza", "Point of Contact", "Post-vendita"],
      href: "/servizi/formazione",
      ctaLabel: "Scopri di più",
    },
  ],
};
