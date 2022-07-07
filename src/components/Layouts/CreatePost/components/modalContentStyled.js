import styled from 'styled-components';
import {
  flexBox,
  flexProperty,
  color,
  fontSize,
  scrollBar,
  fitImage,
} from '../../../../styles/styled';
import { tablet_1000 } from '../../../media';

export const ModalContentBox = styled.div`
  ${flexBox('column')};
  ${flexProperty()};
  gap: 2rem;
  margin-top: 2rem;
  min-width: 45rem;
  max-width: 45rem;
`;

export const Container = styled.div`
  ${flexBox('column')};
  width: 100%;
  max-height: 25rem;
  padding: 0 1rem;
  ${scrollBar()}
`;

export const ModalTextArea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 10rem;
  max-height: 10rem;
  ${scrollBar({ width: '0.7rem' })}
  padding:0 1rem 0 0.5rem;
  outline: none;
  border: none;

  &::placeholder {
    ${fontSize('bigSize')}
  }
`;

export const ShareBTN = styled.button`
  width: 98%;
  padding: 1.2rem 0;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  ${fontSize('smallerSize')};
  background: ${color('blueColor')};
  color: ${color('whiteColor')};
  border-radius: 0.5rem;
  cursor: pointer;

  &:disabled {
    cursor: none;
    opacity: 0.5;
    pointer-events: none;
  }

  ${tablet_1000({
    fontSize: '1.2rem',
    padding: '0.8rem 1.5rem',
  })}
`;

export const Input = styled.input`
  display: none;
`;

export const Figure = styled.figure`
  position: relative;
  margin-top: 1rem;
`;

export const Media = styled.img`
  ${fitImage()};
`;

export const DiscardMediaBTN = styled.button`
  position: absolute;
  transform: translate(-50%, 50%);
  right: 0;
  ${fontSize('bigSize')};
  color: ${color('whiteColor')};
  cursor: pointer;
`;
