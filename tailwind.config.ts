import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

/**
 * tailwind.config.ts — maps design tokens from `src/config/theme.ts` onto
 * Tailwind utilities. This file is loaded by Tailwind v4 through the
 * `@config "../../tailwind.config.ts"` directive in `src/styles/global.css`.
 *
 * We deliberately keep the token definitions in theme.ts (a plain TS module the
 * 3D layer and CSS-var generator can also import) and only *reference* them here.
 * That keeps a single source of truth: editing theme.ts re-themes every utility.
 */
const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        display: [...theme.fontFamily.display],
        sans: [...theme.fontFamily.sans],
        accent: [...theme.fontFamily.accent],
      },
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      boxShadow: theme.boxShadow,
    },
  },
  plugins: [],
};

export default config;
