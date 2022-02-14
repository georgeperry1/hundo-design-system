import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from '.';

export const BaseButton = styled.button`
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  height: 48px;
  font-weight: 700;
  outline: none;
  border: 1px solid #000;
  padding: 0 8px;
`;

const Button: React.FC<ButtonProps> = (props) => {
  return <BaseButton {...props} />;
};

export default Button;
