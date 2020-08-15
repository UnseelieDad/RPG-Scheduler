import { createMuiTheme } from "@material-ui/core"
import { deepPurple, lime } from "@material-ui/core/colors"

// configuration for the application's material ui theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    // Potential UI Theme colors
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: "#80d8ff",
    },
  },
  typography: {
    fontFamily: "Roboto Mono",
  },
})

export default theme
