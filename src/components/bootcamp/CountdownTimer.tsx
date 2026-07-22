import { useEffect, useState } from 'react';
import { getCountdown, type CountdownParts } from '@/lib/bootcamp';
import { cn } from '@/lib/utils';

const UNITS: { key: keyof CountdownParts; label: string }[] = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
];

interface CountdownTimerProps {
  targetDate: string;
  variant?: 'compacto' | 'grande';
  label?: string;
  className?: string;
}

/**
 * CountdownTimer — reusable preventa countdown. `tabular-nums` + a fixed
 * per-digit width prevent layout shift as the seconds tick. Static (SSR /
 * pre-hydration) render uses the initial values so there is no flash.
 */
export function CountdownTimer({ targetDate, variant = 'compacto', label, className }: CountdownTimerProps) {
  const [parts, setParts] = useState<CountdownParts>(() => getCountdown(targetDate));

  useEffect(() => {
    const id = window.setInterval(() => setParts(getCountdown(targetDate)), 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  const large = variant === 'grande';

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bootcamp-yellow">
          {label}
        </span>
      )}
      <div className="flex items-center gap-2 md:gap-4" role="timer" aria-live="off">
        {UNITS.map((unit, i) => (
          <div key={unit.key} className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  'font-display tabular-nums leading-none text-bootcamp-white',
                  large ? 'min-w-[1.6ch] text-4xl md:text-6xl' : 'min-w-[1.6ch] text-2xl md:text-3xl',
                )}
              >
                {String(parts[unit.key]).padStart(2, '0')}
              </span>
              <span
                className={cn(
                  'uppercase tracking-[0.16em] text-bootcamp-muted-dark',
                  large ? 'text-xs' : 'text-[0.6rem]',
                )}
              >
                {unit.label}
              </span>
            </div>
            {i < UNITS.length - 1 && (
              <span
                className={cn('font-display leading-none text-bootcamp-yellow/50', large ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl')}
                aria-hidden
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
