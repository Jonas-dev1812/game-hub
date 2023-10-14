import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { ColorMode } from "../ColorMode/ColorMode";

interface Props {
  onSearch: (searchtext: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle + 1); // Aktualisierung Drehwinkel
    }, 90); // Geschwindigkeit der Rotation
    return () => clearInterval(intervalId); // bei Komponentenentfernung bereinigt
  }, []);

  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image
        src={logo}
        alt={"Game-Hub"}
        boxSize={"120px"}
        style={{
          transform: `rotate(${rotationAngle}deg)`,
          transition: "transform 0.1s",
        }}
      />
      <SearchInput onSearch={onSearch} />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
