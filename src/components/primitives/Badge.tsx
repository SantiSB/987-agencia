import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type BadgeTone = 'ink' | 'accent' | 'bone' | 'outline';

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

/**
 * Badge — the brand's "chip" element (kicker labels, small tags).
 * Square-ish, uppercase, high contrast. Reused for kickers across sections.
 */
export function Badge({ children, tone = 'ink', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-sm px-3 py-1',
        'font-sans text-xs font-semibold uppercase tracking-[0.18em]',
        tone === 'ink' && 'bg-ink text-bone-50',
        tone === 'accent' && 'bg-accent text-bone-50',
        tone === 'bone' && 'bg-bone-50 text-ink',
        tone === 'outline' && 'border border-current bg-transparent text-current',
        className,
      )}
    >
      {children}
    </span>
  );
}
