import type { BootcampGaleriaItem } from '@/config/site';
import { PhotoPlaceholder } from '@/components/bootcamp/PhotoPlaceholder';

interface GalleryStripProps {
  items: readonly BootcampGaleriaItem[];
}

/**
 * GalleryStrip — horizontal photo strip with scroll-snap. Renders premium
 * placeholders until real event photos exist; swaps to <img> per item once the
 * `foto` field is populated.
 */
export function GalleryStrip({ items }: GalleryStripProps) {
  return (
    <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
      {items.map((item, i) => (
        <div key={i} className="w-64 shrink-0 snap-start md:w-72">
          {item.foto ? (
            <img
              src={item.foto}
              alt={item.alt}
              width={288}
              height={288}
              loading="lazy"
              className="aspect-square w-full rounded-md object-cover"
            />
          ) : (
            <PhotoPlaceholder ratio="square" label={item.alt} />
          )}
        </div>
      ))}
    </div>
  );
}
