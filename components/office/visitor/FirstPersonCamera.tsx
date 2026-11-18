
"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type FirstPersonCameraProps = {
  targetRef: React.RefObject<THREE.Group | null>;
  active: boolean;
};

export default function FirstPersonCamera({
  targetRef,
  active,
}: FirstPersonCameraProps) {
  const { camera, gl } = useThree();

  const keys = useRef<Record<string, boolean>>({});
  const yaw = useRef(0);
  const pitch = useRef(0);

  const direction = useRef(new THREE.Vector3());
  const right = useRef(new THREE.Vector3());

  useEffect(() => {
  if (!active) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (document.pointerLockElement !== gl.domElement) return;
    keys.current[event.code] = true;
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    keys.current[event.code] = false;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (document.pointerLockElement !== gl.domElement) return;

    yaw.current -= event.movementX * 0.002;
    pitch.current -= event.movementY * 0.002;

    pitch.current = THREE.MathUtils.clamp(
      pitch.current,
      -Math.PI / 2.5,
      Math.PI / 2.5
    );
  };

  const handleClick = () => {
    if (document.pointerLockElement !== gl.domElement) {
      gl.domElement.requestPointerLock();
    }
  };

  const handlePointerLockChange = () => {
    if (document.pointerLockElement !== gl.domElement) {
      keys.current = {};
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("mousemove", handleMouseMove);

  document.addEventListener(
    "pointerlockchange",
    handlePointerLockChange
  );

  gl.domElement.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    window.removeEventListener("mousemove", handleMouseMove);

    document.removeEventListener(
      "pointerlockchange",
      handlePointerLockChange
    );

    gl.domElement.removeEventListener("click", handleClick);

    if (document.pointerLockElement === gl.domElement) {
      document.exitPointerLock();
    }
  };
}, [active, gl]);

  useFrame((_, delta) => {
    const visitor = targetRef.current;

    if (!visitor || !active) return;

    const moveSpeed = 3.0;

    direction.current.set(
      -Math.sin(yaw.current),
      0,
      -Math.cos(yaw.current)
    );

    right.current.set(
      Math.cos(yaw.current),
      0,
      -Math.sin(yaw.current)
    );

    const forward = keys.current["KeyW"] || keys.current["ArrowUp"];
    const backward = keys.current["KeyS"] || keys.current["ArrowDown"];
    const left = keys.current["KeyA"] || keys.current["ArrowLeft"];
    const rightKey = keys.current["KeyD"] || keys.current["ArrowRight"];

    const movement = new THREE.Vector3();

    if (forward) movement.add(direction.current);
    if (backward) movement.sub(direction.current);
    if (left) movement.sub(right.current);
    if (rightKey) movement.add(right.current);

    if (movement.lengthSq() > 0) {
      movement.normalize().multiplyScalar(moveSpeed * delta);
      visitor.position.add(movement);
    }

    visitor.rotation.y = yaw.current;

    camera.position.set(
      visitor.position.x,
      visitor.position.y + 1.65,
      visitor.position.z
    );

    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw.current;
    camera.rotation.x = pitch.current;
  });

  return null;
}
