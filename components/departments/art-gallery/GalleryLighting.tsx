"use client";

// =====================================
// CORNER LED LAMP
// =====================================

function CornerLamp({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* LAMP BASE */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.22, 0.25, 0.18, 24]} />
        <meshStandardMaterial
          color="#292D30"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* LED TUBE */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.055, 0.055, 1.4, 16]} />
        <meshStandardMaterial
          color="#FFF1D8"
          emissive="#FFF1D8"
          emissiveIntensity={3}
        />
      </mesh>

      {/* WARM LIGHT */}
      <pointLight
        position={[0, 1, 0]}
        color="#FFF1D8"
        intensity={2}
        distance={5}
      />
    </group>
  );
}

// =====================================
// CEILING SPOTLIGHT
// =====================================

function GallerySpotlight({
  position,
  visible = true,
}: {
  position: [number, number, number];
  visible?: boolean;
}) {
  if (!visible) return null;

  return (
    <group position={position}>
      {/* CEILING FIXTURE */}
      <mesh>
        <cylinderGeometry args={[0.13, 0.10, 0.08, 20]} />
        <meshStandardMaterial
          color="#292D30"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* SPOTLIGHT */}
      <spotLight
        position={[0, -0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color="#FFF1D8"
        intensity={35}
        distance={4}
        angle={0.42}
        penumbra={0.65}
        decay={2}
      />
    </group>
  );
}

// =====================================
// MAIN GALLERY LIGHTING
// =====================================

export default function GalleryLighting() {
  return (
    <group>

      {/* =================================
          WALL 1 — ENTRANCE
      ================================= */}

      <GallerySpotlight position={[-7.1, 4.0, -4.8]} />
      <GallerySpotlight position={[-3.4, 4.0, -4.8]} />


      {/* =================================
          WALL 2 — LEFT SIDE
      ================================= */}

      <GallerySpotlight position={[-7.1, 4.0, -14.5]} />
      <GallerySpotlight position={[-3.4, 4.0, -14.5]} />


      {/* =================================
          WALL 3 — OPPOSITE
      ================================= */}

      <GallerySpotlight position={[-8.0, 4.0, -7.2]} />
      <GallerySpotlight position={[-8.0, 4.0, -12.1]} />


      {/* =================================
          WALL 4 — RIGHT SIDE
      ================================= */}

      <GallerySpotlight position={[-2.4, 4.0, -8.8]} />
      <GallerySpotlight position={[-2.4, 4.0, -12.1]} />


      {/* =================================
          FLOOR CORNER LAMPS
      ================================= */}

      <CornerLamp position={[-8.35, 0.25, -4.8]} />
      <CornerLamp position={[-2.05, 0.25, -4.8]} />
      <CornerLamp position={[-8.35, 0.25, -14.7]} />
      <CornerLamp position={[-2.05, 0.25, -14.7]} />

    </group>
  );
}