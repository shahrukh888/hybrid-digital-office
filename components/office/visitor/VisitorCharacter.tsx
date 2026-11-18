
"use client";

type VisitorCharacterProps = {
  position?: [number, number, number];
  visible?: boolean;
};

export function VisitorCharacter({
  position = [0, 0, 0],
  visible = true,
}: VisitorCharacterProps) {
  return (
    <group position={position} visible={visible}>
      {/* Head */}
      <mesh position={[0, 1.68, 0]}>
        <sphereGeometry args={[0.17, 12, 12]} />
        <meshStandardMaterial color="#c99575" />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.78, -0.025]}>
        <sphereGeometry args={[0.175, 12, 8]} />
        <meshStandardMaterial color="#25201d" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.12, 0]}>
        <capsuleGeometry args={[0.23, 0.48, 4, 8]} />
        <meshStandardMaterial color="#263b50" />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.29, 1.18, 0]}>
        <capsuleGeometry args={[0.075, 0.38, 4, 8]} />
        <meshStandardMaterial color="#263b50" />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.29, 1.18, 0]}>
        <capsuleGeometry args={[0.075, 0.38, 4, 8]} />
        <meshStandardMaterial color="#263b50" />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.12, 0.48, 0]}>
        <capsuleGeometry args={[0.09, 0.55, 4, 8]} />
        <meshStandardMaterial color="#20252b" />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.12, 0.48, 0]}>
        <capsuleGeometry args={[0.09, 0.55, 4, 8]} />
        <meshStandardMaterial color="#20252b" />
      </mesh>
    </group>
  );
}
