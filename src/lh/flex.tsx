import React, { forwardRef } from 'react';
import {
  ExtractMarginProps,
  ExtractPaddingProps,
  extractMarginPaddingProps,
} from './extract-margin-padding';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> &
  ExtractMarginProps &
  ExtractPaddingProps;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, ref) => {
    const extractedProps = extractMarginPaddingProps(props);
    return (
      <div ref={ref} {...extractedProps}>
        {children}
      </div>
    );
  },
);
