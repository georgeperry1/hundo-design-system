import React, { ReactNode } from 'react';

import { CardWrapper, Thumbnail, Content, DropShadow, Banner } from './styled';

export type CardProps = {
  name: string;
  thumbnail: string;
  banner: ReactNode;
};

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ name, thumbnail, children, banner }) => {
  return (
    <CardWrapper>
      <Thumbnail src={thumbnail} alt={name} />
      <Banner>{banner}</Banner>
      <Content>{children}</Content>
      <DropShadow />
    </CardWrapper>
  );
};

export default Card;
