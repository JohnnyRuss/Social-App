import styled from 'styled-components';
import { boxShadowBlack, color, flexBox, fontSize, scrollBar } from '../../styles/styled';

export const Container = styled.div`
  position: absolute;
  right: 2rem;
  top: 6rem;
  background: ${color('whiteColor')};
  ${boxShadowBlack()};
  width: 37rem;
  ${flexBox('column')};
  gap: 2rem;
  padding: 1rem;
`;

export const ModalTitle = styled.h1`
  ${fontSize('bigSize')};
`;

export const Message = styled.p`
  font-weight: 500;
  text-align: center;
  ${fontSize('smallSize')};
`;

export const RequestsLists = styled.div`
  ${flexBox('column')};
  gap: 1rem;
  max-height: 60rem;
  ${scrollBar()}
`;
