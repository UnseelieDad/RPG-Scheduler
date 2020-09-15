import { makeStyles, createStyles } from "@material-ui/core/styles"

const footerStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      padding: theme.spacing(3, 2),
      marginTop: "auto",
    },
    links: {
      margin: "auto",
    },
    icon: {
      margin: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        fontSize: "3rem",
        margin: theme.spacing(1),
      },
    },
    contact: {
      margin: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        margin: theme.spacing(1),
      },
    },
  })
)

export default footerStyles
