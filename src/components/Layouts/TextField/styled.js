import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const TextArea = styled.textarea`
  resize: none;
  border-radius: 2rem;
  border: 1px solid grey;
  outline: none;
  padding: 0 1rem;
  width: 100%;

  &::placeholder {
    font-style: italic;
    padding-top: 0.5rem;
  }
`;

export const PickerBTN = styled.button`
  font-size: 2rem;
  opacity: 0.5;
  cursor: pointer;
`;

export const PickerBox = styled.div`
  position: absolute;
  transform: translateY(-60%);
  right: 0;
`;
