import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, color, boxShadowBlack } from '../../../styles/styled';

export const OptionsBTN = styled.button`
  justify-self: flex-end;
  ${fontSize('largeSize')};
  cursor: pointer;
  position: relative;
  ${({ showOnHover }) => {
    return showOnHover ? `opacity:0; transition:transform 0.2s esay-out;` : '';
  }};

  ${({ activeHover }) => {
    return activeHover ? `opacity:1` : `opacity:0`;
  }}
`;

export const OptionsList = styled.ul`
  list-style: none;
  position: absolute;
  left: 2rem;
  top: 2.5rem;
  z-index: 9;
  transform: translate(-100%, 0%);
  ${fontSize('regullarSize')};
  ${flexBox('column')};
  ${flexProperty({ column: 'center' })};
  gap: 0.5rem;
  padding: 1rem 8rem 1rem 1rem;
  border-radius: 0.5rem;
  background: ${color('whiteColor')};
  ${boxShadowBlack()};
`;

export const Option = styled.li`
  ${flexBox()};
  ${flexProperty({ justify: 'flex-start', align: 'center' })};
  gap: 0.5rem;

  & svg {
    ${fontSize('bigSize')};
  }
`;
