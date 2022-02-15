import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

import { defaultTheme } from '../';

type ThemeProps = {
  children: React.ReactChildren;
  theme?: DefaultTheme;
};

const ThemeProvider = ({ children, theme }: ThemeProps): React.ReactElement => (
  <StyledThemeProvider theme={theme ? theme : defaultTheme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
