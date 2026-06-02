# Portfolio Plan

## Tech Stack
- **Framework**: Astro
- **Style**: Minimal/technical
- **Language**: English only
- **Layout**: Single page with anchor sections

## Sections (in order)
1. **Hero** — Name, "Backend Developer", short tagline, CTA (download CV + contact)
2. **About** — Who you are, university → current job journey, passions
3. **Experience** — Current job (intern → backend dev progression) + university experiences
4. **Skills** — See table below
5. **Projects** — See list below
6. **Education** — See list below
7. **Contact** — GitHub, LinkedIn, email

---

## Experience

### Current Company (2023 - present)
- **Backend Developer** (~2.5 years) — Java, Spring Boot, Docker
- **Fullstack Developer Intern** (~2 months) — Spring Boot, Angular

---

## Skills

| Category | Main | Know/Have used |
|----------|------|----------------|
| **Backend** | Java, Spring Boot | Go, Python, Rust, PHP/Laravel |
| **Database** | PostgreSQL, Redis | MongoDB, OracleDB, SQL Server |
| **DevOps/CI** | Docker, Docker Compose | Kubernetes, Jenkins |
| **Build Tools** | Maven, Make | Justfile |
| **Systems/OS** | Linux (Ubuntu, Debian, Arch, NixOS), Nix | Windows |
| **Mobile** | | Android/Kotlin, React Native |
| **Frontend** | | Angular, Astro, TypeScript, JavaScript |
| **Data/ML** | | NumPy, Pandas, Jupyter, Scikit-learn |
| **Tools** | Git, Claude Code | |

---

## Projects

- **Bachelor's Thesis** — Android
- **Master's Thesis** — Android + Spring Boot
- **DnD Dice Interpreter** — parser for DnD dice notation
- **Toy Language Interpreter** — built following a book
- **Chip8 Emulator** — written in Java
- **Spring Boot Example App** — *(planned, to be added in the future)*

> Note: a university research collaboration project (Go, Redis, Docker, Python) was excluded — closed source and unpublished.

---

## Education

- **Master I livello** — Mobile & Web Technologies
- **Laurea Magistrale** — Informatica
- **Laurea Triennale** — Informatica

---

## Extra

- **Downloadable PDF CV** — CTA in Hero and Contact sections (to be created later)

---

## Deployment

- **Platform**: GitHub Pages
- **CI/CD**: GitHub Actions with official Astro workflow (`.github/workflows/deploy.yml`)
- **Trigger**: push on `main` branch → `npm install` + `npm run build` → publish `dist/`
- **Astro config**: `site` field in `astro.config.mjs` set to `https://tuousername.github.io`
- **GitHub setting**: Pages source must be set to "GitHub Actions" in repo settings
- **Repo**: existing `tuousername.github.io` repo (to be configured later)

---

## Open Decisions

- [x] Tailwind (over Bootstrap — full control, lighter, native Astro integration)
- [x] New Astro project from scratch (old project outdated)
- [x] No blog section — Astro supports it natively via Content Collections, can be added later if needed
- [ ] i18n (English only vs English + Italian) — if needed, evaluate astro-i18next or i18next; adds editorial maintenance overhead
