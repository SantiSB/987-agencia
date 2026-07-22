import { Reveal } from '@/components/primitives/Reveal';
import { Marquee } from '@/components/primitives/Marquee';
import { FloatingGlyph } from '@/components/three/FloatingGlyph';
import { site } from '@/config/site';

/**
 * Manifesto (#manifiesto) — ink section with a single oversized statement.
 * Display type for the setup line, an italic serif accent for the payoff, and a
 * subtle keyword marquee. A light 3D glyph floats in the corner.
 */
export function Manifesto() {
  const { manifesto } = site;

  return (
    <section
      id="manifiesto"
      className="relative overflow-hidden bg-ink py-section text-bone-100"
    >
      {/* Decorative 3D accent */}
      <FloatingGlyph
        shape="octahedron"
        onDark
        className="absolute -right-10 top-10 h-48 w-48 opacity-70 md:h-72 md:w-72"
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-6 md:px-10">
        <Reveal variant="revealMask" className="mx-auto max-w-5xl text-center">
          <p className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(2rem,7vw,5.25rem)]">
            {manifesto.line}{' '}
            <span className="font-accent lowercase italic text-accent">
              {manifesto.emphasis}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <Marquee
            items={manifesto.keywords}
            className="border-y border-ink-600 py-4 text-bone-300"
            itemClassName="text-[clamp(1.25rem,3vw,2rem)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
