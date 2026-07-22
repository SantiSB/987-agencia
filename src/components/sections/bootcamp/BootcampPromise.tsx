import { Reveal } from '@/components/primitives/Reveal';
import { site } from '@/config/site';

/**
 * BootcampPromise — the "de la teoría a la aplicación inmediata" statement.
 * A single, large editorial line on black; the sales angle from the brief's
 * hero direction, kept as its own beat right after the hero.
 */
export function BootcampPromise() {
  const { promise } = site.bootcamp;

  return (
    <section className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-bootcamp-yellow">
            {promise.kicker}
          </span>
          <h2 className="mt-4 font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {promise.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bootcamp-white/70 md:text-lg">
            {promise.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
