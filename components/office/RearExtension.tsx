
"use client";

export default function RearExtension() {
  const concrete = "#34383B";
  const frame = "#25292C";
  const floor = "#55595B";

  return (
    <group>
      {/* EXTENSION FLOOR */}
      <mesh position={[0, 0.12, -9.75]} receiveShadow>
        <boxGeometry args={[18, 0.2, 11]} />
        <meshStandardMaterial color={floor} roughness={0.75} />
      </mesh>

      {/* LEFT OUTER WALL */}
      <mesh position={[-8.9, 2.2, -9.75]} castShadow>
        <boxGeometry args={[0.2, 4, 11]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* RIGHT OUTER WALL */}
      <mesh position={[8.9, 2.2, -9.75]} castShadow>
        <boxGeometry args={[0.2, 4, 11]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* LEFT SIDE CONNECTION */}
      <mesh position={[-8.35, 2.2, -4.375]} castShadow>
        <boxGeometry args={[1.3, 4, 0.65]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* RIGHT SIDE CONNECTION */}
      <mesh position={[8.35, 2.2, -4.375]} castShadow>
        <boxGeometry args={[1.3, 4, 0.65]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* REAR WALL - LEFT SECTION */}
      <mesh position={[-5.1, 2.2, -15.15]} castShadow>
        <boxGeometry args={[7.8, 4, 0.2]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* REAR WALL - RIGHT SECTION */}
      <mesh position={[5.1, 2.2, -15.15]} castShadow>
        <boxGeometry args={[7.8, 4, 0.2]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* REAR WALL - ABOVE EXIT */}
      <mesh position={[0, 3.8, -15.15]} castShadow>
        <boxGeometry args={[2.4, 0.8, 0.2]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* EMERGENCY EXIT DOOR FRAME */}
      <group position={[0, 0, -15.15]}>
        <mesh position={[-1.2, 1.8, 0]}>
          <boxGeometry args={[0.12, 3.6, 0.16]} />
          <meshStandardMaterial color={frame} metalness={0.6} />
        </mesh>

        <mesh position={[1.2, 1.8, 0]}>
          <boxGeometry args={[0.12, 3.6, 0.16]} />
          <meshStandardMaterial color={frame} metalness={0.6} />
        </mesh>

        {/* DOUBLE GLASS EXIT DOORS */}
        <mesh position={[-0.55, 1.8, 0]}>
          <boxGeometry args={[1.05, 3.2, 0.07]} />
          <meshPhysicalMaterial
            color="#9CBAC2"
            transparent
            opacity={0.32}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        <mesh position={[0.55, 1.8, 0]}>
          <boxGeometry args={[1.05, 3.2, 0.07]} />
          <meshPhysicalMaterial
            color="#9CBAC2"
            transparent
            opacity={0.32}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        {/* EXIT SIGN */}
        <mesh position={[0, 3.65, 0.12]}>
          <boxGeometry args={[0.9, 0.3, 0.08]} />
          <meshStandardMaterial
            color="#174D36"
            emissive="#174D36"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* LEFT PARTITION - FRONT SECTION */}
      <mesh position={[-1.5, 2.2, -5.1]} castShadow>
        <boxGeometry args={[0.16, 4, 1.7]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* LEFT PARTITION - REAR SECTION */}
      <mesh position={[-1.5, 2.2, -11.6]} castShadow>
        <boxGeometry args={[0.16, 4, 7.3]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* RIGHT PARTITION - FRONT SECTION */}
      <mesh position={[1.5, 2.2, -5.1]} castShadow>
        <boxGeometry args={[0.16, 4, 1.7]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* RIGHT PARTITION - REAR SECTION */}
      <mesh position={[1.5, 2.2, -11.6]} castShadow>
        <boxGeometry args={[0.16, 4, 7.3]} />
        <meshStandardMaterial color={concrete} />
      </mesh>

      {/* ART GALLERY GLASS DOOR - ALIGNED WITH OPENING */}
      <group position={[-1.5, 0, -6.95]}>
        <mesh position={[0, 2, -0.48]}>
          <boxGeometry args={[0.06, 3.8, 0.94]} />
          <meshPhysicalMaterial
            color="#9CBAC2"
            transparent
            opacity={0.32}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        <mesh position={[0, 2, 0.48]}>
          <boxGeometry args={[0.06, 3.8, 0.94]} />
          <meshPhysicalMaterial
            color="#9CBAC2"
            transparent
            opacity={0.32}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        <mesh position={[0, 3.95, 0]}>
          <boxGeometry args={[0.12, 0.08, 2]} />
          <meshStandardMaterial color={frame} metalness={0.6} />
        </mesh>
      </group>

      {/* WEB & DIGITAL SERVICES GLASS DOOR - ALIGNED WITH OPENING */}
      <group position={[1.5, 0, -6.95]}>
        <mesh position={[0, 2, -0.48]}>
          <boxGeometry args={[0.06, 3.8, 0.94]} />
          <meshPhysicalMaterial
            color="#9CBAC2"
            transparent
            opacity={0.32}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        <mesh position={[0, 2, 0.48]}>
          <boxGeometry args={[0.06, 3.8, 0.94]} />
          <meshPhysicalMaterial
            color="#9CBAC2"
            transparent
            opacity={0.32}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        <mesh position={[0, 3.95, 0]}>
          <boxGeometry args={[0.12, 0.08, 2]} />
          <meshStandardMaterial color={frame} metalness={0.6} />
        </mesh>
      </group>

      {/* RECEPTION TO CORRIDOR FLOOR CONNECTION */}
      <mesh position={[0, 0.235, -4.05]} receiveShadow>
        <boxGeometry args={[3, 0.04, 1.2]} />
        <meshStandardMaterial color="#292D30" roughness={0.6} />
      </mesh>

      {/* CORRIDOR FLOOR */}
      <mesh position={[0, 0.235, -9.75]}>
        <boxGeometry args={[2.8, 0.04, 10.8]} />
        <meshStandardMaterial color="#858783" roughness={0.65} />
      </mesh>

      {/* FLOOR LED - ART GALLERY SIDE */}
      <mesh position={[-1.25, 0.26, -9.75]}>
        <boxGeometry args={[0.07, 0.02, 8.8]} />
        <meshStandardMaterial
          color="#FFF1D8"
          emissive="#FFF1D8"
          emissiveIntensity={2}
        />
      </mesh>

      {/* FLOOR LED - WEB SERVICES SIDE */}
      <mesh position={[1.25, 0.26, -9.75]}>
        <boxGeometry args={[0.07, 0.02, 8.8]} />
        <meshStandardMaterial
          color="#FFF1D8"
          emissive="#FFF1D8"
          emissiveIntensity={2}
        />
      </mesh>

      {/* GALLERY FLOOR */}
      <mesh position={[-5.25, 0.235, -9.75]}>
        <boxGeometry args={[7.3, 0.04, 10.8]} />
        <meshStandardMaterial color="#B8B3A9" roughness={0.65} />
      </mesh>

      {/* ART GALLERY - LEFT SIDE WALL */}
      <mesh position={[-8.85, 2.2, -9.75]} castShadow>
        <boxGeometry args={[0.2, 4, 11]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* ART GALLERY - REAR WALL */}
      <mesh position={[-5.25, 2.2, -15.15]} castShadow>
        <boxGeometry args={[7.3, 4, 0.2]} />
        <meshStandardMaterial color={concrete} roughness={0.85} />
      </mesh>

      {/* DIGITAL SERVICES FLOOR */}
      <mesh position={[5.25, 0.235, -9.75]}>
        <boxGeometry args={[7.3, 0.04, 10.8]} />
        <meshStandardMaterial color="#3B3F42" roughness={0.7} />
      </mesh>

      {/* CORRIDOR CEILING */}
      <mesh position={[0, 4.15, -9.75]}>
        <boxGeometry args={[3, 0.2, 11]} />
        <meshStandardMaterial color="#62696B" roughness={0.8} />
      </mesh>

      {/* CORRIDOR RECESSED LINEAR LED - LEFT */}
      <mesh position={[-0.85, 4.035, -9.75]}>
        <boxGeometry args={[0.07, 0.025, 8.8]} />
        <meshStandardMaterial
          color="#FFF1D8"
          emissive="#FFF1D8"
          emissiveIntensity={2}
        />
      </mesh>

      {/* CORRIDOR RECESSED LINEAR LED - RIGHT */}
      <mesh position={[0.85, 4.035, -9.75]}>
        <boxGeometry args={[0.07, 0.025, 8.8]} />
        <meshStandardMaterial
          color="#FFF1D8"
          emissive="#FFF1D8"
          emissiveIntensity={2}
        />
      </mesh>

      {/* CORRIDOR LIGHTING */}
      <pointLight
        position={[0, 3.5, -7]}
        color="#FFF1D8"
        intensity={3}
        distance={12}
        decay={2}
      />

      <pointLight
        position={[0, 3.5, -12]}
        color="#FFF1D8"
        intensity={3}
        distance={12}
        decay={2}
      />

      {/* GALLERY CEILING */}
      <mesh position={[-5.25, 4.15, -9.75]}>
        <boxGeometry args={[7.5, 0.2, 11]} />
        <meshStandardMaterial color={frame} />
      </mesh>

      {/* DIGITAL SERVICES CEILING */}
      <mesh position={[5.25, 4.15, -9.75]}>
        <boxGeometry args={[7.5, 0.2, 11]} />
        <meshStandardMaterial color={frame} />
      </mesh>
    </group>
  );
}
