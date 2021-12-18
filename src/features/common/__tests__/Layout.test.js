import React from 'react';
import { render, screen } from '@testing-library/react';import Layout from '../Layout';
import { BrowserRouter } from 'react-router-dom';

describe('<Layout />', () => {
    it('renders child component without crashing', () => {
        render(
          <Layout>
              <div data-testid='child'></div>
          </Layout>
        );
      
        const childDiv = screen.getByTestId('child');
        expect(childDiv).toBeInTheDocument();
      });
})

