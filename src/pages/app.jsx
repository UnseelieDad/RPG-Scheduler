import React from "react"

import { ThemeProvider, CssBaseline } from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"
import Auth from "../components/auth/Auth"

/*
  Ok so, here's what we do. Have an app page, with the usual layout but if user isn't auth give them a login with discord button
  Need to store user info from discord
  Use info to generate account creds in firebase, maybe based on the id?
  How to use refresh tokens?
*/

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Auth code={props.location.search.split("=")[1]} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
