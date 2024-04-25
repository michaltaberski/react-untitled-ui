import { ExtractProps, extractProps } from '.';
import React, { forwardRef } from 'react';

type BoxProps = React.HTMLAttributes<HTMLDivElement> & ExtractProps;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    const extractedProps = extractProps(props);
    return (
      <div ref={ref} {...extractedProps}>
        {children}
      </div>
    );
  },
);
