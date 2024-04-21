import { Link, Outlet } from 'react-router-dom';
import { useIconsLoaded } from './icon';
import { Text } from './text';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';

const RedFlex = styled(Flex)``;

const HeaderWrapper = styled(Flex).attrs({})`
  border-bottom: 1px solid red;
  padding: 16px;
`;

const Layout = () => {
  const iconsLoaded = useIconsLoaded();
  if (!iconsLoaded) return null;

  return (
    <>
      <HeaderWrapper>
        <Text variant="displayXl" weight="medium">
          Untitled UI
        </Text>
      </HeaderWrapper>
      <Flex gap="2">
        <RedFlex direction="column" style={{ flex: 2 }}>
          <Link to="/">Home</Link>
          <Link to="/colors">Colors</Link>
          <Link to="/icons">Icons</Link>
          <Link to="/links">Links</Link>
          <Link to="/typographies">Typographies</Link>
        </RedFlex>
        <RedFlex style={{ flex: 10 }}>
          <Outlet />
        </RedFlex>
      </Flex>
    </>
  );
};

export default Layout;
