import { forwardRef } from 'react';
import {
  FontKey,
  TEXT_COMPONENTS_MAP,
  splitFontKey,
} from '../tokens/typography';
import { ColorKey, getColor } from '../tokens/color';
TEXT_COMPONENTS_MAP;

export const Text = forwardRef(
  (
    {
      style = {},
      color,
      font,
      ...rest
    }: {
      font: FontKey;
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
    const [variant, weight] = splitFontKey(font);
    const Comp = TEXT_COMPONENTS_MAP[variant][weight];
    Comp.displayName = 'Text';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Comp ref={ref as any} style={combinedStyle} {...rest} />;
  },
);
