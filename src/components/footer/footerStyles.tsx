import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    links: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        fontSize: "2rem",
      },
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
