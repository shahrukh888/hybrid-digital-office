"use client";

function BollardLight({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* Light Base */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.19, 0.3, 12]} />
        <meshStandardMaterial color="#34383B" metalness={0.6} />
      </mesh>

      {/* Light Body */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.12, 0.14, 0.55, 12]} />
        <meshStandardMaterial color="#25292C" metalness={0.5} />
      </mesh>

      {/* Warm Light Cap */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.14, 0.12, 0.08, 12]} />
        <meshStandardMaterial
          color="#FFE0B5"
          emissive="#FFB86B"
          emissiveIntensity={2}
        />
      </mesh>

      <pointLight
        position={[0, 0.85, 0]}
        color="#FFD19A"
        intensity={1.2}
        distance={4}
        decay={2}
      />
    </group>
  );
}

function GardenSpotlight({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.13, 0.15, 0.24, 10]} />
        <meshStandardMaterial color="#34383B" metalness={0.5} />
      </mesh>

      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.1, 10, 8]} />
        <meshStandardMaterial
          color="#FFE2B9"
          emissive="#FFB86B"
          emissiveIntensity={2}
        />
      </mesh>

      <pointLight
        position={[0, 0.35, 0]}
        color="#FFD19A"
        intensity={1}
        distance={3}
        decay={2}
      />
    </group>
  );
}

export default function OutdoorLights() {
  return (
    <group>
      {/* Left Pathway Lights */}
      <BollardLight position={[-9.5, 0, -9]} />
      <BollardLight position={[-8, 0, -3]} />
      <BollardLight position={[-8, 0, 3]} />

      {/* Right Pathway Lights */}
      <BollardLight position={[9.5, 0, -9]} />
      <BollardLight position={[8, 0, -3]} />
      <BollardLight position={[8, 0, 3]} />

      {/* Entrance Garden Lights */}
      <GardenSpotlight position={[-10, 0, 7]} />
      <GardenSpotlight position={[10, 0, 7]} />

      {/* Front Garden Lights */}
      <GardenSpotlight position={[-14, 0, 5]} />
      <GardenSpotlight position={[14, 0, 5]} />
    </group>
  );
}