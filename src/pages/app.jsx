import React, { useState, useEffect } from "react"
import Layout from "../components/layout/Layout"
import Auth from "../components/auth/Auth"

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
  return (
    <Layout>
      <Auth />
    </Layout>
  )
}

export default App
