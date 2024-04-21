import { Link, Outlet } from 'react-router-dom';
import { useIconsLoaded } from './icon';
import { Flex } from '@radix-ui/themes';

const Layout = () => {
  const iconsLoaded = useIconsLoaded();
  if (!iconsLoaded) return null;

  return (
    <>
      <Flex>Pages:</Flex>
      <Link to="/">Home</Link>
      <Link to="/colors">Colors</Link>
      <Link to="/icons">Icons</Link>
      <Outlet />
    </>
  );
};

export default Layout;
