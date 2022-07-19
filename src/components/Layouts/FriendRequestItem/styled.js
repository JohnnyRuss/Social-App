import styled from 'styled-components';
import { flexBox, fitImage, fontSize, color } from '../../../styles/styled';

export const Request = styled.div`
  ${flexBox()};
  gap: 1rem;
`;

export const RequestFigure = styled.figure`
  width: 7rem;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  ${fitImage()}
`;

export const RequestActionsBox = styled.div`
  ${flexBox('column')};
  gap: 1rem;
`;

export const UserName = styled.h3`
  ${fontSize('regullarSize')};

  &:hover {
    text-decoration: underline;
  }
`;

export const BTNBox = styled.div`
  ${flexBox()};
  gap: 1rem;
`;

export const BTN = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  ${fontSize('smallerSize')};
  background: ${color('whiteShadeColor')};

  ${({ confirm }) => {
    if (confirm)
      return `
    background:${color('blueColor')};  
    color:${color('whiteColor')};
    `;
  }};

  &:hover {
    filter: brightness(110%);
  }
`;
