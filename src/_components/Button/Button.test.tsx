import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";

test("renders button", () => {
  const { getByText } = render(<Button>testButton</Button>);
  const button = getByText("testButton");
  expect(button).toBeTruthy();
});

test("clicking button fires onClick event", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick}>testButton</Button>
  );
  const createAccount = getByText("testButton");
  fireEvent.click(createAccount);
  expect(handleClick).toHaveBeenCalled();
});
