"use client";

import "@react-three/fiber";

function Plant({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      {/* Premium Stone Planter */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.42, 0.32, 0.7, 12]} />
        <meshStandardMaterial
          color="#77736D"
          roughness={0.9}
        />
      </mesh>

      {/* Planter Top Edge */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.43, 0.43, 0.07, 12]} />
        <meshStandardMaterial color="#A9A39A" />
      </mesh>

      {/* Main Foliage */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <sphereGeometry args={[0.62, 12, 10]} />
        <meshStandardMaterial color="#405F4D" roughness={0.9} />
      </mesh>

      {/* Upper Foliage */}
      <mesh position={[0.2, 1.55, 0.05]} castShadow>
        <sphereGeometry args={[0.38, 10, 8]} />
        <meshStandardMaterial color="#55736A" roughness={0.9} />
      </mesh>

      {/* Side Foliage */}
      <mesh position={[-0.35, 1.25, 0.1]}>
        <sphereGeometry args={[0.32, 10, 8]} />
        <meshStandardMaterial color="#496957" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Tree({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      {/* Tree Trunk */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.22, 2.4, 10]} />
        <meshStandardMaterial color="#655344" roughness={1} />
      </mesh>

      {/* Main Tree Crown */}
      <mesh position={[0, 2.8, 0]} castShadow>
        <sphereGeometry args={[1.05, 12, 10]} />
        <meshStandardMaterial color="#405F4D" roughness={0.95} />
      </mesh>

      {/* Upper Crown */}
      <mesh position={[0.25, 3.35, 0.1]} castShadow>
        <sphereGeometry args={[0.72, 10, 8]} />
        <meshStandardMaterial color="#55736A" roughness={0.95} />
      </mesh>

      {/* Side Crown */}
      <mesh position={[-0.55, 2.9, 0.1]}>
        <sphereGeometry args={[0.62, 10, 8]} />
        <meshStandardMaterial color="#496957" roughness={0.95} />
      </mesh>
    </group>
  );
}

export default function Landscaping() {
  return (
    <group>
      {/* Decorative Entrance Plants */}
      <Plant position={[-10, 0, 7]} scale={1.1} />
      <Plant position={[10, 0, 7]} scale={1.1} />

      {/* Side Decorative Plants */}
      <Plant position={[-10, 0, -6]} />
      <Plant position={[10, 0, -6]} />

      {/* Outdoor Trees */}
      <Tree position={[-13, 0, 4]} scale={1.1} />
      <Tree position={[13, 0, 4]} scale={1.1} />
      <Tree position={[-13, 0, -7]} />
      <Tree position={[13, 0, -7]} />
    </group>
  );
}