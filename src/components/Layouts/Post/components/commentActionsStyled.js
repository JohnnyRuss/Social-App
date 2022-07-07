import styled from 'styled-components';
import { flexBox, flexProperty, fontSize } from '../../../../styles/styled';

export const ActionsBox = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 1rem;
  font-weight: 600;
  ${fontSize('smallerSize')};
  padding-left: 5rem;
`;

export const ReplyBTN = styled.button`
  ${flexBox()};
  cursor: pointer;
  font-weight: inherit;

  & svg {
    opacity: 0.5;
  }
`;
