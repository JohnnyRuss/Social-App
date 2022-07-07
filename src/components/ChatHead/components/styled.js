import styled from 'styled-components';
import { flexBox } from '../../../styles/styled';

export const ChatHeadContainer = styled.div`
  position: fixed;
  z-index: 998;
  right: 8rem;
  bottom: 0;
  ${flexBox()};
  gap: 1rem;
`;
