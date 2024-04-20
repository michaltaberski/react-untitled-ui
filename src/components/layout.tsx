import { useIconsLoaded } from './icon';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const iconsLoaded = useIconsLoaded();
  if (!iconsLoaded) return null;

  return <>{children}</>;
};

export default Layout;
