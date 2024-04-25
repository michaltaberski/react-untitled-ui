import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout, { SidebarLinkProps } from './layout/dashboard-layout';
import { PageTitle } from './components/page';
import { useLoadApp } from './utils/use-load-app';
import { ROUTES } from './utils/file-based-routing';
import { Fragment, useEffect } from 'react';

const PageLoader = ({
  component: Component,
  title,
}: {
  component: React.ComponentType & { title?: string };
  title?: string;
}) => {
  useEffect(() => {
    document.title = [title || Component?.title, 'UntitledUI']
      .filter(Boolean)
      .join(' - ');
  }, [Component, title]);
  return <Component />;
};

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
      <Route
        path="/"
        element={
          <DashboardLayout links={SIDEBAR_LINKS} subtitle="Componets library" />
        }
      >
        <Route path="/" element={<Navigate to="/colors" />} />
        {/* File based routes */}
        {ROUTES.map(({ path, component: Component = Fragment }) => (
          <Route
            key={path}
            path={path}
            element={<PageLoader component={Component} />}
          />
        ))}
        <Route
          path="*"
          element={
            <PageLoader
              title="404"
              component={() => <PageTitle>404 - Not found</PageTitle>}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
