# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Altayibate** is a static educational website for "الأستاذة حنانة" (Prof Hanane), teaching Moroccan Social Studies (History & Geography) to students at the 3AC (3ème année collégiale) and 1Bac (1ère année baccalauréat) levels. The site is fully in Arabic with RTL layout.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build static export to /out directory
npm run lint     # ESLint via next lint
npm run start    # Serve the Next.js production build (not the static export)
```

There are no tests in this project.

## Architecture

**Framework:** Next.js 14 with the App Router, configured for **static export** (`output: "export"` in `next.config.js`). Every page must be statically renderable — no server-side data fetching, no API routes, no dynamic server functions (`cookies()`, `headers()`, etc.).

**Deployment targets:** Netlify (primary, via `netlify.toml`) and GitHub Pages (via `.github/workflows/deploy.yml`). Both serve the `/out` directory.

**All content is hardcoded directly in page files** — there is no CMS, database, or external API. Lessons live in `app/drous/page.tsx`, infographics metadata in `app/infographie/page.tsx`, and methodology guides in `app/manhajiya/page.tsx`. When adding new content, edit those files directly.

**Infographic images** are not hosted in this repo. They are fetched at runtime from `raw.githubusercontent.com/AhmedBouamoud/Infographie/...`. The `next.config.js` whitelists this hostname.

## Content Structure

Each lesson object in `app/drous/page.tsx` follows this shape:
```ts
{
  num: number,
  subject: "التاريخ" | "الجغرافيا",
  semester: "الفصل الأول" | "الفصل الثاني" | "الفصل الثالث",
  title: string,
  status: "available" | "coming_soon",
  summary: string,
  concepts: string[]
}
```
Lessons are grouped under `lessons3AC` and `lessons1Bac` arrays.

## Routing

- `app/drous/` — lessons library (filterable by level/subject)
- `app/infographie/` — infographics gallery with lightbox
- `app/manhajiya/` — step-by-step methodology guides
- `app/contact/` — contact form + FAQs
- Several routes (`about/`, `articles/`, `videos/`, `tips/`, `foods/`) are stub redirects back to home — they are legacy routes from a prior version of the site and are not used.

## Styling

Uses **Tailwind CSS 3** with a custom theme defined in `tailwind.config.ts`:
- `primary` — blue scale (brand color)
- `earth` — brown/tan scale (accent)
- Reusable utility classes are defined in `app/globals.css` under `@layer components`: `.btn-primary`, `.btn-secondary`, `.card`, `.badge`, `.section-title`, `.nav-link`, `.input-field`, `.prose-ar`, etc. Prefer these over ad-hoc Tailwind strings for consistency.
- Font: **Tajawal** (Google Fonts, Arabic sans-serif). The `<html>` element has `dir="rtl"` and `lang="ar"`.
- Custom Tailwind animations: `fade-in`, `slide-up`, `float`, `shimmer`, `pulse-slow`.

## Key Conventions

- **Client components** (`"use client"`) are used on all interactive pages (filter state, modals, menu toggle). Pure layout/display pages can be server components.
- The `@/*` path alias maps to the repo root — use `@/components/Navbar` not relative paths.
- Images must have `unoptimized` set (already in config) because the static export doesn't support Next.js image optimization. Use `next/image` with `unoptimized` or plain `<img>` tags.
- RTL must be respected in all layouts — use `ms-*`/`me-*` (margin-start/end) instead of `ml-*`/`mr-*` where direction matters.
