"use client";

import GalleryWalls from "./GalleryWalls";
import GalleryFrames from "./GalleryFrames";
import GalleryWallNumbers from "./GalleryWallNumbers";
import GalleryLighting from "./GalleryLighting";
import GalleryFurniture from "./GalleryFurniture";

export default function ArtGallery() {
  return (
    <group>
      <GalleryWalls />
      <GalleryFrames />
      <GalleryWallNumbers />
      <GalleryLighting />
      <GalleryFurniture />
    </group>
  );
}