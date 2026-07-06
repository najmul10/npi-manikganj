"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Mail, Phone, ChevronDown } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useFetch } from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";

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

const MESSAGES = [
  {
    title: "Chairman's Message",
    text: "Education is the most powerful tool to change the future of a nation. At NPI Manikganj, our dream is to bring world-class technical education to the doorsteps of the youth of Manikganj and greater Dhaka. We are committed to building an institution where every student — regardless of background — can access quality engineering education, scholarships and a clear path to a dignified career.",
  },
  {
    title: "Director's Message",
    text: "Engineering education must go beyond textbooks. At NPI Manikganj we have built a learning environment where theory meets practice in modern labs and workshops, where faculty are mentors, and where industry partnerships open real doors for our graduates. I invite you to join our community and become part of Bangladesh's technical future.",
  },
];

export function Leadership() {
  const { data, loading } = useFetch<Teacher[]>("/api/teachers");
  const leaders = (data ?? []).filter((t) => t.order <= 2);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Leadership"
          title={<>Guided by Visionary <span className="text-brand">Educators</span></>}
          subtitle="The leadership of NPI Manikganj brings decades of experience in engineering, education and institutional management — setting the direction for academic excellence."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="rounded-3xl bg-card border border-border p-6 animate-pulse">
                  <div className="flex gap-5">
                    <div className="h-32 w-28 rounded-2xl bg-muted" />
                    <div className="flex-1 space-y-3">
                      <div className="h-5 w-1/3 bg-muted rounded" />
                      <div className="h-4 w-1/2 bg-muted rounded" />
                      <div className="h-3 w-full bg-muted rounded" />
                    </div>
                  </div>
                </div>
              ))
            : leaders.map((l, idx) => (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="relative rounded-3xl bg-gradient-to-br from-card to-secondary/40 border border-border p-5 sm:p-7 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="absolute top-4 right-5 text-brand/10">
                    <Quote className="h-16 w-16 sm:h-20 sm:w-20" />
                  </div>
                  <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <div className="shrink-0 flex sm:block justify-center">
                      <div className="relative h-32 w-28 sm:h-36 sm:w-32 rounded-2xl overflow-hidden ring-4 ring-background shadow-lg">
                        <img src={l.image} alt={l.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="mt-2 h-1.5 w-28 sm:w-32 rounded-full bg-gold mx-auto" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                        {l.designation}
                      </span>
                      <h3 className="mt-2 font-serif font-bold text-xl text-foreground">{l.name}</h3>
                      <p className="text-sm text-muted-foreground">{l.department}</p>
                      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{l.bio}</p>

                      <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <a href={`mailto:${l.email}`} className="inline-flex items-center gap-1.5 hover:text-brand">
                          <Mail className="h-3.5 w-3.5" /> {l.email}
                        </a>
                        <a href={`tel:${l.phone}`} className="inline-flex items-center gap-1.5 hover:text-brand">
                          <Phone className="h-3.5 w-3.5" /> {l.phone}
                        </a>
                      </div>

                      <button
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep"
                      >
                        {MESSAGES[idx]?.title}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openIdx === idx && "rotate-180")} />
                      </button>
                      {openIdx === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 text-sm text-foreground/75 leading-relaxed italic border-l-2 border-gold pl-4"
                        >
                          “{MESSAGES[idx]?.text}”
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
