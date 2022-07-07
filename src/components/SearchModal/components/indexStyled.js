import styled from 'styled-components';

export const ModalBox = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 10rem;
  padding-bottom: 1rem;
  background-color: white;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const ContentBox = styled.div`
  margin-top: 7rem;
  padding: 0 1rem;
  width: 26rem;
  max-height: 30rem;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  position: relative;
  ${({ pending }) => (pending ? 'min-height: 5rem;' : '')}
`;

export const Result = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ResultFigure = styled.figure`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const ResultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ResultTitle = styled.h3``;
