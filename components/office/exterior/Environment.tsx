"use client";

import "@react-three/fiber";

export default function Environment() {
  return (
    <group>
      {/* Main Surrounding Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.15, 0]}
        receiveShadow
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial
          color="#626B60"
          roughness={1}
        />
      </mesh>

      {/* Main Building Platform */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[19, 0.3, 13]} />
        <meshStandardMaterial
          color="#34383B"
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}