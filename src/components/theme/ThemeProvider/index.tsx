import React from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

import { defaultTheme } from '../';

type ThemeProps = {
  theme?: DefaultTheme;
};

const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProps>> = ({ children, theme }) => (
  <StyledThemeProvider theme={theme ? theme : defaultTheme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
