This is the [Next.js](https://nextjs.org) site for Triumph Web Works, a conversion-first web studio for high-value service businesses.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 — design tokens defined in `src/app/globals.css`
- [GSAP](https://gsap.com/) for custom/illustrative animation
- [Recharts](https://recharts.org/) for data-driven charts
- [Lucide](https://lucide.dev/) icons

## Design system

- Colors, radius scale, and font tokens live in `src/app/globals.css` (`@theme`).
- Shared visual-system constants (stroke width, GSAP easing/durations, JS color values) live in `src/lib/design-system.ts`.
- Fonts (Forum for headings, Inter for body) are loaded via `next/font/google` in `src/app/layout.tsx`.

## Deploy

Deployed on [Vercel](https://vercel.com/new).
