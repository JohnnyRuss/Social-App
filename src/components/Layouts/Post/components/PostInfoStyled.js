import styled from 'styled-components';
import { flexBox, flexProperty, fontSize } from '../../../../styles/styled';

export const Container = styled.div`
  ${flexBox()};
  ${flexProperty({ justify: 'space-between', align: 'center' })};
  ${fontSize('smallSize')};
  padding: 1rem 2rem 1rem;
  font-weight: 500;

  & svg {
    opacity: 0.5;
  }
`;

export const Reactions = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;
`;

export const ReactionSVG = styled.img`
  min-width: 1.8rem;
  max-width: 1.8rem;

  &:not(:first-child) {
    margin-left: -1rem;
  }
`;

export const SharesAndComments = styled.div`
  ${flexBox()};
  gap: 1rem;
`;

export const Text = styled.span`
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};
`;
