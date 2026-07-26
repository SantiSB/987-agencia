import { Component, type ReactNode } from 'react';

interface ThreeErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

/**
 * ThreeErrorBoundary — catches WebGL context-creation failures (disabled/
 * unsupported GPU, driver blocklist, exhausted contexts) that `useThreeCapability`
 * can't detect ahead of time since they only surface once <Canvas> mounts.
 * Renders the same static poster used for the reduced-motion/mobile path
 * instead of leaving a broken canvas on screen.
 */
export class ThreeErrorBoundary extends Component<ThreeErrorBoundaryProps, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
