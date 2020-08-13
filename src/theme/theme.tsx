import { createMuiTheme } from "@material-ui/core"
import { deepPurple, grey } from "@material-ui/core/colors"

// configuration for the application's material ui theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
})

export default theme
