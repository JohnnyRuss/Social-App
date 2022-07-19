import styled from 'styled-components';
import {
  color,
  boxShadowBlack,
  scrollBar,
  flexBox,
  flexProperty,
  fitImage,
} from '../../../styles/styled';

export const ModalBox = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 10rem;
  padding-bottom: 1rem;
  background: ${color('whiteColor')};
  ${boxShadowBlack()};
`;

export const ContentBox = styled.div`
  margin-top: 7rem;
  padding: 0 1rem;
  width: 26rem;
  max-height: 30rem;
  position: relative;
  ${flexBox('column')};
  gap: 1rem;
  background: ${color('whiteColor')};
  ${scrollBar()};
  ${({ pending }) => (pending ? 'min-height: 5rem;' : '')};
`;

export const Result = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 1rem;
`;

export const ResultFigure = styled.figure`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const ResultImage = styled.img`
  ${fitImage()};
`;

export const ResultTitle = styled.h3``;
