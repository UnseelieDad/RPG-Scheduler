import { makeStyles, createStyles } from "@material-ui/core"

const headerStyles = makeStyles(theme =>
  createStyles({
    title: {
      flex: 1,
    },
    nav: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      marginLeft: theme.spacing(3),
      fontSize: "1.125rem",
      "&:hover": {
        color: theme.palette.primary.light,
      },
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(1),
      },
    },

    activeLink: {
      color: theme.palette.primary.light,
    },
    button: {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(1),
      },
    },
  })
)

export default headerStyles
