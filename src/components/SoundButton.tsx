import { useEffect, useState } from "react";
import useSound from "use-sound";
import AmbientBG from "../assets/audio/ambience.mp3";
export const SoundButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const [play] = useSound(AmbientBG, {
    volume: isMuted ? 0 : 1,
    loop: true,
  });

  useEffect(() => {
    play();
  }, [play]);

  const handleOnButtonPressed = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="cursor-pointer bg-gray-800 rounded-lg p-4 transition duration-300 hover:bg-gray-600 text-white font-bold"
      onClick={handleOnButtonPressed}
    >
      {isMuted ? "Unmute" : "Mute"} Music
    </div>
  );
};
