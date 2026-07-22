import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: readonly string[];
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  /** Character shown between items. */
  separator?: string;
  className?: string;
  itemClassName?: string;
}

/**
 * Marquee — infinite horizontal ticker of keywords.
 * Duplicates the list once and translates -50% for a seamless loop.
 * Under prefers-reduced-motion it renders a single static, wrapping row.
 */
export function Marquee({
  items,
  duration = 22,
  separator = '·',
  className,
  itemClassName,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className={cn('flex items-center', itemClassName)}>
          <span className="px-6 font-display uppercase">{item}</span>
          <span className="text-accent" aria-hidden>
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <div className={cn('flex flex-wrap items-center justify-center gap-x-2', className)}>
        <Row />
      </div>
    );
  }

  return (
    <div className={cn('no-scrollbar flex overflow-hidden', className)}>
      <motion.div
        className="flex shrink-0"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        <Row />
        <Row ariaHidden />
      </motion.div>
    </div>
  );
}
