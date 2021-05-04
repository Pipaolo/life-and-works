import { MouseEventHandler } from "react";

interface Props {
  onInfoButtonPressed?: MouseEventHandler;
}

export const InfoButton = (props: Props) => {
  return (
    <div
      onClick={props.onInfoButtonPressed}
      className="cursor-pointer bg-gray-800 rounded-lg p-4 transition duration-300 hover:bg-gray-600 text-white font-bold"
    >
      INFO
    </div>
  );
};
