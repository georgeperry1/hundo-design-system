import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { TabVariant } from './types';

type TabBarProps = {
  hideDivider?: boolean;
  align?: CSSProperties['justifyContent'];
  variant?: string;
};

const BaseTabBar = styled.div<TabBarProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
`;

const PrimaryTabBar = styled(BaseTabBar)<TabBarProps>`
  background: ${({ theme }) => theme.colors.fullWhite};
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme, hideDivider }) => {
    return hideDivider ? theme.colors.fullWhite : theme.colors.grey04;
  }};
`;

const SecondaryTabBar = styled(BaseTabBar)<TabBarProps>`
  background: transparent;
`;

const IconTabs = styled(BaseTabBar)<TabBarProps>`
  background: ${({ theme }) => theme.colors.offWhite};
`;

export const TabBar: React.FC<React.PropsWithChildren<TabBarProps>> = ({ hideDivider, align, variant, children }) => {
  if (variant === TabVariant.Secondary) {
    return <SecondaryTabBar align={align}>{children}</SecondaryTabBar>;
  }

  if (variant === TabVariant.Icon) {
    return <IconTabs align={align}>{children}</IconTabs>;
  }

  return (
    <PrimaryTabBar
      hideDivider={hideDivider}
      align={align}
      role="tablist"
      aria-label="List of Tabs"
      aria-orientation="horizontal"
    >
      {children}
    </PrimaryTabBar>
  );
};
