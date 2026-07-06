"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Award, BookOpen, Hash, User, GraduationCap, CheckCircle2, AlertCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Result {
  rollNo: string;
  studentName: string;
  department: string;
  semester: string;
  gpa: number;
  status: string;
  year: string;
}

export function ResultChecker() {
  const [roll, setRoll] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roll.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const r = await fetch(`/api/results?roll=${encodeURIComponent(roll.trim())}`);
      const json = await r.json();
      if (!r.ok || !json.success) {
        setError(json.error || "No result found.");
      } else {
        setResult(json.data);
      }
    } catch {
      setError("Could not fetch result. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-gradient-to-r from-gold/15 to-transparent">
        <div className="grid place-items-center h-10 w-10 rounded-xl bg-gold/20 text-gold">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-lg text-foreground">Result Checker</h3>
          <p className="text-xs text-muted-foreground">Enter your roll number</p>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={search} className="flex gap-2">
          <div className="relative flex-1">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              placeholder="e.g. 240101"
              className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            />
          </div>
          <Button type="submit" disabled={loading} className="bg-brand hover:bg-brand-deep text-white">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>

        <p className="mt-2 text-[11px] text-muted-foreground">
          Try a sample roll: <button onClick={() => setRoll("240308")} className="text-brand font-semibold hover:underline">240308</button>
        </p>

        {/* Official Result Portal link */}
        <a
          href="https://diplomaresultbd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 group flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-brand to-brand-deep text-white p-4 hover:shadow-lg hover:shadow-brand/20 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-10 w-10 rounded-lg bg-white/15 shrink-0">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-serif font-bold text-sm">Official Result Portal</div>
              <div className="text-xs text-white/80">Check BTEB Diploma results on diplomaresultbd.com</div>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex items-start gap-2 rounded-lg bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700"
            >
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              {error}
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-xl border border-brand/20 bg-gradient-to-br from-brand/5 to-gold/5 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" />
                  <span className="font-semibold text-blue-700 text-sm uppercase tracking-wide">Passed</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5" /> {result.semester} · {result.year}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-brand text-white">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif font-bold text-foreground">{result.studentName}</div>
                  <div className="text-xs text-muted-foreground">Roll: {result.rollNo}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-background/70 p-3">
                  <div className="text-[11px] uppercase text-muted-foreground">Department</div>
                  <div className="font-medium text-foreground mt-0.5">{result.department}</div>
                </div>
                <div className="rounded-lg bg-background/70 p-3 flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-gold/20 text-gold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase text-muted-foreground">GPA</div>
                    <div className="font-serif font-bold text-xl text-foreground">{result.gpa.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
