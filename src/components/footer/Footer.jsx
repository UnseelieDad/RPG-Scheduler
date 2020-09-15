import React from "react"
import { Divider, Container, Typography, Link } from "@material-ui/core"
import { GitHub, LinkedIn, Email } from "@material-ui/icons"
import footerStyles from "./footerStyles"

const Footer = () => {
  const classes = footerStyles()

  return (
    <footer>
      <Divider />

      <Container className={classes.root}>
        <Typography
          variant="h6"
          color="primary"
          align="center"
          className={classes.contact}
        >
          Contact Me:
        </Typography>
        <Typography className={classes.links}>
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/seth-martin-57250b136/"
            className={classes.icon}
            color="inherit"
          >
            <LinkedIn fontSize="large" />
          </Link>
          <Link
            className={classes.icon}
            href="https://github.com/UnseelieDad"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHub fontSize="large" />
          </Link>
          <Link
            className={classes.icon}
            href="mailto:voiceofsethmartin@gmail.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Email fontSize="large" />
          </Link>
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
