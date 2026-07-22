import type { BootcampTeamMember } from '@/config/site';
import { PhotoPlaceholder } from '@/components/bootcamp/PhotoPlaceholder';

/** Monogram from the speaker's name, used while real photos are pending. */
function monogram(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
}

interface SpeakerCardProps {
  member: BootcampTeamMember;
}

/**
 * SpeakerCard — speaker tile with a photo slot. While `foto` is null it shows
 * an elegant monogram-over-gradient placeholder (via PhotoPlaceholder) instead
 * of a broken image, then name, role and a short bio.
 */
export function SpeakerCard({ member }: SpeakerCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-bootcamp-line bg-bootcamp-surface transition-all duration-200 hover:-translate-y-1 hover:border-bootcamp-yellow/60">
      {member.foto ? (
        <img
          src={member.foto}
          alt={`${member.name} — ${member.role}`}
          width={400}
          height={533}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover"
        />
      ) : (
        <PhotoPlaceholder ratio="portrait" label="Foto próximamente" className="rounded-none border-0 border-b border-bootcamp-line">
          <span className="font-display text-5xl text-bootcamp-yellow/70" aria-hidden>
            {monogram(member.name)}
          </span>
        </PhotoPlaceholder>
      )}

      <div className="flex flex-1 flex-col gap-1 p-5">
        <h3 className="font-display text-lg uppercase leading-tight text-bootcamp-white">
          {member.name}
        </h3>
        <p className="text-xs uppercase tracking-[0.14em] text-bootcamp-yellow">{member.role}</p>
        {member.bio && (
          <p className="mt-2 text-sm leading-relaxed text-bootcamp-muted-dark">{member.bio}</p>
        )}
      </div>
    </article>
  );
}
