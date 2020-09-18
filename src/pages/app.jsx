import React from "react"
import { Router } from "@reach/router"

import { ThemeProvider, CssBaseline } from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"
import Auth from "../components/auth/Auth"
import GameView from "../components/game-view/GameView"
import CreateGame from "../components/create-game/CreateGame"

/*
  Ok so, here's what we do. Have an app page, with the usual layout but if user isn't auth give them a login with discord button
  Need to store user info from discord
  Use info to generate account creds in firebase, maybe based on the id?
  How to use refresh tokens?
*/

/*
  What's the app view actually look like?
  Components:
    Header
    Footer
    Logout
    List of games as cards
      Title
      Status indicators
        Discord icon/Shortened name
        Ringed with red/green icons? Or just filled in circles?
        Think there's something else here... 
*/

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header page="app">
        <Router basepath="/app">
          <CreateGame path="/create-game" />
          <GameView path="/" />
        </Router>
        {/* <Auth code={props.location.search.split("=")[1]} /> */}
      </Layout>
    </ThemeProvider>
  )
}

export default App
