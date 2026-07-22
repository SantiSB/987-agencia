import { Reveal } from '@/components/primitives/Reveal';
import { VenueMap } from '@/components/bootcamp/VenueMap';
import { site } from '@/config/site';

/**
 * BootcampVenue (§5.13) — where the event happens: venue photo/placeholder,
 * address, door-opening time and an embedded map.
 */
export function BootcampVenue() {
  const { venue } = site.bootcamp;

  return (
    <section id="lugar" className="bg-bootcamp-black py-section-sm text-bootcamp-white">
      <div className="mx-auto w-full max-w-[72rem] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display uppercase leading-[0.95] tracking-tight text-[clamp(1.75rem,5vw,3rem)]">
            {venue.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <VenueMap />
        </Reveal>
      </div>
    </section>
  );
}
