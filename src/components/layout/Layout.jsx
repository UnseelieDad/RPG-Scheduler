import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"
import layoutStyles from "./layoutStyles"

const Layout = ({ children, header, footer, page }) => {
  const classes = layoutStyles()

  return (
    <div className={classes.root}>
      {header == true ? <Header page={page} /> : null}
      <main className={classes.content}>{children}</main>
      {footer === true ? <Footer /> : null}
    </div>
  )
}

export default Layout
