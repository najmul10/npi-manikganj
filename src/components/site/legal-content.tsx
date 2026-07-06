"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, FileText, Clock, Eye, Lock } from "lucide-react";

interface Section {
  heading: string;
  body: string;
}

export function LegalContent({
  intro,
  sections,
  lastUpdated,
}: {
  intro: string;
  sections: Section[];
  lastUpdated: string;
}) {
  return (
    <section className="relative py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4">
        {/* Last updated badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-1.5 text-xs font-semibold text-muted-foreground mb-6"
        >
          <Clock className="h-3.5 w-3.5 text-brand" />
          Last Updated: {lastUpdated}
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-10"
        >
          {intro}
        </motion.p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl bg-card border border-border p-6 sm:p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="grid place-items-center h-9 w-9 rounded-lg bg-brand/10 text-brand shrink-0 mt-0.5">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="font-serif font-bold text-lg sm:text-xl text-foreground leading-tight pt-1">
                  {s.heading}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed pl-12">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl bg-brand-gradient p-6 sm:p-7 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative flex items-start gap-4">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-white/15 shrink-0">
              <ShieldCheck className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg">Questions about this policy?</h3>
              <p className="mt-1.5 text-sm text-white/85 leading-relaxed">
                If you have any questions or concerns about this policy, please contact us. Our team is happy to help clarify any points.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/15 border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                <FileText className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
