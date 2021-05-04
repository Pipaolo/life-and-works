import { Plane, useTexture } from "@react-three/drei";

import { DoubleSide } from "three";
import PaperTexture from "../assets/images/paper_with_quote.png";

export const Paper = (props: JSX.IntrinsicElements["mesh"]) => {
  const paperTexture = useTexture(PaperTexture);
  return (
    <Plane {...props} args={[1, 1]}>
      <meshStandardMaterial map={paperTexture} side={DoubleSide} transparent />
    </Plane>
  );
};
