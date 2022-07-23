import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, color, boxShadowBlack } from '../../../styles/styled';

export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5rem;
`;

export const InfoBlockContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0 0 3rem;
`;

export const Message = styled.p`
  ${flexBox()};
  ${flexProperty({ justify: 'flex-start', align: 'center' })};
  gap: 1rem;
  ${fontSize('smallSize')};

  &::first-letter {
    text-transform: capitalize;
  }

  & svg {
    ${fontSize('largeSize')};
    color: ${color('lightGreyColor')};
  }
`;
