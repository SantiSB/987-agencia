import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';

/**
 * BootcampStickyCta — fixed bottom bar keeping the enrollment CTA visible at
 * all times, especially on mobile (brief §11 "elementos de conversión
 * obligatorios"). Pure CSS positioning, no client state needed.
 */
export function BootcampStickyCta() {
  const { event, hero } = site.bootcamp;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bootcamp-yellow/30 bg-bootcamp-black/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[64rem] items-center justify-between gap-4 px-4 py-3 md:px-10">
        <div className="min-w-0">
          <p className="truncate font-display text-sm uppercase tracking-tight text-bootcamp-white md:text-base">
            {event.name} · {event.dateLabel}
          </p>
          <p className="hidden text-xs text-bootcamp-white/60 sm:block">{event.venue}, {event.city}</p>
        </div>
        <a
          href={hero.ctaPrimary.href}
          className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-pill bg-bootcamp-yellow px-5 font-sans text-sm font-semibold uppercase tracking-wide text-bootcamp-black transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          {hero.ctaPrimary.label}
          <Icon name="arrowRight" size={16} />
        </a>
      </div>
    </div>
  );
}
