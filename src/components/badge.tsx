import { ColorKey, getColor, PaletteKey } from '@/tokens/color';
import { FontKey, getTextCssBlock } from '@/tokens/typography';
import styled, { css } from 'styled-components';

type BadgeColor = PaletteKey;
type BadgeSize = 'sm' | 'md' | 'lg';

const COLORS: Record<
  BadgeColor,
  {
    textColor: ColorKey;
    backgroundColor: ColorKey;
  }
> = {
  grey: {
    textColor: 'grey-700',
    backgroundColor: 'grey-100',
  },
  brand: {
    textColor: 'brand-700',
    backgroundColor: 'brand-50',
  },
  error: {
    textColor: 'error-700',
    backgroundColor: 'error-50',
  },
  blue: {
    textColor: 'blue-700',
    backgroundColor: 'blue-50',
  },
  pink: {
    textColor: 'pink-700',
    backgroundColor: 'pink-50',
  },
  purple: {
    textColor: 'purple-700',
    backgroundColor: 'purple-50',
  },
  orange: {
    textColor: 'orange-700',
    backgroundColor: 'orange-50',
  },
  warning: {
    textColor: 'warning-700',
    backgroundColor: 'warning-50',
  },
  success: {
    textColor: 'success-700',
    backgroundColor: 'success-50',
  },
  'blue-gray': {
    textColor: 'blue-gray-700',
    backgroundColor: 'blue-gray-50',
  },
  'blue-light': {
    textColor: 'blue-light-700',
    backgroundColor: 'blue-light-50',
  },
  rose: {
    textColor: 'rose-700',
    backgroundColor: 'rose-50',
  },
  indigo: {
    textColor: 'indigo-700',
    backgroundColor: 'indigo-50',
  },
};

const BADGE_SIZE: Record<
  BadgeSize,
  {
    fontKey: FontKey;
    padding: string;
  }
> = {
  sm: {
    fontKey: 'text-xs/medium',
    padding: '2px 8px',
  },
  md: {
    fontKey: 'text-sm/medium',
    padding: '2px 10px',
  },
  lg: {
    fontKey: 'text-sm/medium',
    padding: '4px 12px',
  },
};

const BadgeWrapper = styled.div<{ $color: PaletteKey; $size: BadgeSize }>`
  border-radius: 999px;
  ${({ $color }) => css`
    color: ${getColor(COLORS[$color].textColor)};
    background-color: ${getColor(COLORS[$color].backgroundColor)};
  `}
  ${({ $size }) => css`
    padding: ${BADGE_SIZE[$size].padding};
    ${getTextCssBlock(BADGE_SIZE[$size].fontKey)}
  `}
`;

export type BadgeProps = {
  color: BadgeColor;
  size?: BadgeSize;
  label: string;
};

export const Badge = ({ color, label, size = 'sm' }: BadgeProps) => {
  return (
    <BadgeWrapper $color={color} $size={size}>
      {label}
    </BadgeWrapper>
  );
};
