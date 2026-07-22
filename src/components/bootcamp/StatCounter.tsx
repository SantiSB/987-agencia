import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface StatCounterProps {
  /** Raw value from site.ts — may be a number, "73%", or "PLACEHOLDER". */
  value: string;
  label: string;
}

/**
 * Splits a value like "1.2k+" into a leading number and its suffix so only the
 * number animates. Returns nulls when there is no number to count (e.g.
 * "PLACEHOLDER"), in which case the raw value renders statically.
 */
function parseValue(value: string): { target: number | null; suffix: string; prefix: string } {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!match) return { target: null, suffix: '', prefix: '' };
  const target = Number(match[2].replace(/[.,]/g, ''));
  if (Number.isNaN(target)) return { target: null, suffix: '', prefix: '' };
  return { prefix: match[1], target, suffix: match[3] };
}

/**
 * StatCounter — big display number that counts up when it scrolls into view.
 * Falls back to the static value under prefers-reduced-motion or when the
 * value has no number to animate (placeholders stay as-is).
 */
export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const { target, suffix, prefix } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (target === null || prefersReducedMotion || !inView) return;
    const duration = 1200;
    let raf = 0;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = window.requestAnimationFrame(step);
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [inView, target, prefersReducedMotion]);

  const rendered =
    target === null
      ? value
      : `${prefix}${(prefersReducedMotion ? target : display).toLocaleString('es-CO')}${suffix}`;

  return (
    <div ref={ref} className="text-center">
      <span className="block font-display text-4xl leading-none text-bootcamp-yellow md:text-6xl">
        {rendered}
      </span>
      <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-bootcamp-muted-dark md:text-sm">
        {label}
      </span>
    </div>
  );
}
