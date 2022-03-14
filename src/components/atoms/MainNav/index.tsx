import React from 'react';

import Logo from '../../../assets/hundo-light.svg';

import { MainNavContainer, MainNavWrapper, LogoImage } from './styled';

const MainNav: React.FC = ({ children }) => (
  <MainNavContainer>
    <MainNavWrapper>
      <LogoImage src={Logo} />
      {children}
    </MainNavWrapper>
  </MainNavContainer>
);

export default MainNav;
