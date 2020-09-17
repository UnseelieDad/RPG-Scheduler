import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"
import AppHeader from "../app-header/AppHeader"
import layoutStyles from "./layoutStyles"

const Layout = ({ children, header, footer }) => {
  const classes = layoutStyles()

  return (
    <div className={classes.root}>
      {header}
      <main className={classes.content}>{children}</main>
      {footer === true ? <Footer /> : null}
    </div>
  )
}

export default Layout
