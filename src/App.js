import { Route, Routes } from 'react-router-dom';
import Home from './pages/home-page/HomePageContainer';


function App() {
  return (
    <div data-testid='app'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
