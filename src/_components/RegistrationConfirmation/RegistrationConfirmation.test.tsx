import React from "react";
import { render } from "@testing-library/react";
import { RegistrationConfirmation } from "./RegistrationConfirmation";

test("renders sign in button", () => {
  const { getByText } = render(<RegistrationConfirmation />);
  const signInButton = getByText("Sign In");
  expect(signInButton).toBeTruthy();
});
