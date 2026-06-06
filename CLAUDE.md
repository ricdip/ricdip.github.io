# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for a Backend Developer. Single-page layout with anchor sections, built from scratch as a rewrite of a previous Astro project.

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Language**: English only (i18n not planned for now)
- **Deploy**: GitHub Pages via GitHub Actions (`push` to `main` → build → publish `dist/`)

## Common Commands

Once the project is scaffolded:

```bash
npm install          # install dependencies
npm run dev          # start dev server
npm run build        # production build (output: dist/)
npm run preview      # preview production build locally
```

## Personal Info

- **Full name**: Riccardo Armando Di Prinzio

## Architecture

Single-page Astro site with anchor-based navigation. Sections (in order):

1. **Hero** — name, "Backend Developer", tagline, CTA buttons (download CV + contact)
2. **About** — background narrative (university → current job), languages spoken
3. **Experience** — current company (intern → backend dev) + university thesis internship
4. **Skills** — categorized table (main vs. know/have used)
5. **Projects** — personal and thesis projects
6. **Education** — Laurea Triennale, Laurea Magistrale, Master I livello
7. **Certifications** — discrete section with Udemy certifications
8. **Contact** — GitHub, LinkedIn, email

The CV PDF is not yet created; the CTA buttons in Hero and Contact are placeholders until it exists.

## Style

- **Theme**: dark/light mode toggle; default follows system preference (`prefers-color-scheme`)
- **Aesthetic**: technical, modern developer feel — monospace font for accent elements, clean sections with sharp separators
- **Palette**: neutral grays (Tailwind Slate/Zinc) + one accent color (to be decided after scaffolding)

## Deployment

- GitHub Actions workflow at `.github/workflows/deploy.yml` (official Astro workflow)
- `astro.config.mjs` must have `site` set to `https://ricdip.github.io`
- GitHub Pages source must be set to "GitHub Actions" in repo settings
