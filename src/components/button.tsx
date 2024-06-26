import React, { forwardRef } from 'react';
import { ExtractMarginProps, extractMarginPaddingProps } from '@/layout-helper';
import styled, { RuleSet, css } from 'styled-components';
import { getTextCssBlock } from '@/tokens/typography';
import { ColorKey, getColor } from '@/tokens/color';
import { Icon, IconName } from './icon';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'secondary-grey'
  | 'tertiary'
  | 'tertiary-grey'
  | 'destructive-primary'
  | 'destructive-secondary'
  | 'destructive-tertiary';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const BUTTON_SIZE_TO_ICON_SIZE: Record<ButtonSize, number> = {
  sm: 16,
  md: 16,
  lg: 16,
  xl: 20,
  '2xl': 24,
};

const PER_BUTTON_SIZE: Record<ButtonSize, RuleSet> = {
  sm: css`
    ${getTextCssBlock('text-sm/semibold')}
    padding: 10px;
    line-height: ${BUTTON_SIZE_TO_ICON_SIZE.sm}px;
    & > span {
      padding: 0 4px;
    }
    & > svg:first-child:not(:only-child) {
      margin-right: 4px;
    }
    & > svg:last-child:not(:only-child) {
      margin-left: 4px;
    }
  `,
  md: css`
    ${getTextCssBlock('text-sm/semibold')}
    padding: 12px;
    line-height: ${BUTTON_SIZE_TO_ICON_SIZE.md}px;
    & > span {
      padding: 0 4px;
    }
    & > svg:first-child:not(:only-child) {
      margin-right: 4px;
    }
    & > svg:last-child:not(:only-child) {
      margin-left: 4px;
    }
  `,
  lg: css`
    ${getTextCssBlock('text-md/semibold')}
    line-height: ${BUTTON_SIZE_TO_ICON_SIZE.lg}px;
    padding: 14px;
    & > span {
      padding: 0 4px;
    }
    & > svg:first-child:not(:only-child) {
      margin-right: 4px;
    }
    & > svg:last-child:not(:only-child) {
      margin-left: 4px;
    }
  `,
  xl: css`
    ${getTextCssBlock('text-md/semibold')}
    line-height: ${BUTTON_SIZE_TO_ICON_SIZE.xl}px;
    padding: 14px;
    & > span {
      padding: 0 4px;
    }
    & > svg:first-child:not(:only-child) {
      margin-right: 4px;
    }
    & > svg:last-child:not(:only-child) {
      margin-left: 4px;
    }
  `,
  '2xl': css`
    ${getTextCssBlock('text-lg/semibold')}
    line-height: ${BUTTON_SIZE_TO_ICON_SIZE['2xl']}px;
    padding: 16px;
    & > span {
      padding: 0 14px;
    }
    & > svg:first-child:not(:only-child) {
      margin-left: 14px;
    }
    & > svg:last-child:not(:only-child) {
      margin-right: 14px;
    }
  `,
};

const getOutlineCss = (color: ColorKey) => css`
  outline-width: 4px;
  outline-style: solid;
  outline-color: ${getColor(color)};
`;

