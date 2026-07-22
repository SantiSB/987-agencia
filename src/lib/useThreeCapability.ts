import { useEffect, useState } from 'react';

export interface ThreeCapability {
  /** Ready to decide (avoids SSR/client mismatch flashes). */
  ready: boolean;
  /** True when the live canvas should render at all. */
  canRender3D: boolean;
  /** Small / coarse-pointer device → reduce density. */
  isMobile: boolean;
  reducedMotion: boolean;
  /** Clamped device pixel ratio for the Canvas. */
  dpr: [number, number];
}

/**
 * useThreeCapability — centralizes the "should we run 3D, and how heavy" policy.
 *
 * - prefers-reduced-motion → never render the live canvas (use SceneFallback).
 * - small viewport → render, but at reduced particle density + lower dpr cap.
 * - respects the OS setting reactively (listens for changes).
 */
export function useThreeCapability(): ThreeCapability {
  const [state, setState] = useState<ThreeCapability>({
    ready: false,
    canRender3D: false,
    isMobile: false,
    reducedMotion: false,
    dpr: [1, 1.5],
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const compute = () => {
      const reducedMotion = motionQuery.matches;
      const isMobile = mobileQuery.matches;
      setState({
        ready: true,
        canRender3D: !reducedMotion,
        isMobile,
        reducedMotion,
        dpr: isMobile ? [1, 1.25] : [1, 1.5],
      });
    };

    compute();
    motionQuery.addEventListener('change', compute);
    mobileQuery.addEventListener('change', compute);
    return () => {
      motionQuery.removeEventListener('change', compute);
      mobileQuery.removeEventListener('change', compute);
    };
  }, []);

  return state;
}
