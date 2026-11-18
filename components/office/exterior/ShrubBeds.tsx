"use client";

function Shrub({
  position,
  scale = 1,
  color = "#496B42",
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <sphereGeometry args={[0.55, 12, 10]} />
        <meshStandardMaterial color={color} roughness={1} />
      </mesh>

      <mesh position={[0.28, 0.12, 0.18]} castShadow>
        <sphereGeometry args={[0.38, 10, 8]} />
        <meshStandardMaterial color="#587849" roughness={1} />
      </mesh>

      <mesh position={[-0.25, 0.08, -0.12]} castShadow>
        <sphereGeometry args={[0.35, 10, 8]} />
        <meshStandardMaterial color="#3E6038" roughness={1} />
      </mesh>
    </group>
  );
}

function Bed({
  position,
  children,
}: {
  position: [number, number, number];
  children: React.ReactNode;
}) {
  return (
    <group position={position}>
      {/* Stone planter base */}
      <mesh position={[0, 0.12, 0]} receiveShadow>
        <boxGeometry args={[5, 0.24, 1.5]} />
        <meshStandardMaterial color="#77766D" roughness={1} />
      </mesh>

      {/* Dark soil */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[4.8, 0.04, 1.3]} />
        <meshStandardMaterial color="#393B2D" />
      </mesh>

      {children}
    </group>
  );
}

export default function ShrubBeds() {
  return (
    <group>
      {/* Left Landscape Bed */}
      <Bed position={[-16, 0, 5]}>
        <Shrub position={[-1.5, 0.48, 0]} scale={0.65} />
        <Shrub position={[0, 0.48, 0]} scale={0.75} color="#527447" />
        <Shrub position={[1.5, 0.48, 0]} scale={0.65} />
      </Bed>

      {/* Right Landscape Bed */}
      <Bed position={[16, 0, 5]}>
        <Shrub position={[-1.5, 0.48, 0]} scale={0.65} />
        <Shrub position={[0, 0.48, 0]} scale={0.75} color="#527447" />
        <Shrub position={[1.5, 0.48, 0]} scale={0.65} />
      </Bed>

      {/* Rear Left Shrubs */}
      <Shrub position={[-15, 0.35, -8]} scale={0.8} />
      <Shrub position={[-17, 0.35, -8]} scale={0.7} />

      {/* Rear Right Shrubs */}
      <Shrub position={[15, 0.35, -8]} scale={0.8} />
      <Shrub position={[17, 0.35, -8]} scale={0.7} />
    </group>
  );
}