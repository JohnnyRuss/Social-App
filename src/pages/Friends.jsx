import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userFriendsSelector } from '../store/selectors/userSelector';

import {
  Container,
  SearchAndHeading,
  Navigation,
  FriendsList,
} from '../components/Friends';

function Friends() {
  const friends = useSelector(userFriendsSelector);
  //prettier-ignore
  const candidatePaths = ['allFriends', 'recentlyAddedFriends', 'upComingBirthdays', 'muntualFriends'];
  const { pathname } = useLocation();
  const possibleRoute = candidatePaths.some((route) => pathname.includes(route));

  return (
    <Container>
      <SearchAndHeading />
      <Navigation />
      {possibleRoute && <Outlet />}
      {!possibleRoute && <FriendsList friends={friends} />}
    </Container>
  );
}

export default Friends;
