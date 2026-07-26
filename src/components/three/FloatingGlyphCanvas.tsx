import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// Deep-imported — see the comment in HeroCanvas.tsx for why.
import { Float } from '@react-three/drei/core/Float';
import * as THREE from 'three';
import { cssVar } from '@/lib/utils';

/**
 * FloatingGlyphCanvas — lightweight section accent: a single slowly-rotating
 * wireframe glyph. No postprocessing, few polygons. Lazy-loaded client-only.
 */
interface FloatingGlyphCanvasProps {
  shape: 'octahedron' | 'torus' | 'icosahedron';
}

function Glyph({ shape }: FloatingGlyphCanvasProps) {
  const ref = useRef<THREE.Mesh>(null);
  const accent = cssVar('--color-accent', '#e5146e');
  const bone = cssVar('--color-bone-300', '#d8d4c7');

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.25;
      ref.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <group>
        <mesh ref={ref}>
          {shape === 'octahedron' && <octahedronGeometry args={[1.3, 0]} />}
          {shape === 'torus' && <torusGeometry args={[1, 0.35, 16, 40]} />}
          {shape === 'icosahedron' && <icosahedronGeometry args={[1.3, 0]} />}
          <meshBasicMaterial color={accent} wireframe />
        </mesh>
        <mesh scale={0.55}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={bone} wireframe transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingGlyphCanvas({ shape }: FloatingGlyphCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.8} />
      <Glyph shape={shape} />
    </Canvas>
  );
}
