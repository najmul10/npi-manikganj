"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, ClipboardCheck, Award, Phone, Gift, Briefcase, Sparkles, Users } from "lucide-react";
import { AdmissionBanner } from "@/components/site/admission-banner";
import { SectionHeading } from "@/components/site/section-heading";
import { useUI, SITE } from "@/lib/store";
import { Button } from "@/components/ui/button";

const PROCESS = [
  { step: "01", icon: FileText, title: "Online Application", desc: "Fill out the online admission form with your SSC details and preferred department. Get an instant reference number." },
  { step: "02", icon: ClipboardCheck, title: "Document Verification", desc: "Submit your SSC transcript, marksheet, photos and other required documents for verification by the admission office." },
  { step: "03", icon: Award, title: "Merit List & Admission", desc: "Selected candidates are notified based on SSC GPA. Complete admission by paying fees and enroll in your chosen department." },
];

const REQUIREMENTS = [
  "SSC / Equivalent examination passed (any group)",
  "Minimum GPA 2.00 (varies by department & seat availability)",
  "Original SSC transcript & marksheet",
  "4 copies passport-size photographs",
  "National ID / Birth certificate copy",
  "Guardian's National ID copy",
];

const FAQS = [
  {
    q: "What is the eligibility for Diploma in Engineering admission?",
    a: "Students who have passed SSC/equivalent examination from any recognized board with a minimum GPA (typically 2.00, varies by department) are eligible to apply for the 4-year Diploma in Engineering program.",
  },
  {
    q: "How long is the Diploma in Engineering program?",
    a: "The Diploma in Engineering is a 4-year program divided into 8 semesters. Each semester is 6 months, combining classroom theory with extensive hands-on lab and workshop practice.",
  },
  {
    q: "Are scholarships available for students?",
    a: "Yes! NPI Manikganj offers merit-based scholarships and special fee waivers every semester to top-performing students. These are awarded based on academic performance in the previous semester.",
  },
  {
    q: "Does the institute provide job placement support?",
    a: "Yes. Our dedicated career placement cell helps graduates with resume building, interview preparation and direct referrals to partner companies. We maintain a 92% graduate placement rate.",
  },
  {
    q: "Can I transfer credits from another polytechnic?",
    a: "Credit transfer is considered on a case-by-case basis following BTEB guidelines. Contact the academic office with your transcripts for a credit transfer evaluation.",
  },
  {
    q: "What are the tuition fees?",
    a: "NPI Manikganj offers affordable tuition fees with flexible installment options. Fees vary slightly by department. Contact our admission office at " + SITE.phone1 + " for the current fee structure.",
  },
];

export function AdmissionPageContent() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <>
      <AdmissionBanner />

      {/* Admission Process */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How to Apply"
            title={<>Admission <span className="text-brand">Process</span> — 3 Simple Steps</>}
            subtitle="From application to enrollment — we've made the admission process straightforward and transparent."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {PROCESS.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.12 }}
                className="relative rounded-2xl bg-card border border-border p-6 sm:p-7 hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 -right-4 text-6xl font-serif font-bold text-brand/10">
                  {p.step}
                </div>
                <div className="relative">
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand/20 mb-4">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{p.desc}</p>
                </div>
                {idx < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Perks */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Requirements */}
            <div className="rounded-3xl bg-card border border-border p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand/10 text-brand">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">Admission Requirements</h3>
              </div>
              <ul className="space-y-3">
                {REQUIREMENTS.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed">{r}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <Button onClick={() => openAdmission()} className="w-full bg-brand hover:bg-brand-deep text-white font-semibold">
                  Start Your Application
                </Button>
              </div>
            </div>

            {/* Perks */}
            <div className="rounded-3xl bg-brand-gradient p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-15" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-white/15">
                    <Gift className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="font-serif font-bold text-xl">Why Apply to NPI Manikganj?</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Gift, title: "Merit Scholarships", desc: "Every semester for top performers" },
                    { icon: Briefcase, title: "Job Placement", desc: "92% graduate placement rate" },
                    { icon: Sparkles, title: "Modern Labs", desc: "24+ labs & workshops" },
                    { icon: Users, title: "Expert Faculty", desc: "80+ experienced instructors" },
                  ].map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur-sm"
                    >
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-gold/20 text-amber-300 mb-2.5">
                        <p.icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="font-serif font-bold text-sm">{p.title}</div>
                      <div className="text-xs text-white/75 mt-0.5">{p.desc}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/15">
                  <a href={`tel:${SITE.phone1}`} className="flex items-center justify-center gap-2 rounded-xl bg-white/15 border border-white/30 py-3 font-semibold hover:bg-white/20 transition-colors">
                    <Phone className="h-4 w-4 text-amber-300" />
                    Admission Hotline: {SITE.phone1}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Frequently Asked <span className="text-brand">Questions</span></>}
            subtitle="Everything you need to know about admission, programs and student life at NPI Manikganj."
          />
          <div className="mt-10 space-y-3">
            {FAQS.map((f, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group rounded-xl bg-card border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-foreground hover:bg-secondary/50 transition-colors list-none">
                  {f.q}
                  <span className="shrink-0 grid place-items-center h-7 w-7 rounded-full bg-brand/10 text-brand group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-foreground/75 leading-relaxed">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
