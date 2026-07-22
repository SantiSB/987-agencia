import { site, WHATSAPP_URL } from '@/config/site';
import type { BootcampPlan } from '@/config/site';

export interface PreventaStatus {
  /** True while preventa pricing still applies (deadline not passed AND early-bird seats left). */
  active: boolean;
  /** Seats left out of the event's total capacity. */
  seatsRemaining: number;
  /** Seats left out of the early-bird allotment. */
  earlyBirdSeatsRemaining: number;
  deadlinePassed: boolean;
  earlyBirdSoldOut: boolean;
}

/**
 * Preventa closes on whichever comes first: the deadline date or the 40
 * early-bird seats selling out (brief §3). `soldSeats` is the single source
 * for both counters until the CRM/payment integration in the brief's
 * pending items (§11–12) ships.
 */
export function getPreventaStatus(now: Date = new Date()): PreventaStatus {
  const { event } = site.bootcamp;
  const deadline = new Date(event.preventaDeadlineISO);
  const deadlinePassed = now.getTime() >= deadline.getTime();
  const earlyBirdSeatsRemaining = Math.max(event.earlyBirdSeats - event.soldSeats, 0);
  const earlyBirdSoldOut = earlyBirdSeatsRemaining === 0;
  const seatsRemaining = Math.max(event.totalSeats - event.soldSeats, 0);

  return {
    active: !deadlinePassed && !earlyBirdSoldOut,
    seatsRemaining,
    earlyBirdSeatsRemaining,
    deadlinePassed,
    earlyBirdSoldOut,
  };
}

export function priceForPlan(plan: Pick<BootcampPlan, 'regularPrice' | 'preventaPrice'>, preventaActive: boolean): number {
  return preventaActive ? plan.preventaPrice : plan.regularPrice;
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
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

/** WhatsApp deep-link pre-filled with an enrollment message for a given plan. */
export function whatsappEnrollUrl(planName: string): string {
  const message = `Hola, quiero inscribirme al plan ${planName} del Bootcamp 978 (Marketing a la Mano).`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
