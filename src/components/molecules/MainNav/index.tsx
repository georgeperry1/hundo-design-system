import React from 'react';
import { ReactSVG } from 'react-svg';

import { MainNavContainer, MainNavWrapper, LogoWrapper } from './styled';

type MainNavProps = {
  logo?: string;
};

const MainNav: React.FC<React.PropsWithChildren<MainNavProps>> = ({ logo, children }) => (
  <MainNavContainer>
    <MainNavWrapper>
      {logo && (
        <LogoWrapper>
          <ReactSVG src={logo} />
        </LogoWrapper>
      )}
      {children}
    </MainNavWrapper>
  </MainNavContainer>
);

export default MainNav;
