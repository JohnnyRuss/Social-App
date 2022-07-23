import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, color, boxShadowBlack } from '../../../../styles/styled';

export const InfoBox = styled.div`
  position: relative;
  ${flexBox()};
  ${flexProperty({ justify: 'flex-start', align: 'center' })};
  gap: 1rem;
  ${fontSize('smallSize')};

  & svg {
    ${fontSize('largeSize')};
    color: ${color('lightGreyColor')};
  }
`;

export const Info = styled.p`
  &::first-letter,
  & strong {
    text-transform: capitalize;
  }
`;

export const Message = styled.p`
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Text = styled.span`
  display: block;
  margin-top: 1rem;
`;

export const ModalBox = styled.div`
  margin-left: auto;
`;

export const ModalBTN = styled.button`
  ${flexBox()};
  ${flexProperty({ justify: 'center', align: 'center' })};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: rgba(170, 170, 170, 0.5);
  cursor: pointer;

  & svg {
    color: ${color('darkGreyColor')};
  }
`;

export const ModalWindow = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 4rem;
  ${flexBox('column')};
  ${flexProperty({ justify: 'flex-start', align: 'flex-start' })};
  gap: 0.7rem;
  padding: 1rem 7rem 1rem 1rem;
  border-radius: 0.3rem;
  background: ${color('whiteColor')};
  ${boxShadowBlack()}
`;

export const OptionBTN = styled.button`
  ${flexBox()};
  ${flexProperty({ justify: 'flex-start', align: 'center' })};
  gap: 0.5rem;
  text-transform: capitalize;
  cursor: pointer;

  & svg {
    ${fontSize('bigSize')};
  }
`;
