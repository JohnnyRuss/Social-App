import styled from 'styled-components';
import { flexBox, flexProperty, fitImage, color, fontSize } from '../../../styles/styled';

export const ChatHeadBox = styled.div`
  ${flexBox('column')};
  height: 40rem;
  width: 30rem;
  box-shadow: 0px 0px 1px;
  background: white;
`;

export const ChatHeading = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  height: 4rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  ${fontSize('smallSize')};
  border-bottom: 1px solid grey;
`;

export const ChatHeadingIdentifier = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 1rem;
`;

export const Image = styled.img`
  ${fitImage()};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;

export const OptBTN = styled.button`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  cursor: pointer;
`;

export const Text = styled.p``;

export const ChatHeadingActionsBox = styled.div`
  ${flexBox()};
  gap: 1rem;
  margin-left: auto;
`;

export const ActionBTN = styled.button`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};

  & svg {
    display: block;
    cursor: pointer;
    color: ${color('blueColor')};
  }

  ${({ minimise }) => {
    return minimise
      ? `
    margin-bottom:1.5rem;
    `
      : ``;
  }}

  ${({ size }) => {
    return size
      ? `
      font-size:${size}rem;
      `
      : `font-size:1.8rem`;
  }}
`;
