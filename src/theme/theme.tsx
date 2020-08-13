import { createMuiTheme } from "@material-ui/core"
import { deepPurple, grey } from "@material-ui/core/colors"

// configuration for the application's material ui theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    // Potential UI Theme colors
    // primary: {
    //   main: deepPurple[500],
    // },
    // secondary: {
    //   main: grey[900],
    // },
  },
})

export default theme
