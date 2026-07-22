import type { BootcampTestimonio } from '@/config/site';
import { TestimonialCard } from '@/components/bootcamp/TestimonialCard';

interface TestimonialCarouselProps {
  testimonios: readonly BootcampTestimonio[];
}

/**
 * TestimonialCarousel — horizontal scroll-snap on mobile, static grid on
 * desktop. No JS controls needed: native scroll-snap keeps it light.
 */
export function TestimonialCarousel({ testimonios }: TestimonialCarouselProps) {
  return (
    <div
      className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0"
      role="list"
    >
      {testimonios.map((testimonio, i) => (
        <div
          key={i}
          role="listitem"
          className="w-[85%] shrink-0 snap-center md:w-auto md:shrink"
        >
          <TestimonialCard testimonio={testimonio} />
        </div>
      ))}
    </div>
  );
}
