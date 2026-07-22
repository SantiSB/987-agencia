import { createElement, useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { variantMap, type VariantKey } from '@/lib/animations';

/** Semantic tags this wrapper can render as (all exist on the motion proxy). */
type MotionTagName =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'footer'
  | 'ul'
  | 'li'
  | 'p'
  | 'span';

interface RevealProps {
  children: ReactNode;
  /** Which reusable variant to play. Defaults to fadeUp. */
  variant?: VariantKey;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Render as a different element (section, li, span…). Defaults to div. */
  as?: MotionTagName;
  className?: string;
  /** Viewport amount (0–1) before triggering. */
  amount?: number;
  /** Re-trigger on every entry instead of once. */
  once?: boolean;
}

/**
 * Reveal — the single scroll-reveal wrapper used across the site.
 *
 * FAIL-SAFE by design: content is rendered fully visible in the SSR HTML and
 * until the component hydrates. Only after hydration does it swap to the
 * animated motion element (initial "hidden" → whileInView "visible").
 *
 * Because the sections hydrate with `client:visible` (i.e. when they scroll into
 * view), that swap coincides with entering the viewport — so the reveal still
 * plays during normal browsing, while full-page screenshots, fast scrolls,
 * reduced-motion and no-JS all keep the content visible. It can never get stuck
 * at opacity:0.
 *
 * We access the motion component via the `motion[tag]` proxy (not the deprecated
 * `motion(tag)` factory) so no console deprecation warnings fire.
 */
export function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  as = 'div',
  className,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  // SSR / pre-hydration / reduced motion → render statically in the final,
  // visible state. Content is guaranteed to be on screen.
  if (prefersReducedMotion || !hydrated) {
    return createElement(as, { className }, children);
  }

  const MotionTag = motion[as];
  const variants: Variants = variantMap[variant];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
