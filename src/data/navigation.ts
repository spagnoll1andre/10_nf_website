export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Chi Siamo",
    href: "/chi-siamo",
  },
  {
    label: "Sviluppo ERP",
    href: "/erp",
    children: [
      { label: "Contabilità", href: "/erp/contabilita" },
      { label: "Fatturazione", href: "/erp/fatturazione" },
      { label: "Magazzino", href: "/erp/magazzino" },
      { label: "Produzione", href: "/erp/produzione" },
      { label: "Vendite", href: "/erp/vendite" },
    ],
  },
  {
    label: "Automazioni",
    href: "/automazioni",
    children: [
      { label: "Custom Actions", href: "/automazioni/custom-actions" },
      { label: "Import/Export Excel", href: "/automazioni/import-export" },
      { label: "Previsioni", href: "/automazioni/previsioni" },
      { label: "Agentic", href: "/automazioni/agentic" },
    ],
  },
  {
    label: "Altri Servizi",
    href: "/servizi",
    children: [
      { label: "Architecture & Infrastructure", href: "/servizi/infrastructure" },
      { label: "Web ed eCommerce", href: "/servizi/web-ecommerce" },
      { label: "App Mobile", href: "/servizi/app-mobile" },
      { label: "Formazione", href: "/servizi/formazione" },
      { label: "Assistenza", href: "/servizi/assistenza" },
    ],
  },
  {
    label: "Soluzioni Verticali",
    href: "/soluzioni",
    children: [
      { label: "Nova-Distribution", href: "/soluzioni/nova-distribution" },
      { label: "Nova-Club", href: "/soluzioni/nova-club" },
      { label: "Nova-Fabrique", href: "/soluzioni/nova-fabrique" },
      { label: "Nova-Finance", href: "/soluzioni/nova-finance" },
    ],
  },
  {
    label: "Contatti",
    href: "/contatti",
  },
];

export const navCtas = [
  { label: "Prenota una demo", href: "/contatti", variant: "outline" as const },
  { label: "Analisi gratuita", href: "/contatti", variant: "default" as const },
];
