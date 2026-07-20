# Md. Armanul Islam — Portfolio (Next.js)

A single-page portfolio built with Next.js 14 (App Router), based on the CV content
for Md. Armanul Islam, Front-End Developer.

## Stack

- Next.js 14 (App Router) + React 18
- Plain CSS (design tokens in `app/globals.css`, no Tailwind/UI kit dependency)
- `next/font/google` for Space Grotesk, Inter, and JetBrains Mono
- No external component libraries — everything is hand-built and easy to edit

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches font files from Google Fonts at build time,
> so an internet connection is required the first time you run `npm run dev`
> or `npm run build`.

## Project structure

```
app/
  layout.js       — root layout, fonts, metadata
  globals.css     — design tokens + all component styles
  page.js         — assembles the page from components
components/
  Nav.js          — sticky nav + mobile menu (client component)
  Hero.js         — hero section with browser-frame portrait
  About.js        — about + skills grid
  Experience.js   — experience timeline
  Projects.js     — filterable project grid (client component)
  Education.js    — education, training, achievements
  Contact.js      — contact panel
  Footer.js       — footer
  Reveal.js       — scroll-reveal wrapper (IntersectionObserver)
lib/
  data.js         — all content: skills, experience, projects, education, socials
public/
  armanul.jpg     — portrait used in the hero
```

## Things to update before publishing

- `lib/data.js` → `socials` object: replace the placeholder `#` links for
  LinkedIn, GitHub, and Portfolio with your real URLs.
- `lib/data.js` → `projects` array: each project's `href` is currently `#`.
  Point these at the real live sites / case studies.
- Swap `public/armanul.jpg` for a higher-resolution portrait if you have one.

## Deploying

This is a standard Next.js app, so it deploys as-is to Vercel, Netlify, or any
Node hosting. On Vercel: push to a GitHub repo, import it in Vercel, and it
will detect the Next.js app automatically.
