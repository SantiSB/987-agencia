import { Reveal } from '@/components/primitives/Reveal';
import { ValueStack } from '@/components/bootcamp/ValueStack';

/**
 * BootcampValue — the real-value / stack close (§5.10): the itemized value
 * anchor, framing the preventa price as a bargain.
 */
export function BootcampValue() {
  return (
    <section className="bg-bootcamp-carbon py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal>
          <ValueStack />
        </Reveal>
      </div>
    </section>
  );
}
