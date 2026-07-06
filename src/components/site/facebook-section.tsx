"use client";

import { motion } from "framer-motion";
import { Facebook, ExternalLink, Users, Heart, Share2, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SITE, useUI } from "@/lib/store";
import { Button } from "@/components/ui/button";

// Real photos from official NPI Manikganj Facebook page
const FB_PHOTOS = [
  { src: "/campus/fb-college-gate.jpg", caption: "Students at College Main Gate" },
  { src: "/campus/fb-innovation.jpg", caption: "Innovation Competition 2025" },
  { src: "/campus/fb-control-room.jpg", caption: "Student Gathering at Control Room" },
  { src: "/campus/fb-conference.jpg", caption: "Students & Staff Conference" },
  { src: "/campus/fb-admission-notice.jpg", caption: "Admission Notice" },
  { src: "/campus/fb-admission-poster.jpg", caption: "Admission Poster" },
];

export function FacebookSection() {
  const openAdmission = useUI((s) => s.openAdmission);
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#1877F2]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Campus Life · Official Facebook"
          title={<>Real Moments from <span className="text-brand">Our Campus</span></>}
          subtitle="Authentic photos from our official Facebook page — students, events, innovation and everyday life at NPI Manikganj."
        />

        {/* Facebook page card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 mx-auto max-w-2xl rounded-2xl bg-card border border-border shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#1877F2] to-[#0a5dc2] p-5 sm:p-6 text-white flex items-center gap-4">
            <div className="grid place-items-center h-14 w-14 rounded-full bg-white/15 ring-2 ring-white/25 shrink-0">
              <Facebook className="h-7 w-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif font-bold text-lg sm:text-xl truncate">{SITE.facebookName}</h3>
              <p className="text-white/85 text-sm flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {SITE.facebookFollowers} followers</span>
                <span className="text-white/50">·</span>
                <span>Official Page</span>
              </p>
            </div>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-white text-[#1877F2] px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold hover:bg-white/90 transition-colors"
            >
              <Facebook className="h-4 w-4" />
              <span className="hidden sm:inline">Follow</span>
              <span className="sm:hidden">Follow</span>
            </a>
          </div>
          <div className="p-4 sm:p-5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 sm:gap-6 text-foreground/70">
              <span className="inline-flex items-center gap-1.5"><Heart className="h-4 w-4 text-[#1877F2]" /> Like</span>
              <span className="inline-flex items-center gap-1.5"><Share2 className="h-4 w-4 text-[#1877F2]" /> Share</span>
            </div>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#1877F2] font-semibold hover:underline"
            >
              View Page <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Photo grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {FB_PHOTOS.map((p, idx) => (
            <motion.a
              key={idx}
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden ring-1 ring-border hover:ring-[#1877F2]/40 transition-all aspect-square"
            >
              <img
                src={p.src}
                alt={p.caption}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute top-2.5 right-2.5 grid place-items-center h-8 w-8 rounded-full bg-[#1877F2] text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <ExternalLink className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <p className="text-white font-semibold text-xs sm:text-sm leading-tight line-clamp-2">{p.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/5">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4" />
              See More on Facebook
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <div className="mt-4">
            <button
              onClick={() => openAdmission()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-deep"
            >
              Or Apply for Admission Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
