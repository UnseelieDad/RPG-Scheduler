import { makeStyles, createStyles } from "@material-ui/core"

const headerStyles = makeStyles(theme =>
  createStyles({
    title: {
      flex: 1,
    },
    links: {
      marginLeft: theme.spacing(3),
      fontSize: "1.125rem",
      "&:hover": {
        color: theme.palette.primary.light,
      },
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(1),
      },
    },
    link: {
      cursor: "pointer",
    },

    activeLink: {
      color: theme.palette.primary.light,
    },
    logIn: {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(1),
      },
    },
  })
)

export default headerStyles
