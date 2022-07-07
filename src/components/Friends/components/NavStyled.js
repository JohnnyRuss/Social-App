import styled from 'styled-components';
import { flexBox, flexProperty, fontSize } from '../../../styles/styled';

export const Nav = styled.nav`
  margin-top: 3rem;
`;

export const NavList = styled.ul`
  list-style: none;
  ${flexBox()};
  ${flexProperty({ justify: 'space-between' })};
  ${fontSize('smallSize')};
  height: 3rem;
  padding: 0 1.5rem;
  font-weight: 500;
`;

export const NavListItem = styled.li`
  height: 100%;

  & a {
    ${flexBox()};
    ${flexProperty({ justify: 'center', align: 'center' })};
    height: 100%;
    padding: 0 1rem;
  }
`;
