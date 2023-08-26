// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import MyComponent from './MyComponent';

// // Mock the fetchData function
// jest.mock('./MyComponent', () => ({
//   fetchData: jest.fn(() => Promise.resolve('Mocked data')),
// }));

// test('renders fetched data', async () => {
//   // Render the component
//   const { getByText } = render(<MyComponent />);

//   // Wait for the data to be displayed
//   await waitFor(() => {
//     expect(getByText('Mocked data')).toBeInTheDocument();
//   });
// });

// let axios = {
//     get: () => {return 'AAA'},
//     post: () => {return 'BBB'}
// }

// // mocking
// axios.get = () => {return 'CCC'}

// let jest = { 

//     // state 
//     // calls
//     // inputs
//     fn: () => {() => {return 'CCC'} },
//     mockReturnFulfilledPromise: ...
// }

// axios.get =jest.fn()


// const foo = () => {
//     const  internalFunc = () => {
//         return 'ABC'
//     }
//     return internalFunc()
// }

// jest.mock(foo)

// foo.parentElement.internalFunc = jest.fn()

// const foo2 = (arg1) => {
//     return Promise.resolve('the-actual-aaa')
// }

// foo2(123).then((aaa) => {return aaa + 1}).then((bbb) => {return bbb + 2})