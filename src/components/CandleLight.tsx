import { PointLightProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import TWEEN, { Tween } from "@tweenjs/tween.js";

/// Create a candle light effect
export const CandleLight = (props: PointLightProps) => {
  const candleLightRef = useRef<THREE.PointLight>(null!);

  useFrame(() => {
    TWEEN.update();
  });

  useEffect(() => {
    // Start generating a number
    const secondsToUpdate = 1.5;
    setInterval(() => {
      const randomIntensity = Math.random() * 1 + 0.8;

      if (candleLightRef == null) {
        return;
      }
      // Create a new tween

      const tween = new Tween({ x: candleLightRef.current.intensity });
      tween.to({ x: randomIntensity }, 1000);
      tween.onUpdate((val) => {
        candleLightRef.current.intensity = val.x;
      });
      tween.start();
    }, secondsToUpdate * 1000);
  }, []);

  return (
    <pointLight
      ref={candleLightRef}
      {...props}
      position={[-6, 8, 5]}
      decay={2}
      distance={50}
      color="#f5f1d9"
      castShadow
    />
  );
};
