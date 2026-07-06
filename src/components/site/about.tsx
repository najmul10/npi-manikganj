"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionHeading } from "./section-heading";
import { SITE } from "@/lib/store";

const POINTS = [
  "Approved curriculum aligned with Bangladesh Technical Education Board (BTEB)",
  "8 in-demand engineering departments under one roof",
  "Modern labs, workshops & high-speed IT infrastructure",
  "Experienced faculty with strong industry connections",
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                  <img
                    src="/campus/campus-group-steps.jpg"
                    alt="NPI students on campus steps"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                  <img
                    src="/campus/lab-python-project.jpg"
                    alt="Student project — Python security system"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                  <img
                    src="/campus/students-classroom-flowers.jpg"
                    alt="Students in classroom session"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                  <img
                    src="/campus/event-award-ceremony.jpg"
                    alt="Annual award ceremony"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl ring-1 ring-border px-6 py-4 flex items-center gap-4"
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-gradient text-white">
                <Award className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <div className="text-2xl font-serif font-bold text-foreground">EST. {SITE.est}</div>
                <div className="text-xs text-muted-foreground">BTEB Approved Institute</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About NPI Manikganj"
              title={<>Engineering Tomorrow's <span className="text-brand">Innovators</span> Today</>}
              subtitle="The National Polytechnic Institute, Manikganj is a modern technical education hub committed to producing skilled, job-ready engineering professionals. We blend a rigorous BTEB-approved curriculum with extensive hands-on practice so our students graduate confident and capable."
            />

            <ul className="mt-7 space-y-3">
              {POINTS.map((p, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-foreground/85 leading-relaxed font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>

            {/* Mission / Vision cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
                <div className="grid place-items-center h-10 w-10 rounded-lg bg-brand/10 text-brand mb-3">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">Our Mission</h3>
                <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed font-medium">
                  Deliver affordable, industry-relevant engineering education that transforms students into skilled professionals.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
                <div className="grid place-items-center h-10 w-10 rounded-lg bg-gold/15 text-gold mb-3">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">Our Vision</h3>
                <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed font-medium">
                  To be the leading polytechnic institute in the region, recognized for excellence, innovation and graduate success.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-brand hover:bg-brand-deep text-white group">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
