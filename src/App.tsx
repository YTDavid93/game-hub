import styled from "styled-components"
import { breakpoints } from "./constants/BreakPoints"

const Grid = styled.div `
  display: grid;
  grid-template-areas: 
    "nav nav" 
    "aside main";

  ${breakpoints.small} {
    grid-template-areas: 
      "nav nav"
      "main main";
  }
`
const Nav = styled.nav `
  background-color: red;
  grid-area: nav;
`

const Aside = styled.aside`
  background-color: blue;
  grid-area: aside;

  ${breakpoints.small} {
    display: none;
  }
`
const Main = styled.main `
  background-color: green;
  grid-area: main;
`

const App = () => {
  return (
      <Grid>
        <Nav>Nav</Nav>
        <Aside>aside</Aside>
        <Main>Main</Main>
      </Grid>
  )
}

export default App
