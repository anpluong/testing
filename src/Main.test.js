import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Main from './Main';

jest.mock('axios'); // Automatically mocks all axios requests

test('handleRedirect is called on radio button selection', async () => {
  axios.get.mockResolvedValue({ data: { url: 'http://example.com' } });

  render(<Main />);
  const app1Radio = screen.getByLabelText('App1');

  fireEvent.click(app1Radio);
  fireEvent.click(screen.getByText('next'));

  await waitFor(() => {
    expect(window.location.href).toBe('http://example.com');
  });
});