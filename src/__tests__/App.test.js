import React from 'react';
import { render, screen } from '../utils/test-utils';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('renders app div', () => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  const homePageDiv = screen.getByTestId('app');
  expect(homePageDiv).toBeInTheDocument();
});
