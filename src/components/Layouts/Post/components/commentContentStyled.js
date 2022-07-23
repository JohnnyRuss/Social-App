import styled from 'styled-components';
import { smallDesktop_1280 } from '../../../media';

import { flexBox, fontSize, fitImage, color } from '../../../../styles/styled';

export const Comment = styled.div`
  ${flexBox()};
  gap: 1rem;
`;

export const ImageFigure = styled.figure`
  min-width: 4rem;
  max-width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  ${fitImage()}
`;

export const ContentBox = styled.div`
  position: relative;
  width: auto;
  max-width: 80%;
  ${flexBox('column')};
  gap: 0.2rem;
  padding: 0.8rem 4rem 0.8rem 1.2rem;
  border-radius: 1rem;
  background: ${color('whiteShadeColor')};

  ${smallDesktop_1280({
    maxWidth: '100%',
  })}
`;

export const UserName = styled.h3`
  margin-top: 0.5rem;
  ${fontSize('smallSize')}
`;

export const Text = styled.p`
  ${fontSize('smallSize')}
`;
