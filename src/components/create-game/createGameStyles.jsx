import { makeStyles } from "@material-ui/core"

const createGameStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
  },
}))

export default createGameStyles
