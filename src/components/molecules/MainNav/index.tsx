import React, { Component } from 'react';

import { MainNavContainer, MainNavWrapper, LogoWrapper } from './styled';

type MainNavProps = {
  Logo?: typeof Component;
};

const MainNav: React.FC<React.PropsWithChildren<MainNavProps>> = ({ Logo, children }) => (
  <MainNavContainer>
    <MainNavWrapper>
      {Logo && (
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      )}
      {children}
    </MainNavWrapper>
  </MainNavContainer>
);

export default MainNav;
