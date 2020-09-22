import React from "react"

import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
} from "@material-ui/core"
import { useFormik } from "formik"

import createGameStyles from "./createGameStyles"

const CreateGame = props => {
  const handleSubmit = () => {
    console.log("Submit")
  }

  const classes = createGameStyles()
  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Track a new game:
      </Typography>
      {/*Hold the form in a card?*/}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          required
          id="title-input"
          label="Title"
          defaultValue="Title"
        />
        <TextField
          className={classes.textField}
          required
          id="date-input"
          label="Recurring Date"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" className={classes.button}>
          SUBMIT
        </Button>
      </form>
      <Card className={classes.card}>
        <Typography>Input Link generated here</Typography>
      </Card>
    </Container>
  )
}

export default CreateGame
