"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUI } from "@/lib/store";

const SLIDES = [
  {
    eyebrow: "Admission 2024-25 Open",
    title: "Shape Your Future in Engineering",
    titleAccent: "at NPI Manikganj",
    bn: "প্রযুক্তি শিক্ষায় উৎকর্ষ, স্বপ্নের ক্যারিয়ারের সূচনা",
    desc: "National Polytechnic Institute Manikganj offers Diploma in Engineering across 8 modern departments — with hands-on labs, expert faculty and industry-aligned curriculum.",
    image: "https://sfile.chatglm.cn/images-ppt/58a4ba917d79.jpg",
    cta: "Apply Now",
    cta2: "Explore Departments",
  },
  {
    eyebrow: "8 Engineering Departments",
    title: "Learn by Doing in",
    titleAccent: "Modern Labs & Workshops",
    bn: "আধুনিক ল্যাব ও ওয়ার্কশপে হাতে-কলমে শিখুন",
    desc: "From computer programming to PLC automation, civil surveying to textile manufacturing — our students build real engineering skills that employers value.",
    image: "https://sfile.chatglm.cn/images-ppt/a954df05572b.jpg",
    cta: "Apply Now",
    cta2: "Meet Our Faculty",
  },
  {
    eyebrow: "Scholarships & Job Guarantee",
    title: "Merit Scholarships Every Semester",
    titleAccent: "+ Career Placement Support",
    bn: "প্রতি সেমিস্টারে মেধা বৃত্তি ও ক্যারিয়ার সহায়তা",
    desc: "We reward talent and open doors. Merit-based scholarships, special waivers and dedicated placement support help our graduates launch successful careers.",
    image: "https://sfile.chatglm.cn/images-ppt/20955fc2b988.jpg",
    cta: "Apply Now",
    cta2: "Why Choose NPI",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const openAdmission = useUI((s) => s.openAdmission);
  const next = useCallback(() => setI((p) => (p + 1) % SLIDES.length), []);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[i];

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/80 to-brand-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-brand-deep/30" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 w-full pt-12 pb-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-gold text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] shadow-lg shadow-amber-900/20">
                <Sparkles className="h-3.5 w-3.5" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-5 font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                {slide.title}{" "}
                <span className="text-gradient-gold">{slide.titleAccent}</span>
              </h1>
              <p className="mt-3 text-amber-200 font-semibold text-lg" lang="bn">
                {slide.bn}
              </p>
              <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-xl">
                {slide.desc}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => openAdmission()}
                  size="lg"
                  className="bg-gold hover:bg-amber-600 text-white shadow-lg shadow-amber-900/30 group"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                >
                  <a href={i === 1 ? "#faculty" : i === 2 ? "#why" : "#departments"}>
                    {slide.cta2}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <Badge icon={<GraduationCap className="h-4 w-4" />} text="BTEB Approved Curriculum" />
            <Badge icon={<ShieldCheck className="h-4 w-4" />} text="Job Placement Support" />
            <Badge icon={<Sparkles className="h-4 w-4" />} text="Merit Scholarships" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-7 right-4 sm:right-8 flex items-center gap-3 z-10">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="h-10 w-10 rounded-full bg-white/15 border border-white/30 text-white grid place-items-center hover:bg-white/25 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="h-10 w-10 rounded-full bg-white/15 border border-white/30 text-white grid place-items-center hover:bg-white/25 transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-white/85">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <span className="h-8 w-px bg-white/70 animate-pulse" />
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-white text-sm font-semibold">
      <span className="grid place-items-center h-7 w-7 rounded-full bg-white/15 border border-white/25 text-amber-300">
        {icon}
      </span>
      {text}
    </span>
  );
}
