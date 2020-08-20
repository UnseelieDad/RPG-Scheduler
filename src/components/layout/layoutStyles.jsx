import { makeStyles, createStyles } from "@material-ui/core/styles"

const layoutStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "65vh",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        minHeight: "85vh",
      },
      [theme.breakpoints.down("sm")]: {
        minHeight: "70vh",
      },
    },
  })
)

export default layoutStyles
