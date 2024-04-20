import { extractProps } from '@radix-ui/themes/helpers';
import { Responsive, Union, marginPropDefs } from '@radix-ui/themes/props';

export type Marign = Responsive<
  Union<string, '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>
>;

export type MarginProps = {
  m?: Marign;
  mt?: Marign;
  mr?: Marign;
  mb?: Marign;
  ml?: Marign;
  mx?: Marign;
  my?: Marign;
};

export const extractMarginProps = <TProps extends MarginProps>(props: TProps) =>
  extractProps(props, marginPropDefs);
