import React, { useRef } from "react";
import { DoubleSide } from "three";
import DarkOakTexture from "../assets/images/dark-oak-texture.png";
import { MeshProps } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
export const Table = (props: MeshProps) => {
  const oakTexture = useTexture(DarkOakTexture);

  return (
    <Plane {...props} args={[1, 1]}>
      <meshStandardMaterial map={oakTexture} side={DoubleSide} />
    </Plane>
  );

  // return (
  //   <mesh {...props} ref={mesh} scale={5}>
  //     <boxGeometry args={[1, 1]}></boxGeometry>
  //     <meshStandardMaterial map={oakTexture}></meshStandardMaterial>
  //   </mesh>
  // );
};
