import { Reveal } from '@/components/primitives/Reveal';
import { ValueStack } from '@/components/bootcamp/ValueStack';
import { BonusCard } from '@/components/bootcamp/BonusCard';
import { site } from '@/config/site';

/**
 * BootcampValue — the real-value / stack close (§5.10): the itemized value
 * anchor followed by the bonus cards, framing the preventa price as a bargain.
 */
export function BootcampValue() {
  const { bonos } = site.bootcamp;

  return (
    <section className="bg-bootcamp-carbon py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal>
          <ValueStack />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {bonos.map((bono, i) => (
            <Reveal key={bono.etiqueta} delay={i * 0.1} variant="scaleIn">
              <BonusCard bono={bono} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
