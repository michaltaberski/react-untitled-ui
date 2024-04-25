import {
  NumericParamValue,
  commonNumericParamValueMapper,
} from './numeric-param';

export type ExtractFlexProps = {
  direction?: 'row' | 'column';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  gap?: NumericParamValue;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
};

const mapPropsToStyle = <T extends object>(input: T) => {
  const MAP: Record<keyof ExtractFlexProps, string> = {
    direction: 'flexDirection',
    wrap: 'flexWrap',
    align: 'alignItems',
    justify: 'justifyContent',
    gap: 'gap',
  };

  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      MAP[key as keyof typeof MAP],
      key === 'gap' ? commonNumericParamValueMapper(value) : value,
    ]),
  );
};

export const extractFlexProps = <
  T extends {
    style?: React.CSSProperties;
    [key: string]: unknown;
  },
>(
  props: T,
) => {
  const style = props.style ?? {};
  const extractedStyle = mapPropsToStyle(props);

  return {
    ...props,
    style: { ...extractedStyle, ...style },
  };
};
