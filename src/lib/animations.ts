import type { Variants, Transition } from 'framer-motion';

/**
 * animations.ts — reusable Framer Motion variants.
 * Consumed via the <Reveal> primitive (viewport-triggered, once) and directly
 * by components for hover / stagger micro-interactions.
 *
 * Durations sit in the 0.4–0.8s range with an easeOut feel. All variants are
 * safe under prefers-reduced-motion because <Reveal> swaps to an instant, static
 * state when reduced motion is requested (see primitives/Reveal.tsx).
 */

export const EASE_OUT: Transition['ease'] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/**
 * Editorial "mask" reveal for big headlines: the line rises from a clipped
 * baseline. Uses transform + opacity (reliably animatable) rather than a
 * clip-path string, which Framer Motion can fail to interpolate.
 */
export const revealMask: Variants = {
  hidden: { opacity: 0, y: 40, skewY: 1.5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

/** Container that staggers its children in sequence. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Child element used inside a staggerContainer. */
export const staggerItem: Variants = fadeUp;

/** Map an animation key (string, data-driven friendly) to its variant. */
export const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  revealMask,
} as const;

export type VariantKey = keyof typeof variantMap;
