import Link from "next/link";
import { navItems } from "@/data/navigation";

const footerGroups = [
  {
    label: "Prodotto",
    items: navItems.filter((i) =>
      ["Sviluppo ERP", "Automazioni", "Soluzioni Verticali"].includes(i.label)
    ),
  },
  {
    label: "Azienda",
    items: navItems.filter((i) =>
      ["Chi Siamo", "Altri Servizi", "Contatti"].includes(i.label)
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main grid: brand / links / contatti */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex text-xl font-bold tracking-tight text-foreground">
              Nova<span className="text-primary">Flow</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Il tuo partner tecnologico per la digitalizzazione aziendale.
              Soluzioni ERP su misura per le PMI italiane.
            </p>
            <span className="text-xs font-medium text-muted-foreground">
              Partner Odoo Certificato
            </span>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-8">
            {footerGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-foreground">{group.label}</p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contatti / CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-foreground">Inizia ora</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/contatti"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Richiedi un&apos;analisi gratuita →
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Prenota una demo →
                </Link>
              </li>
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Chi siamo →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NovaFlow. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
