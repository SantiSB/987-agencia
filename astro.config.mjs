// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//
// Stack notes:
// - Static output (default) — this is a high-fidelity marketing demo.
// - React island integration powers Framer Motion + React Three Fiber.
// - Tailwind v4 is wired through its official Vite plugin (@tailwindcss/vite),
//   the supported path for Astro 7. Design tokens still live in a classic
//   `tailwind.config.ts` that is loaded via `@config` inside global.css, so
//   `theme.ts` remains the single source of truth (see src/config/theme.ts).
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
