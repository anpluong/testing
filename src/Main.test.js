import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import axiosRetry from "axios-retry";
import Main from "./Main";

// test("fetches data and sets it to state", () => {
//   render(<Main />);

//   const radio1 = screen.getByTestId("op_1");
//   const radio2 = screen.getByTestId("op_2");
//   const radio3 = screen.getByTestId("no_op");
//   const pTag = screen.getByTestId("p-tag");

//   expect(radio3).toBeChecked();
//   expect(radio1).not.toBeChecked();
//   expect(radio2).not.toBeChecked();
//   expect(pTag).toHaveTextContent("no_op");

//   fireEvent.click(radio2);
//   expect(radio2).toBeChecked();
//   expect(radio1).not.toBeChecked();
//   expect(radio3).not.toBeChecked();
//   expect(pTag).toHaveTextContent("op_2");

//   fireEvent.click(radio1);
//   expect(radio1).toBeChecked();
//   expect(radio2).not.toBeChecked();
//   expect(radio3).not.toBeChecked();
//   expect(pTag).toHaveTextContent("op_1");
// });

// test("simple testing", () => {
//   const result1 = jest.fn(() => 'abc');

//   expect(result1).
//   expect(mockFunction1).toHaveBeenCalled();
// });
