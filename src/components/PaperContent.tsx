import { Text } from "@react-three/drei";

export const PaperContent = () => {
  return (
    <Text
      position={[0, 1.4, 1]}
      rotation={[0, 0, 0]}
      fontSize={0.2}
      maxWidth={2.3}
      color="black"
      font="https://cdn.jsdelivr.net/npm/@fontsource/italianno@4.2.2/files/italianno-latin-400-normal.woff"
      fillOpacity={0.8}
    >
      I die without seeing dawn's light shining on my country... You, who will
      see it, welcome it for me...don't forget those who fell during the
      nighttime.
    </Text>
  );
};
