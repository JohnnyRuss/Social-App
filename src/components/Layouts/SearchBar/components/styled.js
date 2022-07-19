import styled from 'styled-components';
import { small_640 } from '../../../media';

export const NavSearchBarContainer = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: 5rem;

  ${small_640({
    padding: '0 3rem',
  })}
`;

export const SearchBarContainer = styled(NavSearchBarContainer)`
  flex: none;
`;

export const NavSearchBar = styled.div`
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2rem;
  border-radius: 2rem;
  overflow: hidden;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 999;
`;

export const SearchBar = styled(NavSearchBar)`
  border: 1px solid grey;
`;

export const SearchBarLabel = styled.label`
  color: black;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  margin-top: 0.2rem;
`;

export const Input = styled.input`
  border: none;
  height: 1.5rem;
  outline: none;
  padding-left: 0.5rem;
  width: 70%;

  &::placeholder {
    font-style: italic;
    font-size: 1.2rem;
  }

  ${small_640({
    display: ({ activeBar }) => (activeBar ? 'block' : 'none'),
  })}
`;
