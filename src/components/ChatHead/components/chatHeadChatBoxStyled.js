import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, scrollBar } from '../../../styles/styled';

export const ChatBoxContainer = styled.div`
  ${flexBox('column')};
  gap: 1rem;
  padding: 1rem;
  height: calc(40rem - 4rem);
  ${scrollBar()};
`;

export const MessageBox = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;
  width: auto;
  max-width: 80%;
  ${fontSize('smallerSize')};
  font-weight: 400;

  ${({ active }) => {
    return active
      ? `
    align-self:flex-end;
    `
      : ``;
  }}
`;
