"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHeader({
  title,
  titleAccent,
  subtitle,
  eyebrow,
  breadcrumbs,
  bgImage,
}: {
  title: React.ReactNode;
  titleAccent?: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  bgImage?: string;
}) {
  return (
    <section className="relative pt-14 pb-12 sm:pt-16 sm:pb-14 overflow-hidden bg-brand-deep">
      {/* Background */}
      {bgImage ? (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/70" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-sm text-white/70 mb-4 flex-wrap"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-red-400 transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-red-400 font-medium">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-white/40" />}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red-400"
          >
            <span className="h-px w-6 bg-red-400/60" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-serif font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-3xl"
        >
          {title} {titleAccent && <span className="text-gradient-gold">{titleAccent}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
