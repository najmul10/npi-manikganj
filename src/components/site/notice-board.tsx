"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Pin, FileText, ChevronRight, Calendar, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFetch } from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";

interface Notice {
  id: string;
  title: string;
  category: string;
  date: string;
  isPinned: boolean;
  excerpt: string;
  body: string;
}

const CATS = ["All", "Admission", "Exam", "Routine", "Academic", "Event", "Results", "General"];

const CAT_COLORS: Record<string, string> = {
  Admission: "bg-emerald-100 text-emerald-700",
  Exam: "bg-amber-100 text-amber-700",
  Routine: "bg-sky-100 text-sky-700",
  Academic: "bg-violet-100 text-violet-700",
  Event: "bg-rose-100 text-rose-700",
  Results: "bg-teal-100 text-teal-700",
  General: "bg-slate-100 text-slate-700",
};

export function NoticeBoard() {
  const { data, loading } = useFetch<Notice[]>("/api/notices");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<Notice | null>(null);

  const filtered = useMemo(() => {
    if (!data) return [];
    return cat === "All" ? data : data.filter((n) => n.category === cat);
  }, [data, cat]);

  return (
    <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-brand-gradient text-white">
        <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/15">
          <Megaphone className="h-5 w-5 text-amber-300" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-lg">Notice Board</h3>
          <p className="text-xs text-white/70">All notices & office orders</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 px-5 py-3 border-b border-border overflow-x-auto no-scrollbar">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
              cat === c
                ? "bg-brand text-white"
                : "bg-secondary text-foreground/70 hover:bg-brand/10 hover:text-brand"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="max-h-[460px] overflow-y-auto scroll-area divide-y divide-border">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-5 animate-pulse">
                <div className="h-4 w-3/4 bg-muted rounded" />
                <div className="mt-2 h-3 w-full bg-muted rounded" />
              </div>
            ))
          : filtered.map((n, idx) => (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(idx * 0.04, 0.3) }}
                onClick={() => setActive(n)}
                className="group w-full text-left px-5 py-4 hover:bg-secondary/60 transition-colors flex gap-3"
              >
                <div className="shrink-0 w-12 text-center">
                  <div className="rounded-lg bg-brand/8 text-brand py-1.5">
                    <div className="text-[10px] uppercase font-semibold leading-none">
                      {new Date(n.date).toLocaleString("en-US", { month: "short" })}
                    </div>
                    <div className="text-lg font-bold leading-tight">
                      {new Date(n.date).getDate()}
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {n.isPinned && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-gold">
                        <Pin className="h-3 w-3" /> Pinned
                      </span>
                    )}
                    <span className={cn("text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded", CAT_COLORS[n.category] ?? CAT_COLORS.General)}>
                      {n.category}
                    </span>
                  </div>
                  <h4 className="mt-1 font-semibold text-sm text-foreground group-hover:text-brand transition-colors line-clamp-1">
                    {n.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{n.excerpt}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0 self-center" />
              </motion.button>
            ))}
      </div>

      {/* Detail */}
      {active && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setActive(null)}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl max-w-lg w-full p-6 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={cn("text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded", CAT_COLORS[active.category] ?? CAT_COLORS.General)}>
                {active.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(active.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl text-foreground">{active.title}</h3>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{active.body}</p>
            <button
              onClick={() => setActive(null)}
              className="mt-5 w-full rounded-lg bg-brand hover:bg-brand-deep text-white py-2.5 text-sm font-medium"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
