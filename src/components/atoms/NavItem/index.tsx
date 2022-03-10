import React, { ReactChild } from 'react';

import { ButtonElement, ButtonWrapper, TextElement, ImgElement } from './styled';

export type NavItemProps = {
  active?: boolean;
  icon?: string;
  text?: string;
  backgroundColor?: string;
  shadowColor?: string;
};

const NavItem: React.FC<NavItemProps> = (props) => (
  <ButtonWrapper>
    <ButtonElement {...props}>
      <ImgElement src={props.icon} />
      <TextElement>{props.text}</TextElement>
    </ButtonElement>
  </ButtonWrapper>
);

export default NavItem;
