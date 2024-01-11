import { createGlobalStyle } from "styled-components"

export const darktheme = {
    body: "#1c1c1c",
    fontColor: "#fff"
}

export const lightTheme = {
    body: "#fff",
    fontColor: "#1c1c1c"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
`