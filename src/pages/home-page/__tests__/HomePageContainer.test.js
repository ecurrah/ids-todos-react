import { render, screen } from '../../../utils/test-utils';
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
