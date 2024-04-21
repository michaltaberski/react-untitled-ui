import { Outlet } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { SlotLink } from '../components/slot-link';
import { getTextCssBlock } from '../theme/typography';
import { getColor } from '../theme/color';
import AppHeader, { BaseLayoutContainer } from './app-header';

const MenuItem = styled.button`
  ${getTextCssBlock('textSm', 'medium')}
  text-align: left;
  padding: 10px 16px;
  color: ${getColor('grey-700')};
  &:hover {
    background-color: ${getColor('grey-50')};
  }
`;

const LandingLayout = () => {
  return (
    <>
      <AppHeader />
      <BaseLayoutContainer
        gap="20px"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Flex direction="column" style={{ width: 225 }}>
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
        </Flex>
        <Flex style={{ flex: 10 }}>
          <Outlet />
        </Flex>
      </BaseLayoutContainer>
    </>
  );
};

export default LandingLayout;
