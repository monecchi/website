import React from "react";
import { IconButton, useColorMode, ScaleFade } from "@chakra-ui/react";
import { SunOutline, MoonOutline } from "heroicons-react";
import useSound from "use-sound";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound("/lightswitch.mp3", {
    volume: 0.1,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
  };

  return (
    <IconButton
      isRound
      aria-label="Switch theme"
      icon={
        colorMode === "dark" ? (
          <ScaleFade in>
            <SunOutline size={18} />
          </ScaleFade>
        ) : (
          <ScaleFade in>
            <MoonOutline size={18} />
          </ScaleFade>
        )
      }
      onClick={handleClick}
    />
  );
};
export default ThemeToggle;