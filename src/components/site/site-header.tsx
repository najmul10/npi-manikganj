"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { NAV, SITE, useUI } from "@/lib/store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const openAdmission = useUI((s) => s.openAdmission);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-white",
        scrolled ? "shadow-md border-b border-border" : "shadow-sm border-b border-border/60"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-full bg-white flex items-center justify-center ring-1 ring-border overflow-hidden shrink-0">
              <img src={SITE.logo} alt="NPI Manikganj Logo" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-serif font-bold text-[18px] sm:text-[19px] text-foreground tracking-tight">
                NPI <span className="text-brand">Manikganj</span>
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-foreground/70 font-semibold">
                National Polytechnic Institute
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-semibold rounded-md transition-colors",
                  isActive(n.href) ? "text-brand" : "text-foreground/80 hover:text-brand"
                )}
              >
                {n.label}
                {isActive(n.href) && (
                  <span className="absolute left-3.5 right-3.5 -bottom-px h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phone1}`}
              className="hidden xl:flex items-center gap-2.5 text-sm font-medium text-foreground/85 hover:text-brand transition-colors pl-3"
            >
              <span className="grid place-items-center h-10 w-10 rounded-full bg-brand/10 text-brand">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-foreground/60 font-semibold">Admission Hotline</span>
                <span className="block font-bold text-foreground">{SITE.phone1}</span>
              </span>
            </a>
            <Button
              onClick={() => openAdmission()}
              className="hidden sm:inline-flex bg-brand hover:bg-brand-deep text-white shadow-md shadow-brand/20 font-semibold"
            >
              Apply Now
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" showCloseButton={false} className="w-[300px] sm:w-[340px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between p-4 border-b bg-brand-deep">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-full bg-white ring-1 ring-white/20 overflow-hidden">
                      <img src={SITE.logo} alt="NPI Logo" className="h-full w-full object-contain" />
                    </div>
                    <div className="text-white">
                      <div className="font-serif font-bold text-base leading-tight">NPI Manikganj</div>
                      <div className="text-[10px] uppercase tracking-wide text-white/70">Polytechnic Institute</div>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><X className="h-5 w-5" /></Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-3">
                  {NAV.map((n) => (
                    <SheetClose asChild key={n.href}>
                      <Link
                        href={n.href}
                        className={cn(
                          "flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-semibold transition-colors",
                          isActive(n.href) ? "bg-brand/10 text-brand" : "text-foreground/85 hover:bg-accent hover:text-brand"
                        )}
                      >
                        {n.label}
                        <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t mt-auto space-y-3">
                  <Button
                    onClick={() => { setOpen(false); openAdmission(); }}
                    className="w-full bg-brand hover:bg-brand-deep text-white font-semibold"
                  >
                    Apply for Admission
                  </Button>
                  <a href={`tel:${SITE.phone1}`} className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                    <Phone className="h-4 w-4 text-brand" /> {SITE.phone1}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
