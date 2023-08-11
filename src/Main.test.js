import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Main from './Main';

test('fetches data and sets it to state', () => {
  render(<Main />);
  let radio3 = screen.getByTestId("no_op");
  expect(radio3).toBeChecked();

  let radio2 = screen.getByTestId("op_2");
  fireEvent.click(radio2)
  expect(radio2).toBeChecked();

  let radio1 = screen.getByTestId("op_1");
  expect(radio1).not.toBeChecked();

  const pTag = screen.getByTestId("p-tag");

  expect(pTag).toHaveTextContent("op_2")

 
});