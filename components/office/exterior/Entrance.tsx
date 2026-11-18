
"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type EntranceProps = {
  onEnter: () => void;
  onExit: () => void;
};

export default function Entrance({ onEnter, onExit }: EntranceProps) {
  const leftDoorRef = useRef<THREE.Group>(null);
  const rightDoorRef = useRef<THREE.Group>(null);
  const [isOpen, setIsOpen] = useState(false);

  useFrame((_, delta) => {
    const angle = isOpen ? Math.PI / 2.4 : 0;

    if (leftDoorRef.current) {
      leftDoorRef.current.rotation.y = THREE.MathUtils.damp(
        leftDoorRef.current.rotation.y,
        angle,
        3,
        delta
      );
    }

    if (rightDoorRef.current) {
      rightDoorRef.current.rotation.y = THREE.MathUtils.damp(
        rightDoorRef.current.rotation.y,
        -angle,
        3,
        delta
      );
    }
  });

  const toggleDoors = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();

    if (isOpen) {
      onExit();
    } else {
      onEnter();
    }

    setIsOpen((previous) => !previous);
  };

  return (
    <group position={[0, 0, 4.1]}>
      {/* Entrance Frame */}
      {[-1.8, 1.8].map((x) => (
        <mesh key={x} position={[x, 2.05, 0]}>
          <boxGeometry args={[0.12, 4.1, 0.18]} />
          <meshStandardMaterial color="#B87345" metalness={0.7} />
        </mesh>
      ))}

      <mesh position={[0, 4.05, 0]}>
        <boxGeometry args={[3.7, 0.12, 0.18]} />
        <meshStandardMaterial color="#B87345" metalness={0.7} />
      </mesh>

      {/* Fixed Glass Panels */}
      {[-2.8, 2.8].map((x) => (
        <mesh key={x} position={[x, 2, 0]}>
          <boxGeometry args={[1.8, 3.9, 0.07]} />
          <meshPhysicalMaterial
            color="#A9C5D0"
            transparent
            opacity={0.3}
            roughness={0.08}
            metalness={0.2}
          />
        </mesh>
      ))}

      {/* Left Glass Door */}
      <group ref={leftDoorRef} position={[-1.675, 1.95, 0.08]}>
        <group position={[0.825, 0, 0]}>
          <mesh onClick={toggleDoors} castShadow>
            <boxGeometry args={[1.65, 3.75, 0.08]} />
            <meshPhysicalMaterial
              color="#B7CDD4"
              transparent
              opacity={0.3}
              roughness={0.08}
              side={THREE.DoubleSide}
            />
          </mesh>

          {[-0.8, 0.8].map((x) => (
            <mesh key={x} position={[x, 0, 0.05]}>
              <boxGeometry args={[0.035, 3.75, 0.04]} />
              <meshStandardMaterial color="#25292C" metalness={0.6} />
            </mesh>
          ))}

          <mesh position={[0.675, 0, 0.12]}>
            <boxGeometry args={[0.06, 0.85, 0.08]} />
            <meshStandardMaterial color="#B87345" metalness={0.8} />
          </mesh>
        </group>
      </group>

      {/* Right Glass Door */}
      <group ref={rightDoorRef} position={[1.675, 1.95, 0.08]}>
        <group position={[-0.825, 0, 0]}>
          <mesh onClick={toggleDoors} castShadow>
            <boxGeometry args={[1.65, 3.75, 0.08]} />
            <meshPhysicalMaterial
              color="#B7CDD4"
              transparent
              opacity={0.3}
              roughness={0.08}
              side={THREE.DoubleSide}
            />
          </mesh>

          {[-0.8, 0.8].map((x) => (
            <mesh key={x} position={[x, 0, 0.05]}>
              <boxGeometry args={[0.035, 3.75, 0.04]} />
              <meshStandardMaterial color="#25292C" metalness={0.6} />
            </mesh>
          ))}

          <mesh position={[-0.675, 0, 0.12]}>
            <boxGeometry args={[0.06, 0.85, 0.08]} />
            <meshStandardMaterial color="#B87345" metalness={0.8} />
          </mesh>
        </group>
      </group>

      {/* Entrance Canopy */}
      <mesh position={[0, 4.35, 1.1]} castShadow>
        <boxGeometry args={[6.5, 0.22, 2.2]} />
        <meshStandardMaterial color="#25292C" roughness={0.7} />
      </mesh>

      {/* Copper Canopy Edge */}
      <mesh position={[0, 4.22, 2.15]}>
        <boxGeometry args={[6.5, 0.05, 0.08]} />
        <meshStandardMaterial color="#B87345" metalness={0.7} />
      </mesh>

      {/* Canopy Lights */}
      {[-2, 0, 2].map((x) => (
        <mesh key={x} position={[x, 4.225, 1.2]}>
          <cylinderGeometry args={[0.09, 0.09, 0.035, 16]} />
          <meshStandardMaterial
            color="#FFD1A1"
            emissive="#FFD1A1"
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}

      {/* Canopy Supports */}
      {[-2.7, 2.7].map((x) => (
        <mesh
          key={x}
          position={[x, 3.95, 0.65]}
          rotation={[0.35, 0, 0]}
        >
          <boxGeometry args={[0.12, 0.65, 0.12]} />
          <meshStandardMaterial color="#B87345" metalness={0.7} />
        </mesh>
      ))}

      {/* Stone Entrance Threshold */}
      <mesh position={[0, 0.12, 0.35]}>
        <boxGeometry args={[3.7, 0.18, 0.7]} />
        <meshStandardMaterial color="#AAA398" roughness={0.85} />
      </mesh>
    </group>
  );
}
