# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"نظام الطيبات" (Altayibate) is a static Arabic-language educational website about the "Tayyibat" dietary system by Dr. Diaa Al-Awadi. The site is RTL (right-to-left), uses the Tajawal Arabic font, and all content is hardcoded in page files — there is no CMS, database, or external API.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build static export to ./out
npm run start    # Serve the production build
npm run lint     # Run Next.js ESLint
```

There are no tests in this project.

## Architecture

**Next.js 14 App Router with static export.** `next.config.js` sets `output: "export"`, which means:
- The build outputs a fully static site to `./out`
- No server-side features are available: no API routes, no server actions, no ISR, no middleware
- `images: { unoptimized: true }` is required because Next.js image optimization requires a server

**`basePath: "/Altayibate-"`** is set for GitHub Pages deployment. All internal `href` values use paths without this prefix (Next.js prepends it automatically). The GitHub Actions workflow (`.github/workflows/deploy.yml`) is the primary deployment target: it builds on push to `main` and deploys `./out` to GitHub Pages.

**Content model:** All page data (food lists, articles, videos, testimonials, etc.) is defined as plain TypeScript arrays/objects at the top of each page file. Adding or editing content means editing those arrays directly in the relevant `app/*/page.tsx`.

**Server vs. client components:** Pages are server components by default and export `metadata` for SEO. Pages that need React state (filtering, forms, accordion) use `"use client"` at the top: `app/articles/page.tsx`, `app/contact/page.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`. Avoid adding `"use client"` unless genuinely needed for interactivity.

**Layout:** `app/layout.tsx` sets `<html lang="ar" dir="rtl">` and wraps all pages with `<Navbar />` and `<Footer />`. The `@/*` path alias maps to the project root.

## Styling Conventions

Tailwind CSS with a custom theme. Two brand color palettes are defined in `tailwind.config.ts`:
- `primary-*`: green scale (primary brand color)
- `earth-*`: orange-brown scale (secondary accent)

**Reusable component classes** are defined in `app/globals.css` under `@layer components`. Always prefer these over ad-hoc Tailwind classes:

| Class | Use |
|---|---|
| `.btn-primary` / `.btn-secondary` / `.btn-ghost` | Buttons |
| `.card` / `.card-flat` | Content cards |
| `.badge` / `.badge-green` / `.badge-earth` | Tag/label chips |
| `.section-title` / `.section-subtitle` | Page section headings |
| `.input-field` | Form inputs |
| `.nav-link` / `.nav-link-active` | Navigation links |
| `.prose-ar` | Long-form Arabic article body text |
| `.section-pattern` | SVG dot-grid background overlay |
| `.gradient-text` | Green gradient text fill |
| `.animate-on-scroll` | Scroll-triggered fade-in (add `.visible` via JS) |

Custom Tailwind shadows (`shadow-card`, `shadow-card-hover`, `shadow-green`, `shadow-green-lg`) and animations (`animate-fade-in`, `animate-slide-up`, `animate-float`, `animate-pulse-slow`, `animate-shimmer`) are available from the theme extension.

**Page layout pattern:** All page content uses `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` for consistent horizontal padding and max-width.

## Images

External images come only from `images.unsplash.com` and `img.youtube.com` — the only two hostnames whitelisted in `next.config.js`. YouTube thumbnails follow the pattern `https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg`.
