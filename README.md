# 978 Agencia — Landing (demo)

High-fidelity, design-focused demo landing page for **978 Agencia** (marketing &
advertising, Pasto – Nariño – Colombia). Brutalist-editorial look: huge condensed
type, cream/black rhythm, magenta accent, and a WebGL centerpiece.

> Visual demo. Forms are **simulated** (no backend).

## Stack

- **Astro 7** — static output, islands architecture
- **React 19** islands — `@astrojs/react` (powers Framer Motion + R3F)
- **TypeScript** (strict)
- **Tailwind CSS v4** — via `@tailwindcss/vite`, driven 100% by tokens
- **Framer Motion** — scroll reveals, stagger, hover, marquee
- **React Three Fiber** (`three`, `@react-three/fiber`, `drei`,
  `postprocessing`) — hero 3D + section accents

## Requirements

- **Node 22.12+** (Astro 7 requires it). A `.node-version` file pins `22.22.3`
  for `fnm` / `nvm` users — run `fnm use` (or `nvm use`) in the folder.
- **pnpm** only. `pnpm-lock.yaml` is the source of truth; do not use npm/yarn.

## Commands

```bash
pnpm install      # install deps
pnpm dev          # dev server → http://localhost:4321
pnpm build        # production build to dist/
pnpm preview      # preview the build
pnpm exec astro check   # strict type-check (uses TypeScript 5.x)
```

## Architecture

```
src/
├── config/
│   ├── theme.ts      # ⭐ SINGLE SOURCE OF TRUTH for design tokens
│   └── site.ts       # ALL copy/content (data-driven, typed)
├── styles/global.css # Tailwind entry + tokens as CSS vars + base styles
├── lib/
│   ├── utils.ts          # cn() + cssVar() (read tokens at runtime)
│   ├── animations.ts     # reusable Framer Motion variants
│   ├── icons.ts          # SVG path data (single source)
│   └── useThreeCapability.ts  # 3D gate: reduced-motion / mobile / dpr
├── components/
│   ├── primitives/   # Button, Badge, SectionHeading (+Boxed), Marquee,
│   │                 #   Reveal, Icon, Container.astro  — reused everywhere
│   ├── three/        # HeroScene → HeroCanvas (lazy), FloatingGlyph, SceneFallback
│   ├── layout/       # Navbar.tsx, Footer.astro
│   └── sections/     # Hero.astro, Manifesto/Methodology/About/Contact.tsx
├── layouts/BaseLayout.astro  # <head>, fonts, SEO/OG, JSON-LD
└── pages/index.astro         # composes the sections in order
```

**Rules**

- **Astro by default**, React only for interactivity/animation. Islands hydrate
  with `client:load` (Navbar) or `client:visible` (sections + 3D).
- **Reusable primitives** — no duplicated styles. Button styling lives in one
  `buttonClasses()`; the "boxed word" look in one `<Boxed>`; icons in one `Icon`.
- **Data-driven** — sections read from `site.ts`, never hardcoded strings.

## Theming — change the whole site from one file

`src/config/theme.ts` is the single source of truth. It feeds two layers:

1. **`tailwind.config.ts`** imports `theme.ts` and maps tokens to utilities
   (`bg-bone`, `text-ink`, `text-accent`, `font-display`, `rounded-pill`, …).
   Tailwind v4 loads this classic config via `@config` in `global.css`.
2. **`global.css`** mirrors the same tokens as CSS custom properties on `:root`
   (`--color-accent`, …) — the runtime source the 3D layer reads via `cssVar()`.

To re-theme:

```ts
// src/config/theme.ts
export const colors = {
  accent: { DEFAULT: '#E5146E', /* … */ },  // change magenta → new brand color
  bone:   { DEFAULT: '#E9E6DD', /* … */ },
  ink:    { DEFAULT: '#0B0B0B', /* … */ },
};
```

Then **mirror the changed value** in the `:root` block of
`src/styles/global.css` (so Three.js materials pick it up). Tailwind utilities
update automatically. Fonts, spacing (`p-section`), radii and shadows work the
same way.

## 3D behavior (performance & a11y)

- `prefers-reduced-motion` → static `SceneFallback` poster, no WebGL loop.
- Small / low-power devices → reduced particle density + lower `dpr` cap; bloom
  postprocessing is skipped on mobile.
- The heavy three/drei/postprocessing bundle is **lazy-loaded client-only**, so
  it never blocks SSR or the hero headline (LCP).

## Logo / assets

Placeholders live in `public/logo/` — see `public/logo/README.md` for how to
swap in the official brand files.
