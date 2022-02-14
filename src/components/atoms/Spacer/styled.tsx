import styled from 'styled-components';

import { SpacerProps } from './index';

export const SpacerElement = styled.div`
  display: ${({ inline }: SpacerProps) => (inline ? 'inline-block' : 'block')};
  height: ${({ h }: SpacerProps) => (h ? `${h}px` : 0)};
  width: ${({ w }: SpacerProps) => (w ? `${w}px` : 0)};
`;
