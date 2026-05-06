# Saud Mullaji — Portfolio

Personal portfolio website built with **Next.js**, **TypeScript**, and **TailwindCSS**.

🔗 **Live:** [portfolio-saud-xi.vercel.app](https://portfolio-saud-xi.vercel.app)

---

## Tech Stack

- [Next.js 15](https://nextjs.org) — React framework
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [TailwindCSS](https://tailwindcss.com) — Styling
- [Motion](https://motion.dev) — Animations
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [next-themes](https://github.com/pacocoursey/next-themes) — Dark / light / system theme

---

## Features

- Animated hero section with blur-in transitions
- Projects & Blog tabs with animated tab switching
- Hover image preview on project cards (desktop)
- Dark / light / system theme toggle
- Fully responsive — mobile to desktop
- Social links with smooth animations

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animated-tabs.tsx
│   ├── footer.tsx
│   ├── link.tsx
│   ├── project-card.tsx
│   ├── theme-provider.tsx
│   ├── themeToggle.tsx
│   └── ui/
├── constants/
│   ├── Social_Links.ts
│   ├── Project_Content.ts
│   └── Tab_Contents.ts
└── public/
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Any push to `master` triggers an automatic deployment.

---

Made with ❤️ by Saud Mullaji
