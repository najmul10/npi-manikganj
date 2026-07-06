"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, GraduationCap, Gift, ShieldCheck, Loader2 } from "lucide-react";
import { useFetch } from "@/hooks/use-fetch";
import { useUI, SITE } from "@/lib/store";

interface Department {
  id: string;
  name: string;
  shortName: string;
  seats: number;
}

export function AdmissionModal() {
  const { admissionOpen, selectedDept, closeAdmission } = useUI();
  const { data: depts } = useFetch<Department[]>("/api/departments");

  const [form, setForm] = useState({ name: "", email: "", phone: "", sscGpa: "", department: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ reference: string } | null>(null);

  useEffect(() => {
    if (admissionOpen) {
      setForm((f) => ({ ...f, department: selectedDept || f.department }));
      setDone(null);
    }
  }, [admissionOpen, selectedDept]);

  // Lock body scroll
  useEffect(() => {
    if (admissionOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [admissionOpen]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.department) return;
    setLoading(true);
    try {
      const r = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sscGpa: Number(form.sscGpa) || 0,
        }),
      });
      const json = await r.json();
      if (r.ok && json.success) {
        setDone({ reference: json.data.reference });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {admissionOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeAdmission}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card w-full sm:max-w-2xl max-h-[95vh] overflow-y-auto scroll-area rounded-t-3xl sm:rounded-3xl shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-brand-gradient p-6 sm:p-7 text-white overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <button
                onClick={closeAdmission}
                aria-label="Close"
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white ring-1 ring-white/25 overflow-hidden shrink-0">
                  <img src={SITE.logo} alt="NPI Logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl">Admission Application</h3>
                  <p className="text-sm text-white/75">Diploma in Engineering · Session 2024-25</p>
                </div>
              </div>
              <div className="relative mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/85">
                <span className="inline-flex items-center gap-1.5"><Gift className="h-3.5 w-3.5 text-amber-300" /> Merit Scholarships</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-amber-300" /> Job Placement Support</span>
                <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-amber-300" /> 8 Departments</span>
              </div>
            </div>

            {/* Body */}
            {done ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 14 }}
                  className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600"
                >
                  <CheckCircle2 className="h-9 w-9" />
                </motion.div>
                <h4 className="mt-4 font-serif font-bold text-2xl text-foreground">Application Submitted!</h4>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-foreground">{form.name.split(" ")[0]}</span>. Our admission team will contact you within 24 hours.
                </p>
                <div className="mt-5 inline-flex flex-col items-center rounded-xl border border-brand/20 bg-brand/5 px-6 py-3">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Your Reference No.</span>
                  <span className="font-serif font-bold text-xl text-brand tracking-wider">NPI-{done.reference}</span>
                </div>
                <div className="mt-6">
                  <button
                    onClick={closeAdmission}
                    className="rounded-lg bg-brand hover:bg-brand-deep text-white px-6 py-2.5 text-sm font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="p-6 sm:p-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Full Name *">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Abdullah Al Mamun"
                      className="adm-inp"
                    />
                  </FormField>
                  <FormField label="Phone Number *">
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="adm-inp"
                    />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Email Address *">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="adm-inp"
                    />
                  </FormField>
                  <FormField label="SSC GPA">
                    <input
                      value={form.sscGpa}
                      onChange={(e) => setForm({ ...form, sscGpa: e.target.value })}
                      placeholder="e.g. 4.50"
                      inputMode="decimal"
                      className="adm-inp"
                    />
                  </FormField>
                </div>

                <FormField label="Preferred Department *">
                  <select
                    required
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="adm-inp"
                  >
                    <option value="">Select a department</option>
                    {depts?.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.shortName}) — {d.seats} seats
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Message (optional)">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    placeholder="Any questions or additional information..."
                    className="adm-inp resize-none"
                  />
                </FormField>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand hover:bg-brand-deep disabled:opacity-60 text-white py-3 font-semibold transition-colors"
                  >
                    {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>) : (<><Send className="h-4 w-4" /> Submit Application</>)}
                  </button>
                  <button
                    type="button"
                    onClick={closeAdmission}
                    className="rounded-lg border border-border hover:bg-secondary px-6 py-3 font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-[11px] text-muted-foreground text-center">
                  By submitting, you agree to be contacted by NPI Manikganj regarding your admission.
                </p>
              </form>
            )}
          </motion.div>

          <style jsx>{`
            :global(.adm-inp) {
              width: 100%;
              border-radius: 0.625rem;
              border: 1px solid var(--border);
              background: var(--background);
              padding: 0.7rem 0.9rem;
              font-size: 16px;
              outline: none;
              transition: box-shadow .15s, border-color .15s;
            }
            :global(.adm-inp:focus) {
              border-color: var(--primary);
              box-shadow: 0 0 0 3px oklch(0.45 0.105 162 / 0.15);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}
