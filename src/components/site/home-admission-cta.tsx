"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Gift, Briefcase } from "lucide-react";
import Link from "next/link";
import { useUI } from "@/lib/store";

export function HomeAdmissionCTA() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <section className="relative py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-brand-gradient p-8 sm:p-12 lg:p-14 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/30 px-4 py-1.5 text-red-300 text-xs font-bold uppercase tracking-[0.16em]">
                <GraduationCap className="h-3.5 w-3.5" />
                Admission 2024-25
              </span>
              <h2 className="mt-4 font-serif font-bold text-3xl sm:text-4xl leading-[1.12]">
                Start Your Engineering <span className="text-gradient-gold">Journey Today</span>
              </h2>
              <p className="mt-3 text-white/85 text-base sm:text-lg leading-relaxed max-w-lg">
                Join 2,500+ students building their future at NPI Manikganj. Merit scholarships, modern labs and dedicated career placement — all in one place.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openAdmission()}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold hover:bg-red-600 text-white px-7 py-3.5 font-bold shadow-lg transition-colors w-full sm:w-auto"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/30 text-white px-7 py-3.5 font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors w-full sm:w-auto"
                >
                  Admission Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Quick perks */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Gift, title: "Merit Scholarships", desc: "Every semester, based on performance" },
                { icon: Briefcase, title: "Job Placement", desc: "Dedicated career support cell" },
                { icon: GraduationCap, title: "8 Departments", desc: "Choose your engineering field" },
                { icon: ArrowRight, title: "Easy Online Apply", desc: "Get a reference number instantly" },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-sm"
                >
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-gold/20 text-red-400 mb-3">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="font-serif font-bold text-base">{p.title}</div>
                  <div className="text-sm text-white/75 mt-0.5">{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
