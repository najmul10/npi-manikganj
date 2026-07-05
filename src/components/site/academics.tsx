"use client";

import { motion } from "framer-motion";
import { CalendarDays, FileText, GraduationCap, Headphones, ArrowUpRight, ClipboardList } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { NoticeBoard } from "./notice-board";
import { ResultChecker } from "./result-checker";
import { useUI } from "@/lib/store";

const QUICK = [
  { icon: CalendarDays, label: "Class Routine", desc: "Download semester routines" },
  { icon: FileText, label: "Office Application", desc: "Submit forms online" },
  { icon: Headphones, label: "Smart Support", desc: "24/7 student helpdesk" },
  { icon: ClipboardList, label: "E-Class Portal", desc: "Online classes & resources" },
];

export function Academics() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <section id="notices" className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Academics & Student Services"
          title={<>Notices, Results & <span className="text-brand">Smart Support</span></>}
          subtitle="Stay updated with the latest notices, check your exam results online, and access all student services in one place."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2">
            <NoticeBoard />
          </div>

          <div className="space-y-6">
            <ResultChecker />

            {/* Quick links */}
            <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-foreground mb-4">Quick Links</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {QUICK.map((q, idx) => (
                  <motion.a
                    key={q.label}
                    href="#contact"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="group rounded-xl border border-border p-3 hover:border-brand/40 hover:bg-brand/5 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-brand/10 text-brand">
                        <q.icon className="h-4.5 w-4.5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand transition-colors" />
                    </div>
                    <div className="mt-2 font-semibold text-sm text-foreground">{q.label}</div>
                    <div className="text-[11px] text-muted-foreground">{q.desc}</div>
                  </motion.a>
                ))}
              </div>

              <button
                onClick={() => openAdmission()}
                className="mt-4 w-full rounded-xl bg-brand-gradient text-white py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <GraduationCap className="h-4 w-4" />
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
