import React, { useState } from "react"

import { Container } from "@material-ui/core"
import GameCard from "../game-card/GameCard"
import gameListStyles from "./gameListStyles"

const GameList = () => {
  const [cardData] = useState([
    {
      title: "Game 1",
      date: "9/15/20",
      players: ["Seth", "Raye", "David"],
    },
    {
      title: "Game 2",
      date: "9/24/20",
      players: ["Thomas", "Kaleb", "Molly"],
    },
  ])

  const classes = gameListStyles()
  return (
    <Container className={classes.root}>
      {cardData.map(card => {
        return (
          <GameCard
            title={card.title}
            date={card.date}
            players={card.players}
          />
        )
      })}
    </Container>
  )
}

export default GameList
