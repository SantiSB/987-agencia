import { Reveal } from '@/components/primitives/Reveal';
import { site } from '@/config/site';
import type { BootcampTeamMember } from '@/config/site';

/** Two-letter initials for the avatar placeholder (team photos are pending per the brief). */
function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
}

function TeamCard({ member }: { member: BootcampTeamMember }) {
  return (
    <article className="flex flex-col items-center gap-4 rounded-md border border-bootcamp-line bg-bootcamp-surface p-6 text-center transition-colors hover:border-bootcamp-yellow/60">
      <span
        className="flex h-16 w-16 items-center justify-center rounded-pill bg-bootcamp-yellow font-display text-xl text-bootcamp-black"
        aria-hidden
      >
        {initials(member.name)}
      </span>
      <div>
        <h3 className="font-display text-lg uppercase leading-tight text-bootcamp-white">
          {member.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-bootcamp-yellow">
          {member.role}
        </p>
      </div>
    </article>
  );
}

/**
 * BootcampTeam (#equipo) — "conoce a tu equipo" (brief §8), important for
 * credibility since the VIP plan's differentiator is a private session with
 * Paola. Photos are a pending brief item, so cards use initials avatars.
 */
export function BootcampTeam() {
  const { team } = site.bootcamp;

  return (
    <section id="equipo" className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[64rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {team.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-bootcamp-white/70">{team.lead}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} variant="scaleIn">
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
