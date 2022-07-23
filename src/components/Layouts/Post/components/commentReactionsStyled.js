import styled from 'styled-components';
import { flexBox, flexProperty, color, boxShadowBlack } from '../../../../styles/styled';

export const Container = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;
  position: absolute;
  right: -2.4rem;
  bottom: -0.5rem;
  background: ${color('whiteColor')};
  padding: 0.2rem 0.7rem;
  border-radius: 1rem;
  ${boxShadowBlack({ opacity: 0.15, spread: '10px', radial: '3px' })};
`;

export const ReactionIcon = styled.img`
  min-width: 1.8rem;
  max-width: 1.8rem;
  &:not(:first-child) {
    margin-left: -1rem;
  }
`;
