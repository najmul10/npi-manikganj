# Project Worklog — NPI Manikganj Education Website

---
Task ID: all
Agent: main (Z.ai Code)
Task: Read https://npimanikganj.edu.bd/, collect info & images, and build a beautiful education system website.

Work Log:
- Scraped the college homepage + subpages via the `page_reader` skill to gather institute info
  (name, contact, address, 8 departments, chairman/director, notices, blogs, working hours).
- Gathered real images via the `image-search` skill:
  - 8 department cover images (computer, civil, electrical, mechanical, food, textile, architecture, automobile)
  - Hero/campus, library, workshop, lab, graduation images for gallery
  - Used real photos from the college site for logo, PLC class, chairman & director.
- Designed a custom emerald-green + amber-gold academic theme in `globals.css` (no blue/indigo),
  added Playfair Display serif for headings.
- Prisma schema (`prisma/schema.prisma`) with 8 models: Department, Teacher, Notice, Result,
  Application, Feedback, GalleryItem, Blog. Seeded via `scripts/seed.ts` (8 depts, 8 faculty,
  10 notices, 12 results, 11 gallery items, 3 blogs).
- Built 10 API routes (GET departments/teachers/notices/results/gallery/blogs/stats;
  POST applications/feedback).
- Built ~20 React section components in `src/components/site/`:
  Topbar, SiteHeader (sticky + mobile sheet + scrollspy), Hero (3-slide carousel),
  MarqueeBanner (Bengali admission ticker), About (image collage + mission/vision),
  Stats (animated counters), Departments (grid + detail dialog), Leadership (chairman/director
  with expandable messages), Teachers (faculty grid), WhyChoose (6 features + CTA),
  Academics (NoticeBoard with category filter + ResultChecker + quick links), Gallery
  (filterable masonry + lightbox), Blog (3 cards + dialog), Testimonials (carousel),
  Contact (feedback form + map + info cards), Footer (sticky, multi-column + newsletter),
  AdmissionModal (Zustand-controlled, full form with success reference),
  BackToTop (scroll progress bar).
- Used Zustand for the admission-modal open/selected-department state.
- Page assembled in `src/app/page.tsx` with `min-h-screen flex flex-col` + `flex-1` main +
  `mt-auto` footer for correct sticky-footer behavior.

Stage Summary:
- Lint passes (`bun run lint` clean). Dev server runs on port 3000 with no runtime errors.
- Agent-Browser verified end-to-end:
  - Hero, all sections render with no broken images (desktop + mobile iPhone 14).
  - Apply Now → Admission modal → form submit → "Application Submitted" with reference → record saved to DB (Application table).
  - Result Checker → roll 240308 → Nusrat Jahan, Electrical Engineering, 5th Semester, GPA 4.00, Passed.
  - Department detail modal opens with description, stats, highlights, careers, Apply button.
  - Mobile hamburger menu opens with nav + Apply button.
  - Feedback form submit → record saved to DB (Feedback table, rating 5).
- Site is fully functional, responsive, and visually polished.

---
Task ID: audit-2
Agent: main (Z.ai Code)
Task: Step-by-step audit of full site for text visibility/contrast issues; use real NPI logo; make site more professional.

