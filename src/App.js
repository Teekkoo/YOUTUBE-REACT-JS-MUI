import { ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import Home from "./page/home"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
})

export default App
