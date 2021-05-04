import { Plane, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import InkTexture from "../assets/images/ink.png";
export const Ink = (props: MeshProps) => {
  const inkTexture = useTexture(InkTexture);
  return (
    <Plane {...props} args={[1, 1, 1]}>
      <meshStandardMaterial map={inkTexture} transparent />
    </Plane>
  );
};
