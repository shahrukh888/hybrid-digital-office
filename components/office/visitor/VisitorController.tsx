
"use client";

import { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import VisitorCar from "./VisitorCar";
import { VisitorCharacter } from "./VisitorCharacter";
import SecurityGate from "../exterior/SecurityGate";
import CarCamera from "./CarCamera";
import FirstPersonCamera from "./FirstPersonCamera";

type Phase =
  | "approach"
  | "waiting-at-gate"
  | "gate-opening"
  | "parking"
  | "door-open"
  | "visitor-exiting"
  | "visitor-ready";

export default function VisitorController() {
  const carRef = useRef<THREE.Group>(null);
  const visitorRef = useRef<THREE.Group>(null);

  const phase = useRef<Phase>("approach");
  const elapsed = useRef(0);

  const [gateOpen, setGateOpen] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [showGatePrompt, setShowGatePrompt] = useState(false);
  const [showVisitor, setShowVisitor] = useState(false);
  const [firstPersonActive, setFirstPersonActive] = useState(false);

  const [visitorPosition, setVisitorPosition] =
    useState<[number, number, number]>([5.3, 0, 12]);

  const parkingRoute = useRef(
    new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 21),
        new THREE.Vector3(0, 0, 17),
        new THREE.Vector3(2, 0, 15),
        new THREE.Vector3(5, 0, 15),
        new THREE.Vector3(6.5, 0, 12),
      ],
      false,
      "catmullrom",
      0.35
    )
  );

  const handleOpenGate = () => {
    if (phase.current !== "waiting-at-gate") return;

    setShowGatePrompt(false);
    setGateOpen(true);

    phase.current = "gate-opening";
    elapsed.current = 0;
  };

  useFrame((_, delta) => {
    if (!carRef.current) return;

    elapsed.current += delta;

    if (phase.current === "approach") {
      const distance = Math.min(elapsed.current * 4.5, 17);

      carRef.current.position.set(0, 0, 38 - distance);
      carRef.current.rotation.y = 0;

      if (distance >= 17) {
        phase.current = "waiting-at-gate";
        elapsed.current = 0;
        setShowGatePrompt(true);
      }
    }

    else if (phase.current === "waiting-at-gate") {
      // Wait for gate button.
    }

    else if (phase.current === "gate-opening") {
      if (elapsed.current >= 2.5) {
        phase.current = "parking";
        elapsed.current = 0;
      }
    }

    else if (phase.current === "parking") {
      const duration = 7;
      const progress = Math.min(elapsed.current / duration, 1);
      const eased = progress * progress * (3 - 2 * progress);

      const route = parkingRoute.current;
      const position = route.getPointAt(eased);
      const tangent = route.getTangentAt(eased);

      carRef.current.position.copy(position);

      carRef.current.rotation.y = Math.atan2(
        -tangent.x,
        -tangent.z
      );

      if (progress >= 1) {
        carRef.current.position.set(6.5, 0, 12);
        carRef.current.rotation.y = 0;

        setGateOpen(false);
        setDoorOpen(true);

        phase.current = "door-open";
        elapsed.current = 0;
      }
    }

    else if (phase.current === "door-open") {
      if (elapsed.current >= 1.5) {
        setShowVisitor(true);

        phase.current = "visitor-exiting";
        elapsed.current = 0;
      }
    }

    else if (phase.current === "visitor-exiting") {
      const duration = 2;
      const progress = Math.min(elapsed.current / duration, 1);

      setVisitorPosition([
        THREE.MathUtils.lerp(5.3, 4.1, progress),
        0,
        12,
      ]);

      if (progress >= 1) {
        setDoorOpen(false);

        phase.current = "visitor-ready";
        elapsed.current = 0;
      }
    }

    else if (phase.current === "visitor-ready") {
      // Visitor is standing still.
      // Activate first-person camera after the door closes.
      if (elapsed.current >= 0.8) {
        setFirstPersonActive(true);
        phase.current = "visitor-ready";
      }
    }
  });

  return (
    <>
      <VisitorCar carRef={carRef} doorOpen={doorOpen} />

      <CarCamera
        targetRef={carRef}
        active={!firstPersonActive}
      />

      {showVisitor && (
        <group ref={visitorRef} position={visitorPosition}>
          <VisitorCharacter />
        </group>
      )}

      <FirstPersonCamera
        targetRef={visitorRef}
        active={firstPersonActive}
      />

      <SecurityGate isOpen={gateOpen} />

      {showGatePrompt && (
        <Html position={[0, 2.5, 19]} center distanceFactor={12}>
          <button
            onClick={handleOpenGate}
            className="whitespace-nowrap rounded-lg border border-white/30 bg-[#202327] px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#ff4d3d]"
          >
            Open Gate
          </button>
        </Html>
      )}
    </>
  );
}
