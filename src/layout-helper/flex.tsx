import React, { forwardRef } from 'react';
import {
  ExtractMarginProps,
  ExtractPaddingProps,
  extractMarginPaddingProps,
} from './extract-margin-padding';
import { ExtractFlexProps, extractFlexProps } from './extract-flex';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> &
  ExtractMarginProps &
  ExtractPaddingProps &
  ExtractFlexProps;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, ref) => {
    const extractedProps = extractFlexProps(extractMarginPaddingProps(props));
    return (
      <div ref={ref} {...extractedProps}>
        {children}
      </div>
    );
  },
);
