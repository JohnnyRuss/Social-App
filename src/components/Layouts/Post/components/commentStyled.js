import styled from 'styled-components';
import { flexBox, fontSize } from '../../../../styles/styled';

export const CommentEl = styled.div`
  ${flexBox('column')};
`;

export const ShowRepliesBTN = styled.button`
  margin: 0 auto;
  margin-top: 0.5rem;
  font-weight: 600;
  ${fontSize('smallerSize')};
  cursor: pointer;
`;
