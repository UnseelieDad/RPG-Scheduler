import React, { useState } from "react"

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  Container,
} from "@material-ui/core"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"

import CheckIcon from "@material-ui/icons/Check"
import ClearIcon from "@material-ui/icons/Clear"

import gameCardStyles from "./gameCardStyles"

const GameCard = props => {
  const [available, setAvailable] = useState("")

  const toggleAvailableHandler = (event, newAvailability) => {
    setAvailable(newAvailability)
  }

  const classes = gameCardStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" align="center">
          {props.title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {props.date}
        </Typography>
        <Container className={classes.icons}>
          {props.players.map(player => (
            <Avatar className={classes.icon}>
              {player.substring(0, 2).toUpperCase()}
            </Avatar>
          ))}
        </Container>
        <Typography variant="body1" align="center" color="primary">
          Are you coming?
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <ToggleButtonGroup
          exclusive
          value={available}
          aria-label="text alignment"
          onChange={toggleAvailableHandler}
        >
          <ToggleButton
            value="Yes"
            aria-label="Yes"
            className={classes.checkToggle}
          >
            <CheckIcon />
          </ToggleButton>
          <ToggleButton
            value="No"
            aria-label="No"
            className={classes.crossToggle}
          >
            <ClearIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
    </Card>
  )
}

export default GameCard
