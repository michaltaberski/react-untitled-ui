import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { PageTitle } from './components/page';
// Pages
import HomePage from './pages/home';
import ColorsPage from './pages/colors';
import IconsPage from './pages/icons';
import LinksPage from './pages/links';
import TypographiesPage from './pages/typographies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/icons" element={<IconsPage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/typographies" element={<TypographiesPage />} />
        <Route path="*" element={<PageTitle>Not matched</PageTitle>} />
      </Route>
    </Routes>
  );
}

export default App;
