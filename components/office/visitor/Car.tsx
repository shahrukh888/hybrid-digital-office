
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type CarProps = {
  doorOpen?: boolean;
};

export default function Car({ doorOpen = false }: CarProps) {
  const doorRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!doorRef.current) return;

    const targetAngle = doorOpen ? -Math.PI / 2.8 : 0;

    doorRef.current.rotation.y = THREE.MathUtils.damp(
      doorRef.current.rotation.y,
      targetAngle,
      3,
      delta
    );
  });

  return (
    <group>
      {/* MAIN CAR BODY */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.65, 4.2]} />
        <meshStandardMaterial color="#25292C" metalness={0.75} roughness={0.28} />
      </mesh>

      {/* FRONT BONNET */}
      <mesh position={[0, 1.15, -1.35]} castShadow>
        <boxGeometry args={[1.85, 0.22, 1.35]} />
        <meshStandardMaterial color="#34383B" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* CABIN FRAMES */}
      <mesh position={[-0.83, 1.58, 0.25]}>
        <boxGeometry args={[0.08, 0.85, 2.1]} />
        <meshStandardMaterial color="#25292C" metalness={0.7} />
      </mesh>

      <mesh position={[0.83, 1.58, 0.25]}>
        <boxGeometry args={[0.08, 0.85, 2.1]} />
        <meshStandardMaterial color="#25292C" metalness={0.7} />
      </mesh>

      {/* FRONT WINDSHIELD */}
      <mesh position={[0, 1.65, -0.82]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[1.58, 0.72, 0.045]} />
        <meshPhysicalMaterial color="#A9C5D0" transparent opacity={0.12} roughness={0.08} metalness={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* REAR WINDOW */}
      <mesh position={[0, 1.65, 1.32]} rotation={[0.12, 0, 0]}>
        <boxGeometry args={[1.5, 0.65, 0.04]} />
        <meshPhysicalMaterial color="#A9C5D0" transparent opacity={0.25} roughness={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* ROOF */}
      <mesh position={[0, 2.02, 0.25]} castShadow>
        <boxGeometry args={[1.7, 0.12, 1.9]} />
        <meshStandardMaterial color="#25292C" metalness={0.65} roughness={0.3} />
      </mesh>

      {/* DASHBOARD */}
      <mesh position={[0, 1.25, -0.75]} castShadow>
        <boxGeometry args={[1.75, 0.18, 0.48]} />
        <meshStandardMaterial color="#17191B" roughness={0.5} />
      </mesh>

      {/* DASHBOARD DISPLAY */}
      <mesh position={[-0.25, 1.40, -0.79]}>
        <boxGeometry args={[0.62, 0.2, 0.035]} />
        <meshStandardMaterial color="#172B35" emissive="#24546B" emissiveIntensity={0.7} metalness={0.3} />
      </mesh>

      {/* DISPLAY TRIM */}
      <mesh position={[-0.25, 1.40, -0.815]}>
        <boxGeometry args={[0.68, 0.25, 0.025]} />
        <meshStandardMaterial color="#B87345" metalness={0.7} />
      </mesh>

      {/* STEERING COLUMN */}
      <mesh position={[-0.48, 1.40, -0.35]} rotation={[-0.35, 0, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 0.42, 12]} />
        <meshStandardMaterial color="#25292C" />
      </mesh>

      {/* STEERING WHEEL */}
      <mesh position={[-0.48, 1.52, -0.25]}>
        <torusGeometry args={[0.23, 0.035, 10, 32]} />
        <meshStandardMaterial color="#17191B" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* STEERING CENTER */}
      <mesh position={[-0.48, 1.52, -0.25]}>
        <cylinderGeometry args={[0.075, 0.075, 0.08, 16]} />
        <meshStandardMaterial color="#B87345" metalness={0.7} />
      </mesh>

      {/* DRIVER SEAT */}
      <mesh position={[-0.48, 1.05, 0.35]} castShadow>
        <boxGeometry args={[0.65, 0.25, 0.75]} />
        <meshStandardMaterial color="#292421" roughness={0.9} />
      </mesh>

      {/* DRIVER SEAT BACK */}
      <mesh position={[-0.48, 1.45, 0.68]} rotation={[-0.12, 0, 0]} castShadow>
        <boxGeometry args={[0.65, 0.85, 0.2]} />
        <meshStandardMaterial color="#292421" roughness={0.9} />
      </mesh>

      {/* PASSENGER SEAT */}
      <mesh position={[0.48, 1.05, 0.35]} castShadow>
        <boxGeometry args={[0.65, 0.25, 0.75]} />
        <meshStandardMaterial color="#292421" roughness={0.9} />
      </mesh>

      {/* PASSENGER SEAT BACK */}
      <mesh position={[0.48, 1.45, 0.68]} rotation={[-0.12, 0, 0]} castShadow>
        <boxGeometry args={[0.65, 0.85, 0.2]} />
        <meshStandardMaterial color="#292421" roughness={0.9} />
      </mesh>

      {/* DRIVER DOOR - ANIMATED */}
      <group ref={doorRef} position={[-0.98, 0, -0.85]}>
        {/* Door body */}
        <mesh position={[-0.03, 1.05, 0.85]} castShadow>
          <boxGeometry args={[0.12, 0.72, 1.65]} />
          <meshStandardMaterial color="#25292C" metalness={0.75} roughness={0.28} />
        </mesh>

        {/* Door window */}
        <mesh position={[-0.03, 1.66, 0.85]}>
          <boxGeometry args={[0.055, 0.48, 1.55]} />
          <meshPhysicalMaterial color="#A9C5D0" transparent opacity={0.2} roughness={0.08} side={THREE.DoubleSide} />
        </mesh>

        {/* Door handle */}
        <mesh position={[-0.1, 1.15, 1.45]}>
          <boxGeometry args={[0.035, 0.045, 0.25]} />
          <meshStandardMaterial color="#B87345" metalness={0.8} />
        </mesh>
      </group>

      {/* WHEELS */}
      {[-1, 1].map((x) =>
        [-1.35, 1.35].map((z) => (
          <mesh key={`${x}-${z}`} position={[x * 0.98, 0.48, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.43, 0.43, 0.22, 20]} />
            <meshStandardMaterial color="#17191B" roughness={0.85} />
          </mesh>
        ))
      )}

      {/* FRONT HEADLIGHTS */}
      {[-0.65, 0.65].map((x) => (
        <mesh key={x} position={[x, 0.95, -2.12]}>
          <boxGeometry args={[0.42, 0.18, 0.06]} />
          <meshStandardMaterial color="#FFF1CE" emissive="#FFF1CE" emissiveIntensity={1.2} />
        </mesh>
      ))}

      {/* REAR LIGHTS */}
      {[-0.65, 0.65].map((x) => (
        <mesh key={x} position={[x, 0.95, 2.12]}>
          <boxGeometry args={[0.42, 0.18, 0.06]} />
          <meshStandardMaterial color="#9E2020" emissive="#9E2020" emissiveIntensity={0.8} />
        </mesh>
      ))}

      {/* FRONT GRILLE */}
      <mesh position={[0, 0.78, -2.13]}>
        <boxGeometry args={[0.75, 0.22, 0.05]} />
        <meshStandardMaterial color="#111315" metalness={0.6} />
      </mesh>
    </group>
  );
}
