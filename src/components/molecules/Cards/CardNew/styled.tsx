import styled from 'styled-components';

import breakpoints from '../../../../utils/breakpoints';

export const CardWrapper = styled.div`
  margin: 0 10px 40px 0;
  width: 100%;
  max-width: 328px;
  position: relative;
  box-shadow: 0.5px 0.5px 0px black, 1px 1px 0px black, 1.5px 1.5px 0px black, 2px 2px 0px black, 2.5px 2.5px 0px black,
    3px 3px 0px black, 3.5px 3.5px 0px black, 4px 4px 0px black, 4.5px 4.5px 0px black, 5px 5px 0px black,
    5.5px 5.5px 0px black, 6px 6px 0px black, 6.5px 6.5px 0px black, 7px 7px 0px black, 7.5px 7.5px 0px black,
    8px 8px 0px black, 8.5px 8.5px 0px black, 9px 9px 0px black, 9.5px 9.5px 0px black, 10px 10px 0px black;

  @media ${breakpoints.l} {
    margin: 0 40px 40px 0;
    width: calc(calc(100% / 3) - 40px);
  }

  @media ${breakpoints.m} {
    margin: 0 40px 40px 0;
    width: calc(calc(100% / 2) - 40px);
  }
`;

export const Banner = styled.div``;

export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid 2px black;
  z-index: 1;
  position: relative;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 40%;
`;

export const Content = styled.div`
  width: 100%;
  height: 60%;
  padding: 12px;
`;

export const DropShadow = styled.div`
  height: calc(100% - 3px);
  width: calc(100% - 3px);
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: 0;
  box-shadow: 0.5px 0.5px 0px #e0e0e0, 1px 1px 0px #e0e0e0, 1.5px 1.5px 0px #e0e0e0, 2px 2px 0px #e0e0e0,
    2.5px 2.5px 0px #e0e0e0, 3px 3px 0px #e0e0e0, 3.5px 3.5px 0px #e0e0e0, 4px 4px 0px #e0e0e0, 4.5px 4.5px 0px #e0e0e0,
    5px 5px 0px #e0e0e0, 5.5px 5.5px 0px #e0e0e0, 6px 6px 0px #e0e0e0, 6.5px 6.5px 0px #e0e0e0, 7px 7px 0px #e0e0e0,
    7.5px 7.5px 0px #e0e0e0, 8px 8px 0px #e0e0e0, 8.5px 8.5px 0px #e0e0e0, 9px 9px 0px #e0e0e0, 9.5px 9.5px 0px #e0e0e0,
    10px 10px 0px #e0e0e0, 10.5px 10.5px 0px #e0e0e0, 11px 11px 0px #e0e0e0, 11.5px 11.5px 0px #e0e0e0,
    12px 12px 0px #e0e0e0;
`;
