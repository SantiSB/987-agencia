import { Reveal } from '@/components/primitives/Reveal';
import { SectionHeading } from '@/components/primitives/SectionHeading';
import { site } from '@/config/site';
import type { TeamMember } from '@/config/site';

/** Two-letter initials for the avatar placeholder. */
function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col rounded-md border border-ink-600 bg-ink-800 p-6 transition-all duration-200 hover:border-accent hover:shadow-glow-accent">
      <div className="flex items-center gap-4">
        {/* Avatar placeholder — theme-token gradient + initials */}
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-pill font-display text-lg text-bone-50"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-600))',
          }}
          aria-hidden
        >
          {initials(member.name)}
        </span>
        <div>
          <h3 className="font-display text-xl uppercase leading-none text-bone-50">
            {member.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent-300">{member.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bone-300">{member.bio}</p>
    </article>
  );
}

/**
 * About (#nosotros) — split layout: the "¿Quiénes somos?" statement on the left,
 * the team grid on the right. Alternating ink background for section rhythm.
 */
export function About() {
  const { about } = site;

  return (
    <section id="nosotros" className="bg-ink py-section text-bone-100">
      <div className="mx-auto grid w-full max-w-[80rem] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: statement */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              kicker="Nosotros"
              onDark
              title={
                <>
                  ¿Quiénes{' '}
                  <span className="font-accent lowercase italic text-accent">somos</span>?
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone-300 md:text-lg">
              {about.text}
            </p>
          </Reveal>
        </div>

        {/* Right: team grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {about.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08} variant="scaleIn">
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
