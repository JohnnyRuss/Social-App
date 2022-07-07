import styled from 'styled-components';
import { mediumDesktop_1600, smallDesktop_1280, tablet_1000, tabletMedium_880 } from '../media';

export const ContainerBox = styled.div`
  display: flex;
  padding: 0 1.5rem;
`;

// User Events Box
export const UserEventsBox = styled.div`
  flex: 1;
  height: calc(100vh - 6rem);
  max-width: 20rem;
  padding-top: 2rem;
  position: sticky;
  top: 6rem;

  ${tablet_1000({
    display: ({ active }) => (active ? 'flex' : 'none'),
    position: 'absolute',
    right: '0',
    top: ({ position }) => (position ? `${position + 125}px` : '6rem'),
    height: '100vh',
    paddingLeft: '1rem',
    zIndex: '99',
    background: 'white',
    minWidth: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  })}
`;

export const UserEventsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Feed
export const FeedContainer = styled.div`
  flex: 5;
  padding-top: 2rem;
  margin: 0 20rem;

  ${mediumDesktop_1600({
    margin: '0 15rem',
  })}

  ${smallDesktop_1280({
    margin: '0 10rem',
  })}

${tablet_1000({
    margin: '0 5rem',
  })}

${tabletMedium_880({
    margin: '0 3rem',
  })}
`;

// User Right Bar Container
export const UserFriendsBox = styled.div`
  flex: 2;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2rem;
  position: sticky;
  top: 6rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${tabletMedium_880({
    display: 'none',
  })}
`;

// Birth Day
export const BirthdayBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const BirthDayInfo = styled.p`
  align-self: flex-end;
  font-size: 1.2rem;
`;

// Commercial
export const CommercialContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  padding: 2rem;
  aspect-ratio: 2/1;
  background: url('/assets/commercial.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`;

export const CommercialTitle = styled.h3`
  color: white;
  backdrop-filter: blur(1px);
  width: 45%;
  font-size: 2rem;
  text-shadow: 1px 1px black;
`;

// Online Friends
export const OnlineFriendsBox = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

export const OnlineBoxTitle = styled.h3`
  font-size: 2rem;
`;

export const ActiveUserList = styled.ul`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// Active User
export const ActiveUserItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ActiveUserFigure = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    background: green;
    border-radius: 50%;
    border: 1px solid white;
    right: 2px;
    bottom: 0;
  }
`;

export const ActiveUserName = styled.span`
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
`;
