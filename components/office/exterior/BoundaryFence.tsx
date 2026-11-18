
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function BoundarySection({
  position,
  length,
  rotation = 0,
}: {
  position: [number, number, number];
  length: number;
  rotation?: number;
}) {
  const finCount = Math.floor(length / 0.55);

  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Concrete Boundary Wall */}
      <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
        <boxGeometry args={[length, 1.3, 0.35]} />
        <meshStandardMaterial color="#34383B" roughness={0.9} />
      </mesh>

      {/* Copper Top Detail */}
      <mesh position={[0, 1.32, 0]}>
        <boxGeometry args={[length, 0.06, 0.4]} />
        <meshStandardMaterial
          color="#B87345"
          metalness={0.6}
          roughness={0.5}
        />
      </mesh>

      {/* Vertical Metal Fins */}
      {Array.from({ length: finCount + 1 }).map((_, i) => (
        <mesh
          key={i}
          position={[-length / 2 + i * 0.55, 2.05, 0]}
          castShadow
        >
          <boxGeometry args={[0.07, 1.4, 0.09]} />
          <meshStandardMaterial
            color="#25292C"
            metalness={0.7}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Top Horizontal Rail */}
      <mesh position={[0, 2.77, 0]}>
        <boxGeometry args={[length, 0.1, 0.16]} />
        <meshStandardMaterial color="#25292C" metalness={0.7} roughness={0.4} />
      </mesh>
    </group>
  );
}

function EmergencyGate() {
  const gateRef = useRef<THREE.Group>(null);
  const [isOpen, setIsOpen] = useState(false);

  useFrame((_, delta) => {
    if (!gateRef.current) return;

    const targetRotation = isOpen ? -Math.PI / 2 : 0;

    gateRef.current.rotation.y = THREE.MathUtils.damp(
      gateRef.current.rotation.y,
      targetRotation,
      4,
      delta
    );
  });

  return (
    <group position={[22, 0, 16.5]}>
      {/* Hinged Gate Panel */}
      <group ref={gateRef}>
        <group position={[0, 0, 1.25]}>
          {/* Main Gate Frame */}
          <mesh
            position={[0, 1.1, 0]}
            castShadow
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen((previous) => !previous);
            }}
          >
            <boxGeometry args={[0.14, 2.2, 2.5]} />
            <meshStandardMaterial
              color="#25292C"
              metalness={0.65}
              roughness={0.4}
            />
          </mesh>

          {/* Vertical Gate Fins */}
          {Array.from({ length: 4 }).map((_, i) => (
            <mesh
              key={i}
              position={[0, 1.1, -0.85 + i * 0.55]}
              castShadow
            >
              <boxGeometry args={[0.09, 1.75, 0.07]} />
              <meshStandardMaterial
                color="#111719"
                metalness={0.7}
                roughness={0.4}
              />
            </mesh>
          ))}

          {/* Copper Top Strip */}
          <mesh position={[0, 2.2, 0]}>
            <boxGeometry args={[0.2, 0.06, 2.5]} />
            <meshStandardMaterial
              color="#B87345"
              metalness={0.7}
              roughness={0.4}
            />
          </mesh>

          {/* Bottom Rail */}
          <mesh position={[0, 0.12, 0]}>
            <boxGeometry args={[0.18, 0.12, 2.5]} />
            <meshStandardMaterial color="#25292C" metalness={0.6} />
          </mesh>
        </group>
      </group>

      {/* Gate Hinge Post */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <boxGeometry args={[0.22, 2.2, 0.22]} />
        <meshStandardMaterial color="#25292C" metalness={0.7} />
      </mesh>
    </group>
  );
}

export default function BoundaryFence() {
  return (
    <group>
      {/* Left Property Boundary */}
      <BoundarySection
        position={[-22, 0, 1.5]}
        length={34}
        rotation={Math.PI / 2}
      />

      {/* Right Property Boundary - Before Emergency Gate */}
      <BoundarySection
        position={[22, 0, 0.45]}
        length={32.2}
        rotation={Math.PI / 2}
      />

      {/* Right Side Emergency Gate */}
      <EmergencyGate />

      {/* Rear Boundary */}
      <BoundarySection position={[0, 0, -16]} length={44} />

      {/* Front Left Boundary */}
      <BoundarySection position={[-14.5, 0, 19]} length={15} />

      {/* Front Right Boundary */}
      <BoundarySection position={[14.5, 0, 19]} length={15} />
    </group>
  );
}
