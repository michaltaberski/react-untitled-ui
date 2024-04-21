import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layout/dashboard-layout';
import { PageTitle } from './components/page';
import { useLoadApp } from './utils/use-load-app';
import { ROUTES } from './utils/file-based-routing';
import { Fragment } from 'react/jsx-runtime';

function App() {
  const isAppLoaded = useLoadApp();

  if (!isAppLoaded) return null;

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/colors" />} />
        {/* File based routes */}
        {ROUTES.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<PageTitle>Not matched</PageTitle>} />
      </Route>
    </Routes>
  );
}

export default App;
