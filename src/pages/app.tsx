import React from "react"

// use effect hook to call login processing to get the code out and exchange it for a token
// extract code from query string
// send a fetch request to the appropriate url with the code as an auth header
// get and use token stuff
// look into using context api for this? Redux seems a bit complicated for the moment.
// Probably need to to get the code from the match prop.
// What happens if someone enters "/app" into the url without clicking the login button?
// Do I actually need netlify functions for this? Probably to handle the game data at least, and to add some security abstraction.
// Use location prop for query string

const App = props => {
  console.log("props", props)

  return <h1>You've logged in!</h1>
}

export default App
