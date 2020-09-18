import React from "react"
import {
  Toolbar,
  Typography,
  Link as StyleLink,
  Divider,
  Button,
} from "@material-ui/core"

import { Link } from "gatsby"

import AuthButton from "../auth/AuthButton/AuthButton"

import headerStyles from "./headerStyles"

const Header = ({ page }) => {
  const classes = headerStyles()

  /* 
    if user on the app page,
      change navi to hello user
      change links to create game button
    if user is logged in
      change login to logout

  */
  let nav = null
  let siteHeading = null
  if (page === "landing") {
    siteHeading = "Navi"
    nav = (
      <Typography color="primary" variant="button" component="div">
        <StyleLink
          component={Link}
          to="/"
          underline="none"
          activeClassName={classes.activeLink}
          className={classes.link}
        >
          Home
        </StyleLink>
        <StyleLink
          component={Link}
          to="#"
          underline="none"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          About
        </StyleLink>
        <StyleLink
          component={Link}
          to="#"
          underline="none"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Contact
        </StyleLink>
      </Typography>
    )
  } else if (page === "app") {
    siteHeading = "Hello User!"
    nav = (
      <Button color="primary" size="large" className={classes.button}>
        CREATE GAME
      </Button>
    )
  }

  return (
    <header>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          {siteHeading}
        </Typography>
        <nav className={classes.nav}>
          {nav}
          {/* TODO: If user is logged  in change text to log out */}
          <AuthButton classes={classes.button}>LOGIN</AuthButton>
        </nav>
      </Toolbar>
      <Divider />
    </header>
  )
}

export default Header
