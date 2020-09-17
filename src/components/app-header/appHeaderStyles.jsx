import { makeStyles } from "@material-ui/styles"

const appHeaderStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  header: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(3),
  },
}))

export default appHeaderStyles
