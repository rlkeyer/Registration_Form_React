import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { RegistrationForm } from "./RegistrationForm";

test("renders title and inputs", () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<RegistrationForm onSubmit={handleSubmit} />);
  const title = getByText("Create your Availity account");
  expect(title).toBeTruthy();
});

test("clicking Create Account button fires onSubmit function", () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<RegistrationForm onSubmit={handleSubmit} />);
  const createAccount = getByText("Create Account");
  fireEvent.click(createAccount);
  expect(handleSubmit).toHaveBeenCalled();
});

test("clicking Create Account button without all inputs filled shows warning text", () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<RegistrationForm onSubmit={handleSubmit} />);
  const warningBeforeClick = document.getElementsByClassName(
    "RegistrationForm__warning--is-visible"
  );
  expect(warningBeforeClick.length).toBeFalsy();
  const createAccount = getByText("Create Account");
  fireEvent.click(createAccount);
  const warning = document.getElementsByClassName(
    "RegistrationForm__warning--is-visible"
  );
  expect(warning.length).toBeTruthy();
});
