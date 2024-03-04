import styled from "styled-components"
import GameCard from "./GameCard"
import { breakpoints } from "../constants/BreakPoints"
import GameCardSkeleton from "./GameCardSkeleton"
import useGames from "../hooks/useGames"
import { GameQuery } from "../App"

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
  gamequery: GameQuery;
}

 const GameGrid = ({ gamequery }: Props) => {
   const { data, error, isloading } = useGames(gamequery);
   const skeletons = [1, 2, 3, 4, 5, 6]

   return (
     <>
       {error && <p>{error}</p>}
       <StyleGrid>
         {isloading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
         {data.map((game) => (
           <GameCard key={game.id} game={game} />
         ))}
       </StyleGrid>
     </>
   );
 };
 
 export default GameGrid