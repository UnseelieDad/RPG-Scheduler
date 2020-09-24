import React, { useState } from "react"
import {
  Toolbar,
  Typography,
  Link as StyleLink,
  IconButton,
  Drawer,
  Hidden,
} from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"

import { Link } from "gatsby"

import AuthButton from "../auth/AuthButton/AuthButton"

import headerStyles from "./headerStyles"

const Header = ({ page }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const classes = headerStyles()
  /* 
    if user on the app page,
      change navi to hello user
      change links to create game button
    if user is logged in
      change login to logout

  */
  let links = null
  let siteHeading = null
  if (page === "landing") {
    siteHeading = "Roll Call"
    links = (
      <Typography component="div" className={classes.links} align="center">
        <StyleLink
          color="secondary"
          component={Link}
          to="/"
          underline="none"
          activeClassName={classes.activeLink}
          className={classes.link}
        >
          Home
        </StyleLink>
        <StyleLink
          color="secondary"
          component={Link}
          to="#"
          underline="none"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          About
        </StyleLink>
        <StyleLink
          color="secondary"
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
    links = null
  }

  return (
    <header>
      <Toolbar className={classes.toolBar}>
        <Hidden implementation="css" smUp>
          <IconButton className={classes.menu} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h5" className={classes.title}>
          {siteHeading}
        </Typography>
        <nav className={classes.topNav}>
          <Hidden implementation="css" only="xs">
            {links}
          </Hidden>
          {/* TODO: If user is logged  in change text to log out */}
          <AuthButton classes={classes.button}>LOGIN</AuthButton>
        </nav>
      </Toolbar>
      <Hidden implementation="css" smUp>
        <Drawer
          open={drawerOpen}
          className={classes.drawer}
          onClose={handleDrawerToggle}
        >
          <nav className={classes.sideNav}>{links}</nav>
        </Drawer>
      </Hidden>
    </header>
  )
}

export default Header
