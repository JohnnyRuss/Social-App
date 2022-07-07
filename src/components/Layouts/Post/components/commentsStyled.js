import styled from 'styled-components';
import { flexBox, scrollBar } from '../../../../styles/styled';

export const Container = styled.div`
  ${flexBox('column')};
  border-top: 1px solid grey;
  margin-top: 1rem;
  padding: 2rem 2rem 0 1rem;
  ${({ maxHeight }) => {
    return `max-height:${maxHeight}` || '35rem';
  }};
  ${scrollBar({ marginBlockStart: '1rem', width: '0.5rem' })};
`;

export const CommentsList = styled.div`
  ${flexBox('column')};
  gap: 1rem;
  margin-top: 2rem;
`;
