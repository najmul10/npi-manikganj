"use client";

import { motion } from "framer-motion";
import { FlaskConical, Users2, Briefcase, Gift, Handshake, Wallet, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useUI } from "@/lib/store";

const FEATURES = [
  {
    icon: FlaskConical,
    title: "Modern Labs & Workshops",
    desc: "Hands-on training in well-equipped computer, electrical, civil, mechanical and textile labs with industry-grade equipment.",
  },
  {
    icon: Users2,
    title: "Expert Faculty",
    desc: "Learn from experienced engineers and educators who mentor you through projects, internships and career planning.",
  },
  {
    icon: Briefcase,
    title: "Job Placement Support",
    desc: "Dedicated career cell with industry partnerships, resume workshops, interview prep and direct placement referrals.",
  },
  {
    icon: Gift,
    title: "Merit Scholarships",
    desc: "Earn scholarships and special waivers every semester based on academic performance — rewarding your hard work.",
  },
  {
    icon: Handshake,
    title: "Industry Linkage",
    desc: "Regular factory visits, guest lectures from industry experts and internship opportunities with leading companies.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    desc: "Quality engineering education at an affordable cost, with flexible installment options for deserving students.",
  },
];

export function WhyChoose() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-28 bg-secondary/40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[60rem] bg-brand/5 blur-3xl rounded-full" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why Choose NPI"
          title={<>Where Talent Meets <span className="text-brand">Opportunity</span></>}
          subtitle="Everything you need to build a successful engineering career — under one roof, with support at every step."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-colors" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-gradient text-white shadow-lg shadow-brand/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif font-bold text-lg text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
              <span className="absolute bottom-4 right-5 text-4xl font-serif font-bold text-brand/5 group-hover:text-brand/10 transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-brand-gradient p-8 sm:p-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl">Ready to start your engineering journey?</h3>
              <p className="mt-2 text-white/80 max-w-xl">Admissions for the 2024-25 session are open across all 8 departments. Secure your seat today.</p>
            </div>
            <button
              onClick={() => openAdmission()}
              className="group shrink-0 inline-flex items-center gap-2 rounded-xl bg-gold hover:bg-amber-500 text-white px-7 py-3.5 font-semibold shadow-lg transition-colors"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
