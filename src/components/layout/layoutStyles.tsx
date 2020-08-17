import { makeStyles, createStyles } from "@material-ui/core/styles"

const layoutStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "65vh",
      justifyContent: "center",
    },
  })
)

export default layoutStyles
