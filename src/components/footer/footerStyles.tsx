import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    links: {
      marginTop: theme.spacing(2),
    },
    icon: {
      margin: theme.spacing(2),
    },
  })
)

export default footerStyles
