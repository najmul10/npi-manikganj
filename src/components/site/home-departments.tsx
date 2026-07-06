"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { DeptIcon } from "./icons";
import { useFetch } from "@/hooks/use-fetch";

interface Department {
  id: string;
  slug: string;
  name: string;
  nameBn: string;
  shortName: string;
  icon: string;
  image: string;
  tagline: string;
  seats: number;
}

export function HomeDepartments() {
  const { data, loading } = useFetch<Department[]>("/api/departments");
  const depts = (data ?? []).slice(0, 4);

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Academic Programs"
            title={<>Explore Our <span className="text-brand">Engineering</span> Departments</>}
            subtitle="Choose from eight industry-aligned Diploma in Engineering programs — each designed with modern labs, expert faculty and clear career pathways."
          />
          <Link
            href="/departments"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep group"
          >
            View All Departments
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden animate-pulse">
                  <div className="h-36 bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-2/3 bg-muted rounded" />
                    <div className="h-3 w-full bg-muted rounded" />
                  </div>
                </div>
              ))
            : depts.map((d, idx) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (idx % 4) * 0.08, duration: 0.4 }}
                >
                  <Link
                    href="/departments"
                    className="group block text-left rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
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
                    </div>
                  </Link>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
