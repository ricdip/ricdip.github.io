# Portfolio Plan

## Tech Stack
- **Framework**: Astro
- **Style**: Minimal/technical, modern developer aesthetic
- **Language**: English only
- **Layout**: Single page with anchor sections

---

## Sections (in order)
1. **Hero** — Name, "Backend Developer", short tagline, CTA (download CV + contact)
2. **About** — Who you are, university → current job journey, passions, languages
3. **Experience** — Current job (intern → backend dev progression) + university experiences
4. **Skills** — See table below
5. **Projects** — See list below
6. **Education** — See list below
7. **Certifications** — Udemy certifications (discrete section)
8. **Contact** — GitHub, LinkedIn, email

> Languages are included inside the About section, not as a separate section.

---

## Personal Info

- **Full name**: Riccardo Armando Di Prinzio

---

## Experience

### Smart Shaped Software, Pescara

- **Backend Developer** (01/2024–present) — Hired by Smart Shaped Software as an external consultant for Tinexta Cyber. Java, Spring Boot, Docker, Docker Compose, microservices
- **Fullstack Developer Intern** (11/2023–01/2024) — Spring Boot, Angular, Docker, Docker Compose, Kubernetes

### University of L'Aquila

- **Master's Thesis Internship** (11/2020–12/2020) — Laravel (server), React Native (client)

---

## Skills

| Category | Main | Know/Have used |
|----------|------|----------------|
| **Backend** | Java, Spring Boot | Go, Python, Rust, PHP/Laravel |
| **Database** | PostgreSQL, Redis | MongoDB, OracleDB, SQL Server |
| **DevOps/CI** | Docker, Docker Compose | Kubernetes, Jenkins |
| **Build Tools** | Maven, Make | Justfile |
| **Systems/OS** | Linux (Ubuntu, Debian, Arch, NixOS), Nix | Windows, Proxmox |
| **Mobile** | | Android/Kotlin, React Native |
| **Frontend** | | Angular, Astro, TypeScript, JavaScript |
| **Data/ML** | | NumPy, Pandas, Jupyter, Scikit-learn |
| **Tools** | Git, Claude Code | |

---

## Projects

- **Master's Thesis — Piedibus Group Management System** — Android (Kotlin) + Spring Boot, iBeacon, Firebase, RESTful APIs. Three apps: admin web, tutor mobile, parent mobile. Features: real-time GPS tracking, geofencing alerts. Closed source.
- **Bachelor's Thesis — Casa Tracking Android App** — Android (Java), PHP, Firebase. Outdoor tracking for cognitively disabled individuals. Features: Google Maps, geofencing, SOS, SMS notifications. Closed source.
- **DnD Dice Interpreter** — parser for DnD dice notation
- **Toy Language Interpreter** — built following a book
- **Chip8 Emulator** — written in Java
- **Spring Boot Example App** — *(planned, to be added in the future)*

> Note: a university research collaboration project (Go, Redis, Docker, Python) and RCP project (ROS2, Docker, Python, Redis) were excluded — closed source and unpublished.

---

## Education

- **Master I livello** — Mobile & Web Technologies, University of L'Aquila (2019–2020), 70/70 with honors
- **Laurea Magistrale** — Informatica, University of L'Aquila (2018–2022), 110/110 with honors
- **Laurea Triennale** — Informatica, University of L'Aquila (2013–2018), 101/110

---

## Certifications

- GitLab & CI/CD (27 May 2024) — Udemy
- The Git & GitHub Bootcamp (20 May 2024) — Udemy
- Master Microservices with Spring Boot and Spring Cloud (28 Nov 2023) — Udemy

---

## Languages

- Italian (native)
- English (B2)
- Spanish (B2)
- French (B1)

> Placed inside the About section.

---

## Extra

- **Downloadable PDF CV** — CTA in Hero and Contact sections (to be created later)

---

## Style

- **Theme**: Dark/light mode toggle; default follows system preference (`prefers-color-scheme`)
- **Aesthetic**: Technical, modern developer feel — monospace font for accent elements, clean sections with sharp separators
- **Palette**: To be decided after scaffolding (Tailwind preset: neutral grays + one accent color)

---

## Deployment

- **Platform**: GitHub Pages
- **CI/CD**: GitHub Actions with official Astro workflow (`.github/workflows/deploy.yml`)
- **Trigger**: push on `main` branch → `npm install` + `npm run build` → publish `dist/`
- **Astro config**: `site` field in `astro.config.mjs` set to `https://ricdip.github.io`
- **GitHub setting**: Pages source must be set to "GitHub Actions" in repo settings

---

## Open Decisions

- [x] Tailwind (over Bootstrap — full control, lighter, native Astro integration)
- [x] New Astro project from scratch (old project outdated)
- [x] No blog section — can be added later via Astro Content Collections
- [x] English only (i18n not planned for now)
- [x] Dark/light mode toggle, default follows system preference
- [x] Certifications section included (discrete)
- [x] Languages included (About or Contact)
- [x] Master's thesis internship included in Experience
- [x] Publication excluded (didn't work out)
- [x] RCP project excluded (closed source, unpublished)
- [x] High school diploma — omitted
- [x] Languages placement — inside About section
- [ ] Palette accent color — decide after scaffolding
