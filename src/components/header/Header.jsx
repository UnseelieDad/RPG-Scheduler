import React from "react"
import {
  Toolbar,
  Typography,
  Link as StyleLink,
  Divider,
} from "@material-ui/core"

import { Link } from "gatsby"

import AuthButton from "../auth/AuthButton/AuthButton"

import headerStyles from "./headerStyles"

const Header = () => {
  const classes = headerStyles()

  return (
    <header>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Navi
        </Typography>
        <Typography
          color="primary"
          variant="button"
          component="nav"
          className={classes.links}
        >
          <StyleLink
            component={Link}
            to="/"
            underline="none"
            activeClassName={classes.activeLink}
            className={classes.links}
          >
            Home
          </StyleLink>
          <StyleLink
            component={Link}
            to="#"
            underline="none"
            className={classes.links}
            activeClassName={classes.activeLink}
          >
            About
          </StyleLink>
          <StyleLink
            component={Link}
            to="#"
            underline="none"
            className={classes.links}
            activeClassName={classes.activeLink}
          >
            Contact
          </StyleLink>
        </Typography>
        <AuthButton>LOGIN</AuthButton>
      </Toolbar>
      <Divider />
    </header>
  )
}

export default Header
