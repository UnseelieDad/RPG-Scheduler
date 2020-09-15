import { makeStyles, createStyles } from "@material-ui/core/styles"

const layoutStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
  })
)

export default layoutStyles
