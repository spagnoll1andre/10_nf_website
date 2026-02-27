export type OdooClient = {
  name: string;
  /** display weight applied to the text logo */
  weight?: "normal" | "semibold" | "bold";
};

export type OdooTrustData = {
  badge: string;
  headline: string;
  footnote: string;
  /** Well-known global companies that run on Odoo — source of trust signal */
  clients: OdooClient[];
};

export const odooTrust: OdooTrustData = {
  badge: "Powered by Odoo",
  headline:
    "Come partner Odoo, realizziamo soluzioni ERP di eccellenza, customizzate per le tue esigenze",
  footnote:
    "Offriamo la potenza e l'affidabilità di Odoo, il software scelto da oltre 12 milioni di utenti in tutto il mondo, adattato alla tua realtà",
  clients: [
    { name: "Casio",      weight: "bold" },
    { name: "KPMG",       weight: "bold" },
    { name: "Hyundai",    weight: "semibold" },
    { name: "Heineken",   weight: "bold" },
    { name: "Toyota",     weight: "bold" },
    { name: "Volkswagen", weight: "semibold" },
  ],
};
