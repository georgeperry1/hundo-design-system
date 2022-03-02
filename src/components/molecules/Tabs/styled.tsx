import { CSSProperties } from 'react';
import styled from 'styled-components';

type TabBarProps = {
  hideDivider?: boolean;
  align?: CSSProperties['justifyContent'];
};

export const TabBar = styled.div<TabBarProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme, hideDivider }) => {
    return hideDivider ? theme.colors.fullWhite : theme.colors.grey04;
  }};
`;
