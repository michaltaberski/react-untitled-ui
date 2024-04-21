import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { SlotLink } from '../components/slot-link';
import { getTextCssBlock } from '../theme/typography';
import { getColor } from '../theme/color';
import { Text } from '../components/text';
import Logo from './logo';

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
  ${getTextCssBlock('textSm', 'medium')}
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
            <SlotLink to="/colors">
              <MenuItem>Colors</MenuItem>
            </SlotLink>
            <SlotLink to="/icons">
              <MenuItem>Icons</MenuItem>
            </SlotLink>
            <SlotLink to="/links">
              <MenuItem>Links</MenuItem>
            </SlotLink>
            <SlotLink to="/typographies">
              <MenuItem>Typographies</MenuItem>
            </SlotLink>
          </AppSidebarBody>
          <AppSidebarFooter>
            <Text variant="textSm" weight="regular" color="grey-700">
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
