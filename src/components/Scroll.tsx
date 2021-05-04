import { Plane, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import ScrollTexture from "../assets/images/scroll.png";
export const Scroll = (props: MeshProps) => {
  const scrollTexture = useTexture(ScrollTexture);
  return (
    <Plane {...props} args={[1, 1, 1]}>
      <meshStandardMaterial map={scrollTexture} transparent />
    </Plane>
  );
};
