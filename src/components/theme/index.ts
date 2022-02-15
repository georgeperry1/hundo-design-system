import { DefaultTheme } from 'styled-components';

interface ThemeColors {
  fullBlack: string;
  fullWhite: string;
  offBlack: string;
  offWhite: string;
  primaryNeon: string;
  primaryPastel: string;

  grey01: string;
  grey02: string;
  grey03: string;
  grey04: string;
  grey05: string;
  grey06: string;

  secondaryNeon01: string;
  secondaryNeon02: string;
  secondaryNeon03: string;
  secondaryNeon04: string;

  secondaryPastel01: string;
  secondaryPastel02: string;
  secondaryPastel03: string;
  secondaryPastel04: string;
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
    breakpoints: {
      [name in 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: number;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  name: 'Default',
  space: [0, 2, 4, 8, 16, 32, 64],
  colors: {
    fullBlack: '#000000',
    fullWhite: '#ffffff',
    offBlack: '#111111',
    offWhite: '#F4F4F4',
    primaryNeon: '#F0F01F',
    primaryPastel: '#EDD10F',
    grey01: '#333333',
    grey02: '#4F4F4F',
    grey03: '#828282',
    grey04: '#BDBDBD',
    grey05: '#E0E0E0',
    grey06: '#F2F2F2',
    secondaryNeon01: '#ED592B',
    secondaryNeon02: '#0DB291',
    secondaryNeon03: '#E04F96',
    secondaryNeon04: '#0042F7',
    secondaryPastel01: '#E5A321',
    secondaryPastel02: '#8CC9A8',
    secondaryPastel03: '#E380B0',
    secondaryPastel04: '#3861D4',
  },
  fonts: ['GeorgioSansHeavy', 'Inter'],
  fontSizes: [12, 14, 16, 18, 24, 32],
  radii: [0, 2, 4, 8],
  breakpoints: {
    xxs: 320,
    xs: 375,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 2560,
  },
};
