import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"
import layoutStyles from "./layoutStyles"
import { Container, Grid } from "@material-ui/core"

const Layout = ({ children }) => {
  const classes = layoutStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <main className={classes.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
