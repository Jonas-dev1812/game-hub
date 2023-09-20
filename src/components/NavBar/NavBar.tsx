import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle + 1); // Aktualisierung Drehwinkel
    }, 90); // Geschwindigkeit der Rotation
    return () => clearInterval(intervalId); // bei Komponentenentfernung bereinigt
  }, []);

  return (
    <HStack>
      <Image
        src={logo}
        alt={"Game-Hub"}
        boxSize={"120px"}
        style={{
          transform: `rotate(${rotationAngle}deg)`,
          transition: "transform 0.1s",
        }}
      />
    </HStack>
  );
};

export default NavBar;
