import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';

/**
 * BootcampPromise — the value proposition as a hard before/after contrast:
 * improvising and publishing blindly ("hoy") vs. selling with strategy
 * ("después del bootcamp"). The "después" column dominates visually.
 */
export function BootcampPromise() {
  const { promise } = site.bootcamp;

  return (
    <section className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-bootcamp-yellow">
            {promise.kicker}
          </span>
          <h2 className="mt-4 font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {promise.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Antes — muted */}
          <Reveal>
            <div className="h-full rounded-md border border-bootcamp-line bg-bootcamp-carbon p-6 md:p-8">
              <h3 className="font-display text-lg uppercase tracking-tight text-bootcamp-muted-dark">
                {promise.antesTitulo}
              </h3>
              <ul className="mt-5 space-y-4">
                {promise.antes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-bootcamp-muted-dark md:text-base">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-pill bg-bootcamp-muted-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Después — dominant */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-md border border-bootcamp-yellow/50 bg-bootcamp-surface p-6 shadow-glow-yellow md:p-8">
              <h3 className="font-display text-lg uppercase tracking-tight text-bootcamp-yellow">
                {promise.despuesTitulo}
              </h3>
              <ul className="mt-5 space-y-4">
                {promise.despues.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-bootcamp-white md:text-base">
                    <Icon
                      name="check"
                      size={18}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-bootcamp-yellow"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
