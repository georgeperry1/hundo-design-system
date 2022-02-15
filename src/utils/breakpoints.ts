import { defaultTheme } from '../components/theme';

// TODO: Make this dynamic when we have more than one theme
export default {
  xxs: `(min-width: ${defaultTheme.breakpoints.xxs}px)`,
  xs: `(min-width: ${defaultTheme.breakpoints.xs}px)`,
  s: `(min-width: ${defaultTheme.breakpoints.s}px)`,
  m: `(min-width: ${defaultTheme.breakpoints.m}px)`,
  l: `(min-width: ${defaultTheme.breakpoints.l}px)`,
  xl: `(min-width: ${defaultTheme.breakpoints.xl}px)`,
  xxl: `(min-width: ${defaultTheme.breakpoints.xxl}px)`,
};
