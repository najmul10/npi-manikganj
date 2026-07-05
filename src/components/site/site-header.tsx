"use client";

import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { NAV, SITE, useUI } from "@/lib/store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const openAdmission = useUI((s) => s.openAdmission);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/0 border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md ring-1 ring-black/5 overflow-hidden">
              <img
                src={SITE.logo}
                alt="NPI Logo"
                className="h-8 w-8 object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget.style.display = "none");
                }}
              />
              <GraduationCap className="h-6 w-6 text-white absolute inset-0 m-auto" />
            </div>
            <div className="leading-tight">
              <div className="font-serif font-bold text-[17px] sm:text-lg text-foreground tracking-tight">
                NPI <span className="text-brand">Manikganj</span>
              </div>
              <div className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-medium">
                National Polytechnic Institute
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors",
                  active === n.href
                    ? "text-brand"
                    : "text-foreground/75 hover:text-brand"
                )}
              >
                {n.label}
                {active === n.href && (
                  <span className="absolute left-3.5 right-3.5 -bottom-px h-0.5 bg-gold rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phone1}`}
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-brand transition-colors px-3"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full bg-brand/10 text-brand">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">Admission Hotline</span>
                {SITE.phone1}
              </span>
            </a>
            <Button
              onClick={() => openAdmission()}
              className="hidden sm:inline-flex bg-brand hover:bg-brand-deep text-white shadow-md shadow-brand/20"
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
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-brand-gradient grid place-items-center">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-serif font-bold text-lg">NPI Manikganj</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon"><X className="h-5 w-5" /></Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-3">
                  {NAV.map((n) => (
                    <SheetClose asChild key={n.href}>
                      <a
                        href={n.href}
                        className="flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium hover:bg-accent transition-colors"
                      >
                        {n.label}
                        <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t mt-auto space-y-3">
                  <Button
                    onClick={() => { setOpen(false); openAdmission(); }}
                    className="w-full bg-brand hover:bg-brand-deep text-white"
                  >
                    Apply for Admission
                  </Button>
                  <a href={`tel:${SITE.phone1}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" /> {SITE.phone1}
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
