import React from "react"
import { Divider, Container, Typography, Link } from "@material-ui/core"
import { GitHub, LinkedIn, Email } from "@material-ui/icons"
import footerStyles from "./footerStyles"

const Footer = () => {
  const classes = footerStyles()

  return (
    <footer>
      <Divider />

      <Typography className={classes.links}>
        <Link
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/seth-martin-57250b136/"
          color="inherit"
          className={classes.icon}
        >
          <LinkedIn fontSize="large" />
        </Link>
        <Link
          href="https://github.com/UnseelieDad"
          target="_blank"
          rel="noopener"
          color="inherit"
          className={classes.icon}
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          href="mailto:voiceofsethmartin@gmail.com"
          target="_blank"
          rel="noopener"
          color="inherit"
          className={classes.icon}
        >
          <Email fontSize="large" />
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer
