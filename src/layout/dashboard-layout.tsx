import { Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { SlotLink } from '../components/slot-link';
import { getTextCssBlock } from '../tokens/typography';
import { getColor } from '../tokens/color';
import { Text } from '../components/text';
import Logo from './logo';
import { ROUTES } from '../utils/file-based-routing';

const SIDEAR_WIDTH = 312;

const AppSidebarWrapper = styled(Flex).attrs({ direction: 'column' })`
  position: fixed;
  height: 100vh;

  width: ${SIDEAR_WIDTH}px;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: 1px solid ${getColor('divider')};
  padding-top: 32px;
`;

const AppSidebarHeader = styled(Flex)`
  padding: 0 16px 24px;
  margin: 0 8px;
`;

const AppSidebarBody = styled(Flex).attrs({ direction: 'column' })`
  overflow: auto;
  padding: 0 16px 24px;
  flex: 1;
`;

const AppSidebarFooter = styled(Flex)`
  border-top: 1px solid ${getColor('divider')};
  padding: 24px 16px 32px;
`;

const AppMain = styled(Flex)`
  margin-left: ${SIDEAR_WIDTH}px;
  padding: 32px;
  max-width: 1280px;
`;

const MenuItem = styled.button`
  ${getTextCssBlock('text-sm/medium')}
  text-align: left;
  padding: 10px 16px;
  color: ${getColor('grey-700')};
  &:hover {
    background-color: ${getColor('grey-50')};
  }
`;

const DashboardLayout = () => {
  return (
    <>
      <Flex>
        <AppSidebarWrapper>
          <AppSidebarHeader>
            <Logo />
          </AppSidebarHeader>
          <AppSidebarBody>
            {/*
          <SlotLink to="/">
            <MenuItem>Home</MenuItem>
          </SlotLink>
          */}
            {ROUTES.map(({ path, title }) => (
              <SlotLink key={path} to={path}>
                <MenuItem>{title}</MenuItem>
              </SlotLink>
            ))}
          </AppSidebarBody>
          <AppSidebarFooter>
            <Text font="text-xs/regular" color="grey-600">
              © MT 2024
            </Text>
          </AppSidebarFooter>
        </AppSidebarWrapper>
        <AppMain>
          <Outlet />
        </AppMain>
      </Flex>
    </>
  );
};

export default DashboardLayout;
