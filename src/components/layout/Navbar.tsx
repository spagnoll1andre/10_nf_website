"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, navCtas } from "@/data/navigation";
import { cn } from "@/lib/utils";

// ─── constants ────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// Shared focus ring — reused across all interactive elements
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        // Frosted glass: near-white tint + aggressive blur + saturation boost
        background: "rgba(246, 251, 255, 0.88)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(15, 22, 43, 0.07)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">

        {/* ── Logo ── */}
        <Link
          href="/"
          className={cn("shrink-0 rounded-md", FOCUS_RING)}
          aria-label="NovaFlow — torna alla home"
        >
          <Image
            src="/logo.svg"
            alt="NovaFlow"
            width={145}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* ── Desktop nav — centered ── */}
        <nav
          className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Nav link / trigger */}
              <Link
                href={item.href}
                aria-haspopup={item.children ? true : undefined}
                aria-expanded={
                  item.children ? openDropdown === item.label : undefined
                }
                className={cn(
                  "flex items-center gap-1 rounded-full px-3.5 py-1.5",
                  "text-sm font-medium transition-all duration-150",
                  "text-foreground/65 hover:bg-foreground/[0.06] hover:text-foreground",
                  FOCUS_RING,
                  openDropdown === item.label &&
                    "bg-foreground/[0.06] text-foreground"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-foreground/40 transition-transform duration-200",
                      openDropdown === item.label &&
                        "rotate-180 text-foreground/60"
                    )}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {/* Dropdown panel */}
              {item.children && (
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      key={`dd-${item.label}`}
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: EASE }}
                      style={{ transformOrigin: "top center" }}
                      className="absolute left-0 top-full z-50 pt-2"
                    >
                      <div
                        className="min-w-[210px] rounded-2xl p-1.5"
                        style={{
                          background: "rgba(255, 255, 255, 0.92)",
                          backdropFilter: "blur(20px) saturate(180%)",
                          WebkitBackdropFilter: "blur(20px) saturate(180%)",
                          border: "1px solid rgba(15, 22, 43, 0.08)",
                          boxShadow:
                            "0 8px 32px rgba(15, 22, 43, 0.10), 0 2px 8px rgba(15, 22, 43, 0.06)",
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-xl px-4 py-2.5",
                              "text-sm font-medium",
                              "text-foreground/65 transition-colors duration-150",
                              "hover:bg-foreground/[0.06] hover:text-foreground",
                              cn(
                                FOCUS_RING,
                                "focus-visible:ring-inset"
                              )
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {/* Secondary — pill outline */}
          <Link
            href={navCtas[0].href}
            className={cn(
              "rounded-full border border-foreground/15 px-4 py-1.5",
              "text-sm font-medium text-foreground/70",
              "transition-all duration-150",
              "hover:border-foreground/25 hover:bg-foreground/[0.05] hover:text-foreground",
              FOCUS_RING
            )}
          >
            {navCtas[0].label}
          </Link>

          {/* Primary — pill filled + glow on hover */}
          <Link
            href={navCtas[1].href}
            className={cn(
              "rounded-full bg-primary px-4 py-1.5",
              "text-sm font-semibold text-white",
              "transition-all duration-150",
              "hover:-translate-y-px hover:bg-primary/90",
              "hover:shadow-[0_0_20px_rgba(22,103,233,0.30)]",
              cn(FOCUS_RING, "focus-visible:ring-offset-2")
            )}
          >
            {navCtas[1].label}
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "ml-auto flex h-9 w-9 items-center justify-center rounded-full lg:hidden",
                "text-foreground/65 transition-all duration-150",
                "hover:bg-foreground/[0.06] hover:text-foreground",
                FOCUS_RING
              )}
              aria-label="Apri menu di navigazione"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[300px] overflow-y-auto sm:w-[360px]"
            style={{
              background: "rgba(246, 251, 255, 0.97)",
              backdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(15, 22, 43, 0.08)",
            }}
          >
            <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>

            <div className="flex flex-col gap-6 pt-2">

              {/* Mobile logo */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={cn("rounded-md", FOCUS_RING)}
                aria-label="NovaFlow — torna alla home"
              >
                <Image
                  src="/logo.svg"
                  alt="NovaFlow"
                  width={120}
                  height={23}
                  className="h-6 w-auto"
                />
              </Link>

              {/* Nav items */}
              <nav
                className="flex flex-col gap-0.5"
                aria-label="Navigazione mobile"
              >
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-3.5 py-2.5",
                        "text-sm font-medium text-foreground",
                        "transition-colors hover:bg-foreground/[0.06]",
                        FOCUS_RING
                      )}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <div className="ml-3 mt-0.5 flex flex-col border-l border-border/60 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block rounded-lg px-3 py-1.5",
                              "text-sm text-foreground/60",
                              "transition-colors hover:text-foreground",
                              FOCUS_RING
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-2.5 border-t border-border/60 pt-4">
                <Link
                  href={navCtas[0].href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-center rounded-full",
                    "border border-foreground/15 px-4 py-2.5",
                    "text-sm font-medium text-foreground/75",
                    "transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
                    FOCUS_RING
                  )}
                >
                  {navCtas[0].label}
                </Link>

                <Link
                  href={navCtas[1].href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-center rounded-full",
                    "bg-primary px-4 py-2.5",
                    "text-sm font-semibold text-white",
                    "transition-colors hover:bg-primary/90",
                    FOCUS_RING
                  )}
                >
                  {navCtas[1].label}
                </Link>
              </div>

            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
