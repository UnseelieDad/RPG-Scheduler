import { makeStyles, createStyles } from "@material-ui/core/styles"

const layoutStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: "0",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    content: {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
)

export default layoutStyles
