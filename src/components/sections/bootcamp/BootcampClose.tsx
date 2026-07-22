import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { CountdownTimer } from '@/components/bootcamp/CountdownTimer';
import { site } from '@/config/site';
import { checkoutUrl, whatsappQuestionUrl } from '@/lib/bootcamp';

/**
 * BootcampClose (§5.16) — high-contrast final close that replaces the old form.
 * Two CTAs only: buy (→ PassTix) and a question (→ WhatsApp, info only). No
 * data is captured here; purchase happens on PassTix.
 */
export function BootcampClose() {
  const { cierre, urgencia } = site.bootcamp;

  return (
    <section className="relative overflow-hidden border-t border-bootcamp-yellow/30 bg-bootcamp-black py-section text-bootcamp-white">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[24rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_110%,var(--color-bootcamp-glow),transparent)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(2rem,6vw,3.5rem)]">
            {cierre.titulo}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-bootcamp-white/70 md:text-lg">
            {cierre.subtitulo}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <CountdownTimer
            targetDate={urgencia.fechaCierrePreventa}
            variant="compacto"
            label={cierre.countdownLabel}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={checkoutUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-pill bg-bootcamp-yellow px-8 font-sans text-base font-semibold uppercase tracking-wide text-bootcamp-black transition-all duration-200 ease-out hover:bg-bootcamp-yellow-600 active:scale-[0.98]"
            >
              {cierre.ctaPrimaryLabel}
              <Icon name="arrowRight" size={18} />
            </a>
            <a
              href={whatsappQuestionUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-pill border border-bootcamp-white/40 px-8 font-sans text-base font-semibold uppercase tracking-wide text-bootcamp-white transition-all duration-200 ease-out hover:bg-bootcamp-white hover:text-bootcamp-black active:scale-[0.98]"
            >
              <Icon name="whatsapp" size={18} />
              {cierre.ctaSecondaryLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
