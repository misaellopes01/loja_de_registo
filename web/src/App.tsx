import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { AuthProvider } from "./contexts/Auth"

function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
      </AuthProvider>
  )
}

export default App
