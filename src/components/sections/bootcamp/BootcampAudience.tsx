import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';

/**
 * BootcampAudience (#para-quien-es) — "¿Para quién es?" vs. "¿Para quién NO
 * es?". The "sí" column (yellow checks) visually dominates; the "no" column is
 * deliberately muted with grey crosses so the qualification reads clearly.
 */
export function BootcampAudience() {
  const { paraQuien } = site.bootcamp;

  return (
    <section id="para-quien-es" className="bg-bootcamp-carbon py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {paraQuien.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-muted-dark md:text-lg">
            {paraQuien.lead}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Sí — dominant */}
          <Reveal>
            <div className="h-full rounded-md border border-bootcamp-yellow/40 bg-bootcamp-surface p-6 md:p-8">
              <h3 className="font-display text-xl uppercase tracking-tight text-bootcamp-yellow">
                {paraQuien.siTitulo}
              </h3>
              <ul className="mt-6 space-y-3">
                {paraQuien.si.map((profile) => (
                  <li key={profile} className="flex items-center gap-3 text-sm text-bootcamp-white md:text-base">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-bootcamp-yellow text-bootcamp-black">
                      <Icon name="check" size={14} strokeWidth={2.5} />
                    </span>
                    <span>{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* No — muted */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-md border border-bootcamp-line bg-bootcamp-black/40 p-6 md:p-8">
              <h3 className="font-display text-xl uppercase tracking-tight text-bootcamp-muted-dark">
                {paraQuien.noTitulo}
              </h3>
              <ul className="mt-6 space-y-3">
                {paraQuien.no.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-bootcamp-muted-dark md:text-base">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill border border-bootcamp-line text-bootcamp-muted-dark">
                      <Icon name="close" size={13} strokeWidth={2.5} />
                    </span>
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
