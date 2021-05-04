import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Euler } from "three";
import { Arm } from "../components/Arm";
import { Book } from "../components/Book";
import { Candle } from "../components/Candle";
import { CandleLight } from "../components/CandleLight";
import { InfoButton } from "../components/InfoButton";
import { Ink } from "../components/Ink";
import { Paper } from "../components/Paper";
import { Scroll } from "../components/Scroll";
import { SoundButton } from "../components/SoundButton";
import { Table } from "../components/Table";

export const App = () => {
  const [infoModalVisible, setInfoModalVisibility] = useState(false);

  const renderInfoModal = () => {
    if (!infoModalVisible) {
      return;
    }

    return (
      <div
        onClick={() => setInfoModalVisibility(false)}
        className="absolute z-50 top-0 right-0 left-0 bottom-0  flex justify-center items-center w-full h-full"
      >
        <div className="bg-gray-900 rounded-lg max-w-screen-md flex flex-col p-4 text-white z-30">
          <span className="text-white ">
            This website is made in fulfillment for our final project in the
            Subject: "Life and Works of Rizal".
          </span>
          <br></br>
          <span className="text-white">
            <b>Groupmates (Pipaolo):</b>
            <ul className="list-disc m-4">
              <li>Ryan Gervacio</li>
              <li>Kyle Reyes</li>
              <li>Vinnie Ting</li>
              <li>Vincent Alfaro</li>
            </ul>
            Special thanks to our teacher:
            <em>
              <b> Pineda, J. Patrick</b>
            </em>
          </span>
        </div>
        <div className="absolute w-full h-full bg-black opacity-50 z-20"></div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black ">
      {renderInfoModal()}
      <div className="absolute z-10 top-2 right-2 flex flex-col gap-2">
        <InfoButton
          onInfoButtonPressed={() => setInfoModalVisibility(!infoModalVisible)}
        />
        <SoundButton />
      </div>
      <div
        style={{
          width: "1280px",
          height: "720px",
        }}
      >
        <Canvas className="w-full self-center">
          <Suspense fallback={null}>
            <CandleLight />
            <Table
              scale={22}
              position={[0, 0, 0]}
              rotation={new Euler(60, 0, 0)}
            />
            <Paper position={[0, 0, 1]} scale={[4, 4, 1]} />
            <Book position={[-1.2, 0.2, 1]} scale={[11, 7, 1]} />
            <Candle position={[-0.5, -0.41, 1]} scale={[11, 7, 1]} />
            <Scroll position={[1.2, -0.4, 1]} scale={[11, 7, 1]} />
            <Ink position={[2.2, 2, 1]} scale={1} />
            <Arm />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
