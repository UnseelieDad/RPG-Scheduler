import React, { useState } from "react"

import { Link } from "gatsby"

import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  FormControlLabel,
  Checkbox,
  FormControl,
  RadioGroup,
  Radio,
  MenuItem,
} from "@material-ui/core"
import { useFormik } from "formik"

import createGameStyles from "./createGameStyles"

const CreateGame = props => {
  const [recurring, setRecurring] = useState(false)
  const [recurringType, setRecurringType] = useState("Week")

  const handleSubmit = () => {
    console.log("Submit")
  }

  const handleRecurringCheck = () => {
    recurring ? setRecurring(false) : setRecurring(true)
  }

  const handleRecurringTypeChange = event => {
    setRecurringType(event.target.value)
  }

  const recurringTypes = [
    {
      value: "Week",
      label: "Week",
    },
    {
      value: "Month",
      label: "Month",
    },
    {
      value: "Year",
      label: "Year",
    },
  ]

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
          label="Date and Time"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControlLabel
          control={
            <Checkbox checked={recurring} onChange={handleRecurringCheck} />
          }
          label="Recurring"
          className={classes.check}
        />
        {recurring ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              required
              variant="outlined"
              id="recurring-amount"
              label="Amount"
              aria-label="recurring-amount"
              defaultValue={0}
            />
            <TextField
              required
              select
              variant="outlined"
              id="recurring-type"
              label="Type"
              aria-label="recurring-type"
              value={recurringType}
              onChange={handleRecurringTypeChange}
            >
              {recurringTypes.map(option => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        ) : null}
        <Button variant="contained" color="primary" className={classes.button}>
          SUBMIT
        </Button>
      </form>
      <Card className={classes.card}>
        <Typography>Input Link generated here</Typography>
      </Card>
      <Button component={Link} to="/app" className={classes.cancel}>
        CANCEL
      </Button>
    </Container>
  )
}

export default CreateGame
