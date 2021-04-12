import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const appContainer = document.getElementsByClassName("App")[0];
  expect(appContainer).toBeTruthy();
});
