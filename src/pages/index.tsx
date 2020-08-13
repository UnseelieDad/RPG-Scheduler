import React from "react"
import {
  ThemeProvider,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
} from "@material-ui/core"
import theme from "../theme/theme"

const Home = () => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="primary.main">
        <Typography color="textPrimary" component="p">
          Hello World
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Home
