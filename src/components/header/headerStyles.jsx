import { makeStyles, createStyles } from "@material-ui/core"

const headerStyles = makeStyles(theme =>
  createStyles({
    title: {
      flex: 1,
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(1),
      },
    },
    topNav: {
      display: "flex",
      alignItems: "center",
    },
    sideNav: {
      [theme.breakpoints.only("xs")]: {
        display: "flex",
        paddingTop: "25%",
        flexDirection: "column",
        alignItems: "center",
        width: "35vw",
        height: "100vh",
      },
    },
    link: {
      marginLeft: theme.spacing(3),
      fontSize: "1.125rem",
      "&:hover": {
        color: theme.palette.secondary.light,
      },
      [theme.breakpoints.only("xs")]: {
        margin: 0,
        fontSize: "1.5rem",
      },
    },
    links: {
      [theme.breakpoints.only("xs")]: {
        display: "flex",
        flexDirection: "column",
      },
    },

    activeLink: {
      color: theme.palette.secondary.light,
    },
    button: {
      marginLeft: theme.spacing(3),
      fontSize: "1.1rem",
    },
    toolBar: {
      [theme.breakpoints.only("xs")]: {
        paddingLeft: 0,
      },
    },
  })
)

export default headerStyles
