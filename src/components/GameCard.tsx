import styled from "styled-components"
import { Game } from "../hooks/useGames"
import PlatformIcons from "./PlatformIcons";

interface Props {
    game: Game
}

const Image = styled.img`
  height: 12.5rem;
  width: 350px;
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



const GameCard = ({ game }: Props) => {
  return (
    <Items>
      <Image src={game.background_image} />
      <Heading>{game.name}</Heading>
      <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)}/>
    </Items>
  )
}

export default GameCard