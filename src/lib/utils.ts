import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn — merge conditional class names and resolve Tailwind conflicts.
 * `cn('p-2', condition && 'p-4')` → 'p-4' (last-wins for conflicting utilities).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Read a design token from the :root CSS custom properties at runtime.
 * Used by the 3D layer so Three.js materials share the exact theme values.
 * Falls back to the provided default during SSR (no `window`).
 */
export function cssVar(name: string, fallback = ''): string {
  if (typeof window === 'undefined') return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
