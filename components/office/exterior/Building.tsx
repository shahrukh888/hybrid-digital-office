
"use client";

import { Text } from "@react-three/drei";

export default function Building() {
  const concrete = "#34383B";
  const glass = "#7895A0";
  const frame = "#25292C";
  const copper = "#B87345";

  return (
    <group>
      {/* Headquarters Branding */}
      <Text
        position={[0, 4.85, 4.62]}
        fontSize={0.38}
        color="#B87345"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
        outlineWidth={0.008}
        outlineColor="#25292C"
      >
        DIGITAL HEADQUARTERS
      </Text>

      {/* Left Exterior Wall */}
      <mesh position={[-7.8, 2.2, 0]} castShadow>
        <boxGeometry args={[0.4, 4, 8.5]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* Right Exterior Wall */}
      <mesh position={[7.8, 2.2, 0]} castShadow>
        <boxGeometry args={[0.4, 4, 8.5]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* REAR WALL - LEFT SECTION */}
      <mesh position={[-4.75, 2.2, -4.05]} castShadow>
        <boxGeometry args={[6.5, 4, 0.4]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* REAR WALL - RIGHT SECTION */}
      <mesh position={[4.75, 2.2, -4.05]} castShadow>
        <boxGeometry args={[6.5, 4, 0.4]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* FRONT LEFT CONCRETE BASE */}
      <mesh position={[-5.3, 0.3, 4.05]}>
        <boxGeometry args={[5.4, 0.6, 0.4]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* FRONT RIGHT CONCRETE BASE */}
      <mesh position={[5.3, 0.3, 4.05]}>
        <boxGeometry args={[5.4, 0.6, 0.4]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* FRONT GLASS WINDOWS */}
      {[-5.3, 5.3].map((x) => (
        <mesh key={x} position={[x, 2.1, 4.05]}>
          <boxGeometry args={[4.7, 2.9, 0.08]} />
          <meshPhysicalMaterial
            color={glass}
            transparent
            opacity={0.4}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>
      ))}

      {/* GLASS FACADE FRAMES */}
      {[-5.3, 5.3].map((x) => (
        <group key={`frame-${x}`} position={[x, 0, 4.13]}>
          <mesh position={[-2.32, 2.1, 0]}>
            <boxGeometry args={[0.1, 2.95, 0.12]} />
            <meshStandardMaterial color={frame} metalness={0.5} />
          </mesh>

          <mesh position={[2.32, 2.1, 0]}>
            <boxGeometry args={[0.1, 2.95, 0.12]} />
            <meshStandardMaterial color={frame} metalness={0.5} />
          </mesh>

          <mesh position={[0, 2.1, 0]}>
            <boxGeometry args={[0.07, 2.85, 0.12]} />
            <meshStandardMaterial color={frame} metalness={0.5} />
          </mesh>

          <mesh position={[0, 2.1, 0]}>
            <boxGeometry args={[4.65, 0.07, 0.12]} />
            <meshStandardMaterial color={frame} metalness={0.5} />
          </mesh>
        </group>
      ))}

      {/* LEFT CONCRETE PILLAR */}
      <mesh position={[-2.55, 2.2, 4.05]}>
        <boxGeometry args={[0.3, 4, 0.4]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* RIGHT CONCRETE PILLAR */}
      <mesh position={[2.55, 2.2, 4.05]}>
        <boxGeometry args={[0.3, 4, 0.4]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* FLAT ARCHITECTURAL ROOF */}
      <mesh position={[0, 4.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[16.4, 0.3, 9]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>

      {/* COPPER ROOF DETAIL */}
      <mesh position={[0, 4.47, 3.7]}>
        <boxGeometry args={[4.5, 0.06, 0.08]} />
        <meshStandardMaterial
          color={copper}
          metalness={0.65}
          roughness={0.35}
        />
      </mesh>

      {/* FRONT ROOF COPPER ACCENT */}
      <mesh position={[0, 4.25, 4.53]}>
        <boxGeometry args={[16, 0.045, 0.04]} />
        <meshStandardMaterial
          color={copper}
          metalness={0.65}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}
