import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBlob({ position, scale, color, speed = 1 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

function TorusKnot({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <meshStandardMaterial
          color="#A8C8F8"
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.55}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesGeometry = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.03}
        color="#CEE0F9"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#CEE0F9" />
        <pointLight position={[-5, -3, -5]} intensity={1.2} color="#A8C8F8" />
        <pointLight position={[5, 3, 3]} intensity={0.8} color="#CEE0F9" />

        <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />

        <FloatingBlob position={[-3.5, 1.2, -2]} scale={1.1} color="#CEE0F9" speed={0.8} />
        <FloatingBlob position={[3.8, -1.5, -1]} scale={0.9} color="#A8C8F8" speed={1.1} />
        <FloatingBlob position={[2.5, 2.5, -3]} scale={0.7} color="#CEE0F9" speed={0.9} />
        <FloatingBlob position={[-3, -2.5, -2]} scale={0.8} color="#A8C8F8" speed={1.2} />

        <TorusKnot position={[0, 0, -4]} />
        <TorusKnot position={[-4.5, -0.5, -3]} />

        <ParticleField />
      </Canvas>
    </div>
  );
}
