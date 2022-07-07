import React from 'react';

import { OnlineFriendsBox, OnlineBoxTitle, ActiveUserList } from './styled';
import ActiveUser from './ActiveUser';

function OnlineFriends({ data }) {
  return (
    <OnlineFriendsBox>
      <OnlineBoxTitle>Friends Online</OnlineBoxTitle>
      <ActiveUserList>
        {data.map((user, i) => (
          <ActiveUser
            key={`${user.username} :${i}`}
            userName={user.username}
            src={user.profileImg}
          />
        ))}
      </ActiveUserList>
    </OnlineFriendsBox>
  );
}

export default OnlineFriends;
