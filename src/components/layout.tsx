import { Link, Outlet } from 'react-router-dom';
import { useIconsLoaded } from './icon';
import { PageTitle } from './page';

const Layout = () => {
  const iconsLoaded = useIconsLoaded();
  if (!iconsLoaded) return null;

  return (
    <>
      <PageTitle>Untitled UI</PageTitle>
      <Link to="/">Home</Link>
      <Link to="/colors">Colors</Link>
      <Link to="/icons">Icons</Link>
      <Link to="/links">Links</Link>
      <Link to="/typographies">Typographies</Link>
      <Outlet />
    </>
  );
};

export default Layout;
