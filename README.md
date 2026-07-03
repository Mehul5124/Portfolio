# Mehul Balsara — Portfolio

React + Vite portfolio with Framer Motion animations and a canvas-based neural network hero.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy

**Vercel:** import this folder as a project, framework preset "Vite" — it will auto-detect `npm run build` and `dist/`. No config needed.

**Netlify:** same — build command `npm run build`, publish directory `dist`.

## Before you ship

- Replace `your-email@example.com` in `src/components/Contact.jsx` with your real email (it appears twice).
- Project data lives in `src/components/Projects.jsx` if you want to edit descriptions or add new repos.
- Skill levels live in `src/components/Skills.jsx`.
