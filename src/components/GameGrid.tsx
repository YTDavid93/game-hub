import styled from "styled-components"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import { breakpoints } from "../constants/BreakPoints"

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

 const GameGrid = () => {

   const { games, error} = useGames()
   return (
    <>
        {error && <p>{error}</p>}
        <StyleGrid>
                {games.map(game => 
                <GameCard key="game.id" game={game} />
            )}
        </StyleGrid>
    </>
   )
 }
 
 export default GameGrid