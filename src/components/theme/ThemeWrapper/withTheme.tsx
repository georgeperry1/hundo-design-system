import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../themes';

export function withTheme<P>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  const ComponentWithTheme = (props: P) => {
    return (
      <ThemeProvider theme={lightTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
  return ComponentWithTheme;
}
export default withTheme;
