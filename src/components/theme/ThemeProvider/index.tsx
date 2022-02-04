import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { lightTheme } from '../themes';

interface Props {
  children: React.ReactNode;
  theme?: DefaultTheme;
}

const ThemeProvider: React.FC<Props> = ({ children, theme }) => {
  if (theme) {
    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
  }
  return <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
