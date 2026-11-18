
"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CarCameraProps = {
  targetRef: React.RefObject<THREE.Group | null>;
  active: boolean;
};

export default function CarCamera({
  targetRef,
  active,
}: CarCameraProps) {
  const { camera } = useThree();

  const desiredPosition = useRef(new THREE.Vector3());
  const lookTarget = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const car = targetRef.current;

    if (!car || !active) return;

    const offset = new THREE.Vector3(0, 5, 9);
    offset.applyQuaternion(car.quaternion);

    desiredPosition.current
      .copy(car.position)
      .add(offset);

    lookTarget.current.set(
      car.position.x,
      car.position.y + 1,
      car.position.z - 3
    );

    const smoothness = 1 - Math.exp(-3 * delta);

    camera.position.lerp(
      desiredPosition.current,
      smoothness
    );

    camera.lookAt(lookTarget.current);
  });

  return null;
}
