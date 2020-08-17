import React from "react"
import {
  ThemeProvider,
  Typography,
  CssBaseline,
  Container,
  makeStyles,
  createStyles,
  Theme,
  Button,
} from "@material-ui/core"

import theme from "../theme/theme"
import Layout from "../components/layout/Layout"

const useStyles = makeStyles((theme: Theme) =>
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
        <Button
          variant="contained"
          color="secondary"
          className={classes.actionButton}
        >
          Track your games
        </Button>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
