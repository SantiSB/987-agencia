import { Suspense, lazy } from 'react';
import { useThreeCapability } from '@/lib/useThreeCapability';
import { SceneFallback } from './SceneFallback';
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
 * to the static poster; the WebGL bundle only loads client-side.
 */
export function FloatingGlyph({ shape = 'octahedron', className, onDark = false }: FloatingGlyphProps) {
  const { ready, canRender3D } = useThreeCapability();

  return (
    <div className={cn('pointer-events-none select-none', className)} aria-hidden>
      {ready && canRender3D ? (
        <Suspense fallback={<SceneFallback onDark={onDark} />}>
          <FloatingGlyphCanvas shape={shape} />
        </Suspense>
      ) : (
        <SceneFallback onDark={onDark} />
      )}
    </div>
  );
}
