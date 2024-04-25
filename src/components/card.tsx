import { ReactNode, forwardRef } from 'react';
import { ShadowKey, shadows } from '../tokens/shadows';
import styled from 'styled-components';
import { getColor } from '../tokens/color';
import { Box, BoxProps } from '@/layout-helper/box';

type CardProps = {
  children?: ReactNode;
  shadow?: ShadowKey;
} & BoxProps;

const CardDiv = styled(Box)`
  border-radius: 12px;
  border: 1px solid ${getColor('grey-300')};
`;

export const Card = forwardRef(
  ({ children, style = {}, shadow = 'shadow-xs', ...rest }: CardProps, ref) => {
    return (
      <CardDiv
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        {...rest}
        style={{
          boxShadow: shadows[shadow].boxShadow,
          ...style,
        }}
      >
        {children}
      </CardDiv>
    );
  },
);
