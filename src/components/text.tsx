import { forwardRef } from 'react';
import {
  FontWeight,
  TEXT_COMPONENTS_MAP,
  Typography,
} from '../theme/typography';
TEXT_COMPONENTS_MAP;

export const Text = forwardRef(
  (
    {
      weight,
      variant,
      ...rest
    }: {
      variant: Typography;
      weight: FontWeight;
      children?: React.ReactNode;
    },
    ref,
  ) => {
    const Comp = TEXT_COMPONENTS_MAP[variant][weight];
    Comp.displayName = 'Text';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Comp ref={ref as any} {...rest} />;
  },
);
