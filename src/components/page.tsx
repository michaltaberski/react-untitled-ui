import styled from 'styled-components';
import { getTextCssBlock } from '../tokens/typography';
import { Flex } from '@/layout-helper';

export const PageTitle = styled.h1`
  ${getTextCssBlock('display-sm/semibold')}
`;

export const Page = styled(Flex).attrs(() => ({
  direction: 'column',
}))`
  width: 100%;
`;
