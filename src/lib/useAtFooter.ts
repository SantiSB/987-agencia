import { useEffect, useState } from 'react';

/**
 * useAtFooter — true once the page <footer> scrolls into view. The bootcamp's
 * fixed sticky CTA and WhatsApp float use it to retract instead of overlapping
 * (and "eating") the footer. Returns false during SSR / before the observer
 * attaches, so the fixed UI shows normally while scrolling the content.
 */
export function useAtFooter(): boolean {
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return atFooter;
}
