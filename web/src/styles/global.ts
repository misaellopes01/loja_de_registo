import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
    :focus {
        outline: 0;
    }
    body {
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
