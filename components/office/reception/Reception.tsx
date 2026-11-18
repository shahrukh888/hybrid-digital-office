
"use client";

export default function Reception() {
  return (
    <group>
      {/* Main Reception Floor */}
      <mesh
        position={[0, 0.22, 0.1]}
        receiveShadow
      >
        <boxGeometry args={[12, 0.035, 7.2]} />
        <meshStandardMaterial
          color="#B8B3A9"
          roughness={0.65}
          metalness={0.05}
        />
      </mesh>

      {/* Front Floor Border */}
      <mesh position={[0, 0.245, 3.68]}>
        <boxGeometry args={[12, 0.025, 0.08]} />
        <meshStandardMaterial color="#B87345" metalness={0.5} />
      </mesh>

      {/* Rear Floor Border */}
      <mesh position={[0, 0.245, -3.48]}>
        <boxGeometry args={[12, 0.025, 0.08]} />
        <meshStandardMaterial color="#B87345" metalness={0.5} />
      </mesh>

      {/* Left Floor Border */}
      <mesh position={[-5.96, 0.245, 0.1]}>
        <boxGeometry args={[0.08, 0.025, 7.2]} />
        <meshStandardMaterial color="#B87345" metalness={0.5} />
      </mesh>

      {/* Right Floor Border */}
      <mesh position={[5.96, 0.245, 0.1]}>
        <boxGeometry args={[0.08, 0.025, 7.2]} />
        <meshStandardMaterial color="#B87345" metalness={0.5} />
      </mesh>
    </group>
  );
}
