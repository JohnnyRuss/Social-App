import styled from 'styled-components';
import {
  flexBox,
  flexProperty,
  fontSize,
  color,
  fitImage,
  scrollBar,
} from '../../../styles/styled';

export const MinimisedChatHeadContainer = styled.div`
  position: fixed;
  z-index: 998;
  right: 1rem;
  bottom: 2rem;
  ${flexBox('column')};
  ${flexProperty({ align: 'center' })};
  gap: 1rem;
  min-width: 5rem;
  min-height: 5rem;
  padding-top: 5rem;
`;

export const MinimizedOptionsBTN = styled.button`
  width: 4rem;
  height: 4rem;
  ${flexBox()};
  ${flexProperty({ align: 'center', justify: 'center' })};
  border-radius: 50%;
  ${fontSize('largeSize')};
  background: white;
  color: ${color('darkGreyColor')};
  position: relative;
  box-shadow: 0px 0px 5px;
  cursor: pointer;
`;

export const OptionsList = styled.ul`
  background: white;
  position: absolute;
  top: -7.8rem;
  left: -20rem;
  ${flexBox('column')};
  ${flexProperty()};
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  list-style: none;
  ${fontSize('smallSize')};
  width: 25rem;
  box-shadow: 0px 0px 5px;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    transform: rotateZ(45deg);
    background: white;
    box-shadow: 0px 0px 5px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0rem;
    right: 1rem;
    width: 4rem;
    height: 2rem;
    z-index: 1;
    background: white;
  }
`;

export const OptionsListItem = styled.li`
  ${flexBox()};
  ${flexProperty({ align: 'center' })};
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 1;

  & svg {
    font-size: 1.8rem;
  }
`;

export const MinimisedChatHead = styled.figure`
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:hover {
    & svg {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  ${fitImage()};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

export const CloseBTN = styled.button`
  ${fontSize('regullarSize')};
  position: absolute;
  right: 0;
  top: 0;
  ${flexBox()};
  cursor: pointer;

  & svg {
    border-radius: 50%;
    opacity: 0;
    background: white;
    transition: opacity 0.1s ease;
  }
`;

export const ExtraMinimisedChatHeadsContainer = styled.div`
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`;

export const ExtraMinimisedChatHeadsModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.3rem;
  background: rgba(0, 0, 0, 0.5);
  color: ${color('whiteColor')};
  ${flexBox()};
  ${flexProperty({ align: 'center', justify: 'center' })};
  border-radius: 50%;
  ${fontSize('smallerSize')};
`;

export const ExtraMinimisedChatHeadsModalBridge = styled.div`
  position: absolute;
  left: -340%;
  top: -35%;
  width: 15em;
`;

export const ExtraMinimisedChatHeadsModalList = styled.div`
  width: 16rem;
  max-height: 8rem;
  ${flexBox('column')};
  gap: 0.5rem;
  color: ${color('darkGreyColor')};
  box-shadow: 0px 0px 1px;
  padding: 0.5rem;
  background: ${color('whiteColor')};
  border-radius: 0.5rem;
  ${scrollBar()};
`;

export const ExtraMinimisedChatHeadsModalListItem = styled.div`
  ${flexBox()};
  ${flexProperty({ align: 'center', justify: 'space-between' })};

  & svg {
    opacity: 0;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export const CloseExtraMinimisedChatHeadBTN = styled.button`
  cursor: pointer;
`;

export const Text = styled.p``;
