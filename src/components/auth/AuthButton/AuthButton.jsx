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

const AuthButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      href={process.env.GATSBY_DISCORD_LOGIN_LINK}
    >
      {children}
    </Button>
  )
}

export default AuthButton
