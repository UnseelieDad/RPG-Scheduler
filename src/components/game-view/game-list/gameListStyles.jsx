import { makeStyles, createStyles } from "@material-ui/core/styles"
import theme from "../../../theme/theme"

const gameListStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
)

export default gameListStyles
