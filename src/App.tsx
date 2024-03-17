import styled, { ThemeProvider } from "styled-components";
import { breakpoints } from "./constants/BreakPoints";
import { darktheme, lightTheme, GlobalStyles } from "./components/theme";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "nav nav"
    "aside main";
    
  ${breakpoints.small} {
    grid-template-areas:
      "nav nav"
      "main main";
  }
  color: ${(props) => props.theme.fontColor};
`;

const Nav = styled.nav`
  grid-area: nav;
`;

const Aside = styled.aside`
  grid-area: aside;
  padding: 0px 20px;

  ${breakpoints.small, breakpoints.medium} {
    display: none;
  }
`;
const Main = styled.main`
  grid-area: main;
`;

const Hstack = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darktheme}>
      <GlobalStyles />
      <Grid>
        <Nav>
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}>
            <ColorModeSwitch onChange={themeToggler} theme={theme} />
          </NavBar>
        </Nav>
        <Aside>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Aside>
        <Main>
        <GameHeading gameQuery={gameQuery} />
          <Hstack>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectOrders={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Hstack>
          <GameGrid gamequery={gameQuery} />
        </Main>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
