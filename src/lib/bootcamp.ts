import { site, WHATSAPP_URL } from '@/config/site';
import type { BootcampPlan } from '@/config/site';
import { getAttributionParams } from '@/lib/pixel';

/**
 * bootcamp.ts — business logic for the /bootcamp landing, kept out of the UI
 * components. Handles the preventa window, price anchoring/savings math, the
 * countdown, and the PassTix checkout / WhatsApp-question deep links.
 */

/** Preventa is active until the cutoff date passes. Seat counts are never exposed as "X of X". */
export function isPreventaActive(now: Date = new Date()): boolean {
  const deadline = new Date(site.bootcamp.urgencia.fechaCierrePreventa);
  return now.getTime() < deadline.getTime();
}

export interface PlanPricing {
  /** Price the buyer pays now. */
  current: number;
  /** Anchor (post-preventa) price shown struck through. */
  anchor: number;
  /** Absolute saving vs. the anchor. */
  savingsAbs: number;
  /** Rounded percentage saving vs. the anchor. */
  savingsPct: number;
  preventaActive: boolean;
}

/**
 * Resolves what to display for a plan. The anchor is the real post-preventa
 * price (not an invented one), so the discount stays defensible under
 * Colombia's Ley 1480 (Estatuto del Consumidor).
 */
export function getPlanPricing(
  plan: Pick<BootcampPlan, 'precioAncla' | 'precioActual'>,
  now: Date = new Date(),
): PlanPricing {
  const preventaActive = isPreventaActive(now);
  const current = preventaActive ? plan.precioActual : plan.precioAncla;
  const savingsAbs = Math.max(plan.precioAncla - current, 0);
  const savingsPct = plan.precioAncla > 0 ? Math.round((savingsAbs / plan.precioAncla) * 100) : 0;
  return { current, anchor: plan.precioAncla, savingsAbs, savingsPct, preventaActive };
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Sum of the value-stack items — the honest anchor for the ValueStack close. */
export function totalValorStack(): number {
  return site.bootcamp.valorStack.items.reduce((sum, i) => sum + i.valor, 0);
}

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

export function getCountdown(targetISO: string, now: Date = new Date()): CountdownParts {
  const totalMs = Math.max(new Date(targetISO).getTime() - now.getTime(), 0);
  const seconds = Math.floor(totalMs / 1000) % 60;
  const minutes = Math.floor(totalMs / 1000 / 60) % 60;
  const hours = Math.floor(totalMs / 1000 / 60 / 60) % 24;
  const days = Math.floor(totalMs / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds, totalMs };
}

/** PassTix checkout URL for a plan id (payment happens on PassTix / Bold). */
export function checkoutUrl(planId: string): string {
  const { checkout } = site.bootcamp;
  return planId === 'vip' ? checkout.vip : checkout.general;
}

/**
 * Same checkout URL, plus the Meta attribution params (`fbclid`/`_fbp`/`_fbc`)
 * when they exist — our half of the bridge so PassTix can, later, credit the
 * sale to the ad that produced it.
 *
 * Client-only by nature (it reads the URL and cookies); on the server it just
 * returns the clean URL. `checkoutUrl()` above is deliberately left untouched
 * because the Event/Offer JSON-LD in bootcamp.astro is generated at build time
 * and must keep advertising the canonical, parameter-free URL.
 */
export function checkoutUrlWithAttribution(planId: string): string {
  const base = checkoutUrl(planId);
  const attribution = getAttributionParams();

  const entries = Object.entries(attribution);
  if (entries.length === 0) return base;

  try {
    const url = new URL(base);
    for (const [key, value] of entries) url.searchParams.set(key, value);
    return url.href;
  } catch {
    // Malformed base URL — better the plain link than a broken one.
    return base;
  }
}

/**
 * WhatsApp deep-link for INFORMATION only (buying happens on PassTix). The
 * pre-filled message is a question, never an enrollment.
 */
export function whatsappQuestionUrl(topic?: string): string {
  const base = 'Hola, tengo una pregunta sobre el Bootcamp 978';
  const message = topic ? `${base}: ${topic}` : `${base}.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
