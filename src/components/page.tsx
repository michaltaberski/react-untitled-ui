import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { getTextCssBlock } from '../theme/typography';

export const PageTitle = styled.h1`
  ${getTextCssBlock('displaySm', 'semibold')}
`;

export const Page = styled(Flex).attrs(() => ({
  direction: 'column',
}))``;
