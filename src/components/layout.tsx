import { Outlet } from 'react-router-dom';
import { useIconsLoaded } from './icon';
import { Text } from './text';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { SlotLink } from './slot-link';
import { getTextCssBlock } from '../theme/typography';
import { getColor } from '../theme/color';

const HeaderWrapper = styled(Flex).attrs({})`
  border-bottom: 1px solid ${getColor('grey-200')};
  padding: 16px;
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
        <Flex
          direction="column"
          style={{ flex: 2, padding: 16, background: '#fff' }}
        >
          <SlotLink to="/">
            <MenuItem>Home</MenuItem>
          </SlotLink>
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
      </Flex>
    </>
  );
};

export default Layout;
