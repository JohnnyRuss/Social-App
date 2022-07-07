import styled from 'styled-components';

export const SideBarContainer = styled.div`
  flex: 1;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem;
`;

export const InfoLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoLinksListItem = styled.li`
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background 0.15s ease;

  ${({ active }) => {
    return active
      ? ` 
        color: royalblue;
        background:rgba(125, 176, 242, 0.3)
      `
      : '';
  }};

  &:hover {
    ${({ active }) => {
      return !active
        ? `
        background: rgba(242, 242, 242, 1);
        `
        : '';
    }}
  }
`;
