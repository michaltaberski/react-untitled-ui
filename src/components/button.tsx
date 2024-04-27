import React, { forwardRef } from 'react';
import { ExtractMarginProps, extractMarginPaddingProps } from '@/layout-helper';
import styled, { RuleSet, css } from 'styled-components';
import { getTextCssBlock } from '@/tokens/typography';
import { ColorKey, getColor } from '@/tokens/color';

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

const PER_BUTTON_SIZE: Record<ButtonSize, RuleSet> = {
  sm: css`
    ${getTextCssBlock('text-sm/semibold')}
    padding: 8px 14px;
  `,
  md: css`
    ${getTextCssBlock('text-sm/semibold')}
    padding: 10px 16px;
  `,
  lg: css`
    ${getTextCssBlock('text-md/semibold')}
    padding: 10px 18px;
  `,
  xl: css`
    ${getTextCssBlock('text-md/semibold')}
    padding: 12px 20px;
  `,
  '2xl': css`
    ${getTextCssBlock('text-lg/semibold')}
    padding: 16px 28px;
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
    border: 1px solid;
    border-color: ${getColor('grey-300')};
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
      border-color: ${getColor('grey-200')};
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
    border: 1px solid;
    border-color: ${getColor('error-300')};
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
} & ExtractMarginProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
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
        {children}
      </ButtonBase>
    );
  },
);
