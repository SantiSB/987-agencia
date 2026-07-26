import { Suspense, lazy } from 'react';
import { useThreeCapability } from '@/lib/useThreeCapability';
import { SceneFallback } from './SceneFallback';
import { ThreeErrorBoundary } from './ThreeErrorBoundary';
import { cn } from '@/lib/utils';

const FloatingGlyphCanvas = lazy(() => import('./FloatingGlyphCanvas'));

interface FloatingGlyphProps {
  shape?: 'octahedron' | 'torus' | 'icosahedron';
  className?: string;
  onDark?: boolean;
}

/**
 * FloatingGlyph — decorative 3D accent for section corners.
 * Same capability gate as HeroScene: reduced-motion / pre-hydration falls back
 * to the static poster; the WebGL bundle only loads client-side; a WebGL
 * context-creation failure at runtime falls back the same way.
 */
export function FloatingGlyph({ shape = 'octahedron', className, onDark = false }: FloatingGlyphProps) {
  const { ready, canRender3D } = useThreeCapability();

  return (
    <div className={cn('pointer-events-none select-none', className)} aria-hidden>
      {ready && canRender3D ? (
        <ThreeErrorBoundary fallback={<SceneFallback onDark={onDark} />}>
          <Suspense fallback={<SceneFallback onDark={onDark} />}>
            <FloatingGlyphCanvas shape={shape} />
          </Suspense>
        </ThreeErrorBoundary>
      ) : (
        <SceneFallback onDark={onDark} />
      )}
    </div>
  );
}
