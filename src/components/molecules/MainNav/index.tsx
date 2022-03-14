import React from 'react';
import { ReactSVG } from 'react-svg';
import HundoLogo from '/public/assets/hundo-light.svg';

import { MainNavContainer, MainNavWrapper, LogoWrapper } from './styled';

const MainNav: React.FC = ({ children }) => (
  <MainNavContainer>
    <MainNavWrapper>
      <LogoWrapper>{HundoLogo && <ReactSVG src={HundoLogo} />}</LogoWrapper>
      {children}
    </MainNavWrapper>
  </MainNavContainer>
);

export default MainNav;
