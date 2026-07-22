import { Reveal } from '@/components/primitives/Reveal';
import { SpeakerCard } from '@/components/bootcamp/SpeakerCard';
import { site } from '@/config/site';

/**
 * BootcampTeam (#equipo) — "conoce a tu equipo" with photo-slot SpeakerCards.
 * Credibility matters here because the VIP plan leans on the 1:1 with Paola.
 * Photos are pending, so cards render elegant monogram placeholders.
 */
export function BootcampTeam() {
  const { team } = site.bootcamp;

  return (
    <section id="equipo" className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[72rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {team.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-muted-dark">{team.lead}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} variant="scaleIn" className="h-full">
              <SpeakerCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
