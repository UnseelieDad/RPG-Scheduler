import { makeStyles, createStyles } from "@material-ui/core/styles"

const footerStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "auto",
    },
    links: {
      margin: theme.spacing(0.5, 0),
    },
    icon: {
      margin: theme.spacing(0.5, 2),
      [theme.breakpoints.down("md")]: {
        fontSize: "3rem",
        margin: theme.spacing(0.5, 1),
      },
    },
    contact: {
      margin: theme.spacing(1, 0),
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        marginTop: theme.spacing(0.5, 0),
      },
    },
  })
)

export default footerStyles
