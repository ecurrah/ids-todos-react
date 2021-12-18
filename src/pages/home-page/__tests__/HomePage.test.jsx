import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { mockTodos } from '../../../features/todos/mocks';

describe('<HomePage />', () => {
    it('renders home page without crashing', () => {
        render(
            <HomePage activeTab={'INCOMPLETE'} todos={mockTodos} />
        );

        const homePageDiv = screen.getByTestId('home-page');
        expect(homePageDiv).toBeInTheDocument();
    });

    it('styles the left tab as "active" when "INCOMPLETE" passed as activeTab', () => {
        render(
            <HomePage activeTab={'INCOMPLETE'} todos={mockTodos} />
        );

        const leftTab = screen.getByTestId('tab-left');
        expect(leftTab).toHaveClass('active');
    });

    it('styles the right tab as "active" when "COMPLETED" passed as activeTab', () => {
        render(
            <HomePage activeTab={'COMPLETED'} todos={mockTodos} />
        );

        const rightTab = screen.getByTestId('tab-right');
        expect(rightTab).toHaveClass('active');
    });
})
