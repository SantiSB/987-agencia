import { Reveal } from '@/components/primitives/Reveal';
import { site } from '@/config/site';

/**
 * BootcampAuthority — framing statistic on a contrasting cream band, followed
 * by the self-qualification line. The stat's source is a placeholder until
 * verified (see site.ts TODO); shown small so the claim stays honest.
 */
export function BootcampAuthority() {
  const { autoridad } = site.bootcamp;

  return (
    <section className="bg-bootcamp-cream py-section text-bootcamp-black">
      <div className="mx-auto w-full max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-baseline md:justify-center md:gap-6">
            <span className="font-display text-[clamp(4rem,14vw,9rem)] leading-none text-bootcamp-black">
              {autoridad.stat}
            </span>
            <p className="max-w-md text-left text-base text-bootcamp-muted-cream md:text-lg">
              {autoridad.statTexto}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-xl font-display text-2xl uppercase leading-tight tracking-tight text-bootcamp-black md:text-3xl">
            {autoridad.encuadre}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
