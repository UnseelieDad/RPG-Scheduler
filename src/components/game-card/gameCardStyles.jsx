import { makeStyles, createStyles } from "@material-ui/core/styles"
import theme from "../../theme/theme"

const gameCardStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "35%",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.only("xs")]: {
        width: "250px",
      },
    },
    icons: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    icon: {
      border: "2px solid red",
      borderRadius: "50%",
      margin: theme.spacing(0.5),
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
    },
    checkToggle: {
      color: theme.palette.success.main + " !important",
    },
    crossToggle: {
      color: theme.palette.error.main + " !important",
    },
  })
)

export default gameCardStyles
