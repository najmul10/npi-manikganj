"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, CalendarDays, Building, Briefcase, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { DeptIcon } from "./icons";
import { useFetch } from "@/hooks/use-fetch";
import { useUI } from "@/lib/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Department {
  id: string;
  slug: string;
  name: string;
  nameBn: string;
  shortName: string;
  icon: string;
  image: string;
  tagline: string;
  description: string;
  duration: string;
  seats: number;
  establishedYear: number;
  careerOptions: string;
  highlights: string;
}

export function Departments() {
  const { data, loading } = useFetch<Department[]>("/api/departments");
  const [selected, setSelected] = useState<Department | null>(null);
  const openAdmission = useUI((s) => s.openAdmission);

  const depts = data ?? [];

  return (
    <section id="departments" className="relative py-16 sm:py-24 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Academic Programs"
          title={<>Explore Our <span className="text-brand">8 Engineering</span> Departments</>}
          subtitle="Choose from eight industry-aligned Diploma in Engineering programs — each designed with modern labs, expert faculty and clear career pathways."
        />

        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden animate-pulse">
                  <div className="h-40 bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-2/3 bg-muted rounded" />
                    <div className="h-3 w-full bg-muted rounded" />
                    <div className="h-3 w-4/5 bg-muted rounded" />
                  </div>
                </div>
              ))
            : depts.map((d, idx) => (
                <motion.button
                  key={d.id}
                  onClick={() => setSelected(d)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (idx % 4) * 0.08, duration: 0.4 }}
                  className="group text-left rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
                >
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/30 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-gold text-white border-0 hover:bg-gold">{d.shortName}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-white/95 text-brand shadow">
                        <DeptIcon name={d.icon} className="h-5 w-5" />
                      </div>
                      <span className="text-white font-serif font-semibold text-sm" lang="bn">{d.nameBn}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-brand transition-colors">
                      {d.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {d.tagline}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-brand" /> {d.seats} seats
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-brand" /> 4 Years
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm font-medium text-brand">View Details</span>
                      <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.button>
              ))}
        </div>
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <div className="relative h-52 sm:h-64">
                <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/50 to-brand-deep/20" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center text-white hover:bg-white/30"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-white/95 text-brand shadow">
                      <DeptIcon name={selected.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-2xl">{selected.name}</h3>
                      <p className="text-amber-200 text-sm" lang="bn">{selected.nameBn}</p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogHeader className="p-6 pb-2">
                <DialogTitle className="sr-only">{selected.name}</DialogTitle>
                <DialogDescription className="sr-only">{selected.tagline}</DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6 space-y-5">
                <p className="text-foreground/80 leading-relaxed">{selected.description}</p>

                <div className="grid grid-cols-3 gap-3">
                  <Stat icon={<CalendarDays className="h-4 w-4" />} label="Duration" value={selected.duration} />
                  <Stat icon={<Users className="h-4 w-4" />} label="Seats" value={`${selected.seats}`} />
                  <Stat icon={<Building className="h-4 w-4" />} label="Established" value={`${selected.establishedYear}`} />
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-serif font-bold text-base text-foreground mb-2">
                    <Sparkles className="h-4 w-4 text-gold" /> Program Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.highlights.split(",").map((h, i) => (
                      <Badge key={i} variant="secondary" className="bg-brand/8 text-brand border-brand/15">
                        {h.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-serif font-bold text-base text-foreground mb-2">
                    <Briefcase className="h-4 w-4 text-gold" /> Career Opportunities
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selected.careerOptions.split(",").map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {c.trim()}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => { setSelected(null); openAdmission(selected.name); }}
                    className="bg-brand hover:bg-brand-deep text-white flex-1"
                  >
                    Apply for {selected.shortName}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="#contact">Talk to Advisor</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/50 p-3 text-center">
      <div className="grid place-items-center h-8 w-8 mx-auto rounded-lg bg-brand/10 text-brand mb-1.5">
        {icon}
      </div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold text-foreground mt-0.5">{value}</div>
    </div>
  );
}
