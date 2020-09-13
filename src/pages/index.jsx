import React from "react"
import {
  ThemeProvider,
  Typography,
  CssBaseline,
  makeStyles,
  createStyles,
} from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"
import AuthButton from "../components/auth/AuthButton/AuthButton"

const useStyles = makeStyles(theme =>
  createStyles({
    centerText: {
      marginTop: theme.spacing(3),
    },
    actionButton: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      alignSelf: "center",
    },
  })
)

const Home = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Typography variant="h4" align="center" className={classes.centerText}>
          Never miss a game again.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.centerText}
        >
          Navi allows groups to keep track of when games are and who's showing
          up.
        </Typography>
        <AuthButton>Track your games!</AuthButton>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
