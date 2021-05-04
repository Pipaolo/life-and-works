import ArmImage from "../assets/images/arm.png";
import { MeshProps, useFrame, useThree } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import { useRef } from "react";
export const Arm = (props: MeshProps) => {
  const { viewport } = useThree();
  const armTexture = useTexture(ArmImage);
  const armRef = useRef<THREE.Mesh>(null!);

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    armRef.current.position.set(x * 0.5, y * 0.5, 2);
    // armRef.current.rotation.set(-y, x, 0);
  });

  return (
    <Plane {...props} ref={armRef} args={[1, 1]} scale={2}>
      <meshStandardMaterial map={armTexture} transparent></meshStandardMaterial>
    </Plane>
  );
};
