import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import { site } from '@/config/site';

/**
 * BootcampAudience (#para-quien-es) — "¿Para quién es?" checklist. The brief
 * calls out a broad audience (brief §5), so this renders as a scannable grid
 * of checkmarked profiles instead of one generic paragraph.
 */
export function BootcampAudience() {
  const { audience } = site.bootcamp;

  return (
    <section id="para-quien-es" className="bg-bootcamp-surface py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {audience.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-white/70 md:text-lg">
            {audience.lead}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {audience.profiles.map((profile) => (
              <li
                key={profile}
                className="flex items-center gap-3 rounded-md border border-bootcamp-line bg-bootcamp-black px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-bootcamp-yellow text-bootcamp-black">
                  <Icon name="check" size={14} strokeWidth={2.5} />
                </span>
                <span className="font-sans text-sm text-bootcamp-white">{profile}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
