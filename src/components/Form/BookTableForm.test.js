import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookTableForm from "./BookTableForm";
import { useFormik } from "formik";

jest.mock("formik");

describe("BookTableForm", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    useFormik.mockReturnValue({
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      values: {
        date: "",
        quantity: "",
        name: "",
      },
      errors: {},
    });
  });

  it("should render the form with correct title", () => {
    render(<BookTableForm onSubmit={mockOnSubmit} />);

    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { type: /submit/i })).toBeInTheDocument();
  });

  it("should handle date input change", () => {
    render(<BookTableForm onSubmit={mockOnSubmit} />);
    const dateInput = screen.getByLabelText(/Date:/i);

    fireEvent.change(dateInput, { target: { value: "2023-10-10" } });
    expect(useFormik().handleChange).toHaveBeenCalled();
  });

  it("should handle quantity input change", () => {
    render(<BookTableForm onSubmit={mockOnSubmit} />);
    const quantityInput = screen.getByLabelText(/Number of guests:/i);

    fireEvent.change(quantityInput, { target: { value: 3 } });
    expect(useFormik().handleChange).toHaveBeenCalled();
  });

  it("should handle name input change", () => {
    render(<BookTableForm onSubmit={mockOnSubmit} />);
    const nameInput = screen.getByLabelText(/Your name:/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(useFormik().handleChange).toHaveBeenCalled();
  });


  it("should display validation errors if present", () => {
    useFormik.mockReturnValueOnce({
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      values: {
        date: "",
        quantity: "",
        name: "",
      },
      errors: {
        date: "Date is required",
        quantity: "Number of guests is required",
        name: "Your name is required",
      },
    });

    render(<BookTableForm onSubmit={mockOnSubmit} />);

    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Number of guests is required/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Your name is required/i)).toBeInTheDocument();
  });
});
