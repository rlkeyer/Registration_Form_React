import React from "react";
import { render } from "@testing-library/react";
import { RegistrationContainer } from "./RegistrationContainer";

test("renders logo", () => {
  render(<RegistrationContainer />);
  const logo = document.getElementsByClassName(
    "RegistrationContainer__logo"
  )[0];
  expect(logo).toBeTruthy();
});
