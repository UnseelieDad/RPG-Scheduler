import React from "react"
import {
  Toolbar,
  Typography,
  Link as StyleLink,
  Button,
  Divider,
} from "@material-ui/core"

import { Link } from "gatsby"

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
        <Button
          className={classes.logIn}
          color="secondary"
          size="small"
          variant="contained"
          href="https://discord.com/api/oauth2/authorize?client_id=742210384785834196&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapp&response_type=code&scope=identify"
        >
          LOGIN
        </Button>
      </Toolbar>
      <Divider />
    </header>
  )
}

export default Header
