import styled from 'styled-components';

import { smallDesktop_1280, tablet_1000, tabletMedium_880, small_640 } from '../../media';

export const ProfileContainer = styled.div`
  position: relative;
  width: 70%;
  min-height: 90vh;
  margin: 0 auto;
  ${smallDesktop_1280({
    width: '80%',
  })}

  ${tablet_1000({
    width: '100%',
  })}
`;

export const UserCoverContainer = styled.div`
  position: relative;
`;

export const LandingContainerBox = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 5rem;

  ${tablet_1000({
    width: '80%',
    margin: '0 auto',
    marginTop: '4rem',
  })}

  ${tabletMedium_880({
    flexDirection: 'column',
  })}

  ${small_640({
    width: '100%',
    padding: '0 1rem',
  })}
`;
