import { Plane, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { DoubleSide } from "three";
import BookTexture from "../assets/images/book.png";

export const Book = (props: MeshProps) => {
  const bookTexture = useTexture(BookTexture);

  return (
    <Plane {...props} args={[1, 1]}>
      <meshStandardMaterial map={bookTexture} side={DoubleSide} transparent />
    </Plane>
  );
};
