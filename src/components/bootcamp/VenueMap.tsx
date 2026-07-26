import { Icon } from '@/components/primitives/Icon';
import { PhotoPlaceholder } from '@/components/bootcamp/PhotoPlaceholder';
import { site } from '@/config/site';

/**
 * VenueMap — venue photo (or placeholder), address, door-opening time and an
 * embedded Google Map. The map uses the keyless `output=embed` endpoint so no
 * API key or tracking script is needed (SEO/analytics are out of scope here).
 */
export function VenueMap() {
  const { venue } = site.bootcamp;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(venue.mapsQuery)}&output=embed`;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Photo + details */}
      <div className="flex flex-col gap-6">
        {venue.foto ? (
          <img
            src={venue.foto}
            alt={`Lugar del evento: ${venue.nombre}`}
            width={600}
            height={800}
            loading="lazy"
            decoding="async"
            // Source photo is a tall vertical shot of the tower (2:3) — a 16:9
            // crop was cutting off the "V1501 HOTEL" sign at the top. 3:4 +
            // object-top keeps the sign fully in frame and only trims some
            // greenery at the bottom.
            className="aspect-[3/4] w-full rounded-md object-cover object-top"
          />
        ) : (
          <PhotoPlaceholder ratio="video" label="Foto del lugar próximamente" />
        )}

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-bootcamp-line text-bootcamp-yellow">
              <Icon name="mapPin" size={18} />
            </span>
            <span>
              <span className="block font-display text-lg uppercase leading-none text-bootcamp-white">
                {venue.nombre}
              </span>
              <span className="mt-1 block text-sm text-bootcamp-muted-dark">
                {venue.direccion} · {venue.ciudad}
              </span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-bootcamp-line text-bootcamp-yellow">
              <Icon name="clock" size={18} />
            </span>
            <span className="block pt-2 text-sm text-bootcamp-white">{venue.aperturaPuertas}</span>
          </li>
        </ul>
      </div>

      {/* Embedded map */}
      <div className="overflow-hidden rounded-md border border-bootcamp-line">
        <iframe
          title={`Mapa de ${venue.nombre}, ${venue.ciudad}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[18rem] w-full"
        />
      </div>
    </div>
  );
}
