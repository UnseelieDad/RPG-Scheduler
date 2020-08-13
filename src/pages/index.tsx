import React from "react"
import {
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core"
import theme from "../theme/theme"

const Home = () => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">RPG Scheduling App</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Home