const PER_BUTTON_TYPE: Record<ButtonType, RuleSet> = {
  primary: css`
    background-color: ${getColor('brand-600')};
    color: white;

    &:hover {
      background-color: ${getColor('brand-700')};
    }
    &:active {
      background-color: ${getColor('brand-600')};
      ${getOutlineCss('brand-100')}
    }
    &:disabled {
      background-color: ${getColor('brand-200')};
    }
  `,
  secondary: css`
    color: ${getColor('brand-700')};
    background-color: ${getColor('brand-50')};
    &:hover {
      background-color: ${getColor('brand-100')};
    }
    &:active {
      background-color: ${getColor('brand-50')};
      ${getOutlineCss('brand-100')}
    }
    &:disabled {
      color: ${getColor('brand-300')};
      background-color: ${getColor('brand-25')};
    }
  `,
  'secondary-grey': css`
    color: ${getColor('grey-700')};
    background-color: ${getColor('white')};
    box-shadow: inset 0 0 0 1px ${getColor('grey-300')};
    &:hover {
      background-color: ${getColor('grey-50')};
    }
    &:active {
      background-color: ${getColor('white')};
      ${getOutlineCss('grey-100')}
    }
    &:disabled {
      color: ${getColor('grey-300')};
      background-color: ${getColor('white')};
      box-shadow: inset 0 0 0 1px ${getColor('grey-200')};
    }
  `,
  tertiary: css`
    color: ${getColor('brand-700')};
    &:hover {
      background-color: ${getColor('brand-50')};
    }
    &:active {
      background-color: ${getColor('white')};
    }
    &:disabled {
      color: ${getColor('grey-300')};
      background-color: ${getColor('white')};
    }
  `,
  'tertiary-grey': css`
    color: ${getColor('grey-600')};
  `,
  'destructive-primary': css`
    color: ${getColor('white')};
    background-color: ${getColor('error-600')};
    &:hover {
      background-color: ${getColor('error-700')};
    }
    &:active {
      background-color: ${getColor('error-600')};
      ${getOutlineCss('error-100')}
    }
    &:disabled {
      background-color: ${getColor('error-200')};
    }
  `,
  'destructive-secondary': css`
    color: ${getColor('error-700')};
    background-color: ${getColor('error-50')};
    &:hover {
      background-color: ${getColor('error-100')};
    }
    &:active {
      background-color: ${getColor('error-50')};
      ${getOutlineCss('error-100')}
    }
    &:disabled {
      color: ${getColor('error-300')};
      background-color: ${getColor('error-25')};
    }
  `,
  'destructive-tertiary': css`
    color: ${getColor('error-700')};
    box-shadow: inset 0 0 0 1px ${getColor('error-300')};
    background-color: ${getColor('white')};
    &:hover {
      background-color: ${getColor('error-50')};
    }
    &:active {
      background-color: ${getColor('white')};
      ${getOutlineCss('error-100')}
    }
    &:disabled {
      color: ${getColor('error-300')};
      background-color: ${getColor('white')};
    }
  `,
};

const ButtonBase = styled.button<{
  $buttonType: ButtonType;
  $buttonSize: ButtonSize;
}>`
  border-radius: 8px;
  display: inline-flex;

  outline-width: 0;
  outline-color: transparent;
  transition-timing-function: ease-in;
  transition:
    // outline-color 0.15s,
    outline-width 0.15s,
    background-color 0.15s;

  &:disabled {
    pointer-events: none;
  }

  ${({ $buttonSize }) => PER_BUTTON_SIZE[$buttonSize]}
  ${({ $buttonType }) => PER_BUTTON_TYPE[$buttonType]}
`;

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
  buttonSize?: ButtonSize;
  buttonType?: ButtonType;
  iconName?: IconName;
  endIconName?: IconName;
} & ExtractMarginProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      iconName,
      endIconName,
      buttonSize = 'md',
      buttonType = 'primary',
      isDisabled,
      ...props
    },
    ref,
  ) => {
    const extractedProps = extractMarginPaddingProps(props);
    return (
      <ButtonBase
        ref={ref}
        disabled={isDisabled}
        $buttonSize={buttonSize}
        $buttonType={buttonType}
        {...extractedProps}
      >
        {iconName && (
          <Icon
            iconName={iconName}
            size={BUTTON_SIZE_TO_ICON_SIZE[buttonSize]}
          />
        )}
        {children && <span>{children}</span>}
        {endIconName && (
          <Icon
            iconName={endIconName}
            size={BUTTON_SIZE_TO_ICON_SIZE[buttonSize]}
          />
        )}
      </ButtonBase>
    );
  },
);
