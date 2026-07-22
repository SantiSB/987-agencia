import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type PlaceholderRatio = 'square' | 'video' | 'portrait' | 'wide';

const RATIO_CLASS: Record<PlaceholderRatio, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/6]',
};

interface PhotoPlaceholderProps {
  /** Discreet label describing what real asset will live here. */
  label?: string;
  ratio?: PlaceholderRatio;
  /** Optional centered mark (icon / monogram). */
  children?: ReactNode;
  className?: string;
}

/**
 * PhotoPlaceholder — the base for every image placeholder on the landing.
 * Reads as a deliberate design choice, not a broken image: subtle black→carbon
 * gradient, a faint 978 monogram, a thin accent frame and a discreet label.
 * Swap for a real <img> once assets arrive.
 */
export function PhotoPlaceholder({
  label,
  ratio = 'video',
  children,
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-md border border-bootcamp-yellow/20',
        'bg-[linear-gradient(135deg,var(--color-bootcamp-black)_0%,var(--color-bootcamp-carbon)_60%,var(--color-bootcamp-surface)_100%)]',
        RATIO_CLASS[ratio],
        className,
      )}
      role="img"
      aria-label={label ?? 'Imagen próximamente'}
    >
      {/* Faint monogram watermark */}
      <span
        className="pointer-events-none absolute font-display text-[7rem] leading-none text-bootcamp-white/[0.04] md:text-[10rem]"
        aria-hidden
      >
        978
      </span>

      {children && <div className="relative z-10 flex flex-col items-center gap-3">{children}</div>}

      {label && (
        <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-pill border border-bootcamp-line bg-bootcamp-black/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-bootcamp-muted-dark backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
