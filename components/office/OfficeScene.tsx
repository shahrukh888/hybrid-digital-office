
"use client";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";

import Environment from "./exterior/Environment";
import Building from "./exterior/Building";
import SiteGround from "./exterior/SiteGround";
import Entrance from "./exterior/Entrance";
import Landscaping from "./exterior/Landscaping";
import Parking from "./exterior/Parking";
import Grass from "./exterior/Grass";
import ShrubBeds from "./exterior/ShrubBeds";
import FlowerBeds from "./exterior/FlowerBeds";
import OutdoorLights from "./exterior/OutdoorLights";
import BoundaryFence from "./exterior/BoundaryFence";

import Reception from "./reception/Reception";
import VisitorController from "./visitor/VisitorController";
import RearExtension from "./RearExtension";
import ArtGallery from "../departments/art-gallery/ArtGallery";

export default function OfficeScene() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#202327]">

      {/* BRANDING */}
      <div className="absolute left-8 top-8 z-10 pointer-events-none">
        <h1 className="text-sm tracking-[0.3em] text-white">
          SHAHRUKH AZHAR
        </h1>

        <p className="mt-2 text-xs tracking-[0.2em] text-[#B87345]">
          DIGITAL HEADQUARTERS
        </p>
      </div>

      <Canvas
        shadows
        dpr={[1, 1.5]}
      >
        {/* DAYTIME SKY */}
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          turbidity={2}
          rayleigh={3}
          mieCoefficient={0.003}
          mieDirectionalG={0.8}
        />

        {/* LIGHTING */}
        <hemisphereLight
          args={["#DCE8F2", "#56604E", 1.1]}
        />

        <directionalLight
          position={[-12, 20, 10]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-25}
          shadow-camera-right={25}
          shadow-camera-top={25}
          shadow-camera-bottom={-25}
          shadow-bias={-0.0001}
        />

        <pointLight
          position={[0, 3.5, 7]}
          color="#FFD1A1"
          intensity={7}
          distance={13}
          decay={2}
        />

        {/* ENVIRONMENT */}
        <Environment />
        <Reception />

        {/* EXTERIOR */}
        <SiteGround />
        <Grass />
        <Building />
        <RearExtension />
        <ArtGallery />

        <Entrance
          onEnter={() => {}}
          onExit={() => {}}
        />

        <Landscaping />
        <ShrubBeds />
        <FlowerBeds />
        <OutdoorLights />
        <BoundaryFence />
        <Parking />

        {/* AUTOMATIC VISITOR ARRIVAL */}
        <VisitorController />

      </Canvas>
    </main>
  );
}
