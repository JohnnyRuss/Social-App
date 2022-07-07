import styled from 'styled-components';
import { largeDesktop_1920, mediumDesktop_1600, smallDesktop_1280, tablet_1000 } from '../../media';

export const Container = styled.figure`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  border-radius: ${({ radius }) => (radius ? radius : '')};
  aspect-ratio: ${({ ratio }) => (ratio ? ratio : '')};
  position: ${({ position }) => (position ? position : 'initial')};
  overflow: hidden;
  ${largeDesktop_1920({
    width: ({ breakPoints }) => (breakPoints?.large ? breakPoints.large.dimention[0] : ''),
    height: ({ breakPoints }) => (breakPoints?.large ? breakPoints.large.dimention[1] : ''),
  })}
  ${mediumDesktop_1600({
    width: ({ breakPoints }) => (breakPoints?.medium ? breakPoints.medium.dimention[0] : ''),
    height: ({ breakPoints }) => (breakPoints?.medium ? breakPoints.medium.dimention[1] : ''),
  })}
  ${smallDesktop_1280({
    width: ({ breakPoints }) => (breakPoints?.small ? breakPoints.small.dimention[0] : ''),
    height: ({ breakPoints }) => (breakPoints?.small ? breakPoints.small.dimention[1] : ''),
  })}
  ${tablet_1000({
    width: ({ breakPoints }) => (breakPoints?.tablet ? breakPoints.tablet.dimention[0] : ''),
    height: ({ breakPoints }) => (breakPoints?.tablet ? breakPoints.tablet.dimention[1] : ''),
  })}
`;

export const Img = styled.img`
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
