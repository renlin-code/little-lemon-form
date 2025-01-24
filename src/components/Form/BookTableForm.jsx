import "./BookTableForm.css";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required("Date is required")
    .min(new Date(), "Date can not be before todays date"),
  quantity: Yup.number()
    .required("Number of guests is required")
    .integer("Invalid number of guests")
    .min(1, "Number of guests can not be less than 1")
    .max(10, "Number of guests can not be more than 10"),
  name: Yup.string()
    .required("Your name is required")
    .min(2, "Name can not be shorter than 2 symbols")
    .max(10, "Name can not excede 10 symbols"),
});

const errorTextStyles = {
  color: "#EE9972",
  marginTop: "10px",
  display: "inline-block"
}

const DateForm = () => {
  return (
    <Formik
      initialValues={{
        date: "",
        quantity: 1,
        name: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("SUBMITED", values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="form">
            <h2 className="form__title">Table reservation</h2>
            <div className="form__groups">
              <div className="form__group">
                <label htmlFor="date">Date:</label>
                <Field
                  type="date"
                  name="date"
                  onChange={(event) => {
                    setFieldValue("date", event.currentTarget.value);
                  }}
                />
                <ErrorMessage
                  name="date"
                  component="span"
                  style={errorTextStyles}
                />
              </div>
              <div className="form__group">
                <label htmlFor="quantity">Number of guests:</label>
                <Field
                  type="number"
                  name="quantity"
                  onChange={(event) => {
                    setFieldValue("quantity", event.currentTarget.value);
                  }}
                />
                <ErrorMessage
                  name="quantity"
                  component="span"
                  style={errorTextStyles}
                />
              </div>
              <div className="form__group">
                <label htmlFor="name">Your name:</label>
                <Field
                  type="text"
                  name="name"
                  onChange={(event) => {
                    setFieldValue("name", event.currentTarget.value);
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  style={errorTextStyles}
                />
              </div>
            </div>
            <Button type="submit" fullWidth>Send</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DateForm;
