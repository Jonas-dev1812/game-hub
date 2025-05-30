import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize={14} paddingX={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default GameScore;
