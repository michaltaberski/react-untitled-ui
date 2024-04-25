import React, { forwardRef } from 'react';
import {
  ExtractMarginProps,
  ExtractPaddingProps,
  extractMarginPaddingProps,
} from './extract-margin-padding';

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  ExtractMarginProps &
  ExtractPaddingProps;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    const extractedProps = extractMarginPaddingProps(props);
    return (
      <div ref={ref} {...extractedProps}>
        {children}
      </div>
    );
  },
);
