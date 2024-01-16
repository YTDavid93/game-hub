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

const App = () => {
  
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darktheme}>
      <GlobalStyles />
      <Grid>
        <Nav>
          <NavBar>
            <ColorModeSwitch onChange={themeToggler} theme={theme} />
          </NavBar>
        </Nav>
        <Aside>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </Aside>
        <Main>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(plaform) => setSelectedPlatform(plaform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </Main>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
