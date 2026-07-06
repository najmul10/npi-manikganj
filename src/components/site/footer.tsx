"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, ArrowRight, Send, ShieldCheck, Award, GraduationCap } from "lucide-react";
import { SITE, NAV, useUI } from "@/lib/store";

const DEPT_LINKS = [
  "Computer Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Architecture Engineering",
];

export function Footer() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <footer className="relative bg-brand-deep text-white overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-24 right-10 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />

      {/* Newsletter strip */}
      <div className="relative border-b border-white/15 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl text-white">Subscribe to our newsletter</h3>
            <p className="text-white/85 text-sm mt-1">Get admission updates, notices and news straight to your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 rounded-lg bg-white/15 border border-white/30 px-4 py-2.5 text-sm text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-gold/50"
            />
            <button className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-gold hover:bg-red-600 text-white px-4 py-2.5 text-sm font-bold transition-colors">
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-white ring-1 ring-white/25 overflow-hidden shrink-0">
                <img src={SITE.logo} alt="NPI Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">NPI Manikganj</div>
                <div className="text-[11px] uppercase tracking-wider text-white/80 font-semibold">National Polytechnic Institute</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/85 leading-relaxed">
              A premier polytechnic institute dedicated to technical & engineering education — building skilled professionals for Bangladesh since {SITE.est}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center h-9 w-9 rounded-lg bg-white/15 hover:bg-[#1877F2] text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/85 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-red-400" /> BTEB Approved
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/85 font-medium">
                <Award className="h-3.5 w-3.5 text-red-400" /> Est. {SITE.est}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <FooterCol title="Explore">
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="group inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-red-400 transition-colors font-medium">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-red-400" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Departments */}
          <FooterCol title="Departments">
            <ul className="space-y-2.5">
              {DEPT_LINKS.map((d) => (
                <li key={d}>
                  <Link href="/departments" className="group inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-red-400 transition-colors font-medium">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-red-400" />
                    {d}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/departments" className="text-sm text-red-400 hover:underline font-semibold">+ 3 more departments</Link>
              </li>
            </ul>
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact Us">
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-white/90">{SITE.address}</span>
              </li>
              <li>
                <a href={`tel:${SITE.phone1}`} className="flex gap-2.5 text-white/90 hover:text-red-400 transition-colors">
                  <Phone className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{SITE.phone1}<br />{SITE.phone2}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex gap-2.5 text-white/90 hover:text-red-400 transition-colors">
                  <Mail className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{SITE.email}</span>
                </a>
              </li>
            </ul>
            <button
              onClick={() => openAdmission()}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold hover:bg-red-600 text-white px-4 py-2 text-sm font-bold transition-colors"
            >
              <GraduationCap className="h-4 w-4" />
              Apply for Admission
            </button>
          </FooterCol>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/15 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <p>© {SITE.est}–{new Date().getFullYear()} NPI Manikganj — National Polytechnic Institute. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-red-400 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-red-400 transition-colors">Back to Top ↑</Link>
          </div>
        </div>
        {/* Developer credit */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 text-xs text-white/70">
            <span>Developed by</span>
            <a
              href="https://www.facebook.com/rifat660"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-red-400 hover:text-red-300 hover:underline transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" />
              Kazi Rifat <span className="text-white/60 font-normal">(NPI Student)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-serif font-bold text-base mb-4 text-white">{title}</h4>
      {children}
    </div>
  );
}
