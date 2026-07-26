import { Reveal } from '@/components/primitives/Reveal';
import { TestimonialCarousel } from '@/components/bootcamp/TestimonialCarousel';
import { site } from '@/config/site';

/**
 * BootcampSocialProof (§5.12) — testimonial carousel trust beat.
 */
export function BootcampSocialProof() {
  const { testimonios, pruebaSocial } = site.bootcamp;

  return (
    <section className="bg-bootcamp-carbon py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[72rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.5rem,4.5vw,2.5rem)]">
            {pruebaSocial.testimoniosHeading}
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-10">
          <TestimonialCarousel testimonios={testimonios} />
        </Reveal>
      </div>
    </section>
  );
}
