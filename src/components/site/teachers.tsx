"use client";

import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useFetch } from "@/hooks/use-fetch";

interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  expertise: string;
  order: number;
}

export function Teachers() {
  const { data, loading } = useFetch<Teacher[]>("/api/teachers");
  const faculty = (data ?? []).filter((t) => t.order > 2);

  return (
    <section id="faculty" className="relative py-16 sm:py-24 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Faculty"
          title={<>Learn From <span className="text-brand">Experienced</span> Engineers & Mentors</>}
          subtitle="Our instructors blend academic depth with real-world industry experience — mentoring students both in the classroom and in the lab."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border p-5 animate-pulse">
                  <div className="flex gap-4">
                    <div className="h-16 w-16 rounded-full bg-muted" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-2/3 bg-muted rounded" />
                      <div className="h-3 w-1/2 bg-muted rounded" />
                    </div>
                  </div>
                </div>
              ))
            : faculty.map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (idx % 3) * 0.08 }}
                  className="group rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:-translate-y-0.5 hover:border-brand/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="h-16 w-16 rounded-2xl overflow-hidden ring-2 ring-background shadow">
                        <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-brand grid place-items-center text-white shadow">
                        <GraduationCap className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-base text-foreground group-hover:text-brand transition-colors truncate">
                        {t.name}
                      </h3>
                      <p className="text-xs text-gold font-semibold uppercase tracking-wide">{t.designation}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{t.department}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed line-clamp-2">{t.bio}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.expertise.split(",").slice(0, 3).map((e, i) => (
                      <span key={i} className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/70">
                        {e.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <a href={`mailto:${t.email}`} className="inline-flex items-center gap-1.5 hover:text-brand truncate">
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{t.email}</span>
                    </a>
                    <a href={`tel:${t.phone}`} className="inline-flex items-center gap-1.5 hover:text-brand shrink-0">
                      <Phone className="h-3.5 w-3.5" />
                      {t.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
