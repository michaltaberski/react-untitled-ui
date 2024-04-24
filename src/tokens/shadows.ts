import { css } from 'styled-components';

const shadowXs = {
  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
};
const shadowSm = {
  boxShadow:
    '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
};
const shadowMd = {
  boxShadow:
    'box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
};
const shadowLg = {
  boxShadow:
    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
};
const shadowXl = {
  boxShadow:
    '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
};
const shadow2Xl = {
  boxShadow: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
};
const shadow3Xl = {
  boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
};

export const shadows = {
  'shadow-xs': shadowXs,
  'shadow-sm': shadowSm,
  'shadow-md': shadowMd,
  'shadow-lg': shadowLg,
  'shadow-xl': shadowXl,
  'shadow-2xl': shadow2Xl,
  'shadow-3xl': shadow3Xl,
};

export type ShadowKey = keyof typeof shadows;

export const getShadowCssBlock = (shadowKey: ShadowKey) => {
  return css`
    box-shadow: ${shadows[shadowKey].boxShadow};
  `;
};
