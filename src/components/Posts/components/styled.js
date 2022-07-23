import styled from 'styled-components';
import { tablet_1000, tabletMedium_880 } from '../../media';

export const SideBarContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 90vh;
  max-height: 100%;
  min-width: 35rem;
  max-width: 45rem;
  position: sticky;
  top: 8rem;
  margin-bottom: 8rem;
  text-transform: capitalize;

  ${tablet_1000({
    minWidth: '30rem',
  })}

  ${tabletMedium_880({
    position: 'initial',
    order: '1',
    flex: '1',
    width: '100%',
    maxWidth: '100%',
    marginBottom: '4rem',
  })}
`;

export const LandingContainer = styled.div`
  flex: 3;

  ${tabletMedium_880({
    order: '2',
    flex: '1',
  })}
`;
