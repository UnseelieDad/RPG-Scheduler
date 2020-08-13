import React from "react"
import {
  ThemeProvider,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core"
import theme from "../theme/theme"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card color="primary">
        <CardHeader title="Hello Wolrd" subheader="This is a test" />
        <CardContent>
          <Typography color="textPrimary" paragraph={true}>
            This is another test
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default Home
