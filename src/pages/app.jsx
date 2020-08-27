import React, { useState, useEffect } from "react"

// look into using context api for this? Redux seems a bit complicated for the moment.
// Probably need to to get the code from the match prop.
// What happens if someone enters "/app" into the url without clicking the login button?
// Do I actually need netlify functions for this? Probably to handle the game data at least, and to add some security abstraction.
// Use location prop for query string
// need to add  in loading and redirects while the process is going on, run it in the background as a netlify function?

/*
  New flow with the backend:
  Clicking the button hits an auth component?
  Triggers a netlify function that navigates to discord auth and gets the redirect
  Sends info back to auth component
  Going to probably need to get that token globally through redux or context api
  Figure out how refresh token works and add that process
  Add loading stuff while it's going on in the backend
  

  Ok so, here's what we do. Have an app page, with the usual layout but if user isn't auth give them a login with discord button
*/

const App = props => {
  const [userName, setUserName] = useState("")

  // Hook for handling discord authentication
  // TODO: Split this up using context api/netlify functions/redux
  useEffect(() => {
    // parse the query string and get the auth code from it
    const code = props.location.search.split("=")[1]
    // set up a data object for the auth request
    const data = {
      client_id: process.env.GATSBY_DISCORD_CLIENT_ID,
      client_secret: process.env.GATSBY_DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:8000/app",
      code: code,
      scope: "identify",
    }
    // get the auth token
    fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: new URLSearchParams(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(response => {
        return response.json()
      })
      // use auth data to fetch user
      .then(responseData =>
        fetch("https://discordapp.com/api/users/@me", {
          headers: {
            authorization: `${responseData.token_type} ${responseData.access_token}`,
          },
        })
      )
      .then(res => res.json())
      .then(resData => {
        setUserName(resData.username)
      })
  }, [props.location.search])

  return (
    <h1>{userName !== "" ? `${userName} has logged in!` : "Logging in..."}</h1>
  )
}

export default App
