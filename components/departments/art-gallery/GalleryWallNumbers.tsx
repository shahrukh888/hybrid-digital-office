"use client";

import { Text } from "@react-three/drei";

// WALL NUMBER SETTINGS
const wallNumbers = [
  {
    name: "WALL 1",
    visible: true,
    position: [-1.48, 3.35, -6.95] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
    fontSize: 0.35,
    opacity: 1,
  },
  {
  name: "WALL 2",
  visible: true,
  position: [-5.25, 3.35, -4.05],
  rotation: [0, 0, 0],
  fontSize: 0.35,
  opacity: 1,
},

  {
    name: "WALL 3",
    visible: true,
    position: [-8.72, 3.35, -9.75] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
    fontSize: 0.35,
    opacity: 1,
  },
  {
    name: "WALL 4",
    visible: true,
    position: [-5.25, 3.35, -15.02] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    fontSize: 0.35,
    opacity: 1,
  },
];

export default function GalleryWallNumbers() {
  return (
    <group>
      {wallNumbers.map((wall) =>
        wall.visible ? (
          <Text
            key={wall.name}
            position={wall.position}
            rotation={wall.rotation}
            fontSize={wall.fontSize}
            color="#FFFFFF"
            fillOpacity={wall.opacity}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#25292C"
          >
            {wall.name}
          </Text>
        ) : null
      )}
    </group>
  );
}