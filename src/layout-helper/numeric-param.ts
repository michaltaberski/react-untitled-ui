export type NumericParamValue = number;

export const commonNumericParamValueMapper = (value: NumericParamValue) =>
  value * 8 + 'px';
