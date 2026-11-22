// Single source of truth for all portfolio content.
// Section components import from here and map over the data — no hardcoded copy
// lives in the .astro markup. Edit content here only.

export interface NavLink {
  label: string;
  href: string;
}

export interface Focus {
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface SkillRow {
  category: string;
  main: string[];
  familiar: string[];
}

export interface Project {
  name: string;
  summary: string;
  tech: string[];
  closedSource?: boolean;
  planned?: boolean;
  url?: string;
}

export interface EducationItem {
  title: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
  thesis?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  content: string;
  duration: string;
}

export interface Language {
  name: string;
  level: string;
}

export const site = {
  name: "Riccardo Armando Di Prinzio",
  role: "Backend Developer",
  tagline:
    "Backend developer building microservice-based systems with Java and Spring Boot.",
  aboutNarrative: [
    "Hi, I'm Riccardo. Computer science and technology have been my passion for as long as I can remember — it's what drove me to earn a Master's degree in Computer Science and a first-level Master in Mobile & Web Technologies at the University of L'Aquila.",
    "I got into programming and software development early on, and I've been building with modern web and mobile technologies ever since, including Spring Boot, Android, and Angular.",
    "Today I work as a Backend Developer at Smart Shaped Software (Pescara), as an external consultant for Tinexta Cyber. I work mainly with Java and Spring Boot, building microservice-based applications with Docker, and I've used Keycloak for identity and access management.",
    "Beyond work, I'm a long-time Linux enthusiast — I run it daily across several distributions (Ubuntu, Debian, Arch, NixOS), enjoy Nix, and like tinkering with and self-hosting my own setups.",
    "Away from the keyboard, I'm into anime and manga, play Dungeons & Dragons, and I'm currently learning to play the guitar.",
  ],
  // The CV is never hosted for public download — it's sent by email on request.
  github: "https://github.com/ricdip",
  linkedin: "https://www.linkedin.com/in/riccardo-armando-di-prinzio",
  // Obfuscated to deter scrapers: assembled client-side from these parts, never
  // present as a complete address in the HTML source. TODO: fill with the real
  // personal address (user + domain, e.g. "name" + "gmail.com").
  emailUser: "riccardoarmando.diprinzio",
  emailDomain: "gmail.com",
} as const;

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const focus: Focus[] = [
  {
    title: "Backend Development",
    description:
      "Designing and building backend services and REST APIs with Java and Spring Boot.",
  },
  {
    title: "Microservices & modular monoliths",
    description:
      "Designing and building microservice-based systems and modular monoliths.",
  },
  {
    title: "Containers",
    description:
      "Packaging and running applications with Docker and Docker Compose.",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Smart Shaped Software",
    location: "Pescara, Italy",
    role: "Backend Developer",
    period: "01/2024 – present",
    description:
      "Hired by Smart Shaped Software as an external consultant for Tinexta Cyber, working on backend microservices.",
    highlights: [
      "Developing backend applications with the Java Spring Boot framework.",
      "Building microservice-based applications with Docker and Docker Compose.",
    ],
    tech: ["Java", "Spring Boot", "Docker", "Docker Compose", "Microservices"],
  },
  {
    company: "Smart Shaped Software",
    location: "Pescara, Italy",
    role: "Fullstack Developer Intern",
    period: "11/2023 – 01/2024",
    description:
      "Internship on fullstack development, later converted into a backend developer role.",
    highlights: [
      "Developing backend applications with the Java Spring Boot framework.",
      "Developing frontend applications with the Angular framework.",
      "Building microservice-based applications with Docker, Docker Compose and Kubernetes.",
    ],
    tech: ["Spring Boot", "Angular", "Docker", "Docker Compose", "Kubernetes"],
  },
  {
    company: "University of L'Aquila",
    location: "L'Aquila, Italy",
    role: "Master's Thesis Internship",
    period: "11/2020 – 12/2020",
    description:
      "100-hour internship during the First-Level Master, focused on server- and client-side development for the Univaq application.",
    highlights: [
      "Developed the News and Categories sections on a Laravel server.",
      "Developed the News and Categories sections on a React Native client.",
      "Built a REST API to retrieve all categories and news, optionally filtered by category.",
    ],
    tech: ["Laravel", "React Native", "REST APIs"],
  },
];

export const skills: SkillRow[] = [
  {
    category: "Backend",
    main: ["Java", "Spring Boot", "OpenAPI"],
    familiar: ["Go", "Python", "Rust", "PHP/Laravel"],
  },
  {
    category: "Spring ecosystem",
    main: ["Spring Data JPA", "QueryDSL", "Spring Security"],
    familiar: ["Spring Cloud"],
  },
  {
    category: "Database",
    main: ["PostgreSQL", "OracleDB", "SQL Server"],
    familiar: ["MongoDB", "MariaDB"],
  },
  {
    category: "Messaging",
    main: ["Redis"],
    familiar: ["MQTT"],
  },
  {
    category: "Security",
    main: ["Keycloak", "Spring Security"],
    familiar: [],
  },
  {
    category: "DevOps/CI",
    main: ["Docker", "Docker Compose"],
    familiar: ["Kubernetes", "Jenkins"],
  },
  {
    category: "Testing & Quality",
    main: ["JUnit", "SonarQube"],
    familiar: [],
  },
  {
    category: "Build Tools",
    main: ["Maven", "Justfile"],
    familiar: ["Make"],
  },
  {
    category: "Systems/OS",
    main: ["Linux (Ubuntu, Debian, Arch, NixOS)", "Nix"],
    familiar: ["Windows", "Proxmox"],
  },
  {
    category: "Mobile",
    main: [],
    familiar: ["Android/Kotlin", "React Native"],
  },
  {
    category: "Frontend",
    main: [],
    familiar: ["Angular", "Astro", "TypeScript", "JavaScript"],
  },
  {
    category: "Data/ML",
    main: [],
    familiar: ["NumPy", "Pandas", "Jupyter", "Scikit-learn"],
  },
  {
    category: "Tools",
    main: [
      "Git",
      "IntelliJ IDEA",
      "VS Code",
      "Neovim",
      "DBeaver",
      "Postman",
      "Claude Code",
    ],
    familiar: [],
  },
];

export const projects: Project[] = [
  {
    name: "Master's Thesis — Walking Bus Group Management System",
    summary:
      "Group management system with three apps (admin web, tutor mobile, parent mobile): real-time GPS tracking and geofencing alerts via iBeacon.",
    tech: ["Android (Kotlin)", "Spring Boot", "iBeacon", "Firebase", "REST APIs"],
    closedSource: true,
  },
  {
    name: "Bachelor's Thesis — Casa Tracking Android App",
    summary:
      "Outdoor tracking app for cognitively disabled individuals: Google Maps, geofencing, SOS and SMS notifications.",
    tech: ["Android (Java)", "PHP", "Firebase", "Google Maps"],
    closedSource: true,
  },
  {
    name: "D&D Dice Interpreter",
    summary:
      "A Java interpreter for Dungeons & Dragons dice notation, with a recursive-descent/Pratt parser that rolls all dice (d4–d100) and evaluates arithmetic with correct precedence.",
    tech: ["Java", "Interpreter", "Pratt parsing"],
    url: "https://github.com/ricdip/DiceRoller",
  },
  {
    name: "Toy Language Interpreter",
    summary:
      "A tree-walking interpreter for a small language, written in Java: integers, booleans, strings, arrays, variables and operators with precedence.",
    tech: ["Java", "Interpreter", "Pratt parsing"],
    url: "https://github.com/ricdip/SimpleInterpreter",
  },
  {
    name: "CHIP-8 Emulator",
    summary:
      "A CHIP-8 virtual machine in Java — all 35 opcodes, 64×32 display, stack and timers — running ROMs from a configurable CLI.",
    tech: ["Java", "Emulation", "Virtual machine"],
    url: "https://github.com/ricdip/java-chip8",
  },
  {
    // Working name — may change before release.
    name: "Mediary",
    summary:
      "A modular-monolith Spring Boot application to track your progress through anime, manga and TV series — marking episodes and chapters as watched or read — with Keycloak-based authentication.",
    tech: ["Java", "Spring Boot", "Modular monolith", "Keycloak"],
    planned: true,
  },
];

export const education: EducationItem[] = [
  {
    title: "First-Level Master",
    field: "Mobile & Web Technologies",
    institution: "University of L'Aquila",
    period: "2019 – 2020",
    grade: "70/70 cum laude",
  },
  {
    title: "Master's Degree",
    field: "Computer Science",
    institution: "University of L'Aquila",
    period: "2018 – 2022",
    grade: "110/110 cum laude",
    thesis:
      "Design and development of a system for managing walking bus groups.",
  },
  {
    title: "Bachelor's Degree",
    field: "Computer Science",
    institution: "University of L'Aquila",
    period: "2013 – 2018",
    grade: "101/110",
    thesis:
      "Development of an Android app for outdoor tracking of people with cognitive disabilities.",
  },
];

export const certifications: Certification[] = [
  {
    name: "GitLab & CI/CD",
    issuer: "Udemy",
    date: "27 May 2024",
    content: "GitLab and CI/CD",
    duration: "3.5 hours",
  },
  {
    name: "The Git & GitHub Bootcamp",
    issuer: "Udemy",
    date: "20 May 2024",
    content: "Git and GitHub",
    duration: "17 hours",
  },
  {
    name: "Master Microservices with Spring Boot and Spring Cloud",
    issuer: "Udemy",
    date: "28 Nov 2023",
    content: "Spring Boot, Spring Cloud, Docker, Kubernetes and REST APIs",
    duration: "24.5 hours",
  },
];

export const languages: Language[] = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "B2" },
  { name: "Spanish", level: "B2" },
  { name: "French", level: "B1" },
];
