import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { cssVar } from '@/lib/utils';

/**
 * HeroCanvas — the live WebGL scene for the hero.
 *
 * Loaded lazily (React.lazy) and ONLY client-side from HeroScene, so its heavy
 * three/drei/postprocessing imports never run during SSR. Colors are pulled from
 * the theme CSS variables (cssVar) so the 3D layer re-themes with theme.ts.
 *
 * frameloop is "always" here because the scene animates continuously (distort +
 * particle drift). We limit dpr from the caller and drop postprocessing on
 * mobile to protect low-power devices.
 */

interface HeroCanvasProps {
  dpr: [number, number];
  isMobile: boolean;
}

/** Read the brand palette from CSS vars once (client-side). */
function usePalette() {
  return useMemo(
    () => ({
      accent: new THREE.Color(cssVar('--color-accent', '#e5146e')),
      accent300: new THREE.Color(cssVar('--color-accent-300', '#f06ca1')),
      ink: new THREE.Color(cssVar('--color-ink-800', '#161616')),
      bone: new THREE.Color(cssVar('--color-bone', '#e9e6dd')),
    }),
    [],
  );
}

/** Distorted centerpiece blob with a gentle float + slow spin. */
function CoreBlob() {
  const palette = usePalette();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef} castShadow>
        <icosahedronGeometry args={[1.45, 12]} />
        <MeshDistortMaterial
          color={palette.ink}
          emissive={palette.accent}
          emissiveIntensity={0.18}
          roughness={0.35}
          metalness={0.55}
          distort={0.35}
          speed={1.6}
        />
      </mesh>
      {/* Accent wireframe shell for the magenta edge treatment. */}
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshBasicMaterial color={palette.accent} wireframe transparent opacity={0.14} />
      </mesh>
    </Float>
  );
}

/** Drifting particle field surrounding the core. */
function Particles({ count }: { count: number }) {
  const palette = usePalette();
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute on a jittered spherical shell
      const r = 3 + Math.pow(((i * 9301 + 49297) % 233280) / 233280, 0.5) * 2.2;
      const theta = ((i * 12.9898) % 6.2831853) - Math.PI;
      const phi = Math.acos(2 * (((i * 78.233) % 1000) / 1000) - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        color={palette.accent300}
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas({ dpr, isMobile }: HeroCanvasProps) {
  const palette = usePalette();
  const particleCount = isMobile ? 260 : 700;

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 3, 5]} intensity={45} color={palette.accent} distance={20} />
      <pointLight position={[-5, -2, 2]} intensity={18} color={palette.bone} distance={20} />
      <directionalLight position={[0, 4, 2]} intensity={0.6} />

      <CoreBlob />
      <Particles count={particleCount} />

      {/* Bloom gives the magenta glow — skipped on mobile for performance. */}
      {!isMobile && (
        <EffectComposer>
          <Bloom intensity={0.85} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
        </EffectComposer>
      )}
    </Canvas>
  );
}
