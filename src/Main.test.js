import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Main from './Main';

test('fetches data and sets it to state', () => {
  render(<Main />);
  let radio3 = screen.getByTestId("no_op");
  let pTag = screen.getByTestId("p-tag");
  expect(radio3).toBeChecked();
  expect(pTag).toHaveTextContent("no_op")

  let radio2 = screen.getByTestId("op_2");
  fireEvent.click(radio2)
  expect(radio2).toBeChecked();
  expect(pTag).toHaveTextContent("op_2")

  let radio1 = screen.getByTestId("op_1");
  fireEvent.click(radio1)
  expect(radio1).toBeChecked();
  expect(pTag).toHaveTextContent("op_1")

 
});