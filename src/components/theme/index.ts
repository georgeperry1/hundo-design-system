import { DefaultTheme } from 'styled-components';

interface ThemeColors {
  primary: string;
  secondary: string;
}

interface CustomTheme {
  name?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    colors: ThemeColors;
    fonts: Array<string>;
    space: Array<number>;
    fontSizes: Array<number>;
    radii: Array<number>;
  }
}

export const baseTheme: DefaultTheme = {
  space: [0, 2, 4, 8, 16, 32],
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: [12, 14, 16, 18, 24, 32],
  radii: [0, 2, 4, 8],
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  name: 'light',
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  name: 'dark',
};