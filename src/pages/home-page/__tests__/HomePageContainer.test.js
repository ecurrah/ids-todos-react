import { render, screen } from '@testing-library/react';
import HomePageContainer from '../HomePageContainer';

describe('<HomePageContainer />', () => {
    it('renders home page container without crashing', () => {
        render(
            <HomePageContainer />
        );
        
        const homePageDiv = screen.getByTestId('home-page');
        expect(homePageDiv).toBeInTheDocument();
    })
})
