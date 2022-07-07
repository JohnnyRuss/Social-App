import styled from 'styled-components';
import { mediumDesktop_1600, smallDesktop_1280, tablet_1000, tabletMedium_880 } from '../../media';

export const ProfileImageBox = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid white;
  transform: translate(15%, -35%);
  position: relative;
  cursor: pointer;

  ${mediumDesktop_1600({
    transform: 'translate(20%, -45%)',
  })}

  ${tabletMedium_880({
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, -45%)',
  })}
`;

export const ChangeProfile = styled.label`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  background: white;
  color: grey;
  border-radius: 50%;
  border: 1px solid grey;
  cursor: pointer;

  ${mediumDesktop_1600({
    right: '0.5rem',
  })}

  ${smallDesktop_1280({
    width: '3.5rem',
    height: '3.5rem',
  })}

${tablet_1000({
    bottom: '0.5rem',
    width: '3rem',
    height: '3rem',
  })}
`;

export const Input = styled.input`
  display: none;
`;
