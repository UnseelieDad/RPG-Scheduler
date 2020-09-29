import * as Yup from "yup"

const formSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required!").typeError("Title can only contain letters!"),
    dateTime: Yup.date()
        .min(new Date(), "Can't schedule games in the past")
        .required("Required!").typeError("Invalid Date!"),
    recurring: Yup.bool().required("Required!"),
    recurringAmount: Yup.number().nullable(true).when("recurring", {
        is: true,
        then: Yup.number().nullable(false)
            .positive()
            .max(50, "Too many games!")
            .required("Required!").typeError("Must be a number!"),
    }),
    recurringType: Yup.string().nullable(true).when("recurring", {
        is: true,
        then: Yup.string().nullable(false).oneOf(["Week", "Month", "Year"]).required("Required!").typeError("An option is required!"),
    }),
})

export default formSchema