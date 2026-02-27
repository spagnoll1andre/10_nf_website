export type CaseStudyCard = {
  /** Lucide icon name — mapped to component in CaseStudySection.tsx */
  iconName: "Zap" | "LayoutDashboard" | "Globe" | "Users";
  /** Area di intervento — shown as the pill tag */
  area: string;
  title: string;
  description: string;
  tags: string[];
  /** Controls the colored visual block background */
  accent: "primary" | "dark" | "deep" | "subtle";
};

export type CaseStudySectionData = {
  label: string;
  headline: string;
  subheadline: string;
  cards: CaseStudyCard[];
};

export const caseStudySection: CaseStudySectionData = {
  label: "Case Study",
  headline: "NovaFlow sviluppa soluzioni ad hoc per le tue esigenze",
  subheadline:
    "Il nostro team multidisciplinare ha sviluppato progetti per le esigenze più diverse delle PMI italiane: dall'efficienza energetica alla gestione integrata di fabbrica, dall'e-commerce al compliance normativo.",
  cards: [
    {
      iconName: "Zap",
      area: "Efficienza energetica",
      title: "ERP integrato per la gestione dei processi energetici aziendali",
      description:
        "Implementazione di un gestionale Odoo su misura per ottimizzare i consumi, tracciare i KPI energetici e automatizzare la reportistica, riducendo sprechi e aumentando la visibilità sui costi.",
      tags: ["Odoo ERP", "Automazioni", "Reporting"],
      accent: "primary",
    },
    {
      iconName: "LayoutDashboard",
      area: "Contabilità & Produzione",
      title: "Unificazione di contabilità e gestione fabbrica in un'unica piattaforma",
      description:
        "Integrazione di flussi contabili e produttivi su Odoo, eliminando la riconciliazione manuale tra sistemi separati e garantendo visibilità in tempo reale su costi, ordini e magazzino.",
      tags: ["Contabilità", "MRP", "Magazzino"],
      accent: "dark",
    },
    {
      iconName: "Globe",
      area: "E-commerce & Distribuzione",
      title: "E-commerce integrato con la rete di distribuzione Odoo",
      description:
        "Sviluppo di un e-commerce collegato al gestionale Odoo, con sincronizzazione automatica di stock, ordini e spedizioni attraverso l'intera rete distributiva.",
      tags: ["E-commerce", "Odoo", "Logistica"],
      accent: "deep",
    },
    {
      iconName: "Users",
      area: "Gestione associativa",
      title: "Gestione iscrizioni, pagamenti e privacy su piattaforma Odoo",
      description:
        "Soluzione personalizzata per automatizzare iscrizioni, quote associative, pagamenti ricorrenti e adempimenti GDPR, con portale self-service per i soci.",
      tags: ["Iscrizioni", "Pagamenti", "GDPR"],
      accent: "subtle",
    },
  ],
};
