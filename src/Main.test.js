import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Main from "./Main";

const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedLocation,
}));

describe("YourComponent", () => {
  it('should check the radio button when radioOption is "app1"', () => {
    // // Arrange
    // const onOptionChange = jest.fn(); // Mock the onOptionChange function
    // const radioOption = 'app1';
    // // Act
    // const { getByLabelText } = render(
    //   <>
    //     <input
    //       value="app1"
    //       name="app1"
    //       type="radio"
    //       id="app1"
    //       onChange={onOptionChange}
    //       checked={radioOption === "app1"}
    //     />
    //     <label htmlFor="app1">app1</label>
    //   </>
    // );
    // // Assert
    // const radioInput = getByLabelText('app1');
    // expect(radioInput.checked).toBe(true);
  });

  // it('should call onOptionChange when radio button is changed', () => {
  //   // Arrange
  //   const onOptionChange = jest.fn(); // Mock the onOptionChange function
  //   const radioOption = 'app2';

  //   // Act
  //   const { getByLabelText } = render(
  //     <>
  //       <input
  //         value="app1"
  //         name="app1"
  //         type="radio"
  //         id="app1"
  //         onChange={onOptionChange}
  //         checked={radioOption === "app2"}
  //       />
  //       <label htmlFor="app2">app2</label>
  //     </>
  //   );

  //   const radioInput = getByLabelText('app');
  //   fireEvent.click(radioInput);

  //   // Assert
  //   expect(onOptionChange).toHaveBeenCalled();
  // });
});

// const { getByText } = (
//   <MemoryRouter>
//     <Routes>
//       <Route path="/start/:user" element={<Main />} />
//     </Routes>
//   </MemoryRouter>
// );

// getByText(/This is app3/);

// given
// const response = {
//   app1: true,
//   app2: true
// };

//  // when
//  let result = await axios.get(
//   "https://localhost:8000/v1/services"
// );

// axios.get = jest.fn(() => response);

// // console.log(axios.get)
// await waitFor(() => {

//   expect((axios.get).toHaveBeenCalledWith(`https://localhost:8000/v1/services`));
// })
// expect(result).toEqual(response);


/*  Reference
https://github.com/brianspinos777/references/blob/main/javascript/react/mock-axios.md?fbclid=IwAR1MYSoWAqxb-tYnWMeITkq1lOyhGnon_wCiuHxBgN34wmSFM5bCbs-c460
*/
