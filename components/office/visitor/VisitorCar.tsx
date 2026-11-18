
"use client";

import type { RefObject } from "react";
import * as THREE from "three";

import Car from "./Car";

type VisitorCarProps = {
  carRef: RefObject<THREE.Group | null>;
  doorOpen: boolean;
};

export default function VisitorCar({
  carRef,
  doorOpen,
}: VisitorCarProps) {
  return (
    <group ref={carRef}>
      <Car doorOpen={doorOpen} />
    </group>
  );
}
