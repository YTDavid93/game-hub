import styled from "styled-components";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const Heading = styled.h1`
  font-size: 30px;
`;

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;

  return <Heading>{heading}</Heading>;
};

export default GameHeading;
