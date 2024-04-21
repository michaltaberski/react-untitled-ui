import styled from 'styled-components';
import { getColor } from '../theme/color';
import Logo from './logo';
import { Flex } from '@radix-ui/themes';

const AppHeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid ${getColor('grey-200')};
`;

export const BaseLayoutContainer = styled(Flex)`
  padding: 0 32px;
  margin: 0 auto;
  max-width: 1280px;
`;

const AppHeaderContainer = styled(BaseLayoutContainer).attrs({
  align: 'center',
})`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <AppHeaderContainer>
        <Logo />
      </AppHeaderContainer>
    </AppHeaderWrapper>
  );
};

export default AppHeader;