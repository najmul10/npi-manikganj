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

---
Task ID: facebook-integration
Agent: main (Z.ai Code)
Task: Use official Facebook page (National Polytechnic Institute Manikganj) info & photos to improve the website.

Work Log:
- Read the official Facebook photos page via page_reader skill.
- Extracted 11 image URLs from FB CDN (scontent.fbcdn.net). FB main/about pages redirect to login, but photos page exposed thumbnails.
- FB page metadata gathered: page name "National Polytechnic Institute-NPI, Manikganj", 3K followers, 20 following.
- Downloaded 7 real campus photos at 720x720px by modifying FB CDN crop params (ctp=s206x206 → ctp=s720x720) with proper User-Agent + Referer headers.
- VLM verified photo contents: students at college main gate, innovation competition 2025 booth, student gathering at control room building, students & staff conference, admission notice, admission poster, certificate.
- Copied 7 FB photos to public/campus/ (fb-college-gate.jpg, fb-innovation.jpg, fb-control-room.jpg, fb-conference.jpg, fb-admission-notice.jpg, fb-admission-poster.jpg, fb-certificate.jpg).
- Updated SITE config: added facebook URL, facebookName, facebookFollowers ("3K").
- Updated seed galleryItems: first 6 items now use real FB campus photos (students at gate, innovation, control room, conference, admission notice/poster) + 6 stock lab/campus photos.
- Re-seeded database (12 gallery items now).
- Built new FacebookSection component: blue FB page card (name + 3K followers + Follow button), 6-photo grid linking to FB page, "See More on Facebook" CTA, Apply for Admission link.
- Added FacebookSection to page between Gallery and Testimonials.
- Updated hero slide 3 background to use real FB innovation competition photo (/campus/fb-innovation.jpg).
- Updated footer + topbar social links: Facebook icon now links to real FB page (hover bg #1877F2 brand blue), YouTube/LinkedIn hover colors added.
- Lint clean, no runtime errors.

Stage Summary:
- Real Facebook campus photos now appear in: hero slide 3 (innovation competition), gallery (6 photos), and dedicated Facebook section (6 photos + page card).
- VLM verified: Facebook section shows blue card with institute name + 3K followers + Follow button, 6 real campus photos in grid, "See More on Facebook" button. Mobile: 2-column grid, easy-to-tap Follow button, no layout issues.
- All Facebook social links (topbar + footer) now point to the real official page.
- Site is more authentic and connected to the college's real social presence.

---
Task ID: facebook-more-info
Agent: main (Z.ai Code)
Task: Read more info from official Facebook page (user logged in) and improve the website further.

Work Log:
- Note: page_reader is server-side and doesn't share user's browser login session; agent-browser also uses separate session. FB posts/about pages redirect to login.
- Re-read FB photos page (photos_by URL) which exposes public thumbnails. Extracted all unique photo URLs from combined HTML.
- Downloaded all 9 real FB photos at 480x480px (photo 3 "admission flyer with balloons" was previously failing at 720px, now succeeds at 480px).
- VLM verified all 9 photo contents: admission notices (Bengali ভর্তি বিজ্ঞপ্তি), admission flyers, certificate (প্রশংসাপত্র), student group photos at gate/control room/conference, innovation competition booth.
- Copied new photo (fb-admission-flyer.jpg) to public/campus/.
- Updated seed galleryItems: now 14 items (8 real FB photos + 6 stock lab/campus) including new admission flyer + certificate.
- Built new AdmissionBanner component: dedicated "Admission 2024-25" section with dark green gradient bg, gold badge, Bengali heading (ডিপ্লোমা ইন ইঞ্জিনিয়ারিং ভর্তি চলছে), 4 highlight cards (scholarships/job placement/departments/faculty in Bengali), Apply Now + Call buttons, and a 4-photo collage of REAL admission posters/flyer/certificate with floating "2024 Session" badge + "BTEB Approved" stamp.
- Added AdmissionBanner to page between MarqueeBanner and About.
- Updated FacebookSection: added BadgeCheck verification icon next to page name, added "20 following" stat, added new admission flyer photo, reordered photos.
- Re-seeded database (14 gallery items). Lint clean, no runtime errors.

Stage Summary:
- VLM verified AdmissionBanner: gold badge ✓, Bengali heading ✓, 4 highlight cards ✓, Apply Now + Call buttons ✓, 4 real admission poster photos in collage ✓, floating 2024 Session badge + BTEB Approved stamp ✓. Mobile: stacked layout, full-width buttons, no issues.
- VLM verified Facebook section: page name + followers + following + Official Page ✓, real campus photos ✓.
- Full page audit: "Site looks great." No errors.
- Real Facebook photos now prominently featured in: hero slide 3, new AdmissionBanner section (4 posters), gallery (8 photos), and Facebook section (6 photos).

---
Task ID: multipage-restructure
Agent: main (Z.ai Code)
Task: Restructure site into multi-page architecture — home was too cluttered, move sections to dedicated pages.

Work Log:
- Planned 8-page architecture: Home (clean), About, Departments, Admission, Academics, Faculty, Gallery, Contact.
- Updated NAV config: anchor links (#home, #about) → real routes (/, /about, /departments, /admission, /academics, /faculty, /gallery, /contact). Added "Admission" as a top-level nav item.
- Built PageHeader component: reusable page banner with breadcrumbs (Home > X), title, subtitle, and background image overlay — used on all sub-pages.
- Built SiteShell component: wraps Topbar + SiteHeader + main + Footer + AdmissionModal + BackToTop — used by every page for consistency.
- Rewrote SiteHeader: uses usePathname() for active state detection, Link components for client-side navigation, active underline indicator.
- Cleaned Home page: removed AdmissionBanner (moved to /admission), removed Academics section, removed Gallery, removed Blog, removed Contact, removed Leadership, removed Teachers. Home now has: Hero → Marquee → About → Stats → HomeDepartments (4-card teaser) → WhyChoose → HomeAdmissionCTA (clean CTA) → Testimonials → FacebookSection.
- Built HomeDepartments: shows first 4 departments as teasers with "View All Departments" link to /departments.
- Built HomeAdmissionCTA: clean compact CTA section (replaced huge AdmissionBanner on home) with 4 perk cards + Apply Now + Admission Details buttons.
- Updated About component: "Explore Departments" button → "Learn More About Us" linking to /about.
- Built 7 sub-pages:
  * /about: PageHeader + About + Stats + WhyChoose + Leadership
  * /departments: PageHeader + DepartmentsPageContent (full 8-dept grid + detail modal)
  * /admission: PageHeader + AdmissionPageContent (AdmissionBanner + Process + Requirements/Perks + FAQ)
  * /academics: PageHeader + Academics (notice board + result checker + quick links) + BlogSection
  * /faculty: PageHeader + Leadership + Teachers
  * /gallery: PageHeader + Gallery + FacebookSection
  * /contact: PageHeader + Contact
- Updated Footer: all links use Next.js Link, Departments links → /departments, bottom bar links → proper routes.
- Updated Hero CTA buttons: anchor links → Link components to /faculty, /admission, /departments.
- Updated Academics quick links: anchor → Link to /contact.
- Lint clean, no runtime errors.

Stage Summary:
- VLM verified: home page is now CLEAN and uncluttered, big admission section removed (only clean CTA remains). Professional design.
- All 7 sub-pages verified: each has dark green PageHeader with breadcrumbs + title + subtitle + background image. No broken/missing headers.
- Navigation tested: desktop nav links work (click Admission → /admission loads), mobile hamburger menu shows all 8 links.
- Site is now professionally organized into focused, dedicated pages instead of one cluttered scroll.
