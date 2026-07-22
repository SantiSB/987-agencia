import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Boxed — the brand's signature "word inside a solid box" treatment
 * (e.g. MANEJAMOS, QUE VENDE, MEDIBLES). Reused wherever a word is boxed.
 */
export function Boxed({
  children,
  tone = 'ink',
  className,
}: {
  children: ReactNode;
  tone?: 'ink' | 'accent';
  className?: string;
}) {
  return (
    <span
      className={cn(
        // box-decoration-clone → each wrapped line gets its own solid box
        'box-decoration-clone inline px-[0.25em] leading-[1.25] rounded-sm',
        tone === 'ink' && 'bg-ink text-bone-50',
        tone === 'accent' && 'bg-accent text-bone-50',
        className,
      )}
    >
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  /** Small eyebrow label above the title. */
  kicker?: string;
  /** Optional giant section number (01., 02.…). */
  index?: string;
  title: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  /** Color context: 'dark' = light text (on ink), 'light' = dark text (on cream). */
  onDark?: boolean;
  className?: string;
}

/**
 * SectionHeading — consistent kicker + display title block used by every section.
 * Enforces the type hierarchy and spacing so headings never drift.
 */
export function SectionHeading({
  kicker,
  index,
  title,
  as: Tag = 'h2',
  align = 'left',
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {(kicker || index) && (
        <div
          className={cn(
            'mb-4 flex items-baseline gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          {index && (
            <span className="font-display text-2xl text-accent md:text-3xl">{index}</span>
          )}
          {kicker && (
            <span
              className={cn(
                'font-sans text-xs font-semibold uppercase tracking-[0.22em]',
                onDark ? 'text-bone-300' : 'text-muted',
              )}
            >
              {kicker}
            </span>
          )}
        </div>
      )}
      <Tag
        className={cn(
          'font-display uppercase leading-[0.92] tracking-tight',
          'text-[clamp(2.25rem,6vw,4.5rem)]',
          onDark ? 'text-bone-50' : 'text-ink',
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
