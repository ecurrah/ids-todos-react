import React from 'react';
import { render, screen, waitFor } from '../utils/test-utils';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('<App />', () => {
  it('renders app div without crashing', async () => {
    render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    ); 
  
    const homePageDiv = await waitFor(() => screen.getByTestId('app'));
    expect(homePageDiv).toBeInTheDocument();
  });  
})
