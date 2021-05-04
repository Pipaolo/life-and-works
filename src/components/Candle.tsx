import { Plane, Sphere, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { useRef } from "react";
import CandleTexture from "../assets/images/candle.png";

export const Candle = (props: MeshProps) => {
  const candleTexture = useTexture(CandleTexture);

  return (
    <Plane {...props} args={[1, 1, 1]}>
      <meshStandardMaterial
        map={candleTexture}
        transparent
      ></meshStandardMaterial>
    </Plane>
  );
};
