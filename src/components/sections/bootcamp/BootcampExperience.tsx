import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';
import type { IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';

/**
 * BootcampExperience — "así se vive el día" beats. The last item (Kit de
 * Arranque 978) is highlighted: the kit is now a named deliverable, not a
 * loose "surprise" line.
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
          {experience.items.map((item, i) => {
            const featured = i === experience.items.length - 1;
            return (
              <Reveal key={item.title} delay={i * 0.06} variant="scaleIn">
                <article
                  className={cn(
                    'flex h-full flex-col gap-4 rounded-md border p-6',
                    featured
                      ? 'border-bootcamp-yellow/60 bg-bootcamp-yellow/[0.05]'
                      : 'border-bootcamp-line bg-bootcamp-surface',
                  )}
                >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
