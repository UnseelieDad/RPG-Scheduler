import React from "react"

import {
  Toolbar,
  Button,
  Divider,
  Typography,
  Container,
} from "@material-ui/core"

import AuthButton from "../auth/AuthButton/AuthButton"

import appHeaderStyles from "./appHeaderStyles"

const AppHeader = () => {
  const classes = appHeaderStyles()
  return (
    <header>
      <Toolbar className={classes.root}>
        <Typography variant="h5" className={classes.header}>
          Hello User!
        </Typography>
        <Button color="primary" size="large" className={classes.button}>
          CREATE GAME
        </Button>
        <AuthButton classes={classes.button}>LOGOUT</AuthButton>
      </Toolbar>
      <Divider />
    </header>
  )
}

export default AppHeader
