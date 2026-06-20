import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import type { Mesh, Group } from "three";
import * as THREE from "three";

function Bar({ x, height, color, delay }: { x: number; height: number; color: string; delay: number }) {
  const ref = useRef<Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay;
    const target = height * (0.85 + Math.sin(t * 0.8) * 0.15);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, target, 0.06);
    ref.current.position.y = ref.current.scale.y / 2;
  });
  return (
    <mesh ref={ref} position={[x, height / 2, 0]} castShadow>
      <boxGeometry args={[0.55, 1, 0.55]} />
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.35} />
    </mesh>
  );
}

function LineGraph() {
  const ref = useRef<Group>(null!);
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i <= 40; i++) {
      const x = -2.5 + (i / 40) * 5;
      const y = 0.6 + Math.sin(i * 0.3) * 0.2 + i * 0.04;
      arr.push(new THREE.Vector3(x, y, 0.6));
    }
    return arr;
  }, []);
  const geom = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  useFrame((state) => {
    if (ref.current) ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
  });
  return (
    <group ref={ref}>
      {/* @ts-expect-error three line element */}
      <line geometry={geom}>
        <lineBasicMaterial color="#F59E0B" linewidth={2} />
      </line>
      {points.filter((_, i) => i % 8 === 0).map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const group = useRef<Group>(null!);
  useFrame((state) => {
    const x = state.mouse.x * 0.3;
    const y = state.mouse.y * 0.2;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.05);
  });

  const bars = [1.2, 1.6, 1.4, 2.0, 1.8, 2.4, 2.2, 2.8];
  return (
    <group ref={group} rotation={[-0.25, -0.35, 0]} position={[0, -0.6, 0]}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        {bars.map((h, i) => (
          <Bar
            key={i}
            x={-2.3 + i * 0.65}
            height={h}
            color={i > 5 ? "#2563EB" : "#1E40AF"}
            delay={i * 0.4}
          />
        ))}
        <LineGraph />
        {/* base plate */}
        <mesh position={[0.05, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[6.5, 2.2]} />
          <meshStandardMaterial color="#EEF2FF" metalness={0.1} roughness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

export function RevenueScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.2, 6], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={1.2} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#2563EB" />
      <Scene />
      <Environment preset="city" />
    </Canvas>
  );
}