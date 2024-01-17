import styled from "styled-components";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const Image = styled.img`
  height: 12.5rem;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Items = styled.div`
  border-radius: 0.3125rem;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
  transition: all 100ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  padding: 5px 15px;
`;

const HorizentalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GameCard = ({ game }: Props) => {
  return (
    <Items>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Heading>{game.name}</Heading>
      <HorizentalDiv>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HorizentalDiv>
    </Items>
  );
};

export default GameCard;
