import React from "react"
import { Divider, Container } from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"
import footerStyles from "./footerStyles"

const Footer = () => {
  const classes = footerStyles()

  return (
    <footer>
      <Divider />
      <Container className={classes.root}>
        <GitHub className={classes.icon} />
        <LinkedIn className={classes.icon} />
      </Container>
    </footer>
  )
}

export default Footer
