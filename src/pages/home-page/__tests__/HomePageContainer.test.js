import { render, screen, waitFor } from '../../../utils/test-utils';
import HomePageContainer from '../HomePageContainer';

describe('<HomePageContainer />', () => {
    it('renders home page container without crashing', async () => {
        render(
            <HomePageContainer />
        );

        const homePageDiv = await waitFor(() => screen.getByTestId('home-page'));
        expect(homePageDiv).toBeInTheDocument();
    })
})
