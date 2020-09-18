import { makeStyles } from "@material-ui/core"
import theme from "../../theme/theme"

const gameViewStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  button: {
    marginBottom: theme.spacing(3),
  },
}))

export default gameViewStyles
