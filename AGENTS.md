# AGENTS.md

Guidance for coding agents (Claude Code and others) working in this repository.
`CLAUDE.md` is a symlink to this file, so both read the same content.

## Project

Personal portfolio site for a Backend Developer. Single-page layout with
anchor-based navigation, built from scratch as a rewrite of a previous Astro
project. English only.

## Tech Stack

- **Framework**: Astro **5.x** (pinned to `^5.0.0` — do NOT upgrade to Astro 7+)
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin. CSS-first
  config in `src/styles/global.css` (`@import "tailwindcss"`, `@theme`,
  `@custom-variant`) — there is no `tailwind.config` file.
- **Fonts**: self-hosted via Fontsource — Inter (body) + JetBrains Mono (accent).
- **Language**: TypeScript (strict).
- **Deploy**: GitHub Pages via GitHub Actions (`push` to `main` → build → publish `dist/`).

> **Why Astro 5, not 7+**: Astro 7 forces the native `rolldown` bundler, which uses
> CPU SIMD instructions (AVX2) unsupported by the dev machine — `astro build`/`dev`
> crash with "Illegal instruction (core dumped)". Astro 5 + Vite 8 bundles with
> rollup (JS) instead and runs fine. Tailwind v4's native binaries
> (`lightningcss`, `@tailwindcss/oxide`) are compatible and kept. Keep Astro on
> `^5.0.0` until the machine supports AVX2 or rolldown ships a baseline build.

## Common Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server (localhost:4321)
npm run build        # production build (output: dist/)
npm run preview      # preview production build locally
```

A Nix dev shell is available: `nix develop ./devshell` (or `./devshell#nodejsNN`).

## Content model

All site content lives in **`src/data/content.ts`** as typed data (single source
of truth). Section components only `.map()` over this data — do not hardcode copy
in the `.astro` markup. To edit text, skills, projects, etc., change `content.ts`.

## Architecture

Single page (`src/pages/index.astro`) composing section components in order:

1. **Hero** — name, "Backend Developer", tagline, "Get in touch" CTA
2. **What I work on** (`Focus`) — 3 cards: Backend, Microservices & modular monoliths, Containers
3. **Experience** — roles with activity bullets + tech badges
4. **Education** — degrees (English titles), grades, thesis titles
5. **Certifications** — Udemy courses with content + duration
6. **Skills** — categorized table (main vs. know/have used)
7. **Projects** — personal + thesis projects (GitHub links where open source)
8. **About** — background narrative, Linux passion, personal interests, languages
9. **Contact** — GitHub, LinkedIn, obfuscated email, "Request CV"

Directory layout:
- `src/layouts/Base.astro` — html/head, no-FOUC theme script, Header/Footer
- `src/components/` — reusable primitives (`Section`, `Badge`, `CtaButton`,
  `CvButton`, `ThemeToggle`, `Header`, `Footer`)
- `src/sections/` — page-level sections, used once, in document order
- `src/lib/buttonStyles.ts` — shared button classes (used by Cta/Cv buttons)
- `src/data/content.ts` — all content
- `src/assets/` — images optimized by `astro:assets` (e.g. profile photo)

## Conventions

- **Theme**: dark/light toggle; default follows system preference
  (`prefers-color-scheme`). Inline no-FOUC script in `Base.astro` sets the `.dark`
  class before paint; `ThemeToggle` persists the choice in `localStorage`.
- **Palette**: Zinc neutrals + an **amber** accent. Exposed as `accent` /
  `accent-strong` utility colors (`--color-accent*` in `global.css`). Use
  `text-accent-strong` on light backgrounds and `dark:text-accent` on dark, to
  keep contrast.
- **Email**: never rendered in plaintext — assembled client-side from
  `site.emailUser` / `site.emailDomain` to deter scrapers.
- **CV**: not hosted for public download. The "Request CV" button (Contact)
  opens a prefilled email; the CV is sent manually on request.

## Deployment

- Workflow: `.github/workflows/deploy.yml` (official `withastro/action`).
- `astro.config.mjs` has `site: 'https://ricdip.github.io'` and **no `base`**
  (user/org site served at the domain root).
- GitHub Pages source must be set to "GitHub Actions" in repo settings.
- Deploy triggers on push to `main`.

## Astro documentation

Full docs: https://docs.astro.build — see guides on
[components](https://docs.astro.build/en/basics/astro-components/),
[styling/Tailwind](https://docs.astro.build/en/guides/styling/), and
[images](https://docs.astro.build/en/guides/images/).
