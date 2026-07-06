"use client";

import { motion } from "framer-motion";
import { Megaphone, Gift, Briefcase, Sparkles, CheckCircle2, ArrowRight, Calendar, Users } from "lucide-react";
import { useUI, SITE } from "@/lib/store";

const HIGHLIGHTS = [
  { icon: Gift, title: "Merit Scholarships", desc: "বিশেষ ছাড় ও মেধা বৃত্তি প্রতি সেমিস্টারে" },
  { icon: Briefcase, title: "Job Placement", desc: "চাকুরীর নিশ্চয়তা সহ ক্যারিয়ার সহায়তা" },
  { icon: Sparkles, title: "8 Departments", desc: "৮টি আধুনিক ইঞ্জিনিয়ারিং বিভাগে ভর্তি" },
  { icon: Users, title: "Expert Faculty", desc: "অভিজ্ঞ শিক্ষক ও আধুনিক ল্যাব সুবিধা" },
];

export function AdmissionBanner() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-deep via-brand to-brand-deep overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: text + CTA */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-gold text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] shadow-lg"
            >
              <Megaphone className="h-3.5 w-3.5" />
              Admission 2024-25 Open
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 font-serif font-bold text-white text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] tracking-tight"
            >
              ডিপ্লোমা ইন ইঞ্জিনিয়ারিং <br />
              <span className="text-gradient-gold">ভর্তি চলছে</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-3 text-amber-100 font-semibold text-lg"
              lang="bn"
            >
              SSC পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের জন্য স্বপ্নের ক্যারিয়ারের সুযোগ
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-white/85 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              National Polytechnic Institute Manikganj-এ ৮টি আধুনিক ইঞ্জিনিয়ারিং বিভাগে ভর্তি চলছে। মেধা বৃত্তি, বিশেষ ছাড় ও চাকুরীর নিশ্চয়তা সহ সম্পূর্ণ ক্যারিয়ার সহায়তা।
            </motion.p>

            {/* Highlights grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {HIGHLIGHTS.map((h, idx) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24 + idx * 0.06 }}
                  className="flex items-start gap-2.5 rounded-xl bg-white/10 border border-white/15 px-3 py-2.5 backdrop-blur-sm"
                >
                  <div className="grid place-items-center h-8 w-8 rounded-lg bg-gold/20 text-amber-300 shrink-0">
                    <h.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">{h.title}</div>
                    <div className="text-[11px] text-white/75 leading-tight" lang="bn">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => openAdmission()}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold hover:bg-amber-500 text-white px-7 py-3.5 font-bold shadow-lg transition-colors w-full sm:w-auto"
              >
                Apply Now — আবেদন করুন
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`tel:${SITE.phone1}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/30 text-white px-7 py-3.5 font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors w-full sm:w-auto"
              >
                <Calendar className="h-4 w-4" />
                Call: {SITE.phone1}
              </a>
            </motion.div>
          </div>

          {/* Right: real admission posters collage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 aspect-[3/4] bg-white">
                  <img
                    src="/campus/fb-admission-flyer.jpg"
                    alt="Admission Flyer 2024-25"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 aspect-square bg-white">
                  <img
                    src="/campus/fb-admission-notice.jpg"
                    alt="Admission Notice"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-10">
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 aspect-square bg-white">
                  <img
                    src="/campus/fb-admission-poster.jpg"
                    alt="Admission Poster"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 aspect-[3/4] bg-white">
                  <img
                    src="/campus/fb-certificate.jpg"
                    alt="Certificate"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-gold text-white rounded-2xl shadow-2xl px-4 py-3 rotate-[-6deg]"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold leading-none">2024</div>
              <div className="text-[10px] uppercase tracking-wide font-semibold">Session</div>
            </motion.div>

            {/* Trust stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white text-brand-deep rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <div className="leading-tight">
                <div className="text-sm font-bold">BTEB Approved</div>
                <div className="text-[10px] text-foreground/70">Est. {SITE.est}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
