"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { useFetch } from "@/hooks/use-fetch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  date: string;
}

export function BlogSection() {
  const { data, loading } = useFetch<Blog[]>("/api/blogs");
  const [active, setActive] = useState<Blog | null>(null);
  const posts = (data ?? []).slice(0, 3);

  return (
    <section id="blogs" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="News & Blogs"
            title={<>Insights From Our <span className="text-brand">Academic World</span></>}
            subtitle="Articles, announcements and engineering insights from the NPI Manikganj community."
          />
          <Button variant="outline" className="shrink-0 border-brand/30 text-brand hover:bg-brand/5 hidden sm:inline-flex">
            <Newspaper className="h-4 w-4" /> View All Posts
          </Button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden animate-pulse">
                  <div className="h-48 bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 w-1/3 bg-muted rounded" />
                    <div className="h-5 w-3/4 bg-muted rounded" />
                    <div className="h-3 w-full bg-muted rounded" />
                  </div>
                </div>
              ))
            : posts.map((b, idx) => (
                <motion.article
                  key={b.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={b.image} alt={b.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-gold text-white text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1">
                      {b.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(b.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {b.author}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif font-bold text-lg text-foreground group-hover:text-brand transition-colors leading-snug">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{b.excerpt}</p>
                    <button
                      onClick={() => setActive(b)}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              <div className="relative h-56">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent" />
              </div>
              <DialogHeader className="p-6 pb-2">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="inline-flex items-center rounded-full bg-gold text-white text-[11px] font-semibold uppercase px-2 py-0.5">{active.category}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(active.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <DialogTitle className="font-serif text-2xl">{active.title}</DialogTitle>
                <DialogDescription className="sr-only">{active.excerpt}</DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6">
                <p className="text-foreground/80 leading-relaxed">{active.content}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" /> By {active.author}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
