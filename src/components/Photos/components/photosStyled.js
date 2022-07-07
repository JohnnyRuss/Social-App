import styled from 'styled-components';
import { gridAutoFill, fitImage } from '../../../styles/styled';

export const ContainerBox = styled.div`
  width: 100%;
`;

export const PhotosBox = styled.div`
  ${gridAutoFill({ min: '14rem' })};
  gap: 1rem;
  margin: 3rem 0 2rem 0;
  position: relative;
`;

export const Photo = styled.img`
  ${fitImage()};
  aspect-ratio: 1/1;
  border-radius: 1rem;
  cursor: pointer;
`;
