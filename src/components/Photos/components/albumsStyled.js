import styled from 'styled-components';
import { smallDesktop_1280 } from '../../media';
import { gridAutoFill, flexBox, flexProperty, fitImage, fontSize } from '../../../styles/styled';

export const AlbumsBox = styled.div`
  ${gridAutoFill({ min: '15rem' })};
  gap: 2rem;
  margin: 3rem 0;
`;

export const AlbumBox = styled.figure`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  cursor: pointer;
  ${flexBox('column')};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;

  &:hover {
    & h3 {
      text-decoration: underline;
    }
  }
`;

export const AlbumCover = styled.img`
  ${fitImage()};
  border-radius: inherit;
`;

export const AlbumTitle = styled.h3`
  ${fontSize('regullarSize')};
  letter-spacing: 0.5px;
`;

export const Text = styled.span`
  ${fontSize('smallerSize')};
`;
