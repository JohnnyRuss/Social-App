import styled from 'styled-components';
import { flexBox, fitImage, color } from '../../../../styles/styled';

export const Container = styled.div`
  margin: 4rem 0;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const SliderBTN = styled.button`
  font-size: 2.6rem;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  color: white;
  padding: 0 2rem;
  top: 35%;
  height: 30%;
  cursor: pointer;
  ${({ right }) => (right ? `right:0` : '')}
  ${({ left }) => (left ? `left:0` : '')};
  opacity: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ActivePostContainer = styled.div`
  ${flexBox()};
  height: 86vh;
  width: 90vw;
`;

export const ActivePostMediaContainer = styled.figure`
  flex: 2;
  background: ${color('blackColor')};
  position: relative;
`;

export const ActivePostMedia = styled.img`
  ${fitImage({ fit: 'contain' })}
`;

export const ActivePostInfoContainer = styled.div`
  flex: 1;
  ${flexBox('column')};
  padding: 1rem;

  padding-top: 1.5rem;
`;
