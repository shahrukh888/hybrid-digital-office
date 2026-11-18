"use client";

const frameColor = "#A8794F";
const canvasColor = "#25292C";

function Frame({
  position,
  rotation = [0, Math.PI, 0],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* OUTER FRAME */}
      <mesh castShadow>
        <boxGeometry args={[1.9, 1.65, 0.12]} />
        <meshStandardMaterial
          color={frameColor}
          metalness={0.45}
          roughness={0.4}
        />
      </mesh>

      {/* EMPTY CANVAS */}
      <mesh position={[0, 0, 0.07]}>
        <boxGeometry args={[1.68, 1.43, 0.025]} />
        <meshStandardMaterial
          color={canvasColor}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

export default function GalleryFrames() {
  return (
    <group>
      {/* WALL 1 — LEFT - ENTRANCE WALL */}
      <Frame position={[-6, 2.35, -4.38]} />
      <Frame position={[-3.4, 2.35, -4.38]} />

      {/* WALL 2 — REAR WALL */}
      <Frame
        position={[-7.1, 2.35, -14.98]} 
        rotation={[0, 0, 0]}
      />
      <Frame
        position={[-3.4, 2.35, -14.98]}
        rotation={[0, 0, 0]}
      />

      {/* WALL 3 — LEFT LONG WALL */}
      <Frame
        position={[-8.69, 2.35, -7.2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Frame
        position={[-8.69, 2.35, -12.1]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* WALL 4 — RIGHT LONG WALL - ENTRANCE WALL */}
      
      <Frame
        position={[-1.72, 2.35, -11.70]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}