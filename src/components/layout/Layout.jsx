import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"
import StickyFooter from "../footer/StickyFooter"
import layoutStyles from "./layoutStyles"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  const classes = layoutStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.main}>{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout
