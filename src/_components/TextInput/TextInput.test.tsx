import React from "react";
import { render } from "@testing-library/react";
import { TextInput } from "./TextInput";

test("renders TextInput", () => {
  const handleOnChange = jest.fn();
  const { getByText } = render(
    <TextInput value="testing" onChange={handleOnChange} />
  );
  const input = document.getElementsByClassName("TextInput")[0];
  expect(input).toBeTruthy();
});
