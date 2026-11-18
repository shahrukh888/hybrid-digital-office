"use client";

import "@react-three/fiber";

export default function SiteGround() {
  return (
    <group>
      {/* Main Green Landscape */}
      <mesh
        position={[0, -0.025, 0]}
        receiveShadow
      >
        <boxGeometry args={[200, 0.12, 200]} />
        <meshStandardMaterial
          color="#526B4D"
          roughness={1}
        />
      </mesh>

      {/* Main Visitor Driveway - Inside Security Gate */}
      <mesh position={[0, 0.055, 11]} receiveShadow>
        <boxGeometry args={[18, 0.08, 12]} />
        <meshStandardMaterial color="#55585A" roughness={0.9} />
      </mesh>

      {/* Entrance Walkway */}
      <mesh position={[0, 0.12, 7]} receiveShadow>
        <boxGeometry args={[6, 0.1, 7]} />
        <meshStandardMaterial color="#C0B8AA" roughness={0.85} />
      </mesh>

      {/* Left Stone Paving */}
      <mesh position={[-11, 0.07, 0]} receiveShadow>
        <boxGeometry args={[5, 0.08, 28]} />
        <meshStandardMaterial color="#88847D" />
      </mesh>

      {/* Right Stone Paving */}
      <mesh position={[11, 0.07, 0]} receiveShadow>
        <boxGeometry args={[5, 0.08, 28]} />
        <meshStandardMaterial color="#88847D" />
      </mesh>

      {/* Decorative Front Paving */}
      <mesh position={[0, 0.07, 19]} receiveShadow>
        <boxGeometry args={[30, 0.08, 3]} />
        <meshStandardMaterial color="#A9A39A" />
      </mesh>

      {/* Main Road Outside Security Gate */}
      <mesh position={[0, 0.045, 31]} receiveShadow>
        <boxGeometry args={[12, 0.1, 24]} />
        <meshStandardMaterial
          color="#45494C"
          roughness={0.95}
        />
      </mesh>

      {/* Road Side Borders */}
      <mesh position={[-6.15, 0.11, 31]}>
        <boxGeometry args={[0.25, 0.12, 24]} />
        <meshStandardMaterial color="#B9B2A6" />
      </mesh>

      <mesh position={[6.15, 0.11, 31]}>
        <boxGeometry args={[0.25, 0.12, 24]} />
        <meshStandardMaterial color="#B9B2A6" />
      </mesh>

      {/* Road Centre Markings */}
      {[-1, 0, 1, 2, 3].map((z) => (
        <mesh
          key={z}
          position={[0, 0.105, 22 + z * 4]}
        >
          <boxGeometry args={[0.12, 0.015, 2]} />
          <meshStandardMaterial color="#D8D2C4" />
        </mesh>
      ))}

      {/* Side Stone Borders */}
      <mesh position={[-8, 0.13, 0]}>
        <boxGeometry args={[0.15, 0.12, 25]} />
        <meshStandardMaterial color="#B87345" />
      </mesh>

      <mesh position={[8, 0.13, 0]}>
        <boxGeometry args={[0.15, 0.12, 25]} />
        <meshStandardMaterial color="#B87345" />
      </mesh>
    </group>
  );
}