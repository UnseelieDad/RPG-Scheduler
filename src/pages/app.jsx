import React from "react"

import {
  ThemeProvider,
  CssBaseline,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"
import Auth from "../components/auth/Auth"
import GameList from "../components/game-list/GameList"

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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  button: {
    marginBottom: theme.spacing(3),
  },
}))

const App = props => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header page="app">
        <Container className={classes.root}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            className={classes.button}
          >
            CREATE GAME
          </Button>
          <GameList />
        </Container>
        {/* <Auth code={props.location.search.split("=")[1]} /> */}
      </Layout>
    </ThemeProvider>
  )
}

export default App
