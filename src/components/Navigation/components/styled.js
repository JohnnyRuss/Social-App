import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(3, 85, 191, 1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 6rem;
  padding: 0 3rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const IconBox = styled.label`
  color: black;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const BadgeBox = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

export const UserIDE = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 2rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(79, 150, 242, 1);
  }

  & svg {
    margin-bottom: -0.5rem;
  }
`;

export const BurgerBTN = styled.button`
  font-size: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
