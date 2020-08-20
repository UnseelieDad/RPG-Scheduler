import React, { useEffect } from "react"

// look into using context api for this? Redux seems a bit complicated for the moment.
// Probably need to to get the code from the match prop.
// What happens if someone enters "/app" into the url without clicking the login button?
// Do I actually need netlify functions for this? Probably to handle the game data at least, and to add some security abstraction.
// Use location prop for query string
// need to add  in loading and redirects while the process is going on, run it in the background as a netlify function?

const App = props => {
  useEffect(() => {
    console.log(props.location)
    const code = props.location.search.split("=")[1]
    console.log(code)
    const data = {
      client_id: process.env.GATSBY_DISCORD_CLIENT_ID,
      client_secret: process.env.GATSBY_DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:8000/app",
      code: code,
      scope: "identify",
    }
    console.log(data)
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
      .then(responseData =>
        fetch("https://discordapp.com/api/users/@me", {
          headers: {
            authorization: `${responseData.token_type} ${responseData.access_token}`,
          },
        })
      )
      .then(res => res.json())
      .then(console.log)
  })

  return <h1>You've logged in!</h1>
}

export default App
