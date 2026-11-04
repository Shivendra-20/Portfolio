# Shivendra | Portfolio

My personal developer portfolio, built with React and Vite. It has a terminal-inspired dark theme, a green accent, and scroll animations.

Live sections: Hero, About, Skills, Projects, and Contact.

Live URL : https://shivendra-pawaiya.vercel.app

## Features

- Light/dark theme (dark by default, saved in `localStorage`)
- Scroll animations with Framer Motion
- Responsive navbar with a mobile menu
- Local SVG brand icons (GitHub, LinkedIn, X)

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- lucide-react

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
│   ├── Navbar.jsx        navbar + mobile menu + theme toggle
│   ├── Hero.jsx          hero intro, socials, CTA buttons
│   ├── About.jsx         about copy, current focus, education
│   ├── Skill.jsx         tech-stack grid
│   ├── Project.jsx       featured project cards
│   ├── Contact.jsx       contact links + location
│   ├── Footer.jsx        footer
│   ├── Animated.jsx      fade/slide-on-scroll helper
│   ├── Stagger.jsx       staggered reveal helper
│   ├── Theme_Toggle.jsx  light/dark switch
│   └── BrandIcons.jsx    local brand SVG icons
├── index.css             theme tokens and utilities
├── App.jsx               section composition
└── main.jsx              React entry point
```

## Theming

All colors are CSS variables in `src/index.css`. Edit the `:root, .dark` and `.light` blocks to change the palette.

## Contact

- GitHub: https://github.com/Shivendra-20
- LinkedIn: https://www.linkedin.com/in/shivendra-pawaiya-879708323/
- X: https://x.com/Shivendra_1034
- Email: shivendrapawaiya978@gmail.com
