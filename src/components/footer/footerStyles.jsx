import { makeStyles, createStyles } from "@material-ui/core/styles"

const footerStyles = makeStyles(theme =>
  createStyles({
    links: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(1, 0),
    },
    icon: {
      margin: theme.spacing(0, 2),
    },
  })
)

export default footerStyles
