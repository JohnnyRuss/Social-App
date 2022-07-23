import styled from 'styled-components';
import { flexBox, flexProperty, fontSize } from '../../../styles/styled';

export const Container = styled.div`
  ${flexBox()};
  ${flexProperty({ justify: 'space-between', align: 'center' })};
  width: 100%;
  text-transform: capitalize;
`;

export const HeadingTitle = styled.h3`
  display: inline-block;
  flex: 1;
  ${fontSize('bigSize')};
`;
