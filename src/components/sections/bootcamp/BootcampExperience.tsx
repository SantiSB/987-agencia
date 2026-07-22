import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';
import type { IconName } from '@/lib/icons';

/**
 * BootcampExperience — "así se vive el día" beats. All items carry the same
 * visual weight (uniform cards); none is highlighted over the others.
 */
export function BootcampExperience() {
  const { experience } = site.bootcamp;

  return (
    <section className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {experience.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experience.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} variant="scaleIn">
              <article className="flex h-full flex-col gap-4 rounded-md border border-bootcamp-line bg-bootcamp-surface p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-bootcamp-line text-bootcamp-yellow">
                  <Icon name={item.icon as IconName} size={24} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg uppercase leading-tight text-bootcamp-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bootcamp-muted-dark">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
