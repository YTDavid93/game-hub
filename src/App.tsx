import styled, { ThemeProvider } from "styled-components";
import { breakpoints } from "./constants/BreakPoints";
import { darktheme, lightTheme, GlobalStyles } from "./components/theme";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import { useState } from "react";
import GameGrid from "./components/GameGrid";

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

  ${breakpoints.small, breakpoints.medium} {
    display: none;
  }
`;
const Main = styled.main`
  grid-area: main;
`;

const App = () => {
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
        <Aside></Aside>
        <Main>
          <GameGrid />
        </Main>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
