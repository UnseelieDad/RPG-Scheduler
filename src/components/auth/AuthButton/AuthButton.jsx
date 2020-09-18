/*
    Use this for buttons that handle auth logic and communicate with auth backend?
    This button will trigger a backend funciton that handles the discord login logic
    Process:
        User clicks button
        Redirect to loading app page
        Trigger backend function/logic

    New flow:
        So link redirect needs to happen,
        then redirect to app like before
        grab the url from redirect, then have the auth component do the thing on the app page?
*/

import React from "react"

import { Button } from "@material-ui/core"

const AuthButton = ({ children, classes, contained }) => {
  let buttonVariant = "text"
  if (contained === true) {
    buttonVariant = "contained"
  }

  return (
    <Button
      variant={buttonVariant}
      color="secondary"
      size="large"
      href={process.env.GATSBY_DISCORD_LOGIN_LINK}
      className={classes}
    >
      {children}
    </Button>
  )
}

export default AuthButton
