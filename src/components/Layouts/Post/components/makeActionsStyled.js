import styled from 'styled-components';
import { flexBox, flexProperty, fontSize } from '../../../../styles/styled';

// Actions
export const Container = styled.div`
  ${flexBox()};
  ${flexProperty({ justify: 'space-between', align: 'center' })};
  ${fontSize('regullarSize')};
  padding-top: 1rem;
  border-top: 1px solid grey;

  & svg {
    ${fontSize('bigSize')}
  }
`;

export const BTN = styled.button``;

export const CommentAndShareContainer = styled.div`
  ${flexBox()};
  gap: 2rem;
`;
