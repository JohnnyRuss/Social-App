import React from 'react';
import { useSelector } from 'react-redux';

import { userFriendsSelector } from '../store/selectors/userSelector';

import { FriendsList } from '../components/Friends';

function AllFriends() {
  const friends = useSelector(userFriendsSelector);

  return <FriendsList friends={friends} />;
}

export default AllFriends;
