import styled from 'styled-components';

export const UserMenuList = styled.ul`
  border-top: 1px solid grey;
  list-style: none;
  display: flex;
  justify-content: space-around;
  font-size: 1.4rem;
  font-weight: 500;
  padding-top: 1rem;
`;

export const UserMenuListItem = styled.li`
  cursor: pointer;
  padding: 1rem;

  ${({ active }) => {
    return active
      ? `
      border-bottom:2px solid royalblue;
      color:royalblue
      `
      : '';
  }}
`;
