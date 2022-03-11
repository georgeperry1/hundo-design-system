import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { TabVariant } from './types';

type TabBarProps = {
  hideDivider?: boolean;
  align?: CSSProperties['justifyContent'];
  variant?: TabVariant;
};

const PrimaryTabBar = styled.div<TabBarProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme, hideDivider }) => {
    return hideDivider ? theme.colors.fullWhite : theme.colors.grey04;
  }};
`;

const SecondaryTabBar = styled.div<TabBarProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  background: transparent;
`;

export const TabBar: React.FC<React.PropsWithChildren<TabBarProps>> = ({ hideDivider, align, variant, children }) => {
  if (variant === TabVariant.Secondary) {
    return <SecondaryTabBar align={align}>{children}</SecondaryTabBar>;
  }

  return (
    <PrimaryTabBar hideDivider={hideDivider} align={align}>
      {children}
    </PrimaryTabBar>
  );
};
