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
    marginBottom: theme.spacing(4),
    width: "100%",
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  button: {
    marginBottom: theme.spacing(3),
  },
  card: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  cancel: {
    color: theme.palette.error.main,
  },
  check: {
    marginBottom: theme.spacing(2),
  },
  recurringContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  recurringCard: {
    marginBottom: theme.spacing(2),
  },
  recurringItem: {
    margin: theme.spacing(2),
  },
  helperText: {
    position: "absolute",
    top: "55px",
  },
}))

export default createGameStyles
