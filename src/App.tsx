import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layout/dashboard-layout';
import { PageTitle } from './components/page';
// Pages
// import HomePage from './pages/home';
import ColorsPage from './pages/colors';
import IconsPage from './pages/icons';
import LinksPage from './pages/links';
import TypographiesPage from './pages/typographies';
import { useLoadApp } from './utils/use-load-app';

function App() {
  const isAppLoaded = useLoadApp();

  if (!isAppLoaded) return null;

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Navigate to="/colors" />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/icons" element={<IconsPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/typographies" element={<TypographiesPage />} />
        <Route path="*" element={<PageTitle>Not matched</PageTitle>} />
      </Route>
    </Routes>
  );
}

export default App;
