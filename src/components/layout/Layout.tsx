import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"
import layoutStyles from "./laoutStyles"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  const classes = layoutStyles()

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root}>{children}</Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
