import { makeStyles, Theme, createStyles } from "@material-ui/core"

const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 2,
    },
    links: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-start",
    },
    link: {
      cursor: "pointer",
    },
    activeLink: {
      color: theme.palette.primary.light,
    },
    logIn: {
      marginLeft: theme.spacing(1),
    },
  })
)

export default headerStyles
