"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useFetch } from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export function Gallery() {
  const { data, loading } = useFetch<GalleryItem[]>("/api/gallery");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<string>>(new Set());

  const items = data ?? [];

  const close = () => setLightbox(null);
  const nav = (dir: number) =>
    setLightbox((p) => (p === null ? p : (p + dir + items.length) % items.length));

  const markLoaded = (id: string) =>
    setLoaded((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

  return (
    <section id="gallery" className="relative py-16 sm:py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Campus Gallery"
          title={<>Life at <span className="text-brand">NPI Manikganj</span></>}
          subtitle="A glimpse into our campus, labs, workshops and the vibrant moments that make student life memorable."
        />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 auto-rows-auto">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={cn("rounded-2xl bg-muted animate-pulse", i % 5 === 0 ? "md:row-span-2 h-full min-h-[12rem] md:min-h-[16rem]" : "aspect-square")} />
              ))
            : items.map((g, idx) => {
                const isLoaded = loaded.has(g.id);
                return (
                  <motion.button
                    key={g.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: (idx % 4) * 0.05 }}
                    onClick={() => setLightbox(idx)}
                    className={cn(
                      "group relative rounded-2xl overflow-hidden ring-1 ring-border hover:ring-brand/40 transition-all",
                      idx % 7 === 0 ? "md:row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"
                    )}
                  >
                    {/* Blur placeholder while loading */}
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted animate-pulse" />
                    )}
                    <img
                      src={g.image}
                      alt={g.title}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => markLoaded(g.id)}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700",
                        isLoaded ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-left">
                      <h4 className="text-white font-semibold text-sm leading-tight line-clamp-2">{g.title}</h4>
                    </div>
                    <div className="absolute top-3 right-3 grid place-items-center h-8 w-8 rounded-full bg-white/15 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Images className="h-4 w-4" />
                    </div>
                  </motion.button>
                );
              })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav(-1); }} className="absolute left-4 sm:left-8 h-11 w-11 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20" aria-label="Previous">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nav(1); }} className="absolute right-4 sm:right-8 h-11 w-11 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20" aria-label="Next">
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img src={items[lightbox].image} alt={items[lightbox].title} className="w-full max-h-[80vh] object-contain rounded-lg" />
              <figcaption className="mt-4 text-center text-white">
                <h4 className="font-serif font-semibold text-lg">{items[lightbox].title}</h4>
                <p className="text-white/50 text-sm">{lightbox + 1} / {items.length}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
