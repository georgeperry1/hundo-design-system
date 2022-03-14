import styled from 'styled-components';

import { MainNavItemProps } from '.';

export const ButtonElement = styled.button<MainNavItemProps>`
  width: ${({ active }) => (active ? '100%' : '80%')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#FFFF50')};
  border: none;
  color: ${({ shadowColor }) => (shadowColor ? shadowColor : '#B7B73D')};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.primary};
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(1deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;

  &:focus {
    outline: 0;
  }
  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 190px;
  padding-left: 30px;
`;

export const TextElement = styled.span`
  color: #000000;
`;

export const ImgElement = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
