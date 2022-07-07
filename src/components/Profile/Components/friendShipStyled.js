import styled from 'styled-components';
import { mediumDesktop_1600, smallDesktop_1280, tabletMedium_880 } from '../../media';
import { color, boxShadowBlack, fontSize } from '../../../styles/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 13rem;
  right: 1rem;
  margin-top: 1rem;
  display: flex;
  gap: 2.5rem;

  ${mediumDesktop_1600({
    bottom: '11em',
    gap: '2rem',
  })};

  ${smallDesktop_1280({
    bottom: '10em',
  })};

  ${tabletMedium_880({
    position: 'relative',
    bottom: '4rem',
    justifyContent: 'center',
  })}
`;

export const BTN = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  ${boxShadowBlack()};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${fontSize('smallSize')};
  font-weight: 600;

  & svg {
    font-size: 2rem;

    ${mediumDesktop_1600({
      fontSize: '1.6rem',
    })}
  }

  ${({ colored }) =>
    colored
      ? `background:${color('blueColor')}; color:${color('whiteColor')}`
      : `background:${color('whiteShadeColor')}`};

  ${mediumDesktop_1600({
    fontSize: '1.2rem',
    padding: '1rem 1.5rem',
  })}
`;
