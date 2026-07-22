import { Icon } from '@/components/primitives/Icon';
import { cn } from '@/lib/utils';

interface ScarcityBarProps {
  label: string;
  /**
   * Optional fill 0–100 for when real sales data exists. Left undefined the
   * bar shows only the scarcity label — never "X de X cupos".
   */
  porcentaje?: number;
  className?: string;
}

/**
 * ScarcityBar — preventa scarcity indicator. By design it never exposes an
 * absolute "N of N" seat count; it shows the scarcity label, and only draws a
 * progress fill once a real `porcentaje` is provided.
 */
export function ScarcityBar({ label, porcentaje, className }: ScarcityBarProps) {
  const hasProgress = typeof porcentaje === 'number';
  const clamped = hasProgress ? Math.min(Math.max(porcentaje, 0), 100) : 0;

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-bootcamp-yellow">
        <Icon name="tag" size={16} />
        <span>{label}</span>
      </div>
      {hasProgress && (
        <div
          className="mt-3 h-2 w-full overflow-hidden rounded-pill bg-bootcamp-line"
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        >
          <div className="h-full rounded-pill bg-bootcamp-yellow" style={{ width: `${clamped}%` }} />
        </div>
      )}
    </div>
  );
}
