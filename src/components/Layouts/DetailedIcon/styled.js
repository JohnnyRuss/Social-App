import styled from 'styled-components';
import { tablet_1000 } from '../../media';

export const ListItem = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : '1rem')};
  font-size: ${({ size }) => (size ? size : '1.6rem')};
  cursor: pointer;

  ${tablet_1000({
    fontSize: ({ size, breakPoints }) =>
      size && breakPoints?.tablet
        ? `${Number(size.replace('rem', '')) - breakPoints.tablet.size}rem`
        : '',
  })}

  & svg {
    color: ${({ color }) => (color ? color : '#2a2a2a99')};
    font-size: ${({ iconSize }) => (iconSize ? iconSize : 'inherit')};
    ${tablet_1000({
      fontSize: ({ iconSize, breakPoints }) =>
        iconSize && breakPoints?.tablet
          ? `${Number(iconSize.replace('rem', '')) - breakPoints.tablet.iconSize}rem`
          : '',
    })}
  }
`;

export const Caption = styled.span`
  font-weight: inherit;
  font-size: ${({ captionSize }) => (captionSize ? captionSize : 'inherit')};
`;
