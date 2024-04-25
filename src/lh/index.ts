import { omitBy } from 'lodash';
import React from 'react';

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

type ParamValue = number;

export type ExtractProps = {
  [K in ParamKey<'m'> | ParamKey<'p'>]?: ParamValue;
};

export const omitEmptyValues = (obj: object) => {
  return omitBy(
    obj,
    value => value === '' || value === undefined || value === null,
  );
};

export const propsMerge = <TParamType extends SupportedParamType>(
  props: {
    [K in ParamKey<SupportedParamType>]?: ParamValue;
  },
  paramType: TParamType,
): Partial<{
  [K in CssParamKey<TParamType>]: ParamValue;
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
    [K in CssParamKey<TParamType>]: ParamValue;
  }>,
  mapFn: (paramValue: ParamValue) => string | number = x => x,
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
      mapFn(value as ParamValue),
    ]),
  );
};

export const mapPropsToStyle = <T extends object>(
  props: T,
  mapFn?: (paramValue: ParamValue) => string | number,
) => {
  const marginProps = mapToCss(propsMerge(props, 'm'), mapFn);
  const paddingProps = mapToCss(propsMerge(props, 'p'), mapFn);
  return { ...marginProps, ...paddingProps };
};

export const extractProps = <
  T extends {
    style?: React.CSSProperties;
  },
>(
  props: T,
) => {
  const style = props.style ?? {};
  const extractedStyle = mapPropsToStyle(
    props,
    (value: ParamValue) => 8 * value + 'px',
  );

  return {
    ...props,
    style: { ...extractedStyle, ...style },
  };
};
