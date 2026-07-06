"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Building2, Award } from "lucide-react";
import { useFetch } from "@/hooks/use-fetch";

interface Stats {
  students: number;
  teachers: number;
  departments: number;
  graduates: number;
  yearsOfExcellence: number;
  labs: number;
  placement: number;
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { data, loading } = useFetch<Stats>("/api/stats");

  const items = [
    { icon: Users, label: "Active Students", value: data?.students ?? 2500, suffix: "+" },
    { icon: GraduationCap, label: "Expert Faculty", value: data?.teachers ?? 80, suffix: "+" },
    { icon: Building2, label: "Departments", value: data?.departments ?? 8, suffix: "" },
    { icon: Award, label: "Proud Graduates", value: data?.graduates ?? 4800, suffix: "+" },
  ];

  return (
    <section className="relative py-16 bg-brand-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center text-white"
            >
              <div className="mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
                <it.icon className="h-7 w-7 text-amber-300" />
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">
                {loading ? <span className="opacity-50">—</span> : <Counter to={it.value} suffix={it.suffix} />}
              </div>
              <div className="mt-1.5 text-sm sm:text-base text-white/75 font-medium">{it.label}</div>
            </motion.div>
          ))}
        </div>

        {/* secondary strip */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { k: `${data?.labs ?? 24}+`, v: "Modern Labs & Workshops" },
            { k: `${data?.placement ?? 92}%`, v: "Graduate Placement Rate" },
            { k: `${data?.yearsOfExcellence ?? 1}+`, v: "Years of Excellence" },
          ].map((s) => (
            <div key={s.v} className="flex items-center justify-center gap-3 rounded-xl bg-white/15 border border-white/25 px-4 py-3 backdrop-blur-sm">
              <span className="text-2xl font-serif font-bold text-white">{s.k}</span>
              <span className="text-sm text-white/90 font-medium">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
