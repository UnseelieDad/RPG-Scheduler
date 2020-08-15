import { makeStyles, Theme, createStyles } from "@material-ui/core"

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1,
    },
    links: {
      marginLeft: theme.spacing(3),
      fontSize: "1.125rem",
    },
    link: {
      cursor: "pointer",
    },

    activeLink: {
      color: theme.palette.primary.light,
    },
    logIn: { marginLeft: theme.spacing(3) },
  })
)

export default headerStyles
