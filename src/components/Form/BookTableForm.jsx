import "./BookTableForm.css";

import React, { useId } from "react";
import { useFormik } from "formik";
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
  display: "inline-block",
};

const INITIAL_VALUES = {
  date: "",
  quantity: 1,
  name: "",
};

const BookTableForm = ({ onSubmit }) => {
  const dateId = useId();
  const quantityId = useId();
  const nameId = useId();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2 className="form__title">Table reservation</h2>
      <div className="form__groups">
        <div className="form__group">
          <label htmlFor={dateId}>Date:</label>
          <input
            id={dateId}
            type="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.errors.date ? <span style={errorTextStyles}>{formik.errors.date}</span> : null}
        </div>
        <div className="form__group">
          <label htmlFor={quantityId}>Number of guests:</label>
          <input
            id={quantityId}
            type="number"
            name="quantity"
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
          {formik.errors.quantity ? <span style={errorTextStyles}>{formik.errors.quantity}</span> : null}
        </div>
        <div className="form__group">
          <label htmlFor={nameId}>Your name:</label>
          <input
            id={nameId}
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <span style={errorTextStyles}>{formik.errors.name}</span> : null}
        </div>
      </div>
      <Button type="submit" fullWidth>
        Send
      </Button>
    </form>
  );
};

export default BookTableForm;
