import styled from 'styled-components';
import { flexBox, flexProperty, fontSize } from '../../../../styles/styled';

export const Container = styled.div`
  ${flexBox()};
  ${flexProperty({ justify: 'space-between', align: 'center' })};
`;

export const UserIdentifierBox = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 2rem;
`;

export const OptionsBTN = styled.button`
  ${fontSize('bigSize')};
  cursor: pointer;
`;
