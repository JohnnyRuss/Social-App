import styled from 'styled-components';
import { flexBox } from '../../../../styles/styled';
import { smallDesktop_1280 } from '../../../media';

export const InputBox = styled.div`
  ${flexBox()};
  gap: 2rem;
  padding-bottom: 1rem;
`;

export const TextArea = styled.input`
  width: 90%;
  max-height: 4rem;
  border-radius: 2rem;
  outline: none;
  border: 1px solid grey;
  padding: 0.5rem 1rem;
  margin-right: 3rem;
  ${smallDesktop_1280({
    marginRight: '0',
  })}
`;

export const Input = styled.input`
  display: none;
`;
