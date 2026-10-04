# Shivendra | Portfolio

A personal developer portfolio for **Shivendra**, a B.Tech Information Technology
undergraduate at **NIT Jalandhar**. Built as a single-page React app with a
terminal-inspired dark theme, a green accent, and scroll-triggered animations.

The site presents a hero intro, an about section, a tech-stack grid, featured
projects, and contact details — all wired to a live light/dark toggle that
remembers your choice.

## Features

- **Light/dark theme** — dark by default, persisted to `localStorage`, with an
  inline script in `index.html` so there's no flash of the wrong theme on load.
- **Themeable design tokens** — every colour is driven by CSS custom properties
  exposed to Tailwind through `@theme inline`, so the whole palette re-themes
  from one place (`src/index.css`).
- **Scroll animations** — built on Framer Motion via two small reusable
  primitives: `AnimatedSection` (fade/slide on enter) and
  `StaggerContainer`/`StaggerItem` (sequential reveals).
- **Responsive nav** — sticky desktop bar that collapses to a hamburger menu on
  mobile.
- **Zero UI dependencies for brand icons** — GitHub/LinkedIn/X marks are local
  SVGs in `BrandIcons.jsx`, since `lucide-react` v1 dropped brand icons.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 (`@theme inline` tokens) |
| Animation | Framer Motion |
| Icons | lucide-react + local SVGs |
| Linting | ESLint 9 (flat config) |

## Getting Started

```bash
npm install     # install dependencies
npm run dev     # start dev server on http://localhost:5173
npm run build   # production build to dist/
npm run preview # serve the production build locally
npm run lint    # run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        sticky nav + mobile menu + theme toggle
│   ├── Hero.jsx          hero intro, socials, CTA buttons
│   ├── About.jsx         about copy, current focus, education
│   ├── Skill.jsx         tech-stack grid by category
│   ├── Project.jsx       featured project cards
│   ├── Contact.jsx       contact cards + location
│   ├── Footer.jsx        footer
│   ├── Animated.jsx      fade/slide-on-scroll primitive
│   ├── Stagger.jsx       staggered-reveal primitives
│   ├── Theme_Toggle.jsx  light/dark switch
│   └── BrandIcons.jsx    local brand SVG icons
├── index.css             design tokens, theme variables, utilities
├── App.jsx               section composition
└── main.jsx              React entry point
```

## Theming

Change the palette by editing the `:root, .dark` and `.light` blocks in
`src/index.css`. Each colour is defined as bare HSL channels (e.g.
`--primary: 142 72% 50%`) and consumed as `hsl(var(--primary))`, which keeps
Tailwind opacity modifiers like `bg-primary/10` working via `color-mix()`.

## Contact

- GitHub — <https://github.com/Shivendra-20>
- LinkedIn — <https://www.linkedin.com/in/shivendra-pawaiya-879708323/>
- X — <https://x.com/Shivendra_1034>
- Email — <shivendrapawaiya978@gmail.com>