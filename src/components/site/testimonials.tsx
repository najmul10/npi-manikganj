"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

const TESTIMONIALS = [
  {
    name: "Mehedi Hasan",
    role: "Computer Engineering · 7th Semester",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "NPI Manikganj gave me real programming skills, not just theory. The labs are modern and the teachers genuinely care. I already landed a junior developer internship thanks to the placement cell.",
  },
  {
    name: "Nusrat Jahan",
    role: "Electrical Engineering · 5th Semester",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "The PLC and automation practical classes are outstanding. I never imagined I'd be programming industrial controllers as a diploma student. The merit scholarship also eased my family's burden.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Civil Engineering · Graduate 2023",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    text: "From surveying to AutoCAD to cost estimation — the civil department prepared me for real site work. I'm now a site engineer at a construction firm, and I owe my start to NPI.",
  },
  {
    name: "Farzana Akter",
    role: "Food Engineering · 1st Semester",
    image: "https://i.pravatar.cc/150?img=31",
    rating: 4,
    text: "As a female student, I felt supported from day one. The campus is safe, the teachers encourage questions, and the food processing lab is genuinely impressive. Excited for the journey ahead!",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6500);
    return () => clearInterval(t);
  }, [n]);

  const t = TESTIMONIALS[i];
  return (
    <section className="relative py-20 sm:py-28 bg-brand-deep overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[50rem] bg-gold/10 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-4xl px-4">
        <SectionHeading
          light
          eyebrow="Student Voices"
          title={<>What Our <span className="text-gradient-gold">Students Say</span></>}
          subtitle="Real stories from the NPI Manikganj community — students and alumni building careers across engineering."
        />

        <div className="relative mt-12">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 h-16 w-16 text-gold/30" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl sm:text-2xl text-white/90 font-serif italic leading-relaxed max-w-3xl mx-auto">
                “{t.text}”
              </p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`h-5 w-5 ${s < t.rating ? "text-gold fill-gold" : "text-white/30"}`} />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-3">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40" />
                <div className="text-left">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/60">{t.role}</div>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={() => setI((p) => (p - 1 + n) % n)} aria-label="Previous" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white grid place-items-center hover:bg-white/20 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-7 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"}`} />
              ))}
            </div>
            <button onClick={() => setI((p) => (p + 1) % n)} aria-label="Next" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white grid place-items-center hover:bg-white/20 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
