import styled from 'styled-components';
import { flexBox, flexProperty, fontSize, fitImage } from '../../../styles/styled';

export const FriendsContainer = styled.div`
  margin: 5rem 0 3rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5rem;
  row-gap: 2.5rem;
`;

export const Friend = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 1rem;
`;

export const ImageBox = styled.figure`
  width: 7rem;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Image = styled.img`
  ${fitImage()};
`;

export const FriendInfo = styled.div`
  ${flexBox('column')};
  gap: 0.5rem;
  padding-top: 1rem;
  height: 100%;
`;

export const UserName = styled.h3`
  ${fontSize('smallSize')};

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p``;

export const OptBTN = styled.button`
  margin-left: auto;
  ${fontSize('bigSize')};
  cursor: pointer;
  position: relative;
`;

export const ModalBox = styled.div`
  ${fontSize('smallSize')};
  width: 11rem;
`;

export const ModalBoxOptionItem = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;
`;

export const IconBox = styled.span`
  ${flexBox()};
  ${flexProperty({ align: 'center', justify: 'center' })};
  ${fontSize('bigSize')};
`;
