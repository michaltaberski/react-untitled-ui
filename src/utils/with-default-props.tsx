import { forwardRef } from 'react';

export const withDefaultProps = <
  P extends object,
  DP extends Partial<P> = Partial<P>,
>(
  Cmp: React.ComponentType<P>,
  defaultProps: DP,
) => {
  type RequiredProps = Omit<P, keyof DP>;
  type Props = Partial<DP> & RequiredProps;

  return forwardRef((props: Props, ref) => (
    <Cmp ref={ref} {...defaultProps} {...(props as P)} />
  ));
};
