import styled from "styled-components"
import GameCard from "./GameCard"
import { breakpoints } from "../constants/BreakPoints"
import GameCardSkeleton from "./GameCardSkeleton"
import useGames, { Platform } from "../hooks/useGames"
import { Genre } from "../hooks/useGenres"

 const StyleGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 30px;

    ${breakpoints.medium} {
        grid-template-columns: repeat(2, 300px);
    }

    ${breakpoints.small} {
        grid-template-columns: 300px;
    }
`

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

 const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
   const { data, error, isloading } = useGames(selectedGenre, selectedPlatform);

   return (
     <>
       {error && <p>{error}</p>}

       <StyleGrid>
         {isloading && <GameCardSkeleton />}
         {data.map((game) => (
           <GameCard key={game.id} game={game} />
         ))}
       </StyleGrid>
     </>
   );
 };
 
 export default GameGrid