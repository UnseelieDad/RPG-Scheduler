import React from "react"

import { Container, Button } from "@material-ui/core"
import { Link } from "gatsby"

import GameList from "./game-list/GameList"
import gameViewStyles from "./gameViewStyles"
const GameView = () => {
  // If the date is today's date change the time from numbers to a countdown
  const classes = gameViewStyles()
  return (
    <Container className={classes.root}>
      <Button
        component={Link}
        to="/app/create-game"
        color="primary"
        size="large"
        variant="contained"
        className={classes.button}
      >
        CREATE GAME
      </Button>
      <GameList />
    </Container>
  )
}

export default GameView
