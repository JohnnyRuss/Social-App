import styled from 'styled-components';
import { small_640 } from '../../../media';

export const SearchBarContainer = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  ${({ flex }) => {
    return flex
      ? `
      flex:${flex};
      justify-content:flex-end;
      `
      : `
      flex:2;
      padding: 0 5rem;
      `;
  }}

  ${small_640({
    padding: '0 3rem',
  })}
`;

export const SearchBarWrapper = styled.div`
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

  ${({ border }) => {
    return border ? `border:1px solid grey` : ``;
  }}
`;

export const IconBox = styled.label`
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
