"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";

export default function Grass() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let seed = 12345;

    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // Base grass colour
    ctx.fillStyle = "#526F43";
    ctx.fillRect(0, 0, 512, 512);

    // Natural colour variation
    const patches = ["#607D4A", "#405F38", "#6B854E", "#49683C"];

    for (let i = 0; i < 18000; i++) {
      ctx.fillStyle = patches[Math.floor(random() * patches.length)];
      ctx.globalAlpha = 0.15 + random() * 0.35;

      const x = random() * 512;
      const y = random() * 512;

      ctx.fillRect(x, y, 1 + random() * 2, 1 + random() * 2);
    }

    // Fine grass strokes
    for (let i = 0; i < 16000; i++) {
      const x = random() * 512;
      const y = random() * 512;
      const length = 4 + random() * 10;

      ctx.strokeStyle = patches[Math.floor(random() * patches.length)];
      ctx.globalAlpha = 0.45 + random() * 0.4;
      ctx.lineWidth = 0.5 + random() * 0.8;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (random() - 0.5) * 2, y - length);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    const grassTexture = new THREE.CanvasTexture(canvas);
    grassTexture.wrapS = THREE.RepeatWrapping;
    grassTexture.wrapT = THREE.RepeatWrapping;
    grassTexture.repeat.set(14, 14);
    grassTexture.colorSpace = THREE.SRGBColorSpace;
    grassTexture.anisotropy = 4;

    setTexture(grassTexture);

    return () => grassTexture.dispose();
  }, []);

  if (!texture) return null;

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.041, 0]}
      receiveShadow
    >
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial
        map={texture}
        roughness={1}
      />
    </mesh>
  );
}