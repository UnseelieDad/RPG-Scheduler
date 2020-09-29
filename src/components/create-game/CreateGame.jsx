import React from "react"

import { Link } from "gatsby"

import {
  Container,
  Typography,
  Button,
  Card,
  MenuItem,
  CardContent,
} from "@material-ui/core"
import { Formik, Form, Field } from "formik"
import { TextField, CheckboxWithLabel } from "formik-material-ui"

import formSchema from "./formSchema"
import createGameStyles from "./createGameStyles"

const CreateGame = props => {
  // TODO: Test validation and errors, Submitting Data, Refactoring

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
      <Formik
        initialValues={{
          title: null,
          dateTime: null,
          recurring: false,
          recurringAmount: null,
          recurringType: null,
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ values, errors, touched }) => (
          <Form className={classes.form}>
            <Field
              component={TextField}
              name="title"
              type="input"
              label="Title"
              id="title-input"
              variant="outlined"
              className={classes.textField}
              error={errors.title && touched.title}
              helperText={errors.title}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <Field
              component={TextField}
              name="dateTime"
              type="datetime-local"
              label="Date and Time"
              id="date-time"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textField}
              error={errors.dateTime && touched.dateTime}
              helperText={errors.dateTime}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="recurring"
              id="recurring-checkbox"
              // Label is the form control label so classes need to go to it for styling to work
              Label={{
                label: "Recurring",
                className: classes.check,
              }}
            />
            {values.recurring && (
              <Card variant="outlined" className={classes.recurringCard}>
                <CardContent className={classes.recurringContent}>
                  <Field
                    component={TextField}
                    required
                    name="recurringAmount"
                    id="recurring-amount"
                    label="Amount"
                    type="input"
                    variant="outlined"
                    className={classes.recurringItem}
                    error={errors.recurringAmount && touched.recurringAmount}
                    helperText={errors.recurringAmount}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  />
                  <Typography align="center" className={classes.recurringItem}>
                    per
                  </Typography>
                  <Field
                    component={TextField}
                    required
                    select
                    variant="outlined"
                    name="recurringType"
                    id="recurring-type"
                    label="Type"
                    className={classes.recurringItem}
                    error={errors.recurringType && touched.recurringType}
                    helperText={errors.recurringType}
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                  >
                    {recurringTypes.map(option => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                </CardContent>
              </Card>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              SUBMIT
            </Button>
          </Form>
        )}
      </Formik>
      <Button component={Link} to="/app" className={classes.cancel}>
        CANCEL
      </Button>
    </Container>
  )
}

export default CreateGame
