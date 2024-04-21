import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import AboutPage from './pages/about';
import ColorsPage from './pages/colors';
import IconsPage from './pages/icons';
import { PageTitle } from './components/page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="*" element={<PageTitle>Not matched</PageTitle>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
