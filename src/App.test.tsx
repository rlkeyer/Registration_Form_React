import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app container", () => {
  render(<App />);
  const appContainer = document.getElementsByClassName("App")[0];
  expect(appContainer).toBeTruthy();
});
