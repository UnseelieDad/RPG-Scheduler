import React from "react"

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  Container,
} from "@material-ui/core"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import { makeStyles } from "@material-ui/core/styles"
import CheckIcon from "@material-ui/icons/Check"
import ClearIcon from "@material-ui/icons/Clear"

import theme from "../../theme/theme"

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "auto",
  },
  icons: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    border: "2px solid red",
    borderRadius: "50%",
    margin: theme.spacing(0.5),
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
  },
})

const GameCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" align="center">
          Game Title
        </Typography>
        <Typography variant="subtitle1" align="center">
          Date
        </Typography>
        <Container className={classes.icons}>
          <Avatar className={classes.icon}>T</Avatar>
          <Avatar className={classes.icon}>H</Avatar>
          <Avatar className={classes.icon}>Q</Avatar>
          <Avatar className={classes.icon}>Q</Avatar>
          <Avatar className={classes.icon}>Q</Avatar>
          <Avatar className={classes.icon}>Q</Avatar>
          <Avatar className={classes.icon}>Q</Avatar>
          <Avatar className={classes.icon}>Q</Avatar>
        </Container>
        <Typography variant="body1" align="center" color="primary">
          Are you coming?
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <ToggleButtonGroup exclusive value="Yes" aria-label="text alignment">
          {/* TODO: Find a way to change the color of the toggle buttons*/}
          <ToggleButton value="Yes" aria-label="left aligned">
            <CheckIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <ClearIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
    </Card>
  )
}

export default GameCard
