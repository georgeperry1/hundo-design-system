import React, { Component } from 'react';

import { ButtonElement, ButtonWrapper, TextElement } from './styled';

export type MainNavItemProps = {
  active?: boolean;
  Icon?: typeof Component;
  text?: string;
  backgroundColor?: string;
  shadowColor?: string;
};

const MainNavItem: React.FC<MainNavItemProps> = ({ text, Icon, ...props }) => (
  <ButtonWrapper>
    <ButtonElement {...props}>
      {Icon && <Icon />}
      <TextElement>{text}</TextElement>
    </ButtonElement>
  </ButtonWrapper>
);

MainNavItem.defaultProps = {
  active: false,
};

export default MainNavItem;
