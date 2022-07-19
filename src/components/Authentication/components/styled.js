import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-right: 10%;
`;

export const InputEl = styled.input`
  height: 4rem;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid grey;
  outline: none;
  box-shadow: 0px 0px 2px;

  ${({ error }) => {
    return error
      ? `
      border: 1px solid red;
      `
      : '';
  }}
`;

export const BTN = styled.button`
  background: rgba(3, 85, 191, 1);
  color: white;
  font-weight: 700;
  font-size: 2rem;
  height: 5rem;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;

  & a {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ create }) => {
    return create
      ? `
    background:#04D939;
    background:#26A646;
    `
      : '';
  }}
`;

export const SideBarContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

export const Title = styled.h1`
  color: rgba(3, 85, 191, 1);
  font-size: 5.2rem;
`;

export const Text = styled.p`
  font-size: 2.2rem;
  font-weight: 500;

  ${({ size, align }) => {
    return size
      ? `
    font-size:${size}rem;
    text-align:${align}
    `
      : '';
  }}
`;

export const Error = styled.span`
  color: red;
  font-size: 1.2rem;
  margin: 1rem 0;
  display: inline-block;
  font-weight: 500;
`;