Work Log:
- Step-by-step screenshot audit of all 14 sections via Agent Browser + VLM analysis.
- Identified issues: transparent header (low contrast nav/hotline text), hero badge poor contrast (light amber on cream), stats secondary strip low contrast, footer text too faint (white/70 on dark green), About mission/vision text too light, wrong established year (2023 vs logo's 2001), placeholder logo.
- Added brand/brand-deep/gold as proper Tailwind v4 theme colors in globals.css (fixes bg-brand/bg-gold utilities being overridden — root cause of green buttons/badges appearing transparent).
- Rewrote SiteHeader: always solid white bg, real circular NPI logo, stronger nav text (foreground/80 + brand active), prominent Admission Hotline block, mobile sheet with dark green header + real logo.
- Fixed hero badge: solid gold bg with white bold text + shadow (was light amber on cream).
- Brightened hero Bengali subtitle (amber-200) and body text (white/90), trust badges (white font-semibold), Scroll hint (white/85).
- Fixed stats secondary strip: white/15 bg + white numbers + white/90 labels (was light amber low-contrast).
- Rewrote Footer: real NPI logo in brand column, all body text white/85-90 (was white/70), contact info white/90 font-medium, newsletter strip bg-white/5 with brighter input, added BTEB/Est trust badges, bottom bar text white/80.
- Updated SITE config: logo → /npi-logo.jpg, est → 2001 (matches logo's "Established-2001").
- Updated layout.tsx favicon/apple icon → /npi-logo.jpg.
- Updated seed: all 8 departments establishedYear 2023 → 2001; re-seeded DB.
- Updated About: mission/vision body text foreground/80 font-medium (was muted-foreground); checklist items foreground/85 font-medium.
- Updated AdmissionModal header: real NPI logo in circle (was GraduationCap icon).
- Lint clean, no runtime/console errors.

Stage Summary:
- VLM re-audit confirms: header consistent with real logo throughout, ALL text readable across every section, footer bright & readable, professional clean look. "No remaining issues."
- Real NPI logo (blue/red circular, Established-2001) now used in header, mobile menu, footer, admission modal, and favicon.

---
Task ID: mobile-enhance
Agent: main (Z.ai Code)
Task: Mobile view enhancement — audit and improve all sections for mobile UX.

Work Log:
- Full mobile audit via Agent Browser (iPhone 14) — screenshotted all 14 sections + admission modal.
- VLM analysis confirmed sections were "OK" but identified enhancement opportunities:
  * Hero CTAs side-by-side (should stack full-width on mobile)
  * Section padding too large on mobile
  * Stats counter sizes too big for mobile
  * Form inputs <16px (triggers iOS Safari auto-zoom)
  * Gallery masonry row-span causing gaps on mobile
  * Various spacing/sizing not optimized for small screens
- Hero: stacked CTAs full-width on mobile (flex-col sm:flex-row, w-full sm:w-auto), heading text-[2rem] on mobile, adjusted content padding pt-10 pb-24, slide controls repositioned bottom-5 right-4 on mobile.
- Section headings: reduced to text-[1.7rem] on mobile (from text-3xl).
- All 10 main sections: reduced vertical padding from py-20 sm:py-28 → py-16 sm:py-24 lg:py-28.
- Stats: icon 12x12 on mobile (from 14x14), counter text-3xl (from text-4xl), label text-xs (from text-sm), secondary strip items smaller on mobile, grid gap reduced.
- Contact form + admission modal form inputs: font-size 16px (prevents iOS Safari auto-zoom on focus), padding increased to 0.7rem.
- About image collage: gap-3 sm:gap-4, space-y-3 sm:space-y-4, pt-6 sm:pt-8.
- Gallery: masonry row-span-2 only applies on md+ screens (was causing gaps on mobile 2-col grid), gap-2.5 sm:gap-4, auto-rows-auto.
- Marquee banner: button px-3.5 text-xs on mobile, marquee text-[12px] px-5 on mobile.
- Department cards: image h-36 sm:h-40, content p-4 sm:p-5, grid gap-4 sm:gap-5, mt-10 sm:mt-12.
- Leadership cards: padding p-5 sm:p-7, gap-4 sm:gap-5, quote icon h-16 on mobile, image centered on mobile (flex sm:block justify-center).
- Lint clean, no runtime errors.

Stage Summary:
- VLM re-audit: hero CTAs now stacked full-width, heading size appropriate, tap targets adequate, layout clean. Full-page mobile audit: "All sections look good on mobile."
- Admission modal opens as bottom sheet on mobile with 16px form inputs (no iOS zoom), full-width submit button.
- All mobile UX issues resolved — site is now professional and usable on small screens.
