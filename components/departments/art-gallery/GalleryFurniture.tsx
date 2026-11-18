"use client";

const sofaColor = "#34383B";
const cushionColor = "#41474A";

function Sofa({
  position,
  rotation = [0, 0, 0],
  size,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Sofa Base */}
      <mesh position={[0, 0.28, 0]} castShadow>
        <boxGeometry args={[size[0], 0.45, size[2]]} />
        <meshStandardMaterial color={sofaColor} roughness={0.85} />
      </mesh>

      {/* Seat Cushion */}
      <mesh position={[0, 0.53, 0.08]} castShadow>
        <boxGeometry args={[size[0] - 0.12, 0.12, size[2] - 0.18]} />
        <meshStandardMaterial color={cushionColor} roughness={0.9} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.72, -size[2] / 2 + 0.12]} castShadow>
        <boxGeometry args={[size[0], 0.65, 0.22]} />
        <meshStandardMaterial color={sofaColor} roughness={0.85} />
      </mesh>

      {/* Left Armrest */}
      <mesh position={[-size[0] / 2 + 0.1, 0.55, 0.05]} castShadow>
        <boxGeometry args={[0.2, 0.55, size[2] - 0.1]} />
        <meshStandardMaterial color={sofaColor} roughness={0.85} />
      </mesh>

      {/* Right Armrest */}
      <mesh position={[size[0] / 2 - 0.1, 0.55, 0.05]} castShadow>
        <boxGeometry args={[0.2, 0.55, size[2] - 0.1]} />
        <meshStandardMaterial color={sofaColor} roughness={0.85} />
      </mesh>
    </group>
  );
}

export default function GalleryFurniture() {
  return (
    <group>
      {/* PREMIUM CENTRE RUG */}
      <group position={[-5.25, 0.22, -9.75]}>
        {/* Main Rug */}
        <mesh position={[0, 0.025, 0]} receiveShadow>
          <boxGeometry args={[3.8, 0.05, 3.8]} />
          <meshStandardMaterial color="#641B2D" roughness={0.95} />
        </mesh>

        {/* Golden Border */}
        <mesh position={[0, 0.053, 0]}>
          <boxGeometry args={[3.65, 0.012, 3.65]} />
          <meshStandardMaterial
            color="#B18A52"
            roughness={0.7}
            metalness={0.25}
          />
        </mesh>

        {/* Inner Red Surface */}
        <mesh position={[0, 0.062, 0]}>
          <boxGeometry args={[3.52, 0.012, 3.52]} />
          <meshStandardMaterial color="#78243A" roughness={1} />
        </mesh>
      </group>

      {/* FRONT SOFA */}
      <Sofa position={[-5.25, 0, -6.75]} size={[3, 0.8, 1]} />

      {/* REAR SOFA */}
      <Sofa
        position={[-5.25, 0, -12.75]}
        rotation={[0, Math.PI, 0]}
        size={[3, 0.8, 1]}
      />

      {/* LEFT SOFA */}
      <Sofa
        position={[-7.25, 0, -9.75]}
        rotation={[0, Math.PI / -2, 0]}
        size={[3, 0.8, 1]}
      />

      {/* RIGHT SOFA */}
      <Sofa
        position={[-3.25, 0, -10.75]}
        rotation={[0, -Math.PI / -2, 0]}
        size={[3, 0.8, 1]}
      />
    </group>
  );
}