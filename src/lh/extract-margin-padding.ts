import { omitBy } from 'lodash';
import React from 'react';
import {
  NumericParamValue,
  commonNumericParamValueMapper,
} from './numeric-param';

export type SupportedParamType = 'p' | 'm';

type CssParamKey<T extends SupportedParamType> =
  | `${T}t`
  | `${T}r`
  | `${T}b`
  | `${T}l`;

type ParamKey<T extends SupportedParamType> =
  | `${T}`
  | `${T}x`
  | `${T}y`
  | `${T}t`
  | `${T}r`
  | `${T}b`
  | `${T}l`;

export type ExtractMarginProps = {
  [K in ParamKey<'m'>]?: NumericParamValue;
};

export type ExtractPaddingProps = {
  [K in ParamKey<'p'>]?: NumericParamValue;
};

export const omitEmptyValues = (obj: object) => {
  return omitBy(
    obj,
    value => value === '' || value === undefined || value === null,
  );
};

export const propsMerge = <TParamType extends SupportedParamType>(
  props: {
    [K in ParamKey<SupportedParamType>]?: NumericParamValue;
  },
  paramType: TParamType,
): Partial<{
  [K in CssParamKey<TParamType>]: NumericParamValue;
}> => {
  return omitEmptyValues({
    [`${paramType}t`]:
      props[`${paramType}t`] ?? props[`${paramType}y`] ?? props[`${paramType}`],
    [`${paramType}r`]:
      props[`${paramType}r`] ?? props[`${paramType}x`] ?? props[`${paramType}`],
    [`${paramType}b`]:
      props[`${paramType}b`] ?? props[`${paramType}y`] ?? props[`${paramType}`],
    [`${paramType}l`]:
      props[`${paramType}l`] ?? props[`${paramType}x`] ?? props[`${paramType}`],
  });
};

const mapToCss = <TParamType extends SupportedParamType>(
  input: Partial<{
    [K in CssParamKey<TParamType>]: NumericParamValue;
  }>,
  mapFn: (paramValue: NumericParamValue) => string | number = x => x,
) => {
  const MAP = {
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
  };
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      MAP[key as keyof typeof MAP],
      mapFn(value as NumericParamValue),
    ]),
  );
};

export const mapPropsToStyle = <T extends object>(
  props: T,
  mapFn?: (paramValue: NumericParamValue) => string | number,
) => {
  const marginProps = mapToCss(propsMerge(props, 'm'), mapFn);
  const paddingProps = mapToCss(propsMerge(props, 'p'), mapFn);
  return { ...marginProps, ...paddingProps };
};

export const extractMarginPaddingProps = <
  T extends {
    style?: React.CSSProperties;
  },
>(
  props: T,
) => {
  const style = props.style ?? {};
  const extractedStyle = mapPropsToStyle(props, commonNumericParamValueMapper);

  return {
    ...props,
    style: { ...extractedStyle, ...style },
  };
};
