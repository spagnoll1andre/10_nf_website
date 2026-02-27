"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, navCtas } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Nova<span className="text-primary">Flow</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  openDropdown === item.label && "text-foreground"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      openDropdown === item.label && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 pt-1">
                  <div className="min-w-[200px] rounded-lg border border-border bg-popover p-1 shadow-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex shrink-0 items-center gap-2">
          {navCtas.map((cta) => (
            <Button key={cta.label} variant={cta.variant} size="sm" asChild>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Apri menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] overflow-y-auto sm:w-[360px]">
            <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>

            <div className="flex flex-col gap-6 pt-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-bold tracking-tight text-foreground"
              >
                Nova<span className="text-primary">Flow</span>
              </Link>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-3 mt-0.5 flex flex-col border-l border-border pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex flex-col gap-2 border-t border-border pt-4">
                {navCtas.map((cta) => (
                  <Button key={cta.label} variant={cta.variant} asChild>
                    <Link href={cta.href} onClick={() => setMobileOpen(false)}>
                      {cta.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
