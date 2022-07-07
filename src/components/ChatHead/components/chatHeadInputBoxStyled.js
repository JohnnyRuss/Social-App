import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, color } from '../../../styles/styled';

export const InputBoxContainer = styled.form`
  width: 100%;
  margin-top: auto;
  margin-bottom: 1rem;
  ${flexBox()};
  gap: 1rem;
  padding: 0 1rem 0 0.5rem;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border-radius: 1.5rem;
  padding: 0 1rem;
  padding-top: 0.6rem;
  background: ${color('whiteShadeColor')};
  outline: none;

  &::placeholder {
    ${fontSize('regullarSize')};
  }
`;

export const SentBTN = styled.button`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  ${fontSize('largeSize')};

  & svg {
    display: block;
    cursor: pointer;
    color: ${color('blueColor')};
  }
`;
