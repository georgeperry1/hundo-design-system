import React from 'react';
import ThemeProvider from '../components/theme/ThemeProvider';

type ThemeWrapperComponentProps = {
  [key: string]: unknown;
};

interface ThemeWrapperProps {
  TestedComponent: React.FC<any>;
  componentProps?: ThemeWrapperComponentProps;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ TestedComponent, componentProps }: ThemeWrapperProps) => (
  <ThemeProvider>
    <TestedComponent {...componentProps} />
  </ThemeProvider>
);

export default ThemeWrapper;
