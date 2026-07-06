# National Polytechnic Institute, Manikganj (NPI) — Official Website

A modern, professional education website for the National Polytechnic Institute Manikganj, built with Next.js 16, TypeScript, Tailwind CSS 4, and Prisma.

## ✨ Features

- **8 Engineering Departments** — Computer, Civil, Electrical, Mechanical, Food, Textile, Architecture & Automobile
- **Multi-page architecture** — Home, About, Departments, Admission, Academics, Faculty, Gallery, Contact + Privacy Policy & Terms
- **Online Admission Application** — Form with automatic reference number generation
- **Result Checker** — Students can check exam results by roll number
- **Notice Board** — Filterable notices with categories (Admission, Exam, Routine, Events, etc.)
- **Gallery** — 25+ real campus photos with category filters (Events, Students, Labs, Campus) + lightbox
- **Facebook Integration** — Official page link with real campus photos
- **SEO Optimized** — Dynamic OG image, sitemap.xml, robots.txt, structured data (JSON-LD), per-page metadata
- **Responsive** — Mobile-first design, optimized for all screen sizes
- **Dark green + gold theme** — Academic, professional color scheme

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Database | Prisma ORM + SQLite |
| State | Zustand |
| Animations | Framer Motion |
| Icons | Lucide React |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A package manager (npm, yarn, pnpm, or bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/npi-manikganj.git
   cd npi-manikganj
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Set up the database**
   ```bash
   bun run db:push    # Push schema to SQLite
   bun run scripts/seed.ts  # Seed initial data
   ```

5. **Start the development server**
   ```bash
   bun run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment on Vercel

This app uses **Turso (libSQL)** as the production database for persistent storage on Vercel's serverless platform.

### Step 1: Set up Turso (free)

1. Sign up at [turso.tech](https://turso.tech) (use GitHub login)
2. Create a database (e.g. `npi-manikganj`)
3. Get your **Database URL** (`libsql://...`) and **Auth Token** from the Turso dashboard

### Step 2: Push schema & seed data

```bash
# Set env vars (or export them in your shell)
export TURSO_DATABASE_URL="libsql://your-db.turso.io"
export DATABASE_AUTH_TOKEN="your-auth-token"

# Create tables
bun run scripts/turso-push.ts

# Seed initial data (departments, teachers, notices, gallery, etc.)
bun run scripts/turso-seed.ts
```

### Step 3: Deploy to Vercel

1. Push your code to GitHub (already done in this repo)
2. Go to [vercel.com](https://vercel.com) → "New Project" → import this repository
3. Vercel auto-detects Next.js — no build config needed
4. Add **Environment Variables** in Vercel dashboard:
   - `DATABASE_URL` = `libsql://npi-manikganj-btebresultsbd.aws-ap-northeast-1.turso.io`
   - `DATABASE_AUTH_TOKEN` = your Turso auth token
5. Deploy! 🚀

> **Why Turso?** Vercel's serverless platform has an ephemeral filesystem — local SQLite files are wiped on every cold start. Turso provides persistent SQLite-compatible storage that works perfectly with the existing Prisma schema (no changes needed). Free tier: 5GB storage, 1B reads/month.

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── admission/          # Admission page
│   ├── academics/          # Academics (notices, results, blogs)
│   ├── contact/            # Contact page
│   ├── departments/        # Departments page
│   ├── faculty/            # Faculty & leadership page
│   ├── gallery/            # Gallery page
│   ├── privacy-policy/     # Privacy Policy page
│   ├── terms-of-service/   # Terms of Service page
│   ├── api/                # API routes (departments, teachers, notices, etc.)
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── opengraph-image.tsx # Dynamic OG image
│   ├── sitemap.ts          # Dynamic sitemap.xml
│   └── robots.ts           # Dynamic robots.txt
├── components/
│   ├── site/               # Website-specific components
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities, store, db client
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server on port 3000 |
| `bun run build` | Build for production |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run scripts/seed.ts` | Seed database with initial data |

## 📄 License

© 2001–2026 National Polytechnic Institute, Manikganj. All rights reserved.

---

**Developed by** [Kazi Rifat](https://www.facebook.com/rifat660) (NPI Student)
