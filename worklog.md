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
