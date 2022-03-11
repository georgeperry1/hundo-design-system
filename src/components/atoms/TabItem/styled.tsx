import React from 'react';
import styled from 'styled-components';

import { TabVariant } from '../..//molecules/Tabs/types';

type DefaultTabType = {
  active?: boolean;
  hideBorder?: boolean;
  disabled?: boolean;
  variant?: TabVariant;
  onClick: () => void;
};

type DefaultTabTextType = {
  variant?: TabVariant;
};

const PrimaryTab = styled.div<DefaultTabType>`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  min-height: 35px;
  padding: 0 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '40%' : '100%')};
  border-bottom: 4px solid;
  border-bottom-color: ${({ theme, active, hideBorder }) => {
    if (hideBorder) return theme.colors.fullWhite;

    return active ? theme.colors.fullBlack : theme.colors.fullWhite;
  }};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.fullBlack};
  }
`;

const SecondaryTab = styled.div<DefaultTabType>`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '40%' : '100%')};
  border-bottom: 4px solid;
  border-bottom-color: ${({ theme, active, hideBorder }) => {
    if (hideBorder) return 'transparent';

    return active ? theme.colors.secondaryNeon02 : 'transparent';
  }};
  filter: ${({ active }) => (active ? 'blur(0.5px)' : 'none')};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.secondaryNeon02};
  }
`;

export const TabText = styled.p<DefaultTabTextType>`
  font-family: ${({ theme, variant }) =>
    variant === TabVariant.Primary ? theme.fonts.secondary : theme.fonts.primary};
  font-size: ${({ theme, variant }) => (variant === TabVariant.Primary ? theme.fontSizes[1] : theme.fontSizes[5])};
  font-weight: ${({ variant }) => (variant === TabVariant.Primary ? 500 : 900)};
  line-height: 24px;
  margin: 10px 0;
  color: ${({ theme, variant }) =>
    variant === TabVariant.Primary ? theme.colors.fullBlack : theme.colors.secondaryNeon02};
  text-transform: ${({ variant }) => (variant === TabVariant.Primary ? 'none' : 'uppercase')};
`;

export const Tab: React.FC<React.PropsWithChildren<DefaultTabType>> = ({ children, variant, ...props }) => {
  if (variant === TabVariant.Secondary) {
    return (
      <SecondaryTab variant={variant} {...props}>
        {children}
      </SecondaryTab>
    );
  }

  return (
    <PrimaryTab variant={variant} {...props}>
      {children}
    </PrimaryTab>
  );
};
