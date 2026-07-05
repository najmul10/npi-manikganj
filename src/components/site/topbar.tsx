"use client";

import { Mail, Phone, Clock, Facebook, Youtube, Linkedin, MapPin } from "lucide-react";
import { SITE } from "@/lib/store";

export function Topbar() {
  return (
    <div className="hidden md:block bg-brand-deep text-white/90 text-[13px]">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-10">
        <div className="flex items-center gap-5">
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Mail className="h-3.5 w-3.5" />
            {SITE.email}
          </a>
          <span className="h-3 w-px bg-white/20" />
          <a href={`tel:${SITE.phone1}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone1}
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-white/70">
            <Clock className="h-3.5 w-3.5" />
            Sun–Thu: 8AM – 5PM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-flex items-center gap-1.5 text-white/70">
            <MapPin className="h-3.5 w-3.5" />
            {SITE.addressShort}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <div className="flex items-center gap-2.5">
            <a href="#" aria-label="Facebook" className="hover:text-amber-300 transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-amber-300 transition-colors"><Youtube className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-amber-300 transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
