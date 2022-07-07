import styled from 'styled-components';
import { small_640 } from '../../media';

export const CoverImageBox = styled.div`
  width: 100%;
  aspect-ratio: 3/1;
  position: relative;
  cursor: pointer;

  ${small_640({
    aspectRatio: '4/2',
  })}
`;

export const ChangeCover = styled.label`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  color: grey;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
