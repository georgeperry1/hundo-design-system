import React from 'react';

import { ButtonElement, ButtonWrapper, TextElement, ImgElement } from './styled';

export type MainNavItemProps = {
  active?: boolean;
  icon?: string;
  text?: string;
  backgroundColor?: string;
  shadowColor?: string;
};

const MainNavItem: React.FC<MainNavItemProps> = (props) => (
  <ButtonWrapper>
    <ButtonElement {...props}>
      <ImgElement src={props.icon} />
      <TextElement>{props.text}</TextElement>
    </ButtonElement>
  </ButtonWrapper>
);

MainNavItem.defaultProps = {
  active: false,
};

export default MainNavItem;
