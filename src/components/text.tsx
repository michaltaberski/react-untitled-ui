import { forwardRef } from 'react';
import {
  FontWeight,
  TEXT_COMPONENTS_MAP,
  Typography,
} from '../theme/typography';
import { ColorKey, getColor } from '../theme/color';
TEXT_COMPONENTS_MAP;

export const Text = forwardRef(
  (
    {
      weight,
      variant,
      style = {},
      color,
      ...rest
    }: {
      variant: Typography;
      weight: FontWeight;
      color?: ColorKey;
      style?: React.CSSProperties;
      as?: keyof JSX.IntrinsicElements;
      children?: React.ReactNode;
    },
    ref,
  ) => {
    const combinedStyle = {
      ...(color ? { color: getColor(color) } : {}),
      ...style,
    };
    const Comp = TEXT_COMPONENTS_MAP[variant][weight];
    Comp.displayName = 'Text';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Comp ref={ref as any} style={combinedStyle} {...rest} />;
  },
);
