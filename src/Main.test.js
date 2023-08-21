import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from 'axios'
import axiosRetry from "axios-retry";
import Main from "./Main";


test("fetches data and sets it to state", () => {
  render(<Main />);

  const radio1 = screen.getByTestId("op_1");
  const radio2 = screen.getByTestId("op_2");
  const radio3 = screen.getByTestId("no_op");
  const pTag = screen.getByTestId("p-tag");
  
  expect(radio3).toBeChecked();
  expect(radio1).not.toBeChecked();
  expect(radio2).not.toBeChecked();
  expect(pTag).toHaveTextContent("no_op");
  
  fireEvent.click(radio2);
  expect(radio2).toBeChecked();
  expect(radio1).not.toBeChecked();
  expect(radio3).not.toBeChecked();
  expect(pTag).toHaveTextContent("op_2");

  fireEvent.click(radio1);
  expect(radio1).toBeChecked();
  expect(radio2).not.toBeChecked();
  expect(radio3).not.toBeChecked();
  expect(pTag).toHaveTextContent("op_1");

  
});

jest.mock('axios');
jest.mock('axios-retry');

  test('calls makeHTTPCall on form submission', async () => {
    axiosRetry.mockImplementation(() => {}); // Mock axiosRetry implementation
    axiosRetry.isRetryableError.mockReturnValue(true); // Mock isRetryableError

    const axiosMock = jest.fn(); // Create a mocked axios instance
    const makeHTTPCallMock = jest.spyOn(axiosMock, 'get'); // Spy on axios.get

    render(<YourComponent />); // Render your component

    const form = screen.getByTestId('your-form-id'); // Replace 'your-form-id' with your actual form's test ID
    fireEvent.submit(form); // Fire form submission event

    // You can also assert that axiosRetry was called with the expected options
    expect(axiosRetry).toHaveBeenCalledWith(axios, expect.objectContaining({
      retries: 3,
      retryDelay: expect.any(Function),
      retryCondition: expect.any(Function),
    }));

    // Assert that makeHTTPCall was called
    expect(makeHTTPCallMock).toHaveBeenCalled();
  });
