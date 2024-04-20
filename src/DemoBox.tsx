import { MarginProps, extractMarginProps } from './utls';

export const DemoBox = (p: MarginProps & { children?: React.ReactNode }) => {
  const betterProps = extractMarginProps(p);
  return <div {...betterProps}>{p.children}</div>;
};
