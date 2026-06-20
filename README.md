# Anshidha Thayyil — Portfolio

An immersive 3D glassmorphism portfolio website for **Anshidha Thayyil**, a Computer Science & Engineering student and Front-End Developer.

## Tech Stack

- **React 18** + **Vite** + **TypeScript**
- **Three.js** via **@react-three/fiber** and **@react-three/drei** for the immersive 3D background
- **TailwindCSS** for styling with custom glass-effect utilities
- **Framer Motion** for all 2D animations (fade-up, hover, floating)
- **lucide-react** for icons

## Features

- **Immersive 3D background** — floating glass orbs, torus knots, particle field, and a starfield rendered with React Three Fiber
- **Glassmorphism UI** — frosted glass cards with backdrop-blur on every section
- **Animated gradient name** — shifting lavender-to-blue gradient text
- **Real project showcase** — three actual projects with live screenshot images and GitHub links
- **Full personal data** — education, tech stack, experience, and all 8 certifications
- **Sections**: Hero, About, Projects, Contact
- **Fully responsive** — 1 column on mobile, 2 on tablet, 3 on desktop for projects
- **Performance** — lazy-loaded 3D scene, lazy-loaded images, optimized rendering

## Getting Started

```bash
npm install
npm run dev
```

Open the local dev server URL shown in your terminal.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Root composition with 3D background
├── index.css                 # Tailwind + glass utilities
├── data.ts                   # All personal data (single source of truth)
└── components/
    ├── Scene3D.tsx           # Three.js immersive background
    ├── Hero.tsx              # Hero section with profile image
    ├── AboutSection.tsx      # Education, tech stack, experience, certifications
    ├── ProjectsSection.tsx  # 3 real project cards
    └── ContactSection.tsx    # Contact info + social links
```

## Personal Data

All personal information (name, email, phone, projects, certifications, social links) lives in `src/data.ts`. Update that single file to change any content across the site.
