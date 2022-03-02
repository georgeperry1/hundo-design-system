import styled from 'styled-components';

type DefaultTabType = {
  active?: boolean;
  hideBorder?: boolean;
  disabled?: boolean;
};

export const DefaultTab = styled.div<DefaultTabType>`
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

export const TabText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fullBlack};
`;
