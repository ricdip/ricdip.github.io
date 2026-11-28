# ricdip.github.io

Personal portfolio site of **Riccardo Armando Di Prinzio**, Backend Developer.

A single-page site with anchor-based navigation (Hero, What I work on,
Experience, Education, Certifications, Skills, Projects, About, Contact), a
dark/light theme that follows the system preference, and a technical,
monospace-accented aesthetic.

Live at **https://ricdip.github.io**.

## Tech stack

- [Astro](https://astro.build) **5.x** (pinned to `^5.0.0` - see note below)
- [Tailwind CSS v4](https://tailwindcss.com) via the `@tailwindcss/vite` plugin
  (CSS-first config, no `tailwind.config`)
- TypeScript (strict)
- Self-hosted fonts via [Fontsource](https://fontsource.org) - Inter + JetBrains Mono
- Deployed to GitHub Pages via GitHub Actions

> **Note - Astro is pinned to 5.x.** Astro 7+ uses the native `rolldown` bundler,
> which requires CPU instructions (AVX2) not available on the dev machine and
> crashes the build. Astro 5 + Vite 8 uses rollup (JS) and works fine. See
> [`AGENTS.md`](./AGENTS.md) for details.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:4321
npm run build   # production build -> dist/
npm run preview # preview the production build locally
npm run og      # regenerate the social share image -> public/og.png
```

A [Nix](https://nixos.org) dev shell is also available:

```bash
nix develop ./devshell          # default Node.js
nix develop ./devshell#nodejs22 # specific Node.js version
```

## Editing content

All site content (experience, skills, projects, education, certifications,
about, contact...) lives in a single typed module: **`src/data/content.ts`**.
The `.astro` components just map over that data, so content changes never touch
the markup - edit `content.ts` only.

## Project structure

```text
src/
├── data/content.ts      # all site content (single source of truth)
├── layouts/Base.astro   # <head>, no-FOUC theme script, Header/Footer
├── components/          # reusable primitives (Section, Badge, buttons, ThemeToggle...)
├── sections/            # page-level sections, in document order
├── lib/                 # shared helpers (button styles)
├── assets/              # images optimized by astro:assets
├── styles/global.css    # Tailwind v4 + theme tokens (zinc + amber accent)
└── pages/index.astro    # assembles the single page

scripts/generate-og.mjs # generates the Open Graph image (npm run og)
public/og.png           # generated social share image (1200x630)
```

## Social share image

The Open Graph / Twitter card image (`public/og.png`, 1200x630) is a
typography-only cover generated from the site's own brand fonts by
`scripts/generate-og.mjs`. Edit the copy or palette constants at the top of that
script, then run `npm run og` and commit the regenerated PNG.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`, built on the official `withastro/action`), which
builds the site and publishes `dist/` to GitHub Pages.

Repository **Settings -> Pages -> Source** must be set to **"GitHub Actions"**.

See [`AGENTS.md`](./AGENTS.md) for conventions and guidance.
