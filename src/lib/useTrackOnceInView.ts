import { useEffect, useRef } from 'react';
import { trackOnce, type PixelEvent } from '@/lib/pixel';

/**
 * useTrackOnceInView — fires a pixel event the first time the returned ref's
 * element scrolls into view, once per session.
 *
 * Same IntersectionObserver shape as useAtFooter (including the negative bottom
 * rootMargin, so the section has to be meaningfully in view and not just one
 * pixel in), with two additions: it disconnects on the first hit, and the
 * session lock lives in trackOnce — which is what keeps the two PricingBlock
 * instances on /bootcamp from counting ViewContent twice.
 */
export function useTrackOnceInView<T extends HTMLElement>(
  key: string,
  event: PixelEvent,
  params?: Record<string, unknown>,
) {
  const ref = useRef<T>(null);
  // Kept in a ref so an inline params object doesn't re-create the observer.
  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        trackOnce(key, event, paramsRef.current);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -15% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [key, event]);

  return ref;
}
