import React from 'react';
import { ReactSVG } from 'react-svg';

import { MainNavContainer, MainNavWrapper, LogoWrapper } from './styled';

const MainNav: React.FC = ({ children }) => (
  <MainNavContainer>
    <MainNavWrapper>
      <LogoWrapper>
        <ReactSVG src="../../../assets/hundo-light.svg" />
      </LogoWrapper>
      {children}
    </MainNavWrapper>
  </MainNavContainer>
);

export default MainNav;
