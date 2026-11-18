"use client";

import "@react-three/fiber";

function ParkingSpace({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* Parking Floor */}
      <mesh position={[0, 0.02, 0]} receiveShadow>
        <boxGeometry args={[3, 0.05, 5.5]} />
        <meshStandardMaterial color="#55585A" roughness={0.9} />
      </mesh>

      {/* Left Parking Line */}
      <mesh position={[-1.4, 0.06, 0]}>
        <boxGeometry args={[0.06, 0.03, 5.5]} />
        <meshStandardMaterial color="#E8E2D7" />
      </mesh>

      {/* Right Parking Line */}
      <mesh position={[1.4, 0.06, 0]}>
        <boxGeometry args={[0.06, 0.03, 5.5]} />
        <meshStandardMaterial color="#E8E2D7" />
      </mesh>

      {/* Front Boundary */}
      <mesh position={[0, 0.06, 2.7]}>
        <boxGeometry args={[2.8, 0.03, 0.06]} />
        <meshStandardMaterial color="#E8E2D7" />
      </mesh>

      {/* Rear Boundary */}
      <mesh position={[0, 0.06, -2.7]}>
        <boxGeometry args={[2.8, 0.03, 0.06]} />
        <meshStandardMaterial color="#E8E2D7" />
      </mesh>

      {/* Wheel Stop */}
      <mesh position={[0, 0.12, -2]}>
        <boxGeometry args={[1.5, 0.15, 0.18]} />
        <meshStandardMaterial color="#B8B4AA" roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function Parking() {
  return (
    <group>
      <ParkingSpace position={[-10, 0, 12]} />
      <ParkingSpace position={[-6.5, 0, 12]} />
      <ParkingSpace position={[6.5, 0, 12]} />
      <ParkingSpace position={[10, 0, 12]} />
    </group>
  );
}