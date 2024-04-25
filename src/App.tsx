import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout, { SidebarLinkProps } from './layout/dashboard-layout';
import { PageTitle } from './components/page';
import { useLoadApp } from './utils/use-load-app';
import { ROUTES } from './utils/file-based-routing';
import { Fragment } from 'react/jsx-runtime';

const SIDEBAR_LINKS: SidebarLinkProps[] = [
  { label: 'Colors', to: '/colors', iconName: 'droplet' },
  { label: 'Icons', to: '/icons', iconName: 'mouse-pointer' },
  { label: 'Links', to: '/links', iconName: 'link' },
];

function App() {
  const isAppLoaded = useLoadApp();

  if (!isAppLoaded) return null;

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout links={SIDEBAR_LINKS} />}>
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
