import { css } from 'styled-components';

export type TypographyDef = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

const display2xl: TypographyDef = {
  fontSize: '4.5rem',
  lineHeight: '5.625rem',
  letterSpacing: '0.02rem',
};

const displayXl: TypographyDef = {
  fontSize: '3.75rem',
  lineHeight: '4.5rem',
  letterSpacing: '0.02rem',
};

const displayLg: TypographyDef = {
  fontSize: '3rem',
  lineHeight: '3.75rem',
  letterSpacing: '0.02rem',
};

const displayMd: TypographyDef = {
  fontSize: '2.25rem',
  lineHeight: '2.75rem',
  letterSpacing: '0.02rem',
};

const displaySm: TypographyDef = {
  fontSize: '1.875rem',
  lineHeight: '2.375rem',
  letterSpacing: '0.02rem',
};

const displayXs: TypographyDef = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  letterSpacing: '0.02rem',
};

const textXl: TypographyDef = {
  fontSize: '1.25rem',
  lineHeight: '1.875rem',
  letterSpacing: '0.02rem',
};

const textLg: TypographyDef = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  letterSpacing: '0.02rem',
};

const textMd: TypographyDef = {
  fontSize: '1rem',
  lineHeight: '1.5rem',
  letterSpacing: '0.02rem',
};

const textSm: TypographyDef = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  letterSpacing: '0.02rem',
};

const textXs: TypographyDef = {
  fontSize: '0.75rem',
  lineHeight: '1.125rem',
  letterSpacing: '0.02rem',
};

export const typographyDefs = {
  display2xl,
  displayXl,
  displayLg,
  displayMd,
  displaySm,
  displayXs,
  textXl,
  textLg,
  textMd,
  textSm,
  textXs,
};

export type Typography = keyof typeof typographyDefs;

export const FONT_WEIGHT_MAP: Record<FontWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export const getTextCssBlock = (
  typography: Typography,
  fontWeight: FontWeight,
) => css`
  font-size: ${typographyDefs[typography].fontSize};
  line-height: ${typographyDefs[typography].lineHeight};
  letter-spacing: ${typographyDefs[typography].letterSpacing};
  font-weight: ${FONT_WEIGHT_MAP[fontWeight]};
`;
