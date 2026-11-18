
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type SecurityGateProps = {
  isOpen: boolean;
};

export default function SecurityGate({
  isOpen,
}: SecurityGateProps) {
  const leftGate = useRef<THREE.Group>(null);
  const rightGate = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const speed = Math.min(delta * 2.5, 1);

    if (leftGate.current) {
      leftGate.current.rotation.y = THREE.MathUtils.lerp(
        leftGate.current.rotation.y,
        isOpen ? Math.PI / 2 : 0,
        speed
      );
    }

    if (rightGate.current) {
      rightGate.current.rotation.y = THREE.MathUtils.lerp(
        rightGate.current.rotation.y,
        isOpen ? -Math.PI / 2 : 0,
        speed
      );
    }
  });

  return (
    <group position={[0, 0, 19]}>

      {/* Left Boundary Pillar */}
      <mesh position={[-6, 1.5, 0]} castShadow>
        <boxGeometry args={[0.8, 3, 0.8]} />
        <meshStandardMaterial color="#34383B" />
      </mesh>

      {/* Right Boundary Pillar */}
      <mesh position={[6, 1.5, 0]} castShadow>
        <boxGeometry args={[0.8, 3, 0.8]} />
        <meshStandardMaterial color="#34383B" />
      </mesh>

      {/* Copper Pillar Details */}
      {[-6, 6].map((x) => (
        <mesh key={x} position={[x, 2.65, 0.42]}>
          <boxGeometry args={[0.45, 0.08, 0.04]} />
          <meshStandardMaterial
            color="#B87345"
            metalness={0.7}
            roughness={0.35}
          />
        </mesh>
      ))}

      {/* Left Animated Gate Panel */}
      <group ref={leftGate} position={[-5.75, 0, 0]}>
        <mesh position={[2.75, 1.1, 0]} castShadow>
          <boxGeometry args={[5.5, 1.8, 0.15]} />
          <meshStandardMaterial
            color="#25292C"
            metalness={0.7}
            roughness={0.4}
          />
        </mesh>

        <mesh position={[2.75, 1.1, 0.1]}>
          <boxGeometry args={[5.2, 0.06, 0.04]} />
          <meshStandardMaterial color="#B87345" metalness={0.7} />
        </mesh>
      </group>

      {/* Right Animated Gate Panel */}
      <group ref={rightGate} position={[5.75, 0, 0]}>
        <mesh position={[-2.75, 1.1, 0]} castShadow>
          <boxGeometry args={[5.5, 1.8, 0.15]} />
          <meshStandardMaterial
            color="#25292C"
            metalness={0.7}
            roughness={0.4}
          />
        </mesh>

        <mesh position={[-2.75, 1.1, 0.1]}>
          <boxGeometry args={[5.2, 0.06, 0.04]} />
          <meshStandardMaterial color="#B87345" metalness={0.7} />
        </mesh>
      </group>

      {/* Security Cabin */}
      <mesh position={[-9, 1.5, -1]} castShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#34383B" roughness={0.7} />
      </mesh>

      {/* Front Cabin Glass */}
      <mesh position={[-9, 2, 0.55]}>
        <boxGeometry args={[2, 1.3, 0.08]} />
        <meshPhysicalMaterial
          color="#A9C5D0"
          transparent
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>

      {/* Side Cabin Glass */}
      <mesh position={[-7.48, 2, -1]}>
        <boxGeometry args={[0.08, 1.3, 2]} />
        <meshPhysicalMaterial
          color="#A9C5D0"
          transparent
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>

      {/* Cabin Roof */}
      <mesh position={[-9, 3.08, -1]} castShadow>
        <boxGeometry args={[3.3, 0.18, 3.3]} />
        <meshStandardMaterial color="#25292C" roughness={0.6} />
      </mesh>

      {/* Cabin Copper Roof Edge */}
      <mesh position={[-9, 3.18, -1]}>
        <boxGeometry args={[3.35, 0.04, 3.35]} />
        <meshStandardMaterial color="#B87345" metalness={0.7} />
      </mesh>

    </group>
  );
}
