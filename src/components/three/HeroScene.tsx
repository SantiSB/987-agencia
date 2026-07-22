import { Suspense, lazy } from 'react';
import { useThreeCapability } from '@/lib/useThreeCapability';
import { SceneFallback } from './SceneFallback';
import { cn } from '@/lib/utils';

// Lazy + client-only: the heavy WebGL bundle is fetched in the browser only,
// so SSR never touches three/drei/postprocessing and the LCP text paints first.
const HeroCanvas = lazy(() => import('./HeroCanvas'));

interface HeroSceneProps {
  className?: string;
}

/**
 * HeroScene — island entry for the hero 3D.
 *
 * Decides whether to run the live canvas:
 *   - Before hydration / reduced motion  → SceneFallback (static poster).
 *   - Otherwise                          → lazy HeroCanvas with a Suspense poster.
 *
 * The hero headline lives in the Astro markup (not here), so text is never
 * blocked by the canvas.
 */
export function HeroScene({ className }: HeroSceneProps) {
  const { ready, canRender3D, isMobile, dpr } = useThreeCapability();

  return (
    <div className={cn('h-full w-full', className)}>
      {ready && canRender3D ? (
        <Suspense fallback={<SceneFallback />}>
          <HeroCanvas dpr={dpr} isMobile={isMobile} />
        </Suspense>
      ) : (
        <SceneFallback />
      )}
    </div>
  );
}
