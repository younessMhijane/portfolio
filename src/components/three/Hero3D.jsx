import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Float, Sparkles, Text3D } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const font = '/fonts/helvetiker_bold.typeface.json';

function NameLogo() {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.2;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.04;
  });

  return (
    <Float speed={1.25} rotationIntensity={0.08} floatIntensity={0.35}>
      <group ref={group} scale={0.72}>
        <Center position={[0, 0.48, 0]}>
          <Text3D font={font} size={0.72} height={0.18} bevelEnabled bevelSize={0.018} bevelThickness={0.025} curveSegments={8}>
            YOUNESS
            <meshStandardMaterial color="#a78bfa" metalness={0.82} roughness={0.16} />
          </Text3D>
        </Center>
        <Center position={[0, -0.45, 0]}>
          <Text3D font={font} size={0.72} height={0.18} bevelEnabled bevelSize={0.018} bevelThickness={0.025} curveSegments={8}>
            M'HIJANE
            <meshStandardMaterial color="#5ee7ee" metalness={0.78} roughness={0.18} />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-canvas" aria-label="Logo 3D Youness Mhijane" role="img">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.6], fov: 42 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[3, 3, 4]} intensity={30} color="#67e8f9" />
        <pointLight position={[-3, -2, 3]} intensity={24} color="#a855f7" />
        <Suspense fallback={null}>
          <NameLogo />
          <Sparkles count={38} scale={[5, 4, 2]} size={1.4} speed={0.2} opacity={0.48} color="#a5f3fc" />
        </Suspense>
      </Canvas>
      <div className="canvas-orbit canvas-orbit-one" />
      <div className="canvas-orbit canvas-orbit-two" />
    </div>
  );
}
