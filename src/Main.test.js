import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Main from './Main';

test('fetches data and sets it to state', () => {
  render(<Main />);

  let radio1 = screen.getByTestId("op_1");
  fireEvent.change(radio1)

  const pTag = screen.getByTestId("p-tag");

  expect(pTag).toHaveTextContent("op_1")
 
});