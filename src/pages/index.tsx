import React from "react"
import { ThemeProvider, Typography, CssBaseline } from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Typography>This is a placeholder</Typography>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
