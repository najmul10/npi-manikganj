"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, Home, Info, GraduationCap, Megaphone, BookOpen, Users, Images, PhoneCall, ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { NAV, SITE, useUI } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<string, LucideIcon> = {
  Home, Info, GraduationCap, Megaphone, BookOpen, Users, Images, PhoneCall,
};

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
              <SheetContent side="right" showCloseButton={false} className="w-[300px] sm:w-[340px] p-0 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                {/* Header with gradient */}
                <div className="relative bg-brand-gradient p-5 text-white overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-15" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-white ring-2 ring-white/25 overflow-hidden shrink-0">
                        <img src={SITE.logo} alt="NPI Logo" className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-base leading-tight">NPI Manikganj</div>
                        <div className="text-[10px] uppercase tracking-wide text-white/75 font-semibold">National Polytechnic</div>
                      </div>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/15 shrink-0 rounded-full"><X className="h-5 w-5" /></Button>
                    </SheetClose>
                  </div>
                </div>

                {/* Nav links with icons */}
                <nav className="flex flex-col p-3 gap-1 flex-1 overflow-y-auto">
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">Menu</div>
                  {NAV.map((n) => {
                    const Icon = NAV_ICONS[n.icon] || Home;
                    const activeLink = isActive(n.href);
                    return (
                      <SheetClose asChild key={n.href}>
                        <Link
                          href={n.href}
                          className={cn(
                            "group flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold transition-all",
                            activeLink
                              ? "bg-brand text-white shadow-md shadow-brand/20"
                              : "text-foreground/80 hover:bg-accent hover:text-brand"
                          )}
                        >
                          <span className={cn(
                            "grid place-items-center h-8 w-8 rounded-lg shrink-0 transition-colors",
                            activeLink ? "bg-white/20" : "bg-brand/10 text-brand group-hover:bg-brand/20"
                          )}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="flex-1">{n.label}</span>
                          <ChevronDown className={cn(
                            "h-4 w-4 -rotate-90 transition-colors",
                            activeLink ? "text-white/60" : "text-muted-foreground"
                          )} />
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* CTA section */}
                <div className="p-4 border-t border-border bg-secondary/50 space-y-3">
                  <Button
                    onClick={() => { setOpen(false); openAdmission(); }}
                    className="w-full bg-brand hover:bg-brand-deep text-white font-semibold shadow-md shadow-brand/20 group"
                  >
                    Apply for Admission
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <a
                    href={`tel:${SITE.phone1}`}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground py-1"
                  >
                    <span className="grid place-items-center h-7 w-7 rounded-full bg-brand/10 text-brand">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    {SITE.phone1}
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
