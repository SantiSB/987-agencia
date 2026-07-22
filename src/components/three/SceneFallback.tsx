import { cn } from '@/lib/utils';

interface SceneFallbackProps {
  className?: string;
  /** Tone of the poster — cream sections vs ink sections. */
  onDark?: boolean;
}

/**
 * SceneFallback — static poster shown instead of the live 3D canvas when:
 *   - the user prefers reduced motion, or
 *   - the device is low-power / very small, or
 *   - the canvas is still loading (Suspense fallback).
 *
 * Pure CSS (theme-token gradients + accent glow), zero JS loop — so it never
 * blocks the LCP and always paints instantly.
 */
export function SceneFallback({ className, onDark = false }: SceneFallbackProps) {
  return (
    <div
      aria-hidden
      className={cn('relative h-full w-full overflow-hidden', className)}
    >
      {/* accent glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-pill blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, var(--color-accent-glow), transparent 68%)',
        }}
      />
      {/* orbiting ring */}
      <div
        className={cn(
          'absolute left-1/2 top-1/2 aspect-square w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-pill border',
          onDark ? 'border-bone-300/25' : 'border-ink/15',
        )}
      />
      <div
        className={cn(
          'absolute left-1/2 top-1/2 aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-pill border',
          onDark ? 'border-bone-300/20' : 'border-ink/10',
        )}
      />
      {/* core */}
      <div
        className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-pill bg-accent"
        style={{ boxShadow: '0 0 60px 10px var(--color-accent-glow)' }}
      />
    </div>
  );
}
