import styled from 'styled-components';
import { color, flexBox, flexProperty, fontSize } from '../../../styles/styled';

export const ModalHeading = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center', justify: 'space-between' })};
  position: relative;
  z-index: 9;
  ${({ padding }) => (padding ? `padding:0.5rem` : 'padding:0')}
`;

export const CloseBTN = styled.button`
  ${flexBox()};
  cursor: pointer;
  position: absolute;
  top: 0;
  ${({ btnPosition }) => {
    return `
    ${btnPosition}:0;
    transform: translate(${!btnPosition ? '50%' : '-50%'}, 50%);
    `;
  }};
  ${({ btnSize }) => fontSize(btnSize || 'bigSize')};
  ${({ btnColor }) => `color: ${color(btnColor || 'whiteColor')}`}
`;
