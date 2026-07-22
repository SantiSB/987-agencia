import { useEffect, useState } from 'react';
import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';
import type { BootcampPlan } from '@/config/site';
import {
  formatCOP,
  getCountdown,
  getPreventaStatus,
  priceForPlan,
  whatsappEnrollUrl,
  type CountdownParts,
} from '@/lib/bootcamp';
import { cn } from '@/lib/utils';

const COUNTDOWN_UNITS: { key: keyof CountdownParts; label: string }[] = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
];

function CountdownClock({ targetISO }: { targetISO: string }) {
  const [parts, setParts] = useState<CountdownParts>(() => getCountdown(targetISO));

  useEffect(() => {
    const id = window.setInterval(() => setParts(getCountdown(targetISO)), 1000);
    return () => window.clearInterval(id);
  }, [targetISO]);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5" role="timer" aria-live="off">
      {COUNTDOWN_UNITS.map((unit) => (
        <div key={unit.key} className="flex flex-col items-center gap-1">
          <span className="min-w-[2.5ch] font-display text-3xl text-bootcamp-white md:text-4xl">
            {String(parts[unit.key]).padStart(2, '0')}
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-bootcamp-white/60">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function PlanCard({ plan, preventaActive }: { plan: BootcampPlan; preventaActive: boolean }) {
  const price = priceForPlan(plan, preventaActive);

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-md border p-6 md:p-8',
        plan.featured
          ? 'border-bootcamp-yellow bg-bootcamp-surface shadow-[0_0_0_1px_rgba(245,197,24,0.4)]'
          : 'border-bootcamp-line bg-bootcamp-black',
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl uppercase text-bootcamp-white">{plan.name}</h3>
        {'badge' in plan && plan.badge && (
          <span className="rounded-sm bg-bootcamp-yellow px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-bootcamp-black">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="mt-6">
        {preventaActive && (
          <span className="block font-sans text-sm text-bootcamp-white/50 line-through">
            {formatCOP(plan.regularPrice)}
          </span>
        )}
        <span className="font-display text-4xl text-bootcamp-white md:text-5xl">
          {formatCOP(price)}
        </span>
        {preventaActive && (
          <span className="ml-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bootcamp-yellow">
            Preventa
          </span>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.includes.map((perk) => (
          <li key={perk} className="flex items-start gap-3 text-sm text-bootcamp-white/80">
            <Icon name="check" size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-bootcamp-yellow" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappEnrollUrl(plan.name)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-pill px-8 font-sans text-base font-semibold uppercase tracking-wide transition-all duration-200 ease-out active:scale-[0.98]',
          plan.featured
            ? 'bg-bootcamp-yellow text-bootcamp-black hover:opacity-90'
            : 'border border-bootcamp-white/40 text-bootcamp-white hover:bg-bootcamp-white hover:text-bootcamp-black',
        )}
      >
        <Icon name="whatsapp" size={18} />
        Quiero el plan {plan.name}
      </a>
    </article>
  );
}

/**
 * BootcampPricing (#precios) — General vs. VIP cards with live preventa
 * countdown. Preventa closes on whichever comes first: the deadline date or
 * the 40 early-bird seats selling out (brief §3). Payment gateway integration
 * is a pending brief item (§12), so enrollment routes to WhatsApp — matching
 * the "o a un formulario corto seguido de redirección a pago o WhatsApp" spec.
 */
export function BootcampPricing() {
  const { pricing, event } = site.bootcamp;
  const [status, setStatus] = useState(() => getPreventaStatus());

  useEffect(() => {
    const id = window.setInterval(() => setStatus(getPreventaStatus()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="precios" className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-bootcamp-yellow">
            Precios
          </span>
          <h2 className="mt-4 font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {pricing.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-white/70">{pricing.lead}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-md border border-bootcamp-line bg-bootcamp-surface px-6 py-8 text-center">
            {status.active ? (
              <>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-bootcamp-white/60">
                  La preventa cierra el {event.preventaDeadlineLabel} o al agotarse los cupos early
                  bird
                </p>
                <div className="mt-5">
                  <CountdownClock targetISO={event.preventaDeadlineISO} />
                </div>
                <p className="mt-5 font-sans text-sm text-bootcamp-white/70">
                  Quedan{' '}
                  <span className="font-semibold text-bootcamp-yellow">
                    {status.earlyBirdSeatsRemaining}
                  </span>{' '}
                  de {event.earlyBirdSeats} cupos early bird ·{' '}
                  <span className="font-semibold text-bootcamp-white">
                    {status.seatsRemaining}
                  </span>{' '}
                  cupos totales disponibles de {event.totalSeats}
                </p>
              </>
            ) : (
              <>
                <p className="font-display text-xl uppercase text-bootcamp-white">
                  {status.earlyBirdSoldOut ? 'Cupos early bird agotados' : 'Preventa cerrada'}
                </p>
                <p className="mt-2 font-sans text-sm text-bootcamp-white/70">
                  Precio regular vigente ·{' '}
                  <span className="font-semibold text-bootcamp-white">
                    {status.seatsRemaining}
                  </span>{' '}
                  cupos disponibles de {event.totalSeats}
                </p>
              </>
            )}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pricing.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.1 + i * 0.1} variant="scaleIn">
              <PlanCard plan={plan} preventaActive={status.active} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
