import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { SlotLink } from '../components/slot-link';
import { getTextCssBlock } from '../theme/typography';
import { getColor } from '../theme/color';
import Logo from './logo';

const AppSidebar = styled(Flex).attrs({ direction: 'column' })`
  width: 312px;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: 1px solid ${getColor('divider')};
  padding: 16px;
  padding-top: 32px;
`;

const AppMain = styled(Flex)`
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
        <AppSidebar>
          <Box mx="2">
            <Logo />
          </Box>
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
        </AppSidebar>
        <AppMain>
          <Outlet />
        </AppMain>
      </Flex>
    </>
  );
};

export default DashboardLayout;
