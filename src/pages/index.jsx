import React from "react"
import {
  ThemeProvider,
  Typography,
  CssBaseline,
  makeStyles,
  Container,
} from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"
import AuthButton from "../components/auth/AuthButton/AuthButton"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  actionButton: {
    marginTop: theme.spacing(1),
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header footer page="landing">
        <Container className={classes.root}>
          <Typography align="center" variant="h4" className={classes.text}>
            Never miss a game again.
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            className={classes.text}
          >
            Navi allows groups to keep track of when games are and who's showing
            up.
          </Typography>
          <AuthButton classes={classes.actionButton} contained>
            Track your games!
          </AuthButton>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
