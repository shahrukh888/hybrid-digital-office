"use client";

export default function GalleryWalls() {
  const concrete = "#34383B";

  return (
    <group>
      {/* WALL 1 — FRONT WALL */}
      <mesh position={[-5.25, 2.2, -4.25]} castShadow>
        <boxGeometry args={[7.3, 4, 0.2]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* WALL 2 — LEFT LONG WALL */}
      <mesh position={[-8.85, 2.2, -9.75]} castShadow>
        <boxGeometry args={[0.2, 4, 11]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* WALL 3 — REAR WALL */}
      <mesh position={[-5.25, 2.2, -15.15]} castShadow>
        <boxGeometry args={[7.3, 4, 0.2]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* WALL 4 — RIGHT PARTITION: FRONT SECTION */}
      <mesh position={[-1.6, 2.2, -5.1]} castShadow>
        <boxGeometry args={[0.2, 4, 1.7]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* WALL 4 — RIGHT PARTITION: REAR SECTION */}
      <mesh position={[-1.6, 2.2, -11.6]} castShadow>
        <boxGeometry args={[0.2, 4, 7.3]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>
    </group>
  );
}