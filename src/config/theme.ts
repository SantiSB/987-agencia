/**
 * theme.ts — SINGLE SOURCE OF TRUTH for all design tokens.
 *
 * Everything visual (colors, fonts, spacing, radii, shadows) is declared here
 * and consumed in two places:
 *   1. tailwind.config.ts  → maps these tokens to Tailwind utilities
 *      (bg-bone, text-ink, text-accent, font-display, rounded-pill, …)
 *   2. styles/global.css    → emits the same tokens as CSS custom properties on
 *      :root, so runtime consumers (Three.js materials, dynamic styles) read the
 *      exact same values.
 *
 * Change a token here and the whole site re-themes. Do NOT hardcode hex/px in
 * components — always go through a Tailwind class mapped to a token below.
 */

export const colors = {
  bone: {
    DEFAULT: '#E9E6DD', // main light background (like the brand's posts)
    50: '#F4F2EC',
    100: '#EDEBE3',
    300: '#D8D4C7', // hairlines / borders on cream
  },
  ink: {
    DEFAULT: '#0B0B0B', // near-pure black (dark sections, text on cream)
    800: '#161616',
    600: '#242424',
  },
  accent: {
    // MAGENTA — brand accent. Use with restraint (CTAs, underlines, 3D light).
    DEFAULT: '#E5146E',
    600: '#C40E5C',
    300: '#F06CA1',
    glow: 'rgba(229,20,110,0.55)', // rim / emissive in 3D
  },
  gold: '#C4A24B', // secondary accent, minimal use (details / hover)
  muted: '#6C6B63', // secondary text on cream
  // Bootcamp 978 event sub-brand — black/white/yellow, distinct from the main
  // rose/cream/black identity per the event brief. Scoped to /bootcamp only.
  bootcamp: {
    black: '#0A0A0A',
    white: '#FFFFFF',
    yellow: '#F5C518',
    surface: '#151515',
    line: '#2A2A2A',
  },
} as const;

export const fontFamily = {
  display: ['Anton', 'sans-serif'],
  sans: ['Archivo', 'system-ui', 'sans-serif'],
  accent: ['"Instrument Serif"', 'Georgia', 'serif'],
} as const;

export const spacing = {
  // Vertical rhythm for section padding — consistent across the whole site.
  section: '7rem',
  'section-sm': '4.5rem',
  gutter: '1.5rem',
} as const;

export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '10px',
  pill: '9999px',
} as const;

export const boxShadow = {
  // Subtle editorial shadows + a magenta glow for CTAs / hovers.
  hairline: '0 1px 0 0 rgba(11,11,11,0.08)',
  soft: '0 8px 30px -12px rgba(11,11,11,0.25)',
  card: '0 20px 60px -24px rgba(11,11,11,0.35)',
  'glow-accent': '0 0 0 1px rgba(229,20,110,0.35), 0 12px 40px -8px rgba(229,20,110,0.55)',
} as const;

/**
 * Aggregated token object. Imported by tailwind.config.ts and by the CSS-var
 * generator so both layers stay in lockstep.
 */
export const theme = {
  colors,
  fontFamily,
  spacing,
  borderRadius,
  boxShadow,
} as const;

export type Theme = typeof theme;
