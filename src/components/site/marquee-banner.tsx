"use client";

import { Megaphone, Sparkles, Gift, Briefcase, ArrowRight } from "lucide-react";
import { useUI } from "@/lib/store";

const ITEMS = [
  { icon: Megaphone, text: "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং ভর্তি চলছে — ২০২৪-২৫ সেশন" },
  { icon: Gift, text: "মেধা বৃত্তি ও বিশেষ ছাড় প্রতি সেমিস্টারে" },
  { icon: Briefcase, text: "চাকুরীর নিশ্চয়তা সহ ক্যারিয়ার সহায়তা" },
  { icon: Sparkles, text: "৮টি আধুনিক ইঞ্জিনিয়ারিং বিভাগে ভর্তির সুযোগ" },
  { icon: Megaphone, text: "Diploma in Engineering Admission Open 2024-25" },
  { icon: Gift, text: "Merit Scholarships & Special Waivers Every Semester" },
];

export function MarqueeBanner() {
  const openAdmission = useUI((s) => s.openAdmission);
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative bg-gold text-white overflow-hidden marquee-pause">
      <div className="flex items-stretch">
        <button
          onClick={() => openAdmission()}
          className="group relative z-10 shrink-0 inline-flex items-center gap-1.5 sm:gap-2 bg-brand-deep px-3.5 sm:px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide hover:bg-brand transition-colors"
        >
          Admission Open
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="relative flex-1 overflow-hidden py-3">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {loop.map((it, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-5 sm:px-8 text-[12px] sm:text-sm font-medium text-white/95"
              >
                <it.icon className="h-4 w-4 shrink-0" />
                {it.text}
                <span className="ml-6 text-white/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
