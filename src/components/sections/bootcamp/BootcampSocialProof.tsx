import { Reveal } from '@/components/primitives/Reveal';
import { StatCounter } from '@/components/bootcamp/StatCounter';
import { TestimonialCarousel } from '@/components/bootcamp/TestimonialCarousel';
import { GalleryStrip } from '@/components/bootcamp/GalleryStrip';
import { site } from '@/config/site';

/**
 * BootcampSocialProof (§5.12) — three trust beats in sequence: agency metrics
 * (count-up on view), a testimonial carousel, and an event photo strip. All
 * content is placeholder-driven and degrades gracefully until real data lands.
 */
export function BootcampSocialProof() {
  const { metricas, testimonios, galeria, pruebaSocial } = site.bootcamp;

  return (
    <section className="bg-bootcamp-carbon py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[72rem] px-6 md:px-10">
        {/* Metrics */}
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.5rem,4.5vw,2.5rem)]">
            {pruebaSocial.metricasHeading}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {metricas.map((metric) => (
              <StatCounter key={metric.label} value={metric.valor} label={metric.label} />
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal className="mt-20 text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.5rem,4.5vw,2.5rem)]">
            {pruebaSocial.testimoniosHeading}
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-10">
          <TestimonialCarousel testimonios={testimonios} />
        </Reveal>

        {/* Gallery */}
        <Reveal className="mt-20 text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.5rem,4.5vw,2.5rem)]">
            {pruebaSocial.galeriaHeading}
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-10">
          <GalleryStrip items={galeria} />
        </Reveal>
      </div>
    </section>
  );
}
