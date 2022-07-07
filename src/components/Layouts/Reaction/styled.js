import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, color } from '../../../styles/styled';
import { slideUpReactions } from '../../../styles/styledAnimations';

export const LikeBTN = styled.button`
  position: relative;
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;
  font-weight: inherit;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  & svg {
    display: inline-block;
    opacity: 0.5;
    font-size: inherit;
    transition: transform 0.2s ease-out;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const ReactionsBridge = styled.div`
  position: absolute;
  top: -5rem;
  left: -2rem;
  height: 5rem;
  animation: ${slideUpReactions} 0.2s ease-out forwards;
`;

export const ReactionsContainer = styled.div`
  background: ${color('whiteColor')};
  height: 4rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.3rem;
  padding: 0 1.2rem;
`;

export const ReactionFigure = styled.img`
  transition: transform 0.15s ease-out;

  &:hover {
    transform: scale(1.2);
  }

  ${({ size }) => {
    if (size) return `width:${size}rem`;
    else return 'width:3rem';
  }}
`;
