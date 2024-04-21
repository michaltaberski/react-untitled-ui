import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';
import { getTextCssBlock } from '../tokens/typography';

export const PageTitle = styled.h1`
  ${getTextCssBlock('display-sm/semibold')}
`;

export const Page = styled(Flex).attrs(() => ({
  direction: 'column',
}))``;
