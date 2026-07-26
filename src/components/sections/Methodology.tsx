import { Reveal } from '@/components/primitives/Reveal';
import { SectionHeading, Boxed } from '@/components/primitives/SectionHeading';
import { site } from '@/config/site';

/**
 * Methodology (#metodologia) — cream section. The three steps render as editorial
 * rows: giant section number, boxed title, description and a line icon. Rows
 * reveal in a staggered sequence (Reveal + incremental delay).
 */
export function Methodology() {
  const { methodology } = site;

  return (
    <section id="metodologia" className="bg-bone py-section">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            kicker="Metodología"
            title={
              <>
                Cómo lo <span className="font-accent lowercase italic text-accent">hacemos</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14">
          {methodology.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <article className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-4 border-t border-bone-300 py-10 md:gap-x-12 md:py-12">
                {/* Big number */}
                <span className="font-display leading-none text-accent text-[clamp(2.5rem,8vw,5.5rem)]">
                  {step.n}
                </span>

                {/* Title + copy */}
                <div className="min-w-0">
                  <h3 className="font-display text-2xl uppercase leading-[1.35] md:text-4xl">
                    <Boxed tone="ink">{step.title}</Boxed>
                  </h3>
                  <p className="mt-4 max-w-xl text-base text-muted md:text-lg">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
