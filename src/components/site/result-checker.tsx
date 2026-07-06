"use client";

import { GraduationCap, ArrowRight, FileSearch, ShieldCheck, Clock } from "lucide-react";

export function ResultChecker() {
  return (
    <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-gradient-to-r from-gold/15 to-transparent">
        <div className="grid place-items-center h-10 w-10 rounded-xl bg-gold/20 text-gold">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-lg text-foreground">Result Checker</h3>
          <p className="text-xs text-muted-foreground">Check your BTEB Diploma results</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-foreground/80 leading-relaxed mb-5">
          Check your Diploma in Engineering semester final results online. Get instant access to BTEB published results with your roll number.
        </p>

        {/* Result Portal — primary CTA */}
        <a
          href="https://diplomaresultbd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-brand to-brand-deep text-white p-5 hover:shadow-lg hover:shadow-brand/20 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-white/15 shrink-0">
              <FileSearch className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-serif font-bold text-base">Check Your Result</div>
              <div className="text-xs text-white/85">diplomaresultbd.com — BTEB Diploma Results</div>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
        </a>

        {/* Trust badges */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2.5">
            <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
            <span className="text-xs font-medium text-foreground/75">BTEB Results</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2.5">
            <Clock className="h-4 w-4 text-brand shrink-0" />
            <span className="text-xs font-medium text-foreground/75">Instant Access</span>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Click the button above to check your result on{" "}
          <a
            href="https://diplomaresultbd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            diplomaresultbd.com
          </a>
        </p>
      </div>
    </div>
  );
}
