import { useState } from 'react';

import { useForeignUser } from '../../../hooks';

import { Friend } from './friendsListStyled';
import { FriendsListImage, FriendsListUserName, FriendsListOptBTN } from './';

function FriendFigure({ friend }) {
  const [activeOptions, setActiveOptions] = useState(false);
  const { foreignUser } = useForeignUser();

  return (
    <Friend>
      <FriendsListImage friend={friend} />
      <FriendsListUserName friend={friend} />
      {!foreignUser && (
        <FriendsListOptBTN activeOptions={activeOptions} setActiveOptions={setActiveOptions} />
      )}
    </Friend>
  );
}

export default FriendFigure;
