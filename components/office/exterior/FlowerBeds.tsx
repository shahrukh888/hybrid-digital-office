"use client";

function Flower({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <group position={position}>
      {/* Stem */}
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.025, 0.035, 0.36, 6]} />
        <meshStandardMaterial color="#41633A" />
      </mesh>

      {/* Flower Head */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.13, 10, 8]} />
        <meshStandardMaterial
          color={color}
          roughness={0.8}
        />
      </mesh>

      {/* Flower Centre */}
      <mesh position={[0, 0.4, 0.105]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshStandardMaterial color="#E6C36A" />
      </mesh>
    </group>
  );
}

function BorderPlant({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0.22, 0]} castShadow>
        <sphereGeometry args={[0.3, 10, 8]} />
        <meshStandardMaterial
          color="#55794A"
          roughness={1}
        />
      </mesh>
    </group>
  );
}

export default function FlowerBeds() {
  const flowerColors = [
    "#C97880",
    "#E4B85F",
    "#D9D1C1",
    "#A982B5",
  ];

  return (
    <group>
      {/* Left Flower Bed */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Flower
          key={`left-${i}`}
          position={[-18 + i * 0.55, 0.28, 5]}
          color={flowerColors[i % flowerColors.length]}
        />
      ))}

      {/* Right Flower Bed */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Flower
          key={`right-${i}`}
          position={[14 + i * 0.55, 0.28, 5]}
          color={flowerColors[(i + 2) % flowerColors.length]}
        />
      ))}

      {/* Low Height Border Plants */}
      {Array.from({ length: 7 }).map((_, i) => (
        <BorderPlant
          key={`border-left-${i}`}
          position={[-19 + i * 0.65, 0, 6.2]}
        />
      ))}

      {Array.from({ length: 7 }).map((_, i) => (
        <BorderPlant
          key={`border-right-${i}`}
          position={[15 + i * 0.65, 0, 6.2]}
        />
      ))}
    </group>
  );
}