"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { SITE } from "@/lib/store";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", rating: 5, message: "" });
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      const r = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await r.json();
      if (r.ok && json.success) {
        toast.success("Thank you! Your feedback has been received.");
        setForm({ name: "", email: "", rating: 5, message: "" });
      } else {
        toast.error(json.error || "Could not submit feedback.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Get in Touch"
          title={<>Have Questions? <span className="text-brand">Let's Talk</span></>}
          subtitle="Visit our campus, call the admission hotline, or leave your feedback — we're here to help you take the next step."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact info + map */}
          <div className="lg:col-span-2 space-y-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <InfoCard icon={<MapPin className="h-5 w-5" />} title="Campus Address" lines={[SITE.address]} />
              <InfoCard icon={<Phone className="h-5 w-5" />} title="Admission Hotline" lines={[SITE.phone1, SITE.phone2]} href={`tel:${SITE.phone1}`} />
              <InfoCard icon={<Mail className="h-5 w-5" />} title="Email Us" lines={[SITE.email, SITE.emailAlt]} href={`mailto:${SITE.email}`} />
              <InfoCard icon={<Clock className="h-5 w-5" />} title="Working Hours" lines={["Sun – Thu: 8:00 AM – 5:00 PM", "Fri – Sat: Closed"]} />
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-64">
              <iframe
                title="NPI Manikganj Location"
                src={SITE.mapEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Feedback form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-gradient-to-br from-card to-secondary/40 border border-border p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand-gradient text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-foreground">Leave Your Feedback</h3>
                  <p className="text-sm text-muted-foreground">Tell us what you like — or how we can improve.</p>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *">
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="inp"
                    />
                  </Field>
                  <Field label="Email Address *">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="inp"
                    />
                  </Field>
                </div>

                <Field label="How would you rate your experience?">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setForm({ ...form, rating: s })}
                        aria-label={`${s} stars`}
                        className="p-0.5"
                      >
                        <Star className={`h-7 w-7 transition-colors ${s <= (hover || form.rating) ? "text-gold fill-gold" : "text-muted-foreground/40"}`} />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{form.rating}/5</span>
                  </div>
                </Field>

                <Field label="Your Message *">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share your thoughts, questions or feedback..."
                    rows={5}
                    className="inp resize-none"
                  />
                </Field>

                <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-brand hover:bg-brand-deep text-white">
                  {loading ? "Sending..." : (<><Send className="h-4 w-4" /> Submit Feedback</>)}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .inp {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.7rem 0.9rem;
          font-size: 16px;
          outline: none;
          transition: box-shadow .15s, border-color .15s;
        }
        .inp:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.45 0.105 162 / 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function InfoCard({ icon, title, lines, href }: { icon: React.ReactNode; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="group h-full rounded-2xl bg-card border border-border p-5 hover:border-brand/40 hover:shadow-md transition-all">
      <div className="grid place-items-center h-10 w-10 rounded-xl bg-brand/10 text-brand mb-3">{icon}</div>
      <h4 className="font-serif font-bold text-foreground">{title}</h4>
      <div className="mt-1 space-y-0.5">
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-muted-foreground">{l}</p>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
