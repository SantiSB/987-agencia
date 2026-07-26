import type { BootcampTestimonio } from '@/config/site';
import { Icon } from '@/components/primitives/Icon';

/** Initials avatar fallback while testimonial photos are pending. */
function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
}

interface TestimonialCardProps {
  testimonio: BootcampTestimonio;
}

/**
 * TestimonialCard — quote card with a large decorative quotation mark, the
 * testimonial text, and an avatar + name/role. Uses initials while photos and
 * real testimonials are pending.
 */
export function TestimonialCard({ testimonio }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-bootcamp-line bg-bootcamp-surface p-6 md:p-7">
      <Icon name="quote" size={32} className="text-bootcamp-yellow/60" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-bootcamp-white/90 md:text-base">
        {testimonio.texto}
      </p>
      <div className="mt-6 flex items-center gap-3">
        {testimonio.foto ? (
          <img
            src={testimonio.foto}
            alt={testimonio.nombre}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-pill object-cover"
          />
        ) : (
          <span
            className="flex h-12 w-12 items-center justify-center rounded-pill bg-bootcamp-yellow font-display text-base text-bootcamp-black"
            aria-hidden
          >
            {initials(testimonio.nombre)}
          </span>
        )}
        <div>
          <p className="font-display text-sm uppercase leading-none text-bootcamp-white">
            {testimonio.nombre}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-bootcamp-muted-dark">
            {testimonio.rol}
          </p>
        </div>
      </div>
    </article>
  );
}
